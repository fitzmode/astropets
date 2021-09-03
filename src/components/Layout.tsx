import React from "react";
import { Flex } from "@chakra-ui/react";
import Header from "./Header";
import Footer from "./Footer";

export default function LandingLayout(props: any) {
  return (
    <Flex
      direction="column"
      align="center"
      position="relative"
      {...props}
      color="#fff"
    >
      <Header />
      {props.children}
      <Footer />
    </Flex>
  );
}
