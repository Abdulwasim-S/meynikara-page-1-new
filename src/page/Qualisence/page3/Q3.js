import { Box, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import ar_img from "../images/3.png";

const Q3 = () => {
  return (
    <Box padding={{ base: "5vh 5vw" }}>
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

export default Q3;
