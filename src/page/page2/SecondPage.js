import React from "react";
import "./SecondPage.css";
import unity from "./images/unity.png";
import compute from "./images/compute.png";
import vr from "./images/vr.png";

const SecondPage = () => {
  return (
    <div className="second-page">
      <div className="main-box">
        <div className="card-box ">
          <div className="border-rotate">
            <div className="page-border"></div>
            <div className="page-card">
              <img className="card-image" src={unity} alt="img" />
              <p className="para-heading"> XR</p>
              <p className="para-text">
                Building end-to-end turnkey, immersive applications using AR,VR
                & MR
              </p>
            </div>
          </div>
        </div>
        <div className="card-box">
          <div className="border-rotate">
            <div className="page-border"></div>
            <div className="page-card">
              <img className="card-image" src={vr} alt="img" />
              <p className="para-heading"> XR</p>
              <p className="para-text">
                Building end-to-end turnkey, immersive applications using AR,VR
                & MR
              </p>
            </div>
          </div>
        </div>
        <div className="card-box">
          <div className="border-rotate">
            <div className="page-border"></div>
            <div className="page-card">
              <img className="card-image" src={compute} alt="img" />
              <p className="para-heading"> XR</p>
              <p className="para-text">
                Building end-to-end turnkey, immersive applications using AR,VR
                & MR
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondPage;
