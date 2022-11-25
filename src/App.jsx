import React from "react";
import AppNav from "./Components/AppNav";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import KeyFeatures from "./Components/KeyFeatures";
import ProductCarousel from "./Components/ProductCarousel";
import SingleProduct from "./Components/SingleProduct";
import SocialSection from "./Components/SocialSection";

const App = () => {
  return (
    <>
      <div className="header">
        <AppNav></AppNav>
        <Hero></Hero>
      </div>
      <KeyFeatures></KeyFeatures>
      <SingleProduct></SingleProduct>
      <ProductCarousel></ProductCarousel>
      <SocialSection></SocialSection>
      <Footer />
    </>
  );
};

export default App;
