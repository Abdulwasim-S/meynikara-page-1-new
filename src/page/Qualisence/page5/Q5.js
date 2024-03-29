import { Box, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import a from "../images/icons/1.png";
import b from "../images/icons/2.png";
import c from "../images/icons/3.png";

const Q5 = () => {
  return (
    <Box
      // bg={"#f1f1f1"}
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
        Benefits
      </Heading>
      <Grid
        templateColumns="repeat(4, 1fr)"
        gap={{ base: "2.5", md: 0, lg: 5 }}
      >
        <GridItem
          className="shadow-card"
          bg={"white"}
          color={"black"}
          borderRadius={{ base: "5px" }}
          p={{ base: "2vh 5vw", md: "2vh 2vw" }}
          colSpan={{ base: 4, md: 2, lg: 2 }}
          _hover={{ color: "black", bg: "white" }}
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
            AR technology boosts inspector efficiency with real-time digital
            information and interactive guidance.
          </Text>
        </GridItem>
        <GridItem
          className="shadow-card"
          bg={"white"}
          color={"black"}
          borderRadius={{ base: "5px" }}
          p={{ base: "2vh 5vw", md: "2vh 2vw" }}
          colSpan={{ base: 4, md: 2, lg: 2 }}
          _hover={{ color: "black", bg: "white" }}
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
            Inspectors can perform tasks more accurately leading to a reduction
            in errors and defects.
          </Text>
        </GridItem>
        <GridItem
          className="shadow-card"
          bg={"white"}
          color={"black"}
          borderRadius={{ base: "5px" }}
          p={{ base: "2vh 5vw", md: "2vh 2vw" }}
          colSpan={{ base: 4, md: 2, lg: 2 }}
          _hover={{ color: "black", bg: "white" }}
        >
          <Box h={"50px"} w={"50px"}>
            <Image src={c} blt="c" />
          </Box>
          <Box h={"2vh"} />
          <Text
            fontSize={{ base: "md", md: "lg" }}
            fontWeight={{ base: "500", md: "400" }}
            textAlign={"justify"}
          >
            This improved accuracy results in higher-quality products
            contributing to improved customer satisfaction.
          </Text>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Q5;
