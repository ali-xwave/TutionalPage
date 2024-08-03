import React from "react";
import header from "../Images/header.svg";
import Numbers from "../Images/Numers.svg";
import useAosInit from "./UseAosInit";

const HeaderComponent = () => {
  useAosInit();
  return (
    <div>
      <div className="bg-color px-5 d-flex justify-content-center position-relative" data-aos="fade-down">
        <img src={header} alt="header" className="img-fluid" />
      </div>
      <div className="pt-2 Number" data-aos="fade-right">
        <img src={Numbers} alt="Number" className="img-fluid" />
      </div>
    </div>
  );
};

export default HeaderComponent;
