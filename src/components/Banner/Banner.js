// import React from "react";
import React, {useState, useEffect} from "react";
import image1 from "../../assets/about2.png";
import image2 from "../../assets/hendrex2.jpg";
import image3 from "../../assets/hero1.jpeg";
import image4 from "../../assets/hero2.jpg";
import image5 from "../../assets/hero3.jpeg";
import image6 from "../../assets/hero4.jpg";

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Content for each slide - images and corresponding messages
  const slides = [
    {
      image: image1,
      title: "Transforming Visionary Ideas",
      subtitle: "Into Reality Through Precision And Bold Innovation",
    },
    {
      image: image2,
      title: "Engineering Excellence",
      subtitle: "Building Tomorrow's Solutions Today",
    },
    {
      image: image3,
      title: "Innovative Design",
      subtitle: "Where Creativity Meets Technical Precision",
    },
    {
      image: image4,
      title: "Global Impact",
      subtitle: "Engineering Solutions That Shape The Future",
    },
    {
      image: image5,
      title: "Precision in Motion",
      subtitle: "Building Foundations for a Sustainable Tomorrow",
    },
    {
      image: image6,
      title: "Beyond Boundaries",
      subtitle: "Engineering Masterpieces That Define Excellence",
    },
  ];

  useEffect(() => {
    const transitionInterval = setInterval(() => {
      setIsTransitioning(true);
      
      setTimeout(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
        setIsTransitioning(false);
      }, 1750);
      
    }, 7000);

    return () => clearInterval(transitionInterval);
  }, []);

  return (
    <div className="tailwind">
      <div className="relative w-full h-screen overflow-hidden">
        {/* Background container */}
        <div
          className={`absolute inset-0 w-full h-full transition-transform duration-7500
          ${isTransitioning ? "scale-110 opacity-0.1" : "scale-100 opacity-100"}
        `}
          style={{
            transitionProperty: "transform, opacity",
            transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          {/* Current image */}
          <div
            className="absolute inset-0 bg-center bg-cover w-full h-full"
            style={{
              backgroundImage: `url(${slides[currentIndex].image})`,
            }}
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/40 via-blue-400/30 to-white/30" />

          {/* Additional diagonal gradient for more depth */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-transparent to-white/20" />
        </div>

        {/* Content container */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white p-8">
            <div
              className={`transition-all duration-1000 
              ${
                isTransitioning
                  ? "opacity-0 translate-y-4"
                  : "opacity-100 translate-y-0"
              }
            `}
            >
              <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-gray-500 via-purple-500 to-blue-500 inline-block text-transparent bg-clip-text">
                {slides[currentIndex].title}
              </h1>
              <p className="text-xl font-semibold">
                {slides[currentIndex].subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

