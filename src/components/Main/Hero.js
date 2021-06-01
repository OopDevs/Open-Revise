import React from "react";
import hero from "../../assets/icon/board.svg";
import "./Hero.css";
function Hero() {
  return (
    <div className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1>
            Resources <br /> that help you with your study
          </h1>
          <h4>
            Documents shared by your fellow students, organized in one place
          </h4>
        </div>
        <div className="hero-img">
          <img src={hero} id="hero-img" alt="board" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
