import { useState } from "react";
import logo from "../assets/img/logo.svg";
import { HiMenuAlt4 } from "react-icons/hi";
import { RiCloseLine } from "react-icons/ri";
import { links } from "../assets/constants";
import { Link, NavLink } from "react-router-dom";

const NavLinks = ({ handleClick, mobileMenuOpen }) => {
  return (
    <>
      <div className="flex flex-col w-[60px] bg-[#1A1E1F] rounded-full gap-[30px] py-6 px-4 mt-[42px]">
        {links.slice(0, 4).map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.to}
              onClick={() => handleClick && handleClick()}
              className="flex justify-center fill-[#4F514F] hover:fill-[#474b4dd9]/[80%]"
            >
              <Icon className={`w-10 h-10 `} />
              {mobileMenuOpen && item.name}
            </NavLink>
          );
        })}
      </div>
      <div className="flex flex-col w-[60px] bg-[#1A1E1F] rounded-full mt-[20px] gap-[30px] py-6 px-4">
        {links.slice(4).map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.to}
              className="flex justify-center sidebarIcon fill-[#4F514F] hover:fill-[#474b4dd9]/[80%]"
              onClick={() => handleClick && handleClick()}
            >
              <Icon className={`w-10 h-10 `} />
            </NavLink>
          );
        })}
      </div>
    </>
  );
};

const NavLinkMobile = ({ handleClick, mobileMenuOpen }) => (
  <div className="flex flex-col w-full gap-[50px] py-6 px-4 mt-[30px]">
    {links.map((item) => {
      const Icon = item.icon;

      return (
        <NavLink
          key={item.name}
          to={item.to}
          onClick={() => handleClick && handleClick()}
          className="flex justify-start gap-5 items-center fill-[#4F514F] text-[#4F514F]"
        >
          <Icon className={`w-8 h-8`} />
          <p className={`text-lg `}>{item.name}</p>
        </NavLink>
      );
    })}
  </div>
);

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="md:flex hidden flex-col items-center w-[120px] py-5 px-5 h-screen sticky top-0 z-10">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className="w-[34px] h-[34px] object-contain cursor-pointer"
          />
        </Link>
        <NavLinks />
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden fixed top-6 left-[25px] z-30 flex">
        {mobileMenuOpen ? (
          <RiCloseLine
            className="w-6 h-6 text-white"
            onClick={() => setMobileMenuOpen(false)}
          />
        ) : (
          <div>
            <HiMenuAlt4
              className="w-6 h-6 text-white"
              onClick={() => setMobileMenuOpen(true)}
            />
          </div>
        )}
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className="w-[25px] h-[25px] object-contain cursor-pointer ml-5"
          />
        </Link>
      </div>

      <div
        className={`fixed md:hidden flex-col items-center w-2/3 py-7 px-5 h-screen top-[65px] z-30 bg-[#1d2123] smooth-transition ${
          mobileMenuOpen ? "left-0" : "-left-full"
        }`}
      >
        <NavLinkMobile handleClick={() => setMobileMenuOpen(false)} />
      </div>
    </>
  );
};

export default Sidebar;
