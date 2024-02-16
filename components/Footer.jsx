import React from "react";

const Footer = () => {
  return (
    <footer className="h-60 flex justify-center items-center bg-blue-950 border-t-2 border-[#cd9a41]">
      <div className="secondaryColor text-lg">&copy; {new Date().getFullYear()} SpacePlanCM. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
