"use client";

import React from "react";
import Link from "next/link";

const Services = () => {
  const services = [
    {
      title: `PRE-CONSTRUCTION`,
      desc: "some description text for PRE-CONSTRUCTION /some description text for PRE-CONSTRUCTION some description text for PRE-CONSTRUCTION /some description text for PRE-CONSTRUCTION",
    },
    {
      title: "DESIGN / BUILD SERVICES",
      desc: "some description text for DESIGN / BUILD SERVICES //some description text for DESIGN / BUILD SERVICES some description text for DESIGN / BUILD SERVICES //some description text for DESIGN / BUILD SERVICES",
    },
    {
      title: "CONSTRUCTION SERVICES",
      desc: "some description text for CONSTRUCTION SERVICES / some description text for CONSTRUCTION SERVICES some description text for CONSTRUCTION SERVICES / some description text for CONSTRUCTION SERVICES",
    },
  ];
  return (
    <section className="sectionPadding">
      <h2 className="text-[5rem] text-center -mt-8">SERVICES</h2>
      <div className=" flex flex-col items-center xl:flex xl:flex-row justify-between gap-6 h-full">
        {services.map((service) => (
          <div
            key={service.title}
            className=" flex flex-col gap-10 h-[22rem] w-[22rem] sm:w-full md:w-full lg:w-4/5 bg-blue-950 text-white p-6 items-center justify-between rounded-xl border-2 border-[#cd9a41]"
          >
            <h2 className="whitespace-nowrap bg-[#cd9a41] p-2 text-center text-[2rem] rounded primaryColor">{service.title}</h2>
            <p className="text-center text-[1.2rem] h-full mt-5">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
