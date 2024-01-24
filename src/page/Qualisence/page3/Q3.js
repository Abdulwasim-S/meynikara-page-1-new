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
            AR Technology
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
            AR technology empowers inspectors with real-time digital
            information, interactive visuals, and step-by-step guidance, thereby
            significantly increasing overall efficiency and productivity. With
            AR, inspectors can perform their tasks more accurately, leading to a
            reduction in errors and defects, resulting in higher-quality
            products and improved customer satisfaction. The ability to overlay
            digital data onto physical objects enables inspectors to identify
            and address potential issues swiftly, streamlining the inspection
            workflow and reducing operational downtime. Moreover, AR-based
            quality inspection ensures consistency in inspection standards
            across the organization, fostering a culture of continuous
            improvement. Want to understand more? Reach out to us now
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
