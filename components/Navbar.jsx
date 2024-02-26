"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { HiMenu } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";

const Navbar = () => {
  // Tailwind CSS classes
  const containerClasses = "flex sm:flex-row items-center gap-6 border-b-4 p-3 border-[#cd9a41] font-medium gradientLight";
  const menuButtonClasses = "text-xl ml-auto text-[#032e83]";
  const menuItemsContainerClasses = "flex gap-1 primaryColor sm:flex sm:flex-row sm:gap-3 sm:ml-auto md:gap-6 lg:gap-12 xl:gap-16";
  const menuItemClasses = "hover:text-[#cd9a41] transition hover:underline decoration-[#032e83] hover:decoration-2 underline-offset-4";

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

  // Array of navigation links
  const navigationLinks = [
    { href: "/", label: "Home" },
    { href: "/#about", label: "About" },
    { href: "/#projects", label: "Projects" },
    { href: "/#services", label: "Services" },
    { href: "/#team", label: "Team" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <div className={containerClasses}>
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
        <button onClick={toggleMenu} className={menuButtonClasses}>
          {isOpen ? <MdOutlineClose /> : <HiMenu />}
        </button>
      </div>
      <div ref={menuRef} className={`${menuItemsContainerClasses} ${isOpen ? "block flex-col" : "hidden sm:block"}`}>
        {navigationLinks.map((link, index) => (
          <Link key={index} href={link.href} className={menuItemClasses}>
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
