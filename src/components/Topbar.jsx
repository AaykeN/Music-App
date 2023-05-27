import { useState } from "react";
import Searchbar from "./Searchbar";

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
        className={`px-3 md:px-7 h-[75px] sticky top-0 z-20 items-center md:bg-transparent bg-[#1d2123] scroll flex md:justify-start justify-end`}
      >
        <Searchbar />
      </div>
    </>
  );
};

export default Topbar;
