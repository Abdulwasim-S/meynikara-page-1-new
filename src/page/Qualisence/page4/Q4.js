import {
  Box,
  Grid,
  GridItem,
  Heading,
  Image,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import b_img from "../images/4.png";

const Q4 = () => {
  return (
    <Box
      // bg={"#f1f1f1"}
      className="bg-meynikara"
      color={"white"}
      p={{ base: "5vh 5vw" }}
      // minH={{ base: "100vh", md: "90vh", lg: "80vh" }}
    >
      <Grid
        templateRows="repeat(1 1fr)"
        templateColumns="repeat(7, 1fr)"
        gap={4}
        p={{ base: "2vh 2vw" }}
        minH={"45vh"}
      >
        <GridItem
          display={{ base: "none", lg: "flex" }}
          justifyContent={"center"}
          alignItems={"center"}
          colSpan={{ base: "7", lg: 3 }}
          color={"white"}
        >
          <Image src={b_img} h={{ lg: "60vh" }} alt="b_img" />
        </GridItem>
        <GridItem
          display={"flex"}
          flexDirection={"column"}
          colSpan={{ base: "7", lg: 4 }}
          justifyContent={"center"}
        >
          <Heading
            padding={{ base: "0 1vw 0 1vw" }}
            color={" #20c997"}
            textAlign={{ base: "start", lg: "start" }}
            fontSize={{ base: "3xl", md: "5xl", lg: "5xl" }}
          >
            Features
          </Heading>
          <Box
            display={{ base: "flex", lg: "none" }}
            justifyContent={"center"}
            alignItems={"center"}
            minH={"40vh"}
          >
            <Image src={b_img} h={{ base: "45vh", lg: "80vh" }} alt="b_img" />
          </Box>
          <UnorderedList>
            <ListItem
              fontWeight={{ base: "400" }}
              fontSize={{ base: "md", md: "2xl", lg: "2xl" }}
            >
              AI Driven image reading capture
            </ListItem>
            <ListItem
              fontWeight={{ base: "400" }}
              fontSize={{ base: "md", md: "2xl", lg: "2xl" }}
            >
              Integration with your existing systems and tools
            </ListItem>
            <ListItem
              fontWeight={{ base: "400" }}
              fontSize={{ base: "md", md: "2xl", lg: "2xl" }}
            >
              Ease to use asset management and upload module
            </ListItem>
            <ListItem
              fontWeight={{ base: "400" }}
              fontSize={{ base: "md", md: "2xl", lg: "2xl" }}
            >
              Accommodates multiple material models for AR overlays
            </ListItem>
            <ListItem
              fontWeight={{ base: "400" }}
              fontSize={{ base: "md", md: "2xl", lg: "2xl" }}
            >
              A basic smartphone is enough to conduct Quality Inspection
            </ListItem>
            <ListItem
              fontWeight={{ base: "400" }}
              fontSize={{ base: "md", md: "2xl", lg: "2xl" }}
            >
              Pay less and pay per materials inspected
            </ListItem>
          </UnorderedList>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Q4;
