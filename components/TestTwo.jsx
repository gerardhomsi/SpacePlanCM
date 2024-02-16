"use client";

import React from "react";
import heroImage1 from "../public/heroImage1.jpg";
import heroImage2 from "../public/heroImage2.jpg";
import heroImage3 from "../public/heroImage3.jpg";
import heroImage4 from "../public/heroImage4.jpg";
import heroImage5 from "../public/heroImage5.jpg";
import heroImage6 from "../public/heroImage6.jpg";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

const TestTwo = () => {
  const projects = [
    {
      title: `Abdallah's Bakery`,
      address: "6300 Westpark suite 485, Houston, TX 77057",
      tags: ["Bakery - Mediterranean Food", "2200 sq ft", "Design/Build -Completed June 2008"],
      imageUrl: heroImage1,
    },
    {
      title: "Allday Dental",
      address: "8619 Richmond Ave. suite 700 Houston, Texas 77063",
      tags: ["Dental Clinic", "2200 sq ft", "Design/Build -Completed June 2008"],
      imageUrl: heroImage2,
    },
    {
      title: "Mattress EXPO",
      address: "15890 Southwest Freeway suite 100 Sugar Land, Texas 77478",
      tags: ["Retail - Mattresses", "3195 sq ft", "Design/Build - Completed August 2008"],
      imageUrl: heroImage3,
    },
    {
      title: "TESTsafsdfsd",
      address: "15890 Southwest Freeway suite 100 Sugar Land, Texas 77478",
      tags: ["Retail - Mattresses", "3195 sq ft", "Design/Build - Completed August 2008"],
      imageUrl: heroImage4,
    },
    {
      title: "aaaaaaaaaaaaaa",
      address: "15890 Southwest Freeway suite 100 Sugar Land, Texas 77478",
      tags: ["Retail - Mattresses", "3195 sq ft", "Design/Build - Completed August 2008"],
      imageUrl: heroImage5,
    },
    {
      title: "bbbbbbbbbbbbb",
      address: "15890 Southwest Freeway suite 100 Sugar Land, Texas 77478",
      tags: ["Retail - Mattresses", "3195 sq ft", "Design/Build - Completed August 2008"],
      imageUrl: heroImage6,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    cssEase: "linear",
  };

  return (
    <section className="bg-blue-950 secondaryColor sectionPadding">
      <h2 className="text-center text-[5rem]">OUR PROJECTS</h2>
      <Slider {...settings} autoplay={true} className="mb-16">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-200">
            <div className="flex">
              <div className="">
                <Image width={800} src={project.imageUrl} alt={project.title} className="h-full" />
              </div>
              <div className="flex flex-col justify-center gap-20">
                <h2 className="text-xl">{project.title}</h2>
                <p className="text-lg">{project.address}</p>
                <p className="text-lg">{project.tags}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <p className="text-center">
        <Link href={"/"} className="border border-[#cd9a41] py-3 px-5 rounded-lg transition hover:text-[#032e83] hover:bg-[#cd9a41] hover:border-[#032e83]">
          Gallery
        </Link>
      </p>
    </section>
  );
};

export default TestTwo;
