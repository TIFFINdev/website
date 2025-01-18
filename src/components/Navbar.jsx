import React from "react";
import { User } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-12 py-1 ">
      <img src="/logo.png" className="h-16 text-xl font-bold" />
      <div className="flex items-center gap-28 text-lg">
        <a href="#" className="hover:text-gray-700 font-medium">
          Home
        </a>
        <a href="#" className="hover:text-gray-700">
          Download
        </a>
        <a href="#" className="hover:text-gray-700">
          About us
        </a>
        <a href="#"><i class="fa fa-user"></i></a>
      </div>
    </nav>
  );
};

export default Navbar;
