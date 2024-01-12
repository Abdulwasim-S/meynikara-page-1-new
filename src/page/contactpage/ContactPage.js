import React from "react";
import "./ContactPage.css";
import { Nav } from "react-bootstrap";

const ContactPageComp = () => {
  return (
    <div className="contact-page bg-meynikara">
      <h1 className="contact-page-main">
        We build Data-Driven, Customer Centric XR applications to achieve your
        business objectives
      </h1>
      <div className="con-1 row">
        <div className="col-8">
          <h3 className="helpful-heading">Helpful Links</h3>
          <Nav className="helpful-links">
            <Nav.Link className="helpful-navlink" href="#aboutus">
              About Us{" "}
              <i className="contact-page-arrow fa-sharp fa-solid fa-arrow-right fa-2xs mx-2"></i>
            </Nav.Link>
            <Nav.Link className="helpful-navlink" href="#services">
              Our Services{" "}
              <i className="contact-page-arrow fa-sharp fa-solid fa-arrow-right fa-2xs mx-2"></i>
            </Nav.Link>
            <Nav.Link className="helpful-navlink" href="#products">
              Our Products{" "}
              <i className="contact-page-arrow fa-sharp fa-solid fa-arrow-right fa-2xs mx-2"></i>
            </Nav.Link>
            <Nav.Link className="helpful-navlink" href="#contactus">
              Contact Us{" "}
              <i className="contact-page-arrow fa-sharp fa-solid fa-arrow-right fa-2xs mx-2"></i>
            </Nav.Link>
            <Nav.Link className="helpful-navlink" href="#contactus">
              Privacy Policy{" "}
              <i className="contact-page-arrow fa-sharp fa-solid fa-arrow-right fa-2xs mx-2"></i>
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
      <div className="contact-us-address text-white row">
        <div className="contact-us-address-mainbox col-lg-4">
          <h3 className="contact-us-address-heading">Contact Us</h3>
          <p className="contact-us-address-para">
            WOCO SPACES, 4/222, East Coast Rd, Palavakkam, Chennai, Tamil Nadu
            600041, <br />
            Phone:+91 73055 00448
          </p>
        </div>
        <div className="contact-page-hiddden-border-box col-lg-1 ">
          <div className="contact-page-hiddden-border"></div>
        </div>
        <div className="contact-us-address-mainbox col-lg-3">
          <h3 className="contact-us-address-heading">
            {" "}
            <br />
          </h3>
          <p className="contact-us-address-para">
            110-104 Crockford Blvd, Toronto, ON,M1R 3C3. <br />
            Phone: +1 (647) 573-6558
          </p>
        </div>
        <div className="contact-page-hiddden-border-box col-lg-1 ">
          <div className="contact-page-hiddden-border"></div>
        </div>
        <div className="contact-us-address-mainbox col-lg-3">
          <h3 className="contact-us-address-heading">Email</h3>
          <p className="contact-us-address-para">support@meynikara.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPageComp;
