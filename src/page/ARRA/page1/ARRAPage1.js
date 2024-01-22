import { Box, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import React from "react";

const ARRAPage1 = () => {
  return (
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
          fontWeight={{ base: "700" }}
          fontSize={{ base: "3xl", md: "5xl", lg: "5xl" }}
        >
          ARRA
        </Heading>
        <Text
          fontWeight={{ base: "400" }}
          fontSize={{ base: "md", md: "2xl", lg: "2xl" }}
        >
          Save upto <span className="text-senju">25%</span> on travel costs and
          upto <span className="text-senju">40%</span> on service delivery costs
          using our AR based Remote Assistance.
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
  );
};

export default ARRAPage1;
