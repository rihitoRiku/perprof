import React, { useEffect, useState, useRef } from "react";

// Styles Module
import styles from "./style.module.scss";

// Library
import { FullPage, Slide } from "react-full-page";
import AOS from "aos";

// Slide Section
import SectionOne from "./sectionone";
import SectionTwo from "./sectiontwo";

const Home = () => {
  // AOS
  AOS.init();

  // OnePageScrollHandler
  const fullPageRef = useRef(null);
  const getCurrentSlideIndex = () => {
    if (fullPageRef.current) {
      return fullPageRef.current.state.currentSlide;
    }
    return 0;
  };
  const handleNext = () => {
    if (fullPageRef.current) {
      fullPageRef.current.goToSlide(getCurrentSlideIndex() + 1);
    }
  };
  const handlePrev = () => {
    if (fullPageRef.current) {
      fullPageRef.current.goToSlide(getCurrentSlideIndex() - 1);
    }
  };
  const scrollToSlide = (index) => {
    if (fullPageRef.current) {
      fullPageRef.current.goToSlide(index);
    }
  };

  return (
    <>
      <div>
        <FullPage
          controlsProps={{
            getCurrentSlideIndex: getCurrentSlideIndex,
            onNext: handleNext,
            onPrev: handlePrev,
            scrollToSlide: scrollToSlide,
            slidesCount: 3,
          }}
          ref={fullPageRef}
        >
          <Slide>
            <SectionOne />
          </Slide>
          <Slide >
            <SectionTwo />
          </Slide>
          <Slide>
            {/* <div className="relative h-screen w-full bg-blue-500 border">
              tes
            </div> */}
          </Slide>
        </FullPage>
      </div>
    </>
  );
};

export default Home;
