import React, { useState } from "react";

import { Link } from "react-router-dom";

import { FaBars, FaTimes } from "react-icons/fa";



export default function Header() {

  const [selectedLocation, setSelectedLocation] = useState("Rose Hill, Chennai");

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

    <header className="bg-black flex justify-between items-center p-5 relative z-10">

      {/* Logo and Delivery Info */}

      <div className="flex items-center space-x-3 lg:space-x-7">

        <img

          src="../../images/logo_tiffin.png"

          alt="Logo"

          className="h-[43px] lg:h-14"

        />



        {/* Delivery Location */}

        <div className="text-white text-[12px] w-56 lg:text-xl relative">

          <div

            className="flex items-center cursor-pointer mb-2"

            onClick={() => setShowDropdown(!showDropdown)}

          >

            <span className="text-[13px] lg:text-[22px] font-bold">Delivery To</span>

          </div>

          <div className="flex items-center w-[90%]">

            <span className="text-[13px] lg:text-lg">{selectedLocation}</span>

          </div>

          {showDropdown && (

            <div className="absolute top-full mt-2 bg-gray-800 rounded-lg shadow-lg w-48 py-2 z-20" style={{ maxHeight: "200px", overflowY: "auto" }}>

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

      <div className="lg:hidden flex items-center justify-center ">

        <button onClick={toggleMobileMenu} className="text-white text-2xl">

          {isMobileMenuOpen ? "" : <FaBars />}

        </button>

      </div>



      {/* Mobile Menu */}

      {isMobileMenuOpen && (

        

        <div className="fixed inset-0 bg-black bg-opacity-90 z-20 flex flex-col items-center justify-center space-y-8">

          <div className="lg:hidden">

        <button onClick={toggleMobileMenu} className="text-white text-2xl">

          {isMobileMenuOpen ? FaTimes : ""}

        </button>

      </div>

          <Link to="/" className="text-white text-2xl hover:text-[#FFCD29]" onClick={toggleMobileMenu}>Home</Link>

          <Link to="/meals" className="text-white text-2xl hover:text-[#FFCD29]" onClick={toggleMobileMenu}>Meals</Link>

          <Link to="/nutrition" className="text-white text-2xl hover:text-[#FFCD29]" onClick={toggleMobileMenu}>Nutrition</Link>

          <Link to="/login" className="text-white text-2xl hover:text-[#FFCD29]" onClick={toggleMobileMenu}>Login</Link>

        </div>

      )}



      {/* Desktop Menu */}

      <nav className="hidden lg:flex flex-grow justify-center space-x-8 lg:space-x-44 px-5">

        <Link to="/" className="text-white text-lg lg:text-3xl hover:text-[#FFCD29]">Home</Link>

        <Link to="/meals" className="text-white text-lg lg:text-3xl hover:text-[#FFCD29]">Meals</Link>

        <Link to="/nutrition" className="text-white text-lg lg:text-3xl hover:text-[#FFCD29]">Nutrition</Link>

        <Link to="/login" className="text-white text-lg lg:text-3xl hover:text-[#FFCD29]">Login</Link>

      </nav>



      {/* Profile Picture */}

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

