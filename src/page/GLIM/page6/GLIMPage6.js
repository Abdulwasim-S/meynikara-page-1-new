import React from "react";
import "./GLIMPage6.css";

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
        <div className="col-6">
          <img
            className="gp6-img"
            src=""
            height={"30vh"}
            width={"100%"}
            alt="img"
          />
        </div>
        <div className="col-6">
          <div className="gp6-card-box-inner-card row">
            <div className="col-4">
              <p className="gp6-card-box-inner-card-number text-end">01</p>
            </div>
            <div className=" col-8">
              <h3 className="gp6-card-box-inner-card-heading">
                ENGAGING
                <br />
                TRAINING
              </h3>
              <div className="round-box justify-content-start">
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
      </div>
    </div>
  );
};

export default GLIMPage6;
