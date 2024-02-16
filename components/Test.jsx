import Link from "next/link";
import React from "react";

const Test = () => {
  return (
    <section className="sectionPadding h-full">
      <div className="flex flex-col gap-20 sm:flex sm:flex-row sm:justify-evenly">
        <div className="flex flex-col gap-10 text-left text-[3rem] sm:text-[4rem] lg:text-[6rem] titleShadow">
          <h2 className="pl-2 border-l-2 border-[#cd9a41]">IMAGINE.</h2>
          <h2 className="pl-2 border-l-2 border-[#cd9a41]">PLAN.</h2>
          <h2 className="pl-2 border-l-2 border-[#cd9a41]">BUILD.</h2>
        </div>
        <div className="flex flex-col gap-10 justify-center max-w-sm">
          <h2 className="pl-2 -mb-9 underline underline-offset-4 decoration-[#cd9a41]">OUR VISION</h2>
          <h3 className="pl-2 border-l-2 border-[#cd9a41]">You are passionate about your business, life and work every day to make it a success.</h3>
          <h4 className="pl-2 mb-4 border-l-2 border-[#cd9a41]">
            You have a vision of where you want to go next. To take your dream from a vision to reality, you are going to need a partner that understands the scope of your project
            and has the expertise to get the job done.
          </h4>
          <Link
            href={""}
            className="whitespace-nowrap transition-all text-center p-2 border-r-2 border-r-[#cd9a41] border-l-2 border-l-[#cd9a41] hover:border-2 hover:border-[#cd9a41] hover:w-64 rounded hover:mx-auto"
          >
            ---------- READ OUR STORY ----------
          </Link>
        </div>
      </div>
      {/* <hr className="border-[#cd9a41]" /> */}
    </section>
  );
};

export default Test;
