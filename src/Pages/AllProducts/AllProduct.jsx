import { useNavigate } from "react-router";

import { useContext, useEffect } from "react";
import myContext from "../../Context/myContext";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { addToCart, deleteFromCart } from "../../Redux/cartSlice";
import Layout from "../../Component/Layout/Layout";
import { FaStar,FaRegStar } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";



const AllProduct = () => {
  const navigate = useNavigate();

  const context = useContext(myContext);
  const { getAllProduct } = context;

  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const addCart = (item) => {
    // console.log(item)
    dispatch(addToCart(item));
    toast.success("Add to cart");
  };

  const deleteCart = (item) => {
    dispatch(deleteFromCart(item));
    toast.success("Delete cart");
  };

  // console.log(cartItems)

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);
  return (
    <Layout>
      <div className="py-8 px-10 relative">
        <div className=" absolute top-2 left-16">
          <Link to={"/"}>
            <FaArrowLeftLong size={25} />
          </Link>
        </div>
        {/* Heading  */}
        <div className="mb-8 ml-8 flex mt-8">
          <div className="border-[10px] w-2 h-10 rounded-md  border-[#798F46]"></div>
          <h1 className=" ml-4 mt-1.5 text-2xl   font-semibold">Products</h1>
        </div>

        {/* main  */}
        <section className="text-gray-600 body-font ">
          <div className="container px-5 lg:px-14 py-5 mx-auto">
            <div className="flex flex-wrap -m-4 sm:flex sm:flex-wrap lg:flex lg:flex-row md:gap-40 lg:gap-20 md:flex-wrap ">
              {getAllProduct.map((item, index) => {
                const { id, title, price, productImageUrl } = item;
                return (
                  <div key={index} className="p-4 w-full md:w-1/4 ">
                    <div className="h-full border border-gray-300 rounded-xl overflow-hidden shadow-md cursor-pointer lg:h-96 md:w-72 lg:w-80">
                      <img
                        onClick={() => navigate(`/productinfo/${id}`)}
                        className="lg:h-40 lg:w-52 lg:ml-10 lg:mt-4 h-96 w-full mb-7  "
                        src={productImageUrl}
                        alt="blog"
                      />
                      <div className="flex justify-center ">
                        {cartItems.some((p) => p.id === item.id) ? (
                          <button
                            onClick={() => deleteCart(item)}
                            className="bg-[#798F46] hover:bg-[#353434] w-56 text-white py-[4px] rounded-lg font-bold">
                            Delete To Cart
                          </button>
                        ) : (
                          <button
                            onClick={() => addCart(item)}
                            className=" bg-[#798F46] hover:bg-[#353434] w-56 text-white py-[4px] rounded-lg font-bold">
                            Add To Cart
                          </button>
                        )}
                      </div>
                      <div className="p-6">
                        <h1 className="title-font text-base font-medium text-gray-900 mb-3 ml-5">
                          {title.substring(0, 25)}
                        </h1>
                        <h1 className="title-font text-base font-medium  mb-3 ml-5 text-[#8D9B39]">
                          ₹{price}
                        </h1>
                        <div className="flex ml-5 ">
                          <FaStar color="FFAD33" />
                          <FaStar color="FFAD33" />
                          <FaStar color="FFAD33" />
                          <FaStar color="FFAD33" />
                          <FaRegStar color="FFAD33" />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AllProduct;