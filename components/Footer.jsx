import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlineFacebook } from "react-icons/md";
import { TfiInstagram } from "react-icons/tfi";

const Footer = () => {
  return (
    <footer className="h-full sectionPadding flex items-center justify-between secondaryColor gradientBlue border-t-4 border-[#cd9a41]">
      <div>
        <Link href={"/"}>
          <Image src={"/splogo.png"} width={300} height={150} alt="logo" />
        </Link>
      </div>
      <div className=" text-lg">&copy; {new Date().getFullYear()} SpacePlanCM. All rights reserved.</div>
      <div className="flex items-center gap-5">
        <MdOutlineFacebook size={48} />
        <TfiInstagram size={40} />
      </div>
    </footer>
  );
};

export default Footer;
