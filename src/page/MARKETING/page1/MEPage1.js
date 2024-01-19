import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

const MEPage1 = () => {
  return (
    <Box
      p={["20px", "30px", "40px"]}
      paddingTop={{ lg: "10vh" }}
      textAlign={"center"}
      w={"100%"}
      bg={"#1b1a1a"}
    >
      <Heading
        color={"#20c997"}
        fontSize={{ base: "2xl", md: "5xl", lg: "5xl" }}
        fontWeight={{ base: "700", lg: "700" }}
      >
        MARKETING & EVENTS
      </Heading>
      <Text
        color={"white"}
        fontSize={{ base: "md", md: "2xl", lg: "3xl" }}
        paddingX={{ base: "0", lg: "10vw" }}
      >
        We develop and deliver data-driven immersive experiences to increase
        your organisation's marketing and event objectives.
      </Text>
      <Box fontStyle={"italic"} margin={{ lg: "0 0 2vh 0" }} fontSize={"sm"}>
        Request Access
      </Box>
    </Box>
  );
};

export default MEPage1;
