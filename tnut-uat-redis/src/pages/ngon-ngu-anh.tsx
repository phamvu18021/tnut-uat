"use client";

import { Loading } from "@/components/Loading";
import dynamic from "next/dynamic";
import ReactHtmlParser from "html-react-parser";
import { fetchSeo } from "@/ultil/seo";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { replaceSeoRM } from "@/ultil/seoRankMath";
const Nna = dynamic(
  () => import("@/features/nganh-nna").then((mod) => mod.Nna),
  {
    loading: () => <Loading />
  }
);

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const api_rm_url = process.env.API_RMS_URL || "";
  const api_url = `${api_rm_url}/ngon-ngu-anh`;
  try {
    const res = await fetchSeo({ url: api_url, revalidate: 3600 });
    const head = await res.json();
    return {
      props: {
        head: head.head
      }
    };
  } catch (error) {
    console.error("fetch failed nna" + error);
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
      <Nna />
    </>
  );
};

export default Page;
