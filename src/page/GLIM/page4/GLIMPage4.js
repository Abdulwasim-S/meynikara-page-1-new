import React from "react";
import "./GLIMPage4.css";

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
            <img src="col-2-icon" alt="icon" />
            <p className="col-2-para">
              <span className="col-2-bold">50%</span> reduction in worker's
              error rate
            </p>
          </div>
          <div className="col-6 gl-col-2-card text-black">
            <img className="col-2-icon" src="" alt="icon" />
            <p className="col-2-para">
              The ease of skill transition increased by{" "}
              <span className="col-2-bold">65%</span>
            </p>
          </div>
          <div className="col-6 gl-col-2-card text-black">
            <img className="col-2-icon" src="" alt="icon" />
            <p className="col-2-para">
              Training capex reduced by <span className="col-2-bold">75%</span>
            </p>
          </div>
          <div className="col-6 gl-col-2-card text-black">
            <img className="col-2-icon" src="" alt="icon" />
            <p className="col-2-para">
              Productivity increased by <span className="col-2-bold">20%</span>
            </p>
          </div>
        </div>
      </div>
      <div className="GLIMPage-4 py-4 px-3 text-black">
        <div className="row gp4-white">
          <div className="col-lg-3">
            <h3 className="dp4-h">
              Case <span className="text-senju">Studies</span>
            </h3>
          </div>
          <div className="col-lg-1">
            <span className="gp2-empty-span"></span>
          </div>
          <div className="col-lg-8">
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