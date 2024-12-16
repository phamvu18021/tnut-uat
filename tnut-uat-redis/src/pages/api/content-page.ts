// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import redis from "@/lib/redis"; // Import Redis từ thư viện

type Data = {
  posts: any[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const type = req?.query?.type || "";
  const api_url = process.env.API_URL || "";
  const hasSSL = process.env.NEXT_PUBLIC_HAS_SSL || "true";
  const cacheKey = `posts_${type}`; // Tạo cache key dựa trên type

  if (hasSSL === "false") process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";

  let posts: any[] = [];

  try {
    // Kiểm tra dữ liệu từ Redis cache
    const cachedData = await redis.get(cacheKey);

    if (cachedData) {
      console.log(`Cache hit for ${cacheKey}`);
      posts = JSON.parse(cachedData);
      console.log(posts);
    } else {
      console.log(`Cache miss for ${cacheKey}`);

      // Gọi WordPress API
      const endPoint = `${api_url}/${type}`;
      const response = await fetch(endPoint, {
        next: { revalidate: 600 }
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch data from ${endPoint}`);
      }

      posts = (await response.json()) || [];

      // Lưu kết quả vào Redis với TTL (thời gian sống)
      await redis.set(cacheKey, JSON.stringify(posts), "EX", 3600); // TTL: 1 giờ
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  if (req.method === "GET") {
    res.status(200).json({
      posts
    });
  }
}
