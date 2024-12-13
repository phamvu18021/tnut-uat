"use client";

import { BenefitNganh } from "@/components/BenefitNganh";
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
import { ReactNode } from "react";

export const LayoutNganh = ({
  children,
  title,
  image,
  path,
  major_benefit
}: {
  children?: ReactNode;
  title?: string;
  image?: string;
  path?: string;
  major_benefit?: any;
}) => {
  return (
    <>
      <Box
        bg={"rgba(0, 0, 0, 0)"}
        bgImage={image}
        backgroundBlendMode={"overlay"}
        backgroundPosition={"40%  50%"}
      >
        <Container maxW={"7xl"} py="52px" color={"white"}>
          <HStack pt={16} color={"gray.50"}>
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
              {"NGÀNH"}
            </Text>
          </HStack>
          <Box>
            <Text
              fontWeight={400}
              textAlign={"start"}
              fontSize={{ base: "28px", lg: "60px" }}
              pt={"18px"}
              pb="42px"
            >
              {title || "Ngành "}
            </Text>
          </Box>

          <Breadcrumb
            px={4}
            spacing="8px"
            separator={<ChevronRightIcon color="gray.50" />}
            fontWeight="medium"
            fontSize={{ base: "sm", lg: "md" }}
            display={"contents"}
          >
            <BreadcrumbItem color="gray.50" fontWeight={300}>
              <BreadcrumbLink href="/">Trang chủ</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem
              color="gray.50"
              px={4}
              fontWeight={300}
              pointerEvents={"none"}
              cursor={"not-allowed"}
            >
              <BreadcrumbLink>Chương trình đào tạo</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem color="gray.50" px={4} fontWeight={600}>
              <BreadcrumbLink href={path}>{title}</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Container>
      </Box>

      <Box>
        <Container maxW={"7xl"} py={{ base: 20, lg: 36 }}>
          {children}
        </Container>
      </Box>
      <Box margin={"0 auto"} bg={"gray.50"}>
        <BenefitNganh major_benefit={major_benefit} />
      </Box>
    </>
  );
};
