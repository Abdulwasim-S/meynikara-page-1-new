import React, { useState } from "react";
import "./EmailPage.css";
import lm from "./image/lm.png";
import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { toast } from "react-toastify";

const EmailPage = () => {
  const [values, setValues] = useState({ email: "", name: "", mobile: "" });
  const handle_submit = () => {
    toast.success("hello");
  };
  return (
    <Box p={{ base: "5vh 5vw" }}>
      <form className="inp-form row" onSubmit={handle_submit}>
        <Heading
          textAlign={"center"}
          fontWeight={{ base: "700" }}
          fontSize={{ base: "3xl", md: "5xl", lg: "5xl" }}
          pb={"2vh"}
        >
          Let's Work <span className="text-cyan">Together</span>
        </Heading>
        <div className="inp-group col-md-4">
          <input
            type="email"
            className="page-inputs"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Email"
            value={values.email}
            required
          />
        </div>
        <div className="inp-group col-md-4">
          <input
            type="name"
            className="page-inputs"
            placeholder="Name"
            id="exampleInputName1"
            value={values.name}
            required
          />
        </div>
        <div className="inp-group col-md-4">
          <input
            type="text"
            className="page-inputs"
            placeholder="Mobile Number"
            id="exampleInputNumber1"
            value={values.mobile}
            required
          />
        </div>
        <Box display={{ base: "black", md: "none" }}>
          <br />
        </Box>
        <Box display={"flex"} justifyContent={"center"}>
          <Button
            type="submit"
            border={{ base: "2px solid #20c997" }}
            bg={"white"}
            w={{ base: "", md: "", lg: "25vw" }}
            h={{ base: "40px", md: "", lg: "50px" }}
            borderRadius={{ base: "20px", md: "", lg: "25px" }}
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            fontSize={{ base: "lg", md: "xl", lg: "xl" }}
            _hover={{
              bg: "#20c997",
              color: "white",
            }}
          >
            <Box visibility={"hidden"} rotate={"45"}>
              <ArrowForwardIcon fontWeight={{ base: "500" }} fontSize={"xl"} />
            </Box>
            Request Access
            <Box rotate={"45"}>
              <ArrowForwardIcon transform="rotate(-45deg)" fontSize={"2xl"} />
            </Box>
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default EmailPage;
