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
  Image,
} from "@chakra-ui/react";
import React from "react";
import b_img from "../images/4.png";

const ARRAPage4 = () => {
  return (
    <Box
      bg={"#f1f1f1"}
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
          display={{ base: "none", lg: "flex" }}
          justifyContent={"center"}
          alignItems={"center"}
          colSpan={{ base: "7", lg: 3 }}
          minH={"40vh"}
          color={"white"}
        >
          <Image src={b_img} h={{ base: "45vh", lg: "60vh" }} alt="b_img" />
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
            Benefits
          </Heading>
          <Box
            display={{ base: "flex", lg: "none" }}
            justifyContent={"center"}
            alignItems={"center"}
            minH={"40vh"}
          >
            <Image src={b_img} h={{ base: "45vh", lg: "60vh" }} alt="b_img" />
          </Box>
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
                    bgGradient={"linear( #1ab7a1, #33e5d9)"}
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
                    bgGradient={"linear( #1ab7a1, #33e5d9)"}
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
                    bgGradient={"linear( #1ab7a1, #33e5d9)"}
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