import React from "react";
import "./ImagePage.css";
import ci from "./image/ci.png";
import cd from "./image/cd.png";
import cu from "./image/cu.png";
import tl from "./image/tl.png";
import tli from "./image/tli.png";

const ImagePage = () => {
  return (
    <div className="image-page">
      <div className="main-container">
        <div className="center">
          <img className="ci" src={ci} alt="img" />
          <img className="cu" src={cu} alt="img" />
          <img className="cd" src={cd} alt="img" />
          <i className="cp fa-sharp fa-solid fa-play" />
        </div>
        {/* <div className="top">
          <div className="top-left">
            <img className="tli" src={tli} alt="img" />
            <img className="tl" src={tl} alt="img" />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ImagePage;
