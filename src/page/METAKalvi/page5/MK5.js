import { Box, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import a from "../images/icons/1.png";
import b from "../images/icons/2.png";

const Mk5 = () => {
  return (
    <Box
      bg={"#1b1a1a"}
      color={"white"}
      mb={{ base: "3vh" }}
      p={{ base: "5vh 5vw" }}
      minH={{ base: "50vh", md: "41vh", lg: "50vh" }}
    >
      <Heading
        color={" #20c997"}
        fontWeight={{ base: "700" }}
        fontSize={{ base: "3xl", md: "5xl", lg: "5xl" }}
        pb={"2vh"}
      >
        Productive Teaching Method
      </Heading>
      <Grid
        templateColumns="repeat(4, 1fr)"
        gap={{ base: "2.5", md: 0, lg: 5 }}
      >
        <GridItem
          className="shadow-card"
          borderRadius={{ base: "5px" }}
          p={{ base: "2vh 5vw", md: "2vh 2vw" }}
          colSpan={{ base: 4, md: 2, lg: 2 }}
        >
          <Box h={"50px"} w={"50px"}>
            <Image src={a} alt="a" />
          </Box>
          <Box h={"2vh"} />
          <Text
            fontSize={{ base: "md", md: "lg" }}
            fontWeight={{ base: "500", md: "400" }}
            textAlign={"justify"}
          >
            Teachers can illustrate the concepts they teach with solid 3D
            visuals. Why should students have all the fun? Now teachers too can
            have fun teaching!
          </Text>
        </GridItem>
        <GridItem
          className="shadow-card"
          borderRadius={{ base: "5px" }}
          p={{ base: "2vh 5vw", md: "2vh 2vw" }}
          colSpan={{ base: 4, md: 2, lg: 2 }}
        >
          <Box h={"50px"} w={"50px"}>
            <Image src={b} blt="b" />
          </Box>
          <Box h={"2vh"} />
          <Text
            fontSize={{ base: "md", md: "lg" }}
            fontWeight={{ base: "500", md: "400" }}
            textAlign={"justify"}
          >
            No more struggle to make students focus. With VR, teachers can
            effortlessly attract students' attention throughout the class.
          </Text>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Mk5;
