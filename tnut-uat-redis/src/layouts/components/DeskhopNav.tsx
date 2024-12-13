import { menus } from "@/router";
import {
  Box,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Text,
  useDisclosure
} from "@chakra-ui/react";

import { FormMain } from "@/components/FormContact";
import { ModalBase } from "@/components/Modal";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
interface INavItem {
  title: string;
  children?: Array<INavItem>;
  path?: string;
}

export const DesktopNav = () => {
  const linkColor = "black";
  const linkHoverColor = "red.500";
  const { onToggle, onOpen, onClose, isOpen } = useDisclosure();

  const rou = useRouter();
  const [nav, setNav] = useState<"flex" | "none">("none");

  useEffect(() => {
    switch (rou.asPath) {
      case "/":
        setNav("none");
        break;

      default:
        setNav("flex");
    }
  }, [rou.asPath]);
  return (
    <>
      <Stack direction={"row"} alignItems={"center"}>
        {menus.map((navItem) => (
          <Box key={navItem.title}>
            <Popover trigger={"hover"} placement={"bottom-start"}>
              <PopoverTrigger>
                <Box
                  as={Link}
                  p={3}
                  href={navItem.path ?? "#"}
                  fontSize={{ base: "0.4rem", lg: "1rem" }}
                  fontWeight={{ base: "400", lg: "500" }}
                  color={linkColor}
                  _hover={{
                    color: linkHoverColor
                  }}
                >
                  {navItem.title}
                </Box>
              </PopoverTrigger>

              {navItem.childs && (
                <PopoverContent
                  border={0}
                  boxShadow={"xl"}
                  bg={"linear-gradient(180deg, #fff 0%, #f8f9fa 100%)"}
                  borderRadius={0}
                  minW={"2xs"}
                  maxW={200}
                  zIndex={99}
                >
                  <Stack rowGap={0}>
                    {navItem.childs.map((child) => (
                      <DesktopSubNav key={child.title} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>

      <ModalBase isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
        <FormMain />
      </ModalBase>
    </>
  );
};

export const DesktopSubNav = ({ title, path }: INavItem) => {
  return (
    <Box
      bg={"linear-gradient(180deg, #fff 0%, #f8f9fa 100%)"}
      className="boxtoo"
      as={Link}
      href={path}
      role={"group"}
      display={"block"}
      _hover={{ bg: "facebook.800", color: "white" }}
    >
      <Stack gap={0} direction={"row"} align={"center"} className="stacktit">
        <Box>
          <Text
            p={4}
            transition={"all .3s ease"}
            color={"#054659"}
            _groupHover={{ color: "white" }}
            fontWeight={600}
          >
            {title}
          </Text>
        </Box>
      </Stack>
    </Box>
  );
};
