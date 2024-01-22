import { Box, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import React from "react";

const ARRAPage5 = () => {
  return (
    <Box
      mb={{ base: "3vh" }}
      p={{ base: "5vh 5vw" }}
      minH={{ base: "170vh", md: "80vh", lg: "" }}
    >
      <Heading
        fontWeight={{ base: "700" }}
        fontSize={{ base: "3xl", md: "5xl", lg: "5xl" }}
      >
        Features
      </Heading>
      <Text
        fontWeight={{ base: "400" }}
        fontSize={{ base: "lg", md: "3xl", lg: "3xl" }}
      >
        AR-based remote assistance offers several key features that can help
        companies improve their support and service delivery:
      </Text>
      <Grid
        h="200px"
        templateColumns="repeat(4, 1fr)"
        gap={{ base: "2.5", md: 0, lg: 10 }}
      >
        <GridItem
          className="shadow-card"
          borderRadius={{ base: "5px" }}
          p={{ base: "2vh 5vw", md: "2vh 2vw" }}
          colSpan={{ base: 4, md: 2, lg: 1 }}
        >
          <Box h={"50px"} w={"50px"} bg={"blue"}></Box>
          <Heading
            fontSize={{ base: "xl", md: "2xl" }}
            fontWeight={{ base: "500" }}
          >
            Real-time collaboration
          </Heading>
          <Text
            fontSize={{ base: "md", md: "lg" }}
            fontWeight={{ base: "500" }}
            textAlign={"justify"}
          >
            AR technology allows visual cues and overlays in real-time, which
            can improve understanding and reduce the risk of errors.
          </Text>
        </GridItem>
        <GridItem
          className="shadow-card"
          borderRadius={{ base: "5px" }}
          p={{ base: "2vh 5vw", md: "2vh 2vw" }}
          colSpan={{ base: 4, md: 2, lg: 1 }}
        >
          <Box h={"50px"} w={"50px"} bg={"blue"}></Box>
          <Heading
            fontSize={{ base: "xl", md: "2xl" }}
            fontWeight={{ base: "500" }}
          >
            Virtual annotations
          </Heading>
          <Text
            fontSize={{ base: "md", md: "lg" }}
            fontWeight={{ base: "500" }}
            textAlign={"justify"}
          >
            AR technology enables support personnel to add virtual annotations
            and instructions to the real-world environment.
          </Text>
        </GridItem>
        <GridItem
          className="shadow-card"
          borderRadius={{ base: "5px" }}
          p={{ base: "2vh 5vw", md: "2vh 2vw" }}
          colSpan={{ base: 4, md: 2, lg: 1 }}
        >
          <Box h={"50px"} w={"50px"} bg={"blue"}></Box>
          <Heading
            fontSize={{ base: "xl", md: "2xl" }}
            fontWeight={{ base: "500" }}
          >
            Remote access
          </Heading>
          <Text
            fontSize={{ base: "md", md: "lg" }}
            fontWeight={{ base: "500" }}
            textAlign={"justify"}
          >
            Reduce the need for in person support visits and save time and money
            on travel expenses.
          </Text>
        </GridItem>
        <GridItem
          className="shadow-card"
          borderRadius={{ base: "5px" }}
          p={{ base: "2vh 5vw", md: "2vh 2vw" }}
          colSpan={{ base: 4, md: 2, lg: 1 }}
        >
          <Box h={"50px"} w={"50px"} bg={"blue"}></Box>
          <Heading
            fontSize={{ base: "xl", md: "2xl" }}
            fontWeight={{ base: "500" }}
          >
            Customizable interfaces
          </Heading>
          <Text
            fontSize={{ base: "md", md: "lg" }}
            fontWeight={{ base: "500" }}
            textAlign={"justify"}
          >
            AR technology can be customized to match the branding and style of a
            company, which can enhance the customer experience and improve brand
            recognition.
          </Text>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default ARRAPage5;
