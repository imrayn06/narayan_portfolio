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

import CoreExpertiseSection from "@/components/CoreExpertiseSection"
import { AboutSection } from "@/components/AboutSection"
import ExperienceSection from "@/components/ExperienceSection"
import MarketingFrameworkSection from "@/components/MarketingFrameworkSection"
import FeaturedCampaignsSection from "@/components/FeaturedCampaignsSection"
import IndustriesSection from "@/components/IndustriesSection"
import CurrentlyExploringSection from "@/components/CurrentlyExploringSection"
import WhatIBringSection from "@/components/WhatIBringSection"

import { Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune } from "@/components/Planets"

export default function Home() {
  return (
    <>
      <link rel="icon" href="/logo.png" />
      <Navbar />
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
      <FeaturedCampaignsSection />
      <SectionAnimation icon={<Saturn size={55} />} direction="left" />
      <TechStackSection />
      <IndustriesSection />
      <CurrentlyExploringSection />
      <SectionAnimation icon={<Uranus size={44} />} direction="right" />
      <WhatIBringSection />
      <ContactSection />
      <SectionAnimation icon={<Neptune size={44} />} direction="left" />
      <GameSection />
      <Footer />
    </>
  );
}