import { useNavigate } from "react-router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Layout from "../../Component/Layout/Layout";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { CiCircleCheck } from "react-icons/ci";

const category = [
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/5c/Coconut_Drink%2C_Pangandaran.JPG",
    name: "Coconut Drink",
    product1: "Green Coconut",
    product2: "Red Coconut",
    product3: "Customised Coconut",
  },
  {
    image:
      "https://i0.wp.com/banjaranfoodie.com/wp-content/uploads/2023/05/ice-apples.jpg?fit=2422%2C1615&ssl=1",
    name: "Ice Apple",
    product1: "Ice Apple",
    product2: "Sugar Cane Juice",
    product3: null, // This product is not available
  },
  {
    image: "https://dicencook.com/storage/2019/04/ragi-ambali-1-500x375.jpeg",
    name: "Healthy Millets Shakes",
    product1: "Kambu Koozh",
    product2: "Raagi Koozh",
    product3: "Butter Milk",
  },
];

const Product = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <Layout>
      <div className="py-8 md:px-8 relative">
        <div className="absolute top-2 left-10 md:left-16 lg:left-20 xl:left-20">
          <Link to={"/"}>
            <FaArrowLeftLong size={25} />
          </Link>
        </div>
        {/* Heading */}
        <div className="mb-8 ml-8 lg:ml-10 xl:ml-12 flex mt-8">
          <div className="border-[10px] w-2 h-10 rounded-md border-[#798F46]"></div>
          <h1 className="ml-4 mt-1.5 text-2xl font-semibold">Products</h1>
        </div>

        <div className=" container mt-5 lg:-ml-16">
          <div className="grid grid-cols-1 mx-auto lg:grid-cols-2 lg:grid-rows-2 ">
            {category.map((item, index) => (
              <div
                key={index}
                className={`px-5 py-8 lg:py-4 xl:py-2  mx-auto ${
                  index === 2 ? "lg:col-span-2 lg:col-start-1" : ""
                }`}>
                <div
                  onClick={() => navigate(`/category/${item.name}`)}
                  className="lg:max-w-xs grid  rounded-full transition-all cursor-pointer mb-1">
                  <div className="flex flex-wrap relative justify-center mb-2 md:min-h-60 md:w-[454px] lg:min-h-72">
                    <img
                      src={item.image}
                      alt="img"
                      className="rounded-lg md:rounded-3xl "
                    />
                    <p className="p-2 border-2 group flex font-inter rounded-2xl hover:bg-[#1F4E3D] transition duration-200 bottom-5 right-5 absolute text-white bg-[#99B559]">
                      Explore more
                      <FaArrowRightLong
                        className="ml-2 mt-0.5 hidden group-hover:flex transition duration-900"
                        size={20}
                      />
                    </p>
                  </div>
                  <ul className="mt-5 md:mt-2 lg:mt-4 space-y-3 font-noto font-medium text-sm">
                    {item.product1 && (
                      <li className="flex mt-1 list-disc">
                        <CiCircleCheck
                          size={20}
                          color="#99B559"
                          className="mr-2"
                        />
                        {item.product1}
                      </li>
                    )}
                    {item.product2 && (
                      <li className="flex mt-1">
                        <CiCircleCheck
                          size={20}
                          color="#99B559"
                          className="mr-2"
                        />
                        {item.product2}
                      </li>
                    )}
                    {item.product3 && (
                      <li className="flex mt-1">
                        <CiCircleCheck
                          size={20}
                          color="#99B559"
                          className="mr-2"
                        />
                        {item.product3}
                      </li>
                    )}
                  </ul>
                </div>

                <h1 className="text-sm hidden lg:text-2xl text-center font-medium title-font mt-6 mb-10 text-white">
                  {item.name}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Product;
