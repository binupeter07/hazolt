import React, { useEffect, useState } from "react";
import "../styles/Slider.css";
// import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { sliderData } from "../assets/data/sliderData";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideLength = sliderData.length;
  const autoScroll = true;
  let slideInterval;
  const intervalTime = 5000;

  function nextSlide() {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      const auto = () => {
        slideInterval = setInterval(nextSlide, intervalTime);
      };
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide, intervalTime, autoScroll]);

  return (
    <div className="slider">
      {sliderData.map((slide, index) => {
        const { image } = slide;

        return (
          <div
            key={index}
            className={index === currentSlide ? "slide current" : "slide"}
          >
            {index === currentSlide && (
              <>
                <img src={image} alt="slide" />
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
