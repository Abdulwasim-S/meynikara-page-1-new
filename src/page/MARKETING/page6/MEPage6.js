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

const MEPage6 = () => {
  return (
    <Flex
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      p={{ base: "20px", lg: "50px" }}
    >
      <Grid
        display={{ base: "flex" }}
        flexDirection={{ base: "column", lg: "row-reverse" }}
        paddingX={{ base: "2vw" }}
        gap={{ lg: "20px" }}
        templateColumns={{
          base: "repeat(0,1fr)",
          lg: "repeat(3,1fr)",
        }}
        p={{ base: "20px 0", lg: "20px 0 40px 0" }}
        w={{ base: "100%", lg: "70%" }}
      >
        <GridItem
          p={{ base: "10px" }}
          borderLeft={{ lg: "5px solid #ffba00" }}
          display={"flex"}
          alignItems={"center"}
          justifyContent={{ base: "start", lg: "start" }}
          color={"#20c997"}
          fontWeight={{ base: "500" }}
          fontSize={{ base: "30px", lg: "40px" }}
          w={"100%"}
        >
          Case Study
        </GridItem>
        <GridItem
          p={{ base: "10px 20px", lg: "10px" }}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"start"}
          w={{ base: "100%", lg: "200%" }}
          fontSize={{ base: "md", lg: "25px" }}
          fontWeight={{ base: "400", lg: 500 }}
          textAlign={{ base: "start", lg: "end" }}
        >
          Gamified experience of cucling for Dopenerds: A Case Study
        </GridItem>
      </Grid>
      <Box />
      <Grid templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(3, 1fr)" }}>
        <GridItem>
          <Flex p={"10px"}>
            <Image src={a_img} h={"50px"} w={"50px"} />
            <Box paddingLeft={{ base: "20px" }}>
              <Heading
                fontWeight={{ base: "500" }}
                fontSize={{ base: "30px", lg: "40px" }}
              >
                Requirement
              </Heading>
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
            <Image src={b_img} h={"50px"} w={"50px"} transform={"scale(1.3)"} />
            <Box paddingLeft={{ base: "20px" }}>
              <Heading
                fontWeight={{ base: "500" }}
                fontSize={{ base: "30px", lg: "40px" }}
              >
                Approach
              </Heading>
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
            <Image src={c_img} h={"50px"} w={"50px"} />
            <Box paddingLeft={{ base: "20px" }}>
              <Heading
                fontWeight={{ base: "500" }}
                fontSize={{ base: "30px", lg: "40px" }}
              >
                Solution
              </Heading>
              <Text fontWeight={{ base: "400", lg: 500 }}>
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
