import React, { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import MyCollection from "../components/MyCollection";
import Likes from "./Likes";
import MyCollectionsAndLikes from "./MyCollectionsAndLikes";

const Collections = () => {
  const location = useLocation();
  const [activeButton, setActiveButton] = useState("collections");

  useEffect(() => {
    if (location.pathname.includes("likes")) {
      setActiveButton("favourites");
    } else {
      setActiveButton("collections");
    }
  }, [location.pathname]);
  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  return (
    <div className="text-md px-7 py-7 pb-[130px]">
      <div className="flex gap-3 mb-6">
        <Link to="/collections">
          <button
            className={`hover:bg-[#FACD66] border-[#595b59] text-[#595b59] font-medium border-[1px] rounded-full px-[20px] py-[10px] ${
              activeButton === "collections"
                ? "bg-[#FACD66] text-[#181818]"
                : ""
            }`}
            onClick={() => handleButtonClick("collections")}
          >
            My Collection
          </button>
        </Link>
        <Link to="/collections/likes">
          <button
            className={`hover:bg-[#FACD66] border-[#595b59] text-[#595b59] border-[1px] font-medium rounded-full px-[20px] py-[10px] ${
              activeButton === "favourites" ? "bg-[#FACD66] text-[#181818]" : ""
            }`}
            onClick={() => handleButtonClick("favourites")}
          >
            Likes
          </button>
        </Link>
      </div>

      <MyCollectionsAndLikes activeButton={activeButton} />
    </div>
  );
};

export default Collections;

{
  /* {activeButton === "collection" ? <MyCollection /> : <Likes />} */
}

{
  /* <Outlet /> */
}
