"use client";

import { clean } from "@/lib/sanitizeHtml";
import { Box, HStack, Heading, Image, Stack, Text } from "@chakra-ui/react";

export const CardTestimonials = ({
  image,
  title,
  desc,

  career,
  imageH
}: {
  image?: string;
  title: string;
  desc: string;

  career?: string;
  imageH?: string;
}) => {
  return (
    <Box
      style={{ textDecoration: "none" }}
      py={4}
      px={6}
      transition={"all ease .4s"}
      _hover={{ transform: "translateY(-6px)" }}
      className="card-blog"
    >
      <HStack alignItems={"center"} pb={8}>
        <Box
          display={"flex"}
          bg={"white"}
          pos={"relative"}
          aspectRatio={70 / 70}
          justifyContent={"center"}
        >
          <Image
            loading="lazy"
            width={70}
            height={70}
            src={image || `/blog.webp`}
            style={{ height: "70", width: "70" }}
            alt={title}
          />
        </Box>
        <Stack>
          <Heading
            color={"facebook.800"}
            as={"h3"}
            fontSize={{ base: "md", lg: "xl" }}
            fontWeight={"600"}
            css={{
              display: "-webkit-box",
              WebkitLineClamp: "2",
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis"
            }}
            dangerouslySetInnerHTML={{ __html: clean(title) }}
          />
          <Text fontSize={"12px"} mt={-2} color={"facebook.600"}>
            {career}
          </Text>
        </Stack>
      </HStack>

      <Text
        color={"gray.500"}
        fontSize={"1rem"}
        css={{
          display: "-webkit-box",
          WebkitLineClamp: "8",
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          textOverflow: "ellipsis"
        }}
        dangerouslySetInnerHTML={{ __html: desc }}
      />
    </Box>
  );
};
