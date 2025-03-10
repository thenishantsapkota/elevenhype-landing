import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState(i18n.language);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleLinkClick = (e, target) => {
    e.preventDefault();
    const element = document.querySelector(target);
    if (element) {
      const navbarHeight = document.querySelector("nav")?.offsetHeight || 60;
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
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Desktop Navbar */}
      <div className="container mx-auto flex justify-between items-center px-4 md:px-20 h-16">
        {/* Logo */}
        <a href="#home" >
        <img src="/assets/icons/logo.png" alt="Logo" className="w-auto h-auto" />
        </a>

        {/* Hamburger Icon (Mobile Only) */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
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

        {/* Desktop Menu */}
        <div className={`hidden md:flex space-x-4 flex-nowrap items-center flex-grow ${isOpen ? 'flex' : 'hidden'}`}>
          <a
            href="#home"
            className="p-4 hover:text-[#C7952C] transition duration-300 whitespace-nowrap"
            onClick={(e) => handleLinkClick(e, "#home")}
          >
            {t("navbar.home")}
          </a>
          <a
            href="#features"
            className="p-4 hover:text-[#C7952C] transition duration-300 whitespace-nowrap"
            onClick={(e) => handleLinkClick(e, "#features")}
          >
            {t("navbar.features")}
          </a>
          <a
            href="#gallery"
            className="p-4 hover:text-[#C7952C] transition duration-300 whitespace-nowrap"
            onClick={(e) => handleLinkClick(e, "#gallery")}
          >
            {t("navbar.gallery")}
          </a>
          <a
            href="#core-values"
            className="p-4 hover:text-[#C7952C] transition duration-300 whitespace-nowrap"
            onClick={(e) => handleLinkClick(e, "#core-values")}
          >
            {t("navbar.core_values")}
          </a>
          <a
            href="#why-choose"
            className="p-4 hover:text-[#C7952C] transition duration-300 whitespace-nowrap"
            onClick={(e) => handleLinkClick(e, "#why-choose")}
          >
            {t("navbar.why_choose")}
          </a>
          <a
            href="#how-it-works"
            className="p-4 hover:text-[#C7952C] transition duration-300 whitespace-nowrap"
            onClick={(e) => handleLinkClick(e, "#how-it-works")}
          >
            {t("navbar.how_it_works")}
          </a>
          <a
            href="#contacts"
            className="p-4 hover:text-[#C7952C] transition duration-300 whitespace-nowrap"
            onClick={(e) => handleLinkClick(e, "#contacts")}
          >
            {t("navbar.contacts")}
          </a>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            className="bg-[#C7952C] text-white px-4 py-2 rounded-full h-10 whitespace-nowrap"
            href="https://11hype.com/register"
            target="_blank"
            rel="noreferrer"
          >
            Join Now
          </a>
          <a
            className="border border-[#C7952C] text-[#C7952C] px-4 py-2 rounded-full hover:bg-[#C7952C] hover:text-white transition duration-300 h-10 whitespace-nowrap"
            href="https://11hype.com/login"
            target="_blank"
            rel="noreferrer"
          >
            Login
          </a>
          <div className="flex items-center space-x-2 border border-black rounded-full px-6">
            <img src="/assets/icons/globe.png" alt="Globe" className="h-5" />
            <select
              className="px-4 py-2 focus:outline-none cursor-pointer"
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

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200">
          <div className="px-4 py-4 space-y-2">
            <a
              href="#home"
              className="block p-2 hover:bg-gray-100 rounded"
              onClick={(e) => handleLinkClick(e, "#home")}
            >
              {t("navbar.home")}
            </a>
            <a
              href="#features"
              className="block p-2 hover:bg-gray-100 rounded"
              onClick={(e) => handleLinkClick(e, "#features")}
            >
              {t("navbar.features")}
            </a>
            <a
              href="#gallery"
              className="block p-2 hover:bg-gray-100 rounded"
              onClick={(e) => handleLinkClick(e, "#gallery")}
            >
              {t("navbar.gallery")}
            </a>
            <a
              href="#core-values"
              className="block p-2 hover:bg-gray-100 rounded"
              onClick={(e) => handleLinkClick(e, "#core-values")}
            >
              {t("navbar.core_values")}
            </a>
            <a
              href="#why-choose"
              className="block p-2 hover:bg-gray-100 rounded"
              onClick={(e) => handleLinkClick(e, "#why-choose")}
            >
              {t("navbar.why_choose")}
            </a>
            <a
              href="#how-it-works"
              className="block p-2 hover:bg-gray-100 rounded"
              onClick={(e) => handleLinkClick(e, "#how-it-works")}
            >
              {t("navbar.how_it_works")}
            </a>
            <a
              href="#contacts"
              className="block p-2 hover:bg-gray-100 rounded"
              onClick={(e) => handleLinkClick(e, "#contacts")}
            >
              {t("navbar.contacts")}
            </a>

            {/* Mobile Actions */}
            <div className="mt-4 space-y-2 border-t border-gray-200 pt-4">
              <a
                className="block bg-[#C7952C] text-white text-center py-2 rounded-full"
                href="https://11hype.com/register"
                target="_blank"
                rel="noreferrer"
              >
                Join Now
              </a>
              <a
                className="block border border-[#C7952C] text-[#C7952C] text-center py-2 rounded-full hover:bg-[#C7952C] hover:text-white transition duration-300"
                href="https://11hype.com/login"
                target="_blank"
                rel="noreferrer"
              >
                Login
              </a>
              <div className="flex items-center justify-center border border-black rounded-full px-4 py-2">
                <img
                  src="/assets/icons/globe.png"
                  alt="Globe"
                  className="h-5"
                />
                <select
                  className="px-2 focus:outline-none cursor-pointer"
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
