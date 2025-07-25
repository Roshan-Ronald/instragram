import React from "react";
import { FiHeart, FiMessageCircle, FiPlusSquare } from "react-icons/fi";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center p-3 sm:p-4 border-b  max-w-4xl mx-auto bg-white px-4">
      <h1 className="text-lg sm:text-2xl font-bold select-none text-gray-900">Instagram</h1>
      <div className="flex gap-4 sm:gap-6 text-lg sm:text-2xl text-gray-900 cursor-pointer">
        <FiHeart className="hover:text-blue-500 transition-colors duration-300" />
        <FiMessageCircle className="hover:text-blue-500 transition-colors duration-300" />
      </div>
    </div>
  );
}
