"use client";

import { CardTestimonials } from "@/components/CardTestimonials";
import { Box, Container, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSize } from "../../hooks/useSizeWindow";

export const StyledContainer = styled(Container)`
  .mySwiper {
    padding-bottom: 60px;
  }

  .swiper-slide {
    height: 250px;
  }
`;

export const Testimonials = (testimonials: any) => {
  const Testi = [
    {
      image:
        testimonials?.testimonials?.cac_danh_gia?.danh_gia_1?.anh_hoc_vien ||
        "/testimo.webp",
      name:
        testimonials?.testimonials?.cac_danh_gia?.danh_gia_1?.ten_hoc_vien ||
        ".Nguyễn Thị Ngọc Lan",
      career:
        testimonials?.testimonials?.cac_danh_gia?.danh_gia_1?.nghe_nghiep ||
        `.Chuyên Viên Phân tích và Nghiên cứu Cấp cao`,
      comment:
        testimonials?.testimonials?.cac_danh_gia?.danh_gia_1?.danh_gia ||
        ".Sau khi trải qua 4 học kỳ thì tôi cảm thấy chương trình học online này là chương trình hữu ích. Khóa học giúp em nâng cao kỹ năng sử dụng online platform được thiết kế tương tự với phần mềm cuả các công ty có kỹ thuật hiện đại. Ở mỗi học kỳ có lịch trình cụ thể, tài liệu học tập rõ ràng và mang tính áp dụng cao."
    },
    {
      image:
        testimonials?.testimonials?.cac_danh_gia?.danh_gia_2?.anh_hoc_vien ||
        "/testimo2.webp",
      name:
        testimonials?.testimonials?.cac_danh_gia?.danh_gia_2?.ten_hoc_vien ||
        ".Phạm Văn Phong",
      career:
        testimonials?.testimonials?.cac_danh_gia?.danh_gia_2?.nghe_nghiep ||
        `.Nhân viên văn phòng`,
      comment:
        testimonials?.testimonials?.cac_danh_gia?.danh_gia_2?.danh_gia ||
        ".Học tập trực tuyến mang nhiều ưu điểm vượt trội đã làm thay đổi mạnh mẽ khả năng tự học nhằm đáp ứng chương trình học tập. Nhà trường luôn tạo điều kiện cho học viên có thể sử dụng kho tài liệu phong phú nhằm nâng cao hiệu quả học tập."
    },
    {
      image:
        testimonials?.testimonials?.cac_danh_gia?.danh_gia_3?.anh_hoc_vien ||
        "/testimo3.webp",
      name:
        testimonials?.testimonials?.cac_danh_gia?.danh_gia_3?.ten_hoc_vien ||
        ".Đậu Thị Phương Thảo",
      career:
        testimonials?.testimonials?.cac_danh_gia?.danh_gia_3?.nghe_nghiep ||
        `.Nhân viên văn phòng`,
      comment:
        testimonials?.testimonials?.cac_danh_gia?.danh_gia_3?.danh_gia ||
        ".Phương pháp học trực tuyến của trường phù hợp với người đi làm bận rộn. Chỉ với 1 chiếc máy tính hoặc 1 chiếc smartphone bạn đã có thể học tập mọi lúc mọi nơi. Hình thức học trực tuyến giúp tôi vừa học để tích lũy kiến thức mà vẫn đảm bảo công việc cơ quan."
    },
    {
      image:
        testimonials?.testimonials?.cac_danh_gia?.danh_gia_1?.anh_hoc_vien ||
        "/testimo.webp",
      name:
        testimonials?.testimonials?.cac_danh_gia?.danh_gia_1?.ten_hoc_vien ||
        ".Nguyễn Thị Ngọc Lan",
      career:
        testimonials?.testimonials?.cac_danh_gia?.danh_gia_1?.nghe_nghiep ||
        `.Chuyên Viên Phân tích và Nghiên cứu Cấp cao`,
      comment:
        testimonials?.testimonials?.cac_danh_gia?.danh_gia_1?.danh_gia ||
        ".Sau khi trải qua 4 học kỳ thì tôi cảm thấy chương trình học online này là chương trình hữu ích. Khóa học giúp em nâng cao kỹ năng sử dụng online platform được thiết kế tương tự với phần mềm cuả các công ty có kỹ thuật hiện đại. Ở mỗi học kỳ có lịch trình cụ thể, tài liệu học tập rõ ràng và mang tính áp dụng cao."
    }
  ];

  const { size } = useSize();
  return (
    <Box>
      <Box bg={"gray.100"}>
        <Text
          py={12}
          fontSize={{ base: "25px", md: "32px", lg: "32px" }}
          color={"blue.900"}
          textAlign={"center"}
          fontWeight={500}
        >
          {testimonials?.testimonials?.tieu_de_section ||
            ".ĐÁNH GIÁ CỦA HỌC VIÊN"}
        </Text>
      </Box>

      <StyledContainer pt={20} maxW="7xl" py={20}>
        <Swiper
          slidesPerView={
            (size.width < 480 && 1) || (size.width < 992 && 2) || 3
          }
          spaceBetween={36}
          pagination={{
            clickable: true
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {Testi?.map((testimo: any, index: number) => (
            <SwiperSlide key={index}>
              <CardTestimonials
                career={testimo?.career}
                key={index}
                title={testimo?.name}
                desc={testimo.comment}
                image={testimo?.image}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </StyledContainer>
    </Box>
  );
};
