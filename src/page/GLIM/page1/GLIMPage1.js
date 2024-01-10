import React from "react";
import "../GLIM.css";
import "./GlimPage1.css";
import vr_logo from "./vr-headset.png";
import stop from "./stop.png";

const GLIMPage1 = () => {
  return (
    <div className="GlimPage1">
      <h1 className="gp1-heading">
        {/* <span>
          LET'S <span className=" text-danger stop-text">ST🚫P</span> INDUSTRY
          ACCIDENTS...
        </span>
        <span className="h1">
          <img className="vr-logo" src={vr_logo} alt="vr_logo" />
        </span> */}
        <img className="stop-img" src={stop} alt="stop" />
      </h1>
      <p className="gp1-para">
        Join us in eliminating industrial accidents with <br />
        <span className="text-senju">GLIM</span> and our A-based monitoring
        system, <span className="text-namikaze">SHIELD</span>.
        <br />
        Empower your workforce, strengthen safty <br />
        measures, and create a secure workplace together.
      </p>
    </div>
  );
};

export default GLIMPage1;
