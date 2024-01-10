import React from "react";
import "./GLIMPage2.css";

const GLIMPage2 = () => {
  return (
    <div className="gp2">
      <div className="gp2-ques-container row">
        <div className="gp2-ques col-lg-3">
          What is <br className="lg-remove" />
          <span className="text-senju  text-senju text-glim-2">GLIM?</span>
        </div>
        <div className="gp2-empty col-lg-1">
          <span className="gp2-empty-span"></span>
        </div>
        <div className="col-lg-8">
          <br className="show-small" />
          <p className="gp2-ans ">
            <span>
              GLIM{" "}
              <span className="change-namikaze  bold-500">
                {"(GAMIFIED LEARNING & IMMERSIVE METHODOLOGY)"}
              </span>{" "}
              enhances Safety & Operational training by using realistic
              simulations.
              <br />
              <br />
              Workers can practice tasks in a safe, controlled environment
              through digital twins of their industry. The simulations are
              accessible on various device like web browsers, mobile and VR.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default GLIMPage2;
