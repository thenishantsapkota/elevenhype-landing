import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState(i18n.language);
  const [navbarHeight, setNavbarHeight] = useState(60);

  useEffect(() => {
    const updateNavbarHeight = () => {
      const nav = document.querySelector("nav");
      if (nav) {
        setNavbarHeight(nav.offsetHeight);
      }
    };

    updateNavbarHeight();
    window.addEventListener("resize", updateNavbarHeight);
    return () => window.removeEventListener("resize", updateNavbarHeight);
  }, []);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const handleLinkClick = (e, target) => {
    e.preventDefault();
    const element = document.querySelector(target);
    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({ top: elementPosition, behavior: "smooth" });
    }
    if (window.innerWidth < 768) {
      setIsOpen(false);
    }
  };

  const handleLanguageChange = (e) => {
    const newLanguage = e.target.value;
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-2">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Far Left */}
          <div className="flex-shrink-0">
            <a href="/">
              <img
                src="/assets/icons/logo.png"
                alt="Logo"
                className="w-auto h-6"
              />
            </a>
          </div>

          {/* Center Links - Desktop */}
          <div className="hidden md:flex flex-grow justify-center">
            <div className="flex items-center space-x-6 lg:space-x-8">
              {[
                { label: "home", link: "#home", value: "Home" },
                { label: "features", link: "#features", value: "Features" },
                { label: "gallery", link: "#gallery", value: "Gallery" },
                { label: "core_values", link: "#core-values", value: "Core Values" },
                { label: "why_choose", link: "#why-choose", value: "Why Choose" },
                { label: "how_it_works", link: "#how-it-works", value: "How it Works" },
                { label: "contacts", link: "#contact", value: "Contact" },
              ].map(({ label, link, value }) => (
                <a
                  key={label}
                  href={link}
                  className="p-2 hover:text-[#C7952C] transition duration-300 whitespace-nowrap text-sm lg:text-base"
                  onClick={(e) => link === "/" ? null : handleLinkClick(e, link)}
                >
                  {value}
                </a>
              ))}
            </div>
          </div>

          {/* Right Section - Desktop */}
          <div className="hidden md:flex items-center space-x-4 flex-shrink-0">
            <a
              className="bg-[#C7952C] text-white px-4 py-2 rounded-full text-sm whitespace-nowrap hover:bg-opacity-90 transition duration-300"
              href="https://11hype.com/register"
              target="_blank"
              rel="noreferrer"
            >
              Join Now
            </a>
            <a
              className="border border-[#C7952C] text-[#C7952C] px-4 py-2 rounded-full text-sm whitespace-nowrap hover:bg-[#C7952C] hover:text-white transition duration-300"
              href="https://11hype.com/login"
              target="_blank"
              rel="noreferrer"
            >
              Login
            </a>
            <div className="flex items-center space-x-2 border border-black rounded-full px-4 py-2">
              <img src="/assets/icons/globe.png" alt="Globe" className="h-4" />
              <select
                className="bg-transparent focus:outline-none cursor-pointer text-sm"
                value={language}
                onChange={handleLanguageChange}
              >
                <option value="en">ENG</option>
                <option value="es">ESP</option>
                <option value="fr">FRA</option>
              </select>
            </div>
          </div>

          {/* Hamburger Menu - Mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-black focus:outline-none p-2"
            >
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
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200">
          <div className="px-4 py-4 space-y-2">
            {[
              { label: "home", link: "#home", value: "Home" },
              { label: "features", link: "#features", value: "Features" },
              { label: "gallery", link: "#gallery", value: "Gallery" },
              { label: "core_values", link: "#core-values", value: "Our Core Values" },
              { label: "why_choose", link: "#why-choose", value: "Why Choose" },
              { label: "how_it_works", link: "#how-it-works", value: "How it Works" },
              { label: "contacts", link: "#contacts", value: "Contacts" },
            ].map(({ label, link, value }) => (
              <a
                key={label}
                href={link}
                className="block p-3 hover:bg-gray-100 rounded text-base"
                onClick={(e) => handleLinkClick(e, link)}
              >
                {value}
              </a>
            ))}

            {/* Mobile Actions */}
            <div className="mt-4 space-y-3 border-t border-gray-200 pt-4">
              <a
                className="block bg-[#C7952C] text-white text-center py-3 rounded-full hover:bg-opacity-90 transition duration-300"
                href="https://11hype.com/register"
                target="_blank"
                rel="noreferrer"
              >
                Join Now
              </a>
              <a
                className="block border border-[#C7952C] text-[#C7952C] text-center py-3 rounded-full hover:bg-[#C7952C] hover:text-white transition duration-300"
                href="https://11hype.com/login"
                target="_blank"
                rel="noreferrer"
              >
                Login
              </a>
              <div className="flex items-center justify-center space-x-2 border border-black rounded-full px-4 py-2">
                <img src="/assets/icons/globe.png" alt="Globe" className="h-5" />
                <select
                  className="bg-transparent focus:outline-none cursor-pointer text-base"
                  value={language}
                  onChange={handleLanguageChange}
                >
                  <option value="en">English</option>
                  <option value="es">Spanish</option>
                  <option value="fr">French</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};


