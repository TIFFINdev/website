// src/components/Header.jsx

import React, { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { AiOutlineDown } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Header() {
  const [selectedLocation, setSelectedLocation] =
    useState("Rose Hill, Chennai");
  const [showDropdown, setShowDropdown] = useState(false);

  const locations = [
    "Rose Hill, Chennai",
    "Marina Beach, Chennai",
    "T Nagar, Chennai",
  ];

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    setShowDropdown(false);
  };

  return (
    <header className="bg-black flex justify-between items-center space-x-4 p-5 lg:px-[80px] lg:py-12 relative z-10">
      {/* Left section: Logo and Delivery info */}
      <div className="flex items-center space-x-3 lg:space-x-7 relative">
        {/* Logo */}
        <img
          src="../../images/logo_tiffin.png"
          alt="Logo"
          className="h-[43px] lg:h-14"
        />

        {/* Delivery Location */}
        <div className="text-white text-[12px] lg:text-xl relative">
          <div
            className="flex items-center cursor-pointer mb-2"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <span className="text-[13px] lg:text-[22px] font-bold">
              Delivery To
            </span>
            <AiOutlineDown className="text-[#FFCD29] ml-10 lg:ml-24 text-lg lg:text-xl" />
          </div>
          <div className="flex items-center">
            <FaMapMarkerAlt className="text-[#FFCD29] mr-1" />
            <span className="text-[13px] lg:text-lg">{selectedLocation}</span>
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

      {/* Center Section: Navigation Links */}
      <nav className="flex-grow md:flex justify-center space-x-8 lg:space-x-44 px-5">
        <Link
          to="/"
          className="text-white text-lg lg:text-3xl hover:text-[#FFCD29]"
        >
          Home
        </Link>
        <Link
          to="/meals"
          className="text-white text-lg lg:text-3xl hover:text-[#FFCD29]"
        >
          Meals
        </Link>
        <Link
          to="/nutrition"
          className="text-white text-lg lg:text-3xl hover:text-[#FFCD29]"
        >
          Nutrition
        </Link>
        <Link
          to="/login"
          className="text-white text-lg lg:text-3xl hover:text-[#FFCD29]"
        >
          Login
        </Link>
      </nav>

      {/* Right section: Profile Picture */}
      <div className="h-8 w-8 lg:h-12 lg:w-12 rounded-full overflow-hidden">
        <img
          src="../../images/profile_pic_placeholder.png"
          alt="Profile"
          className="h-full w-full object-cover"
        />
      </div>
    </header>
  );
}
