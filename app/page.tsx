import dynamic from 'next/dynamic';
import SectionSkeleton from '@/components/SectionSkeleton';
import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import SectionAnimation from "@/components/SectionAnimation";

const ContactSection = dynamic(() => import("@/components/ContactSection"), { loading: () => <SectionSkeleton /> });
const Footer = dynamic(() => import("@/components/Footer"), { loading: () => <SectionSkeleton /> });
const MetricsSection = dynamic(() => import("@/components/MetricsSection"), { loading: () => <SectionSkeleton /> });
const ProjectsSection = dynamic(() => import("@/components/ProjectsSection"), { loading: () => <SectionSkeleton /> });
const TechStackSection = dynamic(() => import("@/components/TechStackSection"), { loading: () => <SectionSkeleton /> });
const GameSection = dynamic(() => import("@/components/GameSection"), { loading: () => <SectionSkeleton /> });
const CertificationsSection = dynamic(() => import("@/components/CertificationsSection"), { loading: () => <SectionSkeleton /> });
const CoreExpertiseSection = dynamic(() => import("@/components/CoreExpertiseSection"), { loading: () => <SectionSkeleton /> });
const AboutSection = dynamic(() => import("@/components/AboutSection").then(mod => mod.AboutSection), { loading: () => <SectionSkeleton /> });
const ExperienceSection = dynamic(() => import("@/components/ExperienceSection"), { loading: () => <SectionSkeleton /> });
const MarketingFrameworkSection = dynamic(() => import("@/components/MarketingFrameworkSection"), { loading: () => <SectionSkeleton /> });
const FeaturedCampaignsSection = dynamic(() => import("@/components/FeaturedCampaignsSection"), { loading: () => <SectionSkeleton /> });
const IndustriesSection = dynamic(() => import("@/components/IndustriesSection"), { loading: () => <SectionSkeleton /> });
const CurrentlyExploringSection = dynamic(() => import("@/components/CurrentlyExploringSection"), { loading: () => <SectionSkeleton /> });
const WhatIBringSection = dynamic(() => import("@/components/WhatIBringSection"), { loading: () => <SectionSkeleton /> });

import { Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune } from "@/components/Planets"

export default function Home() {
  return (
    <>
      <link rel="icon" href="/logo.png" />
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
      </main>
      <Footer />
    </>
  );
}