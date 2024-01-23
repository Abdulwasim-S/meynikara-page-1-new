import { Box, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import tm_img from "../images/2.png";
import tm_bg_img from "../images/bg.jpg";

const MK2 = () => {
  return (
    <Grid
      className="bg-meynikara"
      color={"white"}
      templateRows="repeat(1 1fr)"
      templateColumns="repeat(7, 1fr)"
      gap={4}
      p={{ base: "5vh 5vw" }}
      bgImage={tm_bg_img}
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
      bgPosition={"center"}
      minH={{ lg: "45vh" }}
    >
      <GridItem
        display={{ base: "flex" }}
        justifyContent={"center"}
        alignItems={"center"}
        colSpan={{ base: "7", lg: 3 }}
        minH={{ lg: "40vh" }}
      >
        <Image
          src={tm_img}
          display={{ base: "none", lg: "block" }}
          h={{ base: "25vh", lg: "35vh" }}
          alt="tm_img"
        />
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
          Our Offerings
        </Heading>
        <Text fontSize={{ base: "md", md: "2xl", lg: "2xl" }}>
          Curriculum based Science and Maths concepts of{" "}
          <Box display={{ base: "none", md: "block", lg: "none" }}></Box> grades{" "}
          <b className="text-senju">6th, 7th & 8th.</b>
        </Text>
      </GridItem>
    </Grid>
  );
};

export default MK2;
