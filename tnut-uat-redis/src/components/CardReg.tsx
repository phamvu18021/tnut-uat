"use client";

import { Box, Center, Flex, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
export const CardReg = ({
  image,
  path,
  title
}: {
  image?: string;
  path: string;
  title: string;
}) => {
  return (
    <Box as={Link} href={path || "/"}>
      <Center
        m={2}
        style={{ textDecoration: "none" }}
        pos={"relative"}
        transition={"all ease .4s"}
        className="card-blog"
        h={"100%"}
        paddingTop={{ base: "10px" }}
      >
        <Flex
          flexDir={"column"}
          justify={"space-between"}
          maxW={"700px"}
          w={"full"}
          overflow={"hidden"}
          h={"100%"}
        >
          <Box>
            <Box pos={"relative"} aspectRatio={431 / 288}>
              <Image
                width={431}
                height={288}
                src={image || `/blog.webp`}
                loading="lazy"
                alt={""}
                style={{ height: "100%", objectFit: "cover" }}
              />
            </Box>
            <Stack>
              <Text
                mt={"16px"}
                fontWeight={500}
                color={"gray.600"}
                fontSize={{ base: "16px", lg: "20px" }}
                textAlign={"center"}
              >
                {title}
              </Text>
            </Stack>
          </Box>
        </Flex>
      </Center>
    </Box>
  );
};
