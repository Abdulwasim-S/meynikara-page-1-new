import {
  Box,
  Grid,
  GridItem,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import qualisence_img from "../images/1.png";
// import ReactGA from "react-ga4";

const Q1 = () => {
  const setFromPage = () => {
    localStorage["meynikara-from-page"] = "Qualisence";
    document.title = "Meynikara | Qualisence";
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
    <>
      {/* <Grid
        templateRows="repeat(1 1fr)"
        templateColumns="repeat(7, 1fr)"
        gap={4}
        p={{ base: "5vh 5vw" }}
        minH={"40vh"}
      >
        <GridItem
          display={{ base: "flex", lg: "none" }}
          justifyContent={"center"}
          alignItems={"center"}
          colSpan={{ base: "7", lg: 3 }}
        >
          <Image src={qualisence_img} h={{ base: "25vh" }} alt="qualisence_img" />
        </GridItem>
        <GridItem
          display={"flex"}
          flexDirection={"column"}
          colSpan={{ base: "7", lg: 4 }}
          justifyContent={"center"}
        >
          <Heading
            color={" #20c997"}
            fontWeight={{ base: "700" }}
            fontSize={{ base: "3xl", md: "5xl", lg: "5xl" }}
          >
            Qualisence
          </Heading>
          <Text
            fontWeight={{ base: "400" }}
            fontSize={{ base: "md", md: "2xl", lg: "2xl" }}
          >
            AR technologies assist inspectors by providing real-time
            information, step-by-step guidance and data visualization
            streamlining the inspection workflow and reducing human errors. It
            can give about{" "}
            <Box display={"inline-block"} fontWeight={500}>
              <span className="text-senju "> 20% to 30%</span>
            </Box>{" "}
            increase in efficiency of the quality inspection process.
          </Text>
          <Link
            w={{ md: "50%" }}
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
            Request for Free Trial
          </Link>
        </GridItem>
        <GridItem
          display={{ base: "none", lg: "flex" }}
          justifyContent={"center"}
          alignItems={"center"}
          colSpan={{ base: "7", lg: 3 }}
        >
          <Image src={qualisence_img} h={{ base: "45vh" }} alt="qualisence_img" />
        </GridItem>
      </Grid> */}
      <Grid
        templateRows="repeat(1 1fr)"
        templateColumns="repeat(7, 1fr)"
        gap={4}
        p={{ base: "5vh 0vw 5vh 5vw" }}
        minH={"40vh"}
      >
        <GridItem
          display={{ base: "flex", lg: "none" }}
          justifyContent={"end"}
          alignItems={"center"}
          colSpan={{ base: "7", lg: 3 }}
        >
          <Image
            src={qualisence_img}
            h={{ base: "25vh" }}
            alt="qualisence_img"
          />
        </GridItem>
        <GridItem
          display={"flex"}
          flexDirection={"column"}
          colSpan={{ base: "7", lg: 4 }}
          justifyContent={"center"}
        >
          <Heading
            color={" #20c997"}
            fontWeight={{ base: "700" }}
            fontSize={{ base: "3xl", md: "5xl", lg: "5xl" }}
          >
            Qualisence
          </Heading>
          <Text
            fontWeight={{ base: "400" }}
            fontSize={{ base: "md", md: "2xl", lg: "2xl" }}
          >
            AR technologies assist inspectors by providing real-time
            information, step-by-step guidance and data visualization
            streamlining the inspection workflow and reducing human errors. It
            can give about{" "}
            <Box display={"inline-block"} fontWeight={500}>
              <span className="text-senju "> 20% to 30%</span>
            </Box>{" "}
            increase in efficiency of the quality inspection process.
          </Text>
          <Link
            w={{ md: "50%" }}
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
            Request for Free Trial
          </Link>
        </GridItem>
        <GridItem
          display={{ base: "none", lg: "flex" }}
          justifyContent={"end"}
          alignItems={"center"}
          colSpan={{ base: "7", lg: 3 }}
        >
          <Image src={qualisence_img} h={"50vh"} alt="qualisence_img" />
        </GridItem>
      </Grid>
    </>
  );
};

export default Q1;
