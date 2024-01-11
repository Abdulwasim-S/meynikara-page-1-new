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
import { LazyLoadImage } from "react-lazy-load-image-component";

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
        <div className="col-70 gp6-card-content">
          <div className="gp6-card-box-inner-card row">
            <div className="col-4">
              <p className="gp6-card-box-inner-card-number text-end">
                <LazyLoadImage
                  effect="blur"
                  className="count-image"
                  src={c1}
                  alt="c1"
                />
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
            <div className="gp6-card-box-inner-card-para col-12">
              GLIM's gamified approach made safety training more engaging and
              interactive. Employees could practise tasks in a virtual
              environment, enhancing their understanding of SOPs and safety
              protocols
            </div>
          </div>
        </div>
        <div className="col-50 gp6-card-image ">
          <LazyLoadImage
            effect="blur"
            className="gp6-img"
            src={a}
            height={"30vh"}
            width={"100%"}
            alt="img"
          />
        </div>
      </div>
      <div className="gp6-card-box row change-position">
        <div className="col-70 gp6-card-content">
          <div className="gp6-card-box-inner-card row">
            <div className="col-4">
              <p className="gp6-card-box-inner-card-number text-end">
                <LazyLoadImage
                  effect="blur"
                  className="count-image"
                  src={c2}
                  alt="c2"
                />
              </p>
            </div>
            <div className="gp6-main col-8">
              <h3 className="gp6-card-box-inner-card-heading">
                REALISTIC
                <br />
                SIMULATIONS
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
            <div className="gp6-card-box-inner-card-para col-12">
              Digital twins of the industry allowed for realistic simulations,
              providing workers with hands-on experience without the associated
              risks. This contributed to better retention of information and
              improved application of safety measures on the job. This improved
              the productivity of upto 10%
            </div>
          </div>
        </div>
        <div className="col-50 gp6-card-image">
          <LazyLoadImage
            effect="blur"
            className="gp6-img"
            src={b}
            height={"30vh"}
            width={"100%"}
            alt="img"
          />
        </div>
      </div>
      <div className="gp6-card-box row">
        <div className="col-70 gp6-card-content">
          <div className="gp6-card-box-inner-card row">
            <div className="col-4">
              <p className="gp6-card-box-inner-card-number text-end">
                <LazyLoadImage
                  effect="blur"
                  className="count-image"
                  src={c3}
                  alt="c3"
                />
              </p>
            </div>
            <div className="gp6-main col-8">
              <h3 className="gp6-card-box-inner-card-heading">
                FLEXIBLE
                <br />
                ACCESSIBILITY
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
            <div className="gp6-card-box-inner-card-para col-12">
              GLIM's compatibility with various devices, including web browsers,
              mobile, and VR, provided flexibility in accessing training
              materials. This ensured that employees could undergo training at
              their convenience, leading to increased participation.We were able
              to achieve 100% course participation rate
            </div>
          </div>
        </div>
        <div className="col-50 gp6-card-image change-position">
          <LazyLoadImage
            effect="blur"
            className="gp6-img"
            src={c}
            height={"30vh"}
            width={"100%"}
            alt="img"
          />
        </div>
      </div>
      <div className="gp6-card-box row">
        <div className="col-70 gp6-card-content">
          <div className="gp6-card-box-inner-card row">
            <div className="col-4">
              <p className="gp6-card-box-inner-card-number text-end">
                <LazyLoadImage
                  effect="blur"
                  className="count-image"
                  src={c4}
                  alt="c4"
                />
              </p>
            </div>
            <div className="gp6-main col-8">
              <h3 className="gp6-card-box-inner-card-heading">
                IMPROVED SAFETY
                <br />
                COMPLIANCE
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
            <div className="gp6-card-box-inner-card-para col-12">
              Digital twins of the industry allowed for realistic simulations,
              providing workers with hands-on experience without the associated
              risks. This contributed to better retention of information and
              improved application of safety measures on the job. This improved
              the productivity of upto 10%
            </div>
          </div>
        </div>
        <div className="col-50 gp6-card-image">
          <LazyLoadImage
            effect="blur"
            className="gp6-img"
            src={d}
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
