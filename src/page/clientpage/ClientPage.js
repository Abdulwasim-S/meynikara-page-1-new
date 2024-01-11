import React from "react";
import "./ClientPage.css";
import c1 from "./image/c1.png";
import c2 from "./image/c2.png";
import c3 from "./image/c3.png";
import c4 from "./image/c4.png";
import c5 from "./image/c5.png";

import { LazyLoadImage } from "react-lazy-load-image-component";

const ClientPage = () => {
  return (
    <div className="client-page">
      <h1 className="client-page-heading">
        What Our <span className="text-cyan">Clients Say!</span>
      </h1>

      <div className="client-page-image-container-main">
        <div className="client-page-image-container2">
          <img className="client-page-image" src={c2} alt="c1-img" />
        </div>
        <div className="client-page-image-container3">
          <img className="client-page-image" src={c3} alt="c1-img" />
        </div>
        <div className="client-page-image-container1">
          <img className="client-page-image" src={c1} alt="c1-img" />
        </div>
        <div className="client-page-image-container4">
          <img className="client-page-image" src={c4} alt="c1-img" />
        </div>
        <div className="client-page-image-container5">
          <img className="client-page-image" src={c5} alt="c1-img" />
        </div>
      </div>
      <p className="client-page-para">
        Thank you Meynikara! Their team's expertise and dedication exceeded our
        expectations. From concept to execution, they demonstrated creativity,
        professionalism, and a true understanding of our needs.
      </p>
    </div>
  );
};

export default ClientPage;
