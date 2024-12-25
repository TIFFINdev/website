import React from 'react';
import { User } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-yellow-400">
      <img src='/logo2.png' className="h-12 text-2xl font-bold"/>
      <div className="flex items-center gap-8">
        <a href="#" className="hover:text-gray-700">Home</a>
        <a href="#" className="hover:text-gray-700">Download</a>
        <a href="#" className="hover:text-gray-700">About us</a>
        <User className="w-6 h-6 cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;