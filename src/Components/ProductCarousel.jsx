import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import image from "../assets/logo.jpg";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const ProductCarousel = () => {
  return (
    <>
      <section className="carousel-section my-5">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-lg-4 text-center">
              <img className="logo-image shadow " src={image} alt="logo" />
              <p className="mt-2 fw-bold ">
                Slogun line Lorem, ipsum dolor. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Error, laboriosam.
              </p>
              <p className="my-4 h5 fw-bold underline">
                Checkout Our latest products here
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <Carousel responsive={responsive}>
                <div className="card shadow carousel-card m-3 ">
                  <img
                    className="card-img-top"
                    src="https://loremflickr.com/320/240"
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title text-center">Card title</h5>
                  </div>
                </div>
                <div className="card shadow carousel-card m-3">
                  <img
                    className="card-img-top"
                    src="https://loremflickr.com/320/240"
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title text-center">Card title</h5>
                    {/* <a className="btn btn-primary">Go somewhere</a> */}
                  </div>
                </div>
                <div className="card shadow carousel-card m-3">
                  <img
                    className="card-img-top"
                    src="https://loremflickr.com/320/240"
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title text-center">Card title</h5>
                    {/* <a className="btn btn-primary">Go somewhere</a> */}
                  </div>
                </div>
                <div className="card shadow carousel-card m-3">
                  <img
                    className="card-img-top"
                    src="https://loremflickr.com/320/240"
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title text-center">Card title</h5>
                    {/* <a className="btn btn-primary">Go somewhere</a> */}
                  </div>
                </div>
                <div className="card shadow carousel-card m-3">
                  <img
                    className="card-img-top"
                    src="https://loremflickr.com/320/240"
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title text-center">Card title</h5>
                    {/* <a className="btn btn-primary">Go somewhere</a> */}
                  </div>
                </div>
                <div className="card shadow carousel-card m-3">
                  <img
                    className="card-img-top"
                    src="https://loremflickr.com/320/240"
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title text-center">Card title</h5>
                    {/* <a className="btn btn-primary">Go somewhere</a> */}
                  </div>
                </div>
                <div className="card shadow carousel-card m-3">
                  <img
                    className="card-img-top"
                    src="https://loremflickr.com/320/240"
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title text-center">Card title</h5>
                    {/* <a className="btn btn-primary">Go somewhere</a> */}
                  </div>
                </div>
                <div className="card shadow carousel-card m-3">
                  <img
                    className="card-img-top"
                    src="https://loremflickr.com/320/240"
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title text-center">Card title</h5>
                    {/* <a className="btn btn-primary">Go somewhere</a> */}
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductCarousel;
