"use client";
import { SocialButton } from "@/components/SocialButton";
import { InputSearch } from "@/features/search/InputSearch";
import { useSize } from "@/hooks/useSizeWindow";
import { menus } from "@/router";
import {
  Box,
  Collapse,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  Icon,
  IconButton,
  Stack,
  useDisclosure
} from "@chakra-ui/react";
import Link from "next/link";
import { useRef } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsChevronDown, BsTiktok, BsYoutube } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import { Logo } from "./Logo";
interface INavItem {
  title: string;
  childs?: Array<{ title: string; childs?: Array<{}>; path?: string }>;
  path?: string;
  onClose: () => void;
}
export const MobileNavItem = ({ title, childs, path, onClose }: INavItem) => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Stack spacing={4} onClick={childs && onToggle}>
      <Flex
        py={2}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: "none"
        }}
        fontWeight={600}
        color={"white"}
      >
        <Link
          href={path ?? "#"}
          style={{ width: "100%" }}
          onClick={() => !childs && onClose()}
        >
          {title}
        </Link>
        {childs && (
          <Icon
            as={BsChevronDown}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={"20px"}
            h={"20px"}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={"white"}
          align={"start"}
        >
          {childs &&
            childs.map((child) => (
              <Link
                key={child.title}
                style={{
                  paddingTop: "8px",
                  paddingBottom: "8px",
                  fontWeight: "500",
                  width: "100%"
                }}
                href={child.path ?? "/"}
                onClick={onClose}
              >
                {child.title}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};
export const MobileNav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);
  const { size } = useSize();
  const { width } = size;
  return (
    <>
      <div>
        <IconButton
          w={"50px"}
          h={"50px"}
          ref={btnRef}
          onClick={onOpen}
          icon={<Icon as={AiOutlineMenu} w={"24px"} h={"24px"} />}
          variant={"ghost"}
          aria-label={"Toggle Navigation"}
        />
        <Drawer
          isOpen={width < 992 ? isOpen : false}
          placement="left"
          onClose={onClose}
          finalFocusRef={btnRef}
          size={"xs"}
        >
          <DrawerOverlay />
          <DrawerContent maxH={"100vh"}>
            <DrawerCloseButton />
            <DrawerHeader>
              <Flex onClick={onClose}>
                <Logo />
              </Flex>
            </DrawerHeader>
            <Divider />

            <DrawerBody bg={"blue.700"} className="test">
              <Stack
                className="test2"
                color={"white"}
                p={4}
                display={{ lg: "none" }}
              >
                {menus.map((navItem) => (
                  <MobileNavItem
                    key={navItem.title}
                    {...navItem}
                    onClose={onClose}
                  />
                ))}
              </Stack>
              <Box onSubmit={onClose}>
                <InputSearch type={"normal"} />
              </Box>

              <HStack py={4} spacing={2} display={{ base: "flex", lg: "flex" }}>
                <SocialButton
                  bagr="transparent"
                  label={"Facebook"}
                  href={"https://www.facebook.com/daihoctuxatnut"}
                >
                  <FaFacebook color="white" />
                </SocialButton>
                <SocialButton
                  bagr="transparent"
                  label={"Zalo"}
                  href={"https://zalo.me/0815674848"}
                >
                  <SiZalo color="white" />
                </SocialButton>
                <SocialButton
                  bagr="transparent"
                  label={"Tiktok"}
                  href={"https://www.tiktok.com/@tnut_elearning"}
                >
                  <BsTiktok color="white" />
                </SocialButton>

                <SocialButton
                  bagr="transparent"
                  label={"Youtube"}
                  href={"https://www.youtube.com/@etnut"}
                >
                  <BsYoutube color="white" />
                </SocialButton>
              </HStack>
            </DrawerBody>
            <Divider />
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
};
