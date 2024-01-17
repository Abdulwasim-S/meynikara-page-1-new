import React from "react";
import hex from "./Hex.png";
import "./AgilePage.css";

const AgilePage = () => {
  return (
    <div className="AgilePage">
      <h1 className="fourth-page-text-heading">
        Our Development Approach
        <br />
        <span className="text-cyan">Agile Framework</span>
        <span className="vb-line"></span>
      </h1>
      <p className="fourth-page-text-normal">
        We have built a proprietary framework following agile methodology to
        ensure high quality and timely delivery
      </p>
      <div className="hex-img-container">
        <img className="hex-image" src={hex} alt="hex" />
      </div>
    </div>
  );
};

export default AgilePage;
