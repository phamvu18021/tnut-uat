"use client";
import { FormMain } from "@/components/FormContact";

import {
  Box,
  Container,
  GridItem,
  List,
  ListIcon,
  SimpleGrid,
  Text
} from "@chakra-ui/react";
export const LkgTuyensinh = (info: any) => {
  const inforInit = [
    {
      title: info?.info?.info_1?.title || ".Đối tượng tuyển sinh",
      detail: [
        {
          list: [
            info?.info?.info_1?.text_1 ||
              ".Tốt nghiệp THPT hoặc tương đương trở lên"
          ]
        }
      ]
    },
    {
      title: info?.info?.info_2?.title || ".Hình thức tuyển sinh",
      detail: [
        {
          list: [info?.info?.info_2?.text_1 || ".Chỉ xét tuyển hồ sơ đầu vào."]
        }
      ]
    },
    {
      title: info?.info?.info_3?.title || ".Thời gian học",
      detail: [
        {
          list: [
            info?.info?.info_3?.text_1 ||
              ".Từ 2 - 4,5 năm tùy thuộc đầu vào của sinh viên"
          ]
        }
      ]
    },
    {
      title: info?.info?.info_4?.title || ".Danh sách ngành học",
      detail: [
        {
          list: [
            info?.info?.info_4?.text_1 || ".Ngôn Ngữ Anh",
            info?.info?.info_4?.text_2 || ".Kỹ Thuật Xây Dựng",
            info?.info?.info_4?.text_3 || ".Quản Lý Công Nghiệp",
            info?.info?.info_4?.text_4 || ".Kinh Tế Công Nghiệp"
          ]
        }
      ]
    },
    {
      title: info?.info?.info_5?.title || ".Liên hệ",
      detail: [
        {
          list: [
            info?.info?.info_5?.text_1 || ".Hotline: 081.567.4848",
            info?.info?.info_5?.text_2 || ".Website: tnut.vn"
          ]
        }
      ]
    },
    {
      title: info?.info?.info_6?.title || ".Trạm tuyển sinh",
      detail: [
        {
          list: [
            info?.info?.info_6?.text_1 ||
              ".Hà Nội: 116 Trần Vĩ, Mai Dịch, Cầu Giấy, Hà Nội",
            info?.info?.info_6?.text_2 ||
              ".Tp. HCM: 91 Kí Con, Nguyễn Thái Bình, Quận 1, Tp. HCM"
          ]
        }
      ]
    }
  ];
  const [infor, setInfo] =
    useState<{ title: string; detail: any }[]>(inforInit);
  useEffect(() => {
    setInfo(inforInit);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [info]);
  return (
    <Container maxW={"7xl"}>
      <Box>
        <Text
          fontSize={{ base: "25px", md: "25px", lg: "40px" }}
          color={"blue.800"}
          fontWeight={600}
          textAlign={"center"}
        >
          THÔNG TIN TUYỂN SINH
        </Text>
      </Box>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        maxW={"7xl"}
        py={{ base: 12, lg: 12 }}
        gap={{ base: 12, lg: 32 }}
        margin={"0 auto"}
      >
        <GridItem>
          <Accs accs={infor} />
        </GridItem>

        <GridItem colSpan={1}>
          <Text
            color={"blue.700"}
            fontSize={"20px"}
            fontWeight={600}
            textAlign={"center"}
          >
            ĐĂNG KÝ NHẬN TƯ VẤN MIỄN PHÍ
          </Text>
          <Box pt={{ base: "18px", lg: "0px" }}>
            <FormMain />
          </Box>
        </GridItem>
      </SimpleGrid>
    </Container>
  );
};

import { CheckIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  HStack,
  Heading,
  ListItem
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

export const Accs = ({
  accs
}: {
  accs: {
    title: string;
    detail: {
      title: string;
      list: string[];
    }[];
  }[];
}) => {
  return (
    <Accordion defaultIndex={[0, 1, 2, 3, 4, 5]} allowMultiple>
      {accs?.map((acc, index) => (
        <AccordionItem border={"none"} key={index} rounded={"sm"}>
          <AccordionButton
            pointerEvents={"none"}
            cursor={"not-allowed"}
            bg={"gray.50"}
            rounded={"sm"}
          >
            <Box flex="1" textAlign="left">
              <HStack>
                <Heading fontSize={{ base: "sm", md: "md" }}>
                  {acc.title}
                </Heading>
              </HStack>
            </Box>
          </AccordionButton>
          <AccordionPanel p={0.5} color={"gray.900"}>
            {acc?.detail?.map((item, index) => (
              <Box key={index}>
                <Heading as={"h4"} size={"sm"}>
                  {item?.title}
                </Heading>
                <List>
                  {item?.list?.map((item, i) => (
                    <ListItem key={i}>
                      <ListIcon as={CheckIcon} color="green.500" /> {item}
                    </ListItem>
                  ))}
                </List>
              </Box>
            ))}
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
