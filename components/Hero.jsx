import React from "react";
import { HiOutlinePhone } from "react-icons/hi2";
import { TfiEmail } from "react-icons/tfi";
import { introVideo } from "@/lib/links";
import CustomLink from "./CustomLink";

const Hero = () => {
  // document.querySelector("#contact").scrollIntoView({
  //   behavior: "smooth",
  // });
  return (
    <section className="relative h-full border-b-4 border-[#cd9a41]">
      <video autoPlay loop muted className="absolute inset-0 object-cover w-full h-full">
        <source src={introVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="secondaryColor relative flex flex-col items-center justify-between font-medium h-full">
        <div className="h-screen flex items-center">
          <h1 className="text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[5rem] my-10 text-center sm:flex sm:flex-col sm:items-center text-slate-200 titleShadow leading-tight">
            <p>constructing with</p>
            <p>honesty</p>
            <p> & </p>
            <p>perspective</p>
          </h1>
        </div>
        <div className="flex flex-col justify-center ml-auto">
          <div className="flex items-center mb-2">
            <HiOutlinePhone className="mr-2 text-[#cd9a41]" />
            <p className="font-semibold pr-4 text-white">: 713 209-0009</p>
          </div>
          <div className="flex items-center my-2">
            <TfiEmail className="mr-2 text-[#cd9a41]" />
            <p className="font-semibold pr-4 text-white">: El-Zabringo@hotmail.com</p>
          </div>
          <div className="my-4">
            <CustomLink href={"#contact"} linkName={"Contact Us"} customCss={"text-white"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
