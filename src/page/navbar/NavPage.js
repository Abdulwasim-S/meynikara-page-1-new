/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./NavPage.css";
import { Flex } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const NavPage = () => {
  return (
    <Flex
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
          <a className="navbar-brand fw-bold" href="#">
            Meynikara
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
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
              {/* <li className="nav-item">
                <a className="nav-link" href="#">
                  Helpfull-Links
                </a>
              </li> */}
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
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Manufacturing
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <NavLink className="dropdown-item" to={"/glim"}>
                          GLIM
                        </NavLink>
                      </li>
                      <li>
                        <NavLink className="dropdown-item" to={"/shield"}>
                          SHIELD
                        </NavLink>
                      </li>
                    </ul>
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
    </Flex>
  );
};

export default NavPage;
