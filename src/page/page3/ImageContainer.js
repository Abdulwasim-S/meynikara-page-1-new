import React from "react";
import "./ImageContainer.css";
import { Box, Flex, Grid, GridItem, Image, Spacer } from "@chakra-ui/react";
import card_bg1 from "./image/1.png";
import card_bg2 from "./image/2.png";
import card_bg3 from "./image/3.png";
import card_bg4 from "./image/4.png";
import card_bg5 from "./image/5.png";
import card_bg6 from "./image/6.png";
import card_bg7 from "./image/7.png";
const ImageContainer = () => {
  return (
    <>
      <Box w={"100%"} display={{ base: "none", md: "block" }}>
        <Flex>
          <Image src={card_bg1} alt="card_bg1" w={{ base: "20%" }} />
          <Spacer />
          <Image src={card_bg2} alt="card_bg2" w={{ base: "20%" }} />
          <Spacer />
          <Image src={card_bg3} alt="card_bg3" w={{ base: "20%" }} />
          <Spacer />
          <Image src={card_bg4} alt="card_bg4" w={{ base: "20%" }} />
        </Flex>
        <br />
        <Flex>
          <Spacer />
          <Image src={card_bg5} alt="card_bg2" w={{ base: "20%" }} />
          <Spacer />
          <Image src={card_bg6} alt="card_bg3" w={{ base: "20%" }} />
          <Spacer />
          <Image src={card_bg7} alt="card_bg7" w={{ base: "20%" }} />
          <Spacer />
        </Flex>
      </Box>
      <Box w={"100%"} display={{ base: "block", md: "none" }}>
        <Flex>
          <Image src={card_bg1} alt="card_bg1" w={{ base: "45%" }} />
          <Spacer />
          <Image src={card_bg2} alt="card_bg2" w={{ base: "45%" }} />
        </Flex>
        <br />
        <Flex>
          <Image src={card_bg3} alt="card_bg3" w={{ base: "45%" }} />
          <Spacer />
          <Image src={card_bg4} alt="card_bg2" w={{ base: "45%" }} />
        </Flex>
        <br />
        <Flex>
          <Image src={card_bg5} alt="card_bg2" w={{ base: "45%" }} />
          <Spacer />
          <Image src={card_bg6} alt="card_bg3" w={{ base: "45%" }} />
        </Flex>
        <br />
        <Flex>
          <Spacer />
          <Image src={card_bg7} alt="card_bg7" w={{ base: "45%" }} />
          <Spacer />
        </Flex>
      </Box>
    </>
  );
};

export default ImageContainer;
