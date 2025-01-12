import React, { useState, useEffect, useRef } from 'react';
import Carousel from 'react-multi-carousel';
import leftArrow from "../../../../src/assets/svgs/about-arrow-left.svg";
import rightArrow from "../../../../src/assets/svgs/about-arrow-right.svg";
import 'react-multi-carousel/lib/styles.css';
import data from './TeamsData';
import useMediaQuery  from "../../../hooks/useMediaQuery";
import styles from './Teams.module.scss';
/* eslint-disable */
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const CustomCarousel = () => {
 const isMobile = useMediaQuery('(max-width: 768px)');
 const [currentIndex, setCurrentIndex] = useState(0);
 const [hoveredIndex, setHoveredIndex] = useState(null);
 const [isPaused, setIsPaused] = useState(false);
 const carouselRef = useRef(null);

 const handlePrevClick = () => {
   if (carouselRef.current) {
     carouselRef.current.previous(1);
     setCurrentIndex((prevIndex) =>
       prevIndex === 0 ? data.length - 1 : prevIndex - 1
     );
   }
 };

 const handleNextClick = () => {
   if (carouselRef.current) {
     carouselRef.current.next(1);
     setCurrentIndex((prevIndex) =>
       prevIndex === data.length - 1 ? 0 : prevIndex + 1
     );
   }
 };
 
 useEffect(() => {
   const intervalId = setInterval(() => {
     if (!isPaused) {
       handleNextClick();
     }
   }, 3000);

   return () => {
     clearInterval(intervalId);
   };
 }, [currentIndex, isPaused]);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    setIsPaused(false);
  };

  return (
    <div className="tailwind">
      <div
        className="flex gap-[20px] md:px-2 items-center justify-center md:mt-[40px] lg:mt-0 rounded-[4px]
border-[1px] border-[rgba(0, 52, 91, 0.26)]
shadow-md md:w-[211px] w-[174px]
md:h-[41px] h-[36px] ml-auto mr-auto"
      >
        <button type="button" onClick={handlePrevClick}>
          <img
            src={leftArrow}
            alt="Previous"
            width={24}
            height={24}
            className="md:w-[24px] md:h-[24px] w-[14px]
h-[14px]"
          />
        </button>
        <h2
          className={styles.swipe}
        >
          Swipe through
        </h2>
        <button type="button" onClick={handleNextClick}>
          <img
            src={rightArrow}
            alt="Next"
            width={24}
            height={24}
            className="md:w-[24px] md:h-[24px] w-[14px]
h-[14px]"
          />
        </button>
      </div>
      <div className=" overflow-hidden md:my-5 bg-white px-2 md:pb-5 pb-2">
        <Carousel
          swipeable
          draggable
          responsive={responsive}
          ssr
          infinite
          autoPlay
          autoPlaySpeed={3000}
          keyBoardControl={false}
          customTransition="transform 400ms ease-in-out"
          transitionDuration={500}
          containerClass="carousel-container"
          arrows={false}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px d-flex align-items-stretch mt-3"
          centerMode
          ref={carouselRef}
        >
          {data.map((item, index) => (
            <div
              key={index}
              className={styles.card}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className={`${styles.side} ${styles.front}`}>
                 <div className="absolute inset-0 bg-gradient-to-b from-blue-200/20 via-blue-200/10 to-white/20 rounded-tl-[30px]" />
                <img
                  src={item.imageSrc}
                  width={645.959}
                  height={685}
                  alt={item.alt}
                  style={{ borderRadius: isMobile ? "15px 0 0 0" :  "30px 0 0 0" }}
                  className={styles.cardImage}
                />
                <div className="md:mt-[20px] mt-[5px]">
                  <p className="md:text-[20px] text-[14px] font-bold text-[#fff]">
                    {item.name}
                  </p>
                  <p className="md:text-[18px] text-[12px] font-semibold text-[#fff]">
                    {item.designation}
                  </p>
                </div>
              </div>
              <div
                className={`${styles.side} ${styles.back} ${
                  hoveredIndex === index ? styles.active : ""
                }`}
              >
                <div
                  className={`${styles.details} ${styles.team_bio} md:py-[35px] py-[5px] md:px-[33px] px-[5px] rounded-l-[30px] rounded-[12.56px] h-[200px] md:h-[400px]`}
                >
                  <div className=" rounded-[5px] md:border-[3px] border-[2px] border-[#002B4C] bg-[#fff] p-[10px] h-full ">
                    <h3
                      className={styles.name}
                    >
                      {item.name}
                    </h3>
                    <p className={styles.des}>
                      {item.designation}
                    </p>

                    {isMobile ? (
                      <p className="text-[8px]">{item.bio.slice(0, 220)}</p>
                    ) : (
                      <p>{item.bio}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      <p className={styles.excellent}>
        "Building Excellence, Powering Progress."
      </p>
    </div>
  );
};

export default CustomCarousel;