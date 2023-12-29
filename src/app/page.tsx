import { Hero } from "@/components/sections/Hero";
import { Navbar } from "../components/navbar";
import { OurVision } from "@/components/sections/OurVision";
import { Courses } from "@/components/sections/Courses";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full mx-auto px-3 md:px-10 lg:px-0 lg:max-w-6xl">
        <Hero />
        <OurVision />
        <Courses />
        <WhyChooseUs />
      </main>
      <Footer />
    </>
  );
}
