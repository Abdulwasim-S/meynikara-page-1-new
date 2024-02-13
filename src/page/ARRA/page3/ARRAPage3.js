import { Box, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import ar_img from "../images/3.png";

const ARRAPage3 = () => {
  return (
    <Box padding={{ base: "5vh 5vw" }}>
      <Grid
        templateRows="repeat(1 1fr)"
        templateColumns="repeat(7, 1fr)"
        gap={4}
        minH={"45vh"}
      >
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
            AR-Based{" "}
            <Box display={{ base: "none", md: "block", lg: "none" }}></Box>{" "}
            Remote Assistance
          </Heading>
          <Box
            display={{ base: "flex", lg: "none" }}
            justifyContent={"center"}
            alignItems={"center"}
            my={"3vh"}
          >
            <Image src={ar_img} h={{ base: "25vh" }} alt="ar_img" />
          </Box>
          <Text
            fontWeight={{ base: "400" }}
            fontSize={{ base: "md", md: "2xl", lg: "2xl" }}
          >
            AR-based remote assistance addresses these challenges by providing a
            more immersive and interactive experience for both support personnel
            and customers. It also allows support personnel to guide customers
            through complex or risky tasks with visual cues and overlays which
            can improve safety and reduce the risk of errors.
          </Text>
        </GridItem>
        <GridItem
          display={{ base: "none", lg: "flex" }}
          justifyContent={"center"}
          alignItems={"center"}
          colSpan={{ base: "7", lg: 3 }}
        >
          <Image src={ar_img} h={{ base: "40vh" }} alt="ar_img" />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default ARRAPage3;
