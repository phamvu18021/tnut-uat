// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { fetchAuth } from "@/ultil/fetchAuth";
import redis from "@/lib/redis"; // Redis đã được cấu hình

type Data = {
  list: string[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const api_url = process.env.API_URL || "";

  // Key để lưu cache trong Redis
  const redisKey = `wordpress_posts:lich-khai-giang`;

  let filteredLines: string[] = [];
  try {
    // Kiểm tra cache trong Redis
    let data: any = null;
    const cachedData = await redis.get(redisKey);

    if (cachedData) {
      // Nếu có dữ liệu trong Redis, parse ra
      data = JSON.parse(cachedData);
    } else {
      // Nếu không có, gọi API WordPress để lấy dữ liệu
      const responseWordpress = await fetchAuth({
        url: `${api_url}/posts?slug=lich-khai-giang`,
        revalidate: 10
      });
      data = await responseWordpress.json();

      // Lưu dữ liệu vào Redis với TTL là 1 giờ (3600 giây)
      await redis.set(redisKey, JSON.stringify(data), "EX", 3600);
    }

    // Lấy chuỗi formHTML từ `data`
    const htmlString = data?.length > 0 ? data[0]?.content?.rendered : ``;

    // Loại bỏ các thẻ HTML từ chuỗi
    const textContent = htmlString.replace(/(&#8211;|<[^>]*>)/g, "");

    // Tách các chuỗi bằng dấu xuống dòng
    const lines = textContent.split("\n");

    // Loại bỏ các chuỗi trống và khoảng trắng
    filteredLines = lines?.filter((line: string) => line.trim() !== "");
    filteredLines = filteredLines?.map((line: string) => line?.trim());
  } catch (error) {
    console.error("Error:", error);
  }

  // Trả về dữ liệu
  if (req.method === "GET") {
    res.status(200).json({
      list: filteredLines || []
    });
  }
}
