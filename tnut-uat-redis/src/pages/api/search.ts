// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { fetchAuth } from "@/ultil/fetchAuth";

type Data = {
  posts: any[];
  totalPosts: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  //lấy dữ liệu form từ wordpress
  const searchtext = req?.query?.search || "";
  const type = req?.query?.type || "";
  const page = req?.query?.page || "";
  const per_page = req?.query?.per_page || 8;
  const api_url = process.env.API_URL || "";

  let posts: any[] = [];
  let totalPosts: string = "0";
  try {
    //get all categories
    // const resCats = await fetch(`${api_url}/categories`, {
    //   next: { revalidate: 1800 },
    // });
    // const cats: any[] = (await resCats.json()) || [];
    // const newCat = cats?.find((cat) => cat.name === "Tin Tức");
    const idNew = 217;
    // const notifiCat = cats?.find((cat) => cat.name === "Thông báo");
    const idNotifi = 216;
    const id = type === "news" ? idNew : type === "notifis" ? idNotifi : null;
    const endPoint = id
      ? `${api_url}/posts?search=${searchtext}&_embed&per_page=${per_page}&status=publish&page=${page}&categories=${id}`
      : //&categories=${id}
        `${api_url}/posts?_embed&per_page=8&status=publish&page=${page}`;

    //get posts category==='tin-tuc'

    const res = await fetchAuth({ url: endPoint, revalidate: 1 });
    totalPosts = String(res.headers?.get("X-WP-Total") || "0");
    const postsNotFeatureImage: any[] = (await res?.json()) || [];
    posts =
      postsNotFeatureImage?.length > 0
        ? postsNotFeatureImage?.map((post: any) => {
            const featured_image =
              post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;

            return {
              ...post,
              featured_image
            };
          })
        : [];
  } catch (error) {
    console.log(error);
  }

  if (req.method === "GET") {
    res.status(200).json({
      posts,
      totalPosts
    });
  }
}
