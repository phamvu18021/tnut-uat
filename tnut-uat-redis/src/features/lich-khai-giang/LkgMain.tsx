"use client";
import {
  Box,
  Container,
  GridItem,
  List,
  ListItem,
  Stack,
  Text
} from "@chakra-ui/react";

export const LkgMain = ({
  title,
  lichkg,
  lichkg2
}: {
  title: string;
  lichkg: string;
  lichkg2: string;
}) => {
  return (
    <Container maxW={"7xl"} justifyContent={"center"}>
      <Box py={{ base: 12, lg: 16 }} gap={16} margin={"0 auto"}>
        <GridItem colSpan={{ base: 1, lg: 2 }}>
          <Stack bg="White" height="full">
            <List
              spacing={4}
              pt={"8px"}
              fontSize={{ base: "18px", lg: "21px", md: "md" }}
            >
              <Box border={"1px solid black"}>
                <ListItem>
                  <Text
                    color={"blue.400"}
                    fontSize={{ base: "20px", lg: "24px" }}
                    pt={2}
                    textAlign={"center"}
                    fontWeight={700}
                  >
                    {title}
                  </Text>
                </ListItem>
                <ListItem pt={4}>
                  <Text textAlign={"center"} color={"black"} fontWeight={400}>
                    - {lichkg}
                  </Text>
                </ListItem>
                <ListItem pb={4}>
                  <Text textAlign={"center"} color={"black"} fontWeight={400}>
                    - {lichkg2}
                  </Text>
                </ListItem>
              </Box>
            </List>
          </Stack>
        </GridItem>
      </Box>
    </Container>
  );
};
