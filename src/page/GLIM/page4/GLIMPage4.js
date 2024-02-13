import React from "react";
import "./GLIMPage4.css";
import a from "./icons/1.png";
import b from "./icons/2.png";
import c from "./icons/3.png";
import d from "./icons/4.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

const GLIMPage4 = () => {
  return (
    <div className="GLIMPage-4 text-white">
      <div className="bg-meynikara gp-4 row">
        <div className="gl-col-1 col-lg-6">
          <h3 className="glh-4">Benefits of GLIM:</h3>
          <p className="glp-4">
            Below are the few metrics which we measured during our
            implementation at our client's workplaces
          </p>
          <div className="gll-4">
            <span className="gl1 bg-senju"></span>
            <span className="gl2 bg-namikaze"></span>
          </div>
        </div>
        <div className="gl-col-2 col-lg-6 row">
          <div className="col-6 gl-col-2-card text-black">
            <LazyLoadImage
              effect="blur"
              className="col-2-icon"
              src={a}
              alt="icon"
            />
            <p className="col-2-para">
              <span className="col-2-bold">50%</span> reduction in worker's
              error rate
            </p>
          </div>
          <div className="col-6 gl-col-2-card text-black">
            <LazyLoadImage
              effect="blur"
              className="col-2-icon"
              src={b}
              alt="icon"
            />
            <p className="col-2-para">
              The ease of skill transition increased by{" "}
              <span className="col-2-bold">65%</span>
            </p>
          </div>
          <div className="col-6 gl-col-2-card text-black">
            <LazyLoadImage
              effect="blur"
              className="col-2-icon"
              src={c}
              alt="icon"
            />
            <p className="col-2-para">
              Training capex reduced by <span className="col-2-bold">75%</span>
            </p>
          </div>
          <div className="col-6 gl-col-2-card text-black">
            <LazyLoadImage
              effect="blur"
              className="col-2-icon"
              src={d}
              alt="icon"
            />
            <p className="col-2-para">
              Productivity increased by <span className="col-2-bold">20%</span>
            </p>
          </div>
        </div>
      </div>
      <div className="GLIMPage-4 py-4 px-3 text-black">
        <div className="case-study row gp4-white">
          <div className="col-lg-4 ">
            <h3 className="dp4-h">
              Case{" "}
              <span className="text-senju">
                <span className="opacity-0 h6">.</span> Study
              </span>
            </h3>
          </div>
          <div className="col-lg-1">
            <span className="gp2-empty-span"></span>
          </div>
          <div className="col-lg-7">
            <p className="gpl4-p2">
              Transforming Safety Training with GLIM at one of the biggest Oil &
              Gas company
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GLIMPage4;
