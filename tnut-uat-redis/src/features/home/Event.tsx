"use client";

import { CardBlogEvent } from "@/components/CardBlog";
import { HeadSectionEvent } from "@/components/HeadSection";
import {
  Button,
  Container,
  GridItem,
  HStack,
  Heading,
  SimpleGrid
} from "@chakra-ui/react";
import Link from "next/link";
import { useState, useEffect } from "react";

export const Event = () => {
  const [news, setNews] = useState<any[]>([]);
  const [notifis, setNotifis] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getPosts = async () => {
      setIsLoading(true);
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
      setIsLoading(false);
    };

    getPosts();
  }, []);

  useEffect(() => {
    const getPosts = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`/api/posts/?type=notifis&page=1`, {
          next: { revalidate: 3 }
        });

        const data: { posts: any[]; totalPosts: string } = await res.json();
        const { posts } = data;
        posts?.length && setNotifis([posts[0], posts[1], posts[2], posts[4]]);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };

    getPosts();
  }, []);

  return (
    <Container maxW={"7xl"} py={"64px"}>
      <HeadSectionEvent
        title="Tin tức - Thông báo"
        subtitle="tin tức"
        desc="Đừng vội lướt qua những tin tức và thông báo cập nhật từ chúng tôi"
      />
      <SimpleGrid columns={{ base: 1, md: 2 }} pt={"24px"} spacing={"8"}>
        <GridItem>
          <Heading
            as={"h3"}
            size={{ base: "sm", lg: "md" }}
            borderBottom={"1px solid"}
            borderColor={"gray.100"}
            textAlign={{ base: "center", lg: "left" }}
            color={"blue.800"}
          >
            Tin tức
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 1, lg: 2 }} gap={"24px"}>
            {news?.map((post, index) => (
              <CardBlogEvent
                key={index}
                image={post?.featured_image || ""}
                tag="Tin tức"
                bgTag="red.500"
                title={post?.title?.rendered || ""}
                desc={post?.excerpt?.rendered || ""}
                path={`/${post.slug}`}
              />
            ))}
          </SimpleGrid>
        </GridItem>
        {notifis?.length > 0 && (
          <GridItem>
            <Heading
              as={"h3"}
              size={{ base: "sm", lg: "md" }}
              textAlign={{ base: "center", lg: "right" }}
              borderBottom={"1px solid"}
              borderColor={"gray.100"}
              color={"blue.800"}
            >
              Thông báo
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 1, lg: 2 }} gap={"24px"}>
              {notifis?.map((post, index) => (
                <CardBlogEvent
                  key={index}
                  image={post?.featured_image || ""}
                  tag="Thông báo"
                  bgTag="green.500"
                  title={post?.title?.rendered || ""}
                  desc={post?.excerpt?.rendered || ""}
                  path={`/${post.slug}`}
                />
              ))}
            </SimpleGrid>
          </GridItem>
        )}
      </SimpleGrid>

      <HStack justify={"center"}>
        <Button
          as={Link}
          href={"/tin-tuc"}
          colorScheme={"#064121"}
          variant={"link"}
          fontSize={{ base: "md", md: "xl" }}
          pt={6}
          fontWeight={500}
        >
          Xem tất cả
        </Button>
      </HStack>
    </Container>
  );
};
