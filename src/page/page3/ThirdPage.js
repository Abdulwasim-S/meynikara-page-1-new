import React from "react";
import "./ThirdPage.css";
import ImageContainer from "./ImageContainer";

const ThirdPage = () => {
  return (
    <div className="third-page">
      <h1 className="text-heading">
        Our <span className="text-cyan">Services</span>
      </h1>
      <p className="text-normal">
        XR can improve worker training by simulating complex processes,
        increasing safety, and reducing the risk of errors. XR can also assist
        in product design and prototyping, enhancing collaboration, and reducing
        development time. Additionally, XR can provide remote support, enabling
        experts to assist on-site technicians in real-time, improving
        efficiency, and reducing downtime.
      </p>
      <div className="image-container">
        <ImageContainer />
      </div>
    </div>
  );
};

export default ThirdPage;
