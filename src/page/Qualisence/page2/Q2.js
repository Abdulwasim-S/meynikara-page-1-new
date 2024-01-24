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
        textAlign={{ lg: "end" }}
      >
        <Heading
          color={" #20c997"}
          fontSize={{ base: "3xl", md: "5xl", lg: "5xl" }}
        >
          AR Technology
        </Heading>
        <Text fontSize={{ base: "md", md: "2xl", lg: "2xl" }}>
          Augmented Reality (AR) technology empowers inspectors with real-time
          digital information, interactive visuals, and step-by-step guidance,
          thereby significantly increasing overall efficiency and productivity.
          With AR, inspectors can perform their tasks more accurately, leading
          to a reduction in errors and defects, resulting in higher-quality
          products and improved customer satisfaction. The ability to overlay
          digital data onto physical objects enables inspectors to identify and
          address potential issues swiftly, streamlining the inspection workflow
          and reducing operational downtime. Moreover, AR-based quality
          inspection ensures consistency in inspection standards across the
          organization, fostering a culture of continuous improvement. Want to
          understand more? Reach out to us now
        </Text>
      </GridItem>
    </Grid>
  );
};

export default Q2;
