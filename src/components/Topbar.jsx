import Searchbar from "./Searchbar";
import { useState } from "react";

const Topbar = () => {
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 75) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <>
      <div
        className={`px-9 h-[75px] sticky top-0 z-20 items-center  hover:border-gray-100 scroll flex md:justify-start justify-end`}
      >
        <Searchbar />
      </div>
    </>
  );
};

export default Topbar;
