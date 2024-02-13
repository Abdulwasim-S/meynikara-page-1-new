import { Box, Button } from "@chakra-ui/react";
import { Flex } from "antd";
import React, { useState } from "react";
import bg_img from "./vbg.png";
import YouTube from "react-youtube";

const Q3 = () => {
  const [show, setShow] = useState(true);
  return (
    <Box padding={{ base: "5vh 5vw" }} w={"100%"}>
      <Box display={"flex"} justifyContent={"center"}>
        <Flex justifyContent={"center"} alignItems={"center"}>
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
              height={"100%"}
              width={"100%"}
              src="https://www.youtube.com/embed/FPgFrdQEN_M?si=j_Tuxk_iX6PMtaP0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe> */}
              <YouTube
                className="h-100 w-100"
                videoId={"7jf6Dljb_EE"}
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
                      event_label: "GLIM",
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
                      event_label: "GLIM",
                    }
                  );
                }}
              />
            </Box>
          )}
        </Flex>
      </Box>
      <br />
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

export default Q3;
