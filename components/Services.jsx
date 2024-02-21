"use client";

import React from "react";
import Link from "next/link";
import icon1 from "../public/icon1.png";
import designIcon from "../public/designIcon.png";
import constructionIcon from "../public/constructionIcon.png";
import Image from "next/image";

const Services = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-8 py-8 px-3 sm:sectionPadding">
      <h2 className="text-[3.5rem] sm:text-[6rem] text-center underline underline-offset-8 decoration-2 decoration-[#cd9a41] textShadow">SERVICES</h2>
      <div className="flex flex-col lg:flex lg:flex-row lg:gap-20 gap-16 items-center justify-center text-center lg:h-[40rem]">
        <div className="flex flex-col items-center justify-center w-full gap-5 border-l-4 border-[#cd9a41] lg:border-0 p-5">
          <h2 className="text-[1.9rem] underline underline-offset-8 decoration-2 decoration-[#cd9a41] textShadow">PRE-CONSTRUCTION</h2>
          <Image src={icon1} width={90} height={90} alt="image" />
          <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, quasi.</h2>
          <Link href={""} className="border border-[#cd9a41] px-3 py-2 rounded-md hover:bg-white hover:text-blue-950">
            Learn More
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center w-full gap-5 border-r-4 lg:border-l-4 lg:border-r-0 border-[#cd9a41] p-5">
          <h2 className="text-[1.9rem] underline underline-offset-8 decoration-2 decoration-[#cd9a41] textShadow">DESIGN & BUILD SERVICES</h2>
          <Image src={designIcon} width={90} height={90} alt="image" />
          <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, quasi.</h2>
          <Link href={""} className="border border-[#cd9a41] px-3 py-2 rounded-md hover:bg-blue-950 hover:text-[#cd9a41]">
            Learn More
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center w-full gap-5 border-l-4 border-[#cd9a41] p-5">
          <h2 className="text-[1.9rem] underline underline-offset-8 decoration-2 decoration-[#cd9a41] textShadow">CONSTRUCTION SERVICES</h2>
          <Image src={constructionIcon} width={90} height={90} alt="image" />
          <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, quasi.</h2>
          <Link href={""} className="border border-[#cd9a41] px-3 py-2 rounded-md hover:bg-blue-950 hover:text-[#cd9a41]">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
