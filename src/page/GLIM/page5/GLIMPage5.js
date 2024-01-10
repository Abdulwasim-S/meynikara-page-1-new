import React from "react";
import "./GLIMPage5.css";

const GLIMPage5 = () => {
  return (
    <div className="GLIMPage5">
      <div className="gmc">
        <div className="gmc-1">
          <p className="g5-h bg-senju">CHALLENGE</p>
          <p className="g5-p">
            The Company faced challenges in providing effective safety &
            operational training to its workforce, leading to concerns about
            industrial accidents.
            <br />
            <br />
            Traditional training methods were not engaging enough and the
            workers weren't motivated to undergo the training which resulted in
            poor turn-around ratio, and the company sought a solution to enhance
            the learning experience.
          </p>
        </div>
        <p className="g5-c"></p>
        <div className="gmc-2">
          <p className="g5-h bg-namikaze">SOLUTION</p>
          <p className="g5-p">
            The Company implemented GLIM (Gamified Learning & Immersive
            Methodology) to revamp its training approach.
            <br />
            <br />
            GLIM offered realistic simulations of Standard Operating Procedures
            (SOPs) in a safe and controlled digital environment. Workers could
            access these simulations across multiple devices, including web
            browsers, mobile, and VR.
          </p>
        </div>
        <div className="video-frame ">
          <div className="gp5-video bg-meynikara"></div>
        </div>
        <div className="round-box py-3">
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
    </div>
  );
};

export default GLIMPage5;
