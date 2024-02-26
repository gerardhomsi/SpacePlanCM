import React from "react";
import imagineIcon from "../public/imagineIcon.png";
import planIcon from "../public/planIcon.png";
import buildIcon from "../public/buildIcon.png";
import Image from "next/image";
import { CustomLink } from "./CustomLink";

const MissionStep = ({ title, subtitle, content, icon }) => (
  <div className={`flex flex-col gap-10 md:flex-row md:items-center md:justify-between md:gap-16 leading-tight w-full`}>
    <div className="border-l-2 border-[#cd9a41] md:max-w-[34%]">
      <h2 className="pl-2 text-left md:-mt-3 text-[3rem] sm:text-[3rem] lg:text-[4rem] xl:text-[6rem] textShadow font-semibold">
        {title}
        <p className="text-[1rem] md:-mt-2 lg:-mt-5 xl:-mt-6 italic secondaryColor font-medium">{subtitle}</p>
      </h2>
    </div>
    <div className={`flex items-center justify-start sm:justify-center max-w-[34%]`}>
      <Image src={icon} width={120} height={0} alt="icon" className={``} />
    </div>
    <div className={`md:max-w-[34%]`}>
      <h3 className="pl-2 border-l-2 text-[0.9rem] lg:text-[1.2rem] border-[#cd9a41] font-medium leading-7">{content}</h3>
    </div>
  </div>
);

const OurMission = () => {
  const missionSteps = [
    {
      title: "DREAM.",
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
    <section className="p-8 lg:px-24 xl:px-32 h-full flex flex-col items-center md:flex md:flex-col gap-28 gradientLight border-t-4 border-[#cd9a41]">
      <h1 className="underline underline-offset-8 decoration-2 text-[3.5rem] sm:text-[4rem] md:text-[6rem] decoration-[#cd9a41] text-center whitespace-nowrap md:mb-20 textShadow">
        Our Mission
      </h1>
      {missionSteps.map((step, index) => (
        <MissionStep key={index} {...step} isSpecial={index === 1} thirdService={index === 2} />
      ))}
      <CustomLink href={""} linkName={"View Our Story"} />
    </section>
  );
};

export default OurMission;
