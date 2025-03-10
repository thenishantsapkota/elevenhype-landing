import React from "react";

const coreValues = [
  {
    title: "Empowering Football Communities",
    description:
      "We are dedicated to helping clubs, coaches, scouts, and players thrive by providing tools that streamline management and enhance collaboration.",
  },
  {
    title: "Innovation at Our Core",
    description:
      "We leverage cutting-edge technology, including AI and analytics, to revolutionize the way football clubs operate and grow.",
  },
  {
    title: "Connection & Growth",
    description:
      "Our platform bridges gaps, connecting clubs, scouts, players, and agents globally to strengthen collaboration and grow the football community.",
  },
  {
    title: "Transparency & Integrity",
    description:
      "We value honesty and transparency, ensuring clubs and players have access to clear data, fair opportunities, and reliable tools.",
  },
  {
    title: "Supporting Club Growth",
    description:
      "Through our integrated marketplace and sponsorship hub, we help clubs unlock new revenue streams and grow sustainably.",
  },
];

const breakDescription = (description) => {
  const words = description.split(" ");
  const lines = [];
  for (let i = 0; i < words.length; i += 12) {
    lines.push(words.slice(i, i + 12).join(" "));
  }
  return lines.join("\n");
};

export const CoreValues = () => {
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
          <img src="/assets/icons/line.svg" alt="Line"/>
        </div>
        <h2 className="text-4xl font-extrabold text-center mb-12 text-[#C7952C]">
          Our Core Values
        </h2>
        <div className="flex flex-col space-y-18 items-center">
          {coreValues.map((value, index) => (
            <div key={index} className="flex flex-col items-center space-y-3">
              <h3 className="text-2xl font-semibold text-black">
                {value.title}
              </h3>
              <p className="text-gray-700 whitespace-pre-line text-center">{breakDescription(value.description)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
