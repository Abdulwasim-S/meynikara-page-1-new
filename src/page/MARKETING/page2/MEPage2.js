import { Box, Flex, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import React from "react";
import VideoPageME from "../videoPage/VideoPageME";

const MEPage2 = () => {
  return (
    <Box textAlign={"center"} padding={{ base: "20px", lg: "5vh 5vw 0 5vw" }}>
      <Heading fontSize={{ base: "30px", md: "45px", lg: "50px" }}>
        Our Service Offerings
      </Heading>
      <Flex
        marginBottom={{ lg: "4vh" }}
        alignItems={"center"}
        flexDirection={"column"}
        w={"100%"}
      >
        <Box
          marginY={"1vh"}
          height={{ base: "0.5vh" }}
          w={{ base: "40vw", md: "30vw", lg: "20vw" }}
          bg={"#ffba00"}
        ></Box>
      </Flex>
      <Grid
        paddingX={{ base: "2vw" }}
        templateColumns={{
          base: "repeat(0,1fr)",
          sm: "repeat(1,1fr)",
          md: "repeat(6,1fr)",
          lg: "repeat(12,1fr)",
        }}
      >
        <GridItem p={{ base: "15px" }} colSpan={3} textAlign={"start"}>
          <Text
            fontWeight={{ base: 700 }}
            fontSize={{ base: "30px", lg: "30px" }}
            color={"#ffba00"}
          >
            01
          </Text>
          <Heading
            fontWeight={"600"}
            color={"#20c997"}
            fontSize={{ base: "25px", md: "30px", lg: "35px" }}
          >
            Virtual Events and Conferences
          </Heading>
          <Box display={{ base: "none", lg: "block" }}>
            <br />
          </Box>
          <Text fontSize={{ base: "md", lg: "20px" }} textAlign={"justify"}>
            Create virtual meetings and confrences allowing participants to
            upload meeting assets and attend from anywhere in the world using
            our XR platform
          </Text>
        </GridItem>
        <GridItem p={{ base: "15px" }} colSpan={3} textAlign={"start"}>
          <Text
            fontWeight={{ base: 700 }}
            fontSize={{ base: "30px", lg: "30px" }}
            color={"#20c997"}
          >
            02
          </Text>
          <Heading
            fontWeight={"600"}
            color={"#ffba00"}
            fontSize={{ base: "25px", md: "30px", lg: "35px" }}
          >
            Immersive Brand Experiences
          </Heading>
          <Box display={{ base: "none", lg: "block" }}>
            <br />
          </Box>
          <Text fontSize={{ base: "md", lg: "20px" }} textAlign={"justify"}>
            Create bespoke immersive brand experiences through VR and build
            stronger connections with the audience and fostering brand loyalty
          </Text>
        </GridItem>
        <GridItem p={{ base: "15px" }} colSpan={3} textAlign={"start"}>
          <Text
            fontWeight={{ base: 700 }}
            fontSize={{ base: "30px", lg: "30px" }}
            color={"#ffba00"}
          >
            03
          </Text>
          <Heading
            fontWeight={"600"}
            color={"#20c997"}
            fontSize={{ base: "25px", md: "30px", lg: "35px" }}
          >
            Virtual Product Demonstrations
          </Heading>
          <Box display={{ base: "none", lg: "block" }}>
            <br />
          </Box>
          <Text fontSize={{ base: "md", lg: "20px" }} textAlign={"justify"}>
            Create virtual showrooms or products demonstrations allowing
            potential customers to experience products
          </Text>
        </GridItem>
        <GridItem p={{ base: "15px" }} colSpan={3} textAlign={"start"}>
          <Text
            fontWeight={{ base: 700 }}
            fontSize={{ base: "30px", lg: "30px" }}
            color={"#20c997"}
          >
            04
          </Text>
          <Heading
            fontWeight={"600"}
            color={"#ffba00"}
            fontSize={{ base: "25px", md: "30px", lg: "35px" }}
          >
            Virtual Tours
          </Heading>
          <Box display={{ base: "none", md: "block" }}>
            <br />
          </Box>
          <Box display={{ base: "none", lg: "block" }}>
            <br />
            <br />
          </Box>
          <Text fontSize={{ base: "md", lg: "20px" }} textAlign={"justify"}>
            Create virtual tours where multiple participants can explore
            properties or locations remotely
          </Text>
        </GridItem>
      </Grid>
      <VideoPageME />
      <Box padding={{ base: "2.5vh 0 0 0" }}>
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
    </Box>
  );
};

export default MEPage2;
