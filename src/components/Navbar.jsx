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
      <div className="container mx-auto flex justify-between items-center px-4 md:px-10 lg:px-20 h-16">
        {/* Logo - Centered */}
        <a href="/" className="flex-shrink-0">
          <img
            src="/assets/icons/logo.png"
            alt="Logo"
            className="w-auto h-5 md:h-5"
          />
        </a>

        {/* Right Section (Desktop) */}
        <div className="hidden md:flex space-x-6 items-center flex-grow justify-center">
          {[
            { label: "home", link: "/" },
            { label: "features", link: "#features" },
            { label: "gallery", link: "#gallery" },
            { label: "core_values", link: "#core-values" },
            { label: "why_choose", link: "#why-choose" },
            { label: "how_it_works", link: "#how-it-works" },
            { label: "contacts", link: "#contacts" },
          ].map(({ label, link }) => (
            <a
              key={label}
              href={link}
              className="p-3 hover:text-[#C7952C] transition duration-300 whitespace-nowrap"
              onClick={(e) => (link === "/" ? null : handleLinkClick(e, link))}
            >
              {t(`navbar.${label}`)}
            </a>
          ))}
        </div>

        {/* Actions (Desktop) */}
        <div className="hidden md:flex items-center space-x-4 flex-shrink-0">
          <a
            className="bg-[#C7952C] text-white px-5 py-2 rounded-full h-10 whitespace-nowrap"
            href="https://11hype.com/register"
            target="_blank"
            rel="noreferrer"
          >
            Join Now
          </a>
          <a
            className="border border-[#C7952C] text-[#C7952C] px-5 py-2 rounded-full hover:bg-[#C7952C] hover:text-white transition duration-300 h-10 whitespace-nowrap"
            href="https://11hype.com/login"
            target="_blank"
            rel="noreferrer"
          >
            Login
          </a>
          <div className="flex items-center space-x-2 border border-black rounded-full px-5 py-2">
            <img src="/assets/icons/globe.png" alt="Globe" className="h-5" />
            <select
              className="bg-transparent focus:outline-none cursor-pointer"
              value={language}
              onChange={handleLanguageChange}
            >
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
            </select>
          </div>
        </div>

        {/* Hamburger Menu (Mobile) */}
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
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200">
          <div className="px-4 py-4 space-y-2">
            {[
              { label: "home", link: "#home" },
              { label: "features", link: "#features" },
              { label: "gallery", link: "#gallery" },
              { label: "core_values", link: "#core-values" },
              { label: "why_choose", link: "#why-choose" },
              { label: "how_it_works", link: "#how-it-works" },
              { label: "contacts", link: "#contacts" },
            ].map(({ label, link }) => (
              <a
                key={label}
                href={link}
                className="block p-2 hover:bg-gray-100 rounded"
                onClick={(e) => handleLinkClick(e, link)}
              >
                {t(`navbar.${label}`)}
              </a>
            ))}

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
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};


