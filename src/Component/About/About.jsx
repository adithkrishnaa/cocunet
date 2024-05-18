import React from "react";
import image1 from "../../assets/image/image 1.png";
import image2 from "../../assets/image/Coconut fruit.png";
import image3 from "../../assets/image/Landscape.png"


const About = () => {
  return (
    <>
      <h1 className="text-center font-noto relative font-bold text-4xl m-12 ">
        About Us
        <hr className="border-4 absolute left-1/2 -translate-x-14  -bottom-5  rounded-lg w-20 border-[#99B559]" />
      </h1>

      <div className="flex-col  gap-10  justify-center md:flex md:flex-row md:flex-wrap ">
        <div className="md:flex gap-4 lg:gap-10 content-evenly  px-8 md:px-4 md:w-12/12 lg:w-9/12 ">
          <div className=" border-l-[10px] border-[#798F46] mt-10 h-fit object-cover rounded-lg ">
            <img className="w-full md:w-12/12 rounded-md  " src={image1} />
          </div>
          <div className="flex flex-col justify-center  items-center w-6/6  ">
            <h3 className=" text-2xl mb-2 font-noto  font-bold text-[#99B559] ">
              Who we are?
            </h3>
            <p className="  md:text-base font-kantu lg:text-lg text-[#000000B2]">
              At EyarkaiBanangal, we are more than just a product-selling
              website – we are a passionate team dedicated to bringing you the
              essence of nature in every sip and bite. Founded with a vision to
              redefine your connection with food, we are proud to introduce you
              to a world of organic goodness. Our journey began with a simple
              belief: that the best things in life come from the earth. We are
              not just purveyors of products; we are stewards of nature,
              cultivating a bond between you and the land.
            </p>
          </div>
        </div>
        <div className=" flex-wrap-reverse md:flex-nowrap content-evenly flex gap-4 lg:gap-10  px-8 md:px-4 lg:w-8/12">
          <div className="flex flex-col lg:justify-center items-center">
            <h3 className=" text-2xl mb-2 font-noto  font-bold text-[#99B559] ">
              Our Products
            </h3>
            <p className="text-base lg:text-lg font-kantu text-[#000000B2]">
              At EyarkaiBanangal, we are more than just a product-selling
              website – we are a passionate team dedicated to bringing you the
              essence of nature in every sip and bite. Founded with a vision to
              redefine your connection with food, we are proud to introduce you
              to a world of organic goodness. Our journey began with a simple
              belief: that the best things in life come from the earth. We are
              not just purveyors of products; we are stewards of nature,
              cultivating a bond between you and the land.
            </p>
          </div>
          <div className="my-auto mt-5 md:mt-10 h-fit border-r-[10px] border-[#798F46] rounded-lg ">
            <img className=" rounded-l-md h-fit" src={image2} />
          </div>
        </div>
        <div className="md:flex gap-5 lg:gap-10  content-evenly px-8 lg:w-9/12 mb-10">
          <div className=" border-l-[10px]  border-[#798F46] mt-12 rounded-lg h-fit">
            <img className=" rounded-r-md min-h-fit object-fill" src={image3} />
          </div>
          <div className="flex flex-col justify-center items-center ">
            <h3 className="text-2xl mb-2 font-noto font-bold text-[#99B559]  ">
              Why Organic
            </h3>
            <p className="text-base lg:text-lg font-kantu  text-[#000000B2]">
              At EyarkaiBanangal, we are more than just a product-selling
              website – we are a passionate team dedicated to bringing you the
              essence of nature in every sip and bite. Founded with a vision to
              redefine your connection with food, we are proud to introduce you
              to a world of organic goodness. Our journey began with a simple
              belief: that the best things in life come from the earth. We are
              not just purveyors of products; we are stewards of nature,
              cultivating a bond between you and the land.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
