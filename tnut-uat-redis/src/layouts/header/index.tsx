"use client";

import { FormMain } from "@/components/FormContact";
import { ModalBase } from "@/components/Modal";
import { InputSearch } from "@/features/search/InputSearch";
import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Container,
  Divider,
  Flex,
  HStack,
  IconButton,
  Popover,
  PopoverContent,
  PopoverTrigger,
  useDisclosure
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { DesktopNav } from "../components/DeskhopNav";
import { HeaderTop } from "../components/HeaderTop";
import { MobileNav } from "../components/MobileNav";

export const Header = () => {
  const { onToggle, onOpen, onClose, isOpen } = useDisclosure();
  const rou = useRouter();
  const [headt, setHeadt] = useState<"flex" | "none" | "sticky">("flex");
  const [nav, setNav] = useState<"flex" | "none">("none");
  const [colorh, setColorh] = useState<"white" | "gray.50">("gray.50");

  useEffect(() => {
    switch (rou.asPath) {
      case "/":
        setHeadt("flex");
        setNav("none");
        setColorh("gray.50");
        break;
      case "/#":
        setHeadt("flex");
        setNav("none");
        setColorh("gray.50");
        break;
      default:
        setHeadt("none");
        setNav("flex");
        setColorh("white");
    }
  }, [rou.asPath]);

  return (
    <>
      <Box
        zIndex={11}
        pos={"relative"}
        bg={"white"}
        w={"100%"}
        display={{ lg: `${headt}`, base: "none" }}
      >
        <Container maxW="7xl">
          <HeaderTop />
        </Container>
      </Box>

      <Divider />
      <Box
        boxShadow="xs"
        pos={"sticky"}
        top={"0"}
        left={0}
        right={0}
        zIndex={10}
        bg={colorh}
      >
        <Container
          as={Flex}
          minH={"60px"}
          py={{ base: 3 }}
          px={{ base: 4 }}
          align={"center"}
          justifyContent={"space-between"}
          maxW="7xl"
        >
          <HStack
            justifyContent={{ base: "flex-start", lg: "space-between" }}
            w={"100vw"}
          >
            <Box display={nav}>
              <Flex display={{ base: "none", lg: "flex" }}>
                <Link
                  href="/"
                  style={{ display: "flex", alignItems: "center", gap: "4px" }}
                >
                  <Image
                    width={60}
                    height={60}
                    src={`/logo-tnut.webp`}
                    alt="logo Trường Đại học Kỹ thuật Công nghiệp    "
                  />
                </Link>
              </Flex>
            </Box>

            <Flex
              ml={{ base: -2 }}
              display={{ base: "flex", lg: "none" }}
              justify={"start"}
            >
              <MobileNav />
            </Flex>

            <Flex
              display={{ base: "none", lg: "flex" }}
              align={"center"}
              justify={"end"}
            >
              <DesktopNav />
            </Flex>

            <Box display={{ base: "none", lg: "flex" }}>
              <Popover placement="bottom">
                <PopoverTrigger>
                  <IconButton
                    justifyContent={"flex-end"}
                    size="xl"
                    color="black"
                    _hover={{}}
                    bg="transparent"
                    aria-label="Search database"
                    icon={<SearchIcon w="1em" h="1em" />}
                    borderRadius={"0"}
                  />
                </PopoverTrigger>
                <PopoverContent p={5}>
                  <Box>
                    <InputSearch type="popover" />
                  </Box>
                </PopoverContent>
              </Popover>
            </Box>
          </HStack>
          <Box display={{ base: "flex", lg: "none" }}>
            <Link
              href="/"
              style={{ display: "flex", alignItems: "center", gap: "4px" }}
            >
              <Image
                width={50}
                height={50}
                // style={{ borderRadius: "50%" }}
                src={`/logo-tnut.webp`}
                alt="logo Trường Đại học Kỹ thuật Công nghiệp"
              />
            </Link>
          </Box>

          <ModalBase isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
            <FormMain />
          </ModalBase>
        </Container>
      </Box>
    </>
  );
};
