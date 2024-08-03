import React from "react";
import header from "../Images/header.svg";
import Numbers from "../Images/Numers.svg";

const HeaderComponent = () => {
  return (
    <div>
      <div className="bg-color px-5 d-flex justify-content-center position-relative">
        <img src={header} alt="header" className="img-fluid" />
      </div>
      <div className="pt-2 Number">
        <img src={Numbers} alt="Number" className="img-fluid" />
      </div>
    </div>
  );
};

export default HeaderComponent;
