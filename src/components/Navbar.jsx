import React, { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { RiVideoAddLine } from "react-icons/ri";
import { FaMicrophone } from "react-icons/fa";
import { AiOutlineBell } from "react-icons/ai";
import { IoIosSearch } from "react-icons/io";
import { IoArrowBack } from "react-icons/io5";


import logo from "../../public/logo.png";
import { useNavigate } from "react-router-dom";
import { useUtils } from "../context/utilsContext";

function Navbar() {
  const [searchQuery, setsearchQuery] = useState();
  const { isSidebar, setisSidebar, setMobileshow, mobileShow } = useUtils();
  const [searchbar, setsearchbar] = useState(false);

  

  const navigate = useNavigate();

  const searchQueryHandler = (event) => {
    if (
      (event?.key === "Enter" || event === "searchbutton") &&
      searchQuery?.length > 0
    ) {
      navigate(`search/${searchQuery}`);
      setsearchQuery("");
    }
  };

  const handleSidebar = () => {
    if (window.innerWidth <= 1200) {
      setisSidebar(!isSidebar);
      setMobileshow(!mobileShow);
    }
    setisSidebar(!isSidebar);
  };

  if (searchbar) {
    return (
      <nav className="flex justify-between fixed top-0 w-[100%] bg-white px-6 py-2 items-center">
        <IoArrowBack size={20} onClick={()=>setsearchbar(!searchbar)} />
        {" "}
        <div className="flex flex-grow mx-4 items-center w-[35%]  ">
          <div className="w-[100%] px-4 py-2 border border-gray-400 rounded-l-full">
            {" "}
            <input
              type="text"
              placeholder="Search"
              className="outline-none"
              onChange={(e) => setsearchQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
              value={searchQuery}
            />
          </div>
          <button
            onClick={() => searchQueryHandler("searchbutton")}
            className="px-4 py-2 bg-gray-100 border-gray-400 border rounded-r-full"
          >
            <CiSearch size={"24px"} />
          </button>

        </div>
          <FaMicrophone
            size={"49px"}
            className="ml-3 border rounded-full p-3 cursor-pointer hover:bg-gray-200 duration-200"
          />
      </nav>
    );
  }

  return (
    <nav className="flex justify-between fixed top-0 w-[100%] bg-white px-6 py-2">
      <div className="  space-x-4 flex items-center  cursor-pointer">
        <AiOutlineMenu
          className="text-xl cursor-pointer"
          onClick={handleSidebar}
        />
        <img src={logo} alt="youtube logo" className="w-28 cursor-pointer" />
      </div>
      <div className="hidden md:flex items-center w-[35%]  ">
        <div className="w-[100%] px-4 py-2 border border-gray-400 rounded-l-full">
          {" "}
          <input
            type="text"
            placeholder="Search"
            className="outline-none"
            onChange={(e) => setsearchQuery(e.target.value)}
            onKeyUp={searchQueryHandler}
            value={searchQuery}
          />
        </div>
        <button
          onClick={() => searchQueryHandler("searchbutton")}
          className="px-4 py-2 bg-gray-100 border-gray-400 border rounded-r-full"
        >
          <CiSearch size={"24px"} />
        </button>

        <FaMicrophone
          size={"49px"}
          className="ml-3 border rounded-full p-3 cursor-pointer hover:bg-gray-200 duration-200"
        />
      </div>
      <div className=" flex items-center space-x-5">
        <IoIosSearch
          className="text-2xl xl:hidden md:hidden"
          onClick={() => setsearchbar(!searchbar)}
        />
        <RiVideoAddLine className="text-2xl" />
        <AiOutlineBell className="text-2xl" />
      </div>
    </nav>
  );
}

export default Navbar;
