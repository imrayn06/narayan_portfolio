"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiZoomIn, FiX, FiPlay } from "react-icons/fi";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  PortfolioVideoPreview,
  VideoPlayerModal,
  type VideoItem,
} from "@/components/PortfolioVideoCard";

interface CreativeItem {
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
}

const creativeWorks: CreativeItem[] = [
  {
    id: "bisleri-ad",
    title: "Bisleri — “Party or Recovery, Piyo Bisleri”",
    brand: "Bisleri (Spec Campaign)",
    category: "CAMPAIGN",
    contribution: "Visual Art Direction & Ad Copywriting",
    context: "Dual-scenario split visual creative contrasting nightlife party hydration with morning wellness recovery, positioning packaged water as essential.",
    image: "/portfolio/bisleri-ad-creative.jpg",
    aspect: "aspect-[3/4]",
    size: "large",
  },
  {
    id: "colosseum-creative",
    title: "Colosseum Fitness — “What The Mind Believes”",
    brand: "Colosseum Fitness",
    category: "SOCIAL",
    contribution: "Creative Direction & Promotional Layout",
    context: "Assertive, high-impact gym promotional creative driving memberships at Axis Mall, Newtown with high-contrast typography and bold palette.",
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
    context: "Cultural Gangs of Wasseypur meme angle deployed to trigger organic gym humor, comments, and friend tagging on social channels.",
    image: "/portfolio/colosseum-fitness-meme.png",
    aspect: "aspect-[9/16]",
    size: "tall",
  },
  {
    id: "tiib-dubai-video",
    title: "TIIB Dubai — Scholarship Campaign Video Reel",
    brand: "Edu Global / TIIB Dubai",
    category: "VIDEO",
    contribution: "Short-Form Video & Hook Sequencing",
    context: "Vertical advertising reel promoting fully funded scholarships in Dubai with dynamic POV hook and local Kolkata seminar invitation.",
    image: "/portfolio/digitally-kolkata-banner.jpg",
    aspect: "aspect-[9/16]",
    size: "large",
    videoItem: {
      id: "tiib-dubai-video",
      title: "TIIB Dubai — Fully Funded Scholarships Ad Reel",
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
    id: "clean-up-kolkata-video",
    title: "Clean Up Kolkata — Green Up Drive Community Action Reel",
    brand: "Clean Up Kolkata x Ashari",
    category: "VIDEO",
    contribution: "Vlog Capture, Pacing & Beat Sync",
    context: "Upbeat environmental mobilization reel capturing youth sapling plantation and animal care in rainy weather.",
    image: "/portfolio/digitally-kolkata-logo.jpg",
    aspect: "aspect-[9/16]",
    size: "large",
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
    context: "Christmas holiday marketing campaign encouraging career changers to invest in in-demand digital marketing skills.",
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
    context: "Festive social media greeting wishing businesses clicks, revenue growth, and digital visibility.",
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
    context: "Designed to trigger instant scroll-stopping attention with assertive motivational typography and high-contrast fitness art direction.",
    image: "/portfolio/fitness-brand-be-fit.jpg",
    aspect: "aspect-square",
    size: "large",
  },
  {
    id: "walplast-fifa",
    title: "Walplast FIFA 2026 Knockout Creative",
    brand: "Walplast",
    category: "CAMPAIGN",
    contribution: "Campaign Planning & Community Asset",
    context: "Matchday fixture graphic deployed to engage football fans with live prediction incentives during knockout rounds.",
    image: "/Brand_Logo/Walplast_Fifa_Campaign.png",
    aspect: "aspect-[16/9]",
    size: "large",
  },
  {
    id: "digitally-kolkata-logo",
    title: "Digitally Kolkata — Heritage Brand Emblem",
    brand: "Digitally Kolkata",
    category: "BRANDING",
    contribution: "Brand Mark Concept & Identity",
    context: "Circular emblem marrying Kolkata's architectural heritage with contemporary digital growth symbolism.",
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
    context: "Wide banner asset showcasing localized digital consulting capabilities across social and search platforms.",
    image: "/portfolio/digitally-kolkata-banner.jpg",
    aspect: "aspect-[16/9]",
    size: "large",
  },
  {
    id: "digital-age",
    title: "Digital Age — Circuit Concept Brand Mark",
    brand: "Digital Age",
    category: "BRANDING",
    contribution: "Logo Concept & Typography",
    context: "Geometric circuit-board typography exploring technology and connectivity aesthetics.",
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
    context: "Seamless isometric 3D rotating geometry showcasing neon edge illumination and loop timing.",
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
    context: "Supported digital asset formatting and B2B social media presentation for industrial manufacturing.",
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
    context: "Maintained visual brand standards across regular product updates and digital announcements.",
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
    context: "Coordinated promotional social assets for regional broadcast programming and digital reach.",
    image: "/Brand_Logo/z_bangla.png.png",
    aspect: "aspect-[4/3]",
    size: "medium",
  },
];

const categories = ["ALL", "CAMPAIGN", "SOCIAL", "VIDEO", "BRANDING", "GRAPHICS"] as const;

export default function CreativeGalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<typeof categories[number]>("ALL");
  const [activeItem, setActiveItem] = useState<CreativeItem | null>(null);
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

  const filteredItems = creativeWorks.filter((item) => {
    if (selectedCategory === "ALL") return true;
    return item.category === selectedCategory;
  });

  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-32 pb-24 text-warm-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          {/* Header */}
          <div className="border-b border-white/[0.08] pb-12 mb-12">
            <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-warm-muted block mb-3">
              02 / VISUAL GALLERY
            </span>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div>
                <h1 className="text-4xl sm:text-6xl font-sans font-bold tracking-tight uppercase text-warm-white">
                  Creative &amp; Graphics
                </h1>
                <p className="text-warm-gray text-base sm:text-lg max-w-2xl mt-4 font-light">
                  A curated archive of actual social media creatives, advertising campaigns, video reels, and brand collateral produced and supported.
                </p>
              </div>

              {/* Category Filter Chips */}
              <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full border transition-all ${
                      selectedCategory === cat
                        ? "btn-primary border-transparent font-semibold shadow-sm"
                        : "bg-transparent text-warm-gray border-dark-borderSubtle hover:text-warm-white hover:border-dark-border"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Asymmetrical Editorial Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-start">
            {filteredItems.map((item, index) => {
              const colSpan =
                item.size === "large"
                  ? "md:col-span-8"
                  : item.size === "tall"
                  ? "md:col-span-4"
                  : index % 3 === 0
                  ? "md:col-span-7"
                  : "md:col-span-5";

              return (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.04 }}
                  className={`${colSpan} group relative rounded-2xl bg-dark-surface border border-white/[0.08] hover:border-white/20 transition-all overflow-hidden flex flex-col justify-between`}
                >
                  {/* Media Container */}
                  {item.videoItem ? (
                    <PortfolioVideoPreview
                      item={item.videoItem}
                      onClick={() => setActiveVideo(item.videoItem || null)}
                      className="aspect-[16/10]"
                    />
                  ) : (
                    <div
                      onClick={() => setActiveItem(item)}
                      className={`relative w-full ${
                        item.aspect === "aspect-[9/16]"
                          ? "aspect-[9/14]"
                          : item.aspect === "aspect-[3/4]"
                          ? "aspect-[4/5]"
                          : "aspect-[4/3]"
                      } bg-[#141414] overflow-hidden cursor-pointer`}
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-contain p-4 transition-transform duration-700 ease-out group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 60vw"
                      />

                      {/* Dark gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-30 group-hover:opacity-10 transition-opacity" />

                      {/* Hover Hint */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full btn-primary font-mono text-[10px] uppercase tracking-wider font-semibold shadow-md">
                          <FiZoomIn size={12} /> Inspect Canvas
                        </span>
                      </div>

                      <div className="absolute top-4 left-4">
                        <span className="px-2.5 py-1 rounded bg-black/75 backdrop-blur-md border border-white/[0.08] font-mono text-[9px] uppercase tracking-wider text-warm-white">
                          {item.category}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Metadata Footer */}
                  <div className="p-6 space-y-2 border-t border-white/[0.06]">
                    <div className="flex items-center justify-between font-mono text-[11px] text-warm-muted">
                      <span>{item.brand}</span>
                      <span className="text-[10px] uppercase tracking-wider">
                        {item.category}
                      </span>
                    </div>
                    <h2 className="text-lg sm:text-xl font-sans font-bold text-warm-white group-hover:text-accent-blue transition-colors">
                      {item.title}
                    </h2>
                    <p className="text-xs font-mono text-warm-gray pt-1">
                      <span className="text-warm-muted uppercase tracking-wider block text-[10px]">
                        Contribution:
                      </span>
                      {item.contribution}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </main>

      {/* Fullscreen Lightbox Modal for Images */}
      <AnimatePresence>
        {activeItem && !activeItem.videoItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveItem(null)}
            className="fixed inset-0 z-50 bg-black/92 backdrop-blur-md p-4 sm:p-8 flex flex-col justify-between cursor-zoom-out"
          >
            {/* Top Bar with Minimal Metadata */}
            <div
              className="max-w-7xl w-full mx-auto flex items-center justify-between font-mono text-xs text-warm-gray pt-2"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="space-y-0.5">
                <span className="text-warm-white font-bold uppercase tracking-wider">
                  {activeItem.brand}
                </span>
                <span className="text-warm-muted block text-[10px]">
                  {activeItem.category} · {activeItem.contribution}
                </span>
              </div>

              <button
                onClick={() => setActiveItem(null)}
                className="p-2.5 rounded-full bg-white/[0.1] hover:bg-white/[0.2] text-warm-white transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Close"
              >
                <FiX size={20} />
              </button>
            </div>

            {/* Central Canvas */}
            <div
              className="relative max-w-5xl max-h-[75vh] w-full h-full mx-auto flex items-center justify-center my-4"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={activeItem.image}
                alt={activeItem.title}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>

            {/* Bottom Caption */}
            <div
              className="max-w-2xl mx-auto text-center font-mono text-xs text-warm-gray pb-2 px-4"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="leading-relaxed font-light">{activeItem.context}</p>
            </div>
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
