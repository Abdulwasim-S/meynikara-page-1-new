import React, { useEffect } from "react";
import "./FirstPage.css";
import lm from "./image/lm.png";
import Img from "./image/Img2.png";
import play_btn from "./image/play.png";

const FirstPage = () => {
  const setFromPage = () => {
    localStorage["meynikara-from-page"] = "Home Page";
  };
  useEffect(() => {
    setFromPage();
  }, []);
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
            <img className="butn-arrow1" src={lm} alt="arrow" />
            <span className="butn-text">Learn More</span>
            <img className="butn-arrow" src={lm} alt="arrow" />
          </button>
        </div>
      </div>
      <div className="col-lg-5 image-container">
        <img className="play-icon" src={play_btn} alt="play"></img>
        <img className="play-image" src={Img} alt="img"></img>
      </div>
    </div>
  );
};

export default FirstPage;
