import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export const CloserLook = () => {
  const { t } = useTranslation();
  const [previewImage, setPreviewImage] = useState(null);

  const openPreview = (image) => {
    setPreviewImage(image);
  };

  const closePreview = () => {
    setPreviewImage(null);
  };

  const images = [
    {
      src: "/assets/images/closer_look_1.png",
      text: t("closer_look.one.text"),
    },
    {
      src: "/assets/images/closer_look_2.png",
      text: t("closer_look.two.text"),
    },
    {
      src: "/assets/images/closer_look_3.png",
      text: t("closer_look.three.text"),
    },
    {
      src: "/assets/images/closer_look_4.png",
      text: t("closer_look.four.text"),
    },
    {
      src: "/assets/images/closer_look_5.png",
      text: t("closer_look.five.text"),
    },
    {
      src: "/assets/images/closer_look_6.png",
      text: t("closer_look.six.text"),
    },
  ];

  return (
    <section
      className="min-h-[120vh] bg-[#F6F6F6] flex items-center mt-4 md:mt-0"
      id="gallery"
    >
      <div className="container mx-auto px-8">
        <h2 className="text-4xl font-extrabold text-center mb-4 text-[#C7952C]">
          {t("closer_look.title")}
        </h2>
        <p className="text-lg text-center mb-12 text-[#595959]">
          {t("closer_look.subtitle")}
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
