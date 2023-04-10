import logo from "../assets/img/logo.svg";
import { RiCloseLine } from "react-icons/ri";
import { HiOutlineMenu, HiMenuAlt4 } from "react-icons/hi";

import { NavLink } from "react-router-dom";
import { links } from "../assets/constants";
import { useState } from "react";

import { ReactComponent as Home } from "../assets/img/Home-1.svg";

const NavLinks = ({ handleClick, mobileMenuOpen }) => (
  <>
    <div className="flex flex-col w-[60px] bg-[#1A1E1F] rounded-3xl gap-[30px] py-6 px-4 mt-[30px]">
      {links.slice(0, 4).map((item) => {
        const Icon = item.icon;

        return (
          // <Home fill="#face66" />
          <NavLink
            key={item.name}
            to={item.to}
            onClick={() => handleClick && handleClick()}
            className="flex justify-center"
          >
            {/* <img className="w-10- h-10 text-black" alt="" src={item.icon} /> */}
            <Icon width="2.5rem" height="2.5rem" className="h-10" />
          </NavLink>
        );
      })}
    </div>
    <div className="flex flex-col w-[60px] bg-[#1A1E1F] rounded-3xl mt-[20px] gap-[30px] py-6 px-4">
      {links.slice(4).map((item) => {
        const Icon = item.icon;

        return (
          <NavLink
            key={item.name}
            to={item.to}
            onClick={() => handleClick && handleClick()}
            className="flex justify-center"
          >
            <Icon fill="red" className="fill-white" />
          </NavLink>
        );
      })}
    </div>
  </>
);

const NavLinkMobile = ({ handleClick, mobileMenuOpen }) => (
  <div className="flex flex-col w-full gap-[50px] py-6 px-4 mt-[30px]">
    {links.map((item) => {
      const Icon = item.icon;

      return (
        <NavLink
          key={item.name}
          to={item.to}
          onClick={() => handleClick && handleClick()}
          className="flex justify-start gap-5  items-center"
        >
          {/* <img className="w-8 h-8" alt="" src={item.icon} /> */}
          <Icon width="2rem" height="2rem" />
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
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden fixed top-6 left-[25px] z-20">
        {mobileMenuOpen ? (
          <RiCloseLine
            className="w-6 h-6 text-white"
            onClick={() => setMobileMenuOpen(false)}
          />
        ) : (
          <HiMenuAlt4
            className="w-6 h-6 text-white"
            onClick={() => setMobileMenuOpen(true)}
          />
        )}
      </div>

      <div
        className={`fixed md:hidden flex-col items-center w-2/3 py-7 px-5 h-screen top-[65px] z-10 bg-[#1d2123] smooth-transition ${
          mobileMenuOpen ? "left-0" : "-left-full"
        }`}
      >
        <NavLinkMobile handleClick={() => setMobileMenuOpen(false)} />
      </div>
    </>
  );
};

export default Sidebar;
