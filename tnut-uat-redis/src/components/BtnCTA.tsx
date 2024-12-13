"use client";

import {
  HStack,
  Heading,
  IconButton,
  IconButtonProps,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
  Tooltip
} from "@chakra-ui/react";
import { BiPhone } from "react-icons/bi";
import { BsMessenger } from "react-icons/bs";
import { MdEmail, MdOutlineMail } from "react-icons/md";
import { SiZalo } from "react-icons/si";
import { FormMain } from "./FormContact";
import { useState } from "react";

export const BtnPhone = ({
  link,
  label
}: {
  link?: string;
  label?: string;
}) => {
  return (
    <Tooltip
      label={label || ".0815674848"}
      placement="left"
      bg={"red.500"}
      hasArrow
    >
      <IconButton
        icon={<BiPhone />}
        size="lg"
        borderRadius={"50% 0 0 50%"}
        color={"white"}
        bg={"red.600"}
        p={"8px"}
        as={"a"}
        href={link || "tel: 0815674848"}
        aria-label="phone"
      />
    </Tooltip>
  );
};

export const BtnZalo = (props: IconButtonProps) => {
  return (
    <Tooltip label={"Zalo chat"} placement="left" bg={"blue.500"} hasArrow>
      <IconButton
        icon={<SiZalo />}
        size="lg"
        borderRadius={"50% 0 0 50%"}
        color={"white"}
        bg={"blue.500"}
        p={"8px"}
        as={"a"}
        href={"https://zalo.me/0815674848"}
        {...props}
      />
    </Tooltip>
  );
};

export const BtnMailN = (props: IconButtonProps) => {
  return (
    <Tooltip label={"Send email"} placement="left" bg={"blue.500"} hasArrow>
      <IconButton
        icon={<MdOutlineMail />}
        size="lg"
        borderRadius={"50% 0 0 50%"}
        color={"white"}
        bg={"blue.500"}
        p={"8px"}
        as={"a"}
        href={"mailto: hotro.tnut.edu.vn@gmail.com"}
        {...props}
      />
    </Tooltip>
  );
};
export const BtnMes = ({ link, label }: { link?: string; label?: string }) => {
  return (
    <Tooltip
      transition={"all 0.2s"}
      label={label || ".Facebook messenger"}
      placement="left"
      bg={"blue.500"}
      hasArrow
    >
      <IconButton
        icon={<BsMessenger />}
        size="lg"
        borderRadius={"50% 0 0 50%"}
        color={"white"}
        bg={"green.500"}
        p={"8px"}
        transition={"width ease .4s"}
        as={"a"}
        href={link || "https://m.me/daihoctuxatnut"}
        aria-label="mes"
      />
    </Tooltip>
  );
};

export const BtnEmail = ({
  link,
  label
}: {
  link?: string;
  label?: string;
}) => {
  const [formOpen, setFormOpen] = useState(false);

  const handleOpenForm = () => {
    setFormOpen(true);
  };

  const handleCloseForm = () => {
    setFormOpen(false);
  };

  return (
    <Popover
      placement="left"
      trigger="hover" // Chỉ mở Popover khi gọi handleOpenForm
      isOpen={formOpen} // Kiểm soát trạng thái Popover
      onClose={handleCloseForm} // Đóng Popover khi nhấn ra ngoài
    >
      <PopoverTrigger>
        <HStack
          spacing={0}
          borderRadius={0}
          bg={"orange.500"}
          transform={"rotate(270deg)"}
          onClick={handleOpenForm} // Mở Popover khi nhấn
        >
          <IconButton
            icon={<MdEmail />}
            size="lg"
            _hover={{}}
            color={"white"}
            bg={"orange.500"}
            p={"8px"}
            aria-label="email"
          />
          <Text pr={2} color={"white"}>
            {label || "Tư vấn ngay"}
          </Text>
        </HStack>
      </PopoverTrigger>
      <PopoverContent
        onMouseDown={(e) => e.stopPropagation()} // Ngăn sự kiện chuột lan ra ngoài
        onFocus={(e) => e.stopPropagation()} // Ngăn sự kiện focus gây đóng form
      >
        <PopoverArrow />
        <PopoverCloseButton onClick={handleCloseForm} />
        <PopoverHeader as={Heading} size={"md"} textAlign={"center"}>
          Để lại thông tin
        </PopoverHeader>
        <PopoverBody>{formOpen && <FormMain />}</PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
