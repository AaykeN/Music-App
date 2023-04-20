import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";
import logo from "../assets/img/logo.svg";

const Topbar = () => {
  return (
    <>
      <div className="px-9 h-[75px] sticky top-0 z-20 items-center bg-transparent hover:border-gray-100 scroll flex md:justify-start justify-end">
        <Searchbar />
      </div>
    </>
  );
};

export default Topbar;
