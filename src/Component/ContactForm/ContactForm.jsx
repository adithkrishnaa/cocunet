import React, { useState } from "react";
import { IoClose, IoCallOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";

const ContactForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    // Reset form fields
    setFormData({
      name: "",
      email: "",
      phoneNumber: "",
      message: "",
    });
  };

  const isFormValid =
    formData.name && formData.email && formData.phoneNumber && formData.message;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-60 z-50">
      <div className="bg-[rgb(231,231,231)] p-10 relative rounded-3xl shadow-xl w-11/12 md:w-1/2 lg:w-3/6">
        <div className="absolute right-5 top-5">
          <button
            type="button"
            className="px-1 py-1 bg-[#E7E7E7] border border-[#000000] text-white rounded-full mr-2"
            onClick={onClose}>
            <IoClose color="#000000" size={20} />
          </button>
        </div>

        {!isSubmitted && (
          <div className="text-center justify-center">
            <h2 className="text-3xl font-noto font-bold mb-2">Get In Touch</h2>
            <p className="font-kantu justify-center text-base px-16">
              Have questions or need assistance with bulk orders for your event?
              We're here to help!
            </p>
          </div>
        )}

        {!isSubmitted ? (
          <form onSubmit={handleSubmit}>
            <div className="py-10 px-20 space-y-3 bg-[#F1F1F1] rounded-xl">
              <div className="">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border-[1px] placeholder:font-kantu border-black placeholder:text-black focus:outline-none bg-[#E7E7E7] rounded-md required"
                  placeholder="Full Name*"
                />
              </div>
              <div className="">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border-[1px] border-black placeholder:font-kantu placeholder:text-black focus:outline-none bg-[#E7E7E7] rounded-md required"
                  placeholder="Email*"
                />
              </div>
              <div className="">
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border-[1px] border-black placeholder:font-kantu placeholder:text-black focus:outline-none bg-[#E7E7E7] rounded-md required"
                  placeholder="Contact no.*"
                />
              </div>
              <div className="">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 h-36 border-[1px] border-black placeholder:font-kantu placeholder:text-black focus:outline-none bg-[#E7E7E7] rounded-md required"
                  placeholder="Message*"
                />
              </div>
              <div className="flex relative justify-center">
                <div className="absolute left-10">
                  <p>
                    <a
                      href="tel:+917010696323"
                      className="hover:underline justify-start">
                      <IoCallOutline size={30} />
                    </a>
                  </p>
                </div>
                <div className="flex">
                  <button
                    type="submit"
                    className={`px-4 py-2 text-white justify-center rounded-md ${
                      isFormValid
                        ? "bg-green-500"
                        : "bg-gray-500 cursor-not-allowed"
                    }`}
                    disabled={!isFormValid}>
                    Reach Us
                  </button>
                </div>
                <div className="absolute right-10">
                  <p>
                    <a
                      href="https://wa.me/917010696323?text=Hello%20I%20am%20interested%20in%20your%20products"
                      className="hover:underline justify-start"
                      target="_blank"
                      rel="noopener noreferrer">
                      <FaWhatsapp size={30} />
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </form>
        ) : (
          <div className="py-20  space-y-10 relative rounded-xl text-center">
            <div
              className="py-5 px-5 left-1/2 -translate-x-16 absolute  rounded-full mr-2 shadow-2xl"
              style={{
                background: "linear-gradient(180deg, #D5FF73 0%, #AED457 100%)",
              }}>
              <FaCheck size={45} color="white" />
            </div>

            <h3 className="text-5xl pt-20 font-noto font-bold mb-4 text-[#99B559]">
              Message Sent Successfully!
            </h3>
            <p className="font-kantu text-base px-14 text-[#535353]">
              Thank you for reaching out! Your message has been sent
              successfully. We'll get back to you as soon as possible. In the
              meantime, feel free to explore our website for more inspiration
              and products for your upcoming event.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
