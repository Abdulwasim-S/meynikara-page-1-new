import React from "react";
import "./EmailPage.css";
import lm from "./image/lm.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

const EmailPage = () => {
  return (
    <div className="email-page border">
      <form className="inp-form row">
        <h1 className="email-heading">
          Let's Work <span className="text-cyan">Together</span>
        </h1>
        <div className="inp-group col-md-4">
          <input
            type="email"
            className="page-inputs"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Email"
          />
        </div>
        <div className="inp-group col-md-4">
          <input
            type="name"
            className="page-inputs"
            placeholder="Name"
            id="exampleInputName1"
          />
        </div>
        <div className="inp-group col-md-4">
          <input
            type="text"
            className="page-inputs"
            placeholder="Mobile Number"
            id="exampleInputNumber1"
          />
        </div>
        <div className="email-btn w-50">
          <button disabled className="learn-more-butn bg-white">
            <LazyLoadImage
              effect="blur"
              className="butn-arrow1"
              src={lm}
              alt="arrow"
            />
            <span className="butn-text email-butn-text text-black">Submit</span>
            <LazyLoadImage
              effect="blur"
              className="butn-arrow submit-arrow"
              src={lm}
              alt="arrow"
            />
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmailPage;
