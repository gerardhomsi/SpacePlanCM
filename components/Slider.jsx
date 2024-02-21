"use client";

import heroImage1 from "../public/heroImage1.jpg";
import heroImage2 from "../public/heroImage2.jpg";
import heroImage3 from "../public/heroImage3.jpg";
import heroImage4 from "../public/heroImage4.jpg";
import heroImage5 from "../public/heroImage5.jpg";
import heroImage6 from "../public/heroImage6.jpg";

import { useState } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/pagination";
import Link from "next/link";

export default function Page() {
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
      title: "TESTsafsdd",
      address: "15890 Southwest Freeway suite 100 Sugar Land, Texas 77478",
      tags: ["Retail - Mattresses", "3195 sq ft", "Design/Build - Completed August 2008"],
      imageUrl: heroImage4,
    },
    {
      title: "aaaaaaaaaa",
      address: "15890 Southwest Freeway suite 100 Sugar Land, Texas 77478",
      tags: ["Retail - Mattresses", "3195 sq ft", "Design/Build - Completed August 2008"],
      imageUrl: heroImage5,
    },
    {
      title: "bbbbbbb",
      address: "15890 Southwest Freeway suite 100 Sugar Land, Texas 77478",
      tags: ["Retail - Mattresses", "3195 sq ft", "Design/Build - Completed August 2008"],
      imageUrl: heroImage6,
    },
  ];

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setSelectedProjectIndex(swiper.realIndex);
  };

  return (
    <section className="gradientBlue py-12 px-4 sm:px-6 md:px-10 sm:sectionPadding flex flex-col items-center gap-6 w-full h-full border-b-4 border-t-4 border-[#cd9a41]">
      <h2 className="text-[6rem] text-white underline underline-offset-8 decoration-2 decoration-[#cd9a41] textShadow">PROJECTS</h2>
      <div className="w-11/12">
        <Swiper
          loop={true}
          spaceBetween={10}
          // navigation={true}
          pagination={true}
          thumbs={{
            swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[FreeMode, Pagination, Thumbs, Navigation]}
          className="rounded-lg"
          onSlideChange={handleSlideChange}
        >
          {projects.map((image, index) => (
            <SwiperSlide key={index}>
              {index === selectedProjectIndex && (
                <div className="absolute h-full w-1/2 px-4 bg-blue-950 bg-opacity-70 flex flex-col text-amber-500">
                  <h1 className="font-bold text-center text-[1.2rem] sm:text-[2.5rem] lg:text-[4.3rem] xl:text-[5.5rem] text-white whitespace-nowrap">
                    {projects[selectedProjectIndex].title}
                  </h1>
                  <p className="text-[0.7rem] sm:text-[1rem] md:text-[1.2rem] mb-2 sm:px-4 sm:py-2">-{projects[selectedProjectIndex].address}</p>
                  <ul className="text-[0.7rem] sm:text-[1rem] md:text-[1.2rem] sm:px-4 sm:py-2">
                    {projects[selectedProjectIndex].tags.map((tag, tagIndex) => (
                      <li key={tagIndex} className="mb-2">
                        -{tag}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="w-full h-[14rem] sm:h-[26rem] md:h-[29rem] lg:h-[34rem] xl:h-[40rem]">
                <Image src={image.imageUrl} alt={image.title} className="object-cover" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Thumbnail */}
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={14}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="thumbs mt-4 w-full rounded-lg h-[6rem] sm:h-[8rem] md:h-[12rem] xl:h-[18rem]"
        >
          {projects.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="h-full w-full flex flex-col">
                <Image src={image.imageUrl} alt={image.title} className="block h-full w-full object-cover rounded-xl" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Link
        href={""}
        className="max-w-sm whitespace-nowrap transition my-6 text-white text-center p-2 border-r-2 border-r-[#cd9a41] border-l-2 border-l-[#cd9a41] hover:border-2 hover:border-[#cd9a41] hover:w-64 hover:transition rounded mx-auto"
      >
        ---------- VIEW GALLERY ----------
      </Link>
    </section>
  );
}
