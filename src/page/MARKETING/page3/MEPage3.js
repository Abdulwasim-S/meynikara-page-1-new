import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";

const MEPage3 = () => {
  return (
    <Grid
      paddingX={{ base: "2vw" }}
      templateColumns={{
        base: "repeat(0,1fr)",
        lg: "repeat(3,1fr)",
      }}
    >
      <GridItem
        p={{ base: "10px" }}
        borderRight={{ lg: "5px solid #ffba00" }}
        display={"flex"}
        alignItems={"center"}
        justifyContent={{ base: "start", lg: "end" }}
        color={"#20c997"}
        fontWeight={{ base: "500" }}
        fontSize={{ base: "30px", lg: "40px" }}
      >
        Virtual Meeting Platform
      </GridItem>
      <GridItem
        p={{ base: "10px" }}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"start"}
        w={{ base: "100%", lg: "200%" }}
        fontSize={{ base: "20px", lg: "25px" }}
        fontWeight={{ base: "400", lg: 500 }}
      >
        Virtual meeting platform have become essentail tools for communication
        and collaboration. Below are the features of our Virtual meeting
        platform
      </GridItem>
    </Grid>
  );
};

export default MEPage3;
