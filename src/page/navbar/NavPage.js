import React from "react";
import "./NavPage.css";
import { Dropdown, Nav, Navbar } from "react-bootstrap";
import logo from "./image/logo.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { NavLink } from "react-router-dom";

const NavPage = () => {
  return (
    <Navbar expand="lg" className="Navbar" inverse collapseOnSelect>
      <div className="container-fluid">
        <Navbar.Brand className="heading" href="/">
          <LazyLoadImage
            effect="blur"
            className="logo-image"
            src={logo}
            alt="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle
          className="nav-toggle border-0"
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav" inverse collapseOnSelect>
          <Nav className="me-auto navlist list-container">
            <NavLink className="navlink" to="/">
              About Us
            </NavLink>
            <Dropdown className="dropmenu">
              <div className="dropdown">
                <NavLink
                  className="nav-button dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Our Services
                </NavLink>
                <div
                  className=" dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <NavLink
                    className="bg-transparent nav-options dropdown-item"
                    to={"/glim"}
                  >
                    GLIM
                  </NavLink>
                  <NavLink
                    className="bg-transparent nav-options dropdown-item"
                    to={"/shield"}
                  >
                    SHIELD
                  </NavLink>
                  <NavLink
                    className="bg-transparent nav-options dropdown-item"
                    to={"/marketing&event"}
                  >
                    Marketing & Event
                  </NavLink>
                  <NavLink
                    className="bg-transparent nav-options dropdown-item"
                    to={"/arra"}
                  >
                    ARRA
                  </NavLink>
                </div>
              </div>
            </Dropdown>
            <Dropdown className="dropmenu">
              <div className="dropdown">
                <NavLink
                  className="nav-button dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Our Products
                </NavLink>
                <div
                  className=" dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <NavLink
                    className="bg-transparent nav-options dropdown-item"
                    to={"/product"}
                  >
                    Option
                  </NavLink>
                  <NavLink
                    className="bg-transparent nav-options dropdown-item"
                    to={"/product"}
                  >
                    Option 1
                  </NavLink>
                </div>
              </div>
            </Dropdown>

            <NavLink className="navlink" to="/downloads">
              Downloads
            </NavLink>
            <a className="navlink" href="#contact-us">
              Contact Us
            </a>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default NavPage;
