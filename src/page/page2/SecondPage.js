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
          <div className="border-hover-rotate">
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
          <div className="border-hover-rotate">
            <div className="page-border"></div>
            <div className="page-card">
              <img className="card-image" src={vr} alt="img" />
              <p className="para-heading"> AI + XR</p>
              <p className="para-text">
                Building intelligence
                <br /> into your XR applications to achieve business objectives
              </p>
            </div>
          </div>
        </div>
        <div className="card-box">
          <div className="border-hover-rotate">
            <div className="page-border"></div>
            <div className="page-card">
              <img className="card-image" src={compute} alt="img" />
              <p className="para-heading"> Spatial computing</p>
              <p className="para-text">
                Leveraging spatial
                <br /> computing to build XR applications
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondPage;
