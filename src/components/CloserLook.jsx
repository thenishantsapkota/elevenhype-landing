import React, { useState } from "react";

const images = [
  {
    src: "/assets/images/closer_look_1.png",
    text: "Comprehensive scheduling for matches, practices and events. Easily manage recurring practice sessions and game schedules",
  },
  {
    src: "/assets/images/closer_look_2.png",
    text: "Track facility usage and availability. Assign and manage facility access for teams, coaches, and staff. Simplify maintenance requests with integrated issue",
  },
  {
    src: "/assets/images/closer_look_3.png",
    text: "Team/player communication with built-in translations. Instant group messaging with read receipts for better accountability. Share training schedules, match updates, and announcements in one place.",
  },
  {
    src: "/assets/images/closer_look_4.png",
    text: "Social media tools for sharing highlights and connecting.",
  },
  {
    src: "/assets/images/closer_look_5.png",
    text: "Robust marketplace for Training, Equipment and Services. Upcoming branded marketplace stores for clubs (coming soon).",
  },
  {
    src: "/assets/images/closer_look_6.png",
    text: "It is thoughtfully designed as a centralized hub for football enthusiasts, integrating the best aspects of advanced technology into a single, cohesive platform.",
  },
];

export const CloserLook = () => {
  const [previewImage, setPreviewImage] = useState(null);

  const openPreview = (image) => {
    setPreviewImage(image);
  };

  const closePreview = () => {
    setPreviewImage(null);
  };

  return (
    <section
      className="min-h-[120vh] bg-[#F6F6F6] flex items-center mt-4 md:mt-0"
      id="gallery"
    >
      <div className="container mx-auto px-8">
        <h2 className="text-4xl font-extrabold text-center mb-4 text-[#C7952C]">
          A CLOSER LOOK AT 11 HYPE IN ACTION
        </h2>
        <p className="text-lg text-center mb-12 text-[#595959]">
          Explore the powerful tools designed to streamline your club
          management, scouting, and monetization.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative flex justify-center group cursor-pointer"
              onClick={() => openPreview(image)}
            >
              <img
                src={image.src}
                alt={`Closer Look ${index + 1}`}
                className="object-cover w-full h-full rounded-md"
              />
              <div className="absolute bottom-0 left-0 w-full h-0 group-hover:h-3/5 bg-gradient-to-t from-black to-transparent transition-all duration-300 rounded-md">
                <div className="absolute bottom-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-center">
                  <span className="mb-4"> {image.text}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {previewImage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative w-11/12 md:w-4/5 h-4/5 flex items-center justify-center">
            <button
              className="absolute top-4 right-4 text-black bg-white rounded-full p-2 z-51 cursor-pointer w-6 h-6 flex items-center justify-center"
              onClick={closePreview}
            >
              &times;
            </button>
            <div className="relative w-full h-full">
              <img
                src={previewImage.src}
                alt="Preview"
                className="object-contain w-full h-full rounded-md"
              />
              <div className="absolute bottom-0 left-0 w-full h-1/5 bg-gradient-to-t from-black to-transparent rounded-md">
                <div className="absolute bottom-0 p-4 text-white flex items-end text-center h-full">
                  {previewImage.text}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
