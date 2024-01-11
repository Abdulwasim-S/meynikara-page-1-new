import React from "react";
import "./FirstPage.css";
import lm from "./image/lm.png";
import Img from "./image/Img2.png";
import play_btn from "./image/play.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

const FirstPage = () => {
  return (
    <div className="first-page row">
      <div className="col-lg-7">
        <p className="text-container">
          We build{" "}
          <span className="text-cyan">
            Data-Driven, Customer Centric XR Applications
          </span>{" "}
          to achieve your business objectives
        </p>
        <p className="text-container-normal">
          We take a consultative approach to all our clients requirement and
          carefully curate our products and solutions to fit the their business
          objectives.
        </p>
        <div className="butn-box">
          <button className="learn-more-butn">
            <LazyLoadImage
              effect="blur"
              className="butn-arrow1"
              src={lm}
              alt="arrow"
            />
            <span className="butn-text">Learn More</span>
            <LazyLoadImage
              effect="blur"
              className="butn-arrow"
              src={lm}
              alt="arrow"
            />
          </button>
        </div>
      </div>
      <div className="col-lg-5 image-container">
        <LazyLoadImage
          effect="blur"
          className="play-icon"
          src={play_btn}
          alt="play"
        ></LazyLoadImage>
        <LazyLoadImage
          effect="blur"
          className="play-image"
          src={Img}
          alt="img"
        ></LazyLoadImage>
      </div>
    </div>
  );
};

export default FirstPage;
