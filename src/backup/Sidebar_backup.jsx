import logo from "../assets/img/logo.svg";
import { RiCloseLine } from "react-icons/ri";
import { HiOutlineMenu } from "react-icons/hi";

import { NavLink } from "react-router-dom";
import { links, linksBottom } from "../assets/constants";
import { useState } from "react";

const NavLinks = ({ handleClick, mobileMenuOpen }) => (
  <div className="flex flex-col w-[60px] bg-[#1A1E1F] rounded-3xl gap-[30px] py-6 px-4 mt-[30px]">
    {links.map((item) => {
      return (
        <NavLink
          key={item.name}
          to={item.to}
          onClick={() => handleClick && handleClick()}
          className="flex justify-center"
        >
          <img className="w-10- h-10" alt="" src={item.icon} />
          {mobileMenuOpen && item.name}
        </NavLink>
      );
    })}
  </div>
);

const NavLinksBottom = ({ handleClick, mobileMenuOpen }) => (
  <div className="flex flex-col w-[60px] bg-[#1D2123] rounded-3xl mt-[20px] gap-[30px] py-6 px-4">
    {linksBottom.map((item) => {
      return (
        <NavLink
          key={item.name}
          to={item.to}
          onClick={() => handleClick && handleClick()}
          className="flex justify-center"
        >
          <img className="w-10- h-10" alt="" src={item.icon} />
        </NavLink>
      );
    })}
  </div>
);

const NavLinkMobile = ({ handleClick, mobileMenuOpen }) => (
  <div className="flex flex-col w-full gap-[50px] py-6 px-4 mt-[30px]">
    {links.map((item) => {
      return (
        <NavLink
          key={item.name}
          to={item.to}
          onClick={() => handleClick && handleClick()}
          className="flex justify-start gap-5  items-center"
        >
          <img className="w-8 h-8" alt="" src={item.icon} />
          <div className="text-[#EFEEE0]/25 text-lg ">{item.name}</div>
        </NavLink>
      );
    })}
  </div>
);

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="md:flex hidden flex-col items-center w-[120px] py-7 px-5 h-screen sticky top-0 z-10">
        <img
          src={logo}
          alt="logo"
          className="w-[34px] h-[34px] object-contain "
        />
        <NavLinks />
        <NavLinksBottom />
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden fixed top-6 left-[25px] z-20">
        {mobileMenuOpen ? (
          <RiCloseLine
            className="w-6 h-6 text-white"
            onClick={() => setMobileMenuOpen(false)}
          />
        ) : (
          <HiOutlineMenu
            className="w-6 h-6 text-white"
            onClick={() => setMobileMenuOpen(true)}
          />
        )}
      </div>

      <div
        className={`fixed md:hidden flex-col items-center w-2/3 py-7 px-5 h-screen top-20 z-10 bg-[#1d2123] smooth-transition ${
          mobileMenuOpen ? "left-0" : "-left-full"
        }`}
      >
        <NavLinkMobile handleClick={() => setMobileMenuOpen(false)} />
      </div>
    </>
  );
};

export default Sidebar;
