"use client";

import {
  As,
  Box,
  Container,
  HStack,
  Icon,
  SimpleGrid,
  Text,
  VStack
} from "@chakra-ui/react";
import Link from "next/link";
import { BiHome } from "react-icons/bi";
import { LiaIndustrySolid } from "react-icons/lia";
import { MdOutlineWorkHistory } from "react-icons/md";
import { PiCertificate } from "react-icons/pi";
import { BtnTheme } from "./BtnTheme";
import { useModal } from "./ModalContext";

export const Item = ({
  path,
  title,
  desc,
  icon
}: {
  path: string;
  title: string;
  desc: string;
  icon?: As;
}) => {
  return (
    <Box
      as={Link}
      href={path || "/"}
      pos="relative"
      transition={"all ease .4s"}
      color={"blue.700"}
      p={{ base: "16px", md: "20px", lg: "24px" }}
      border={"1px solid"}
      borderColor={"gray.300"}
      rounded={"sm"}
    >
      <Text fontSize={"20px"} fontWeight={500}>
        {title}
      </Text>
      <HStack spacing={"12px"} pt={"16px"}>
        <Icon
          as={icon}
          width={{ base: "50px", md: "100px" }}
          height={{ base: "50px", md: "100px" }}
          alt="Ngành kế toán HVTC"
          color={"blue.700"}
        />

        <VStack align={"start"}>
          <Text color={"gray.800"} fontSize={{ base: ".8rem", md: "sm" }}>
            {desc}
          </Text>
        </VStack>
      </HStack>
    </Box>
  );
};

export const BenefitNganh = (major_benefit: any) => {
  const benefits = [
    {
      path: major_benefit?.major_benefit?.benefit_1?.link || "#",
      title:
        major_benefit?.major_benefit?.benefit_1?.title ||
        "zThời gian học tập linh hoạt, phù hợp với mọi đối tượng",
      desc:
        major_benefit?.major_benefit?.benefit_1?.desc ||
        "Với hình thức học tập online, học viên có thể chủ động về kế hoạch cũng như thời gian học tập, đây là ưu điểm vượt trội của chương trình",
      icon: BiHome
    },
    {
      path: major_benefit?.major_benefit?.benefit_2?.link || "#",
      title:
        major_benefit?.major_benefit?.benefit_2?.title ||
        "Sở hữu bằng đại học uy tín hàng đầu Việt Nam",
      desc:
        major_benefit?.major_benefit?.benefit_2?.desc ||
        "Chương trình học do Đại học Thái Nguyên cấp bằng và được Bộ GD&ĐT công nhận",
      icon: PiCertificate
    },
    {
      path: major_benefit?.major_benefit?.benefit_3?.link || "#",
      title:
        major_benefit?.major_benefit?.benefit_3?.title ||
        "Đội ngũ giảng viên đầu ngành, giàu kinh nghiệm",
      desc:
        major_benefit?.major_benefit?.benefit_3?.desc ||
        "100% giảng viên tham gia chương trình đều có bằng Thạc sĩ, Tiến sĩ và đều đang giảng dạy và làm việc tại trường",
      icon: LiaIndustrySolid
    },
    {
      path: major_benefit?.major_benefit?.benefit_4?.link || "#",
      title:
        major_benefit?.major_benefit?.benefit_4?.title ||
        "96% Sinh viên ra trường có việc làm",
      desc:
        major_benefit?.major_benefit?.benefit_4?.desc ||
        "Dễ dàng hơn khi xin việc, xét bậc tăng lương. Tốt nghiệp bạn đủ điều kiện để học lên Thạc sĩ, Tiến sĩ theo quy định",
      icon: MdOutlineWorkHistory
    }
  ];
  const { isOpen, onOpen, onClose } = useModal();
  return (
    <Box py={"48px"}>
      <Container maxW="7xl">
        <Text
          fontSize={{ base: 24, lg: 32 }}
          color={"blue.700"}
          fontWeight={600}
          textAlign={"center"}
        >
          {major_benefit?.major_benefit?.title ||
            "zLỢI ÍCH BẠN NHẬN ĐƯỢC KHI THEO HỌC CHƯƠNG TRÌNH"}
        </Text>
        <SimpleGrid
          pt={"24px"}
          spacing={"8"}
          columns={{ base: 1, md: 2 }}
          pb={{ lg: "20px" }}
        >
          {benefits.map((categoty, index) => (
            <Item
              key={index}
              path={categoty.path}
              title={categoty.title}
              desc={categoty.desc}
              icon={categoty.icon}
            />
          ))}
        </SimpleGrid>
        <Box display={"flex"} justifyContent={"center"} py={12}>
          <BtnTheme
            color={"white"}
            colorScheme="white"
            size={{ base: "sm", md: "lg" }}
            onClick={() => !isOpen && onOpen && onOpen()}
            w={{ base: "240px", md: "320px", lg: "320px" }}
          >
            {major_benefit?.major_benefit?.text_button ||
              "zNhận tài khoản học thử miễn phí!"}
          </BtnTheme>
        </Box>
      </Container>
    </Box>
  );
};
