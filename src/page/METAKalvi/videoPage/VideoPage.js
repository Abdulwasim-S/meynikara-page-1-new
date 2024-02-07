import { Box, Button, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import YouTube from "react-youtube";
import vgb1 from "./vgb1.png";
import vgb2 from "./vgb2.png";

const VideoPage = () => {
  const [show, setShow] = useState(true);
  const [show2, setShow2] = useState(true);
  return (
    <>
      <Flex
        w={"100%"}
        flexDirection={{ base: "column", lg: "row" }}
        alignItems={"center"}
        justify={"space-around"}
      >
        <Box
          p={5}
          h={{ base: "35vh", lg: "50vh" }}
          w={{ base: "100%", lg: "49vw" }}
        >
          {show && (
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              bgImage={vgb1}
              h={"100%"}
              w={"100%"}
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
            <YouTube
              className="h-100 w-100"
              videoId={"-EcD--9dcy8"}
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
          )}
        </Box>
        <Box
          display={{ base: "none", lg: "block" }}
          border={"3px solid #ffba00"}
          h={"45vh"}
        ></Box>
        <Box
          display={{ base: "block", lg: "none" }}
          border={"3px solid #ffba00"}
          w={"60%"}
        ></Box>
        <Box
          p={5}
          h={{ base: "35vh", lg: "50vh" }}
          w={{ base: "100%", lg: "49vw" }}
        >
          {show2 && (
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              bgImage={vgb2}
              h={"100%"}
              w={"100%"}
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
                  setShow2(false);
                }}
              >
                <i className="fa-solid fa-play"></i>
              </Button>
            </Box>
          )}
          {!show2 && (
            <YouTube
              className="h-100 w-100"
              videoId={"Lk-u9pUrVSI"}
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
          )}
        </Box>
      </Flex>
    </>
  );
};

export default VideoPage;
