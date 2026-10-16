"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiZoomIn,
  FiX,
  FiChevronLeft,
  FiChevronRight,
  FiLayers,
  FiFileText,
  FiExternalLink,
} from "react-icons/fi";
import { FaGoogleDrive } from "react-icons/fa";
import { SiCanva } from "react-icons/si";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  PortfolioVideoPreview,
  VideoPlayerModal,
  type VideoItem,
} from "@/components/PortfolioVideoCard";

export interface CreativeSlide {
  image: string;
  title?: string;
  description?: string;
}

export interface CreativeItem {
  id: string;
  title: string;
  brand: string;
  category: "SOCIAL" | "CAMPAIGN" | "BRANDING" | "GRAPHICS" | "VIDEO";
  contribution: string;
  context: string;
  image: string;
  aspect: string;
  size: "large" | "medium" | "tall";
  videoItem?: VideoItem;
  slides?: CreativeSlide[];
  canvaUrl?: string;
  pdfUrl?: string;
  driveUrl?: string;
  strategicRationale?: string;
}

const creativeWorks: CreativeItem[] = [
  {
    id: "nivaas-living",
    title: "Nivaas Living — “I’m Choosing a Life” Campaign",
    brand: "Nivaas Living (New Town, Kolkata)",
    category: "CAMPAIGN",
    contribution: "Strategic Copywriting, Lifestyle Reframe & 4-Slide Carousel Art Direction",
    strategicRationale:
      "Buyers aren’t buying square footage, they’re buying a way of living. The carousel shifts the question from “what does the flat have?” to “what will my days feel like?” — moving from a reframe (slide 1), to proof in everyday routines (slide 2), to emotional payoff (slide 3), to a call to action (slide 4).",
    context:
      "A 4-part Instagram carousel campaign reframing property purchase from transactional square footage to emotional, lived moments (the 8:40 cab, terrace adda, sunset walks at Eco Park). Designed to bridge the gap between developer brochures and authentic everyday life.",
    image: "/portfolio/nivaas-living-slide-1.jpg",
    aspect: "aspect-[4/5]",
    size: "large",
    canvaUrl: "https://canva.link/ohfs7p2x5f9dd7r",
    pdfUrl: "/portfolio/nivaas-living-campaign.pdf",
    driveUrl: "https://drive.google.com/file/d/1wWUQwskVmwwCH9ILaZ9hwXDy2465j0YC/view?usp=drive_link",
    slides: [
      {
        image: "/portfolio/nivaas-living-slide-1.jpg",
        title: "Slide 01 / 04 — The Reframe Hook",
        description:
          "WHEN YOU SAY: “I’m buying a house.” WE HEAR: “I’m choosing a life.” Establishing the emotional pivot over an evocative dusk shot of New Town, Kolkata.",
      },
      {
        image: "/portfolio/nivaas-living-slide-2.jpg",
        title: "Slide 02 / 04 — Proof in Everyday Routines",
        description:
          "WHAT THE BROCHURE LEAVES OUT — “Brochures sell you the flat. Not the mornings.” Grounding the campaign in hyper-relatable micro-routines: The 8:40 office cab · The school bus at the gate · Sunset walks at Eco Park.",
      },
      {
        image: "/portfolio/nivaas-living-slide-3.jpg",
        title: "Slide 03 / 04 — Emotional Lifestyle Payoff",
        description:
          "WHAT YOU’RE REALLY BUYING — “Not walls. Evenings.” Highlighting the human community and cultural fabric: Fairy-lit terrace adda with close friends, mudha seating, and neighbours who genuinely wave back.",
      },
      {
        image: "/portfolio/nivaas-living-slide-4.jpg",
        title: "Slide 04 / 04 — The Invitation & Direct CTA",
        description:
          "“Your next chapter deserves a place of its own.” Inviting buyers to imagine their future life before signing papers, with a clear action prompt: “Schedule a Visit This Weekend.”",
      },
    ],
  },
  {
    id: "the-sofa-three-moods",
    title: "The Sofa — “One Sofa, Three Moods”",
    brand: "The Sofa (Spec Concept by Sneh)",
    category: "CAMPAIGN",
    contribution: "Editorial Art Direction & Atmospheric Micro-Copywriting",
    strategicRationale:
      "Inspired by Sofology’s “Nothing Feels Like” campaign, which is built around the feeling of being on a sofa you love. It’s a good example of selling the feeling rather than the furniture, which is what this concept aimed for across three distinct moments of the day.",
    context:
      "A 3-part minimalist mood carousel illustrating how one living room piece adapts across the day: 01 Calm (morning sun & open windows), 02 Social (golden hour amber warmth & laughter), and 03 Nocturne (midnight solitude & deep thoughts).",
    image: "/portfolio/one-sofa-slide-1.jpg",
    aspect: "aspect-[4/5]",
    size: "large",
    canvaUrl: "https://canva.link/o4zwwyqm984rjbz",
    pdfUrl: "/portfolio/one-sofa-three-moods.pdf",
    driveUrl: "https://drive.google.com/file/d/1fPkV-sikxnW-RscF2Gxd8h8dLZUpNKqg/view?usp=sharing",
    slides: [
      {
        image: "/portfolio/one-sofa-slide-1.jpg",
        title: "01 / 03 — CALM",
        description:
          "“Slow mornings. Soft light. Open windows. Nowhere to be.” Minimalist natural daylight creating a relaxed, unhurried morning sanctuary.",
      },
      {
        image: "/portfolio/one-sofa-slide-2.jpg",
        title: "02 / 03 — SOCIAL",
        description:
          "“Golden hour. Warm glass. Easy laughter. One more round.” Radiating terracotta amber glow capturing after-work drinks and lively conversation.",
      },
      {
        image: "/portfolio/one-sofa-slide-3.jpg",
        title: "03 / 03 — NOCTURNE",
        description:
          "“After midnight. Low light. Deep thoughts. The whole night to yourself.” Moody indigo illumination and celestial moonlight celebrating quiet introspection.",
      },
    ],
  },
  {
    id: "bisleri-ad",
    title: "Bisleri — “Party or Recovery, Piyo Bisleri”",
    brand: "Bisleri (Spec Campaign)",
    category: "CAMPAIGN",
    contribution: "Visual Art Direction & Ad Copywriting",
    context:
      "Dual-scenario split visual creative contrasting nightlife party hydration with morning wellness recovery, positioning packaged water as essential.",
    image: "/portfolio/bisleri-ad-creative.jpg",
    aspect: "aspect-[3/4]",
    size: "medium",
  },
  {
    id: "denim-style-every-day",
    title: "Denim Co. — “Style Every Day” Fashion Creative",
    brand: "Denim Co. (Casual Wear Spec)",
    category: "SOCIAL",
    contribution: "Editorial Fashion Layout, Polaroid Cutout Concept & Social Copywriting",
    context:
      "Street-fashion social creative combining layered distressed denim styling, torn fabric badge branding, and an overlaid Polaroid photo cutout celebrating everyday comfort with durability.",
    image: "/portfolio/denim-style-every-day-creative.jpg",
    aspect: "aspect-square",
    size: "medium",
  },
  {
    id: "alphapro-running-shoes",
    title: "AlphaPro — “Unleash Your Potential Today!” Running Shoes Banner",
    brand: "AlphaPro Athletic Footwear",
    category: "GRAPHICS",
    contribution: "Promotional Banner Layout & Sports E-Commerce Copywriting",
    context:
      "Dual-tone promotional ad banner for athletic footwear, pairing refreshing mint and peach color blocking with high-impact value-prop messaging: 'Where Comfort Meets Performance'.",
    image: "/portfolio/alphapro-running-shoes-banner.png",
    aspect: "aspect-[851/315]",
    size: "medium",
  },
  {
    id: "colosseum-creative",
    title: "Colosseum Fitness — “What The Mind Believes”",
    brand: "Colosseum Fitness",
    category: "SOCIAL",
    contribution: "Creative Direction & Promotional Layout",
    context:
      "Assertive, high-impact gym promotional creative driving memberships at Axis Mall, Newtown with high-contrast typography and bold palette.",
    image: "/portfolio/colosseum-fitness-creative.png",
    aspect: "aspect-[9/16]",
    size: "tall",
  },
  {
    id: "colosseum-meme",
    title: "Colosseum Fitness — Leg Day Meme Creative",
    brand: "Colosseum Fitness",
    category: "SOCIAL",
    contribution: "Meme Marketing & Cultural Copywriting",
    context:
      "Cultural Gangs of Wasseypur meme angle deployed to trigger organic gym humor, comments, and friend tagging on social channels.",
    image: "/portfolio/colosseum-fitness-meme.png",
    aspect: "aspect-[9/16]",
    size: "tall",
  },
  {
    id: "tiib-dubai-video",
    title: "TIIB Dubai — Scholarship Campaign Video Reel (Original Cut)",
    brand: "Edu Global / TIIB Dubai",
    category: "VIDEO",
    contribution: "Short-Form Video & Hook Sequencing",
    context:
      "Vertical advertising reel promoting fully funded scholarships in Dubai with dynamic POV hook and local Kolkata seminar invitation.",
    image: "/portfolio/digitally-kolkata-banner.jpg",
    aspect: "aspect-[9/16]",
    size: "medium",
    videoItem: {
      id: "tiib-dubai-video",
      title: "TIIB Dubai — Fully Funded Scholarships Ad Reel (Original Cut)",
      brand: "Edu Global / TIIB Dubai",
      format: "REEL (9:16)",
      duration: "0:28",
      tools: ["CapCut", "Kinetic Typography", "Voiceover"],
      hook: "Dynamic POV stairs descent hook transitioning into overseas scholarship announcement.",
      body: "Highlighting 100% and 54% scholarships, IELTS exemption, and Kolkata seminar details.",
      cta: "Fill up the form below and join us on 22nd August in Kolkata.",
      audioDirection: "Dynamic voiceover cadence with upbeat commercial background music.",
      videoSrc: "/videos/tiib-dubai-scholarship-reel.mp4",
      driveUrl: "https://drive.google.com/file/d/1GgNi5D0KTvh7ofb6AsjE6ePPpx6OE72o/view?usp=drive_link",
      poster: "/portfolio/digitally-kolkata-banner.jpg",
      aspect: "aspect-[9/16]",
    },
  },
  {
    id: "tiib-dubai-video-claude",
    title: "TIIB Dubai — Scholarship Ad Reel (Claude AI Co-Edit)",
    brand: "Edu Global / TIIB Dubai",
    category: "VIDEO",
    contribution: "AI Prompt Engineering, Pacing & Reel Edit",
    context:
      "Alternative vertical ad cut co-created with Claude AI to test hook retention, typography cadence, and high-conversion scholarship messaging.",
    image: "/portfolio/digitally-kolkata-banner.jpg",
    aspect: "aspect-[9/16]",
    size: "medium",
    videoItem: {
      id: "tiib-dubai-video-claude",
      title: "TIIB Dubai — Fully Funded Scholarships Ad Reel (Claude AI Edition)",
      brand: "Edu Global / TIIB Dubai",
      format: "REEL (9:16)",
      duration: "0:30",
      tools: ["Claude AI", "CapCut", "Kinetic Typography", "Hook Optimization"],
      hook: "Alternative high-retention hook iteration conceptualized with Claude AI for sharper narrative pacing.",
      body: "Co-developed script flow and kinetic captions breaking down 100% and 54% scholarships, IELTS waiver, and Kolkata registration.",
      cta: "Fill up the form below and join us on 22nd August in Kolkata.",
      audioDirection: "Dynamic voiceover cadence with upbeat commercial background score and beat-synced cuts.",
      videoSrc: "/videos/tiib-dubai-scholarship-claude-reel.mp4",
      driveUrl: "https://drive.google.com/file/d/1aq1n-Sm8kHV2DH7_l8EuqLHWk0Jc8S54/view?usp=drivesdk",
      poster: "/portfolio/digitally-kolkata-banner.jpg",
      aspect: "aspect-[9/16]",
    },
  },
  {
    id: "clean-up-kolkata-video",
    title: "Clean Up Kolkata — Green Up Drive Community Action Reel",
    brand: "Clean Up Kolkata x Ashari",
    category: "VIDEO",
    contribution: "Vlog Capture, Pacing & Beat Sync",
    context:
      "Upbeat environmental mobilization reel capturing youth sapling plantation and animal care in rainy weather.",
    image: "/portfolio/digitally-kolkata-logo.jpg",
    aspect: "aspect-[9/16]",
    size: "medium",
    videoItem: {
      id: "clean-up-kolkata-video",
      title: "Weekend Green Up Drive & Community Action Reel",
      brand: "Clean Up Kolkata Collective x Ashari",
      format: "REEL (9:16)",
      duration: "0:56",
      tools: ["VN Editor", "On-Ground Shoot", "Beat Sync"],
      hook: "Rain-gear crew selfie vlog hook transitioning into rhythmic spade and plantation cuts.",
      body: "Youth volunteer mobilization, tree planting, and collaborative environmental action across Kolkata.",
      cta: "Join us for the next spot — plant more trees.",
      audioDirection: "Hip-hop instrumental beat-drops synced with shovels and volunteer moments.",
      videoSrc: "/videos/clean-up-kolkata-green-drive.mp4",
      driveUrl: "https://drive.google.com/file/d/1mLxqOZVCPG7Jh6rXZ6Y7Bb9fBsSiuSi_/view?usp=drive_link",
      poster: "/portfolio/digitally-kolkata-logo.jpg",
      aspect: "aspect-[9/16]",
    },
  },
  {
    id: "kdmi-christmas",
    title: "KDMI — “Invest in Skills, Not Just Gifts”",
    brand: "KDMI (Digital Marketing Institute)",
    category: "CAMPAIGN",
    contribution: "Festive Campaign Creative & Social Copy",
    context:
      "Christmas holiday marketing campaign encouraging career changers to invest in in-demand digital marketing skills.",
    image: "/portfolio/kdmi-christmas-campaign.png",
    aspect: "aspect-[9/16]",
    size: "tall",
  },
  {
    id: "dk-christmas",
    title: "Digitally Kolkata — Festive Season Creative",
    brand: "Digitally Kolkata",
    category: "CAMPAIGN",
    contribution: "Holiday Greeting & Agency Collateral",
    context:
      "Festive social media greeting wishing businesses clicks, revenue growth, and digital visibility.",
    image: "/portfolio/digitally-kolkata-christmas.png",
    aspect: "aspect-[9/16]",
    size: "tall",
  },
  {
    id: "core-fit",
    title: "Core Fit — High-Impact Creative & Copy",
    brand: "Core Fit (Fitness)",
    category: "SOCIAL",
    contribution: "Visual Layout & Copywriting",
    context:
      "Designed to trigger instant scroll-stopping attention with assertive motivational typography and high-contrast fitness art direction.",
    image: "/portfolio/fitness-brand-be-fit.jpg",
    aspect: "aspect-square",
    size: "medium",
  },
  {
    id: "walplast-fifa",
    title: "Walplast FIFA 2026 Knockout Creative",
    brand: "Walplast",
    category: "CAMPAIGN",
    contribution: "Campaign Planning & Community Asset",
    context:
      "Matchday fixture graphic deployed to engage football fans with live prediction incentives during knockout rounds.",
    image: "/Brand_Logo/Walplast_Fifa_Campaign.png",
    aspect: "aspect-[16/9]",
    size: "medium",
  },
  {
    id: "digitally-kolkata-logo",
    title: "Digitally Kolkata — Heritage Brand Emblem",
    brand: "Digitally Kolkata",
    category: "BRANDING",
    contribution: "Brand Mark Concept & Identity",
    context:
      "Circular emblem marrying Kolkata's architectural heritage with contemporary digital growth symbolism.",
    image: "/portfolio/digitally-kolkata-logo.jpg",
    aspect: "aspect-square",
    size: "medium",
  },
  {
    id: "digitally-kolkata-banner",
    title: "Digitally Kolkata — Agency Brand Banner",
    brand: "Digitally Kolkata",
    category: "GRAPHICS",
    contribution: "Digital Collateral & Layout",
    context:
      "Wide banner asset showcasing localized digital consulting capabilities across social and search platforms.",
    image: "/portfolio/digitally-kolkata-banner.jpg",
    aspect: "aspect-[16/9]",
    size: "medium",
  },
  {
    id: "digital-age",
    title: "Digital Age — Circuit Concept Brand Mark",
    brand: "Digital Age",
    category: "BRANDING",
    contribution: "Logo Concept & Typography",
    context:
      "Geometric circuit-board typography exploring technology and connectivity aesthetics.",
    image: "/portfolio/digital-age-brand.jpg",
    aspect: "aspect-[16/9]",
    size: "medium",
  },
  {
    id: "cube-motion-graphic",
    title: "3D Isometric Neon Dimension Graphic",
    brand: "Creative Motion Lab",
    category: "VIDEO",
    contribution: "3D Motion Design & Looping",
    context:
      "Seamless isometric 3D rotating geometry showcasing neon edge illumination and loop timing.",
    image: "/portfolio/digital-age-brand.jpg",
    aspect: "aspect-[16/9]",
    size: "medium",
    videoItem: {
      id: "cube-motion-graphic",
      title: "3D Isometric Neon Dimension Graphic",
      brand: "Creative Motion Lab",
      format: "MOTION TEASER",
      duration: "0:05",
      tools: ["3D Motion", "Keyframing", "Lighting"],
      hook: "Smooth rotating isometric cube revealing vibrant neon edge transitions.",
      body: "Seamless continuous loop demonstrating 3D depth and specular highlights.",
      cta: "Continuous dynamic background loop for tech branding.",
      videoSrc: "/videos/cube-3d-motion.mp4",
      driveUrl: "https://drive.google.com/file/d/1sY-pbkHXolW6a-AYYLeGc3hbU-jE02nl/view?usp=drive_link",
      poster: "/portfolio/digital-age-brand.jpg",
      aspect: "aspect-[16/9]",
    },
  },
  {
    id: "msp-steel-logo",
    title: "MSP Steel — Industrial Brand Identity",
    brand: "MSP Steel",
    category: "GRAPHICS",
    contribution: "Digital Post Handling & Brand Asset",
    context:
      "Supported digital asset formatting and B2B social media presentation for industrial manufacturing.",
    image: "/Brand_Logo/msp.png.png",
    aspect: "aspect-[4/3]",
    size: "medium",
  },
  {
    id: "drychem-logo",
    title: "Drychem — Construction Brand Visual",
    brand: "Drychem",
    category: "GRAPHICS",
    contribution: "Content Flow & Brand Asset Support",
    context:
      "Maintained visual brand standards across regular product updates and digital announcements.",
    image: "/Brand_Logo/drychem.png.png",
    aspect: "aspect-[4/3]",
    size: "medium",
  },
  {
    id: "zee-bangla-logo",
    title: "Zee Bangla Sonar — Media Brand Asset",
    brand: "Zee Bangla Sonar",
    category: "SOCIAL",
    contribution: "Social Media Execution Support",
    context:
      "Coordinated promotional social assets for regional broadcast programming and digital reach.",
    image: "/Brand_Logo/z_bangla.png.png",
    aspect: "aspect-[4/3]",
    size: "medium",
  },
];

