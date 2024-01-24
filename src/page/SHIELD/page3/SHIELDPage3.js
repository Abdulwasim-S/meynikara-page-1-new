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
          h={{ base: "30vh", md: "30vh", lg: "50vh" }}
          w={{ base: "80vw", md: "70vw", lg: "40vw" }}
          bgSize={"cover"}
          bgPosition={"center"}
          borderRadius={{ base: "30px", lg: "50px" }}
        >
          <Button
            _hover={{ transform: "scale(1.3)", color: "#ffba00" }}
            px={"20px"}
            color={"#22c997"}
          >
            <i class="fa-solid fa-play"></i>
          </Button>
        </Box>
      </Flex>
      <br />
    </Box>
  );
};

export default SHIELDPage3;
