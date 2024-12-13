"use client";

import { Loading } from "@/components/Loading";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";

const Dangky = dynamic(
  () => import("@/features/dang-ky").then((mod) => mod.Dangky),
  {
    loading: () => <Loading />
  }
);

const Page = () => {
  return (
    <>
      <NextSeo
        title="Đăng ký học từ xa Đại Học Kỹ Thuật Công Nghiệp"
        description="Đăng ký học Đại học từ xa Đại Học Kỹ Thuật Công Nghiệp, tiết kiệm chi phí và thời gian"
      />
      <Dangky />
    </>
  );
};

export default Page;
