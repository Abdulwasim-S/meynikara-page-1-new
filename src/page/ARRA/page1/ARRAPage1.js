import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import arra_img from "../images/1.png";
import YouTube from "react-youtube";

import bg_img from "../images/bg2.png";
import ARRAPage2 from "../page2/ARRAPage2";
// import ReactGA from "react-ga4";

const ARRAPage1 = () => {
  const [show, setShow] = useState(true);
  const setFromPage = () => {
    localStorage["meynikara-from-page"] = "ARRA";
    document.title = "Meynikara | ARRA";
    // ReactGA.send({
    //   hitType: "pageview",
    //   page: window.location.pathname,
    //   title: document.title,
    // });
  };
  useEffect(() => {
    setFromPage();
  }, []);
  return (
    <>
      <Grid
        templateRows="repeat(1 1fr)"
        templateColumns="repeat(7, 1fr)"
        gap={4}
        p={{ base: "5vh 0vw 5vh 5vw" }}
        minH={"40vh"}
      >
        <GridItem
          display={{ base: "flex", lg: "none" }}
          justifyContent={"end"}
          alignItems={"center"}
          colSpan={{ base: "7", lg: 3 }}
        >
          <Image src={arra_img} h={{ base: "25vh" }} alt="arra_img" />
        </GridItem>
        <GridItem
          display={"flex"}
          flexDirection={"column"}
          colSpan={{ base: "7", lg: 4 }}
          justifyContent={"center"}
        >
          <Heading
            color={" #20c997"}
            fontWeight={{ base: "700" }}
            fontSize={{ base: "3xl", md: "5xl", lg: "5xl" }}
          >
            ARRA
          </Heading>
          <Text
            fontWeight={{ base: "400" }}
            fontSize={{ base: "md", md: "2xl", lg: "2xl" }}
          >
            Save up to{" "}
            <Box display={"inline-block"} fontWeight={500}>
              <span className="text-senju ">25%</span>
            </Box>{" "}
            on travel costs and up to{" "}
            <Box display={"inline-block"} fontWeight={500}>
              <span className="text-senju">40%</span>
            </Box>{" "}
            on service delivery costs using our AR based Remote Assistance.
          </Text>
          <Link
            w={{ md: "50%" }}
            h={{ base: "40px" }}
            borderRadius={{ base: "20px" }}
            fontSize={{ base: "16px", md: "sm", lg: "md" }}
            colorScheme="dark"
            bg={"#ffba00"}
            mt={{ lg: "20px" }}
            mb={"20px"}
            color={"black"}
            fontWeight={{ base: "700" }}
            _hover={{ bg: "#20c997", color: "white" }}
            p={{ base: "5px 35px", md: "10px 50px" }}
            href="#contact-us"
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            transform={{ base: "scale(0.75)", md: "scale(1)" }}
            onClick={() => {
              // eslint-disable-next-line no-undef
              gtag(
                "event",
                `${localStorage["meynikara-from-page"]} Request form opened`,
                {
                  event_category: `${localStorage["meynikara-from-page"]} Request form opened`,
                  event_label: localStorage["meynikara-from-page"],
                }
              );
            }}
          >
            Request for Free Trial
          </Link>
        </GridItem>
        <GridItem
          display={{ base: "none", lg: "flex" }}
          justifyContent={"end"}
          alignItems={"center"}
          colSpan={{ base: "7", lg: 3 }}
        >
          <Image src={arra_img} h={"50vh"} alt="arra_img" />
        </GridItem>
      </Grid>
      <ARRAPage2 />
      <Box display={{ md: "none", lg: "block" }}>
        <br />
      </Box>
      <Box className="GLIMPage-3 bg-white" p={{ base: "10px", lg: "25px 0" }}>
        <Flex
          justifyContent={"center"}
          // bg={"#f1f1f1"}
          py={10}
        >
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
                videoId={"kp1j12u9-ls"}
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
    </>
  );
};

export default ARRAPage1;
