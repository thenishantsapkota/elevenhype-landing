import React, { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-inter"
      role="navigation"
    >
      <div className="flex justify-between w-full px-4 md:px-20 items-center">
        <a href="#home">
          <img src="/assets/icons/logo.png" alt="Logo" className="h-8" />
        </a>
        <div className="md:hidden" onClick={toggleMenu}>
          <button className="text-black focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
        <div className={`md:flex space-x-4 ${isOpen ? "block" : "hidden"}`}>
          <a
            href="#home"
            className="p-4 hover:text-[#C7952C] transition duration-300"
          >
            Home
          </a>
          <a
            href="#features"
            className="p-4 hover:text-[#C7952C] transition duration-300"
          >
            Features
          </a>
          <a
            href="#gallery"
            className="p-4 hover:text-[#C7952C] transition duration-300"
          >
            Gallery
          </a>
          <a
            href="#core-values"
            className="p-4 hover:text-[#C7952C] transition duration-300"
          >
            Our Core Values
          </a>
          <a
            href="#why-choose"
            className="p-4 hover:text-[#C7952C] transition duration-300"
          >
            Why Choose 11Hype
          </a>
          <a
            href="#how-it-works"
            className="p-4 hover:text-[#C7952C] transition duration-300"
          >
            How it Works
          </a>
          <a
            href="#contacts"
            className="p-4 hover:text-[#C7952C] transition duration-300"
          >
            Contacts
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <a
            className="bg-[#C7952C] text-white px-4 py-2 rounded-full cursor-pointer h-10"
            href="https://11hype.com/register"
            target="_blank"
            rel="noreferrer"
          >
            Join Now
          </a>
          <a
            className="border border-[#C7952C] text-[#C7952C] px-4 py-2 rounded-full hover:bg-[#C7952C] hover:text-white transition duration-300 cursor-pointer h-10"
            href="https://11hype.com/login"
            target="_blank"
          >
            Login
          </a>
          <div className="flex items-center space-x-2 border border-black rounded-full px-4">
            <img src="/assets/icons/globe.png" alt="Globe" className="h-5" />
            <select className="px-4 py-2 focus:outline-none">
              <option value="en">ENG</option>
              <option value="es">ES</option>
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
};
