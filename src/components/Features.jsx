import React from "react";

const features = [
  {
    icon: "/assets/icons/calendar.png",
    title: "Scheduling & Realtime Messaging",
    description:
      "Coordinate practices, matches, and events with seamless communication tools that keep your entire club connected.",
  },
  {
    icon: "/assets/icons/ai.png",
    title: "AI-Scouting & Recruitment Tools",
    description:
      "Identify rising stars and top talents using advanced performance analytics and data-driven insights.",
  },
  {
    icon: "/assets/icons/facility.png",
    title: "Club & Facility Management",
    description:
      "Manage teams, rosters, and facility bookings with intuitive scheduling tools designed for clubs of all sizes.",
  },
  {
    icon: "/assets/icons/coin.png",
    title: "Marketplace & Sponsorship Hub",
    description:
      "Monetize your club with branded merchandise, sponsorship opportunities, and a powerful marketplace.",
  },
  {
    icon: "/assets/icons/analytics.png",
    title: "Performance Analytics",
    description:
      "Dive deep into player and team stats with easy-to-understand performance tracking and analysis.",
  },
  {
    icon: "/assets/icons/messaging.png",
    title: "Integrated Communication",
    description:
      "Chat, share files, collaborate in real-time — all within the platform.",
  },
];

export const Features = () => {
  return (
    <section
      className="min-h-screen bg-white flex items-center"
      id="features"
      style={{
        backgroundImage: "url(/assets/images/features_bg.png)",
        backgroundSize: "cover",
      }}
    >
      <div className="container mx-auto px-8 py-16">
        <h2 className="text-4xl font-extrabold text-center mb-16 text-[#C7952C]">FEATURES</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-6">
              <img
                src={feature.icon}
                alt={feature.title}
                className="h-16 w-16 object-contain"
              />
              <div>
                <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
