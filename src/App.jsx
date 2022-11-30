import React, { useEffect, useState } from "react";
import AppNav from "./Components/AppNav";
import FeaturedProducts from "./Components/FeaturedProducts";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import ProductCarousel from "./Components/ProductCarousel";
import SocialSection from "./Components/SocialSection";
import data from "./assets/data.json";
import ContactUs from "./Components/ContactUs";
const App = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    return () => {
      loadImages();
    };
  }, []);

  const loadImages = () => {
    // alert("fetching");
    // console.log("fetching");
    // fetch(data)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setImages(data.results);
    //   });
    setImages(data.results);
  };
  return (
    <>
      <div className="header">
        <AppNav></AppNav>
        <Hero images={images}></Hero>
      </div>
      <ProductCarousel
        images={images}
        title={"Latest Products"}
      ></ProductCarousel>
      <FeaturedProducts images={images} />
      <ProductCarousel
        images={images.slice(2, 7)}
        title={"Limited Sale"}
      ></ProductCarousel>
      <ContactUs />
      <SocialSection></SocialSection>
      <Footer />
    </>
  );
};

export default App;
