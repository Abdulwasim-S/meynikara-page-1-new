import React from "react";
import "../GLIM.css";
import "./GlimPage1.css";
import stop from "./stop.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Box, Heading, Link, Text } from "@chakra-ui/react";
import bg_img from "./GLIM_BG.jpg";

const GLIMPage1 = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
      bgPos={"center"}
      bgImage={bg_img}
      color={"white"}
    >
      <Heading
        p={{ base: "3vh 5vw 0 5vw", md: "3vh 5vw 0 5vw", lg: "3vh 0 0 0" }}
      >
        <Box>
          <LazyLoadImage
            effect="blur"
            className="stop-img"
            src={stop}
            alt="stop"
          />
        </Box>
      </Heading>
      <Text
        px={{ base: "", md: "", lg: "25vw" }}
        fontSize={{ base: "sm", md: "2xl", lg: "2xl" }}
        textAlign={"center"}
      >
        Join us in eliminating industrial accidents with{" "}
        <Box display={{ base: "block", lg: "none" }}></Box>
        <span className="text-senju">GLIM</span> and our AI-based monitoring
        system, <span className="text-namikaze">SHIELD</span>.{" "}
        <br className="hide-for-lg" />
        Empower your workforce, strengthen safty <br className="hide-for-lg" />
        measures, and create a secure workplace together.
      </Text>
      <Link
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
        p={{ base: "5px 35px", md: "10px 50px" }}
        href="#contact-us"
      >
        Request for Free Trail
      </Link>
      <Box bg={"red"} h={"1vh"}></Box>
    </Box>
  );
};

export default GLIMPage1;
