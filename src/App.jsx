import React, { useEffect, useState } from "react";
import AppNav from "./Components/AppNav";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import KeyFeatures from "./Components/KeyFeatures";
import ProductCarousel from "./Components/ProductCarousel";
import SingleProduct from "./Components/SingleProduct";
import SocialSection from "./Components/SocialSection";

const App = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    return () => {
      loadImages();
    };
  }, []);

  const loadImages = () => {
    console.log("fetching");
    fetch(
      "https://api.unsplash.com/search/photos?page=1&query=product&client_id=B3eNrrOIeBFdr9pohQqaEPSXOYfuX-hacP2cNBcKY4s"
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.results);
      });
  };
  return (
    <>
      <div className="header">
        <AppNav></AppNav>
        <Hero images={images}></Hero>
      </div>
      <ProductCarousel images={images}></ProductCarousel>
      <KeyFeatures></KeyFeatures>
      <SingleProduct></SingleProduct>
      <ContactUs />
      <SocialSection></SocialSection>
      <Footer />
    </>
  );
};

export default App;
