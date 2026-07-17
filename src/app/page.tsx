import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import CodingProfiles from "@/components/sections/CodingProfiles";
import Journey from "@/components/sections/Journey";
import Experience from "@/components/sections/Experience";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Journey />
        <Experience />
        <Certifications />
        <CodingProfiles />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
