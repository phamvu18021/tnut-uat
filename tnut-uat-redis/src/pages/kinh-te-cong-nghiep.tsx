"use client";

import { Loading } from "@/components/Loading";
import { fetchSeo } from "@/ultil/seo";
import { GetServerSideProps } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import ReactHtmlParser from "html-react-parser";
import { replaceSeoRM } from "@/ultil/seoRankMath";
const Ktcn = dynamic(
  () => import("@/features/nganh-ktcn").then((mod) => mod.Ktcn),
  {
    loading: () => <Loading />
  }
);

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const api_rm_url = process.env.API_RMS_URL || "";
  const api_url = `${api_rm_url}/kinh-te-cong-nghiep`;
  try {
    const res = await fetchSeo({ url: api_url, revalidate: 3600 });
    const head = await res.json();
    return {
      props: {
        head: head.head
      }
    };
  } catch (error) {
    console.error("fetch failed ktcn" + error);
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
      <Ktcn />
    </>
  );
};

export default Page;
