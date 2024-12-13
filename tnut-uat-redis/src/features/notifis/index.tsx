"use client";
import { Loading } from "@/components/Loading";
import {
  Box,
  Container,
  Divider,
  HStack,
  Text,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { LayoutBottom } from "@/layouts/layoutPosts/LayoutBottom";

const ListPosts = dynamic(
  () => import("@/features/posts/ListPosts").then((mod) => mod.ListPosts),
  {
    loading: () => <Loading />
  }
);
export const Notifis = () => {
  const router = useRouter();
  const handleRouter = ({ selected }: { selected: number }) => {
    router.push(`/thong-bao?page=${selected + 1}`);
  };
  return (
    <Box pb={"40px"}>
      <Box bg={"#F8F9FA"}>
        <Box
          bg={"rgba(0, 0, 0, 0.5)"}
          bgImage={"url('/bannernews.webp')"}
          backgroundBlendMode={"overlay"}
        >
          <Container maxW={"7xl"} py="24px" color={"white"}>
            <HStack pt={24} color={"gray.50"}>
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
                NOTIFIS
              </Text>
            </HStack>
            <Box>
              <Text
                fontWeight={400}
                textAlign={"start"}
                fontSize={{ base: "32px", lg: "60px" }}
                pb="40px"
              >
                THÔNG BÁO
              </Text>
            </Box>

            <Breadcrumb
              spacing="8px"
              separator={<ChevronRightIcon color="gray.50" />}
              fontWeight="medium"
              fontSize="md"
            >
              <BreadcrumbItem color="gray.50" fontWeight={300}>
                <BreadcrumbLink href="/">Trang chủ</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem color="gray.50" px={4} fontWeight={600}>
                <BreadcrumbLink href="/thong-bao">Thông báo</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </Container>
        </Box>
      </Box>
      <Suspense fallback={<Loading />}>
        <Container maxW={"7xl"} pt={"32px"}>
          <LayoutBottom sticky="120px">
            <ListPosts cate="notifis" handleRouter={handleRouter} />
          </LayoutBottom>
        </Container>
      </Suspense>
      <Divider size={"xl"} />
    </Box>
  );
};
