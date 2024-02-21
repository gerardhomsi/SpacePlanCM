import Link from "next/link";
import React from "react";
import imagineIcon from "../public/imagineIcon.png";
import planIcon from "../public/planIcon.png";
import buildIcon from "../public/buildIcon.png";
import Image from "next/image";

const MissionStep = ({ title, subtitle, content, icon, isSpecial, thirdService }) => (
  <div className={`flex flex-col gap-10 md:flex-row md:items-center md:gap-16 leading-tight w-full `}>
    <div className="border-l-2 border-[#cd9a41]">
      <h2 className="pl-2 text-left md:-mt-3 text-[3rem] sm:text-[4rem] lg:text-[6rem] xl:text-[7rem] textShadow">
        {title}
        <p className="text-sm lg:text-lg -mt-4 md:-mt-5 lg:-mt-7 xl:-mt-9 md:whitespace-nowrap italic secondaryColor">{subtitle}</p>
      </h2>
    </div>
    <div className={`w-full flex items-center justify-start sm:justify-center md:justify-center lg:justify-center`}>
      <Image src={icon} width={120} height={0} alt="icon" className={`${thirdService ? "xl:ml-6" : ""}`} />
    </div>
    <div className={`max-w-sm`}>
      <h3 className="pl-2 border-l-2 border-[#cd9a41]">{content}</h3>
    </div>
  </div>
);

const OurMission = () => {
  const missionSteps = [
    {
      title: "IMAGINE.",
      subtitle: "Transforming Visions into Blueprints.",
      icon: imagineIcon,
      content:
        "In the initial stages of every project, we delve into your aspirations, visualizing every detail and crafting a blueprint that aligns seamlessly with your vision. Our goal is to inspire creativity and innovation, ensuring your dreams become the cornerstone of our collaborative journey.",
    },
    {
      title: "PLAN.",
      subtitle: "Precision in Strategy, Clarity in Execution.",
      icon: planIcon,
      content:
        "With meticulous planning and a keen eye for detail, we translate your aspirations into actionable strategies, mapping out a clear roadmap for success. Our comprehensive approach ensures every aspect is thoughtfully considered, laying the foundation for a streamlined and efficient execution.",
    },
    {
      title: "BUILD.",
      subtitle: "Crafting Dreams into Concrete Realities.",
      icon: buildIcon,
      content:
        "As we embark on the construction phase, we bring your vision to life with unwavering dedication and expert craftsmanship. With precision and passion, we navigate every challenge, transforming concepts into tangible structures that stand as a testament to our commitment to excellence.",
    },
  ];

  return (
    <section className="sectionPadding h-full flex flex-col items-center md:flex md:flex-col gap-28 gradientLight">
      <h1 className="underline underline-offset-8 decoration-2 text-[4rem] md:text-[6rem] decoration-[#cd9a41] text-center whitespace-nowrap md:mb-20 textShadow">Our Mission</h1>
      {missionSteps.map((step, index) => (
        <MissionStep key={index} {...step} isSpecial={index === 1} thirdService={index === 2} />
      ))}
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
