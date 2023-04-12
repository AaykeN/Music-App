import React, { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const Collections = () => {
  const [activeButton, setActiveButton] = useState("collection");

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  return (
    <div className="text-md px-7 py-7 pb-[130px]">
      <div className="flex gap-3 mb-6">
        <Link to="/collections">
          <button
            className={`hover:bg-[#FACD66] border-[#595b59] text-[#595b59] hover:text-[#131313] font-medium border-[1px] rounded-full px-[20px] py-[10px] ${
              activeButton === "collection" ? "bg-[#FACD66] text-[#131313]" : ""
            }`}
            onClick={() => handleButtonClick("collection")}
          >
            My Collection
          </button>
        </Link>
        <Link to="/collections/likes">
          <button
            className={`hover:bg-[#FACD66] border-[#595b59] text-[#595b59] border-[1px] hover:text-[#131313] font-medium rounded-full px-[20px] py-[10px] ${
              activeButton === "likes" ? "bg-[#FACD66] text-[#131313]" : ""
            }`}
            onClick={() => handleButtonClick("likes")}
          >
            Likes
          </button>
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Collections;
