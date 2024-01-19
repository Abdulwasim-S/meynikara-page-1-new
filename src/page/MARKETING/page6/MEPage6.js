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

const MEPage6 = () => {
  return (
    <Flex
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      p={{ base: "20px", lg: "50px" }}
      bg={"#1b1a1a"}
    >
      <Heading
        textAlign={"center"}
        fontSize={{ base: "30px", lg: "50px" }}
        color={"#ffba00"}
        fontWeight={{ lg: "700" }}
      >
        Case Study
      </Heading>
      <Box
        bg={"#20c997"}
        height={{ base: "0.25vh", lg: "0.5vh" }}
        marginX={"1vw"}
        marginBottom={"25px"}
        width={{ base: "25vw", lg: "10vw" }}
      ></Box>
      <Text
        color={"white"}
        fontWeight={{ base: "500", lg: "500" }}
        fontSize={{ base: "25px", lg: "25px" }}
      >
        Gamified experience of cucling for Dopenerds: A Case Study
      </Text>
      <Grid templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(3, 1fr)" }}>
        <GridItem>
          <Flex p={"10px"}>
            <Image h={{ base: "50px" }} w={{ base: "150px" }} />
            <Box color={"white"} paddingLeft={{ base: "20px" }}>
              <Heading>Requirement</Heading>
              <Text>
                Leverage XR technology to recreate a famous city's environment
                and spotlight the invaluable contributions of black cyclists
                throughout history
              </Text>
            </Box>
          </Flex>
        </GridItem>
        <GridItem>
          <Flex p={"10px"}>
            <Image h={{ base: "50px" }} w={{ base: "150px" }} />
            <Box color={"white"} paddingLeft={{ base: "20px" }}>
              <Heading>Approach</Heading>
              <Text>
                Devised a tranformative solution - creating an immersive
                gamified cycling experience. Zeroed in on gradual transformation
                of the cityscape over time served {"(1800 to 2023)"} as a
                compelling visual narrative
              </Text>
            </Box>
          </Flex>
        </GridItem>
        <GridItem>
          <Flex p={"10px"}>
            <Image h={{ base: "50px" }} w={{ base: "150px" }} />
            <Box color={"white"} paddingLeft={{ base: "20px" }}>
              <Heading>Solution</Heading>
              <Text>
                Using 3D modelling tools and Unity , we recreated the city's
                environment, guiding users through a century of history, riding
                alongside black cyclists form the past to the present day.
              </Text>
            </Box>
          </Flex>
        </GridItem>
      </Grid>
    </Flex>
  );
};

export default MEPage6;
