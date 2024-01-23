import React from "react";
import "../GLIM.css";
import "./GlimPage1.css";
import stop from "./stop.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Box, Button } from "@chakra-ui/react";

const GLIMPage1 = () => {
  return (
    <div className="GlimPage1">
      <h1 className="gp1-heading">
        <LazyLoadImage
          effect="blur"
          className="stop-img"
          src={stop}
          alt="stop"
        />
      </h1>
      <p className="gp1-para">
        Join us in eliminating industrial accidents with{" "}
        <br className="hide-for-lg" />
        <span className="text-senju">GLIM</span> and our AI-based monitoring
        system, <span className="text-namikaze">SHIELD</span>.{" "}
        <br className="hide-for-lg" />
        Empower your workforce, strengthen safty <br className="hide-for-lg" />
        measures, and create a secure workplace together.
      </p>
      <Button colorScheme="dark" variant={"outline"} mb={"2vh"}>
        <a href="#contact-us">Request Access</a>
      </Button>
    </div>
  );
};

export default GLIMPage1;
