import React from "react";
import "./FourthPage.css";

const FourthPage = () => {
  return (
    <div className="fourth-page">
      <h1 className="fourth-page-text-heading">
        Our <span className="text-cyan">Products</span>
        <span className="vb-line"></span>
      </h1>
      <p className="fourth-page-text-normal">
        At Meynikara, we have developed a curated list of products that
        addresses pressing business problems that could be solved by leveraging
        XR technologies.
      </p>

      <div className="arrow-container row">
        <div className="arrow-box col-lg-3 col-md-4 col-sm-6">
          <p className="arrow-text  fw-bold">
            ARRA
            <span className="px-2" />
            <i className="text-arrow fa-solid fa-arrow-right"></i>
          </p>
          <p className="hidden-text">5min read</p>
        </div>
        <div className="arrow-box col-lg-3 col-md-4 col-sm-6">
          <p className="arrow-text  fw-bold">
            Qualisence
            <span className="px-2" />
            <i className="text-arrow fa-solid fa-arrow-right"></i>
          </p>
          <p className="hidden-text">3min read</p>
        </div>
        <div className="arrow-box col-lg-3 col-md-4 col-sm-6">
          <p className="arrow-text  fw-bold">
            VIRTaaS
            <span className="px-2" />
            <i className="text-arrow fa-solid fa-arrow-right"></i>
          </p>
          <p className="hidden-text">7min read</p>
        </div>
        <div className="arrow-box col-lg-3 col-md-4 col-sm-6">
          <p className="arrow-text  bpd fw-bold">
            Bespoke product
            <br /> developement
            <span className="px-2" />
            <i className="text-arrow fa-solid fa-arrow-right"></i>
          </p>
          <p className="hidden-text">3min read</p>
        </div>
        <div className="arrow-box col-lg-3 col-md-4 col-sm-6">
          <p className="arrow-text  fw-bold">
            SHIELD
            <span className="px-2" />
            <i className="text-arrow fa-solid fa-arrow-right"></i>
          </p>
          <p className="hidden-text">2min read</p>
        </div>
        <div className="arrow-box col-lg-3 col-md-4 col-sm-6">
          <p className="arrow-text  fw-bold">
            Metakalvi
            <span className="px-2" />
            <i className="text-arrow fa-solid fa-arrow-right"></i>
          </p>
          <p className="hidden-text">2min read</p>
        </div>
        <div className="arrow-box col-lg-3 col-md-4 col-sm-6">
          <p className="arrow-text  fw-bold">
            ARmaze
            <span className="px-2" />
            <i className="text-arrow fa-solid fa-arrow-right"></i>
          </p>
          <p className="hidden-text">5min read</p>
        </div>
      </div>
    </div>
  );
};

export default FourthPage;
