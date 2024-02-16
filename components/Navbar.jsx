"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { HiMenu } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";

const Navbar = () => {
  const linkHover = "hover:text-[#cd9a41] transition  hover:underline decoration-[#032e83] hover:decoration-2 underline-offset-4";
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsOpen(false);
    };

    window.addEventListener("scroll", handleScroll);

    document.body.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex sm:flex-row items-center gap-6 border-b-4 p-3 border-[#cd9a41] font-medium ">
      <div className="h-full">
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/spaceplancm.appspot.com/o/website%20pics%2Fspbanner.png?alt=media&token=bb485cfa-e250-4a9c-a338-3087e2054c06"
          alt="banner"
          width={600}
          height={10}
          quality={90}
          className="w-[20rem] sm:w-[24rem] sm:h-[6rem] md:w-[30rem] md:h-[6rem]"
        />
      </div>
      <div className="flex sm:hidden ml-auto">
        <button onClick={toggleMenu} className="text-xl ml-auto text-[#032e83]">
          {isOpen ? <MdOutlineClose /> : <HiMenu />}
        </button>
      </div>
      <div
        ref={menuRef}
        className={`flex gap-1 primaryColor sm:flex sm:flex-row sm:gap-3 sm:ml-auto md:gap-6 lg:gap-12 xl:gap-16 ${isOpen ? "block flex-col" : "hidden sm:block"}`}
      >
        <Link href={"/"} className={linkHover}>
          About
        </Link>
        <Link className={linkHover} href={"/"}>
          Services
        </Link>
        <Link className={linkHover} href={"/"}>
          Projects
        </Link>
        <Link className={linkHover} href={"/"}>
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
