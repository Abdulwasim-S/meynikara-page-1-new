import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Grid,
  GridItem,
  Heading,
} from "@chakra-ui/react";
import React from "react";

const ARRAPage4 = () => {
  return (
    <Box
      p={{ base: "5vh 5vw" }}
      minH={{ base: "100vh", md: "90vh", lg: "70vh" }}
    >
      <Grid
        templateRows="repeat(1 1fr)"
        templateColumns="repeat(7, 1fr)"
        gap={4}
        p={{ base: "2vh 2vw" }}
        minH={"45vh"}
      >
        <GridItem
          display={{ base: "flex" }}
          justifyContent={"center"}
          alignItems={"center"}
          colSpan={{ base: "7", lg: 3 }}
          bg="red.300"
          minH={"40vh"}
          color={"white"}
        >
          Image
        </GridItem>
        <GridItem
          display={"flex"}
          flexDirection={"column"}
          colSpan={{ base: "7", lg: 4 }}
          justifyContent={"center"}
        >
          <Heading
            color={" #20c997"}
            textAlign={{ base: "start", lg: "center" }}
            fontSize={{ base: "3xl", md: "5xl", lg: "5xl" }}
          >
            Benefits
          </Heading>

          <Accordion defaultIndex={[0]} allowToggle>
            <AccordionItem border={0}>
              <h2>
                <AccordionButton>
                  <Box
                    type="checkbox"
                    display={{ base: "flex" }}
                    alignItems={"center"}
                    justifyContent={"center"}
                    as="span"
                    h={"50px"}
                    w={"50px"}
                    bgGradient={"linear( green.500, green.300)"}
                    textAlign="left"
                    borderRadius={50}
                  >
                    <AccordionIcon color={"white"} />
                  </Box>
                  <Heading
                    fontSize={{ base: "lg", lg: "lg" }}
                    fontWeight={{ base: "500", lg: "500" }}
                    paddingLeft={{ base: "1vw" }}
                  >
                    DropDown
                  </Heading>
                </AccordionButton>
              </h2>
              <AccordionPanel
                fontSize={{ base: "md", md: "lg", lg: "lg" }}
                pb={4}
                pl={"10%"}
              >
                Improve customer satisfaction by providing more personalized and
                effective support.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem border={0}>
              <h2>
                <AccordionButton>
                  <Box
                    display={{ base: "flex" }}
                    alignItems={"center"}
                    justifyContent={"center"}
                    as="span"
                    h={"50px"}
                    w={"50px"}
                    bgGradient={"linear( green.500, green.300)"}
                    textAlign="left"
                    borderRadius={50}
                  >
                    <AccordionIcon color={"white"} />
                  </Box>
                  <Heading
                    fontSize={{ base: "lg", lg: "lg" }}
                    fontWeight={{ base: "500", lg: "500" }}
                    paddingLeft={{ base: "1vw" }}
                  >
                    DropDown
                  </Heading>
                </AccordionButton>
              </h2>
              <AccordionPanel
                fontSize={{ base: "md", md: "lg", lg: "lg" }}
                pb={4}
                pl={"10%"}
              >
                Improve customer satisfaction by providing more personalized and
                effective support.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem border={0}>
              <h2>
                <AccordionButton>
                  <Box
                    display={{ base: "flex" }}
                    alignItems={"center"}
                    justifyContent={"center"}
                    as="span"
                    h={"50px"}
                    w={"50px"}
                    bgGradient={"linear( green.500, green.300)"}
                    textAlign="left"
                    borderRadius={50}
                  >
                    <AccordionIcon color={"white"} />
                  </Box>
                  <Heading
                    fontSize={{ base: "lg", lg: "lg" }}
                    fontWeight={{ base: "500", lg: "500" }}
                    paddingLeft={{ base: "1vw" }}
                  >
                    DropDown
                  </Heading>
                </AccordionButton>
              </h2>
              <AccordionPanel
                fontSize={{ base: "md", md: "lg", lg: "lg" }}
                pb={4}
                pl={"10%"}
              >
                Improve customer satisfaction by providing more personalized and
                effective support.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default ARRAPage4;
