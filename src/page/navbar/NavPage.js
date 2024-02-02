/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./NavPage.css";
import {
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
  useDisclosure,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import logo_img from "./image/logo.png";

const NavPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const btnRef = React.useRef();
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
          {/* <Button
            display={{ base: "block", lg: "none" }}
            ref={btnRef}
            colorScheme="transparent"
            onClick={onOpen}
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
        </DrawerContent>
      </Drawer> */}
        </div>
      </nav>
    </Flex>
  );
};

export default NavPage;
