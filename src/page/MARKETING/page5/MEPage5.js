import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";

const MEPage5 = () => {
  return (
    <Box
      bg={"#1b1a1a"}
      textAlign={"center"}
      padding={{ base: "20px", lg: "1vw" }}
    >
      <Heading
        color={"white"}
        fontWeight={{ base: "500", lg: "700" }}
        fontSize={{ base: "30px", md: "45px", lg: "50px" }}
      >
        Gallery
      </Heading>
      <Flex
        alignItems={"center"}
        flexDirection={"column"}
        w={"100%"}
        h={{ base: "5vh" }}
      >
        <Box
          marginY={{ base: "0.1vh", lg: "0.5vh" }}
          height={{ base: "0.5vh" }}
          w={{ base: "15vw", md: "15vw", lg: "6vw" }}
          bg={"#ffba00"}
        ></Box>
      </Flex>
      <Box
        marginX={"15vw"}
        color={"white"}
        height={"25vh"}
        width={"70%"}
        bg={"red"}
      >
        gallery image container
      </Box>
    </Box>
  );
};

export default MEPage5;
