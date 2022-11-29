import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
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

const ProductCarousel = ({ images }) => {
  return (
    <>
      <section className="carousel-section my-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 text-center">
              {/* <img className="logo-image shadow " src={image} alt="logo" />
              <p className="mt-2 fw-bold ">
                Slogun line Lorem, ipsum dolor. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Error, laboriosam.
              </p> */}
              <p className="my-4 h5 fw-bold underline">
                Checkout Our latest products here
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <Carousel
                autoPlay
                autoPlaySpeed={3000}
                showDots
                removeArrowOnDeviceType={["tablet", "mobile"]}
                infinite
                responsive={responsive}
              >
                {images.map((image, index) => {
                  return (
                    <div key={index} className="card p-3  carousel-card m-3 ">
                      <img
                        className="card-img-top shadow"
                        src={image.urls.small}
                        alt="Card image cap"
                      />
                      <div className="card-body text-center">
                        <h5 className="card-title mt-3">
                          {image.description || "Product Title"}
                        </h5>
                        <p className="fw-bold">$10.00</p>
                      </div>
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </div>
        </div>
      </section>
      <section className="featured-products my-5">
        <h1 className="text-center my-4">Featured Products</h1>
        <div className="container">
          <div className="row  text-center justify-content-center">
            {images.slice(3, 6).map((image, index) => {
              return (
                <div key={index} className="col-md-4">
                  <div className="card feature-product-card">
                    <img
                      className="card-img"
                      src={image.urls.small}
                      alt="Bologna"
                    />
                    <div className="card-img-overlay text-white d-flex flex-column justify-content-center">
                      <h1 className="card-title">
                        {image.description || "no description"}
                      </h1>
                      <h6 className="card-subtitle mb-2">
                        Emilia-Romagna Region, Italy
                      </h6>
                      <div className="text-center">
                        <a href="#" className="btn btn-warning ">
                          Buy Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductCarousel;
