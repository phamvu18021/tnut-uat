"use client";

import { Box, Center, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export const CardCat = ({
  image,
  title,
  desc,
  path
}: {
  image?: string;
  title: string;
  desc: string;
  path: string;
}) => {
  const [isMounted, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);
  return (
    <Center
      as={Link}
      style={{ textDecoration: "none" }}
      href={path}
      pos={"relative"}
      transition={"all ease .4s"}
      _hover={{ transform: "translateY(-4px)" }}
      className="card-blog"
      h={"100%"}
    >
      <Flex
        flexDir={"column"}
        justify={"space-between"}
        maxW={"527px"}
        w={"full"}
        rounded={"sm"}
        p={6}
        overflow={"hidden"}
        h={"100%"}
      >
        <Box>
          <Box
            bg={"gray.100"}
            mt={{ lg: -6 }}
            mx={-6}
            mb={6}
            pos={"relative"}
            height={{ lg: "auto", md: "auto", base: "auto" }}
          >
            <Image
              loading="lazy"
              width={326}
              height={450}
              src={image || `/blog.webp`}
              alt={title}
              style={{
                objectFit: "cover",
                width: "100%",
                height: "auto",
                borderRadius: "21px"
              }}
            />
          </Box>
          <Stack>
            <Heading
              className="event-heading"
              color={"gray.700"}
              fontSize={{ base: "sm", lg: "lg" }}
              fontFamily={"body"}
              _hover={{ color: "red.400" }}
              css={{
                display: "-webkit-box",
                WebkitLineClamp: "2",
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
                textAlign: "center"
              }}
            >
              {title}
            </Heading>
            {isMounted && (
              <Text
                color={"gray.500"}
                fontSize={".8rem"}
                css={{
                  display: "-webkit-box",
                  WebkitLineClamp: "4",
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  textOverflow: "ellipsis"
                }}
                dangerouslySetInnerHTML={{ __html: desc }}
              />
            )}
          </Stack>
        </Box>
      </Flex>
    </Center>
  );
};
