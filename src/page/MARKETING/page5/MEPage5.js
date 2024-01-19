import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";

const MEPage5 = () => {
  return (
    <Box textAlign={"center"} padding={{ base: "20px", lg: "1vw" }}>
      <Heading
        fontWeight={"700"}
        fontSize={{ base: "35px", md: "45px", lg: "50px" }}
      >
        Gallery
      </Heading>
      <Flex
        alignItems={"center"}
        flexDirection={"column"}
        w={"100%"}
        h={{ base: "10vh" }}
      >
        <Box
          marginY={"0.5vh"}
          height={{ base: "0.5vh" }}
          w={{ base: "40vw", md: "30vw", lg: "20vw" }}
          bg={"#ffba00"}
        ></Box>
        <Box
          marginY={"0.5vh"}
          height={{ base: "0.5vh" }}
          w={{ base: "20vw", md: "15vw", lg: "10vw" }}
          bg={"#20c997"}
        ></Box>
      </Flex>
      <Box height={"25vh"} width={"100%"} bg={"red"}>
        gallery image container
      </Box>
    </Box>
  );
};

export default MEPage5;
