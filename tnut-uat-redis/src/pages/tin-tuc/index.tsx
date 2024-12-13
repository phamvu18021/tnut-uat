import ErrorBoundary from "@/components/ErrorBoundary";
import { Posts } from "@/features/posts";
import { fetchSeo } from "@/ultil/seo";
import { GetServerSideProps } from "next";
import Head from "next/head";
import ReactHtmlParser from "html-react-parser";
import { replaceSeoRM } from "@/ultil/seoRankMath";

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const api_url = `https://nologin.tnut.vn/wp-json/rankmath/v1/getHead?url=https://nologin.tnut.vn/tin-tuc-su-kien`;
  try {
    const res = await fetchSeo({ url: api_url, revalidate: 3600 });
    const head = await res.json();
    return {
      props: {
        head: head.head
      }
    };
  } catch (error) {
    console.error("fetch failed tin tuc" + error);
    return {
      props: {
        head: null
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
      <ErrorBoundary fallback={<h1>Lỗi server</h1>}>
        <Posts />
      </ErrorBoundary>
    </>
  );
};

export default Page;