const categories = ["ALL", "CAMPAIGN", "SOCIAL", "VIDEO", "BRANDING", "GRAPHICS"] as const;

export default function CreativeGalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<typeof categories[number]>("ALL");
  const [activeItem, setActiveItem] = useState<CreativeItem | null>(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0);
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

  const filteredItems = creativeWorks.filter((item) => {
    if (selectedCategory === "ALL") return true;
    return item.category === selectedCategory;
  });

  const currentFilteredImages = filteredItems.filter((i) => !i.videoItem);
  const activeIndex = activeItem
    ? currentFilteredImages.findIndex((i) => i.id === activeItem.id)
    : -1;

  const openLightbox = (item: CreativeItem, slideIdx = 0) => {
    setActiveItem(item);
    setActiveSlideIndex(slideIdx);
  };

  const showPrevItem = useCallback(() => {
    if (activeIndex > 0) {
      setActiveItem(currentFilteredImages[activeIndex - 1]);
      setActiveSlideIndex(0);
    } else if (currentFilteredImages.length > 0) {
      setActiveItem(currentFilteredImages[currentFilteredImages.length - 1]);
      setActiveSlideIndex(0);
    }
  }, [activeIndex, currentFilteredImages]);

  const showNextItem = useCallback(() => {
    if (activeIndex < currentFilteredImages.length - 1) {
      setActiveItem(currentFilteredImages[activeIndex + 1]);
      setActiveSlideIndex(0);
    } else if (currentFilteredImages.length > 0) {
      setActiveItem(currentFilteredImages[0]);
      setActiveSlideIndex(0);
    }
  }, [activeIndex, currentFilteredImages]);

  const prevSlide = useCallback(() => {
    if (!activeItem?.slides || activeItem.slides.length <= 1) {
      showPrevItem();
      return;
    }
    setActiveSlideIndex((prev) => (prev > 0 ? prev - 1 : activeItem.slides!.length - 1));
  }, [activeItem, showPrevItem]);

  const nextSlide = useCallback(() => {
    if (!activeItem?.slides || activeItem.slides.length <= 1) {
      showNextItem();
      return;
    }
    setActiveSlideIndex((prev) => (prev < activeItem.slides!.length - 1 ? prev + 1 : 0));
  }, [activeItem, showNextItem]);

  useEffect(() => {
    if (!activeItem) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveItem(null);
      } else if (e.key === "ArrowLeft") {
        if (activeItem.slides && activeItem.slides.length > 1) {
          prevSlide();
        } else {
          showPrevItem();
        }
      } else if (e.key === "ArrowRight") {
        if (activeItem.slides && activeItem.slides.length > 1) {
          nextSlide();
        } else {
          showNextItem();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeItem, prevSlide, nextSlide, showPrevItem, showNextItem]);

  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-32 pb-24 text-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="border-b border-dark-borderSubtle pb-10 mb-10">
            <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-warm-muted block mb-3">
              02 / VISUAL GALLERY
            </span>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-bold tracking-tight uppercase text-warm-white">
                  Creative &amp; Graphics
                </h1>
                <p className="text-warm-gray text-sm sm:text-base max-w-2xl mt-3 font-light">
                  A curated archive of actual social media creatives, multi-slide carousel campaigns, video reels, and brand collateral produced and supported.
                </p>
              </div>

              {/* Category Filter Chips */}
              <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3.5 py-1.5 rounded-full border transition-all ${
                      selectedCategory === cat
                        ? "btn-primary border-transparent font-semibold shadow-sm"
                        : "bg-dark-surface text-warm-gray border-dark-borderSubtle hover:text-warm-white hover:border-dark-border"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Gallery Items Layout */}
          <div className="space-y-10 sm:space-y-12">
            {/* 1. Multi-Slide Spread Showcase Items (Rendered with parts side-by-side) */}
            {filteredItems
              .filter((item) => item.slides && item.slides.length > 1)
              .map((item, index) => (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="rounded-2xl sm:rounded-3xl bg-dark-surface border border-dark-borderSubtle overflow-hidden shadow-lg p-5 sm:p-7 space-y-5"
                >
                  {/* Top Bar for Multi-Slide Campaign */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-dark-borderSubtle pb-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="px-2.5 py-0.5 rounded-full bg-accent-blue/10 text-accent-blue font-mono text-[10px] font-bold uppercase tracking-wider">
                          {item.category}
                        </span>
                        <span className="font-mono text-xs text-warm-muted font-semibold uppercase tracking-wider">
                          {item.brand}
                        </span>
                        <span className="font-mono text-[10px] text-accent-blue px-2.5 py-0.5 rounded-full bg-accent-blue/10 border border-accent-blue/20 font-bold inline-flex items-center gap-1">
                          <FiLayers size={11} />
                          {item.slides!.length} SLIDES · SPREAD PREVIEW
                        </span>
                      </div>
                      <h2 className="text-xl sm:text-2xl font-sans font-bold text-warm-white">
                        {item.title}
                      </h2>
                    </div>

                    {/* Quick Link Pills */}
                    <div className="flex items-center gap-2 flex-wrap shrink-0">
                      {item.canvaUrl && (
                        <a
                          href={item.canvaUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-dark-surface2 hover:bg-dark-border text-warm-white border border-dark-borderSubtle font-mono text-[11px] font-semibold transition-all shadow-sm"
                          title="Open original Canva template"
                        >
                          <SiCanva size={12} className="text-[#00C4CC]" aria-label="Canva" title="Canva" />
                          <span>Canva</span>
                          <FiExternalLink size={10} className="text-warm-muted" aria-hidden="true" />
                        </a>
                      )}
                      {item.pdfUrl && (
                        <a
                          href={item.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-dark-surface2 hover:bg-dark-border text-warm-white border border-dark-borderSubtle font-mono text-[11px] font-semibold transition-all shadow-sm"
                          title="View PDF archive"
                        >
                          <FiFileText size={12} className="text-accent-blue" aria-hidden="true" />
                          <span>PDF</span>
                          <FiExternalLink size={10} className="text-warm-muted" aria-hidden="true" />
                        </a>
                      )}
                      {item.driveUrl && (
                        <a
                          href={item.driveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-dark-surface2 hover:bg-dark-border text-warm-white border border-dark-borderSubtle font-mono text-[11px] font-semibold transition-all shadow-sm"
                          title="Google Drive link"
                        >
                          <FaGoogleDrive size={11} className="text-emerald-500" aria-label="Google Drive" title="Google Drive" />
                          <span>Drive</span>
                          <FiExternalLink size={10} className="text-warm-muted" aria-hidden="true" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Strategic Insight / Concept Note */}
                  {item.strategicRationale && (
                    <div className="p-4 rounded-xl bg-dark-surface2/60 border border-dark-borderSubtle text-xs sm:text-sm text-warm-gray leading-relaxed font-sans">
                      <span className="font-mono text-[10px] text-accent-blue uppercase tracking-wider font-bold block mb-1">
                        Concept &amp; Strategic Rationale:
                      </span>
                      {item.strategicRationale}
                    </div>
                  )}

                  {/* SPREAD: PARTS SIDE-BY-SIDE */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-warm-muted">
                        Carousel Sequence (Click any slide to view one by one)
                      </span>
                      <span className="hidden sm:inline font-mono text-[10px] text-accent-blue">
                        Full 1-by-1 Inspection Available →
                      </span>
                    </div>

                    <div
                      className={`grid gap-3 sm:gap-4 w-full ${
                        item.slides!.length === 4
                          ? "grid-cols-2 md:grid-cols-4"
                          : "grid-cols-1 sm:grid-cols-3"
                      }`}
                    >
                      {item.slides!.map((slide, sIdx) => (
                        <div
                          key={sIdx}
                          onClick={() => openLightbox(item, sIdx)}
                          className="group/slide relative flex flex-col h-full rounded-xl sm:rounded-2xl overflow-hidden border border-dark-borderSubtle hover:border-accent-blue/80 bg-[var(--card-media-bg)] cursor-pointer transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 w-full"
                          title={`Click to inspect Slide ${sIdx + 1} one by one`}
                        >
                          {/* Slide Aspect Ratio Container */}
                          <div className="relative w-full aspect-[4/5] overflow-hidden">
                            <Image
                              src={slide.image}
                              alt={slide.title || `Slide ${sIdx + 1}`}
                              fill
                              className="object-contain p-2 sm:p-2.5 transition-transform duration-500 ease-out group-hover/slide:scale-105"
                              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 300px"
                            />
                            {/* Hover overlay hint */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/slide:opacity-100 transition-opacity flex items-center justify-center">
                              <span className="px-2.5 py-1 rounded-full btn-primary font-mono text-[9px] uppercase tracking-wider font-semibold shadow-md flex items-center gap-1">
                                <FiZoomIn size={11} /> Slide {sIdx + 1}
                              </span>
                            </div>
                          </div>

                          {/* Slide Bottom Caption Bar */}
                          <div className="p-2.5 sm:p-3 border-t border-dark-borderSubtle bg-dark-surface space-y-0.5">
                            <div className="flex items-center justify-between">
                              <span className="font-mono text-[10px] font-bold text-accent-blue">
                                {slide.title ? slide.title.split("—")[0] : `Slide ${sIdx + 1}`}
                              </span>
                              <span className="font-mono text-[9px] text-warm-muted">
                                0{sIdx + 1}/0{item.slides!.length}
                              </span>
                            </div>
                            <p className="text-[11px] font-sans text-warm-gray truncate">
                              {slide.title ? slide.title.split("—")[1] || slide.title : ""}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}

            {/* 2. Grid for Single-Asset Creatives & Videos (Balanced Compact Card Sizes) */}
            <div className="pt-4">
              <div className="flex items-center justify-between mb-6 border-b border-dark-borderSubtle pb-3">
                <span className="font-mono text-xs tracking-wider uppercase text-warm-muted">
                  Single-Frame Creatives, Social Assets &amp; Video Reels
                </span>
                <span className="font-mono text-xs text-warm-gray">
                  {filteredItems.filter((i) => !i.slides || i.slides.length <= 1).length} Items
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
                {filteredItems
                  .filter((item) => !item.slides || item.slides.length <= 1)
                  .map((item, index) => (
                    <motion.article
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.03 }}
                      className="group relative rounded-2xl bg-dark-surface border border-dark-borderSubtle hover:border-accent-blue/50 transition-all overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-lg"
                    >
                      {/* Media Container */}
                      {item.videoItem ? (
                        <PortfolioVideoPreview
                          item={item.videoItem}
                          onClick={() => setActiveVideo(item.videoItem || null)}
                          className="h-[280px] sm:h-[310px] w-full"
                        />
                      ) : (
                        <div
                          onClick={() => openLightbox(item, 0)}
                          className="relative w-full h-[280px] sm:h-[310px] bg-[var(--card-media-bg)] overflow-hidden cursor-pointer select-none flex items-center justify-center"
                        >
                          {item.image.includes("/Brand_Logo/z_bangla") || item.image.includes("/Brand_Logo/msp") || item.image.includes("/Brand_Logo/walplast") || item.image.includes("/Brand_Logo/drychem") ? (
                            <div className="relative w-full h-full flex items-center justify-center p-8 sm:p-10">
                              <div className="relative w-full h-full max-w-[200px] max-h-[120px] sm:max-w-[230px] sm:max-h-[140px]">
                                <Image
                                  src={item.image}
                                  alt={item.title}
                                  fill
                                  className="object-contain transition-transform duration-500 ease-out group-hover:scale-105"
                                  sizes="(max-width: 640px) 100vw, 300px"
                                />
                              </div>
                            </div>
                          ) : (
                            <Image
                              src={item.image}
                              alt={item.title}
                              fill
                              className="object-contain p-3 sm:p-4 transition-transform duration-500 ease-out group-hover:scale-105"
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                          )}

                          {/* Top Left: Category Badge */}
                          <div className="absolute top-3 left-3 z-10">
                            <span className="px-2 py-0.5 rounded bg-dark-surface/85 backdrop-blur-md border border-dark-borderSubtle font-mono text-[9px] uppercase tracking-wider text-warm-white">
                              {item.category}
                            </span>
                          </div>

                          {/* Hover Hint */}
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full btn-primary font-mono text-[10px] uppercase tracking-wider font-semibold shadow-md">
                              <FiZoomIn size={12} /> Inspect Canvas
                            </span>
                          </div>
                        </div>
                      )}

                      {/* Card Metadata Footer */}
                      <div className="p-5 space-y-2 border-t border-dark-borderSubtle bg-dark-surface flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between font-mono text-[10px] text-warm-muted mb-1">
                            <span>{item.brand}</span>
                            <span className="uppercase tracking-wider">{item.category}</span>
                          </div>
                          <h3 className="text-base sm:text-lg font-sans font-bold text-warm-white group-hover:text-accent-blue transition-colors line-clamp-2">
                            {item.title}
                          </h3>
                        </div>

                        <p className="text-xs font-mono text-warm-gray pt-1">
                          <span className="text-warm-muted uppercase tracking-wider block text-[10px]">
                            Contribution:
                          </span>
                          {item.contribution}
                        </p>
                      </div>
                    </motion.article>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Fullscreen Lightbox Modal (Displays one by one with expansive preview) */}
      <AnimatePresence>
        {activeItem && !activeItem.videoItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="lightbox-creative-title"
            onClick={() => setActiveItem(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 modal-theater-backdrop overflow-y-auto cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-6xl h-[94vh] sm:h-[92vh] flex flex-col modal-theater-surface rounded-2xl sm:rounded-3xl border border-dark-borderSubtle shadow-2xl overflow-hidden cursor-default my-auto"
            >
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-dark-borderSubtle modal-theater-header shrink-0">
                <div className="min-w-0 pr-3">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className="px-2.5 py-0.5 rounded-full bg-accent-blue/10 text-accent-blue font-mono text-[10px] font-bold uppercase tracking-wider">
                      {activeItem.category}
                    </span>
                    <span className="font-mono text-xs text-warm-white font-bold uppercase tracking-wider">
                      {activeItem.brand}
                    </span>

                    {/* Carousel Slide Counter */}
                    {activeItem.slides && activeItem.slides.length > 1 && (
                      <span className="font-mono text-[10px] text-accent-blue px-2.5 py-0.5 rounded-full bg-accent-blue/10 border border-accent-blue/20 font-bold">
                        Slide {activeSlideIndex + 1} of {activeItem.slides.length}
                      </span>
                    )}

                    {/* Overall Gallery Counter */}
                    {currentFilteredImages.length > 1 && activeIndex !== -1 && (
                      <span className="font-mono text-[10px] text-warm-muted px-2 py-0.5 rounded bg-dark-surface2">
                        Item {activeIndex + 1} / {currentFilteredImages.length}
                      </span>
                    )}
                  </div>

                  <h3 id="lightbox-creative-title" className="text-base sm:text-lg font-sans font-bold text-warm-white truncate">
                    {activeItem.title}
                  </h3>
                </div>

                {/* Right side controls: Links + Close */}
                <div className="flex items-center gap-2 shrink-0">
                  {activeItem.canvaUrl && (
                    <a
                      href={activeItem.canvaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-dark-surface2 hover:bg-dark-border text-warm-white border border-dark-borderSubtle font-mono text-[11px] font-semibold tracking-wider transition-colors shadow-sm"
                      title="Open Canva Template"
                    >
                      <SiCanva size={12} className="text-[#00C4CC]" aria-label="Canva" title="Canva" />
                      <span>Canva</span>
                      <FiExternalLink size={10} className="text-warm-muted" aria-hidden="true" />
                    </a>
                  )}

                  {activeItem.pdfUrl && (
                    <a
                      href={activeItem.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-dark-surface2 hover:bg-dark-border text-warm-white border border-dark-borderSubtle font-mono text-[11px] font-semibold tracking-wider transition-colors shadow-sm"
                      title="Open full PDF document"
                    >
                      <FiFileText size={12} className="text-accent-blue" aria-hidden="true" />
                      <span>PDF</span>
                      <FiExternalLink size={10} className="text-warm-muted" aria-hidden="true" />
                    </a>
                  )}

                  {activeItem.driveUrl && (
                    <a
                      href={activeItem.driveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-dark-surface2 hover:bg-dark-border text-warm-white border border-dark-borderSubtle font-mono text-[11px] font-semibold tracking-wider transition-colors shadow-sm"
                      title="Open Google Drive file"
                    >
                      <FaGoogleDrive size={11} className="text-emerald-500" aria-label="Google Drive" title="Google Drive" />
                      <span>Drive</span>
                      <FiExternalLink size={10} className="text-warm-muted" aria-hidden="true" />
                    </a>
                  )}

                  {/* Close Button */}
                  <button
                    onClick={() => setActiveItem(null)}
                    className="p-2.5 rounded-full bg-dark-surface2 hover:bg-dark-border text-warm-white transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center shrink-0 border border-dark-borderSubtle shadow-sm"
                    aria-label="Close lightbox"
                  >
                    <FiX size={18} />
                  </button>
                </div>
              </div>

              {/* Central Canvas Viewport: EXPANSIVE & SHOWS ONE BY ONE */}
              <div className="relative flex-1 min-h-0 overflow-hidden modal-theater-canvas flex flex-col items-center justify-center p-2 sm:p-4 select-none">
                <div className="relative w-full h-full max-h-[64vh] sm:max-h-[70vh] md:max-h-[74vh] flex items-center justify-center">
                  <div className={`relative w-full h-full flex items-center justify-center ${
                    activeItem.image.includes("/Brand_Logo/") && (!activeItem.slides || activeItem.slides.length <= 1)
                      ? "max-w-md max-h-[220px] sm:max-h-[260px]"
                      : ""
                  }`}>
                    <Image
                      src={
                        activeItem.slides && activeItem.slides[activeSlideIndex]
                          ? activeItem.slides[activeSlideIndex].image
                          : activeItem.image
                      }
                      alt={
                        activeItem.slides && activeItem.slides[activeSlideIndex]?.title
                          ? activeItem.slides[activeSlideIndex].title!
                          : activeItem.title
                      }
                      fill
                      className="object-contain drop-shadow-2xl rounded-sm"
                      sizes="(max-width: 1024px) 100vw, 1200px"
                      priority
                    />
                  </div>
                </div>

                {/* Prev Navigation Button */}
                {(activeItem.slides && activeItem.slides.length > 1 ? true : currentFilteredImages.length > 1) && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (activeItem.slides && activeItem.slides.length > 1) {
                        prevSlide();
                      } else {
                        showPrevItem();
                      }
                    }}
                    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-dark-surface/90 hover:bg-dark-surface text-warm-white border border-dark-borderSubtle transition-all shadow-xl hover:scale-110 z-20"
                    aria-label="Previous"
                    title={activeItem.slides ? "Previous Slide (Left Arrow)" : "Previous Project (Left Arrow)"}
                  >
                    <FiChevronLeft size={20} />
                  </button>
                )}

                {/* Next Navigation Button */}
                {(activeItem.slides && activeItem.slides.length > 1 ? true : currentFilteredImages.length > 1) && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (activeItem.slides && activeItem.slides.length > 1) {
                        nextSlide();
                      } else {
                        showNextItem();
                      }
                    }}
                    className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-dark-surface/90 hover:bg-dark-surface text-warm-white border border-dark-borderSubtle transition-all shadow-xl hover:scale-110 z-20"
                    aria-label="Next"
                    title={activeItem.slides ? "Next Slide (Right Arrow)" : "Next Project (Right Arrow)"}
                  >
                    <FiChevronRight size={20} />
                  </button>
                )}

                {/* Filmstrip Strip for Multi-Slide Carousels */}
                {activeItem.slides && activeItem.slides.length > 1 && (
                  <div className="flex items-center justify-center gap-2 pt-2 sm:pt-3 pb-0.5 overflow-x-auto max-w-full z-10 shrink-0">
                    {activeItem.slides.map((s, sIdx) => (
                      <button
                        key={sIdx}
                        onClick={() => setActiveSlideIndex(sIdx)}
                        className={`relative rounded-md overflow-hidden border transition-all ${
                          sIdx === activeSlideIndex
                            ? "border-accent-blue ring-2 ring-accent-blue/40 scale-105 opacity-100 shadow-md"
                            : "border-dark-borderSubtle opacity-50 hover:opacity-90"
                        } w-10 h-12 sm:w-12 sm:h-14 shrink-0 bg-dark-surface`}
                        aria-label={`Jump to slide ${sIdx + 1}`}
                        title={s.title || `Slide ${sIdx + 1}`}
                      >
                        <Image src={s.image} alt={s.title || ""} fill className="object-cover" sizes="50px" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Bottom Caption, Strategic Concept & Context Bar */}
              <div className="px-4 sm:px-6 py-3 sm:py-4 border-t border-dark-borderSubtle modal-theater-footer space-y-2 shrink-0 max-h-[26vh] overflow-y-auto">
                {/* Specific Slide Title and Narrative */}
                {activeItem.slides && activeItem.slides[activeSlideIndex] && (
                  <div className="pb-2 border-b border-dark-borderSubtle">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-accent-blue font-bold block">
                      {activeItem.slides[activeSlideIndex].title}
                    </span>
                    <p className="text-xs sm:text-sm text-warm-white leading-relaxed font-sans font-medium mt-0.5">
                      {activeItem.slides[activeSlideIndex].description}
                    </p>
                  </div>
                )}

                {/* Strategic Concept & Context */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-warm-muted font-bold block">
                      Strategic Idea &amp; Campaign Objective
                    </span>
                    {/* Mobile External Links */}
                    <div className="flex items-center gap-2 sm:hidden">
                      {activeItem.canvaUrl && (
                        <a
                          href={activeItem.canvaUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-[10px] text-accent-blue hover:underline flex items-center gap-1"
                        >
                          <SiCanva size={10} className="text-[#00C4CC]" aria-label="Canva" title="Canva" /> Canva
                        </a>
                      )}
                      {activeItem.pdfUrl && (
                        <a
                          href={activeItem.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-[10px] text-accent-blue hover:underline flex items-center gap-1"
                        >
                          <FiFileText size={10} aria-hidden="true" /> PDF
                        </a>
                      )}
                      {activeItem.driveUrl && (
                        <a
                          href={activeItem.driveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-[10px] text-emerald-500 hover:underline flex items-center gap-1"
                        >
                          <FaGoogleDrive size={10} aria-label="Google Drive" title="Google Drive" /> Drive
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-warm-gray leading-relaxed font-sans font-normal">
                    {activeItem.strategicRationale || activeItem.context}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video Modal Player */}
      <VideoPlayerModal
        item={activeVideo}
        onClose={() => setActiveVideo(null)}
      />

      <Footer />
    </>
  );
}
