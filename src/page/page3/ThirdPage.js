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
        Unlock the potential of immersive experiences with our comprehensive
        range of AR and VR solutions tailored to meet your needs. At Meynikara,
        we combine cutting-edge technology with creative innovation to bring
        your ideas to life. Whether you're looking to revolutionize training
        programs, enhance customer engagement, or create captivating virtual
        environments, we have the expertise to make it happen.
      </Text>
      <Box className="image-container">
        <ImageContainer />
      </Box>
    </Box>
  );
};

export default ThirdPage;
