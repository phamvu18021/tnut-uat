import {
  Box,
  Container,
  GridItem,
  SimpleGrid,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text
} from "@chakra-ui/react";
import { BtnTheme } from "./BtnTheme";
import { useModal } from "./ModalContext";
import { MajorSwipe } from "./MajorSwipe";

interface IMDetails {
  major: string;
  image: string;
  image_2: string;
  tabf: any;
  tabs: any;
  tabt: any;
  tabfp: any[];
  tabsp: any[];
  tabtp: string[];
}

export const MajorsDetails = (props: IMDetails) => {
  const { image, major, tabf, tabs, tabt, tabfp, tabsp, tabtp, image_2 } =
    props;
  const { isOpen, onOpen, onClose } = useModal();
  const MajorImg = [
    {
      title: "Ảnh giới thiệu 1",
      avt: `${image}`
    },
    {
      title: "Ảnh giới thiệu 2",
      avt: `${image_2}`
    }
  ];
  return (
    <>
      <Box>
        <Container maxW="7xl">
          <SimpleGrid columns={{ base: 1, md: 2 }} gap={24}>
            <GridItem colSpan={1}>
              <Text fontSize={{ base: 24, lg: 32 }} fontWeight={500}>
                {major}
              </Text>
              <Tabs pt={8} pb={12}>
                <TabList>
                  <Tab
                    fontSize={{ base: 16, lg: 20 }}
                    _selected={{ color: "orange.500" }}
                  >
                    {tabf}
                  </Tab>
                  <Tab
                    fontSize={{ base: 16, lg: 20 }}
                    _selected={{ color: "orange.500" }}
                  >
                    {tabs}
                  </Tab>
                  <Tab
                    fontSize={{ base: 16, lg: 20 }}
                    _selected={{ color: "orange.500" }}
                  >
                    {tabt}
                  </Tab>
                </TabList>

                <TabPanels>
                  <TabPanel>
                    {tabfp.map((line, index) => (
                      <div
                        style={{ paddingTop: "12px" }}
                        key={index}
                        dangerouslySetInnerHTML={{ __html: line }}
                      />
                    ))}
                  </TabPanel>
                  <TabPanel>
                    {tabsp.map((lines, indexs) => (
                      <div
                        style={{ paddingTop: "12px" }}
                        key={indexs}
                        dangerouslySetInnerHTML={{ __html: lines }}
                      />
                    ))}
                  </TabPanel>
                  <TabPanel>
                    {tabtp.map((linet, indext) => (
                      <div
                        style={{ paddingTop: "8px" }}
                        key={indext}
                        dangerouslySetInnerHTML={{ __html: linet }}
                      />
                    ))}
                  </TabPanel>
                </TabPanels>
              </Tabs>
              <Box display={"flex"} justifyContent={"start"}>
                <BtnTheme
                  color={"white"}
                  colorScheme="white"
                  size={{ base: "sm", md: "lg" }}
                  onClick={() => !isOpen && onOpen && onOpen()}
                  w={{ base: "200px", md: "220px", lg: "240px" }}
                >
                  ĐĂNG KÝ NGAY
                </BtnTheme>
              </Box>
            </GridItem>

            <GridItem colSpan={1}>
              {image_2 == "" && (
                <Box
                  aspectRatio={562 / 781}
                  bgImage={image}
                  bgSize={"cover"}
                  // w={"full"}
                  // h={781}
                  bgPosition={"center"}
                ></Box>
              )}
              {image_2 != "" && <MajorSwipe listImage={MajorImg} />}
            </GridItem>
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
};
