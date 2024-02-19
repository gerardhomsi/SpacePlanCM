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
      image: ceo,
    },
    {
      id: 2,
      name: "Patrick Nassif",
      role: "President - 1",
      image: ceo2,
    },
    {
      id: 3,
      name: "Bilal Abou Rabba",
      role: "Security",
      image: ceo3,
    },
  ];

  return (
    <section className="w-full h-full bg-blue-950 items-center flex flex-col">
      <div className="sectionPadding text-white w-1/2">
        {team.map((member, index) => (
          <div key={index} className={`flex ${index % 2 === 0 ? "flex-row-reverse" : "flex-row"} items-center gap-14 justify-between my-10 bg-white bg-opacity-75 secondaryColor`}>
            <div className="text-right">
              <h2>{member.name}</h2>
              <p>{member.role}</p>
            </div>
            <div>
              <Image width={300} height={150} src={member.image} alt={member.name} className="object-cover rounded-full w-full h-full" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
