import React from "react";
import hex from "./Hex.png";
import "./AgilePage.css";
import a from "./icons/a.png";
import b from "./icons/b.png";
import c from "./icons/c.png";
import d from "./icons/d.png";
import e from "./icons/e.png";
import f from "./icons/f.png";

import { Box, Heading, Image, Text } from "@chakra-ui/react";

const AgilePage = () => {
  return (
    <Box className="AgilePage">
      <Heading
        textAlign={"center"}
        fontWeight={{ base: "700" }}
        fontSize={{ base: "3xl", md: "5xl", lg: "5xl" }}
        pb={"2vh"}
      >
        Our Development Approach{" "}
        <Box display={{ base: "block", lg: "none" }}></Box>
        <span className="text-cyan">Agile Framework</span>
        <span className="vb-line"></span>
      </Heading>
      <Text
        w={"100%"}
        fontSize={{ base: "lg", md: "2xl" }}
        fontWeight={{ base: "500", md: "400" }}
        textAlign={"center"}
      >
        We have built a proprietary framework following agile methodology to
        ensure high quality and timely delivery
      </Text>
      <Box>
        <br />
      </Box>
      <Box className="hex-img-container">
        <Image
          display={{ base: "none", md: "block" }}
          h={{ base: "", md: "", lg: "100vh" }}
          src={hex}
          alt="hex"
        />
        <Box display={{ base: "block", md: "none" }}>
          <Box
            display={{ base: "flex" }}
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Image w={"30%"} src={a} alt="a_img" />
            <Box w={"70%"} p={"2vh 2vw"}>
              <Heading fontSize={"lg"}>Define and Discovery </Heading>
              <Text textAlign={"justify"} fontSize={"md"}>
                Define the requirements and understanding existing information
                of the client
              </Text>
            </Box>
          </Box>
          <Box
            display={{ base: "flex" }}
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Box w={"70%"} p={"2vh 2vw"}>
              <Heading fontSize={"lg"}>Plan and Prioritize </Heading>
              <Text textAlign={"justify"} fontSize={"md"}>
                Develope a project plan prioritize specific features , tasks and
                timelines
              </Text>
            </Box>
            <Image w={"30%"} src={b} alt="b_img" />
          </Box>
          <Box
            display={{ base: "flex" }}
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Image w={"30%"} src={c} alt="c_img" />
            <Box w={"70%"} p={"2vh 2vw"}>
              <Heading fontSize={"lg"}>Execute and Evaluate </Heading>
              <Text textAlign={"justify"} fontSize={"md"}>
                Execute on sprint basis and evaluate the progress to ensure
                velocity
              </Text>
            </Box>
          </Box>
          <Box
            display={{ base: "flex" }}
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Box w={"70%"} p={"2vh 2vw"}>
              <Heading fontSize={"lg"}>Review and Recalibrate</Heading>
              <Text textAlign={"justify"} fontSize={"md"}>
                At the end of each sprint , review the progress and adjust the
                plan as needed
              </Text>
            </Box>
            <Image w={"30%"} src={d} alt="d_img" />
          </Box>
          <Box
            display={{ base: "flex" }}
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Image w={"30%"} src={e} alt="e_img" />
            <Box w={"70%"} p={"2vh 2vw"}>
              <Heading fontSize={"lg"}>Defect Free and Deliver</Heading>
              <Text textAlign={"justify"} fontSize={"md"}>
                Test the out Thoroughly to ensure that it meets your
                requirements and is free of defects before delivering
              </Text>
            </Box>
          </Box>
          <Box
            display={{ base: "flex" }}
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Box w={"70%"} p={"2vh 2vw"}>
              <Heading fontSize={"lg"}>Monitor and Maintain</Heading>
              <Text textAlign={"justify"} fontSize={"md"}>
                Continue to maintain the output and make continuous improvements
                as per your feedback
              </Text>
            </Box>
            <Image w={"30%"} src={f} alt="f_img" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AgilePage;
