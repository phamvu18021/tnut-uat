import { Home } from "@/features/home";
import Head from "next/head";
import ReactHtmlParser from "html-react-parser";
import { GetServerSideProps } from "next";
import { fetchSeo } from "@/ultil/seo";
import { replaceSeoRM } from "@/ultil/seoRankMath";

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const api_rm_url = process.env.API_RMS_URL || "";
  const api_url = `${api_rm_url}`;
  const base_url = process.env.NEXT_PUBLIC_DOMAIN || "";
  try {
    const res = (await fetchSeo({ url: api_url, revalidate: 3600 })) || "";
    const head = (await res.json()) || "";
    const resCMS =
      (await fetch(`${base_url}/api/content-page/?type=trang-chu`, {
        next: { revalidate: 3600 }
      })) || "";
    const data = (await resCMS.json()) || "";
    return {
      props: {
        head: head.head,
        cms: data?.posts[0] || {}
      }
    };
  } catch (error) {
    console.error("Error in fetching seo", error);
    return {
      props: {
        head: null,
        cms: null
      }
    };
  }
};
const Page = (props: any) => {
  return (
    <>
      {props.head && (
        <div>
          <Head>{ReactHtmlParser(replaceSeoRM(props.head))}</Head>
        </div>
      )}
      <Home home_content={props.cms} />
      {/* <Home /> */}
    </>
  );
};

export default Page;
