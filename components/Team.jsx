import Image from "next/image";
import React from "react";
import ceo from "../public/ceo.jpg";
import ceo2 from "../public/ceo2.jpg";
import ceo3 from "../public/ceo3.jpeg";

const Team = () => {
  const team = [
    {
      id: 1,
      name: "Roger Nassif",
      role: "President",
      bio: "little little kaza maza men hon w men hoonik w sup sup lil fuckersza maza men hon w men hoonik w sup sup lil fuckersza maza men hon w men hoonik w sup sup lil fuckers",
      image: ceo,
    },
    {
      id: 2,
      name: "Patrick Nassif",
      role: "President - 1",
      bio: "little little kaza maza men hon w men hoonik w sup sup lil fuckersza maza men hon w men hoonik w sup sup lil fuckersza maza men hon w men hoonik w sup sup lil fuckers",
      image: ceo2,
    },
    {
      id: 3,
      name: "Bilal Mamdouh",
      role: "Security",
      bio: "little little kaza maza men hon w men hoonik w sup sup lil fuckersza maza men hon w men hoonik w sup sup lil fuckersza maza men hon w men hoonik w sup sup lil fuckers",
      image: ceo3,
    },
  ];

  return (
    <section id="team" className="py-8 gradientBlue flex flex-col justify-between items-center gap-28 border-b-4 border-t-4 border-[#cd9a41]">
      <h2 className="text-white underline underline-offset-8 decoration-2 text-[4rem] md:text-[6rem] decoration-[#cd9a41] text-center whitespace-nowrap md:mb-20 textShadow">
        TEAM
      </h2>
      <div className="grid md:grid-col-1 lg:grid-cols-3 gap-4 mb-10 place-items-center justify-items-stretch rounded-lg sm:sectionPadding w-full whitespace-nowrap">
        {team.map((member, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-between secondaryColor w-2/3 mx-auto lg:w-full lg:border-b-0 truncate h-full text-center ${
              index === 0 ? "lg:border-l-0" : "lg:border-l-2"
            } ${index === 2 ? "border-b-0" : "border-b-2 "}`}
          >
            <Image src={member.image} width={300} height={100} alt="team" className="rounded-full pl-2" />
            <div className="flex flex-col items-center mb-5 w-full lg:w-2/3">
              <h2 className="text-[2rem] sm:text-[2.5rem] w-full">{member.name}</h2>
              <p className="text-white text-[1.5rem] mb-4">{member.role}</p>
              <p className="whitespace-break-spaces">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
