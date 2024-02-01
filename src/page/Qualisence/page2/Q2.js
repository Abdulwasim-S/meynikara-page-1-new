import { Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import tm_img from "../images/2.png";
import tm_bg_img from "../images/bg.jpg";

const Q2 = () => {
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
      minH={"45vh"}
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
        textAlign={{ lg: "justify" }}
        // textAlign={{ lg: "end" }}
      >
        <Heading
          textAlign={{ base: "start", lg: "end" }}
          color={" #20c997"}
          fontSize={{ base: "3xl", md: "5xl", lg: "5xl" }}
        >
          Our Offerings
        </Heading>
        <Text
          textAlign={"justify"}
          fontSize={{ base: "md", md: "2xl", lg: "2xl" }}
        >
          Augmented Reality (AR) technology boosts inspector efficiency by
          providing real-time digital guidance and interactive visuals, reducing
          errors and defects. AR overlays digital data onto physical objects,
          enabling swift issue identification and streamlined workflows,
          ultimately improving product quality and customer satisfaction.
          Consistent inspection standards across the organization drive
          continuous improvement. Contact us to learn more.
        </Text>
      </GridItem>
    </Grid>
  );
};

export default Q2;
