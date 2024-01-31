import { Box, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import ar_img from "../images/3.png";

const Q3 = () => {
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
            Our Offerings
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
            Augmented Reality (AR) technology boosts inspector efficiency by
            providing real-time digital guidance and interactive visuals,
            reducing errors and defects. AR overlays digital data onto physical
            objects, enabling swift issue identification and streamlined
            workflows, ultimately improving product quality and customer
            satisfaction. Consistent inspection standards across the
            organization drive continuous improvement. Contact us to learn more
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
      <Box display={{ md: "none", lg: "block" }}>
        <br />
      </Box>
      <Box
        border={"10px solid white"}
        marginBottom={{ base: "2vh" }}
        bg={"#1b1a1a"}
        minH={"40vh"}
        color={"white"}
        display={{ base: "flex" }}
        justifyContent={{ base: "center" }}
        alignItems={{ base: "center" }}
      >
        video
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
    </Box>
  );
};

export default Q3;
