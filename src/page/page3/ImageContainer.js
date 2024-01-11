import React from "react";
import "./ImageContainer.css";
import test from "./image/test.png";

const ImageContainer = () => {
  return (
    <div className="service-image-container">
      <div className="img-card-h1">
        <div className="r1">
          <img className="img1" src={test} alt="img" />
        </div>
        <div className="r2">
          <img className="img2" src={test} alt="img" />
        </div>
        <div className="r3">
          <img className="img3" src={test} alt="img" />
        </div>
        <div className="r4">
          <img className="img4" src={test} alt="img" />
        </div>
        <div className="r5">
          <img className="img5" src={test} alt="img" />
        </div>
        <div className="r6">
          <img className="img6" src={test} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default ImageContainer;
