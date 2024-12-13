"use client";

import { Loading } from "@/components/Loading";
import dynamic from "next/dynamic";
import ReactHtmlParser from "html-react-parser";
import { fetchSeo } from "@/ultil/seo";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { replaceSeoRM } from "@/ultil/seoRankMath";
const Qlcn = dynamic(
  () => import("@/features/nganh-qlcn").then((mod) => mod.Qlcn),
  {
    loading: () => <Loading />
  }
);

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const api_rm_url = process.env.API_RMS_URL || "";
  const api_url = `${api_rm_url}/quan-ly-cong-nghiep`;
  try {
    const res = await fetchSeo({ url: api_url, revalidate: 3600 });
    const head = await res.json();
    return {
      props: {
        head: head.head
      }
    };
  } catch (error) {
    console.error("fetch failed qlcn" + error);
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
      <Qlcn />
    </>
  );
};

export default Page;
