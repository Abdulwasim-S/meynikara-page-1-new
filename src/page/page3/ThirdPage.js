import React from "react";
import "./ThirdPage.css";
import ImageContainer from "./ImageContainer";
import { Box, Heading, Text } from "@chakra-ui/react";

const ThirdPage = () => {
  return (
    <Box className="third-page">
      <Heading className="text-heading">
        Our <span className="text-cyan">Services</span>
      </Heading>
      <Text className="text-normal">
        XR can improve worker training by simulating complex processes,
        increasing safety, and reducing the risk of errors. XR can also assist
        in product design and prototyping, enhancing collaboration, and reducing
        development time. Additionally, XR can provide remote support, enabling
        experts to assist on-site technicians in real-time, improving
        efficiency, and reducing downtime.
      </Text>
      <Box className="image-container">
        <ImageContainer />
      </Box>
    </Box>
  );
};

export default ThirdPage;
