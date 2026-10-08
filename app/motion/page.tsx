"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlay, FiX, FiFilm, FiArrowRight } from "react-icons/fi";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

interface VideoConcept {
  id: string;
  title: string;
  brand: string;
  format: "REEL (9:16)" | "CAMPAIGN CUT" | "MOTION TEASER";
  duration: string;
  tools: string[];
  hook: string;
  body: string;
  cta: string;
  audioDirection: string;
  poster: string;
  aspect: string;
}

const motionWork: VideoConcept[] = [
  {
    id: "winter-purity",
    title: "“Cold Weather, Constant Purity” — Winter Reel",
    brand: "Bisleri (Spec Project)",
    format: "REEL (9:16)",
    duration: "0:15",
    tools: ["CapCut", "VN", "Audio Sync"],
    hook: "Macro shot of frosty morning window pane; hand wipes steam away to reveal a chilled Bisleri bottle.",
    body: "Subject takes a sip in cold winter ambience; quick rhythmic cut to glowing morning sun and pure water pour.",
    cta: "Clean kinetic typography: “Purity that stays. Even in winters.”",
    audioDirection: "Atmospheric ambient winter breeze transition into crisp acoustic beat drop at second 03.",
    poster: "/portfolio/digital-age-brand.jpg",
    aspect: "aspect-[9/16]",
  },
  {
    id: "fifa-prediction",
    title: "Knockout Matchday Prediction Motion Graphic",
    brand: "Walplast (FIFA Campaign)",
    format: "MOTION TEASER",
    duration: "0:20",
    tools: ["CapCut", "Motion Edits", "Canva"],
    hook: "Fast countdown clock ticking backwards with football stadium roar audio.",
    body: "Split-screen dynamic team face-off with animated score brackets prompting viewers: “Who takes the trophy?”",
    cta: "Comment your exact score + tag 2 friends before kickoff to win.",
    audioDirection: "High-energy stadium whistle with heartbeat bass buildup.",
    poster: "/Brand_Logo/Walplast_Fifa_Campaign.png",
    aspect: "aspect-[16/9]",
  },
  {
    id: "core-fit-intensity",
    title: "“No Excuses” High-Intensity Workout Cut",
    brand: "Core Fit (Fitness)",
    format: "REEL (9:16)",
    duration: "0:15",
    tools: ["VN Editor", "CapCut", "Speed Ramping"],
    hook: "Extreme close-up of chalk clapping onto barbell with sudden speed-ramped drop.",
    body: "Rapid 0.5s jump cuts matching high-BPM phonk/trap music during compound lifts.",
    cta: "Kinetic text: “Start before you feel ready. Join Core Fit today.”",
    audioDirection: "Aggressive bass hit on rep lockout with muffled gym ambiance.",
    poster: "/portfolio/fitness-brand-be-fit.jpg",
    aspect: "aspect-[9/16]",
  },
  {
    id: "kolkata-growth",
    title: "“Built for Local Businesses” Identity Motion",
    brand: "Digitally Kolkata",
    format: "CAMPAIGN CUT",
    duration: "0:30",
    tools: ["Motion Edits", "CapCut", "Graphic Overlays"],
    hook: "Drone timelapse of Howrah Bridge transitioning seamlessly into digital analytics interface graph.",
    body: "Showcasing local small business transformation through structured SEO, local discovery, and paid ads.",
    cta: "Book your digital growth consultation. Link in bio.",
    audioDirection: "Warm Lo-Fi chill beat with subtle acoustic tabla undertones.",
    poster: "/portfolio/digitally-kolkata-banner.jpg",
    aspect: "aspect-[16/9]",
  },
];

