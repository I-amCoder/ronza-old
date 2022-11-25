import React from "react";

import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const SocialSection = () => {
  return (
    <section className="social-section container my-5">
      <div className="row">
        <div className="col-12">
          <div className="text-center">
            <h2 className="logo-text underline ">RONZA</h2>
          </div>
          <div className="icon-row mt-4 text-center">
            <h4>FOLLOW US ON</h4>
            <a
              className="facebook"
              target={"_blank"}
              href="//facebook.com/hacker.jhalla"
            >
              <FaFacebook />
            </a>
            <a className="youtube" target={"_blank"} href="#">
              <FaYoutube />
            </a>
            <a className="instagram" target={"_blank"} href="#">
              <FaInstagram />
            </a>
            <a className="twitter" target={"_blank"} href="#">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
