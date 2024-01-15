import React, { useState } from 'react';
import '../css/Carousel.css';

const CustomCarousel = ({ items }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = items.length;

  const goToPrevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? totalSlides - 1 : currentSlide - 1);
  };

  const goToNextSlide = () => {
    setCurrentSlide(currentSlide === totalSlides - 1 ? 0 : currentSlide + 1);
  };

  return (
    <div className='carousel-container'>
      <div className='carousel-inner' style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {items.map((item, index) => (
          <div className='carousel-item' key={index}>
            {item}
          </div>
        ))}
      </div>
      <div className='carousel-controls'>
        <button onClick={goToPrevSlide} aria-label="Previous slide">
          <span aria-hidden="true">&#9664;</span> {/* Left arrow */}
        </button>
        <button onClick={goToNextSlide} aria-label="Next slide">
          <span aria-hidden="true">&#9654;</span> {/* Right arrow */}
        </button>
      </div>
    </div>
  );
};

export default CustomCarousel;