import React from "react";
import "./GLIMPage2.css";

const SHIELDPage2 = () => {
  return (
    <div className="gp2">
      <div className="gp2-ques-container row">
        <div className="gp2-ques col-lg-3">
          What is <br className="lg-remove" />
          <span className="text-senju  text-senju text-glim-2">SHIELD?</span>
        </div>
        <div className="gp2-empty col-lg-1">
          <span className="gp2-empty-span"></span>
        </div>
        <div className="col-lg-8">
          <br className="show-small" />
          <p className="gp2-ans shield-p2-ans">
            <span className="change-namikaze  bold-500">
              S.H.I.E.L.D.-Safety and Health Integrated Ecosystem for
              Enterprises using Learning and Detection tools
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SHIELDPage2;
