import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import ar_img from "../images/3.png";
import bg_img from "../images/bg2.png";
import YouTube from "react-youtube";

const ARRAPage3 = () => {
  const [show, setShow] = useState(true);
  return (
    <Box padding={{ base: "5vh 5vw" }}>
      <Grid
        templateRows="repeat(1 1fr)"
        templateColumns="repeat(7, 1fr)"
        gap={4}
        minH={"45vh"}
      >
        <GridItem
          display={"flex"}
          flexDirection={"column"}
          colSpan={{ base: "7", lg: 7 }}
          justifyContent={"center"}
        >
          <Heading
            color={" #20c997"}
            fontWeight={{ base: "700" }}
            fontSize={{ base: "3xl", md: "5xl", lg: "5xl" }}
          >
            AR-Based{" "}
            <Box display={{ base: "none", md: "block", lg: "none" }}></Box>{" "}
            Remote Assistance
          </Heading>
          <Text
            fontWeight={{ base: "400" }}
            fontSize={{ base: "md", md: "2xl", lg: "2xl" }}
          >
            SAR-based remote assistance addresses these challenges by providing
            a more immersive and interactive experience for both support
            personnel and customers. It also allows support personnel to guide
            customers through complex or risky tasks with visual cues and
            overlays, which can improve safety and reduce the risk of errors.
          </Text>
        </GridItem>
      </Grid>
      <Box display={{ md: "none", lg: "block" }}>
        <br />
      </Box>
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
                transform={{ base: "", md: "scale(1.5)" }}
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
              {/* <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/tf_BlmqlCTA?si=rK2C5a2bQAE3DUOx"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe> */}

              <YouTube
                className="h-100 w-100"
                videoId={"tf_BlmqlCTA"}
                opts={{
                  width: "100%",
                  height: "100%",
                }}
                onPlay={() => {
                  // eslint-disable-next-line no-undef
                  gtag(
                    "event",
                    `${localStorage["meynikara-from-page"]} Video Started`,
                    {
                      event_category: `${localStorage["meynikara-from-page"]} Video`,
                      event_label: "SHIELD",
                    }
                  );
                }}
                onEnd={() => {
                  // eslint-disable-next-line no-undef
                  gtag(
                    "event",
                    `${localStorage["meynikara-from-page"]} Video Completed`,
                    {
                      event_category: `${localStorage["meynikara-from-page"]} Video`,
                      event_label: "shield",
                    }
                  );
                }}
              />
            </Box>
          )}
        </Flex>
        <br />
      </Box>
      <div className="round-box">
        <div className="m-r bg-namikaze">
          <p className="m-i"></p>
        </div>
        <div className="m-r bg-senju hidden">
          <p className="m-i hidden-p"></p>
        </div>
        <div className="m-r bg-senju">
          <p className="m-i"></p>
        </div>
      </div>
    </Box>
  );
};

export default ARRAPage3;
