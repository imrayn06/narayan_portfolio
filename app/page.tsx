import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Hero } from "@/components/Hero";
import KeyMetrix from "@/components/KeyMetrix";
import { Navbar } from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Stack from "@/components/Stack"
import SectionAnimation from "@/components/SectionAnimation"
import GameSection from "@/components/GameSection"

export default function Home() {
  return (
    <>
     <link rel="icon" href="/logo.png" />
      <Navbar />
      <SectionAnimation
        icon="🚗"
        direction="right"
      />
      <Hero />
      <SectionAnimation
        icon="🚚"
        direction="right"
      />
      <KeyMetrix />
      <SectionAnimation
        icon="✈️"
        direction="left"
      />
      <Portfolio />
      <SectionAnimation
        icon="⛵"
        direction="right"
      />
      <Stack />
      <Contact />
      <GameSection />
      <Footer />
    </>
  );
}