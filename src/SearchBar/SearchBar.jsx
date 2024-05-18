import { useContext, useState } from "react";
import myContext from "../../src/Context/myContext";
import { useNavigate } from "react-router";
import { IoSearch, IoClose } from "react-icons/io5";

const SearchBar = () => {
  const context = useContext(myContext);
  const { getAllProduct } = context;
  // Search State
  const [search, setSearch] = useState("");
  const [isInputFocused, setIsInputFocused] = useState(false);

  // Filter Search Data
  const filterSearchData = getAllProduct
    .filter((obj) => obj.title.toLowerCase().includes(search))
    .slice(0, 8);

  const navigate = useNavigate();

  // Handle focus state
  const handleFocus = () => setIsInputFocused(true);
  const handleBlur = () => {
    if (!search) {
      setIsInputFocused(false);
    }
  };

  // Clear search input
  const clearSearch = () => {
    setSearch("");
    setIsInputFocused(false);
  };

  return (
    <div className="">
      {/* search input  */}
      <div className="input relative flex justify-center">
        <input
          type="text"
          placeholder="Search here"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className="bg-gray-200 placeholder-gray-400 border-2 border-gray-500 focus:outline-none rounded-lg px-2 py-2 w-full lg:w-72 xl:w-96  text-black"
        />
        <div className="absolute right-2 top-3">
          {isInputFocused ? (
            <IoClose onClick={clearSearch} className="cursor-pointer" />
          ) : (
            <IoSearch />
          )}
        </div>
      </div>

      {/* search drop-down  */}
      <div className="flex justify-center">
        {search && (
          <div className="block absolute bg-gray-200 w-full lg:w-72 xl:w-96 z-50 my-1 rounded-lg px-2 py-2">
            {filterSearchData.length > 0 ? (
              <>
                {filterSearchData.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="py-2 px-2 cursor-pointer"
                      onClick={() => navigate(`/productinfo/${item.id}`)}>
                      <div className="flex items-center gap-2">
                        <img
                          className="w-10"
                          src={item.productImageUrl}
                          alt=""
                        />
                        {item.title}
                      </div>
                    </div>
                  );
                })}
              </>
            ) : (
              <>
                <div className="flex justify-center">
                  <img
                    className="w-20"
                    src="https://cdn-icons-png.flaticon.com/128/10437/10437090.png"
                    alt="img"
                  />
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
