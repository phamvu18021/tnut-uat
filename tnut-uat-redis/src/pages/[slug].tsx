"server only";

import ErrorBoundary from "@/components/ErrorBoundary";
import { Post } from "@/features/post";
import { LayoutPost } from "@/layouts/layoutPost";
import { GetServerSideProps } from "next";
import { ReactElement, useEffect, useState } from "react";
import { fetchAuth } from "@/ultil/fetchAuth";
import { fetchSeo } from "@/ultil/seo";
import Head from "next/head";
import ReactHtmlParser from "html-react-parser";
import { replaceSeoRM } from "@/ultil/seoRankMath";
export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const api_url = process.env.API_URL || "";
  const url = process.env.API_RMS_URL || "";

  try {
    const params = context.params;
    const slug = params?.slug || "";
    const res = await fetchAuth({
      url: `${api_url}/posts?slug=${slug}`,
      revalidate: 3600
    });
    const resSeo = await fetchSeo({
      url: `${url}/${slug}`,
      revalidate: 3600
    });
    const head = await resSeo.json();
    const posts = await res.json();
    const post = posts ? posts[0] : null;

    return {
      props: { post: post || null, head: head.head }
    };
  } catch (error) {
    console.error(error);
    return {
      props: { post: null, head: null }
    };
  }
};

interface IPostPage {
  post: any;
  head: string;
}

const Page = (props: IPostPage) => {
  const { post, head } = props;

  return (
    <>
      {head && (
        <div>
          <Head>{ReactHtmlParser(replaceSeoRM(head))}</Head>
        </div>
      )}
      <ErrorBoundary fallback={<h1>Lỗi phía máy chủ</h1>}>
        <Post post={post} />
      </ErrorBoundary>
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <LayoutPost>{page}</LayoutPost>;
};

export default Page;
