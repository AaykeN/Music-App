import logo from "../assets/img/logo.svg";

import { NavLink } from "react-router-dom";
import { links, linksBottom } from "../assets/constants";

const NavLinks = () => (
  <div className="flex flex-col w-[60px] bg-[#1A1E1F] rounded-3xl gap-[30px] py-6 px-4 mt-[30px]">
    {links.map((item) => {
      return (
        <NavLink key={item.name} to={item.to} className="flex justify-center">
          <img className="w-10- h-10" alt="" src={item.icon} />
        </NavLink>
      );
    })}
  </div>
);

const NavLinksBottom = () => (
  <div className="flex flex-col w-[60px] bg-[#1D2123] rounded-3xl mt-[20px] gap-[30px] py-6 px-4">
    {linksBottom.map((item) => {
      return (
        <NavLink key={item.name} to={item.to} className="flex justify-center">
          <img className="w-10- h-10" alt="" src={item.icon} />
        </NavLink>
      );
    })}
  </div>
);

const Sidebar = () => {
  return (
    <>
      <div className="md:flex hidden flex-col items-center w-[120px] py-7 px-5 h-screen sticky top-0 z-10">
        <img
          src={logo}
          alt={logo}
          className="w-[34px] h-[34px] object-contain "
        />
        <NavLinks />
        <NavLinksBottom />
      </div>
    </>
  );
};

export default Sidebar;
