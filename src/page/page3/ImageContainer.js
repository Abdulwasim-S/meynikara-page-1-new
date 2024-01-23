import React from "react";
import "./ImageContainer.css";
import { Box, Grid, GridItem, Image } from "@chakra-ui/react";
import card_bg from "./box .png";
const ImageContainer = () => {
  return (
    <Box w={"100%"}>
      <Grid
        display={"flex"}
        justifyContent={"space-between"}
        templateColumns="repeat(5, 1fr)"
        gap={4}
      >
        <GridItem colSpan={1}>
          <Image src={card_bg} alt="img" />
        </GridItem>
        <GridItem colSpan={1}>
          <Image src={card_bg} alt="img" />
        </GridItem>
        <GridItem colSpan={1}>
          <Image src={card_bg} alt="img" />
        </GridItem>
        <GridItem colSpan={1}>
          <Image src={card_bg} alt="img" />
        </GridItem>
        <GridItem colSpan={1}>
          <Image src={card_bg} alt="img" />
        </GridItem>
        <GridItem colSpan={1}>
          <Image src={card_bg} alt="img" />
        </GridItem>
        <GridItem colSpan={1}>
          <Image src={card_bg} alt="img" />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default ImageContainer;
