"use client";

import { Box } from "@chakra-ui/react";
import { Banner } from "../home/Banner";
import { Benefit } from "../home/Benefit";
import { Majors } from "../home/Majors";
import { Slogan } from "../home/Slogan";
import { IntroduceAbout } from "./IntroduceAbout";
import { useState, useEffect } from "react";
export const About = () => {
  const [page_content, setPageContent] = useState<any>(null);

  useEffect(() => {
    const getPageContent = async () => {
      try {
        const res = await fetch(`/api/content-page/?type=gioi-thieu`, {
          next: { revalidate: 3 }
        });
        const data = await res.json();
        setPageContent(data?.posts[0]);
      } catch (error) {
        console.log(error);
      }
    };
    getPageContent();
  }, []);
  return (
    <>
      <Box color={"blue.800"}>
        <Box bg="radial-gradient(circle, rgba(5,70,89,1) 2%, rgba(98,212,245,1) 100%, rgba(252,89,52,1) 100%)"></Box>
        <Box>
          <Banner imagesBanner={page_content?.acf?.anh_banner} />
          <IntroduceAbout introduceAbout={page_content?.acf?.gioi_thieu} />
          <Benefit benefit={page_content?.acf?.loi_ich} />
          <Slogan slogan={page_content?.acf?.slogan} />
          <Majors majors={page_content?.acf?.nganh_dao_tao} />
        </Box>
      </Box>
    </>
  );
};
