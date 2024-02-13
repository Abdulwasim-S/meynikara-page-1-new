import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import a_img from "./1.png";
import b_img from "./2.png";
import c_img from "./3.png";
import bg_img from "./bg.jpg";
const MEPage7 = () => {
  return (
    <Flex
      // bg={"#20c997"}
      bgImage={bg_img}
      bgRepeat={"no-repeat"}
      bgSize={"cover"}
      bgPos={"center"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      p={{ base: "20px", lg: "40px" }}
    >
      <Heading
        color={"white"}
        fontWeight={"700"}
        fontSize={{ base: "35px", md: "45px", lg: "50px" }}
      >
        Results
      </Heading>
      <Flex alignItems={"center"} flexDirection={"column"} w={"100%"}>
        <Box
          marginY={{ base: "0.1vh", lg: "0.5vh" }}
          height={{ base: "0.5vh" }}
          w={{ base: "15vw", md: "15vw", lg: "6vw" }}
          bg={"#ffba00"}
        ></Box>
      </Flex>
      <Grid
        paddingTop={{ base: "5vh" }}
        gap={{ base: "1vw", lg: "15vw" }}
        templateColumns={{ base: "repeat(3, 1fr)", lg: "repeat(3, 1fr)" }}
      >
        <GridItem>
          <Flex p={"10px"} flexDirection={"column"} alignItems={"center"}>
            <Box
              h={{ base: "50px", lg: "100px" }}
              w={{ base: "50px", lg: "100px" }}
              borderRadius={"50%"}
              bg={"#ffba00"}
            >
              <Image src={a_img} transform={"scale(0.6)"} />
            </Box>
            <Text
              color={"white"}
              fontWeight={{ base: "600", lg: "700" }}
              fontSize={{ base: "20px", lg: "30px" }}
              textAlign={"center"}
            >
              Increased
              <br />
              Engagement
            </Text>
          </Flex>
        </GridItem>
        <GridItem>
          <Flex p={"10px"} flexDirection={"column"} alignItems={"center"}>
            <Box
              h={{ base: "50px", lg: "100px" }}
              w={{ base: "50px", lg: "100px" }}
              borderRadius={"50%"}
              bg={"#ffba00"}
            >
              <Image src={b_img} transform={"scale(0.6)"} />
            </Box>
            <Text
              color={"white"}
              fontWeight={{ base: "600", lg: "700" }}
              fontSize={{ base: "20px", lg: "30px" }}
              textAlign={"center"}
            >
              Increased
              <br />
              Walk-ins
            </Text>
          </Flex>
        </GridItem>
        <GridItem>
          <Flex p={"10px"} flexDirection={"column"} alignItems={"center"}>
            <Box
              h={{ base: "50px", lg: "100px" }}
              w={{ base: "50px", lg: "100px" }}
              borderRadius={"50%"}
              bg={"#ffba00"}
            >
              <Image src={c_img} transform={"scale(0.6)"} />
            </Box>
            <Text
              color={"white"}
              fontWeight={{ base: "600", lg: "700" }}
              fontSize={{ base: "20px", lg: "30px" }}
              textAlign={"center"}
            >
              User Data
              <br />
              Collection
            </Text>
          </Flex>
        </GridItem>
      </Grid>
    </Flex>
  );
};

export default MEPage7;
