"use client";

import {
  AspectRatio,
  Box,
  Divider,
  GridItem,
  Heading,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Stack
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { FcBookmark } from "react-icons/fc";
import { useInView } from "react-intersection-observer";
export const Circulars = (circulars: any) => {
  const items = [
    {
      text:
        circulars?.circulars?.thong_tu?.text_2 ||
        ".Ngày 30/12/2019, Bộ Giáo dục và Đào tạo đã ban hành Thông tư 27/2019/TT-BGDĐT quy định nội dung chính ghi trên văn bằng và phụ lục văn bằng giáo dục đại học."
    },
    {
      text:
        circulars?.circulars?.thong_tu?.text_3 ||
        ".Đặc biệt, một trong những điểm mới của Thông tư này là không ghi thông tin về hình thức đào tạo như chính quy hoặc vừa làm vừa học; học từ xa hay tự học có hướng dẫn trong nội dung chính của văn bằng như quy định cũ tại phụ lục kèm theo Thông tư số 19/2011/TT-BGDĐT.      "
    }
  ];

  const [videoSrc, setVideoSrc] = useState(
    "https://www.youtube.com/embed/nZvtnzMb0PA?si=Df21_aaIe2S1x4Ie"
  );
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5 // Adjust threshold as needed
  });

  useEffect(() => {
    if (inView) {
      // Set the video source when it's in view
      setVideoSrc(
        circulars?.circulars?.link_video ||
          "https://www.youtube.com/embed/nZvtnzMb0PA?si=Df21_aaIe2S1x4Ie"
      );
    }
  }, [inView, circulars?.circulars?.link_video]);

  return (
    <Box
      py={{ base: "10", lg: "16" }}
      id="sectionIntroduce"
      margin={"0 auto"}
      bg={"gray.50"}
    >
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        maxW={"7xl"}
        margin={"0 auto"}
        gap={{ base: 12, lg: 20 }}
      >
        <GridItem colSpan={1}>
          <Box pt={20}>
            <div ref={ref}>
              {inView && (
                <AspectRatio maxW="560px" ratio={16 / 9} maxH={"315px"}>
                  <iframe
                    title="Video"
                    src={videoSrc}
                    loading="lazy"
                    allowFullScreen
                  />
                </AspectRatio>
              )}
            </div>
          </Box>
        </GridItem>

        <Stack bg="gray.50" height="full" padding={"40px"}>
          <Heading
            fontSize={{ base: "20px", md: "24px", lg: "28px" }}
            color={"blue.600"}
          >
            {circulars?.circulars?.thong_tu?.text_1 || ".THÔNG TƯ 27/2019/TT"}
          </Heading>
          <Divider
            borderBottomWidth={"3px"}
            borderBlockEndColor={"orange"}
            w={"200px"}
            p={{ base: "6px", lg: "15px" }}
          />
          <List
            spacing={30}
            pt={{ lg: "15px", base: "15px" }}
            fontSize={{ base: "16px", lg: "18px" }}
          >
            {items.map((item, index) => (
              <ListItem
                key={index}
                mt={{ lg: "19px" }}
                maxW={{ lg: "950px", base: "auto" }}
              >
                <ListIcon as={FcBookmark} />
                {item.text}
              </ListItem>
            ))}
          </List>
        </Stack>
      </SimpleGrid>
    </Box>
  );
};
