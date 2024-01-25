import React from "react";
import "./ContactPage.css";
import { Box, Heading, Link } from "@chakra-ui/react";

const ContactPageComp = () => {
  return (
    <div className="contact-page bg-meynikara">
      <Heading
        className="contact-page-main"
        textAlign={"center"}
        fontWeight={{ base: "700" }}
        fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
        pb={"2vh"}
      >
        We build Data-Driven, Customer Centric XR applications to achieve your
        business objectives
      </Heading>
      <Heading
        m={{ base: "3vh 4vw" }}
        fontSize={{ base: "lg", md: "xl", lg: "3xl" }}
        color={"white"}
      >
        Contact Us
      </Heading>
      <div className="contact-us-address text-white row">
        <div className="contact-us-address-mainbox col-lg-4">
          {/* <h3 className="contact-us-address-heading">Address 1</h3> */}
          <p className="contact-us-address-para">
            WOCO SPACES, 4/222, East Coast Rd, Palavakkam, Chennai, Tamil Nadu
            600041, <br />
            Phone :{" "}
            <Link href="tel:+917305500448" target="_blank">
              +91 73055 00448
            </Link>
          </p>
        </div>
        <div className="contact-page-hiddden-border-box col-lg-1 ">
          <div className="contact-page-hiddden-border"></div>
        </div>
        <div className="contact-us-address-mainbox col-lg-3">
          {/* <Box display={{ base: "none", lg: "block" }}>
          <h3 className="contact-us-address-heading">
            Address 2
            <br />
          </h3>
          </Box> */}
          <p className="contact-us-address-para">
            110-104 Crockford Blvd, Toronto, ON,M1R 3C3. <br />
            Phone :{" "}
            <Link href="tel:+16475736558" target="_blank">
              +1 (647) 573-6558
            </Link>
          </p>
        </div>
        <div className="contact-page-hiddden-border-box col-lg-1 ">
          <div className="contact-page-hiddden-border"></div>
        </div>
        <div className="contact-us-address-mainbox col-lg-3">
          {/* <h3 className="contact-us-address-heading">Email</h3> */}
          <p className="contact-us-address-para">
            <Link href="mailto:support@meynikara.com" target="_blank">
              support@meynikara.com
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPageComp;
