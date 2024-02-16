import Hero from "@/components/Hero";
import OurMission from "@/components/OurMission";
import TestThree from "@/components/TestThree";
import TestTwo from "@/components/TestTwo";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <OurMission />
      <TestTwo />
      <TestThree />
    </main>
  );
}
