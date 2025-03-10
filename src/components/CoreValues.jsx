import React from "react";
import { useTranslation } from "react-i18next";

const breakDescription = (description) => {
  const words = description.split(" ");
  const lines = [];
  for (let i = 0; i < words.length; i += 12) {
    lines.push(words.slice(i, i + 12).join(" "));
  }
  return lines.join("\n");
};

export const CoreValues = () => {
  const { t } = useTranslation();

  const coreValues = [
    {
      title: t("core_values.one.title"),
      description: t("core_values.one.description"),
    },
    {
      title: t("core_values.two.title"),
      description: t("core_values.two.description"),
    },
    {
      title: t("core_values.three.title"),
      description: t("core_values.three.description"),
    },
    {
      title: t("core_values.four.title"),
      description: t("core_values.four.description"),
    },
  ];
  return (
    <section
      className="py-16 bg-white"
      id="core-values"
      style={{
        backgroundImage: "url(/assets/images/features_bg.png)",
        backgroundSize: "cover",
      }}
    >
      <div className="container mx-auto px-8">
        <div className="flex justify-center mb-8">
          <img src="/assets/icons/line.svg" alt="Line" />
        </div>
        <h2 className="text-4xl font-extrabold text-center mb-12 text-[#C7952C]">
          {t("core_values.title")}
        </h2>
        <div className="flex flex-col space-y-18 items-center">
          {coreValues.map((value, index) => (
            <div key={index} className="flex flex-col items-center space-y-3">
              <h3 className="text-2xl font-semibold text-black text-center">
                {value.title}
              </h3>
              <p className="text-gray-700 whitespace-pre-line text-center">
                {breakDescription(value.description)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
