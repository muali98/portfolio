// src/components/Home/Home.js
import React, { useEffect, useState } from "react";
import bg_PC from "./bg_PC.png";
import bg_phone from "./bg_phone.png";
import Image1 from "./Image1.jpg";
import Image2 from "./Image2.jpg";
import Image3 from "./Image3.jpg";
import Image4 from "./Image4.jpg";
import Image5 from "./Image5.jpg";
import Image6 from "./Image6.jpg";
import Image7 from "./Image7.jpg";
import Image8 from "./Image8.jpg";
import Image9 from "./Image9.jpg";
import Image10 from "./Image10.jpg";
import Image11 from "./Image11.jpg";

const images = [
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
  Image8,
  Image9,
  Image10,
  Image11,
];

export const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 5 seconds delay
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setIsVisible(true); // Initial visibility
    const initialShowTimeout = setTimeout(() => setIsVisible(false), 600); // 0.3 seconds to show
    const finalShowTimeout = setTimeout(() => setIsVisible(true), 1700); // Show again after 0.6 seconds hidden

    return () => {
      clearTimeout(initialShowTimeout);
      clearTimeout(finalShowTimeout);
    };
  }, []);

  const getPositionClass = (index) => {
    const positionOffset =
      (index - currentIndex + images.length) % images.length;

    switch (positionOffset) {
      case 0:
        return "translate-x-3/4 scale-90 z-0";
      case 1:
        return "translate-x-1/2 scale-95 z-10";
      case 2:
        return "translate-x-1/4 scale-100 z-20";
      case 3:
        return "translate-x-0 scale-110 z-30"; // Center image (largest)
      case 4:
        return "-translate-x-1/4 scale-100 z-20";
      case 5:
        return "-translate-x-1/2 scale-95 z-10";
      case 6:
        return "-translate-x-3/4 scale-90 z-0";
      default:
        return "hidden"; // Hide all other images
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Top-Left Corner Text with Blue Glow */}
      <div
    className="absolute top-16 left-10 text-lg lg:top-20 lg:left-16 lg:text-xl z-20 font-bold"
>
    <span className="text-red-500 drop-shadow-[0_0_8px_rgba(59,130,246,1)]">
        A blend of Professional and Personal Journey
    </span>
</div>


      {/* Background Images */}
      <div className="absolute inset-0 hidden sm:flex">
        <img
          src={bg_PC}
          alt="Background for desktop"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 flex sm:hidden">
        <img
          src={bg_phone}
          alt="Background for mobile"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Image Carousel with Reduced Width and Conditional Visibility */}
      <div
        className={`relative flex items-center justify-center h-full space-x-4 w-4/5 mx-auto transition-opacity duration-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute transition-all duration-700 ease-in-out transform ${getPositionClass(
              index
            )}`}
          >
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="object-cover rounded-lg shadow-lg w-[220px] h-[300px] md:w-[340px] md:h-[460px] shadow-blue-500/50"
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() =>
          setCurrentIndex((currentIndex - 1 + images.length) % images.length)
        }
        className="absolute top-1/2 transform -translate-y-1/2 text-white bg-gray-800 bg-opacity-70 p-2 rounded-full hover:bg-gray-600 left-4 sm:left-[20%] z-50 sm:z-40"
      >
        &#9664;
      </button>
      <button
        onClick={() => setCurrentIndex((currentIndex + 1) % images.length)}
        className="absolute top-1/2 transform -translate-y-1/2 text-white bg-gray-800 bg-opacity-70 p-2 rounded-full hover:bg-gray-600 right-4 sm:right-[20%] z-50 sm:z-40"
      >
        &#9654;
      </button>
    </div>
  );
};

export default Home;
