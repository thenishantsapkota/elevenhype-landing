import React, { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";

export const HowItWorks = () => {
  const { t } = useTranslation();
  const [expandedCards, setExpandedCards] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const contentRefs = useRef([]);
  const [maxHeight, setMaxHeight] = useState(0);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  const handleMouseEnter = (index) => {
    setExpandedCards((prev) => [...new Set([...prev, index])]);
  };

  const cardContents = [
    {
      title: t("how_it_works.one.title"),
      content: t("how_it_works.one.content"),
    },
    {
      title: t("how_it_works.two.title"),
      content: t("how_it_works.two.content"),
    },
    {
      title: t("how_it_works.three.title"),
      content: t("how_it_works.three.content"),
    },
    {
      title: t("how_it_works.four.title"),
      content: t("how_it_works.four.content"),
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      if (contentRefs.current.length) {
        const heights = contentRefs.current.map((ref) => ref?.scrollHeight || 0);
        setMaxHeight(Math.max(...heights)); 
      }
    }, 100);
  }, [t, expandedCards]);

  return (
    <section
      className="relative flex items-center justify-center h-auto bg-white"
      id="how-it-works"
      style={{
        backgroundImage: "url(/assets/images/working_bg.png)",
        backgroundSize: "cover",
      }}
    >
      <div className="relative w-full max-w-7xl py-52 mb-20">
        <h2 className="text-[#C7952C] text-2xl md:text-3xl font-bold text-center">
          {t("how_it_works.title")}
        </h2>
        <img
          src="/assets/images/working.png"
          alt="How It Works"
          className="mx-auto mt-10"
        />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center mt-10 max-w-4xl mx-auto">
          {cardContents.map((card, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => handleMouseEnter(index)}
            >
              <h3 className="text-2xl font-semibold text-[#797979] mb-4">
                {card.title}
              </h3>
              {!isMobile && (
                <div
                  ref={(el) => (contentRefs.current[index] = el)}
                  className={`absolute top-full left-0 w-full bg-white shadow-lg p-4 transition-all duration-300 overflow-hidden rounded-md`}
                  style={{
                    height: expandedCards.includes(index) ? `${maxHeight}px` : "3.5rem",
                    maxHeight: expandedCards.includes(index) ? `${maxHeight}px` : "3.5rem",
                    opacity: expandedCards.includes(index) ? 1 : 1,
                  }}
                >
                  <p
                    className="text-gray-700 transition-all duration-300"
                    style={{
                      opacity: expandedCards.includes(index) ? 1 : 0,
                    }}
                  >
                    {card.content}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
