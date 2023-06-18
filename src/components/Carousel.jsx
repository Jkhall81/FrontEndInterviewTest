import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const Carousel = () => {
  const slides = [
    {
      url: "https://picsum.photos/id/234/200/300",
    },
    {
      url: "https://picsum.photos/id/231/200/300",
    },
    {
      url: "https://picsum.photos/id/230/200/300",
    },
    {
      url: "https://picsum.photos/id/239/200/300",
    },
    {
      url: "https://picsum.photos/id/237/200/300",
    },
    {
      url: "https://picsum.photos/id/294/200/300",
    },
    {
      url: "https://picsum.photos/id/214/200/300",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClickPrevious = () => {
    if (currentIndex === 0) {
      setCurrentIndex(slides.length - 1);
    } else {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleClickNext = () => {
    if (currentIndex === slides.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  {
    /* I didn't write this, I found it on stackOverflow */
  }
  const visibleSlides =
    currentIndex + 4 <= slides.length
      ? slides.slice(currentIndex, currentIndex + 4)
      : slides
          .slice(currentIndex)
          .concat(slides.slice(0, currentIndex + 4 - slides.length));

  return (
    <div className="m-auto py-6 relative group">
      <div className="w-full h-full object-cover rounded-2xl bg-center bg-cover">
        <div className="absolute inset-0 bg-gray-900 opacity-80 -z-1"></div>
        <div className="flex justify-between">
          {/* Left Arrow */}
          <div
            className="z-20 hidden group-hover:block absolute top-[50%] -translate-x-0 traanslate-y-[-50%] left-5 text-3xl rounded-full p-2 text-white cursor-pointer"
            onClick={handleClickPrevious}
          >
            <BsChevronCompactLeft size={40} />
          </div>
          {/* Right Arrow */}
          <div
            className="z-20 hidden group-hover:block absolute top-[50%] -translate-x-0 traanslate-y-[-50%] right-5 text-3xl rounded-full p-2 text-white cursor-pointer"
            onClick={handleClickNext}
          >
            <BsChevronCompactRight size={40} />
          </div>
        </div>
        <div className="flex justify-center mt-2">
          {visibleSlides.map((slide, index) => (
            <img
              key={index}
              src={slide.url}
              alt="random image"
              className="w-[280px] h-[180px] px-2 object-cover rounded-lg z-10 select-none"
            />
          ))}
        </div>
        <div className="flex justify-center mt-2">
          {slides.map((_, index) => (
            <RxDotFilled
              key={index}
              className={`z-10 text-3xl mx-1 ${
                index >= currentIndex && index < currentIndex + 4
                  ? "text-white"
                  : "text-grey-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
