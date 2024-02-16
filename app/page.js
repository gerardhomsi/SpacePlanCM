import Hero from "@/components/Hero";
import Test from "@/components/Test";
import TestThree from "@/components/TestThree";
import TestTwo from "@/components/TestTwo";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <Test />
      <TestTwo />
      <TestThree />
    </main>
  );
}
