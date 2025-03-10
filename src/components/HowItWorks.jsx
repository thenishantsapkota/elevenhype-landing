import React, { useEffect, useState } from "react";

const cardContents = [
  {
    title: "Signup and Set up Club",
    content:
      "Create your club profile and invite your team members. Customize your club settings, rosters, and communication tools.",
  },
  {
    title: "Manage Teams & Facilities",
    content:
      "Schedule matches, practices, and events with ease. Oversee facility bookings, ensuring smooth club operations.",
  },
  {
    title: "Scout & Track Players with AI",
    content:
      "Discover top talent using AI-driven performance tracking. View real-time player statistics and recruitment insights.",
  },
  {
    title: "Monetize through Marketplace",
    content:
      "Sell branded club merchandise and secure sponsorships. Boost club revenue with built-in monetization tools.",
  },
];

export const HowItWorks = () => {
  const [expandedCards, setExpandedCards] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

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
          HOW IT WORKS
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
                  className={`absolute top-full left-0 w-full bg-white shadow-lg p-4 transition-all duration-300 overflow-hidden rounded-md ${
                    expandedCards.includes(index)
                      ? "max-h-96 opacity-100"
                      : "max-h-10 opacity-100"
                  }`}
                  style={{
                    height: expandedCards.includes(index) ? "auto" : "2.5rem",
                  }}
                >
                  <p
                    className={`text-gray-700 transition-all duration-300 ${
                      expandedCards.includes(index)
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
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
