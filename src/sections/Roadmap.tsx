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
    text: "Giveaway: 3 Astropets to three random minters. We want to reward our early supporters :)",
  },
  {
    image: twentyfive,
    text: "Giveaway: $500 to one lucky minter",
  },
  {
    image: fifty,
    text: "Merch: Customized merchandise will be awarded to 2 lucky minters. We'll let the community vote on the what merch you want us to create!",
  },
  {
    image: seventyfive,
    text: "Giveaway: $2,500 - we'll award five lucky minters $500 each",
  },
  {
    image: hundred,
    text: "Donate 3 ETH to charity of choiceWe'll let the community vote on the charity for the donation.",
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
      id="roadmap"
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
