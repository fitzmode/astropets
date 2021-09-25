import { Image } from "@chakra-ui/image";
import { Flex, Stack, Text } from "@chakra-ui/layout";
import React from "react";
import image1 from "../assets/web_image1.png";
import image2 from "../assets/web_image2.png";
import image3 from "../assets/web_image3.png";
import image4 from "../assets/web_image4.png";
import image5 from "../assets/web_image5.png";

const team = [
  { image: image1, name: "Jupiter", description: "Design" },
  { image: image2, name: "CJ", description: "Creative" },
  { image: image3, name: "G Nifty", description: "Technical" },
  { image: image4, name: "Gecko", description: "Development" },
];

function Team() {
  return (
    <Flex
      bg="brand.background"
      width="100%"
      align="center"
      justify="center"
      color="#000"
      py={{ base: 20, md: 28 }}
      id="team"
    >
      <Stack align="center" spacing={{ base: 8, md: 16 }}>
        <Text
          as="h1"
          fontSize="64px"
          fontFamily="Herculanum"
          textTransform="uppercase"
          textAlign="center"
        >
          Team
        </Text>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 8, md: 20 }}
          align="center"
        >
          {team.map((each) => (
            <Stack
              key={each.image}
              spacing={{ base: 2, md: 4 }}
              align="center"
              fontSize="34px"
            >
              <Image src={each.image} />
              <Text>{each.name}</Text>
              <Text>{each.description}</Text>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Flex>
  );
}

export default Team;
