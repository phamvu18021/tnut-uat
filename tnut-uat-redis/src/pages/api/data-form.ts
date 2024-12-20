import { fetchAuth } from "@/ultil/fetchAuth";
import redis from "@/lib/redis"; // Redis đã được cấu hình
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
  const type = req?.query?.type || "";
  const api_url = process.env.API_URL || "";

  // Key để lưu cache trong Redis
  const redisKey = `wordpress_data_form:${type}`;

  let url: string = "";
  let uuid: string = "";
  let divId: string = "";
  let divClass: string = "";

  try {
    // Kiểm tra cache trong Redis
    let data: any = null;
    const cachedData = await redis.get(redisKey);

    if (cachedData) {
      // Nếu có dữ liệu trong Redis, parse ra
      data = JSON.parse(cachedData);
    } else {
      console.log(`Cache miss for ${redisKey}`);
      // Nếu không có, gọi API WordPress để lấy dữ liệu
      const responseWordpress = await fetch(`${api_url}/form`, {
        next: { revalidate: 600 }
      });
      data = await responseWordpress.json();

      // Lưu dữ liệu vào Redis với TTL là 1 giờ (3600 giây)
      await redis.set(redisKey, JSON.stringify(data), "EX", 3600);
    }

    // Xử lý dữ liệu từ `data`
    const htmlString = data?.length > 0 ? data[0]?.acf?.[String(type)] : "";
    console.log(htmlString);
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
    console.error("Error:", error);
  }

  // Trả về dữ liệu
  if (req.method === "GET") {
    res.status(200).json({
      url,
      uuid,
      divId,
      divClass
    });
  }
}
