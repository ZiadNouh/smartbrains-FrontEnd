import React from "react";
import Tilt from "react-parallax-tilt";
import "./Logo.css";
import brain from "./Images/icons8-brain-100.png";

const Logo = () => {
  return (
    <div>
      <Tilt className="Tilt br2 shadow-2">
        <div className="Tilt-inner pa4">
          <img style={{ paddingTop: "10px" }} src={brain} alt="logo"></img>
        </div>
      </Tilt>
    </div>
  );
};
export default Logo;
