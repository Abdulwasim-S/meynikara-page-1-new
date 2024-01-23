import {
  Box,
  Grid,
  GridItem,
  Heading,
  Image,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import ar_img from "../images/3.png";

const Mk3 = () => {
  return (
    <Box padding={{ base: "5vh 5vw" }}>
      <Grid
        templateRows="repeat(1 1fr)"
        templateColumns="repeat(7, 1fr)"
        gap={4}
        minH={"45vh"}
      >
        <GridItem
          display={"flex"}
          flexDirection={"column"}
          colSpan={{ base: "7", lg: 4 }}
          justifyContent={"center"}
        >
          <Heading
            color={" #20c997"}
            fontWeight={{ base: "700" }}
            fontSize={{ base: "3xl", md: "5xl", lg: "5xl" }}
          >
            Benefits for Teachers
          </Heading>
          <Box
            display={{ base: "flex", lg: "none" }}
            justifyContent={"center"}
            alignItems={"center"}
            my={"3vh"}
          >
            <Image src={ar_img} h={{ base: "25vh" }} alt="ar_img" />
          </Box>
          <UnorderedList>
            <ListItem
              fontWeight={{ base: "400" }}
              fontSize={{ base: "md", md: "2xl", lg: "2xl" }}
            >
              Significantly reduces distractions in the classroom.
            </ListItem>
            <ListItem
              fontWeight={{ base: "400" }}
              fontSize={{ base: "md", md: "2xl", lg: "2xl" }}
            >
              Helps in gaining the attention of the students at once.
            </ListItem>
            <ListItem
              fontWeight={{ base: "400" }}
              fontSize={{ base: "md", md: "2xl", lg: "2xl" }}
            >
              A reliable medium to effectively evaluate and track the individual
              progress of the students.
            </ListItem>
            <ListItem
              fontWeight={{ base: "400" }}
              fontSize={{ base: "md", md: "2xl", lg: "2xl" }}
            >
              Reduces the burden of creating supporting illustrations in real
              time.
            </ListItem>
          </UnorderedList>
        </GridItem>
        <GridItem
          display={{ base: "none", lg: "flex" }}
          justifyContent={"center"}
          alignItems={"center"}
          colSpan={{ base: "7", lg: 3 }}
        >
          <Image src={ar_img} h={{ base: "40vh" }} alt="ar_img" />
        </GridItem>
      </Grid>
      <Box display={{ md: "none", lg: "block" }}>
        <br />
      </Box>
      <Box
        border={"10px solid white"}
        marginBottom={{ base: "2vh" }}
        bg={"#1b1a1a"}
        minH={"40vh"}
        color={"white"}
        display={{ base: "flex" }}
        justifyContent={{ base: "center" }}
        alignItems={{ base: "center" }}
      >
        video
      </Box>
      <div className="round-box">
        <div className="m-r bg-namikaze">
          <p className="m-i"></p>
        </div>
        <div className="m-r bg-senju hidden">
          <p className="m-i hidden-p"></p>
        </div>
        <div className="m-r bg-senju">
          <p className="m-i"></p>
        </div>
      </div>
    </Box>
  );
};

export default Mk3;
