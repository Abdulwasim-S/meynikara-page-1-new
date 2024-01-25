import { Box, Button, Flex } from "@chakra-ui/react";
import "./GLIMPage3.css";
import bg_img from "../page5/video.png";

const SHIELDPage3 = () => {
  return (
    <Box className="GLIMPage-3 bg-white" p={{ base: "10px", lg: "25px 0" }}>
      <Flex justifyContent={"center"}>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          bgImage={bg_img}
          h={{ base: "25vh", md: "30vh", lg: "400" }}
          w={{ base: "80vw", md: "70vw", lg: "900" }}
          bgSize={"cover"}
          bgPosition={"center"}
          borderRadius={{ base: "25px", lg: "" }}
        >
          <Button
            _hover={{ transform: "scale(1.3)", color: "#ffba00" }}
            px={"20px"}
            color={"#22c997"}
            fontSize={"xl"}
          >
            <i className="fa-solid fa-play"></i>
          </Button>
        </Box>
      </Flex>
      <br />
    </Box>
  );
};

export default SHIELDPage3;
