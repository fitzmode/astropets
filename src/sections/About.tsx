import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Flex, Stack, Text } from "@chakra-ui/layout";
import React from "react";
import star from "../assets/icon_star.png";
import moon from "../assets/icon_moon.png";
import diamond from "../assets/icon_diamond.png";

function About() {
  return (
    <Flex
      background="brand.background"
      px={{ base: 12, md: 24 }}
      width="100%"
      textAlign="center"
      fontFamily="HelveticaRegular"
      py={{ base: 12, md: 16 }}
      color="#000"
    >
      <Stack align="center" spacing={{ base: 12, md: 16 }}>
        <Button
          bg="#fff"
          width="auto"
          color="black"
          alignSelf="auto"
          fontSize="28px"
          px={{ base: 2, md: 14 }}
          py={{ base: 2, md: 8 }}
        >
          Buy Astropets Here
        </Button>
        <Text as="h2" fontSize="32px" my="40px">
          Until all Astropets are revealed!
        </Text>

        <Text as="p" fontSize="24px" fontFamily="HelveticaRegular">
          In order to promise a fair distribution, this will be a blind public
          sale following our incremental pricing above. Your purchased artwork
          will remain a mystery until the sale has ended. The sale will end 10
          days after launch (or sooner if sold out!), after which your unique
          Astropets artwork will be revealed.
        </Text>
        <Stack direction={{ base: "column", md: "row" }} fontSize="28px">
          <Stack align="center" px={{ base: 4, md: 8 }}>
            <Image src={star} width="55px" />
            <Text>Unique artwork</Text>
            <Text fontSize="24px" marginBottom="1000px">
              Each Astropets has a unique style combination with no two artwork
              that are alike
            </Text>
          </Stack>
          <Stack align="center" px={{ base: 4, md: 8 }}>
            <Image src={moon} width="55px" />

            <Text>Full Ownership</Text>
            <Text fontSize="24px" px={{ base: 4, md: 8 }}>
              Full rights and freedom to do anything you would like with your
              artwork
            </Text>
          </Stack>
          <Stack align="center" px={{ base: 4, md: 8 }}>
            <Image src={diamond} width="55px" />

            <Text>Fair Distribution</Text>
            <Text fontSize="24px">
              Randomized distribution of artwork to ensure fairness
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </Flex>
  );
}

export default About;
