"use client";
import { FormMain } from "@/components/FormContact";
import { MotionTop } from "@/components/MotionTop";

import {
  Box,
  Container,
  Divider,
  GridItem,
  HStack,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Stack,
  Text,
  UnorderedList
} from "@chakra-ui/react";
import { FcBookmark } from "react-icons/fc";
export const DkMain = (dkmain: any) => {
  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        maxW={"7xl"}
        py={{ base: 12, lg: 20 }}
        gap={{ base: 12, lg: 32 }}
        margin={"0 auto"}
      >
        <GridItem colSpan={1}>
          <Box pt={{ base: "20px", lg: "0px" }}>
            <Text
              color={"blue.700"}
              fontSize={"24px"}
              textAlign={{ base: "center", lg: "center" }}
              fontWeight={"600"}
            >
              {dkmain?.dkmain?.form?.title ||
                ".ĐĂNG KÝ XÉT TUYỂN KHÔNG CẦN THI"}
            </Text>
            <Text
              color={"gray.700"}
              fontSize={"18px"}
              pb={"8px"}
              textAlign={{ base: "center", lg: "center" }}
              fontWeight={"400"}
            >
              {dkmain?.dkmain?.form?.desc ||
                ".Tư vấn chuyên nghiệp. Thủ tục nhanh gọn. Đi học được luôn. Ưu tiên nộp hồ sơ sớm."}
            </Text>
            <FormMain />
          </Box>
        </GridItem>

        <GridItem colSpan={{ base: 1, lg: 1 }}>
          <Stack bg="White" height="full">
            <MotionTop>
              <Text
                fontSize={{ base: "25px", md: "25px", lg: "40px" }}
                color={"blue.800"}
                fontWeight={600}
              >
                {dkmain?.dkmain?.info_right.title || ".THÔNG TIN TUYỂN SINH"}
              </Text>
            </MotionTop>
            <MotionTop>
              <Divider
                borderBottomWidth={"3px"}
                borderBlockEndColor={"orange"}
                w={"150px"}
              />
            </MotionTop>
            <List spacing={4} pt={"8px"} fontSize={{ base: "18px" }}>
              <MotionTop>
                <ListItem mt={{ lg: "19px" }}>
                  <HStack>
                    <ListIcon as={FcBookmark} />
                    <Text fontWeight={600}>
                      {dkmain?.dkmain?.info_right.head_1 ||
                        ".Đối tượng xét tuyển:"}
                    </Text>
                  </HStack>
                </ListItem>
                <UnorderedList pl={4}>
                  <ListItem>
                    {dkmain?.dkmain?.info_right.text_1 || ".Tốt nghiệp THPT"}
                  </ListItem>
                  <ListItem>
                    {dkmain?.dkmain?.info_right.text_2 ||
                      ".Tốt nghiệp Trung cấp chuyên nghiệp"}
                  </ListItem>
                  <ListItem>
                    {dkmain?.dkmain?.info_right.text_3 ||
                      ".Tốt nghiệp Cao đẳng"}
                  </ListItem>
                  <ListItem>
                    {dkmain?.dkmain?.info_right.text_4 || ".Tốt nghiệp Đại học"}
                  </ListItem>
                </UnorderedList>
              </MotionTop>

              <MotionTop>
                <ListItem>
                  <HStack>
                    <ListIcon as={FcBookmark} />
                    <Text fontWeight={600}>
                      {dkmain?.dkmain?.info_right.head_2 ||
                        ".Hình thức tuyển sinh:"}
                    </Text>
                  </HStack>
                  <UnorderedList pl={4}>
                    <ListItem>
                      {dkmain?.dkmain?.info_right.text_5 ||
                        ".Xét tuyển theo hồ sơ đăng ký. KHÔNG THI TUYỂN."}
                    </ListItem>
                  </UnorderedList>
                </ListItem>
              </MotionTop>
              <MotionTop>
                <ListItem>
                  <HStack>
                    <ListIcon as={FcBookmark} />
                    <Text fontWeight={600}>
                      {dkmain?.dkmain?.info_right.head_3 ||
                        ".Thời gian tuyển sinh:"}
                    </Text>
                  </HStack>
                  <UnorderedList pl={4}>
                    <ListItem>
                      {dkmain?.dkmain?.info_right.text_6 ||
                        ".Liên tục trong năm."}
                    </ListItem>
                  </UnorderedList>
                </ListItem>
              </MotionTop>
            </List>
          </Stack>
        </GridItem>
      </SimpleGrid>
    </Container>
  );
};
