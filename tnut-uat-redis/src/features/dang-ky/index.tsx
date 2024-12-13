"use client";

import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Divider,
  HStack,
  Text
} from "@chakra-ui/react";
import { DkMain } from "./DkMain";
import { useState, useEffect } from "react";
import { BenefitNganh } from "@/components/BenefitNganh";
export const Dangky = () => {
  const [page_content, setPageContent] = useState<any>(null);

  useEffect(() => {
    const getPageContent = async () => {
      try {
        const res = await fetch(`/api/content-page/?type=dang-ky`, {
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
      <Box
        bg={"rgba(0, 0, 0, 0.5)"}
        bgImage={
          page_content?.acf?.breadcrumbs?.image || "url('bannernews.webp')"
        }
        bgSize={"cover"}
        bgPosition={"bottom"}
        backgroundBlendMode={"overlay"}
      >
        <Container
          maxW={"7xl"}
          py={{ base: "28px", lg: "42px" }}
          color={"white"}
          pl={{ base: 6, lg: 0 }}
        >
          <HStack
            pt={{ base: 8, lg: 16 }}
            pb={{ base: 2, lg: 8 }}
            color={"gray.50"}
          >
            <Box display={"flex"} alignContent={"center"}>
              <Divider
                zIndex={2}
                borderBottomWidth={"3px"}
                borderBlockEndColor={"gray.50"}
                w={"40px"}
              />
            </Box>

            <Text
              textAlign={"start"}
              fontSize={{ base: "12px", lg: "20px" }}
              fontWeight={500}
            >
              Register
            </Text>
          </HStack>
          <Box>
            <Text
              fontWeight={400}
              textAlign={"start"}
              fontSize={{ base: "32px", lg: "60px" }}
              pb={{ base: "36px", lg: "52px" }}
            >
              {page_content?.acf?.breadcrumbs?.title || "ĐĂNG KÝ."}
            </Text>
          </Box>

          <Breadcrumb
            spacing="8px"
            separator={<ChevronRightIcon color="gray.50" />}
            fontWeight="medium"
            fontSize="md"
            pb={{ base: 2, lg: 8 }}
          >
            <BreadcrumbItem color="gray.50" fontWeight={300}>
              <BreadcrumbLink href="/">Trang chủ</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem color="gray.50" px={4} fontWeight={600}>
              <BreadcrumbLink href="/dang-ky">Đăng ký</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Container>
      </Box>
      <Box>
        <DkMain dkmain={page_content?.acf?.info} />
      </Box>
      <Box margin={"0 auto"} bg={"gray.50"}>
        <BenefitNganh major_benefit={page_content?.acf?.major_benefit} />
      </Box>
    </>
  );
};
