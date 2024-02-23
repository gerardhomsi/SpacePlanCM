"use client";

import React from "react";
import { BsArrowUp } from "react-icons/bs";

const ScrollToTopButton = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <button
      onClick={handleScrollToTop}
      className="flex justify-center items-center fixed bottom-6 right-6 sm:bottom-4 sm:right-4 md:bottom-6 md:right-6 bg-[#cd9a41] w-8 h-8 md:w-12 md:h-12 text-[#032e83] text-xl md:text-2xl text-center rounded-full shadow-md hover:bg-[#032e83] hover:text-[#cd9a41]"
    >
      <BsArrowUp />
    </button>
  );
};

export default ScrollToTopButton;
