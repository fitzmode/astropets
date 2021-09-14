import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";
import footerLogo from "../assets/footer-logo.png";

export default function Logo(props: any) {
  return (
    <Box {...props}>
      <Image src={footerLogo} />
    </Box>
  );
}
