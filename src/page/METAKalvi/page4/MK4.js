import {
  Box,
  Grid,
  GridItem,
  Heading,
  Image,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import b_img from "../images/4.png";

const MK4 = () => {
  return (
    <Box bg={"#f1f1f1"} p={{ base: "2vh 5vw" }}>
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
          <Image
            src={b_img}
            h={{ lg: "60vh" }}
            transform={"scale(1.2)"}
            alt="b_img"
          />
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
            Benefits of Metakalvi
          </Heading>
          <Text
            padding={{ base: "0 1vw 0 1vw" }}
            fontWeight={{ base: "400" }}
            fontSize={{ base: "md", md: "2xl", lg: "2xl" }}
          >
            Metakalvi had a positive impact on the students' learning
            experience, as it provided an immersive and engaging way to learn
            complex concepts.
          </Text>
          <Box
            display={{ base: "flex", lg: "none" }}
            justifyContent={"center"}
            alignItems={"center"}
            minH={{ lg: "40vh" }}
          >
            <Image
              src={b_img}
              h={{ md: "45vh", lg: "60vh" }}
              alt="b_img"
              transform={"scale(1.2)"}
            />
          </Box>
          <UnorderedList>
            <ListItem
              fontWeight={{ base: "400" }}
              fontSize={{ base: "md", md: "2xl", lg: "2xl" }}
            >
              <b className="text-senju">100%</b> attendance for the VR sessions
            </ListItem>
            <ListItem
              fontWeight={{ base: "400" }}
              fontSize={{ base: "md", md: "2xl", lg: "2xl" }}
            >
              <b className="text-senju">3X times</b> increase in Attention Span
            </ListItem>
            <ListItem
              fontWeight={{ base: "400" }}
              fontSize={{ base: "md", md: "2xl", lg: "2xl" }}
            >
              Increased interest towards subjects
            </ListItem>
            <ListItem
              fontWeight={{ base: "400" }}
              fontSize={{ base: "md", md: "2xl", lg: "2xl" }}
            >
              We observed <b className="text-senju">55%</b> increase in
              cumulative concept score
            </ListItem>
          </UnorderedList>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default MK4;
