import logo from "../assets/img/logo.svg";
import { RiCloseLine } from "react-icons/ri";
import { HiOutlineMenu, HiMenuAlt4 } from "react-icons/hi";

import { NavLink } from "react-router-dom";
import { links } from "../assets/constants";
import { useState } from "react";

import { ReactComponent as Home } from "../assets/img/Home-1.svg";

const NavLinks = ({
  handleClick,
  mobileMenuOpen,
  activePage,
  handleLinkClick,
}) => {
  return (
    <>
      <div className="flex flex-col w-[60px] bg-[#1A1E1F] rounded-3xl gap-[30px] py-6 px-4 mt-[30px]">
        {links.slice(0, 4).map((item) => {
          const Icon = item.icon;
          const isActive = activePage === item.name;
          return (
            <NavLink
              key={item.name}
              to={item.to}
              // onClick={() => handleClick && handleClick()}
              onClick={() => handleLinkClick(item.name)}
              className="flex justify-center"
            >
              {/* <img className="w-10- h-10 text-black" alt="" src={item.icon} /> */}
              <Icon
                className={`${
                  isActive ? "fill-[#FACD66]" : "fill-[#4F514F]"
                } w-10 h-10`}
              />
              {mobileMenuOpen && item.name}
            </NavLink>
          );
        })}
      </div>
      <div className="flex flex-col w-[60px] bg-[#1A1E1F] rounded-3xl mt-[20px] gap-[30px] py-6 px-4">
        {links.slice(4).map((item) => {
          const Icon = item.icon;
          const isActive = activePage === item.name;

          return (
            <NavLink
              key={item.name}
              to={item.to}
              onClick={() => handleLinkClick(item.name)}
              className="flex justify-center sidebarIcon"
              // onClick={() => handleClick && handleClick()}
              // ${isActive ? "active" : "sidebarIcon"}
            >
              <Icon className={`w-10 h-10 `} />
            </NavLink>
          );
        })}
      </div>
    </>
  );
};

const NavLinkMobile = ({
  handleClick,
  mobileMenuOpen,
  activePage,
  handleLinkClick,
}) => (
  <div className="flex flex-col w-full gap-[50px] py-6 px-4 mt-[30px]">
    {links.map((item) => {
      const Icon = item.icon;
      const isActive = activePage === item.name;

      return (
        <NavLink
          key={item.name}
          to={item.to}
          // onClick={() => handleClick && handleClick()}
          onClick={() => handleLinkClick(item.name)}
          className="flex justify-start gap-5  items-center"
        >
          <Icon fill="#4F514F" className={`fill-[#4F514F] w-8 h-8`} />
          <div
            // className="text-[#EFEEE0]/25 text-lg"
            className={` text-lg ${
              isActive ? "text-[#FACD66]" : "text-[#EFEEE0]/25"
            } `}
          >
            {item.name}
          </div>
        </NavLink>
      );
    })}
  </div>
);

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState(""); // Initialize activePage state variable as empty string
  const handleLinkClick = (name) => {
    setActivePage(name); // Update activePage state variable on link click
    setMobileMenuOpen(false);
  };

  return (
    <>
      <div className="md:flex hidden flex-col items-center w-[120px] py-7 px-5 h-screen sticky top-0 z-10">
        <img
          src={logo}
          alt="logo"
          className="w-[34px] h-[34px] object-contain "
        />
        <NavLinks activePage={activePage} handleLinkClick={handleLinkClick} />
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
        <NavLinkMobile
          handleClick={() => setMobileMenuOpen(false)}
          activePage={activePage}
          handleLinkClick={handleLinkClick}
        />
      </div>
    </>
  );
};

export default Sidebar;
