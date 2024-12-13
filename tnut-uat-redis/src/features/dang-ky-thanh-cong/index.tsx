"use client";

import { Box, Container, Text } from "@chakra-ui/react";

import { BtnTheme } from "@/components/BtnTheme";
import { useModal } from "@/components/ModalContext";
import { useEffect, useState } from "react";
import { SamePosts } from "../post/Sames";

export const DangkyTc = () => {
  const [news, setNews] = useState<any[]>([]);
  const { isOpen, onOpen, onClose } = useModal();
  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await fetch(`/api/posts/?type=news&page=1`, {
          next: { revalidate: 3 }
        });

        const data: { posts: any[]; totalPosts: string } = await res.json();
        const { posts } = data;
        posts?.length && setNews([posts[0], posts[1], posts[2], posts[4]]);
      } catch (error) {
        console.log(error);
      }
    };

    getPosts();
  }, []);

  return (
    <>
      <Box
        bg={"rgba(0, 0, 0, 0.5)"}
        bgImage={"url('bannernews.webp')"}
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
          <Box py={24}>
            <Text
              fontWeight={400}
              textAlign={"start"}
              fontSize={{ base: "24px", lg: "60px" }}
              pb={{ base: "36px", lg: "52px" }}
            >
              ĐĂNG KÝ THÀNH CÔNG!
            </Text>
            <Text>
              Cảm ơn bạn đã để lại thông tin. Cán bộ tư vấn sẽ liên hệ lại hỗ
              trợ thông tin chi tiết chương trình học cho bạn sớm!
            </Text>
          </Box>
        </Container>
      </Box>
      <Container maxW="7xl" justifyContent="center">
        <SamePosts catId={news[0]?.categories[0]} id={String(news[0]?.id)} />
        <Box display={"flex"} justifyContent={"center"} pb={8}>
          <BtnTheme
            color={"white"}
            colorScheme="white"
            size={{ base: "sm", md: "lg" }}
            onClick={() => !isOpen && onOpen && onOpen()}
            w={{ base: "200px", md: "260px", lg: "320px" }}
          >
            Xem thêm về chương trình
          </BtnTheme>
        </Box>
      </Container>
    </>
  );
};
