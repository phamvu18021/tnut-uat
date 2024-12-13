"use client";

import { CardBlog } from "@/components/CardBlog";
import { HeadSection } from "@/components/HeadSection";
import { Loading } from "@/components/Loading";
import { clean } from "@/lib/sanitizeHtml";
import { formatDate } from "@/ultil/date";
import {
  Box,
  Center,
  Container,
  GridItem,
  SimpleGrid,
  Text
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

export const DraftPosts = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getPosts = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`/api/posts-draft/?len=${9}`);

        const data: { posts: any[]; totalPosts: string } = await res.json();
        const { posts } = data;
        posts?.length && setPosts(posts);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };

    getPosts();
  }, []);

  if (isLoading) return <Loading he="50vh" />;

  if (posts?.length === 0)
    return (
      <Container maxW={"6xl"} py={{ base: "32px", md: "48px" }}>
        <Center minH={"50vh"}>Không có bài viết nào mới xuất bản</Center>
      </Container>
    );

  return (
    <Box>
      <Container maxW={"6xl"} py={{ base: "32px", md: "48px" }}>
        <HeadSection subtitle="Danh sách bài viết chưa xuất bản" />
        <Text fontSize={"16px"} as="i" py={12}>
          Danh sách 09 bài viết chưa xuất bản gần đây
        </Text>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing={{ base: "16px", md: "24px" }}
        >
          {posts?.map((post: any, index: number) => (
            <GridItem key={index}>
              <CardBlog
                date={post?.date ? formatDate(post.date) : ""}
                title={post?.title?.rendered}
                desc={clean(post.excerpt.rendered)}
                image={""}
                path={`/preview/${post?.id}`}
                preview
              />
            </GridItem>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};
