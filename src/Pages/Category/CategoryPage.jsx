import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import myContext from "../../Context/myContext";
import Loader from "../../Component/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../Redux/cartSlice";
import toast from "react-hot-toast";
import Layout from "../../Component/Layout/Layout";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { FaStar, FaRegStar } from "react-icons/fa6";

const CategoryPage = () => {
  const { categoryname } = useParams();
  const context = useContext(myContext);
  const { getAllProduct, loading } = context;

  const navigate = useNavigate();

  const filterProduct = getAllProduct.filter((obj) =>
    obj.category.includes(categoryname)
  );

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
      <div className="relative">
        <div className="absolute -top-14 left-10 md:left-16 lg:left-20 xl:left-20">
          <Link to={"/product"}>
            <FaArrowLeftLong size={25} />
          </Link>
        </div>
        {/* Heading */}
        <div className="mb-8 ml-16  lg:ml-20 xl:ml-20 flex mt-16">
          <div className="border-[10px] w-2 h-10 rounded-md border-[#798F46]"></div>
          <h1 className="ml-4 mt-1.5 text-2xl font-semibold">{categoryname}</h1>
        </div>
       

        {/* main  */}
        {loading ? (
          <>
            <div className="flex ">
              <Loader />
            </div>
          </>
        ) : (
          <>
            <section className="text-gray-600 body-font">
              <div className="container px-10 lg:px-20 py-16  ">
                <div className="flex flex-wrap  md:flex-nowrap space-y-10 md:space-y-0 md:space-x-10 lg:gap-10 md:justify-center  ">
                  {filterProduct.length > 0 ? (
                    <>
                      {filterProduct.map((item, index) => {
                        const { id, title, price, productImageUrl } = item;
                        return (
                          <div
                            key={index}
                            className=" w-full md:w-1/2 lg:w-1/3">
                              
                            <div className="h-full border border-gray-300 rounded-xl overflow-hidden shadow-md cursor-pointer">
                              <img
                                onClick={() => navigate(`/productinfo/${id}`)}
                                className="lg:h-60 w-full object-cover xl:h-72 h-60 xl:w-full"
                                src={productImageUrl}
                                alt="Product"
                              />

                              {
                                <div className="flex justify-center ">
                                  {cartItems.some((p) => p.id === item.id) ? (
                                    <button
                                      onClick={() => deleteCart(item)}
                                      className=" w-full  py-3 text-gray-100 bg-[#798F46]  font-bold">
                                      Delete From Cart
                                    </button>
                                  ) : (
                                    <button
                                      onClick={() => addCart(item)}
                                      className=" w-full  py-3  text-gray-100 hover:bg-[#798F46] bg-[#353434] hover:text-gray-100 font-bold">
                                      Add To Cart
                                    </button>
                                  )}
                                </div>
                              }

                              <div className="p-6">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"></h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                  {title.substring(0, 25)}
                                </h1>
                                <h1 className="title-font text-lg font-medium text-[#798F46] mb-3">
                                  ₹{price}
                                </h1>
                                <div className="flex">
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
                    </>
                  ) : (
                    <div>
                      <div className="flex justify-center">
                        <img
                          className=" mb-2"
                          src="https://cdn-icons-png.flaticon.com/128/2748/2748614.png"
                          alt=""
                        />
                      </div>
                      <h1 className=" text-black text-xl">
                        No {categoryname} product found
                      </h1>
                    </div>
                  )}
                </div>
              </div>
            </section>
          </>
        )}
      </div>
    </Layout>
  );
};

export default CategoryPage;
