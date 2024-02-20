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
    // <section className="py-8 bg-blue-950 flex flex-col justify-evenly items-center sectionPadding">
    //   <h2 className="text-white text-[6rem]">TEAM</h2>
    //   <div className="grid grid-cols-1 gap-4 place-items-center w-full h-full">
    //     {team.map((member, index) => (
    //       <div key={member.id} className={`flex flex-col sm:flex-row ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} items-center bg-gray-100 rounded-md w-1/2`}>
    //         <div>
    //           <Image src={member.image} alt={member.name} width={200} height={100} className="h-full" />
    //         </div>
    //         <div className="">
    //           <h2 className="text-lg font-semibold">{member.name}</h2>
    //           <p className="text-sm text-gray-600">{member.role}</p>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </section>
    //   <section className="w-full h-full bg-blue-950 items-center flex flex-col">
    //     <div className="sectionPadding text-white w-1/2">
    //       {team.map((member, index) => (
    //         <div key={index} className={`flex ${index % 2 === 0 ? "flex-row-reverse" : "flex-row"} items-center gap-14 justify-between my-10 bg-white bg-opacity-75 secondaryColor`}>
    //           <div className="text-right">
    //             <h2>{member.name}</h2>
    //             <p>{member.role}</p>
    //           </div>
    //           <Image width={300} height={150} src={member.image} alt={member.name} className="object-fill rounded-full w-[5rem] h-[5rem]" />
    //         </div>
    //       ))}
    //     </div>
    //   </section>
    <section className="py-8 bg-blue-950 flex flex-col justify-evenly items-center px-2 sm:sectionPadding">
      <h2 className="text-white text-[6rem]">TEAM</h2>
      <div className="grid md:grid-col-1 lg:grid-cols-3 gap-4 place-items-center rounded-lg">
        {team.map((member, index) => (
          <div
            key={index}
            className={`flex ${index % 2 === 0 ? "flex-row-reverse mr-auto w-full" : "flex-row w-full"} items-center gap-14 justify-end my-10 bg-white secondaryColor`}
          >
            <div className="w-full">
              <Image src={member.image} alt={member.name} width={400} height={400} className={`h-full object-cover ${index % 2 === 0 ? "ml-auto" : "mr-auto"}`} />
            </div>
            <div className="w-full">
              <h2 className="text-lg font-semibold text-center">{member.name}</h2>
              <p className="text-sm text-gray-600 text-center">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
