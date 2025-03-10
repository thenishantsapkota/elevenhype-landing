import React, { useState, useEffect, useRef } from "react";

const images = [
  {
    src: "/assets/images/hero1.png",
    title: "Transforming Football Clubs",
    subtitle: "With AI-Powered Insights",
    description: "Elevate your club's performance with cutting-edge tools for scouting, scheduling, and management."
  },
  {
    src: "/assets/images/hero2.png",
    title: "Elevate your Game, Empower Your Club",
    subtitle: "From Scouting to Sponsorship",
    description: "From scouting to sponsorships - unlock the full potential of your football club with cutting-edge analytics and seamless management tools."
  },
  {
    src: "/assets/images/hero3.png",
    title: "The Future of Football Starts Here",
    subtitle: "Intelligent scouting, performance analytics, and real-time communication",
    description: "11 Hype helps clubs and agencies discover top talent, analyze team performance, and stay connected with players, fans, and sponsors. Say goodbye to outdated management and hello to innovation."
  }
];

export const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const intervalRef = useRef(null);

  const startInterval = () => {
    clearInterval(intervalRef.current); 
    intervalRef.current = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);
  };

  useEffect(() => {
    startInterval();
    return () => clearInterval(intervalRef.current); 
  }, []);

  const handleSelectImage = (index) => {
    setCurrentImage(index);
    startInterval(); 
  };

  return (
    <section className="relative flex items-center justify-start bg-gray-100" style={{ height: 'calc(100vh - 4rem)' }} id="home">
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt="Hero"
            className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
      </div>
      <div className="relative z-10 text-left p-8 ml-4 md:ml-25 max-w-2xl">
        <h1 className="text-4xl md:text-[58px] font-bold text-white mb-4 break-words">{images[currentImage].title}</h1>
        <h2 className="text-2xl md:text-[30px] font-normal text-white mb-6 break-words">{images[currentImage].subtitle}</h2>
        <p className="text-lg md:text-[24px] font-normal text-gray-200 mb-6 break-words">{images[currentImage].description}</p>
        <button className="bg-[#C7952C] text-white px-6 md:px-8 py-3 md:py-4 rounded text-base md:text-lg cursor-pointer">
          Watch Demo Video
        </button>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-4 h-4 rounded-full cursor-pointer ${
              currentImage === index ? "bg-[#C7952C] ring-2 ring-white" : "bg-gray-300"
            }`}
            style={{ width: '1rem', height: '1rem' }}
            onClick={() => handleSelectImage(index)}
          ></button>
        ))}
      </div>
    </section>
  );
};
