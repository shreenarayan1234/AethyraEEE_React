import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import eee from "../assets/3e.png";
import { MenuItems } from "./MenuItems";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${
      scrolled 
        ? "bg-white/90 backdrop-blur-md shadow-lg py-0" 
        : "bg-white/70 backdrop-blur-sm shadow-md py-2"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo with hover effect */}
          <Link 
            to="/" 
            className="flex items-center gap-3 group"
            aria-label="Home"
          >
            <div className="w-[50px] h-[50px] transition-all duration-300 group-hover:scale-105">
              <img 
                src={eee} 
                alt="3E Entertainment Logo" 
                className="object-contain h-full w-full drop-shadow-md" 
              />
            </div>
            <h1 className="text-xl font-extrabold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent hidden sm:block transition-all duration-300 group-hover:scale-[1.02]">
              3E Entertainment
            </h1>
          </Link>

          {/* Desktop Menu with animated underline */}
          <div className="hidden md:flex space-x-6">
            {MenuItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className={`relative px-1 py-2 text-gray-700 hover:text-red-600 transition duration-300 text-md font-medium group ${
                  location.pathname === item.path ? "text-red-600" : ""
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-lg transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                  </span>
                  {item.title}
                </div>
                <span className={`absolute bottom-0 left-0 h-0.5 bg-red-600 transition-all duration-300 ease-out ${
                  location.pathname === item.path ? "w-full" : "w-0 group-hover:w-full"
                }`}></span>
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger with animation */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-all duration-300"
              aria-label="Toggle menu"
            >
              <div className={`w-7 h-7 relative transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`}>
                <span className={`absolute block w-full h-0.5 bg-current transform transition duration-300 ${
                  isOpen ? "rotate-45 top-1/2" : "top-1/4"
                }`}></span>
                <span className={`absolute block w-full h-0.5 bg-current transform transition duration-300 ${
                  isOpen ? "opacity-0" : "top-1/2"
                }`}></span>
                <span className={`absolute block w-full h-0.5 bg-current transform transition duration-300 ${
                  isOpen ? "-rotate-45 top-1/2" : "top-3/4"
                }`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu with smooth animation */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
        }`}>
          <div className="bg-white rounded-lg shadow-xl p-4 space-y-4">
            {MenuItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-300 ${
                  location.pathname === item.path 
                    ? "bg-red-50 text-red-600 font-semibold" 
                    : "text-gray-700 hover:bg-gray-50 hover:text-red-600"
                }`}
              >
                <span className="text-xl flex-shrink-0">{item.icon}</span>
                <span className="text-base">{item.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;