import { VStack, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link
      href="/"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "4px",
        justifyContent: "flex-start"
      }}
    >
      <Image
        width={60}
        height={60}
        src={`/logo-tnut.webp`}
        alt="logo Trường Đại học Kỹ thuật Công nghiệp"
      />

      <VStack gap={0}>
        <Text
          fontSize={{ lg: "12px", base: "8px" }}
          textAlign={"center"}
          fontWeight={500}
          color={"gray.500"}
          display={{ base: "none", lg: "contents" }}
        >
          ĐẠI HỌC THÁI NGUYÊN
        </Text>
        <Text
          fontSize={{ lg: "16px", base: "14px" }}
          textAlign={"center"}
          fontWeight={700}
        >
          TRƯỜNG ĐẠI HỌC KỸ THUẬT CÔNG NGHIỆP
        </Text>
        <Text
          fontSize={{ lg: "12px", base: "8px" }}
          textAlign={"center"}
          fontWeight={500}
          color={"gray.500"}
          display={{ base: "none", lg: "contents" }}
        >
          THAINGUYEN UNIVERSITY OF TECHNOLOGY
        </Text>
      </VStack>
    </Link>
  );
};
