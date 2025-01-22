import React, { useState } from "react";
import { User, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 lg:px-12 py-3">
      {/* Logo */}
      <img src="/logo.png" className="h-12 lg:h-16" alt="Logo" />

      {/* Hamburger menu for small screens */}
      <button
        className="lg:hidden text-gray-700 focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Links - Desktop */}
      <div className="hidden lg:flex items-center gap-16 text-lg">
        <a href="#" className="hover:text-gray-700 font-medium">
          Home
        </a>
        <a href="#" className="hover:text-gray-700">
          Download
        </a>
        <a href="#" className="hover:text-gray-700">
          About Us
        </a>
        <a href="#" className="hover:text-gray-700">
          <User className="w-5 h-5 inline-block mr-2" />
          Account
        </a>
      </div>

      {/* Links - Mobile */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 right-0 bg-yellow-400 flex flex-col items-center py-4 space-y-4 ">
          <a
            href="#"
            className="text-gray-700 hover:text-gray-900 font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-gray-900"
            onClick={() => setIsMenuOpen(false)}
          >
            Download
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-gray-900"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-gray-900 flex items-center"
            onClick={() => setIsMenuOpen(false)}
          >
            <User className="w-5 h-5 mr-2" />
            Account
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
