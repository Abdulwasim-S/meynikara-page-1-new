import React from "react";
import "./NavPage.css";
import { Dropdown, Nav, Navbar } from "react-bootstrap";
import logo from "./image/logo.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

const NavPage = () => {
  return (
    <Navbar expand="lg" className="Navbar">
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
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navlist list-container">
            <Nav.Link className="navlink" href="/">
              Home
            </Nav.Link>
            <Nav.Link className="navlink" href="/">
              About Us
            </Nav.Link>
            <Dropdown>
              <Dropdown.Toggle
                className="bg-transparent navlink"
                id="dropdown-basic"
              >
                Our Services
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="/glim">GLIM</Dropdown.Item>
                <Dropdown.Item href="#/action-2" disabled>
                  Option 1
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3" disabled>
                  Option 2
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle
                className="bg-transparent navlink"
                id="dropdown-basic"
              >
                Our Products
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-2" disabled>
                  Option 1
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3" disabled>
                  Option 2
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
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
