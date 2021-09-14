import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Flex,
  Text,
  Stack,
} from "@chakra-ui/react";
import headerBg from "../assets/header_bg.jpg";
import Footer from "../components/Footer";

const faqs = [
  {
    q: "How Do I Buy Astropets?",
    a: "You can buy your Astropets here on our website starting on Wednesday, March 31st. It will be a blind public sale to ensure fair distribution, following an incremental pricing tier. If you're new to NFTs, you'll need to get a Metamask Chrome extension and then load it with ETH through services that allow you to change your money to ETH (i.e. Coinbase Pro or Paypal). Once you're set up, just approve the transaction on Metamask and you're good to go!",
  },
  {
    q: "When do I get my Astropets?",
    a: "After the blind public sale has ended (10 days after launch or sooner if all have been sold), all Astropets artwork will be revealed.",
  },
  {
    q: "What can I do with my Astropets?",
    a: "You own your Astropets digitally and are free to do anything you'd like with them. This includes, but is not limited to e.g. printing them for displaying them in the physical world. If you do decide to do something cool with it, please share with us!",
  },
  {
    q: "How rare are Astropets?",
    a: "Every Astropets has been selected from a combination of attributes. There are five different animal characters, some more rare than others, and even an extraterrestrial creature for the super lucky! The colors, accessories, and background make each Astropet unique. At the end of the public sale (or sooner if sold out), our Astropets will be revealed for you to browse.",
  },
  {
    q: "What’s Next?",
    a: "We are nonconformist so we are not going to stop never ever. Come on, join us and decide with us the future of this community.",
  },
  {
    q: "Can I sell/trade my Astropets?",
    a: "Yes, Astropets adhere to the ERC-721 Non-Fungible Token Standard, so you can freely sell or trade on platforms like OpenSea.",
  },
];

export default function FAQSection() {
  return (
    <Flex
      justifyContent="center"
      width="100%"
      pt={{ base: 20, md: 32 }}
      pb={{ base: 10, md: 0 }}
      color="white"
      backgroundImage={`url(${headerBg})`}
      backgroundRepeat="no-repeat"
      backgroundAttachment="fixed"
      backgroundSize="cover"
      fontFamily="HelveticaRegular"
    >
      <Stack width="100%" align="center">
        <Text fontSize="32px" mb="40px">
          Frequently Asked Questions
        </Text>
        <Accordion
          allowToggle
          width={{ base: "90%", md: "80%" }}
          background="#ccc"
          borderRadius="10px"
          color="#48494a"
        >
          {faqs.map((faq) => (
            <AccordionItem border="none" mb={4} p={4}>
              <h2>
                <AccordionButton>
                  <Box
                    flex="1"
                    color="primary.500"
                    textAlign="left"
                    fontWeight="bold"
                    fontSize="2xl"
                  >
                    {faq.q}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel fontSize="xl" pb={4} fontWeight="300">
                {faq.a}
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
        <Footer />
      </Stack>
    </Flex>
  );
}
