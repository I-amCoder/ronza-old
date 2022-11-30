import Carousel from "react-bootstrap/Carousel";

import React, { useEffect, useState } from "react";

const Hero = ({ images }) => {
  // const [images, setImages] = useState([]);
  // useEffect(() => {
  //   return () => {
  //     loadImages();
  //   };
  // }, []);

  // const loadImages = () => {
  //   console.log("fetching");
  //   fetch(
  //     "https://api.unsplash.com/photos/?client_id=B3eNrrOIeBFdr9pohQqaEPSXOYfuX-hacP2cNBcKY4s"
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setImages(data);
  //     });
  // };

  return (
    <Carousel fade>
      {images.map((image, index) => {
        const { urls } = image;

        return (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100 carousel-image"
              src={urls.regular}
              alt="First slide"
            />
            <Carousel.Caption>
              <div className="c-caption">
                <h3>This is {index}</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default Hero;
