import Link from "next/link";
import React from "react";

const OurMission = () => {
  const flexCenterBetweenLeadingTight = "flex flex-col gap-10 lg:flex md:flex-row md:items-center md:gap-36 lg:gap-72 leading-tight w-full justify-between xl:justify-evenly";

  return (
    <section className="sectionPadding h-full flex flex-col items-center md:flex md:flex-col gap-20">
      <h1 className="underline underline-offset-8 decoration-2 text-[4rem] md:text-[6rem] decoration-[#cd9a41] text-center whitespace-nowrap md:mb-20 textShadow">Our Mission</h1>
      <div className={`${flexCenterBetweenLeadingTight}`}>
        <div className="border-l-2 border-[#cd9a41]">
          <h2 className="pl-2 text-left md:-mt-3 text-[3rem] sm:text-[4rem] lg:text-[6rem] xl:text-[7rem] textShadow">
            IMAGINE.
            <p className="text-sm lg:text-lg -mt-4 md:-mt-5 lg:-mt-7 xl:-mt-9 md:whitespace-nowrap italic secondaryColor">Transforming Visions into Blueprints.</p>
          </h2>
        </div>
        <div className="max-w-sm">
          <h3 className="pl-2 border-l-2 border-[#cd9a41]">
            In the initial stages of every project, we delve into your aspirations, visualizing every detail and crafting a blueprint that aligns seamlessly with your vision. Our
            goal is to inspire creativity and innovation, ensuring your dreams become the cornerstone of our collaborative journey
          </h3>
        </div>
      </div>
      <div className={`${flexCenterBetweenLeadingTight}`}>
        <div className="border-l-2 border-[#cd9a41] xl:-ml-1">
          <h2 className="pl-2 text-left md:-mt-3 text-[3rem] sm:text-[4rem] lg:text-[6rem] xl:text-[8rem] textShadow">
            PLAN.
            <p className="text-sm lg:text-lg -mt-4 md:-mt-5 lg:-mt-7 xl:-mt-9 md:whitespace-nowrap italic secondaryColor">Precision in Strategy, Clarity in Execution.</p>
          </h2>
        </div>
        <div className="max-w-sm xl:ml-12">
          <h3 className="pl-2 border-l-2 border-[#cd9a41]">
            With meticulous planning and a keen eye for detail, we translate your aspirations into actionable strategies, mapping out a clear roadmap for success. Our comprehensive
            approach ensures every aspect is thoughtfully considered, laying the foundation for a streamlined and efficient execution.
          </h3>
        </div>
      </div>
      <div className={`${flexCenterBetweenLeadingTight}`}>
        <div className="border-l-2 border-[#cd9a41] xl:-ml-1">
          <h2 className="pl-2 text-left md:-mt-3 text-[3rem] sm:text-[4rem] lg:text-[6rem] xl:text-[8rem] textShadow">
            BUILD.
            <p className="text-sm lg:text-lg -mt-4 md:-mt-5 lg:-mt-7 xl:-mt-9 md:whitespace-nowrap italic secondaryColor">Crafting Dreams into Concrete Realities.</p>
          </h2>
        </div>
        <div className="max-w-sm xl:ml-14">
          <h3 className="pl-2 border-l-2 border-[#cd9a41]">
            As we embark on the construction phase, we bring your vision to life with unwavering dedication and expert craftsmanship. With precision and passion, we navigate every
            challenge, transforming concepts into tangible structures that stand as a testament to our commitment to excellence.
          </h3>
        </div>
      </div>
      <Link
        href={""}
        className="max-w-sm whitespace-nowrap transition-all text-center p-2 border-r-2 border-r-[#cd9a41] border-l-2 border-l-[#cd9a41] hover:border-2 hover:border-[#cd9a41] hover:w-64 rounded mx-auto"
      >
        ---------- READ OUR STORY ----------
      </Link>
    </section>
  );
};

export default OurMission;
