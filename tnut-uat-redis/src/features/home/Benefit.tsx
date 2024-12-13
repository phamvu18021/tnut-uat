"use client";

import { MotionTop } from "@/components/MotionTop";
import {
  As,
  Box,
  Container,
  GridItem,
  Icon,
  SimpleGrid,
  Text,
  VStack
} from "@chakra-ui/react";
import Link from "next/link";
import { BsClockHistory } from "react-icons/bs";
import { MdOutlineWorkHistory } from "react-icons/md";
import { PiCertificate } from "react-icons/pi";
import { RiCustomerService2Line } from "react-icons/ri";
export const Item = ({
  path,
  title,
  desc,
  descs,
  icon
}: {
  path: string;
  title: string;
  desc: string;
  descs: string;
  icon?: As;
}) => {
  return (
    <Box
      pos="relative"
      transition={"all ease .4s"}
      color={"#004956"}
      as={Link}
      href={path || "/"}
    >
      <SimpleGrid columns={5} gap={{ sm: 8, base: 2 }}>
        <GridItem colSpan={1} justifyContent={"center"}>
          <Icon
            as={icon}
            width={{ base: "35px", md: "50px" }}
            height={{ base: "35px", md: "50px" }}
            alt=""
            color={"#004956"}
          />
        </GridItem>

        <GridItem colSpan={4}>
          <VStack gap={"4px"} align={"start"}>
            <Text fontSize={{ base: "16px", md: "20px" }}>{title}</Text>
            <VStack align={"start"}>
              <Text color={"gray.400"} fontSize={{ base: "14px", md: "sm" }}>
                {desc}
              </Text>
              <Text color={"gray.400"} fontSize={{ base: "14px", md: "sm" }}>
                {descs}
              </Text>
            </VStack>
          </VStack>
        </GridItem>
      </SimpleGrid>
    </Box>
  );
};

export const Benefit = (benefit: any) => {
  const benefits = [
    {
      path: "#",
      title:
        benefit?.benefit?.loi_ich_1.loi_ich_title || ".Thời gian Đào tạo ngắn",
      desc:
        benefit?.benefit?.loi_ich_1.loi_ich_desc ||
        "• .Người học có thể học vượt để rút ngắn thời gian học tập theo quy định đào tạo tín chỉ ",
      descs:
        benefit?.benefit?.loi_ich_1.loi_ich_descs ||
        "• .Thời gian đào tạo từ 2-4,5 năm ",
      icon: BsClockHistory
    },
    {
      path: "#",
      title:
        benefit?.benefit?.loi_ich_2.loi_ich_title || ".Bằng Đại học uy tín ",
      desc:
        benefit?.benefit?.loi_ich_2.loi_ich_desc ||
        "• .Bằng không ghi hình thức đào tạo và được Bộ GD&ĐT công nhận ",
      descs:
        benefit?.benefit?.loi_ich_2.loi_ich_descs ||
        "• .Có giá trị sử dụng trọn đời",
      icon: PiCertificate
    },
    {
      path: "#",
      title: benefit?.benefit?.loi_ich_3.loi_ich_title || ".Tư vấn 24/7",
      desc:
        benefit?.benefit?.loi_ich_3.loi_ich_desc ||
        "• .Tư vấn lộ trình học miễn phí",
      descs:
        benefit?.benefit?.loi_ich_3.loi_ich_descs ||
        "• .Hỗ trợ học tập và kỹ thuật nhanh chóng - tận tình",
      icon: RiCustomerService2Line
    },
    {
      path: "#",
      title:
        benefit?.benefit?.loi_ich_4.loi_ich_title || ".Kho học liệu đa dạng",
      desc:
        benefit?.benefit?.loi_ich_4.loi_ich_desc ||
        "• .Tài liệu học tập đa Phương tiện (video, slide, script,..) ",
      descs:
        benefit?.benefit?.loi_ich_4.loi_ich_descs ||
        "• .Giáo trình do giảng viên đang trực tiếp công tác tại trường biên soạn.",
      icon: MdOutlineWorkHistory
    }
  ];
  return (
    <Box bg={"gray.50"} py={"60px"} pb={"80px"}>
      <Container maxW="7xl">
        <SimpleGrid
          pt={"24px"}
          columns={{ base: 1, md: 2, lg: 4 }}
          spacing={{ base: 2, lg: 6 }}
        >
          {benefits.map((categoty, index) => (
            <MotionTop key={index}>
              <Item
                path={categoty.path}
                title={categoty.title}
                desc={categoty.desc}
                descs={categoty.descs}
                icon={categoty.icon}
              />
            </MotionTop>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};
