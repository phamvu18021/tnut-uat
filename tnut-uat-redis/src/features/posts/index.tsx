"use client";
import { Loading } from "@/components/Loading";
import { LayoutBottom } from "@/layouts/layoutPosts/LayoutBottom";
import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Container,
  Divider,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
  HStack
} from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { Suspense } from "react";

const ListPosts = dynamic(
  () => import("./ListPosts").then((mod) => mod.ListPosts),
  {
    loading: () => <Loading />
  }
);

export const Posts = () => {
  const router = useRouter();
  const handleRouter = ({ selected }: { selected: number }) => {
    router.push(`/tin-tuc?page=${selected + 1}`);
  };

  return (
    <Box pb={"40px"}>
      <Box bg={"#F8F9FA"}>
        <Box
          bg={"rgba(0, 0, 0, 0.5)"}
          bgImage={"url('bannernews.webp')"}
          bgSize={"cover"}
          bgPosition={"50% 100%"}
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
                NEWS
              </Text>
            </HStack>
            <Box>
              <Text
                fontWeight={400}
                textAlign={"start"}
                fontSize={{ base: "32px", lg: "60px" }}
                pb={{ base: "36px", lg: "52px" }}
              >
                TIN TỨC VÀ SỰ KIỆN
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
                <BreadcrumbLink href="/tin-tuc">
                  Tin tức & sự kiện
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </Container>
        </Box>
      </Box>
      <Box pt={"20px"}>
        <Suspense fallback={<Loading />}>
          <LayoutBottom sticky="120px">
            <ListPosts cate="news" handleRouter={handleRouter} />
          </LayoutBottom>
        </Suspense>
      </Box>
      <Divider size={"xl"} />
    </Box>
  );
};
