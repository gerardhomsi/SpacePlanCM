import React from "react";
import { HiOutlinePhone } from "react-icons/hi2";
import { TfiEmail } from "react-icons/tfi";
import { introVideo } from "@/lib/links";
import { CustomLink } from "./CustomLink";

const Hero = () => {
  const sectionClasses = "relative h-full border-b-4 border-[#cd9a41]";
  const videoClasses = "absolute inset-0 object-cover w-full h-full";
  const containerClasses = "secondaryColor relative flex flex-col items-center justify-between font-medium h-full";
  const titleClasses =
    "text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[5rem] my-10 text-center sm:flex sm:flex-col sm:items-center text-slate-200 titleShadow leading-tight";
  const phoneIconClasses = "mr-2 text-[#cd9a41]";
  const emailIconClasses = "mr-2 text-[#cd9a41]";
  const linkClasses = "text-white";
  const pClasses = "font-semibold pr-4 text-white";

  return (
    <section className={sectionClasses}>
      <video autoPlay loop muted className={videoClasses}>
        <source src={introVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className={containerClasses}>
        <div className="h-screen flex items-center">
          <h1 className={titleClasses}>
            <span className="block">CONSTRUCTING</span>
            <span className="block">WITH</span>
            <span className="block">INTEGRITY </span>
            <span className="block">&</span>
            <span className="block">INSIGHT</span>
          </h1>
        </div>
        <div className="flex flex-col justify-center ml-auto">
          <div className="flex items-center mb-2">
            <HiOutlinePhone className={phoneIconClasses} />
            <p className={pClasses}>: 713 209-0009</p>
          </div>
          <div className="flex items-center my-2">
            <TfiEmail className={emailIconClasses} />
            <p className={pClasses}>: El-Zabringo@hotmail.com</p>
          </div>
          <div className="my-4">
            <CustomLink href={"#contact"} linkName={"Contact Us"} customCss={linkClasses} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
