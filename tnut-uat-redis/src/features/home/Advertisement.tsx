import { BtnTheme } from "@/components/BtnTheme";
import { useModal } from "@/components/ModalContext";
import {
  Box,
  Container,
  GridItem,
  SimpleGrid,
  Text,
  VStack
} from "@chakra-ui/react";
import Image from "next/image";
export const Advertisement = (advertisement: any) => {
  const { isOpen, onOpen, onClose } = useModal();
  return (
    <Box bg={"blue.900"} py={{ base: 2, lg: 10 }}>
      <Container maxW={"7xl"}>
        <SimpleGrid columns={{ base: 1, lg: 2 }}>
          <GridItem colSpan={1}>
            <VStack
              py={{ base: 10, lg: 12 }}
              spacing={{ base: 8, lg: 8 }}
              justifyContent={"center"}
            >
              <Box>
                <Text
                  fontSize={{ base: "24px", lg: "36px" }}
                  color={"white"}
                  fontWeight={"300"}
                  textAlign={{ base: "center" }}
                >
                  {advertisement?.advertisement?.quang_cao?.text_1 ||
                    ".HỌC ĐẠI HỌC TỪ XA"}
                </Text>
                <Text
                  fontSize={{ base: "22px", lg: "36px" }}
                  color={"white"}
                  fontWeight={"600"}
                  textAlign={{ base: "center" }}
                >
                  {advertisement?.advertisement?.quang_cao?.text_2 ||
                    ".BẰNG CÓ GIÁ TRỊ TƯƠNG ĐƯƠNG HỆ CHÍNH QUY"}
                </Text>
              </Box>

              <Box>
                <Text
                  fontSize={{ base: "14px", lg: "16px" }}
                  color={"white"}
                  fontWeight={"300"}
                  textAlign={{ base: "center", lg: "center" }}
                >
                  {advertisement?.advertisement?.quang_cao?.text_3 ||
                    ".Tốt nghiệp được cấp bằng KỸ SƯ/CỬ NHÂN không ghi hình thức đào tạo, có giá trị vĩnh viễn"}
                </Text>
              </Box>
              <BtnTheme
                color={"white"}
                colorScheme="white"
                size={{ base: "sm", md: "lg" }}
                onClick={() => !isOpen && onOpen && onOpen()}
                w={"300px"}
                h={"60px"}
              >
                {advertisement?.advertisement?.quang_cao?.text_button ||
                  ".NHẬN TÀI KHOẢN HỌC THỬ"}
              </BtnTheme>
            </VStack>
          </GridItem>
          <GridItem colSpan={1}>
            <Box display={"flex"} justifyContent={"center"} py={8}>
              <Image
                loading="lazy"
                alt="bang-dai-hoc"
                src={
                  advertisement?.advertisement?.anh_bang || "/bang-dai-hoc.webp"
                }
                width={"500"}
                height={"500"}
                style={{ width: "80%", height: "auto" }}
              />
            </Box>
          </GridItem>
        </SimpleGrid>
      </Container>
    </Box>
  );
};
