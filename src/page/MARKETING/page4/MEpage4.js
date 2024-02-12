import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

const MEPage4 = () => {
  const NextArrow = ({ onClick }) => {
    return (
      <Box
        w={"30vw"}
        h={"100%"}
        opacity={0}
        className="arrow next"
        onClick={onClick}
      >
        {">"}
      </Box>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <Box
        w={"30vw"}
        h={"100%"}
        opacity={0}
        className="arrow prev"
        onClick={onClick}
      >
        {"<"}
      </Box>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };
  // const images = ["astronaut", "celebrating", "education", "taken"];
  const images = [
    {
      title: "Virtual Meeting",
      para: "Conduct meetings with all the invitees in the meeting room",
    },
    {
      title: "Meeting Creation",
      para: "Create and share the virtual meeting invite",
    },
    {
      title: "Avatar Creation",
      para: "Create a customisable avatar and participate in the virtual meeting",
    },
    {
      title: "Virtual Meeting",
      para: "Conduct meetings with all the invitees in the meeting room",
    },
    {
      title: "Meeting Creation",
      para: "Create and share the virtual meeting invite",
    },
    {
      title: "Avatar Creation",
      para: "Create a customisable avatar and participate in the virtual meeting",
    },
  ];
  return (
    <Box
      className="bg-meynikara"
      marginTop={{ base: "25px" }}
      position={"relative"}
      p={{ base: "40px 20px" }}
    >
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
            <Flex
              borderRadius={"10px"}
              color={"white"}
              alignItems={"center"}
              justifyContent={"center"}
              flexDirection={"column"}
              height={{ base: "40vh", md: "25vh" }}
              width={"100%"}
              bg={"gray.600"}
              p={5}
            >
              <Heading
                className="text-senju"
                fontSize={{ base: "md", md: "lg", lg: "2xl" }}
                textAlign={"center"}
              >
                {img.title}
              </Heading>
              <Box />
              <Text
                fontSize={{ base: "sm", md: "md", lg: "lg" }}
                textAlign={"center"}
              >
                {img.para}
              </Text>
            </Flex>
          </div>
        ))}
      </Slider>
    </Box>
  );
};
export default MEPage4;
