import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../../SearchBar/SearchBar";
import { useSelector } from "react-redux";
import { LuMenu } from "react-icons/lu";
import { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
// import { BiLogIn } from "react-icons/bi";
// import { TbLogout2 } from "react-icons/tb";
import logo from "../../assets/image/eyarkai Banangal.png"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // get user from localStorage
  const user = JSON.parse(localStorage.getItem("users"));

  // navigate
  // const navigate = useNavigate();

  // // logout function
  // const logout = () => {
  //   localStorage.clear("users");
  //   navigate("/login");
  // };

  // toggle mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // CartItems
  const cartItems = useSelector((state) => state.cart);

  // navList Data
  const navList = (
    <ul className="flex flex-col font-poppin md:flex-row lg:space-x-5 gap-x-5 text-black font-normal ">
      {/* Home */}
      <li className="hover:text-green-400 hover:font-medium my-2 lg:my-0">
        <Link to={"/"}>Home</Link>
      </li>

      {/*  Product */}
      <li className="hover:text-green-400 hover:font-medium my-2 lg:my-0">
        <Link to={"/product"}>Product</Link>
      </li>

      {/* About */}
      <li className="hover:text-green-400 hover:font-medium my-2 lg:my-0">
        <a href="/">About</a>
      </li>

      {/* Service */}
      <li className="hover:text-green-400 hover:font-medium my-2 lg:my-0">
        <a href="/">Service</a>
      </li>



      {/* Login */}
      {/* {!user && (
        <li className="hover:text-green-400 hover:font-medium my-2 lg:my-0">
          <Link to={"/login"}>
            <BiLogIn />
          </Link>
        </li>
      )} */}

      {/* User */}
      {user?.role === "user" && (
        <li className="hover:text-green-400 hover:font-medium my-2 lg:my-0">
          <Link to={"/user-dashboard"}>
            <FaUser size={20} />
          </Link>
        </li>
      )}

      {/* Admin */}
      {user?.role === "admin" && (
        <li className="hover:text-green-400 hover:font-medium my-2 lg:my-0">
          <Link to={"/admin-dashboard"}>
            <FaUser />
          </Link>
        </li>
      )}

      {/* Logout */}
      {/* {user && (
        <li
          className="cursor-pointer hover:text-green-400 hover:font-medium my-2 lg:my-0"
          onClick={logout}>
          <TbLogout2 si/>
        </li>
      )} */}

      {/* Cart */}
    </ul>
  );

  return (
    <nav className="bg-white sticky top-1 px-3 md:px-5 md:mr-10 bg-opacity-85 md:bg-opacity-90 md:ml-10 xl:mr-40 mt-5 md:rounded-lg xl:ml-40 z-20">
      {/* main */}
      <div className="flex justify-between items-center md:py-3">
        {/* left */}
        <div className="left py-0">
          <Link to={"/"}>
            <img src={logo} alt="logo" className="w-14" />
          </Link>
        </div>

        {/* Menu Icon for Small Screens */}
        <div className=" flex md:hidden">
          <button className="font-bold size-8" onClick={toggleMenu}>
            <LuMenu />
          </button>
          <li className="hover:text-green-400 md:-ml-6  list-none relative hover:font-medium my-2 lg:my-0">
            <Link to={"/cart"}>
              <IoCartOutline size={20} />
              <div className=" absolute -top-3 -right-2 ">
                {cartItems.length}
              </div>
            </Link>
          </li>
          {/* Signup
          {!user && (
            <li className="hover:text-green-400 md:-ml-6  list-none relative hover:font-medium my-2 lg:my-0">
              <Link to={"/signup"}>
                <BiLogIn size={20} />
              </Link>
            </li>
          )} */}
        </div>

        {/* Right Section */}
        <div className=" hidden md:flex justify-center lg:my-auto mb-0 lg:mb-2">
          {navList}
        </div>
        <div className="hidden md:flex ">
          <SearchBar />
        </div>
        {/* Signup */}
        {/* {!user && (
          <li className="hover:text-green-400 md:-ml-6  list-none relative hover:font-medium my-2 lg:my-0">
            <Link to={"/signup"}>
              <BiLogIn size={25} />
            </Link>
          </li>
        )} */}
        <li className="hover:text-green-400  hidden md:flex list-none relative hover:font-medium my-2 lg:my-0">
          <Link to={"/cart"}>
            <IoCartOutline size={25} />
            <div className=" absolute -top-3 -right-2 ">{cartItems.length}</div>
          </Link>
        </li>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white p-4 rounded-lg shadow-md">
          {navList}
          <SearchBar />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
