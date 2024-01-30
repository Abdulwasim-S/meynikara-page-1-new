/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./NavPage.css";
import { Box } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const NavPage = () => {
  return (
    <Box bg={"#1b1a1a"}>
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" to={"/"}>
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
                  Helpfull-Links
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
                      Our Services
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
                      <li>
                        <NavLink
                          className="dropdown-item"
                          to={"/marketing&event"}
                        >
                          Marketing & Event
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropend">
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
                      <li>
                        <NavLink className="dropdown-item" to={"/arra"}>
                          ARRA
                        </NavLink>
                      </li>
                      <li>
                        <NavLink className="dropdown-item" to={"/metakalvi"}>
                          Metakalvi
                        </NavLink>
                      </li>
                      <li>
                        <NavLink className="dropdown-item" to={"/qualisence"}>
                          Qualisence
                        </NavLink>
                      </li>
                      <li>
                        <NavLink className="dropdown-item" to={"/virtaas"}>
                          VIRTaaS
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  {/* <li className="nav-item dropend">
                    <a
                      className="nav-link "
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Service
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                    </ul>
                  </li> */}
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact-us">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Box>
  );
};

export default NavPage;
