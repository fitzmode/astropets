import React from "react";
import { Link } from "wouter";
import {
  Box,
  Button,
  Flex,
  Image,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import headerImage from "../assets/gif.gif";
import logo from "../assets/logo.png";
import headerBg from "../assets/header_bg.jpg";

export default function Hero({
  title,
  subtitle,
  image,
  ctaLink,
  ctaText,
  ...rest
}: any) {
  return (
    <Flex
      align="center"
      justify="center"
      direction={{ base: "column-reverse", md: "row" }}
      wrap="no-wrap"
      minH="80vh"
      px={8}
      {...rest}
      width="100%"
      backgroundImage={`url(${headerBg})`}
      backgroundRepeat="no-repeat"
      backgroundAttachment="fixed"
      backgroundSize="cover"
      pt="70px"
    >
      <Stack textAlign="center">
        <Image src={logo} />
        <Image src={headerImage} />
        <Text> Astropets</Text>
        <Text> Digital Art x Collectible NFT</Text>
        <Text>
          {" "}
          Collection of 5885 unique, hand-illustrated characters headed to the
          moon.
        </Text>
        <Text> All systems go, ready for takeoff</Text>
        <Text> 3...2...1... BLAST OFF!</Text>
      </Stack>
    </Flex>
  );
}