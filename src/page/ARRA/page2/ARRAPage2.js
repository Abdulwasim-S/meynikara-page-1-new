import { Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import tm_img from "../images/2.png";
import tm_bg_img from "../images/bg.jpg";

const ARRAPage2 = () => {
  return (
    <>
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
          // textAlign={{ lg: "end" }}
        >
          <Heading
            color={" #20c997"}
            fontSize={{ base: "3xl", md: "5xl", lg: "5xl" }}
          >
            Traditional Method
          </Heading>
          <Text
            textAlign={"justify"}
            fontSize={{ base: "md", md: "2xl", lg: "2xl" }}
          >
            Traditional methods of providing remote assistance such as phone
            support and video conferencing can be inefficient and ineffective.
            According to a study by aberdeen group, remote workers take{" "}
            <b className="text-senju">25% </b>
            longer to complete a task than their on-site counterparts.
          </Text>
        </GridItem>
      </Grid>
    </>
  );
};

export default ARRAPage2;
