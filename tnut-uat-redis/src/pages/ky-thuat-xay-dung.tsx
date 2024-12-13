"use client";

import { Loading } from "@/components/Loading";
import { GetServerSideProps } from "next";
import { fetchSeo } from "@/ultil/seo";
import ReactHtmlParser from "html-react-parser";
import dynamic from "next/dynamic";
import Head from "next/head";
import { replaceSeoRM } from "@/ultil/seoRankMath";
const Ktxd = dynamic(
  () => import("@/features/nganh-ktxd").then((mod) => mod.Ktxd),
  {
    loading: () => <Loading />
  }
);

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const api_rm_url = process.env.API_RMS_URL || "";
  const api_url = `${api_rm_url}/ky-thuat-xay-dung`;
  try {
    const res = await fetchSeo({ url: api_url, revalidate: 3600 });
    const head = await res.json();
    return {
      props: {
        head: head.head
      }
    };
  } catch (error) {
    console.error("fetch failed ktxd" + error);
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
      <Ktxd />
    </>
  );
};

export default Page;
