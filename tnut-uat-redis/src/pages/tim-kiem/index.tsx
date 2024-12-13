"use client";
import ErrorBoundary from "@/components/ErrorBoundary";
import { Search } from "@/features/search";
import { NextSeo } from "next-seo";

const Page = () => {
  return (
    <>
      <NextSeo
        title="Tin tức và thông báo tuyển sinh - Đại Học Kỹ Thuật Công Nghiệp"
        description="Đại Học Kỹ Thuật Công Nghiệp tuyển sinh năm 2023 - tổng hợp các tin tức tuyển sinh mới nhất của Đại Học Kỹ Thuật Công Nghiệp"
      />
      <ErrorBoundary fallback={<h1>Lỗi server</h1>}>
        <Search />
      </ErrorBoundary>
    </>
  );
};

export default Page;
