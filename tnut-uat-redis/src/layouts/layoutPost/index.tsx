"use client";

import { Sidebar } from "@/layouts/components/Sidebar";
import { Container, GridItem, SimpleGrid } from "@chakra-ui/react";
import { ReactNode } from "react";

export const LayoutPost = ({ children }: { children: ReactNode }) => {
  return (
    <Container maxW={"7xl"} py={8}>
      <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={"8"}>
        <GridItem colSpan={{ base: 1, lg: 2 }}>{children}</GridItem>
        <GridItem className="sidebar-posts" colSpan={{ base: 1, lg: 1 }}>
          <Sidebar sticky="125px" checkpost={false} />
        </GridItem>
      </SimpleGrid>
    </Container>
  );
};
