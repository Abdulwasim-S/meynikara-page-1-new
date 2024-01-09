import React from "react";
import "./NavPage.css";
import { Image, Nav, Navbar } from "react-bootstrap";
import logo from "./image/logo.png";

const NavPage = () => {
  return (
    <Navbar expand="lg" className="Navbar">
      <div className="container-fluid">
        <Navbar.Brand className="heading" href="#home">
          <Image className="logo-image" src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle
          className="nav-toggle border-0"
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navlist list-container">
            <Nav.Link className="navlink" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="navlink" href="#aboutus">
              About Us
            </Nav.Link>
            <Nav.Link className="navlink" href="#services">
              Our Services
            </Nav.Link>
            <Nav.Link className="navlink" href="/product">
              Our Products
            </Nav.Link>
            <Nav.Link className="navlink" href="#downloads">
              Downloads
            </Nav.Link>
            <Nav.Link className="navlink" href="#contactus">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default NavPage;
