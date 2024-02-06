import { Box, Button, Flex, Grid, GridItem } from "@chakra-ui/react";
import React, { useState } from "react";
import YouTube from "react-youtube";

const VideoPage = () => {
  const [show, setShow] = useState(true);
  const [show2, setShow2] = useState(true);
  return (
    <Flex w={"100%"} justify={"space-around"}>
      <Box h={"40vh"} w={{ base: "", md: "49vw" }} bg={"red"}></Box>
      <Box h={"40vh"} w={{ base: "", md: "49vw" }} bg={"red"}></Box>
    </Flex>
  );
};

export default VideoPage;
