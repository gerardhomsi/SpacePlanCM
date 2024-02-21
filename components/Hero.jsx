import React from "react";
import { HiOutlinePhone } from "react-icons/hi2";
import { TfiEmail } from "react-icons/tfi";

const Hero = () => {
  return (
    <section className="relative h-full border-b-4 border-[#cd9a41]">
      <video autoPlay loop muted className="absolute inset-0 object-cover w-full h-full">
        <source
          src={`https://firebasestorage.googleapis.com/v0/b/spaceplancm.appspot.com/o/website%20pics%2FheroVideo.mp4?alt=media&token=${process.env.FIRE_BASE_TOKEN}`}
          type="video/mp4"
        />
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
            <HiOutlinePhone className="mr-2 text-white" />
            <p className="font-semibold pr-4">: 713 209-0009</p>
          </div>
          <div className="flex items-center">
            <TfiEmail className="mr-2 text-white" />
            <p className="font-semibold pr-4">: El-Zabringo@hotmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
