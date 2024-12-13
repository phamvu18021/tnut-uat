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
import { Majors } from "../home/Majors";
import { LkgMain } from "./LkgMain";
import { LkgTuyensinh } from "./LkgTuyensinh";
import { useEffect, useState } from "react";

export const LichKg = () => {
  const [page_content, setPageContent] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getPageContent = async () => {
      try {
        const res = await fetch(`/api/content-page/?type=lichkg`, {
          next: { revalidate: 3 }
        });
        const data = await res.json();
        setPageContent(data?.posts[0]);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };
    getPageContent();
  }, []);
  return (
    <>
      <Box
        bg={"rgba(0, 0, 0, 0.5)"}
        bgImage={
          page_content?.acf?.breadcrumbs?.image || "url('/bannernews.webp')"
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
              Lịch khai giảng
            </Text>
          </HStack>
          <Box>
            <Text
              fontWeight={400}
              textAlign={"start"}
              fontSize={{ base: "32px", lg: "60px" }}
              pb={{ base: "36px", lg: "52px" }}
            >
              {page_content?.acf?.breadcrumbs?.title ||
                ".Đại học Kỹ thuật Công nghiệp"}
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
              <BreadcrumbLink href="/lich-khai-giang">
                Lịch khai giảng
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Container>
      </Box>

      {!isLoading && (
        <LkgMain
          title={
            page_content?.acf?.lick_kg?.title || ".KHAI GIẢNG ĐỢT I NĂM 2024"
          }
          lichkg={page_content?.acf?.lick_kg?.lich_kg_hcm}
          lichkg2={page_content?.acf?.lick_kg?.lich_kg_hn}
        />
      )}
      <LkgTuyensinh info={page_content?.acf?.info} />
      <Box bg={"gray.50"}>
        <Container maxW={"7xl"}>
          <Majors majors={page_content?.acf?.nganh_dao_tao} />
        </Container>
      </Box>
    </>
  );
};
