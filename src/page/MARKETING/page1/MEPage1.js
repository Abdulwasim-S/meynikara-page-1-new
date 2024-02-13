import { Box, Heading, Link, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import bg_img from "./bg.jpg";
// import ReactGA from "react-ga4";

const MEPage1 = () => {
  const setFromPage = () => {
    localStorage["meynikara-from-page"] = "MARKETING & EVENTS";
    document.title = "Meynikara | Marketing & Events";
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
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
      bgPos={"bottom"}
      bgImage={bg_img}
      color={"white"}
      textAlign={"center"}
    >
      <Heading
        color={"#20c997"}
        fontSize={{ base: "2xl", md: "5xl", lg: "5xl" }}
        fontWeight={{ base: "700", lg: "700" }}
        mt={"5vh"}
      >
        MARKETING & EVENTS
      </Heading>
      <Text
        color={"white"}
        fontSize={{ base: "md", md: "2xl", lg: "3xl" }}
        paddingX={{ base: "0", lg: "10vw" }}
      >
        We develop and deliver data-driven immersive experiences
        <Box display={{ base: "none", md: "block", lg: "none" }} /> to increase
        your organisation's marketing{" "}
        <Box display={{ base: "none", md: "block", lg: "none" }} />
        and event objectives.
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
        onClick={() => {
          // eslint-disable-next-line no-undef
          gtag(
            "event",
            `${localStorage["meynikara-from-page"]} Request form opened`,
            {
              event_category: `${localStorage["meynikara-from-page"]} Request form opened`,
              event_label: localStorage["meynikara-from-page"],
            }
          );
        }}
      >
        Let's Work Together
      </Link>
      <Box h={"1vh"}></Box>
    </Box>
  );
};

export default MEPage1;
