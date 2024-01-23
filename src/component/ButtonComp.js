import { Box } from "@chakra-ui/react";
import React from "react";

const ButtonComp = () => {
  return (
    <Box
      className="fixed-button"
      bg={"#1b1a1a"}
      borderRadius={"50%"}
      height={"60px"}
      width={"60px"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      border={"5px solid #20c997"}
    >
      <a className="down-butn text-center" href="#contact-us">
        <i class="fa-solid fa-handshake-angle fa-2xl text-senju"></i>
      </a>
    </Box>
  );
};

export default ButtonComp;
