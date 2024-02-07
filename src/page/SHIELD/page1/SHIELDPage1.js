import React, { useEffect } from "react";
import "../GLIM.css";
import "./GlimPage1.css";
import stop from "./stop.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Box, Heading, Link, Text } from "@chakra-ui/react";
import bg_img from "./SHIELD_BG.jpg";
import FloatingNavContact from "../../../component/FloatingContact/FloatingContact";
// import ReactGA from "react-ga4";

const SHIELDPage1 = () => {
  const setFromPage = () => {
    localStorage["meynikara-from-page"] = "SHIELD";
    document.title = "Meynikara | SHIELD";
    // ReactGA.send({
    //   hitType: "pageview",
    //   page: window.location.pathname,
    //   title: document.title,
    // });
  };
  useEffect(() => {
    setFromPage();
  }, []);
  return (
    <Box>
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
          Empower your workforce, strengthen safty{" "}
          <br className="hide-for-lg" />
          measures, and create a secure workplace together.
        </Text>
        <Link
          h={{ base: "40px" }}
          borderRadius={{ base: "20px" }}
          fontSize={{ base: "16px", md: "sm", lg: "md" }}
          colorScheme="dark"
          bg={"#ffba00"}
          mt={{ lg: "20px" }}
          mb={"20px"}
          color={"black"}
          fontWeight={{ base: "700" }}
          _hover={{ bg: "#20c997", color: "white" }}
          p={{ base: "5px 35px", md: "10px 50px" }}
          href="#contact-us"
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          transform={{ base: "scale(0.75)", md: "scale(1)" }}
        >
          Request for Free Trial
        </Link>
        <Box bg={"red"} h={"1vh"}></Box>
      </Box>
    </Box>
  );
};

export default SHIELDPage1;
