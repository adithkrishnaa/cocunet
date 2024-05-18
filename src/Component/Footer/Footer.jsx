import { Link } from "react-router-dom";
import logo from "../../assets/image/logo With name PNG.png";

const Footer = () => {
  return (
    <div>
      {/* footer  */}
      <footer className="text-gray-600  body-font bg-[#1F4E3D]  md:pt-6 md:pb-6">
        {/* main  */}
        <div className="container md:px-5 py-5 md:mx-auto flex flex-nowrap md:items-center md:flex-row flex-col">
          <p className="text-sm flex text-gray-100 mt-4  md:ml-4 md:pl-4 justify-start sm:border-gray-200 md:py-2  md:mt-4 lg:ml-5">
            <Link
              to={"/"}
              className="text-gray-100 ml-2 md:ml-8"
              rel="noopener noreferrer"
              target="_blank">
              Home
            </Link>
            <Link
              to={"/about"}
              className="text-gray-100 ml-2 md:ml-8"
              rel="noopener noreferrer"
              >
              About
            </Link>
            <Link
              to={"/product"}
              className="text-gray-100 ml-2 md:ml-8"
              rel="noopener noreferrer"
              >
              Products
            </Link>
          </p>

          <div className="inline-flex justify-center  absolute left-44 md:left-1/2 md:items-center">
            <Link
              to={"/"}
              className="text-gray-100 "
              rel="noopener noreferrer"
              target="_blank">
              <img src={logo} alt="logo" className="md:w-20 w-16 " />
            </Link>
          </div>

          {/* media icon  */}
          <div className="inline-flex md:ml-auto md:py-4 -mt-5  justify-end md:justify-start pr-2">
            <p className="text-sm text-gray-100 md:ml-4 md:pl-4  sm:border-gray-200 md:py-2 sm:mt-0 md:mt-4 lg:ml-5">
              <Link
                to={"/service"}
                className="text-gray-100 ml-2 md:ml-8"
                rel="noopener noreferrer">
                <a href="/">Service</a>
              </Link>
              <Link
                to={"/cart"}
                className="text-gray-100 ml-2 md:ml-8"
                rel="noopener noreferrer">
                Cart
              </Link>
              <Link
                to={"/contactus"}
                className="text-gray-100 ml-2 md:ml-8"
                rel="noopener noreferrer">
                Contact Us
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
