"use client";

import { SocialButton } from "@/components/SocialButton";
import {
  Box,
  Container,
  HStack,
  ListItem,
  SimpleGrid,
  Stack,
  Text,
  UnorderedList
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { BsTiktok } from "react-icons/bs";
const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      fontWeight={"500"}
      fontSize={"lg"}
      mb={2}
      borderBottom={"1px white solid"}
    >
      {children}
    </Text>
  );
};

export const Footer = () => {
  const [page_content, setPageContent] = useState<any>(null);

  useEffect(() => {
    const getPageContent = async () => {
      try {
        const res = await fetch(`/api/content-page/?type=trang-chu`, {
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
      <Box bg={"blue.900"} color={"White"}>
        <Container as={Stack} maxW={"7xl"} py={10}>
          <SimpleGrid columns={{ base: 1, lg: 4, md: 4 }} spacing={16}>
            <Stack>
              <Stack direction={"row"} align={"flex-start"} gap={5} mb={5}>
                <Image
                  loading="lazy"
                  src={
                    page_content?.acf?.footer?.block_1?.logo ||
                    "/logo-tnut.webp"
                  }
                  width={100}
                  height={100}
                  alt="Tìm đối tác"
                  style={{ float: "left" }}
                />
              </Stack>
              <Box py={2}>
                {page_content?.acf?.footer?.block_1?.title ||
                  ".Elearning – giải pháp giúp người học phá bỏ rào cản về không gian và thời gian"}
              </Box>
              <HStack py={4} spacing={2} display={{ base: "flex", lg: "flex" }}>
                <SocialButton
                  bagr="rgba(255, 255, 255, 0.23)"
                  label={"Facebook"}
                  href={
                    page_content?.acf?.footer?.block_1?.link_facebook ||
                    "https://www.facebook.com/daihoctuxatnut"
                  }
                >
                  <FaFacebook color="white" />
                </SocialButton>
                <SocialButton
                  bagr="transparent"
                  label={"Zalo"}
                  href={
                    page_content?.acf?.footer?.block_1?.link_zalo ||
                    "https://zalo.me/0815674848"
                  }
                >
                  <SiZalo color="white" />
                </SocialButton>
                <SocialButton
                  bagr="transparent"
                  label={"Tiktok"}
                  href={
                    page_content?.acf?.footer?.block_1?.link_tiktok ||
                    "https://www.tiktok.com/@tnut_elearning"
                  }
                >
                  <BsTiktok color="white" />
                </SocialButton>

                <SocialButton
                  bagr="transparent"
                  label={"Youtube"}
                  href={
                    page_content?.acf?.footer?.block_1?.link_youtube ||
                    "https://www.youtube.com/@etnut"
                  }
                >
                  <BsYoutube color="white" />
                </SocialButton>
              </HStack>
            </Stack>

            <Stack>
              <ListHeader>
                {page_content?.acf?.footer?.block_2?.title || ".LIÊN HỆ"}
              </ListHeader>

              <Box
                pt={2}
                as={Link}
                href={
                  page_content?.acf?.footer?.block_2?.item_1?.link ||
                  "https://m.me/daihoctuxatnut"
                }
                _hover={{ textDecoration: "underline", color: "orange.400" }}
              >
                {page_content?.acf?.footer?.block_2?.item_1?.label ||
                  ".Facebook"}
              </Box>

              <Box
                py={2}
                as={Link}
                href={
                  page_content?.acf?.footer?.block_2?.item_2?.link ||
                  "https://tnut.vn"
                }
                _hover={{ textDecoration: "underline", color: "orange.400" }}
              >
                {page_content?.acf?.footer?.block_2?.item_2?.label ||
                  ".Website: tnut.vn"}
              </Box>

              <Box
                as={Link}
                href={
                  page_content?.acf?.footer?.block_2?.item_3?.link ||
                  "tel:0815674848"
                }
                _hover={{ textDecoration: "underline", color: "orange.400" }}
              >
                {page_content?.acf?.footer?.block_2?.item_3?.label ||
                  ".Hotline: 081.567.4848"}
              </Box>
            </Stack>
            <Stack mt={"-27px"} align={"flex-start"}>
              <ListHeader>
                {page_content?.acf?.footer?.block_3?.title ||
                  ".VĂN PHÒNG TƯ VẤN VÀ TIẾP NHẬN HỒ SƠ TUYỂN SINH"}
              </ListHeader>
              <UnorderedList>
                <ListItem fontSize={14}>
                  {page_content?.acf?.footer?.block_3?.text_1 ||
                    ".Hà Nội: Số 116 Trần Vỹ, Mai Dịch, Cầu Giấy, Hà Nội"}
                </ListItem>
                <ListItem fontSize={14}>
                  {page_content?.acf?.footer?.block_3?.text_2 ||
                    ".Tp. HCM: Số 91 Ký Con, Phường Nguyễn Thái Bình , Quận 1, Hồ Chí Minh"}
                </ListItem>
              </UnorderedList>
              <HStack display={"flex"} alignItems={"start"} gap={4}>
                <Image
                  loading="lazy"
                  src={
                    page_content?.acf?.footer?.block_3?.image_1 || "/aum.webp"
                  }
                  width={100}
                  height={40}
                  alt="Aum Việt Nam"
                />

                <Image
                  loading="lazy"
                  src={
                    page_content?.acf?.footer?.block_3?.image_2 ||
                    "/logo-dhthainguyen.webp"
                  }
                  width={100}
                  height={100}
                  alt="Tìm đối tác"
                />
              </HStack>
            </Stack>

            <Stack align={"flex-start"}>
              <ListHeader>
                {page_content?.acf?.footer?.block_4?.title ||
                  ".HỢP TÁC TUYỂN SINH"}
              </ListHeader>

              <Link href={"https://timdoitac.aum.edu.vn/"}>
                <Image
                  loading="lazy"
                  src={
                    page_content?.acf?.footer?.block_4?.image ||
                    "/timdoitac.webp"
                  }
                  width={300}
                  height={100}
                  alt="Tìm đối tác"
                  style={{ borderRadius: "6px" }}
                />
              </Link>
            </Stack>
          </SimpleGrid>
        </Container>

        <Box borderTopWidth={1} borderStyle={"solid"} borderColor={"gray.200"}>
          <Container
            as={Stack}
            maxW={"6xl"}
            py={4}
            direction={{ base: "column", md: "row" }}
            spacing={4}
            justify={{ md: "center" }}
            align={{ md: "center" }}
          >
            <Text textAlign="center">© 2023 Copyright by IT AUM</Text>
          </Container>
        </Box>
      </Box>
    </>
  );
};
