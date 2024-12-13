// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  posts: any[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  //lấy dữ liệu form từ wordpress
  const type = req?.query?.type || "";
  const api_url = process.env.API_URL || "";
  const hasSSL = process.env.NEXT_PUBLIC_HAS_SSL || "true";
  if (hasSSL === "false") process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";

  let posts: any[] = [];

  try {
    const endPoint = `${api_url}/${type}`;

    const res = await fetch(endPoint, {
      next: { revalidate: 1 }
    });

    posts = (await res?.json()) || [];
  } catch (error) {
    console.log(error);
  }

  if (req.method === "GET") {
    res.status(200).json({
      posts
    });
  }
}
