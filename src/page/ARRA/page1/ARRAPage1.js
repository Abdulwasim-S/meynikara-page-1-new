import { Box, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import arra_img from "../images/1.png";
import ReactGA from "react-ga4";

const ARRAPage1 = () => {
  const setFromPage = () => {
    localStorage["meynikara-from-page"] = "ARRA";
    document.title = "Meynikara | ARRA";
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname,
      title: document.title,
    });
  };
  useEffect(() => {
    setFromPage();
  }, []);
  return (
    <Grid
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
        <Image src={arra_img} h={{ base: "25vh" }} alt="arra_img" />
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
          ARRA
        </Heading>
        <Text
          fontWeight={{ base: "400" }}
          fontSize={{ base: "md", md: "2xl", lg: "2xl" }}
        >
          Save upto{" "}
          <Box display={"inline-block"} fontWeight={500}>
            <span className="text-senju ">25%</span>
          </Box>{" "}
          on travel costs and upto{" "}
          <Box display={"inline-block"} fontWeight={500}>
            <span className="text-senju">40%</span>
          </Box>{" "}
          on service delivery costs using our AR based Remote Assistance.
        </Text>
      </GridItem>
      <GridItem
        display={{ base: "none", lg: "flex" }}
        justifyContent={"center"}
        alignItems={"center"}
        colSpan={{ base: "7", lg: 3 }}
      >
        <Image src={arra_img} h={{ base: "45vh" }} alt="arra_img" />
      </GridItem>
    </Grid>
  );
};

export default ARRAPage1;
