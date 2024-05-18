import { useContext, useEffect, useState } from "react";

import myContext from "../../Context/myContext";
import { useParams } from "react-router";
import { fireDB } from "../../Firestore/Firebaseconfig";
import { doc, getDoc } from "firebase/firestore";
import Loader from "../../Component/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../Redux/cartSlice";
import toast from "react-hot-toast";
import Layout from "../../Component/Layout/Layout";
import { FaCheckCircle } from "react-icons/fa";
import { FaStar, FaRegStar } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link} from "react-router-dom";


const ProductInfo = () => {
  const context = useContext(myContext);
  const { loading, setLoading } = context;

  const [product, setProduct] = useState("");
  console.log(product);

  const { id } = useParams();

  console.log(product);

  // getProductData
  const getProductData = async () => {
    setLoading(true);
    try {
      const productTemp = await getDoc(doc(fireDB, "products", id));
      // console.log({...productTemp.data(), id : productTemp.id})
      setProduct({ ...productTemp.data(), id: productTemp.id });
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

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

  useEffect(() => {
    getProductData();
  }, []);
  return (
    <Layout>
      <section className="py-10 lg:py-16 relative font-poppins dark:bg-gray-800">
        <div className=" absolute top-2 left-8 md:left-16 xl:left-20">
          <Link to={"/product"}>
            <FaArrowLeftLong size={25} />
          </Link>
        </div>
        {loading ? (
          <>
            <div className="flex justify-center items-center">
              <Loader />
            </div>
          </>
        ) : (
          <>
            <div className="max-w-6xl  mx-auto ">
              <div className="flex flex-wrap mb-24 -mx-4  ">
                <div className="lg:w-1/2 lg:px-4 mb-8 px-16 lg:mb-0 ">
                  <div className=" h-6/6 w-12/12 ">
                    <img
                      className=" w-full object-cover rounded-t-lg lg:h-[25em] "
                      src={product?.productImageUrl}
                      alt=""
                    />
                    <div>
                      <div className="flex flex-wrap ">
                        <div className=" w-1/2">
                          <button className="w-full  h-12   text-center text-gray-100 hover:bg-[#353434] border border-transparent dark:border-gray-700 hover:border-transparent hover:text-gray-100 bg-[#798F46] rounded-none">
                            Buy now
                          </button>
                        </div>
                        <div className="w-1/2">
                          {cartItems.some((p) => p.id === product.id) ? (
                            <button
                              onClick={() => deleteCart(product)}
                              className=" w-full   py-3 text-center text-white hover:bg-[#798F46] border border--600  bg-[#353434] hover:text-gray-100 ">
                              Delete to cart
                            </button>
                          ) : (
                            <button
                              onClick={() => addCart(product)}
                              className="w-full   h-12 text-center text-gray-100 hover:bg-[#798F46] border border-transparent bg-[#353434] hover:text-gray-100   ">
                              Add to cart
                            </button>
                          )}
                        </div>
                      </div>
                      <p className=" text-sm px-2 text-red-800 font-medium ">
                        *Orders require a minimum quantity of 250 units outside
                        the Coimbatore region.
                      </p>
                    </div>
                  </div>

                  <p className=" ml-32 md:ml-72 lg:ml-52  inline-block text-2xl font-semibold text-gray-700 dark:text-gray-400 mt-4  ">
                    <span> Price:₹ {product?.price}</span>
                  </p>
                  <div className="text-[#8D9B39] text-center mt-2 mb-6">
                    Most Recommended
                  </div>
                  <div className="flex  gap-1 md:gap-8 lg:gap-2 ">
                    <div className=" border border-gray-500  text-center  w-1/3  ">
                      <p className=" text-xs  py-5 md:px-5 ">
                        50 counts(Pack of 1)
                        <br />
                        <span className="text-gray-400  ">
                          {" "}
                          50 counts of fresh product in a box{" "}
                        </span>
                        <br />
                        Rs.349
                      </p>
                    </div>
                    <div className=" border border-gray-500  text-center  w-1/3  ">
                      <p className=" text-xs  py-5 md:px-5 ">
                        50 counts(Pack of 1)
                        <br />
                        <span className="text-gray-400  ">
                          {" "}
                          50 counts of fresh product in a box{" "}
                        </span>
                        <br />
                        Rs.349
                      </p>
                    </div>
                    <div className=" border border-gray-500  text-center  w-1/3  ">
                      <p className=" text-xs  py-5 md:px-5 ">
                        50 counts(Pack of 1)
                        <br />
                        <span className="text-gray-400  ">
                          {" "}
                          50 counts of fresh product in a box{" "}
                        </span>
                        <br />
                        Rs.349
                      </p>
                    </div>
                  </div>
                  <div className="mt-6  leading-8">
                    <p className="flex ">
                      {" "}
                      <span className="mt-2 mr-2 ">
                        {" "}
                        <FaCheckCircle color="#8D9B39" />{" "}
                      </span>
                      Bulk ordering available for events.
                    </p>
                    <p className="flex">
                      {" "}
                      <span className="mt-2 mr-2 ">
                        {" "}
                        <FaCheckCircle color="#8D9B39" />{" "}
                      </span>{" "}
                      Customization option for packaging with your logo or
                      branding.
                    </p>
                    <p className="flex">
                      {" "}
                      <span className="mt-2 mr-2 ">
                        {" "}
                        <FaCheckCircle color="#8D9B39" />{" "}
                      </span>
                      Orders processed and shipped with good care.
                    </p>
                  </div>
                </div>

                <div className="w-full  px-16 lg:w-1/2">
                  <div className="">
                    <div className="mb-6 ">
                      <h2 className="max-w-xl mb-6 text-xl font-semibold leading-loose tracking-wide text-gray-700 lg:text-2xl dark:text-gray-300">
                        {product?.title}
                      </h2>
                      <div className="flex">
                        <FaStar color="FFAD33" />
                        <FaStar color="FFAD33" />
                        <FaStar color="FFAD33" />
                        <FaStar color="FFAD33" />
                        <FaRegStar color="FFAD33" />
                      </div>
                      {/* <div className='flex flex-wrap items-center mb-6'>
                        <ul className='flex mb-4 mr-2 lg:mb-0'>
                          <li>
                            <a href=''>
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width={16}
                                height={16}
                                fill='currentColor'
                                className='w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star '
                                viewBox='0 0 16 16'
                              >
                                <path d='M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z'></path>
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a href=''>
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width={16}
                                height={16}
                                fill='currentColor'
                                className='w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star '
                                viewBox='0 0 16 16'
                              >
                                <path d='M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z'></path>
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a href=''>
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width={16}
                                height={16}
                                fill='currentColor'
                                className='w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star '
                                viewBox='0 0 16 16'
                              >
                                <path d='M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z'></path>
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a href=''>
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                width={16}
                                height={16}
                                fill='currentColor'
                                className='w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star '
                                viewBox='0 0 16 16'
                              >
                                <path d='M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z'></path>
                              </svg>
                            </a>
                          </li>
                        </ul>
                      </div> */}
                      {/* <p className='inline-block text-2xl font-semibold text-gray-700 dark:text-gray-400 '>
                        <span>₹ {product?.price}</span>
                      </p> */}
                    </div>
                    <hr className="w-full border-[1px] md:border-[2px] border-gray-400 border-dotted " />
                    <div className="flex gap-2 mt-4  mb-4">
                      <p className="flex ">
                        {" "}
                        <span className="mr-2 mt-1">
                          <FaCheckCircle color="#8D9B39" />
                        </span>{" "}
                        Pay on Delivery{" "}
                      </p>
                      <p className="flex ">
                        {" "}
                        <span className="mr-2 mt-1">
                          <FaCheckCircle color="#8D9B39" />
                        </span>
                        Non-Returnable
                      </p>
                      <p className="flex">
                        {" "}
                        <span className="mr-2 mt-1">
                          <FaCheckCircle color="#8D9B39" />
                        </span>
                        Secured Transaction
                      </p>
                    </div>
                    <hr className="w-full border-[1px] md:border-[2px] border-gray-400 border-dotted " />
                    <div className="mb-6">
                      <h2 className="mb-2 text-lg font-bold text-gray-700 dark:text-gray-400">
                        Description :
                      </h2>
                      <p className="flex text-justify">
                        {" "}
                        <span className="mt-1 mr-2">
                          <GoDotFill />
                        </span>{" "}
                        {product?.description}
                      </p>
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-gray-700 dark:text-gray-400 mb-2">
                        Order Information:
                      </h2>
                      <p className="flex">
                        {" "}
                        <span className="mt-1 mr-2">
                          <GoDotFill />
                        </span>{" "}
                        Bulk ordering options available for events and
                        gatherings.
                      </p>
                      <p className="flex">
                        <span className="mt-1 mr-2">
                          <GoDotFill />
                        </span>{" "}
                        Customization options for packaging with your logo or
                        branding.
                      </p>
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-gray-700 dark:text-gray-400 mb-2 mt-4">
                        Shipping Information:
                      </h2>
                      <p className="flex">
                        {" "}
                        <span className="mt-1 mr-2">
                          <GoDotFill />
                        </span>
                        We ship domestically and internationally.
                      </p>
                      <p className="flex">
                        <span className="mt-1 mr-2">
                          <GoDotFill />
                        </span>{" "}
                        Fast and reliable shipping option available.
                      </p>
                      <p className="flex">
                        <span className="mt-1 mr-2">
                          <GoDotFill />
                        </span>{" "}
                        Orders processed and shipped with care to ensure
                        freshness upon delivery.
                      </p>
                    </div>

                    <div className="mt-4">
                      <p>
                        We are open to take on Orders for your upcoming
                        Events.Book your dates now @+919074620320
                      </p>
                    </div>

                    <div className="mb-6 " />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </section>
    </Layout>
  );
};

export default ProductInfo;
