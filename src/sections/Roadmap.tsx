import { Flex, Text, Stack, Box, Image } from "@chakra-ui/react";
import React from "react";
import ten from "../assets/Astropets_Roadmap10.png";
import twentyfive from "../assets/Astropets_Roadmap25.png";
import fifty from "../assets/Astropets_Roadmap50.png";
import seventyfive from "../assets/Astropets_Roadmap75.png";
import hundred from "../assets/Astropets_Roadmap100.png";

const steps = [
  {
    image: ten,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fermentum ipsum at lacinia semper.",
  },
  {
    image: twentyfive,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fermentum ipsum at lacinia semper.",
  },
  {
    image: fifty,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fermentum ipsum at lacinia semper.",
  },
  {
    image: seventyfive,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fermentum ipsum at lacinia semper.",
  },
  {
    image: hundred,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fermentum ipsum at lacinia semper.",
  },
];

function Roadmap() {
  return (
    <Flex
      bg="brand.background"
      flex="1"
      width="100%"
      color="#000"
      alignItems="center"
      justifyContent="center"
      fontFamily="HelveticaRegular"
    >
      <Stack align="center" mx={{ base: 12, md: 28 }}>
        <Text
          as="h1"
          fontSize="64px"
          fontFamily="Herculanum"
          textTransform="uppercase"
        >
          Roadmap
        </Text>
        <Stack spacing={{ base: 12, md: 8 }} align="center">
          {steps.map((step) => (
            <Stack
              key={step.image}
              direction={{ base: "column", md: "row" }}
              align="center"
            >
              <Box
                justifyContent="center"
                alignItems="center"
                display="flex"
                width="170px"
                height="170px"
              >
                <Image src={step.image} />
              </Box>
              <Box
                fontSize="26px"
                justifyContent="center"
                alignItems="center"
                display="flex"
                px={{ base: 8, md: 8 }}
              >
                <Text as="p" textAlign={{ base: "center", md: "left" }}>
                  {step.text}
                </Text>
              </Box>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Flex>
  );
}

export default Roadmap;
