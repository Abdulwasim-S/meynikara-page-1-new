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
      <Grid templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(3, 1fr)" }}>
        <GridItem>
          <Flex p={"10px"}>
            <Image
              bg={"black"}
              borderRadius={"50%"}
              h={{ base: "50px" }}
              w={{ base: "150px" }}
            />
            <Box paddingLeft={{ base: "20px" }}>
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
            <Image
              bg={"black"}
              borderRadius={"50%"}
              h={{ base: "50px" }}
              w={{ base: "150px" }}
            />
            <Box paddingLeft={{ base: "20px" }}>
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
            <Image
              bg={"black"}
              borderRadius={"50%"}
              h={{ base: "50px" }}
              w={{ base: "150px" }}
            />
            <Box paddingLeft={{ base: "20px" }}>
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
