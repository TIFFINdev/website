import React, { useState } from "react";

import { Link } from "react-router-dom";

import { FaBars, FaTimes, FaMapMarkerAlt, FaChevronDown } from "react-icons/fa";

export default function Header() {
  const [selectedLocation, setSelectedLocation] =
    useState("Rose Hill, Chennai");

  const [showDropdown, setShowDropdown] = useState(false);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const locations = [
    "Rose Hill, Chennai",

    "Marina Beach, Chennai",

    "T Nagar, Chennai",
  ];

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);

    setShowDropdown(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-black flex justify-between items-center py-5 px-7 relative z-10 lg:px-16 lg:pt-10">
      {/* Logo and Delivery Info */}

      <div className="flex items-top space-x-3 lg:space-x-7">
        <img
          src="../../images/logo_tiffin.png"
          alt="Logo"
          className="h-[43px] sm:h-12 lg:h-14"
        />

        {/* Delivery Location */}

        <div className="text-white text-[12px] w-56 lg:text-xl relative">
          <div className="flex items-center cursor-pointer mb-2 ">
            <span className="text-[13px] sm:text-[18px] lg:text-[22px] font-bold pr-10 lg:pr-16">
              Delivery To
            </span>
            <FaChevronDown
              className="ml-2 text-[16px] sm:text-xl lg:text-[18px] text-[#FFCB25] "
              onClick={() => setShowDropdown(!showDropdown)}
            />
          </div>

          <div className="flex items-center w-[90%]">
            <FaMapMarkerAlt className=" text-[#FFCB25] size-[20px] lg:size-[30px] pr-2  lg:pr-4" />
            <span className="text-[13px] lg:text-[17px]">
              {selectedLocation}
            </span>
          </div>

          {showDropdown && (
            <div
              className="absolute top-full mt-2 bg-gray-800 rounded-lg shadow-lg w-48 py-2 z-20"
              style={{ maxHeight: "200px", overflowY: "auto" }}
            >
              {locations.map((location) => (
                <div
                  key={location}
                  className="px-4 py-2 hover:bg-gray-600 cursor-pointer"
                  onClick={() => handleLocationSelect(location)}
                >
                  {location}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu Button */}

      {/*<div className=" sm:hidden lg:hidden flex items-center justify-center ">
        <button onClick={toggleMobileMenu} className="text-white text-2xl">
          {isMobileMenuOpen ? "" : <FaBars />}
        </button>
      </div>*/}

      {/* Mobile Menu */}

      {/*{isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-20 flex flex-col items-center justify-center space-y-8">
          <div className="lg:hidden">
            <button onClick={toggleMobileMenu} className="text-white text-2xl">
              {isMobileMenuOpen ? FaTimes : ""}
            </button>
          </div>

          <Link
            to="/"
            className="text-white text-2xl hover:text-[#FFCD29]"
            onClick={toggleMobileMenu}
          >
            Home
          </Link>

          <Link
            to="/meals"
            className="text-white text-2xl hover:text-[#FFCD29]"
            onClick={toggleMobileMenu}
          >
            Meals
          </Link>

          <Link
            to="/nutrition"
            className="text-white text-2xl hover:text-[#FFCD29]"
            onClick={toggleMobileMenu}
          >
            Nutrition
          </Link>

          <Link
            to="/login"
            className="text-white text-2xl hover:text-[#FFCD29]"
            onClick={toggleMobileMenu}
          >
            Login
          </Link>
        </div>
      )}*/}

      {/* Desktop Menu */}

      {/*<nav className="hidden lg:font-medium lg:flex flex-grow justify-center space-x-8 lg:space-x-44 px-5"> */}

      <nav className=" font-medium  lg:font-medium lg:flex flex-grow justify-center space-x-6 lg:space-x-44 sm:space-x-16 lg:px-7 sm:px-5 pr-8">
        <Link
          to="/"
          className="text-white text-[16px] sm:text-2xl lg:text-3xl hover:text-[#FFCD29]"
        >
          Home
        </Link>

        <Link
          to="/meals"
          className="text-white text-[16px] sm:text-2xl lg:text-3xl hover:text-[#FFCD29]"
        >
          Meals
        </Link>

        <Link
          to="/nutrition"
          className="text-white text-[16px] sm:text-2xl lg:text-3xl hover:text-[#FFCD29]"
        >
          Nutrition
        </Link>

        <Link
          to="/login"
          className="text-white text-[16px] sm:text-2xl lg:text-3xl hover:text-[#FFCD29]"
        >
          Login
        </Link>
      </nav>

      {/* Profile Picture */}

      <div className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 rounded-full overflow-hidden flex-shrink-0">
        <img
          src="../../images/profile_pic_placeholder.png"
          alt="Profile"
          className="h-full w-full object-cover"
        />
      </div>
    </header>
  );
}
