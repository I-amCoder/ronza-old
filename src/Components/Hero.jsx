import React from "react";

const Hero = () => {
  return (
    <div className="container-fluid section-hero">
      <div className="row justify-content-center">
        <div className="col-6 text-center hero-section">
          <h1 className="hero-text ">
            Lorem ipsum dolor sit amet, consectetur adipisicing. Lorem sit.
          </h1>
        </div>
        <div className="col-12 text-center">
          <button className="hero-btn shadow btn btn-primary  mt-4">
            Check out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
