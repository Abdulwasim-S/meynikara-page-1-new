import React from "react";
import "./GLIMPage6.css";
import a from "./image1.png";
import b from "./image2.png";
import c from "./image3.png";
import d from "./image4.png";
import c1 from "./c1.png";
import c2 from "./c2.png";
import c3 from "./c3.png";
import c4 from "./c4.png";

const GLIMPage6 = () => {
  return (
    <div className="GLIMPage6">
      <div className="gp6-h-box">
        <h1 className="gp6-h text-center">
          Results
          <span className="gp6-underline-box">
            <span className="gp6-underline bg-namikaze"></span>
            <span className="gp6-underline bg-senju"></span>
          </span>
        </h1>
      </div>
      <div className="gp6-card-box row">
        <div className="col-7 gp6-card-content">
          <div className="gp6-card-box-inner-card row">
            <div className="col-4">
              <p className="gp6-card-box-inner-card-number text-end">
                <img src={c1} alt="c1" />
              </p>
            </div>
            <div className="gp6-main col-8">
              <h3 className="gp6-card-box-inner-card-heading">
                ENGAGING
                <br />
                TRAINING
              </h3>
              <div className="gp6-round round-box justify-content-start">
                <div className="m-r bg-namikaze">
                  <p className="m-i"></p>
                </div>
                <div className="m-r bg-senju hidden">
                  <p className="m-i"></p>
                </div>
                <div className="m-r bg-senju">
                  <p className="m-i"></p>
                </div>
              </div>
            </div>
            <div className="gp6-card-box-inner-card-para col-12 p-5">
              GLIM's gamified approach made safety training more engaging and
              interactive. Employees could practise tasks in a virtual
              environment, enhancing their understanding of SOPs and safety
              protocols
            </div>
          </div>
        </div>
        <div className="col-5 gp6-card-image">
          <img
            className="gp6-img"
            src={a}
            height={"30vh"}
            width={"100%"}
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};

export default GLIMPage6;
