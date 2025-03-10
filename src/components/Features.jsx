import React from "react";
import { useTranslation } from "react-i18next";

export const Features = () => {
  const { t } = useTranslation();
  const features = [
    {
      icon: "/assets/icons/calendar.png",
      title: t("features.one.title"),
      description: t("features.one.description"),
    },
    {
      icon: "/assets/icons/ai.png",
      title: t("features.two.title"),
      description: t("features.two.description"),
    },
    {
      icon: "/assets/icons/facility.png",
      title: t("features.three.title"),
      description: t("features.three.description"),
    },
    {
      icon: "/assets/icons/coin.png",
      title: t("features.four.title"),
      description: t("features.four.description"),
    },
    {
      icon: "/assets/icons/analytics.png",
      title: t("features.five.title"),
      description: t("features.five.description"),
    },
    {
      icon: "/assets/icons/messaging.png",
      title: t("features.six.title"),
      description: t("features.six.description"),
    },
  ];
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
        <h2 className="text-4xl font-extrabold text-center mb-16 text-[#C7952C]">
          {t("features.title")}
        </h2>
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
