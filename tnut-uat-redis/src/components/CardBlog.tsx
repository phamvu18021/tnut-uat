"use client";

import { clean } from "@/lib/sanitizeHtml";
import {
  Avatar,
  AvatarBadge,
  Box,
  Center,
  Divider,
  Flex,
  GridItem,
  Heading,
  SimpleGrid,
  Stack,
  Text
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export const CardBlog = ({
  image,
  title,
  desc,
  path,
  date,
  imageH,
  preview
}: {
  image?: string;
  title: string;
  desc: string;
  path: string;
  date?: string;
  imageH?: string;
  preview?: boolean;
}) => {
  const [isMounted, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);
  return (
    <Box
      as={Link}
      style={{ textDecoration: "none" }}
      href={path}
      py={4}
      px={6}
      transition={"all ease .4s"}
      _hover={{ transform: "translateY(-6px)" }}
      className="card-blog"
    >
      <Flex
        flexDir={"column"}
        justify={"space-between"}
        bg={"white"}
        rounded={"sm"}
        overflow={"hidden"}
      >
        <Box>
          {!preview && (
            <Box
              bg={"white"}
              mb={6}
              pos={"relative"}
              aspectRatio={508 / 338}
              overflow={"hidden"}
            >
              <Box objectFit="contain">
                <Image
                  loading="lazy"
                  width={656}
                  height={436}
                  src={image || `/blog.webp`}
                  style={{ maxHeight: imageH }}
                  alt={title}
                />
              </Box>
            </Box>
          )}
          <Stack>
            <Heading
              color={"facebook.800"}
              as={"h3"}
              fontSize={{ base: "md", lg: "xl" }}
              fontWeight={"600"}
              mt={2}
              _hover={{ color: "red.500" }}
              css={{
                display: "-webkit-box",
                WebkitLineClamp: "2",
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis"
              }}
              dangerouslySetInnerHTML={{ __html: clean(title) }}
            />
            <Text fontSize={"md"} mt={-2} color={"facebook.600"}>
              {date?.slice(5)}
            </Text>
            {isMounted && (
              <Text
                color={"gray.500"}
                fontSize={".8rem"}
                css={{
                  display: "-webkit-box",
                  WebkitLineClamp: "2",
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  textOverflow: "ellipsis"
                }}
                dangerouslySetInnerHTML={{ __html: clean(desc) }}
              />
            )}
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
};

export const CardBlogS = ({
  image,
  title,
  desc,
  path,
  tag,
  bgTag,
  date,
  imageH
}: {
  image?: string;
  title: string;
  desc: string;
  path: string;
  tag?: string;
  bgTag?: string;
  date?: string;
  imageH?: string;
}) => {
  const [isMounted, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  return (
    <Box
      as={Link}
      style={{ textDecoration: "none" }}
      href={path}
      py={4}
      px={6}
      transition={"all ease .4s"}
      _hover={{ transform: "translateY(-6px)" }}
      className="card-blog"
    >
      <SimpleGrid columns={2} spacing={4} bg={"white"}>
        <GridItem colSpan={1}>
          <Box bg={"gray.100"} overflow={"hidden"}>
            <Box>
              <Image
                loading="lazy"
                width={504}
                height={320}
                src={image || `/blog.webp`}
                style={{ maxHeight: imageH }}
                alt={title}
              />
            </Box>
          </Box>
        </GridItem>
        <GridItem colSpan={1}>
          <Stack>
            <Heading
              className="event-heading"
              color={"facebook.700"}
              fontSize={{ base: "sm", lg: "xl" }}
              fontFamily={"body"}
              fontWeight={"600"}
              _hover={{ color: "red.400" }}
              css={{
                display: "-webkit-box",
                WebkitLineClamp: "2",
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis"
              }}
              dangerouslySetInnerHTML={{ __html: clean(title) }}
            />
            <Text fontSize={"md"} pb={1} color={"gray.400"}>
              {date?.slice(5)}
            </Text>
            {isMounted && (
              <Text
                color={"gray.500"}
                fontSize={".9rem"}
                css={{
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  textOverflow: "ellipsis"
                }}
                dangerouslySetInnerHTML={{ __html: clean(desc) }}
              />
            )}
          </Stack>
        </GridItem>
      </SimpleGrid>
    </Box>
  );
};

export const CardLBlog = ({
  image,
  title,
  author,
  tags,
  desc,
  path,
  date,
  imageH
}: {
  image?: string;
  title: string;
  author: string;
  tags: string;
  desc: string;
  path: string;
  date?: string;
  imageH?: string;
}) => {
  const [isMounted, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);
  return (
    <Box
      as={Link}
      style={{ textDecoration: "none" }}
      href={path}
      py={4}
      px={6}
      transition={"all ease .4s"}
      _hover={{ transform: "translateY(-6px)" }}
      className="card-blog"
    >
      <Flex
        flexDir={"column"}
        justify={"space-between"}
        bg={"white"}
        rounded={"sm"}
        overflow={"hidden"}
      >
        <Box>
          <Box
            bg={"white"}
            pos={"relative"}
            aspectRatio={508 / 338}
            overflow={"hidden"}
          >
            <Box objectFit="contain">
              <Image
                loading="lazy"
                width={656}
                height={436}
                src={image || `/blog.webp`}
                style={{ maxHeight: imageH }}
                alt={title}
              />
            </Box>
          </Box>
          <Stack>
            <Text
              color={"blue.500"}
              fontSize={{ base: "18", lg: "24px" }}
              fontWeight={"400"}
              mt={2}
              _hover={{ color: "blue.800" }}
              css={{
                display: "-webkit-box",
                WebkitLineClamp: "2",
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis"
              }}
              dangerouslySetInnerHTML={{ __html: clean(title) }}
            />
            <Stack align={"center"} direction="row" h="28px">
              <Text
                fontSize={{ base: "14px", lg: "16px" }}
                pr={2}
                mt={-2}
                color={"gray.500"}
              >
                by {author}
              </Text>
              <Divider color={"black"} orientation="vertical" />
              <Text
                fontSize={{ base: "14px", lg: "16px" }}
                mt={-2}
                px={2}
                color={"gray.500"}
              >
                {date}
              </Text>
              <Divider orientation="vertical" />
              <Text
                display={{ base: "none", lg: "block" }}
                fontSize={"16px"}
                mt={-2}
                px={2}
                color={"blue.300"}
              >
                {tags}
              </Text>
            </Stack>

            <Text
              display={{ base: "block", lg: "none" }}
              fontSize={{ base: "16px", lg: "16px" }}
              mt={-2}
              px={2}
              color={"blue.300"}
            >
              {tags}
            </Text>

            {isMounted && (
              <Text
                pt={4}
                color={"gray.500"}
                fontSize={{ base: "14px", lg: "16px" }}
                css={{
                  display: "-webkit-box",
                  WebkitLineClamp: "2",
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  textOverflow: "ellipsis"
                }}
                dangerouslySetInnerHTML={{ __html: clean(desc) }}
              />
            )}
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
};
export const CardBlogEvent = ({
  image,
  title,
  desc,
  path,
  tag,
  bgTag,
  date,
  imageH
}: {
  image?: string;
  title: string;
  desc: string;
  path: string;
  tag?: string;
  bgTag?: string;
  date?: string;
  imageH?: string;
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
      py={6}
      pos={"relative"}
      transition={"all ease .4s"}
      _hover={{ transform: "translateY(-6px)" }}
      className="card-blog"
      h={"100%"}
    >
      <Flex
        flexDir={"column"}
        justify={"space-between"}
        maxW={"445px"}
        w={"full"}
        bg={"white"}
        boxShadow={"2xl"}
        rounded={"sm"}
        p={6}
        overflow={"hidden"}
        h={"100%"}
      >
        <Box>
          <Box
            bg={"gray.100"}
            mt={-6}
            mx={-6}
            mb={2}
            pos={"relative"}
            aspectRatio={260 / 173}
            overflow={"hidden"}
          >
            <Image
              loading="lazy"
              width={600}
              height={350}
              src={image || `/blog.webp`}
              style={{ maxHeight: imageH }}
              alt={title}
            />
          </Box>
          <Stack>
            <Box>
              {tag && (
                <Text
                  fontWeight={600}
                  fontSize={".8rem"}
                  bg={bgTag || "green.500"}
                  py={"6px"}
                  px={"12px"}
                  color={"white"}
                  as={"span"}
                  rounded={"md"}
                >
                  {tag}
                </Text>
              )}
            </Box>
            <Box h={"2.5rem"}>
              <Heading
                className="event-heading"
                color={"gray.700"}
                fontSize={{ base: "sm", lg: "md" }}
                fontFamily={"body"}
                _hover={{ color: "red.400" }}
                css={{
                  display: "-webkit-box",
                  WebkitLineClamp: "2",
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  textOverflow: "ellipsis"
                }}
                dangerouslySetInnerHTML={{ __html: clean(title) }}
              />
            </Box>

            {isMounted && (
              <Box h={"5rem"}>
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
              </Box>
            )}
          </Stack>
        </Box>
        <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
          <Avatar bg={"teal.300"} size={"sm"}>
            <AvatarBadge boxSize="1.25em" bg="green.500" />
          </Avatar>
          <Stack direction={"column"} spacing={0} fontSize={"sm"}>
            <Text fontWeight={600}>Admin</Text>
            <Text color={"gray.500"}>{date}</Text>
          </Stack>
        </Stack>
      </Flex>
    </Center>
  );
};
