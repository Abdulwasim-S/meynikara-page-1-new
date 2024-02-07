import { AddIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  InputLeftAddon,
  InputRightAddon,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { Drawer, Input, Select } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";

const FloatingNavContact = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const btnRef = React.useRef();

  return (
    <>
      <Button
        ref={btnRef}
        colorScheme="transparent"
        onClick={() => {
          console.log(1);
          onOpen();
          console.log(isOpen);
        }}
        bg={"red"}
      >
        {" "}
        <span className="navbar-toggler-icon"></span>
      </Button>
      <Drawer
        isOpen={isOpen}
        // placement="right"
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
      </Drawer>
    </>
  );
};
export default FloatingNavContact;
