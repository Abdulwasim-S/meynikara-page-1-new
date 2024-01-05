import React from "react";
import "./ContactPage.css";
import { Nav } from "react-bootstrap";

const ContactPageComp = () => {
  return (
    <div className="contact-page">
      <h1 className="contact-page-main">
        We build Data-Driven, Customer Centric XR applications to achieve your
        business objectives
      </h1>
      <div className="con-1 row">
        <div className="col-8">
          <h3 className="helpful-heading">Helpful Links</h3>
          <Nav className="helpful-links">
            <Nav.Link className="helpful-navlink" href="#aboutus">
              About Us
            </Nav.Link>
            <Nav.Link className="helpful-navlink" href="#services">
              Our Services
            </Nav.Link>
            <Nav.Link className="helpful-navlink" href="#products">
              Our Products
            </Nav.Link>
            <Nav.Link className="helpful-navlink" href="#contactus">
              Contact Us
            </Nav.Link>
            <Nav.Link className="helpful-navlink" href="#contactus">
              Privacy Policy
            </Nav.Link>
          </Nav>
        </div>
        <div className="col-4 social">
          <h1 className="helpful-heading">Social</h1>
          <div className="social-icon-container ">
            <i className=" social-icon fa-brands fa-facebook-f"></i>
            <i className=" social-icon fa-brands fa-linkedin-in"></i>
            <i className=" social-icon fa-brands fa-instagram"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPageComp;
