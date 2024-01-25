import React from "react";
import "../GLIM.css";
import "./GlimPage1.css";
import stop from "./stop.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Box, Button, Heading, Text } from "@chakra-ui/react";
import bg_img from "./SHIELD_BG.jpg";

const SHIELDPage1 = () => {
  return (
    <Box
      className="GlimPage1"
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
      bgPos={"center"}
      bgImage={bg_img}
      minH={{ base: "40vh", lg: "50vh" }}
    >
      <Heading p={{ base: "3vh 0 0 0", md: "3vh 0 0 0", lg: "3vh 0 0 0" }}>
        <LazyLoadImage
          effect="blur"
          className="stop-img"
          src={stop}
          alt="stop"
        />
      </Heading>
      <Text
        // className="gp1-para"
        px={{ base: "", md: "", lg: "20vw" }}
        fontSize={{ base: "sm", md: "2xl", lg: "2xl" }}
      >
        Join us in eliminating industrial accidents with{" "}
        <br className="hide-for-lg" />
        <span className="text-senju">GLIM</span> and our AI-based monitoring
        system, <span className="text-namikaze">SHIELD</span>.{" "}
        <br className="hide-for-lg" />
        Empower your workforce, strengthen safty <br className="hide-for-lg" />
        measures, and create a secure workplace together.
      </Text>
      <Button
        h={{ base: "40px" }}
        borderRadius={{ base: "20px" }}
        fontSize={{ base: "16px", md: "sm" }}
        colorScheme="dark"
        bg={"transparent"}
        border={"2px solid white"}
        mt={{ lg: "20px" }}
        mb={"20px"}
        color={"#20c997"}
        _hover={{ border: "2px solid #ffba00", color: "white" }}
      >
        <a href="#contact-us">Request for Free Trail</a>
      </Button>
    </Box>
  );
};

export default SHIELDPage1;
