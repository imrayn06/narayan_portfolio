import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import MetricsSection from "@/components/MetricsSection";
import { Navbar } from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";
import TechStackSection from "@/components/TechStackSection"
import SectionAnimation from "@/components/SectionAnimation"
import GameSection from "@/components/GameSection"
import CertificationsSection from "@/components/CertificationsSection"

import { Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune } from "@/components/Planets"

export default function Home() {
  return (
    <>
     <link rel="icon" href="/logo.png" />
      <Navbar />
      <SectionAnimation icon={<Mercury size={44} />} direction="right" />
      <HeroSection />
      <SectionAnimation icon={<Venus size={44} />} direction="left" />
      <CertificationsSection />
      <SectionAnimation icon={<Earth size={44} />} direction="right" />
      <MetricsSection />
      <SectionAnimation icon={<Mars size={44} />} direction="left" />
      <ProjectsSection />
      <SectionAnimation icon={<Jupiter size={44} />} direction="right" />
      <TechStackSection />
      <SectionAnimation icon={<Saturn size={55} />} direction="left" />
      <ContactSection />
      <SectionAnimation icon={<Uranus size={44} />} direction="right" />
      <GameSection />
      <SectionAnimation icon={<Neptune size={44} />} direction="left" />
      <Footer />
    </>
  );
}