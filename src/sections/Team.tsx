import { Image } from "@chakra-ui/image";
import { Flex, Stack, Text } from "@chakra-ui/layout";
import React from "react";
import image1 from "../assets/web_image1.png";
import image2 from "../assets/web_image2.png";
import image3 from "../assets/web_image3.png";
import image4 from "../assets/web_image4.png";
import image5 from "../assets/web_image5.png";

const team = [
  { image: image1, name: "Name", description: "Description" },
  { image: image2, name: "Name", description: "Description" },
  { image: image3, name: "Name", description: "Description" },
  { image: image4, name: "Name", description: "Description" },
  { image: image5, name: "Name", description: "Description" },
];

function Team() {
  return (
    <Flex bg="brand.background" width="100%">
      <Stack direction={{ base: "column", md: "row" }}>
        {team.map((each) => (
          <Stack key={each.image}>
            <Image src={each.image} />
            <Text>{each.name}</Text>
            <Text>{each.description}</Text>
          </Stack>
        ))}
      </Stack>
    </Flex>
  );
}

export default Team;