export default function MotionPage() {
  const [activeConcept, setActiveConcept] = useState<VideoConcept | null>(null);

  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-32 pb-24 text-warm-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          {/* Header */}
          <div className="border-b border-white/[0.08] pb-12 mb-12">
            <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-warm-muted block mb-3">
              03 / MOTION &amp; VIDEO
            </span>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div>
                <h1 className="text-4xl sm:text-6xl font-sans font-bold tracking-tight uppercase text-warm-white">
                  Short-Form &amp; Motion
                </h1>
                <p className="text-warm-gray text-base sm:text-lg max-w-2xl mt-4 font-light">
                  Storyboards, pacing outlines, reel concepts, and editing workflows designed for Instagram Reels, Meta Ads, and video engagement.
                </p>
              </div>

              <div className="font-mono text-xs text-warm-muted">
                <span>TOOLS: CapCut · VN Editor · Meta Reels · YouTube Studio</span>
              </div>
            </div>
          </div>

          {/* Cinematic Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {motionWork.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group rounded-2xl bg-dark-surface border border-white/[0.08] hover:border-white/20 transition-all overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Cinematic Poster Container */}
                  <div
                    onClick={() => setActiveConcept(item)}
                    className="relative w-full aspect-[16/10] bg-[#141414] overflow-hidden cursor-pointer"
                  >
                    <Image
                      src={item.poster}
                      alt={item.title}
                      fill
                      className="object-contain p-6 transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />

                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                    {/* Play Badge */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white flex items-center justify-center group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all shadow-xl">
                        <FiPlay size={22} className="ml-0.5" />
                      </div>
                    </div>

                    {/* Top Badges */}
                    <div className="absolute top-4 inset-x-4 flex items-center justify-between font-mono text-[10px]">
                      <span className="px-2.5 py-1 rounded bg-black/80 backdrop-blur-md border border-white/[0.1] uppercase tracking-wider text-warm-white">
                        {item.format}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-black/80 text-warm-gray border border-white/[0.06]">
                        {item.duration}
                      </span>
                    </div>

                    {/* Bottom Tagline */}
                    <div className="absolute bottom-4 inset-x-4 font-mono text-[11px] text-warm-muted truncate">
                      <span>Brand: {item.brand}</span>
                    </div>
                  </div>

                  {/* Body Info */}
                  <div className="p-6 md:p-8 space-y-4">
                    <h2 className="text-xl sm:text-2xl font-sans font-bold text-warm-white group-hover:text-accent-blue transition-colors">
                      {item.title}
                    </h2>

                    <div className="space-y-2 text-xs font-mono text-warm-gray">
                      <p>
                        <span className="text-warm-muted uppercase tracking-wider block text-[10px]">
                          Hook (0–3s):
                        </span>
                        {item.hook}
                      </p>
                    </div>

                    <div className="pt-2 flex flex-wrap gap-1.5 font-mono text-[10px] text-warm-muted">
                      {item.tools.map((t, i) => (
                        <span key={i} className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 md:p-8 pt-0 border-t border-white/[0.04]">
                  <button
                    onClick={() => setActiveConcept(item)}
                    className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-warm-white hover:text-accent-blue transition-colors"
                  >
                    <span>Inspect Concept Breakdown</span>
                    <FiArrowRight />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </main>

      {/* Cinematic Modal Player / Breakdown */}
      <AnimatePresence>
        {activeConcept && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveConcept(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md p-4 sm:p-6 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full bg-[#111111] border border-white/[0.12] rounded-3xl p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-warm-muted">
                    {activeConcept.format} · {activeConcept.duration}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-sans font-bold text-warm-white mt-1">
                    {activeConcept.title}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveConcept(null)}
                  className="p-2 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-warm-white transition-colors min-h-[40px] min-w-[40px] flex items-center justify-center"
                  aria-label="Close"
                >
                  <FiX size={18} />
                </button>
              </div>

              {/* Poster frame in modal */}
              <div className="relative w-full aspect-[16/9] bg-[#161616] rounded-2xl overflow-hidden border border-white/[0.08]">
                <Image
                  src={activeConcept.poster}
                  alt={activeConcept.title}
                  fill
                  className="object-contain p-4"
                />
              </div>

              {/* Storyboard script details */}
              <div className="space-y-4 text-sm font-light leading-relaxed">
                <div className="p-4 rounded-xl bg-dark-surface border border-white/[0.06] space-y-1">
                  <span className="font-mono text-xs uppercase tracking-wider text-warm-white font-semibold">
                    01 / 3-Second Visual Hook
                  </span>
                  <p className="text-warm-gray text-xs font-mono">{activeConcept.hook}</p>
                </div>

                <div className="p-4 rounded-xl bg-dark-surface border border-white/[0.06] space-y-1">
                  <span className="font-mono text-xs uppercase tracking-wider text-warm-white font-semibold">
                    02 / Content Body &amp; Retention
                  </span>
                  <p className="text-warm-gray text-xs font-mono">{activeConcept.body}</p>
                </div>

                <div className="p-4 rounded-xl bg-dark-surface border border-white/[0.06] space-y-1">
                  <span className="font-mono text-xs uppercase tracking-wider text-warm-white font-semibold">
                    03 / Final Call to Action
                  </span>
                  <p className="text-warm-gray text-xs font-mono">{activeConcept.cta}</p>
                </div>

                <div className="p-4 rounded-xl bg-dark-surface border border-white/[0.06] space-y-1">
                  <span className="font-mono text-xs uppercase tracking-wider text-warm-white font-semibold">
                    04 / Audio &amp; Music Treatment
                  </span>
                  <p className="text-warm-gray text-xs font-mono">{activeConcept.audioDirection}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-warm-muted">
                <span>Brand: {activeConcept.brand}</span>
                <span>Production Tools: {activeConcept.tools.join(" · ")}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}
