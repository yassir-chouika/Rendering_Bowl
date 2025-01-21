import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faSun,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <nav className="shadow-lg sticky top-2 left-0 right-0 z-10 bg-SlightlyBlack border-gray-200 dark:bg-gray-900 m-2 laptop:m-4 rounded-lg">
      <div className="w-full flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo Section */}
        <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
          <FontAwesomeIcon
            icon={faLaptopCode}
            size="2xl"
            style={{ color: "#00ADB5" }}
          />
          <span className="self-center text-white text-2xl font-semibold whitespace-nowrap dark:text-black">
            RenderBowl
          </span>
        </a>

        {/* Search Bar Section */}
        <div className="relative  md:order-1 hidden md:block">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              style={{ color: "#a4a4a4" }}
            />
          </div>
          <input
            type="text"
            id="search-navbar"
            className="block w-56 p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search..."
          />
        </div>

        {/* Sun Icon Section */}
        <button className="bg-PaletteTeal px-4 py-2 rounded-lg hidden md:block md:order-2 hover:bg-[#009198] focus:ring-4 focus:ring-[#00ADB5]/50">
          <FontAwesomeIcon icon={faSun} style={{ color: "#ffffff" }} />
        </button>

        {/* Mobile Menu: Sun Icon + Search Toggle */}
        <div className="flex items-center md:hidden">
          <button
            type="button"
            data-collapse-toggle="navbar-search"
            aria-controls="navbar-search"
            aria-expanded="false"
            className="mr-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm px-4 py-2"
          >
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              size="lg"
              style={{ color: "#ffffff" }}
            />
            <span className="sr-only">Search</span>
          </button>
          <button className="bg-PaletteTeal px-4 py-2 rounded-lg">
            <FontAwesomeIcon icon={faSun} style={{ color: "#ffffff" }} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
