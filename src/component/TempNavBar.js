import { Box, Image, Link } from "@chakra-ui/react";
import React from "react";
import logo_img from "./logo.png";

const TempNavBar = () => {
  return (
    <Box bg={"#1b1a1a"} padding={{ base: "" }}>
      <Link
        display={"flex"}
        justifyContent={"start"}
        href="https://meynikara.com/"
        target="_blank"
        h={"10vh"}
        overflow={"hidden"}
      >
        <Image
          // w={{ base: "40vw", md: "15vw" }}
          h={"12vh"}
          ml={{ base: "5vw" }}
          src={logo_img}
          alt="logo_img"
        />
      </Link>
    </Box>
  );
};

export default TempNavBar;
