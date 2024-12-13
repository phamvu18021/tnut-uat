import { fetchAuth } from "@/ultil/fetchAuth";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  url: string;
  uuid: string;
  divId: string;
  divClass: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  //lấy dữ liệu form từ wordpress
  const type = req?.query?.type || "";
  const api_url = process.env.API_URL || "";
  let url: string = "";
  let uuid: string = "";
  let divId: string = "";
  let divClass: string = "";
  try {
    const responeWordpress = await fetchAuth({
      url: `${api_url}/form`,
      revalidate: 1
    });
    const data: any[] = await responeWordpress.json();
    const htmlString = data?.length > 0 ? data[0]?.acf?.[String(type)] : "";

    const getFormRegex = /GetForm\("([^"]+)", "([^"]+)"\)/;
    const divRegex = /<div id="([^"]+)" class="([^"]+)"/;
    const getFormMatch = htmlString.match(getFormRegex);
    const divMatch = htmlString.match(divRegex);

    if (getFormMatch && divMatch) {
      url = getFormMatch[1];
      uuid = getFormMatch[2];

      divId = divMatch[1];
      divClass = divMatch[2];
    }
  } catch (error) {
    console.log(error);
  }
  if (req.method === "GET") {
    res.status(200).json({
      url,
      uuid,
      divId,
      divClass
    });
  }
}