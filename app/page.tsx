import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import CoreExpertiseSection from "@/components/CoreExpertiseSection";
import { AboutSection } from "@/components/AboutSection";
import MetricsSection from "@/components/MetricsSection";
import ExperienceSection from "@/components/ExperienceSection";
import CertificationsSection from "@/components/CertificationsSection";
import MarketingFrameworkSection from "@/components/MarketingFrameworkSection";
import ProjectsSection from "@/components/ProjectsSection";
import CreativeWorkSection from "@/components/CreativeWorkSection";
import ContentCalendarSection from "@/components/ContentCalendarSection";
import TechStackSection from "@/components/TechStackSection";
import IndustriesSection from "@/components/IndustriesSection";
import CurrentlyExploringSection from "@/components/CurrentlyExploringSection";
import WhatIBringSection from "@/components/WhatIBringSection";
import ContactSection from "@/components/ContactSection";
import GameSection from "@/components/GameSection";
import Footer from "@/components/Footer";
import SectionAnimation from "@/components/SectionAnimation";
import { Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune } from "@/components/Planets";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <SectionAnimation icon={<Mercury size={44} />} direction="right" />
        <HeroSection />
        <SectionAnimation icon={<Venus size={44} />} direction="left" />
        <CoreExpertiseSection />
        <SectionAnimation icon={<Earth size={44} />} direction="right" />
        <AboutSection />
        <MetricsSection />
        <SectionAnimation icon={<Mars size={44} />} direction="left" />
        <ExperienceSection />
        <CertificationsSection />
        <MarketingFrameworkSection />
        <SectionAnimation icon={<Jupiter size={44} />} direction="right" />
        <ProjectsSection />
        <CreativeWorkSection />
        <ContentCalendarSection />
        <SectionAnimation icon={<Saturn size={55} />} direction="left" />
        <TechStackSection />
        <IndustriesSection />
        <CurrentlyExploringSection />
        <SectionAnimation icon={<Uranus size={44} />} direction="right" />
        <WhatIBringSection />
        <ContactSection />
        <SectionAnimation icon={<Neptune size={44} />} direction="left" />
        <GameSection />
      </main>
      <Footer />
    </>
  );
}