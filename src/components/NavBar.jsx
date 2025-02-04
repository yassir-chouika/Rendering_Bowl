import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faLaptopCode, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../context/ThemeContext.jsx";

const NavBar = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  return (
    <nav className="shadow-lg sticky top-2 left-0 right-0 z-10 bg-SlightlyBlack border-gray-200 dark:bg-gray-900 m-2 laptop:m-4 rounded-lg">
      <div className="w-full flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo Section */}
        <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/RenderBowlLogo.svg" className="w-10" alt="" />
          <span className="self-center text-white text-2xl font-semibold whitespace-nowrap">
            RenderBowl
          </span>
        </a>

        {/* Sun Icon Section */}
        <button
          onClick={toggleDarkMode}
          type="button"
          className="bg-PaletteTeal px-4 py-2 rounded-lg hidden md:block md:order-2 hover:bg-[#009198] focus:ring-4 focus:ring-[#00ADB5]/50"
        >
          {isDarkMode ? (
            <FontAwesomeIcon icon={faMoon} style={{ color: "#ffffff" }} />
          ) : (
            <FontAwesomeIcon icon={faSun} style={{ color: "#ffffff" }} />
          )}
        </button>

        {/* Mobile Menu: Sun Icon + Search Toggle */}
        <div className="flex items-center md:hidden">
          <button
            onClick={toggleDarkMode}
            type="button"
            className="bg-PaletteTeal px-4 py-2 rounded-lg hover:bg-[#009198] focus:ring-4 focus:ring-[#00ADB5]/50"
          >
            {isDarkMode ? (
              <FontAwesomeIcon icon={faMoon} style={{ color: "#ffffff" }} />
            ) : (
              <FontAwesomeIcon icon={faSun} style={{ color: "#ffffff" }} />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
