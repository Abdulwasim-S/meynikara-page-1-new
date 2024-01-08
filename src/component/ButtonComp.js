import React from "react";
import { NavLink } from "react-bootstrap";

const ButtonComp = () => {
  return (
    <>
      <NavLink className="up-butn text-center" href="#home">
        <i class="fa-sharp fa-solid fa-arrow-right"></i>
      </NavLink>
      <NavLink className="down-butn text-center" href="#footer">
        <i class="fa-sharp fa-solid fa-arrow-right"></i>
      </NavLink>
    </>
  );
};

export default ButtonComp;
