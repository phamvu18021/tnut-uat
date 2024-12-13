"use client";

import { NextSeo } from "next-seo";
import { About } from "@/features/about";

const Page = () => {
  return (
    <>
      <NextSeo
        title="Giới thiệu về Trường Đại Học Kỹ Thuật Công Nghiệp"
        description="Trường Đại Học Kỹ Thuật Công Nghiệp (TNU University of Technology – TNUT) là một trong những trường đại học công lập có thương hiệu về đào tạo khối ngành kỹ thuật tại miền bắc Việt Nam"
      />
      <About />
    </>
  );
};

export default Page;
