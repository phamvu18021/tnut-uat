"use client";
import { CardReg } from "@/components/CardReg";
import { MotionTop } from "@/components/MotionTop";
import { Box, Container, SimpleGrid, Text } from "@chakra-ui/react";

export const Majors = (majors: any) => {
  const Reg = [
    {
      image:
        majors?.majors?.cac_nganh_hoc?.nganh_1?.image_nganh ||
        "/nganh-xay-dung.webp",
      title:
        majors?.majors?.cac_nganh_hoc?.nganh_1?.text_nganh ||
        ".Kỹ Thuật Xây Dựng",
      path: "/ky-thuat-xay-dung"
    },
    {
      image:
        majors?.majors?.cac_nganh_hoc?.nganh_2?.image_nganh ||
        "/nganh-quan-li-cong-nghiep.webp",
      title:
        majors?.majors?.cac_nganh_hoc?.nganh_2?.text_nganh ||
        ".Quản Lý Công Nghiệp",
      path: `quan-ly-cong-nghiep`
    },
    {
      image:
        majors?.majors?.cac_nganh_hoc?.nganh_3?.image_nganh ||
        "/nganh-kinh-te-cong-nghiep.webp",
      title:
        majors?.majors?.cac_nganh_hoc?.nganh_3?.text_nganh ||
        ".Kinh Tế Công nghiệp",
      path: `/kinh-te-cong-nghiep`
    },
    {
      image:
        majors?.majors?.cac_nganh_hoc?.nganh_4?.image_nganh ||
        "/nganh-ngon-ngu-anh.webp",
      title:
        majors?.majors?.cac_nganh_hoc?.nganh_4?.text_nganh || ".Ngôn ngữ Anh",
      path: `/ngon-ngu-anh`
    }
  ];
  return (
    <Box py={{ base: "8", lg: "12" }}>
      <Container maxW="7xl">
        <MotionTop>
          <Text
            py={{ base: 4, lg: 8 }}
            fontSize={{ base: "25px", md: "32px", lg: "32px" }}
            color={"blue.900"}
            textAlign={"center"}
            fontWeight={500}
          >
            {majors?.majors?.tieu_de_section || ".NGÀNH ĐÀO TẠO"}
          </Text>
        </MotionTop>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={5} py={5}>
          {Reg.map((Reg, index) => (
            <CardReg
              key={index}
              title={Reg.title}
              path={Reg.path}
              image={`${Reg.image}`}
            />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};
