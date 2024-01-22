import { Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import React from "react";

const ARRAPage2 = () => {
  return (
    <Grid
      className="bg-meynikara"
      color={"white"}
      h="200px"
      templateRows="repeat(1 1fr)"
      templateColumns="repeat(7, 1fr)"
      gap={4}
      p={{ base: "2vh 2vw" }}
      minH={"45vh"}
    >
      <GridItem
        display={{ base: "flex" }}
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
        textAlign={{ lg: "end" }}
      >
        <Heading
          color={" #20c997"}
          fontSize={{ base: "3xl", md: "5xl", lg: "5xl" }}
        >
          Traditional Method
        </Heading>
        <Text fontSize={{ base: "md", md: "2xl", lg: "2xl" }}>
          Traditional methods of providing remote assistance, such as phone
          support and video conferencing, can be inefficient and ineffective.
          According to a study by aberdeen group, remote workers take 25% longer
          to complete a task than their on-site counterparts.
        </Text>
      </GridItem>
    </Grid>
  );
};

export default ARRAPage2;
