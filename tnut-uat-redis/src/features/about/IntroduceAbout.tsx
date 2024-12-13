"use client";
import { AboutSwipe } from "@/components/AboutSwipe";
import { BtnTheme } from "@/components/BtnTheme";
import { useModal } from "@/components/ModalContext";
import { MotionTop } from "@/components/MotionTop";
import {
  Box,
  Container,
  Divider,
  GridItem,
  VStack,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Stack,
  Text
} from "@chakra-ui/react";
import { FcBookmark } from "react-icons/fc";
export const IntroduceAbout = (introduceAbout: any) => {
  const { isOpen, onOpen, onClose } = useModal();
  const AboutImg = [
    {
      title: "Ảnh giới thiệu 1",
      avt: `/about1.webp`
    },
    {
      title: "Ảnh giới thiệu 2",
      avt: `/about2.webp`
    },

    {
      title: "Ảnh giới thiệu 3",
      avt: `/about3.webp`
    },

    {
      title: "Ảnh giới thiệu 4",
      avt: `/about4.webp`
    },

    {
      title: "Ảnh giới thiệu 5",
      avt: `/about5.webp`
    },

    {
      title: "Ảnh giới thiệu 6",
      avt: `/about6.webp`
    }
  ];
  return (
    <Container maxW={"7xl"}>
      <Box display={"flex"} justifyContent={"center"} mt={8}>
        <VStack>
          <MotionTop>
            <Text
              textAlign={"center"}
              fontSize={{ base: "30px", md: "30px", lg: "36px" }}
              fontWeight={{ lg: 600, base: 600 }}
              color={"blue.800"}
            >
              {introduceAbout?.introduceAbout?.text_about?.text_1 ||
                "ĐÔI NÉT VỀ ĐẠI HỌC KỸ THUẬT CÔNG NGHIỆP."}
            </Text>
          </MotionTop>
          <MotionTop>
            <Divider
              borderBottomWidth={"3px"}
              borderBlockEndColor={"orange"}
              w={"200px"}
              p={{ base: "6px", lg: "12px" }}
            />
          </MotionTop>
        </VStack>
      </Box>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        maxW={"7xl"}
        py={{ lg: 4, base: 4 }}
        gap={{ base: 12, lg: 16 }}
        margin={"0 auto"}
      >
        <GridItem display={{ base: "none", lg: "block" }} colSpan={1}>
          <Box pt={{ lg: "40px", base: "0px" }}>
            <AboutSwipe listImage={AboutImg} />
          </Box>
        </GridItem>

        <GridItem colSpan={{ base: 1, lg: 1 }}>
          <Stack bg="White" height="full">
            <List
              spacing={4}
              pt={"8px"}
              fontSize={{ base: "18px", lg: "18px", md: "md" }}
            >
              <MotionTop>
                <ListItem mt={{ lg: "19px" }}>
                  <ListIcon as={FcBookmark} />
                  <span
                    dangerouslySetInnerHTML={{
                      __html: `${
                        introduceAbout?.introduceAbout?.text_about?.text_2 ||
                        "Trường Đại học Kỹ Thuật Công Nghiệp (TNUT) là trường công lập, được thành lập ngày 19/8/1965 theo quyết định số 164/CP Hội đồng Chính phủ là một trong những trường đại học uy tín tại Việt Nam, Nổi tiếng với chất lượng đào tạo và đội ngũ giảng viên giàu kinh nghiệm trong lĩnh vực kỹ thuật công nghiệp.Chương trình liên thông đại học từ xa của Đại học Kỹ Thuật Công Nghiệp được thiết kế nhằm đáp ứng nhu cầu học tập và phát triển nghề nghiệp của những người đã có kiến thức và kinh nghiệm trong lĩnh vực kỹ thuật."
                      }`
                    }}
                  />
                </ListItem>
              </MotionTop>

              <MotionTop>
                <ListItem>
                  <ListIcon as={FcBookmark} />
                  <span
                    dangerouslySetInnerHTML={{
                      __html: `${
                        introduceAbout?.introduceAbout?.text_about?.text_3 ||
                        ".Hệ đại học từ xa TNUT E-learning là chương trình giáo dục dành cho những người đã tốt nghiệp trung học phổ thông trở lên có được tấm bằng đại học. Phá bỏ mọi rào cản về không gian và thời gian, giúp nâng cao trình độ chuyên môn và nhận được bằng cấp trong lĩnh vực kỹ thuật công nghiệp…"
                      }`
                    }}
                  />
                </ListItem>
              </MotionTop>
            </List>
          </Stack>
        </GridItem>

        <GridItem display={{ base: "block", lg: "none" }} colSpan={1}>
          <Box pb={{ base: "40px" }}>
            <AboutSwipe listImage={AboutImg} />
          </Box>
        </GridItem>
      </SimpleGrid>

      <Box display={"flex"} justifyContent={"center"} mt={4} mb={8}>
        <BtnTheme
          color={"white"}
          colorScheme="white"
          size={{ base: "sm", md: "lg" }}
          onClick={() => !isOpen && onOpen && onOpen()}
          w={{ base: "200px", md: "240px", lg: "280px" }}
        >
          {introduceAbout?.introduceAbout?.text_about?.text_button ||
            ".Nhận thông tin lộ trình học"}
        </BtnTheme>
      </Box>
    </Container>
  );
};
