import { BtnMes, BtnPhone, BtnEmail } from "@/components/BtnCTA";
import { Box, Flex, VStack } from "@chakra-ui/react";
import { useState, useEffect } from "react";
export const CTA = () => {
  const [page_content, setPageContent] = useState<any>(null);

  useEffect(() => {
    const getPageContent = async () => {
      try {
        const res = await fetch(`/api/content-page/?type=cta`, {
          next: { revalidate: 3 }
        });
        const data = await res.json();
        setPageContent(data?.posts[0]);
      } catch (error) {
        console.log(error);
      }
    };
    getPageContent();
  }, []);

  return (
    <Box
      pos={"fixed"}
      top={{ lg: "50%", base: "80%" }}
      right={"0"}
      className="CTA"
      zIndex={5}
    >
      <Flex
        key={"e1"}
        height={"160px"}
        width={"200px"}
        alignItems={"center"}
        top={"-160%"}
        left={"-105%"}
        position={"absolute"}
      >
        <BtnEmail label={page_content?.acf?.email_title} />
      </Flex>

      <VStack gap={0} alignItems={"flex-end"}>
        <BtnMes
          label={page_content?.acf?.messenger}
          link={page_content?.acf?.link_messenger}
        />
        <BtnPhone
          label={page_content?.acf?.phone}
          link={page_content?.acf?.link_phone}
        />
      </VStack>
    </Box>
  );
};
