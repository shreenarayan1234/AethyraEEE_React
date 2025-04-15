import React, { useState } from "react";
import { Link } from "react-router-dom";
import eee from "../assets/3e.png";
import { MenuItems } from "./MenuItems";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/70 backdrop-blur-md shadow-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-[60px] h-[60px]">
              <img src={eee} alt="3E Entertainment Logo" className="object-contain h-full w-full" />
            </div>
            <h1 className="text-xl font-extrabold text-red-600 hidden sm:block">3E Entertainment</h1>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {MenuItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="flex items-center gap-2 text-gray-700 hover:text-red-600 transition duration-300 text-md font-medium"
              >
                <span className="text-lg">{item.icon}</span>
                {item.title}
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-red-600 focus:outline-none"
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white mt-2 rounded-md shadow-md p-4 space-y-3 animate-fadeIn">
            {MenuItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="flex items-center gap-2 text-gray-700 hover:text-red-600 transition duration-300 text-base font-medium"
                onClick={() => setIsOpen(false)} // close menu on selection
              >
                <span className="text-xl">{item.icon}</span>
                {item.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
