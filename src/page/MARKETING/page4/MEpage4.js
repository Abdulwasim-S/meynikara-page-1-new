import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Flex } from "@chakra-ui/react";

const MEPage4 = () => {
  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    beforeChange: (current, next) => setImageIndex(next),
  };
  const images = ["astronaut", "celebrating", "education", "taken"];
  return (
    <Box p={{ base: "20px" }}>
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
            <Flex
              borderRadius={"10px"}
              color={"white"}
              alignItems={"center"}
              justifyContent={"center"}
              height={"25vh"}
              width={"100%"}
              bg={"red"}
            >
              {img}
            </Flex>
          </div>
        ))}
      </Slider>
    </Box>
  );
};
export default MEPage4;
