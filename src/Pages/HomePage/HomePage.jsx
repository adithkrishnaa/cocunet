import React, { useContext } from "react";
import Layout from "../../Component/Layout/Layout";
import HeroSection from "../../Component/HeroSection/HeroSection";
import Category from "../../Component/Category/Category";
import HomePageProductCard from "../../Component/HomepageProductCart/HomePageProductCard";
import Track from "../../Component/Track/Track";
import Testimonial from "../../Component/Testimonial/Testimonial";
import myContext from "../../Context/myContext";
import About from "../../Component/About/About";
import Service from "../../Component/Service/Service";

const HomePage = () => {
  return (
    <>
      <Layout>
        <HeroSection />
        <About />
        <Category />
        {/* <HomePageProductCard /> */}
        {/* <Track /> */}
        <Testimonial />
      </Layout>
    </>
  );
};

export default HomePage;
