import { Flex, Text, Stack, Box } from "@chakra-ui/layout";
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
      align="center"
      color="#000"
    >
      <Stack align="center">
        <Text as="h1" textTransform="uppercase">
          Roadmap
        </Text>
        <Stack>
          {steps.map((step) => (
            <Stack key={step.image} direction="row">
              <Box
                boxSize="170px"
                backgroundImage={`url(${step.image})`}
                backgroundRepeat="no-repeat"
                backgroundPosition="center center"
                borderRadius="50%"
                backgroundSize="cover"
              ></Box>
              <Box display="flex" justifyContent="center" alignItems="center">
                <Text as="p">{step.text}</Text>
              </Box>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Flex>
  );
}

export default Roadmap;
