import { BtnTheme } from "@/components/BtnTheme";
import { FormMain } from "@/components/FormContact";
import { ModalBase } from "@/components/Modal";
import { useModal } from "@/components/ModalContext";
import { Box, HStack, Icon, Link, Tag, TagLabel } from "@chakra-ui/react";
import { ReactNode, useEffect, useState } from "react";
import { LuPhone } from "react-icons/lu";
import { Logo } from "./Logo";

export const Tags = ({
  label,
  path,
  children
}: {
  label: string;
  path: string;
  children: ReactNode;
}) => {
  return (
    <Tag
      color="gray.500"
      borderRadius="full"
      variant="solid"
      bg={"transparent"}
      py="8px"
      px="8px"
      as={Link}
      href={path}
    >
      {children}
      <TagLabel fontSize={{ base: "4rem", md: "md" }}>{label}</TagLabel>
    </Tag>
  );
};

export const HeaderTop = () => {
  const { onOpen, onClose, isOpen, onToggle } = useModal();
  return (
    <>
      <HStack align={"center"} justify={"space-between"} py={2}>
        <Box flex={1} display={{ base: "none", lg: "flex" }}>
          <Logo />
        </Box>

        <Box
          w={{ base: "-moz-min-content" }}
          display="flex"
          justifyContent={{ base: "space-between", lg: "flex-end" }}
        >
          <Tags path="tel:0815674848" label="081.567.4848">
            <Icon w={"1.3em"} h={"1.2em"} as={LuPhone} pr={0.2} />
          </Tags>

          <BtnTheme
            color={"white"}
            size={{ base: "sm", md: "lg" }}
            onClick={onToggle}
            w={"200px"}
          >
            ĐĂNG KÝ
          </BtnTheme>
        </Box>
      </HStack>
      <ModalBase
        isOpen={isOpen || false}
        onClose={() => onClose && onClose()}
        onOpen={() => onOpen && onOpen()}
      >
        <FormMain />
      </ModalBase>
    </>
  );
};
