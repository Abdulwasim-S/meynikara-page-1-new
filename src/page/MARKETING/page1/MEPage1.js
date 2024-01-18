import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

const MEPage1 = () => {
  return (
    <Box
      p={["20px", "30px", "40px"]}
      textAlign={"center"}
      w={"100%"}
      minH={"20vh"}
      bg={"#1b1a1a"}
    >
      <Heading
        color={"#20c997"}
        fontSize={{ base: "30px", md: "50px", lg: "60px" }}
      >
        Marketing & Events
      </Heading>
      <Text color={"white"} fontSize={{ base: "15px", md: "25px", lg: "30px" }}>
        We develop and deliver data-driven immersive experiences to increase
        your organisation's marketing and event objectives.
      </Text>
    </Box>
  );
};

export default MEPage1;
