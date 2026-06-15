import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import MetricsSection from "@/components/MetricsSection";
import { Navbar } from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";
import TechStackSection from "@/components/TechStackSection"
import SectionAnimation from "@/components/SectionAnimation"
import GameSection from "@/components/GameSection"

export default function Home() {
  return (
    <>
     <link rel="icon" href="/logo.png" />
      <Navbar />
      <SectionAnimation icon="🌍" direction="right" />
      <HeroSection />
      <SectionAnimation icon="🌖" direction="right" />
      <MetricsSection />
      <SectionAnimation icon="🪐" direction="left" />
      <ProjectsSection />
      <SectionAnimation icon="☄️" direction="right" />
      <TechStackSection />
      <ContactSection />
      <GameSection />
      <Footer />
    </>
  );
}