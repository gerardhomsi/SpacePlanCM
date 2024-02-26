"use client";

import React from "react";
import icon1 from "../public/icon1.png";
import designIcon from "../public/designIcon.png";
import constructionIcon from "../public/constructionIcon.png";
import Image from "next/image";
import { CustomLink } from "./CustomLink";

const Services = () => {
  const flexColCenter = "flex flex-col justify-center items-center";
  const subTitleClasses = "underline underline-offset-8 decoration-2 decoration-[#cd9a41] textShadow";
  const borderLeft = "border-l-4 border-[#cd9a41] px-5";
  const borderRight = "border-r-4 border-[#cd9a41] px-5 ";
  return (
    <section id="services" className={`${flexColCenter} gap-16 py-8 px-3 sm:sectionPadding gradientLight`}>
      <h2 className={`text-[3.5rem] sm:text-[4rem] text-center ${subTitleClasses}`}>SERVICES</h2>
      <div className={`${flexColCenter} lg:flex lg:flex-row lg:gap-20 gap-16 text-center lg:h-[40rem]`}>
        <div className={`${flexColCenter} ${borderLeft} w-full gap-10 lg:border-0`}>
          <h2 className={`text-[1.9rem] ${subTitleClasses}`}>PRE-CONSTRUCTION</h2>
          <Image src={icon1} width={90} height={90} alt="image" />
          <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, quasi.</h2>
          <CustomLink href={"/pre-construction"} linkName="Learn More" />
        </div>
        <div className={`${flexColCenter} w-full gap-10 ${borderRight} lg:border-l-4 lg:border-r-0`}>
          <h2 className={`text-[1.9rem] ${subTitleClasses}`}>DESIGN & BUILD SERVICES</h2>
          <Image src={designIcon} width={90} height={90} alt="image" />
          <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, quasi.</h2>
          <CustomLink href={"/design&build"} linkName="Learn More" />
        </div>
        <div className={`${flexColCenter} w-full gap-10 ${borderLeft}`}>
          <h2 className={`text-[1.9rem] ${subTitleClasses}`}>CONSTRUCTION SERVICES</h2>
          <Image src={constructionIcon} width={90} height={90} alt="image" />
          <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, quasi.</h2>
          <CustomLink href={"/construction"} linkName="Learn More" />
        </div>
      </div>
    </section>
  );
};

export default Services;
