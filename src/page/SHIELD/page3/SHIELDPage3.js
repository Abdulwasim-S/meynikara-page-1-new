import { Box, Button, Flex } from "@chakra-ui/react";
import "./GLIMPage3.css";
import bg_img from "../page5/video.png";
import { useState } from "react";

const SHIELDPage3 = () => {
  const [show, setShow] = useState(true);
  return (
    <Box className="GLIMPage-3 bg-white" p={{ base: "10px", lg: "25px 0" }}>
      <Flex justifyContent={"center"}>
        {show && (
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            bgImage={bg_img}
            h={{ base: "25vh", md: "30vh", lg: "400" }}
            w={{ base: "80vw", md: "70vw", lg: "900" }}
            bgSize={"cover"}
            bgPosition={"center"}
            borderRadius={{ base: "25px", lg: "30px" }}
          >
            <Button
              _hover={{ transform: "scale(1.3)", color: "#ffba00" }}
              px={"20px"}
              color={"#22c997"}
              fontSize={"xl"}
              onClick={() => {
                setShow(false);
              }}
            >
              <i className="fa-solid fa-play"></i>
            </Button>
          </Box>
        )}
        {!show && (
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            bgImage={bg_img}
            h={{ base: "25vh", md: "30vh", lg: "400" }}
            w={{ base: "80vw", md: "70vw", lg: "900" }}
            bgSize={"cover"}
            bgPosition={"center"}
            borderRadius={{ base: "25px", lg: "30px" }}
          >
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/vh8_LQ7y24Q?si=avDBgL_rKJgh8SWY"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </Box>
        )}
      </Flex>
      <br />
    </Box>
  );
};

export default SHIELDPage3;
