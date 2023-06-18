import React from "react";
import pic1 from "../assets/pic1 (2).jpg";

const Hero = () => {
  return (
    <div id="hero">
      <img
        className="w-full h-screen object-cover"
        src={pic1}
        alt="background image"
      />
    </div>
  );
};

export default Hero;
