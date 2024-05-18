import { useNavigate } from "react-router";
import { FaArrowRightLong } from "react-icons/fa6";

const category = [
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/5c/Coconut_Drink%2C_Pangandaran.JPG",
    name: "Coconut",
  },
  {
    image:
      "https://i0.wp.com/banjaranfoodie.com/wp-content/uploads/2023/05/ice-apples.jpg?fit=2422%2C1615&ssl=1",
    name: "Nungu",
  },
  {
    image: "https://dicencook.com/storage/2019/04/ragi-ambali-1-500x375.jpeg",
    name: "Millets",
  },
];
const Category = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#1F4E3D] py-10">
      <div className="flex flex-col mt-5">
        <h1 className="text-center text-3xl font-halt lg:text-7xl lg:m-10  font-normal text-white leading-10 lg:leading-2">
          Healthy Life With<br></br> Natural Fresh Products
        </h1>
        <div className="grid  md:justify-center  mt-5">
          <div className="grid md:grid-cols-2 gap-3">
            {category.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`px-5 lg:px-10 py-2 mx-auto ${
                    index === 2 ? "md:col-span-2 md:col-start-1" : ""
                  }`}>
                
                  <div
                    onClick={() => navigate(`/category/${item.name}`)}
                    className="lg:max-w-xs rounded-full  transition-all cursor-pointer mb-1 ">
                    <div className="flex flex-wrap relative justify-center mb-2 md:w-72 md:h-60 lg:w-96 lg:h-72 ">
                      <img
                        src={item.image}
                        alt="img"
                        className="rounded-lg md:rounded-3xl"
                      />
                      <p className=" p-2 border-2 group  flex font-inter rounded-2xl hover:bg-[#1F4E3D] transition duration-200  bottom-5 right-5 absolute text-white bg-[#99B559]">
                        Explore more
                        <FaArrowRightLong
                          className="ml-2 mt-0.5 hidden group-hover:flex transition duration-900 "
                          size={20}
                        />
                      </p>
                    </div>
                  </div>
                  <h1 className=" text-sm hidden lg:text-2xl text-center font-medium title-font mt-6 mb-10 text-white ">
                    {item.name}
                  </h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
