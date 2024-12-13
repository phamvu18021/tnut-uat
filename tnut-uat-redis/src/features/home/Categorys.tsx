"use client";

import { CardCat } from "@/components/CardCat";
import { HeadSection } from "@/components/HeadSection";
import { Box, Container, SimpleGrid } from "@chakra-ui/react";

export const categotys = [
  {
    image: "/nganh-quan-li-cong-nghiep.webp",
    path: "/quan-ly-cong-nghiep",
    title: "Ngành quản lý công nghiệp",
    desc: "Học ngành quản lý công nghiệp sinh viên có thể nghiên cứu chuyên sâu về Khoa học máy tính, Công nghệ phần mềm, Kỹ thuật máy tính, Hệ thống thông tin, Mạng máy tính và truyền thông, An toàn thông tin mạng"
  },
  {
    image: "/nganh-xay-dung.webp",
    path: "/ky-thuat-xay-dung",
    title: "Ngành kỹ thuật xây dựng",
    desc: "Ngành kỹ thuật xây dựng là ngành sử dụng những công nghệ tiên tiến, những công nghệ hiện đại của thời địa 4.0 những công nghệ này giúp ích rất nhiều trong hoạt động của con người,"
  },
  {
    image: "/nganh-kinh-te-cong-nghiep.webp",
    path: "/kinh-te-cong-nghiep",
    title: "Ngành kinh tế công nghiệp",
    desc: "Ngành kinh tế công nghiệp chuẩn bị cho người học những năng lực cần thiết cho việc quản lý các loại hình tổ chức khác nhau, từ các doanh nghiệp cho đến các đơn vị thuộc khu vực"
  },
  {
    image: "/nganh-ngon-ngu-anh.webp",
    path: "/ngon-ngu-anh",
    title: "Ngành ngôn ngữ Anh",
    desc: "Ngành ngôn ngữ Anh chuẩn bị cho người học những năng lực cần thiết cho việc quản lý các loại hình tổ chức khác nhau, từ các doanh nghiệp cho đến các đơn vị thuộc khu vực"
  }
];

export const Categorys = () => {
  return (
    <Box py={"48px"}>
      <Container maxW="6xl">
        <HeadSection subtitle="chuyên ngành" />
        <SimpleGrid spacing={"8"} columns={{ base: 1, md: 2, lg: 4 }}>
          {categotys.map((categoty, index) => (
            <CardCat
              key={index}
              desc={categoty.desc}
              path={categoty.path}
              title={categoty.title}
              image={`${categoty.image}`}
            />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};
