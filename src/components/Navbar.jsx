import React from "react";
import { User } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-12 py-4 bg-yellow-400">
      <img src="/logo2.png" className="h-16 text-xl font-bold" />
      <div className="flex items-center gap-28 text-2xl">
        <a href="#" className="hover:text-gray-700 font-medium">
          Home
        </a>
        <a href="#" className="hover:text-gray-700">
          Download
        </a>
        <a href="#" className="hover:text-gray-700">
          About us
        </a>
        <User className="w-8 h-8 cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
