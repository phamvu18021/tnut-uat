"server only";

import ErrorBoundary from "@/components/ErrorBoundary";
import { Post } from "@/features/post";
import { LayoutPost } from "@/layouts/layoutPost";
import { fetchAuth } from "@/ultil/fetchAuth";
import { GetServerSideProps } from "next";
import { ReactElement } from "react";

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const api_url = process.env.API_URL || "";

  try {
    const params = context.params;
    const id = params?.slug || "";
    const res = await fetchAuth({
      url: `${api_url}/posts/${id}?_embed`
    });
    const post = (await res.json()) || null;

    return {
      props: { post: post || null }
    };
  } catch (error) {
    console.log(error);
    return {
      props: { post: null }
    };
  }
};

interface IPostPage {
  post: any;
}

const Page = (props: IPostPage) => {
  const { post } = props;
  return (
    <>
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
