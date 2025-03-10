import React from "react";

const breakDescription = (description) => {
  const words = description.split(" ");
  const half = Math.ceil(words.length / 1.5);
  return [words.slice(0, half).join(" "), words.slice(half).join(" ")].join(
    "\n"
  );
};

const features = [
  {
    name: "All-in-one Club Management",
    description: "Full suite for clubs and agencies",
    benefit: "Simplify club operations in one centralized platform.",
  },
  {
    name: "AI-Powered Scouting and Recruitment",
    description: "Advanced AI scouting tools",
    benefit: "Discover talent faster with data-driven insights.",
  },
  {
    name: "Real-Time Scheduling and Messaging",
    description: "Integrated communications tools",
    benefit: "Coordinate matches, training, and communication easily.",
  },
  {
    name: "Marketplace and Sponsorship",
    description: "Monetization tolls for clubs",
    benefit: "Unlock new revenue streams through sponsorships.",
  },
  {
    name: "Performance Analysis",
    description: "In-depth player and team analytics",
    benefit: "Track player and team performance with precision.",
  },
  {
    name: "Integrated Communication Tools",
    description: "Built-on messaging and chats",
    benefit: "Keep players, coaches, and staff connected in real-time.",
  },
  {
    name: "Revenue Generation Tools",
    description: "Sponsorship and merch sales",
    benefit: "Boost club income with branded merch and sponsors",
  },
  {
    name: "Multi-Device Compatibility",
    description: "Web, iOS and Android",
    benefit: "Access anytime, anywhere, on any device.",
  },
  {
    name: "Target Audience",
    description: "Clubs, Scouts, Players, Coaches, Agents and Agencies",
    benefit: "Tailored for the entire football ecosystem.",
    icon: "soccer",
  },
];

export const WhyChoose = () => {
  return (
    <section
      className="relative flex flex-col items-center justify-center py-16 gap-10"
      id="why-choose"
      style={{
        backgroundImage: "url(/assets/images/hero2.png)",
        backgroundSize: "cover",
      }}
    >
      <div className="relative w-full max-w-7xl mt-10">
        <div
          className="relative bg-cover bg-center px-6 py-8 text-center"
          style={{ backgroundImage: "url(/assets/icons/banner.png)" }}
        >
          <h2 className="text-white text-2xl md:text-3xl font-bold">
            WHY CHOOSE 11 HYPE?
          </h2>
          <p className="text-white text-sm md:text-base mt-2 whitespace-pre-line">
            {breakDescription(
              "See how 11 Hype stacks up against traditional tools and competitors — all-in-one management, AI scouting and monetization in one platform."
            )}
          </p>
        </div>
      </div>
      <div className="relative z-10 w-full max-w-7xl overflow-x-auto">
        <div className="min-w-[600px]">
          <div className="grid grid-cols-3">
            <div className="p-4 font-bold text-black bg-[#C8940D] relative">
              FEATURES
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-[#C8940D]"></div>
            </div>
            <div className="p-4 font-bold text-left text-black bg-[#F2F2F3] border-b border-[#D9D9D9]">
              11 HYPE
            </div>
            <div className="p-4 font-bold text-left text-black bg-[#F2F2F3] border-b  border-l border-[#D9D9D9]">
              BENEFITS
            </div>
          </div>

          {features.map((feature, index) => (
            <div
              key={index}
              className={`grid grid-cols-3 ${
                index === features.length - 1 ? "" : "border-b border-[#D9D9D9]"
              }`}
            >
              <div
                className={`p-4 font-medium text-white relative ${
                  index % 2 === 0 ? "bg-[#DBB34A]" : "bg-[#C8940D]"
                }`}
              >
                {feature.name}
              </div>

              <div
                className={`p-4 flex items-center justify-start relative ${
                  index % 2 === 0 ? "bg-[#F2F2F3]" : "bg-[#D9D9D9]"
                }`}
              >
                {feature.icon === "soccer" ? (
                  <div className="flex items-center gap-2">
                    <img
                      src="/assets/icons/soccer.svg"
                      alt="Soccer"
                      className="w-5 h-5"
                    />
                    <span className="text-sm">{feature.description}</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <img
                      src="/assets/icons/check.svg"
                      alt="Check"
                      className="w-5 h-5"
                    />
                    <span className="text-sm">{feature.description}</span>
                  </div>
                )}
              </div>

              <div
                className={`p-4 text-sm text-left ${
                  index % 2 === 0 ? "bg-[#F2F2F3]" : "bg-[#D9D9D9]"
                } border-l border-[#737373]`}
              >
                {feature.benefit}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
