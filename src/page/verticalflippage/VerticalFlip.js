import React from "react";
import "./VerticalFlip.css";
import a from "./image/a.png";
import b from "./image/b.png";
import c from "./image/c.png";
import d from "./image/d.png";
import e from "./image/e.png";
import f from "./image/f.png";

const VerticalFlip = () => {
  return (
    <div className="vertical-flip-page text-white">
      <div className="vf-container row justify-content-evenly">
        <div className="vf-card col-lg-3 col-md-4 col-sm-12">
          <div className="vf-content">
            <img className="vf-icon" src={a} alt="a-img" />
            <h5 className="vf-heading">240</h5>
            <p className="vf-para"> Projects Delivered</p>
          </div>
          <div className="vf-border"></div>
        </div>
        <div className="vf-card col-lg-3 col-md-4 col-12">
          <div className="vf-content">
            <img className="vf-icon" src={b} alt="a-img" />
            <h5 className="vf-heading">40</h5>
            <p className="vf-para"> Clients Made Happy</p>
          </div>
          <div className="vf-border"></div>
        </div>
        <div className="vf-card col-lg-3 col-md-4 col-12">
          <div className="vf-content">
            <img className="vf-icon" src={c} alt="a-img" />
            <h5 className="vf-heading">7</h5>
            <p className="vf-para"> Countries Catered</p>
          </div>
          <div className="vf-border"></div>
        </div>
        <div className="vf-card col-lg-3 col-md-4 col-12">
          <div className="vf-content">
            <img className="vf-icon" src={d} alt="a-img" />
            <h5 className="vf-heading">10</h5>
            <p className="vf-para">
              {" "}
              Years in VR ,<br /> AR Metaverse &<br /> S/W Development
            </p>
          </div>
          <div className="vf-border"></div>
        </div>
        <div className="vf-card col-lg-3 col-md-4 col-12">
          <div className="vf-content">
            <img className="vf-icon" src={e} alt="a-img" />
            <h5 className="vf-heading">6</h5>
            <p className="vf-para"> Modules Developed Across Industries</p>
          </div>
          <div className="vf-border"></div>
        </div>
        <div className="vf-card col-lg-3 col-md-4 col-12">
          <div className="vf-content">
            <img className="vf-icon" src={f} alt="a-img" />
            <h5 className="vf-heading">10</h5>
            <p className="vf-para">
              {" "}
              Industries Catered Including Government Organisations
            </p>
          </div>
          <div className="vf-border"></div>
        </div>
      </div>
    </div>
  );
};

export default VerticalFlip;
