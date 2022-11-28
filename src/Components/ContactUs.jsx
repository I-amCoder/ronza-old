import React from "react";
import mailImage from "../assets/contact-mail.png";

const ContactUs = () => {
  return (
    <>
      <section className="contact-section my-5 py-5">
        <div className="container">
          <div className="card shadow">
            <div className="card-body">
              <div className="row text-center py-5">
                <div className="col-md-6 d-flex align-items-center justify-content-center">
                  <img
                    className="contact-image"
                    src={mailImage}
                    alt="contact-image"
                  />
                </div>
                <div className="col-md-4">
                  <h1>Get in touch</h1>
                  <div className="input-box text-center">
                    <input
                      className="form-control contact-input"
                      type="text"
                      placeholder="Name"
                    />
                    <input
                      className="form-control contact-input"
                      type="text"
                      placeholder="Email"
                    />
                    <input
                      className="form-control contact-input"
                      type="text"
                      placeholder="Subject"
                    />
                    <textarea
                      rows="6"
                      className="form-control contact-input"
                    ></textarea>
                    <span className="shadow-input"></span>
                    <button className="contact-btn mt-4 btn ">
                      Submit Email
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
