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

const SHIELDPage6 = () => {
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
      <div className="">
        <p className=" m-0 gp6-card-box-inner-card-para text-center">
          The implementation of SHIELD ( AI-based monitoring ) yielded
          significant improvements in workplace safety.
        </p>
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
                Reduction in PPE
                <br />
                Violations
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
              Instances of improper PPE usage decreased by 30%, promoting a
              safer work environment and minimising the risk of accidents.
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
                Enhanced HA
                <br />
                Security
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
              Unauthorised entries into restricted zones were virtually
              eliminated, preventing potential accidents and ensuring compliance
              with safety regulations.
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
                Employee
                <br />
                Feedback
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
              Employees responded positively to the new safety measures,
              acknowledging the importance of a secure and healthy working
              environment. The integration of VR and AI monitoring was seen as a
              proactive step towards prioritising their well-being.
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
    </div>
  );
};

export default SHIELDPage6;
