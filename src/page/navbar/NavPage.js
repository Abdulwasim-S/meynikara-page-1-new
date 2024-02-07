/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./NavPage.css";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  Image,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import logo_img from "./image/logo.png";
import { ArrowForwardIcon, ChevronLeftIcon } from "@chakra-ui/icons";
import { useFormik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

const NavPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [show, setShow] = useState(false);
  const [load, setLoad] = useState(false);

  const btnRef = React.useRef();

  const fieldvalidationscheme = yup.object({
    name: yup.string().required(""),
    email: yup.string().required(""),
    mobile: yup.number().required(""),
    organiztion: yup.string(),
  });
  const resetForm = () => {
    values.name = "";
    values.email = "";
    values.mobile = "";
    values.organiztion = "";
  };
  const { handleSubmit, values, handleChange, errors } = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
    },
    validationSchema: fieldvalidationscheme,
    onSubmit: async (requestInfo) => {
      setLoad(true);
      // EmailJS service ID, template ID, and Public Key

      const serviceId = "service_jd0qzwb";

      const templateId = "template_4135jaw";

      const publickey = "lneoFDiOsEdEasyy3";

      // Object that contains dynamic template params A

      const templateParams = {
        user_name: requestInfo.name,
        user_email: requestInfo.email,
        message: `Mobile Number : ${requestInfo.mobile} ,
        Organiztion : ${requestInfo.organiztion},
        From : ${localStorage["meynikara-from-page"]}`,
      };

      // Send the email Ising EmailJS

      await emailjs
        .send(serviceId, templateId, templateParams, publickey)
        .then(async (response) => {
          resetForm();
          toast.success("Request sent successfully!");
          setLoad(false);
          setShow(false);
          onClose();
          // ReactGA.event({
          //   category: "Free trial",
          //   action: "Request",
          //   label: localStorage["meynikara-from-page"],
          // });
          // eslint-disable-next-line no-undef
          gtag("event", `${localStorage["meynikara-from-page"]} Request`, {
            event_category: `${localStorage["meynikara-from-page"]} Request`,
            event_label: localStorage["meynikara-from-page"],
          });
        })
        .catch((err) => {
          const fail_res = err.text;
          toast.warning("Request not sent! ");
          toast.warning(fail_res);
          setLoad(false);
        });
    },
  });
  return (
    <Flex
      position={"relative"}
      w={"100%"}
      flexDirection={"column"}
      justifyContent={"center"}
      bg={"#1b1a1a"}
      boxShadow={
        "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 50px 0 rgba(0, 0, 0, 0.19);"
      }
      h={"10vh"}
    >
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <NavLink to={"/"}>
            <Image
              transform={{ base: "scale(1.3)" }}
              ml={"5vw"}
              h={"10vh"}
              src={logo_img}
              alt="logo-img"
            />
          </NavLink>
          <Button
            display={{ base: "block", lg: "none" }}
            ref={btnRef}
            colorScheme="transparent"
            onClick={() => {
              onOpen();
              setShow(false);
            }}
          >
            {" "}
            <span className="navbar-toggler-icon"></span>
          </Button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <Flex
              // bg={"blue"}

              w={"100%"}
              pl={"25%"}
              justifyContent={"space-around"}
              className="navbar-nav me-auto mb-2 mb-lg-0"
            >
              <li className="nav-item">
                <NavLink className="nav-link" to={"/"}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link "
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Our Services
                </a>
                <ul className="dropdown-menu">
                  <li className="nav-item dropend">
                    <a
                      className="nav-link"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Manufacturing
                    </a>
                    <div className="dropdown-menu">
                      <Flex
                        h={"fit-content"}
                        justifyContent={"space-between"}
                        flexDirection={"column"}
                      >
                        <NavLink className="sublink " to={"/glim"}>
                          GLIM
                        </NavLink>
                        <NavLink className="sublink" to={"/shield"}>
                          SHIELD
                        </NavLink>
                      </Flex>
                    </div>
                  </li>
                  <li className="nav-item dropend">
                    <NavLink
                      className="nav-link "
                      to={"/edtech"}
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      EdTech
                    </NavLink>
                  </li>
                  <li className="nav-item dropend">
                    <NavLink
                      className="nav-link "
                      to={"/marketing&events"}
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Marketing & Events
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link "
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Our Products
                </a>
                <ul className="dropdown-menu">
                  <li className="nav-item dropend">
                    <NavLink
                      className="nav-link "
                      to={"/arra"}
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      ARRA
                    </NavLink>
                  </li>
                  <li className="nav-item dropend">
                    <NavLink
                      className="nav-link "
                      to={"/qualisence"}
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Qualisence
                    </NavLink>
                  </li>
                  <li className="nav-item dropend">
                    <NavLink
                      className="nav-link "
                      to={"/metakalvi"}
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Metakalvi
                    </NavLink>
                  </li>
                  <li className="nav-item dropend">
                    <NavLink
                      className="nav-link "
                      to={"/edtech"}
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      VIRTaaS
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact-us">
                  Case Studies
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact-us">
                  Blogs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact-us">
                  Contact Us
                </a>
              </li>
            </Flex>
          </div>
        </div>
      </nav>
      <Drawer
        size={{ base: "xs", md: "sm" }}
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent bg={"#1b1a1a"} color={"white"}>
          <DrawerCloseButton size={"lg"} top={"5"} left={"5"} />
          <DrawerHeader></DrawerHeader>
          {!show && (
            <DrawerBody>
              <br />
              <Flex p={{ base: "10px" }}>
                <Heading
                  className="text-senju"
                  opacity={0.7}
                  fontSize={{ base: "lg" }}
                >
                  Our Services
                </Heading>
              </Flex>

              <Flex borderBottom={"0.1px solid gray"} />
              <Flex p={{ base: "10px" }}>
                <NavLink to={"/glim"} onClick={onClose}>
                  GLIM <span className="text-secondary"> (Manufacturing)</span>
                </NavLink>
              </Flex>
              <Flex borderBottom={"0.1px solid gray"} />
              <Flex p={{ base: "10px" }}>
                <NavLink to={"/shield"} onClick={onClose}>
                  SHIELD <span className="text-secondary">(Manufacturing)</span>
                </NavLink>
              </Flex>
              <Flex borderBottom={"0.1px solid gray"} />
              <Flex p={{ base: "10px" }}>
                <NavLink to={"/edtech"} onClick={onClose}>
                  EdTech
                </NavLink>
              </Flex>
              <Flex borderBottom={"0.1px solid gray"} />
              <Flex p={{ base: "10px" }}>
                <NavLink to={"/marketing&events"} onClick={onClose}>
                  Marketing & Events
                </NavLink>
              </Flex>
              <Flex borderBottom={"0.1px solid gray"} />
              <br />
              <Flex p={{ base: "10px" }}>
                <Heading
                  className="text-senju"
                  opacity={0.7}
                  fontSize={{ base: "lg" }}
                >
                  Our Products
                </Heading>
              </Flex>
              <Flex borderBottom={"0.1px solid gray"} />
              <Flex p={{ base: "10px" }}>
                <NavLink to={"/arra"} onClick={onClose}>
                  ARRA
                </NavLink>
              </Flex>
              <Flex borderBottom={"0.1px solid gray"} />
              <Flex p={{ base: "10px" }}>
                <NavLink to={"/metakalvi"} onClick={onClose}>
                  Metakalvi
                </NavLink>
              </Flex>
              <Flex borderBottom={"0.1px solid gray"} />
              <Flex p={{ base: "10px" }}>
                <NavLink to={"/qualisence"} onClick={onClose}>
                  Qualisence
                </NavLink>
              </Flex>
              <Flex borderBottom={"0.1px solid gray"} />
              <Flex p={{ base: "10px" }}>
                <NavLink to={"/virtaas"} onClick={onClose}>
                  VIRTaaS
                </NavLink>
              </Flex>
              <Flex borderBottom={"0.1px solid gray"} />
              <br />
              <Flex p={{ base: "10px" }}>
                <Heading
                  className="text-senju"
                  opacity={0.7}
                  fontSize={{ base: "lg" }}
                >
                  Others
                </Heading>
              </Flex>

              <Flex borderBottom={"0.1px solid gray"} />
              <Flex p={{ base: "10px" }}>
                <NavLink to={"/"} onClick={onClose}>
                  Home
                </NavLink>
              </Flex>
              <Flex borderBottom={"0.1px solid gray"} />
              <Flex p={{ base: "10px" }}>
                <NavLink to={"/casestudies"} onClick={onClose}>
                  Case Studies
                </NavLink>
              </Flex>
              <Flex borderBottom={"0.1px solid gray"} />
              <Flex p={{ base: "10px" }}>
                <NavLink to={"/blogs"} onClick={onClose}>
                  Blogs
                </NavLink>
              </Flex>
              <Flex borderBottom={"0.1px solid gray"} />
            </DrawerBody>
          )}
          {show && (
            <DrawerBody>
              <br />
              <br />
              <form className="inp-form row" onSubmit={handleSubmit}>
                <Heading
                  fontWeight={{ base: "700" }}
                  pl={3}
                  fontSize={{ base: "2xl", md: "2xl", lg: "3xl" }}
                  mt={{ base: "1vh", lg: "5" }}
                  mb={{ base: "1vh", lg: "5" }}
                >
                  Request for <span className="text-senju">Free Trial</span>
                </Heading>
                <div className="mb-4 ">
                  <Input
                    borderRadius={0}
                    border={0}
                    borderBottom={"2px solid gray"}
                    color={"white"}
                    _placeholder={{ color: "white" }}
                    type="email"
                    className="page-inputs"
                    id="email"
                    aria-describedby="emailHelp"
                    placeholder="Email *"
                    value={values.email}
                    onChange={handleChange}
                    required
                    p={3}
                    variant={"unstyled"}
                    _focus={{ borderColor: "#20c997" }}
                  />
                </div>
                <div className="mb-4 ">
                  <Input
                    borderRadius={0}
                    border={0}
                    borderBottom={"2px solid gray"}
                    color={"white"}
                    _placeholder={{ color: "white" }}
                    type="name"
                    className="page-inputs"
                    placeholder="Name *"
                    id="name"
                    value={values.name}
                    onChange={handleChange}
                    required
                    p={3}
                    variant={"unstyled"}
                    _focus={{ borderColor: "#20c997" }}
                  />
                </div>
                <div className="mb-4 ">
                  <Input
                    borderRadius={0}
                    border={0}
                    borderBottom={"2px solid gray"}
                    color={"white"}
                    _placeholder={{ color: "white" }}
                    type="number"
                    className={"page-inputs"}
                    placeholder="Mobile Number *"
                    id="mobile"
                    value={values.mobile}
                    onChange={handleChange}
                    required
                    p={3}
                    variant={"unstyled"}
                    _focus={{ borderColor: "#20c997" }}
                  />
                </div>
                <div className="mb-4 ">
                  <Input
                    borderRadius={0}
                    border={0}
                    borderBottom={"2px solid gray"}
                    color={"white"}
                    _placeholder={{ color: "white" }}
                    type="text"
                    className={"page-inputs "}
                    placeholder="Organization"
                    id="organiztion"
                    value={values.organiztion}
                    onChange={handleChange}
                    p={3}
                    variant={"unstyled"}
                    _focus={{ borderColor: "#20c997" }}
                  />
                </div>
                <Box display={{ base: "black", md: "none" }}>
                  <br />
                </Box>
                {errors.mobile && (
                  <>
                    <Box textAlign={"center"} color={"red.500"}>
                      *Enter valid Mobile number
                    </Box>
                    <br />
                    <br />
                  </>
                )}
                <Box display={"flex"} justifyContent={"center"}>
                  {!load && (
                    <Button
                      type="submit"
                      border={{ base: "2px solid #20c997" }}
                      bg={"transparent"}
                      color={"white"}
                      h={{ base: "40px", md: "", lg: "50px" }}
                      // borderRadius={{ base: "20px", md: "", lg: "25px" }}
                      display={"flex"}
                      flexDirection={"row"}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                      // fontSize={{ base: "lg", md: "xl", lg: "xl" }}
                      _hover={{
                        bg: "#20c997",
                        color: "white",
                      }}
                      isLoading={load}
                      w={"100%"}
                    >
                      <Box visibility={"hidden"} rotate={"45"}>
                        <ArrowForwardIcon
                          fontWeight={{ base: "500" }}
                          fontSize={"xl"}
                        />
                      </Box>
                      Request Access
                      <Box rotate={"45"}>
                        <ArrowForwardIcon
                          transform="rotate(-45deg)"
                          fontSize={"2xl"}
                        />
                      </Box>
                    </Button>
                  )}
                  {load && (
                    <Button
                      type="submit"
                      border={{ base: "2px solid #20c997" }}
                      bg={"transparent"}
                      color={"white"}
                      h={{ base: "40px", md: "", lg: "50px" }}
                      isLoading={load}
                      w={"100%"}
                    ></Button>
                  )}
                </Box>
              </form>
            </DrawerBody>
          )}
        </DrawerContent>
      </Drawer>
      <Box>
        {/* <Button
          colorScheme="transparent"
          onClick={() => {
            onOpen();
            setShow(true);
          }}
          bg={"red"}
          position={"absolute"}
          right={0}
          top={"45vh"}
          w={"1vw"}
        >
          {" "} */}
        <ChevronLeftIcon
          onClick={() => {
            onOpen();
            setShow(true);
          }}
          position={"fixed"}
          right={-1}
          top={"45vh"}
          color={"white"}
          fontSize={"3xl"}
          bg={"#1b1a1a"}
          h={"10vh"}
          borderLeftRadius={"10px"}
        />
        {/* </Button> */}
      </Box>
    </Flex>
  );
};

export default NavPage;
