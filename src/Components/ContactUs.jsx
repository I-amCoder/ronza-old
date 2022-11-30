import React from "react";
import mailImage from "../assets/contact-mail.png";
import image from "../assets/jun.jpg";
const ContactUs = () => {
  return (
    <>
      <div className="contact-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 image-col">
              <img className="contact-image" src={image} alt="Contact-image" />
            </div>
            <div className="col-md-4 ">
              <div className="form-group my-5">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control contact-input"
                  placeholder="Enter your name"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
