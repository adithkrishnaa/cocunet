import React, { useState, useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";
import ContactForm from "../ContactForm/ContactForm";

// Import local images
import image1 from "../../assets/image/header1.png";


const images = [image1, ];

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isContactFormVisible, setIsContactFormVisible] = useState(false);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setIsVisible(false);
  //     setTimeout(() => {
  //       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  //       setIsVisible(true);
  //     }, 100); // Transition duration
  //   }, 3000); // Image display duration

  //   return () => clearInterval(interval);
  // }, []);

  const textColor = [1, 2].includes(currentImageIndex)
    ? "text-white"
    : "text-[#3d3b3b]";

  const handleContactClick = () => {
    setIsContactFormVisible(true);
  };

  const handleCloseContactForm = () => {
    setIsContactFormVisible(false);
  };

  return (
    <div className="relative md:h-2/3 -mt-[63px] lg:-mt-[88px] xl:-mt-[88px]">
      <img
        className={`h-screen w-screen object-cover  transition-opacity ease-linear ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        src={images[currentImageIndex]}
        alt="Hero Background"
      />
      <div className="absolute top-14 lg:top-80 md:left-5 flex flex-col items-center justify-center md:w-8/12">
        <h1
          className={`mt-20 text-2xl font-kantu font-bold text-center md:mt-20 md:text-3xl lg:-mt-24 lg:text-5xl ${textColor}`}>
          Welcome to the world of organic
        </h1>
        <h3
          className={`m-3 text-lg font-noto font-bold lg:text-3xl text-green-900`}>
          <TypeAnimation
            sequence={["coconut refreshment", 1000, "Health millets", 1000]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "2em", display: "inline-block" }}
            repeat={Infinity}
          />
        </h3>
        <p
          className={`w-10/12 m-2 font-inter text-center lg:w-3/6 ${textColor}`}>
          We're dedicated to bringing you the purest essence of nature in every
          item we offer. The best things in life come from the earth.
        </p>
        <button
          onClick={handleContactClick}
          className="flex items-center font-inter font-semibold p-2 m-2 transition duration-200 text-white bg-green-300 hover:bg-green-600 rounded">
          Contact us
          <FaArrowRightLong className="ml-2 " />
        </button>
      </div>
      <div className="absolute bottom-0 w-full bg-black overflow-hidden">
        <ul className="scrolling-text xl:space-x-6 flex font-kantu gap-8 lg:gap-10 xl:gap-12 py-3 list-disc text-white whitespace-nowrap animate-scroll-left">
          {Array.from({ length: 5 }).flatMap(() =>
            [
              "100% organic",
              "Customizable Packaging",
              "Fresh from the Farm",
              "Open for Bulk Orders",
              "Preservative-Free",
              "Natural Goodness",
            ].map((item, index) => (
              <li
                key={index}
                className="text-xl md:text-2xl xl:text-3xl font-medium">
                {item}
              </li>
            ))
          )}
        </ul>
      </div>
      {isContactFormVisible && <ContactForm onClose={handleCloseContactForm} />}
    </div>
  );
};

export default HeroSection;
