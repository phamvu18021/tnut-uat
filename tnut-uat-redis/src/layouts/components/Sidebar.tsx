"use client";

import { FormMain } from "@/components/FormContact";
import { categotys } from "@/features/home/Categorys";
import { toSlug } from "@/ultil/toSlug";
import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Input,
  SimpleGrid,
  Text,
  VStack
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const Item = ({
  path,
  image,
  title
}: {
  path: string;
  image: string;
  title: string;
}) => {
  return (
    <Box
      as={Link}
      href={path || "/"}
      pos="relative"
      transition={"all ease .4s"}
      _hover={{ transform: "translateY(-10px)" }}
      // aspectRatio={7 / 4}
      objectFit="cover"
    >
      <Image
        loading="lazy"
        width={700}
        height={400}
        src={image}
        alt={title}
        objectFit="cover"
        style={{ height: "150px", maxWidth: "100%", filter: "brightness(50%)" }}
      />

      <Box
        as={Flex}
        pos={"absolute"}
        top={0}
        left={"10%"}
        right={"40%"}
        bottom={0}
        align={"center"}
      >
        <Heading as={"h2"} size={"md"} color={"white"} textAlign={"center"}>
          {title}
        </Heading>
      </Box>
    </Box>
  );
};

export const Sidebar = ({
  sticky,
  checkpost
}: {
  sticky?: string;
  checkpost: boolean;
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const [totalNotifis, setTotalNotifis] = useState("0");
  const [checkInput, setCheckInput] = useState(false);
  const [notifis, setNotifis] = useState<any[]>([]);

  useEffect(() => {
    const getNotifis = async () => {
      try {
        const resp = await fetch(`/api/posts/?type=notifis&page=1`, {
          next: { revalidate: 3 }
        });

        const datap: { posts: any[]; totalPosts: string } = await resp.json();
        const { posts, totalPosts } = datap;
        posts && setNotifis(posts);
        totalPosts && setTotalNotifis(totalPosts);
      } catch (error) {
        console.log(error);
      }
    };

    getNotifis();
  }, []);

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const str = toSlug({ input: searchQuery });
    if (str != "") {
      router.push(`/tim-kiem?keyword=${str}&page=1`);
    }
    setSearchQuery("");
  };

  useEffect(() => {
    const str = toSlug({ input: searchQuery });
    if (searchQuery != "" && str == "") {
      setCheckInput(true);
    } else {
      setCheckInput(false);
    }
  }, [searchQuery]);

  return (
    <Box pos={sticky ? "sticky" : "static"} top={sticky} bg={"gray.100"}>
      <Box pt={4} px={6}>
        <form onSubmit={onSearch}>
          <HStack columnGap={"0"}>
            <Input
              required
              value={searchQuery}
              type="Text"
              border={"1px solid #BFBFBF "}
              borderRadius={0}
              px={4}
              placeholder="Tìm kiếm..."
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button
              borderRadius={0}
              onClick={onSearch}
              bg={"blue.800"}
              color={"white"}
              _hover={{
                bg: "red.600"
              }}
            >
              Tìm kiếm
            </Button>
          </HStack>
        </form>
        {checkInput && (
          <Box
            pt={2}
            display={"flex"}
            color={"#f5222d"}
            justifyContent={"center"}
          >
            <Text>Từ khóa tìm kiếm không hợp lệ</Text>
          </Box>
        )}
      </Box>

      {checkpost && (
        <Box px={6} pt={"32px"}>
          <Heading
            as={"h3"}
            size={"sm"}
            pb={"20px"}
            textAlign={{ base: "center", lg: "center" }}
          >
            ĐĂNG KÝ NGAY ĐỂ NHẬN TƯ VẤN
          </Heading>
          <FormMain />
        </Box>
      )}

      {!checkpost && (
        <Box px={6} pt={"32px"}>
          <Heading
            as={"h3"}
            size={"sm"}
            pb={"20px"}
            textAlign={{ base: "center", lg: "center" }}
          >
            ĐĂNG KÝ NGAY ĐỂ NHẬN TƯ VẤN
          </Heading>
          <FormMain />
        </Box>
      )}

      <Box px={6} pt={"32px"}>
        <Heading
          as={"h3"}
          size={"md"}
          pb={"20px"}
          textAlign={{ base: "center", lg: "start" }}
        >
          Các ngành đào tạo
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 3, lg: 1 }} gap={"20px"}>
          {categotys.map((cat, index) => (
            <Item
              key={index}
              path={cat.path}
              title={cat.title}
              image={`${cat.image}`}
            />
          ))}
        </SimpleGrid>
      </Box>

      {/* <Box pt={"32px"}>
        <Heading
          as={"h3"}
          size={"md"}
          pb={"20px"}
          pl={"20px"}
          textAlign={{ base: "center", lg: "start" }}
        >
          Mạng xã hội
        </Heading>
        <Box rounded={"sm"} p="24px">
          <VStack spacing={"16px"}>
            <Button
              leftIcon={<FaFacebook />}
              colorScheme="facebook"
              w={"full"}
              as={Link}
              href={"https://www.facebook.com/daihoctuxatnut"}
            >
              Facebook
            </Button>
            <Button
              leftIcon={<BiLogoTiktok />}
              bg="blackAlpha.800"
              w={"full"}
              color={"whiteAlpha.800"}
              as={Link}
              href={"https://www.tiktok.com/@tnut_elearning"}
            >
              Tiktok
            </Button>
            <Button
              leftIcon={<FaYoutube />}
              colorScheme="red"
              w={"full"}
              as={Link}
              href={"https://www.youtube.com/@etnut"}
            >
              Youtube
            </Button>
          </VStack>
        </Box>
      </Box>

      <Box pt={"32px"}>
        <Heading
          as={"h3"}
          size={"md"}
          pb={"20px"}
          pl={"20px"}
          textAlign={{ base: "center", lg: "start" }}
        >
          Mục lục
        </Heading>
        <Box
          rounded={"sm"}
          p="24px"
          borderTop={"1px solid"}
          borderColor={"gray.300"}
        >
          <HStack
            as={Link}
            href={"/tin-tuc"}
            display={"flex"}
            justifyContent={"space-between"}
            _hover={{ color: "blue.300" }}
          >
            <Text>Tin Tức</Text>
            <Text>{totalPosts}</Text>
          </HStack>

          <HStack
            as={Link}
            href={"/thong-bao"}
            display={"flex"}
            justifyContent={"space-between"}
            _hover={{ color: "blue.300" }}
          >
            <Text>Thông Báo</Text>
            <Text>{totalNotifis}</Text>
          </HStack>
        </Box>
      </Box> */}

      <Box py={"32px"}>
        <Heading
          as={"h3"}
          size={"md"}
          pb={"8px"}
          pl={"20px"}
          textAlign={{ base: "center", lg: "start" }}
        >
          Thông báo
        </Heading>
        <Box>
          {notifis &&
            notifis.slice(0, 5).map((item: any, index: number) => (
              <Box py={3} px={6} key={index}>
                <Text
                  as={Link}
                  href={`/${item.slug}`}
                  lineHeight={1.2}
                  css={{
                    display: "-webkit-box",
                    WebkitLineClamp: "2",
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis"
                  }}
                  fontWeight={500}
                >
                  {item.title.rendered}
                </Text>
              </Box>
            ))}
        </Box>
      </Box>
    </Box>
  );
};
