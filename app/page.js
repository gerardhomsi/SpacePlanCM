import ContactUs from "@/components/ContactUs";
import Hero from "@/components/Hero";
import OurMission from "@/components/OurMission";
import Services from "@/components/Services";
import Slider from "@/components/Slider";
import Team from "@/components/Team";

export default function Home() {
  return (
    <main>
      <Hero />
      <OurMission />
      <Team />
      <Services />
      <Slider />
      <ContactUs />
    </main>
  );
}
