import { Box, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import React from "react";

const ARRAPage3 = () => {
  return (
    <>
      <Grid
        h="200px"
        templateRows="repeat(1 1fr)"
        templateColumns="repeat(7, 1fr)"
        gap={4}
        p={{ base: "2vh 2vw" }}
        minH={"45vh"}
      >
        <GridItem
          display={{ base: "flex", lg: "none" }}
          justifyContent={"center"}
          alignItems={"center"}
          colSpan={{ base: "7", lg: 3 }}
          bg="red.300"
        >
          Image
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
            AR-Based{" "}
            <Box display={{ base: "none", md: "block", lg: "none" }}></Box>{" "}
            Remote Assistance
          </Heading>
          <Text
            fontWeight={{ base: "400" }}
            fontSize={{ base: "md", md: "2xl", lg: "2xl" }}
          >
            SAR-based remote assistance addresses these challenges by providing
            a more immersive and interactive experience for both support
            personnel and customers. It also allows support personnel to guide
            customers through complex or risky tasks with visual cues and
            overlays, which can improve safety and reduce the risk of errors.
          </Text>
        </GridItem>
        <GridItem
          display={{ base: "none", lg: "flex" }}
          justifyContent={"center"}
          alignItems={"center"}
          colSpan={{ base: "7", lg: 3 }}
          bg="red.300"
        >
          Image
        </GridItem>
      </Grid>
      <Box display={{ md: "none", lg: "block" }}>
        <br />
      </Box>
      <div className="round-box">
        <div className="m-r bg-namikaze">
          <p className="m-i"></p>
        </div>
        <div className="m-r bg-senju hidden">
          <p className="m-i hidden-p"></p>
        </div>
        <div className="m-r bg-senju">
          <p className="m-i"></p>
        </div>
      </div>
    </>
  );
};

export default ARRAPage3;
