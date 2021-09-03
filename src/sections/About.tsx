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
      px={{ base: 4, md: 8 }}
      width="100%"
      textAlign="center"
    >
      <Stack>
        <Button colorScheme="white">Buy Astropets Here</Button>
        <Text as="h2">Until all Astropets are revealed!</Text>

        <Text as="p">
          In order to promise a fair distribution, this will be a blind public
          sale following our incremental pricing above. Your purchased artwork
          will remain a mystery until the sale has ended. The sale will end 10
          days after launch (or sooner if sold out!), after which your unique
          Astropets artwork will be revealed.
        </Text>
        <Stack direction={{ base: "row" }}>
          <Stack align="center">
            <Image src={star} width="55px" />
            <Text>Unique artwork</Text>
            <Text>
              Each Astropets has a unique style combination with no two artwork
              that are alike
            </Text>
          </Stack>
          <Stack align="center">
            <Image src={moon} width="55px" />

            <Text>Unique artwork</Text>
            <Text>
              Each Astropets has a unique style combination with no two artwork
              that are alike
            </Text>
          </Stack>
          <Stack align="center">
            <Image src={diamond} width="55px" />

            <Text>Unique artwork</Text>
            <Text>
              Each Astropets has a unique style combination with no two artwork
              that are alike
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </Flex>
  );
}

export default About;
