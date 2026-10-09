"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  PortfolioVideoPreview,
  VideoPlayerModal,
  type VideoItem,
} from "@/components/PortfolioVideoCard";

const motionWork: VideoItem[] = [
  {
    id: "tiib-dubai-scholarship",
    title: "“Finished 12th? Fully Funded Dubai Scholarships” — Ad Reel",
    brand: "Edu Global x TIIB Dubai",
    format: "REEL (9:16)",
    duration: "0:28",
    tools: ["CapCut", "Kinetic Typography", "Split-Cut Editing", "Voiceover Sync"],
    hook: "POV stairs descent hook: “POV: Finished 12th. Now falling into the next chapter 🤔” transitioning directly into scholarship reveal.",
    body: "Direct-to-camera value pitch breaking down 100% and 54% scholarships, IELTS waiver, globally recognized degree, and Kolkata local event details.",
    cta: "Fill up the form below and join us on 22nd August in Kolkata.",
    audioDirection: "High-energy voiceover delivery paired with an upbeat commercial background score.",
    videoSrc: "/videos/tiib-dubai-scholarship-reel.mp4",
    driveUrl: "https://drive.google.com/file/d/1GgNi5D0KTvh7ofb6AsjE6ePPpx6OE72o/view?usp=drive_link",
    aspect: "aspect-[16/10]",
  },
  {
    id: "clean-up-kolkata-green-drive",
    title: "Weekend Green Up Drive — Environmental Action & Community Vlog Reel",
    brand: "Clean Up Kolkata Collective x Ashari",
    format: "REEL (9:16)",
    duration: "0:56",
    tools: ["VN Editor", "On-Ground Mobile Shoot", "Beat-Matched Jump Cuts", "Color Grade"],
    hook: "Rainy day crew selfie vlog intro establishing camaraderie, transitioning into energetic rhythmic sapling planting cuts.",
    body: "Youth volunteer mobilization planting saplings, digging spots, and feeding animals at Ashari sanctuary to celebrate a birthday with purpose.",
    cta: "Join us for next spot — Plant More Trees. In collaboration with CUK, Ashari & CMI.",
    audioDirection: "Drake hip-hop beat drop rhythmically aligned with physical shoveling and volunteer moments.",
    videoSrc: "/videos/clean-up-kolkata-green-drive.mp4",
    driveUrl: "https://drive.google.com/file/d/1mLxqOZVCPG7Jh6rXZ6Y7Bb9fBsSiuSi_/view?usp=drive_link",
    aspect: "aspect-[16/10]",
  },
  {
    id: "cube-3d-motion",
    title: "3D Isometric Neon Cube — Rotation & Lighting Loop",
    brand: "3D Motion Lab",
    format: "3D LOOP",
    duration: "0:05",
    tools: ["3D Motion", "Keyframing", "Specular Lighting", "Seamless Looping"],
    hook: "Smooth rotating isometric cube displaying vibrant neon edge illumination (cyan, yellow, purple, green).",
    body: "Continuous dynamic 3D geometry loop with precise isometric perspective, specular highlights, and ambient drop shadows.",
    cta: "Continuous dynamic motion loop designed for tech branding and digital displays.",
    audioDirection: "Silent ambient background loop.",
    videoSrc: "/videos/cube-3d-motion.mp4",
    driveUrl: "https://drive.google.com/file/d/1sY-pbkHXolW6a-AYYLeGc3hbU-jE02nl/view?usp=drive_link",
    aspect: "aspect-[16/10]",
  },
  {
    id: "audio-spectrum-ripple",
    title: "Concentric Dot-Matrix Pulse & Audio Wave Ripple",
    brand: "UI & Visualizer Motion",
    format: "MOTION GRAPHIC",
    duration: "0:05",
    tools: ["Procedural Grid", "After Effects", "Wave Mechanics", "Color Accents"],
    hook: "Hypnotic concentric neon dot matrix rippling outward with glowing cyan and magenta accents.",
    body: "Procedural dot grid animation simulating audio frequency resonance, radar pulse scans, and reactive UI motion.",
    cta: "Seamless procedural texture for media interfaces and audio backdrops.",
    audioDirection: "Silent rhythmic digital frequency loop.",
    videoSrc: "/videos/audio-spectrum-ripple.mp4",
    driveUrl: "https://drive.google.com/file/d/1MSIeI8SaqQPeubJm4myHOSUfPh7gjMiN/view?usp=drive_link",
    aspect: "aspect-[16/10]",
  },
  {
    id: "fluid-metaball-gradient",
    title: "Organic Bioluminescent Fluid Metaball Morph",
    brand: "Fluid Dynamics Lab",
    format: "FLUID DYNAMICS",
    duration: "0:05",
    tools: ["Liquid Simulation", "Gradient Mapping", "Surface Tension", "Organic Morph"],
    hook: "Warm sunset-gradient fluid blob dividing and smoothly fusing in suspension.",
    body: "Organic liquid metaball physics showcasing viscous surface tension, soft diffusion, and continuous color-temperature shifts.",
    cta: "Ambient organic fluid motion designed for premium UI and modern brand identities.",
    audioDirection: "Silent fluid motion loop.",
    videoSrc: "/videos/fluid-metaball-gradient.mp4",
    driveUrl: "https://drive.google.com/file/d/1UJsko2_L3Dzffh6FNiGEgqyKDdOgLxMX/view?usp=drive_link",
    aspect: "aspect-[16/10]",
  },
  {
    id: "newtons-cradle-kinetic",
    title: "Newton’s Cradle Kinetic Momentum & Collision Simulation",
    brand: "Physics & Keyframing",
    format: "3D SIMULATION",
    duration: "0:05",
    tools: ["Physics Engine", "Kinetic Timing", "Chrome Reflections", "Realistic Spacing"],
    hook: "Classic conservation of momentum demonstration rendered in studio chrome.",
    body: "Exact elastic collision timing showcasing momentum transfer across 5 suspended steel spheres with bounce decay.",
    cta: "Satisfying seamless physics loop.",
    audioDirection: "Crisp rhythmic collision impact timing.",
    videoSrc: "/videos/newtons-cradle-kinetic.mp4",
    driveUrl: "https://drive.google.com/file/d/17_xPM5eaHkNAGg2TtUVztzoR5QvO_8xu/view?usp=drive_link",
    aspect: "aspect-[16/10]",
  },
  {
    id: "bouncing-ball-physics",
    title: "3D Bouncing Ball — Squash, Stretch & Momentum Timing",
    brand: "Animation Principles",
    format: "ANIMATION STUDY",
    duration: "0:05",
    tools: ["Keyframe Interpolation", "Squash & Stretch", "Floor Shadow", "Velocity Curves"],
    hook: "Red-and-white striped 3D ball executing foundational 12 principles of animation.",
    body: "Realistic gravitational acceleration, ground impact squash and stretch deformation, and apex deceleration.",
    cta: "Foundational animation study loop demonstrating weight and elasticity.",
    audioDirection: "Acoustic bounce timing.",
    videoSrc: "/videos/bouncing-ball-physics.mp4",
    driveUrl: "https://drive.google.com/file/d/1PzPCILm06Ss4z83FuLekSBmwMnyQxmPH/view?usp=drive_link",
    aspect: "aspect-[16/10]",
  },
  {
    id: "character-eye-blink",
    title: "2D Character Eye Glance & Natural Blink Cycle",
    brand: "Character Animation",
    format: "2D CHARACTER RIG",
    duration: "0:05",
    tools: ["Vector Rigging", "2D Keyframing", "Pupil Tracking", "Natural Lid Arcs"],
    hook: "Stylized emerald eye glancing smoothly across visual field before natural lid blink.",
    body: "Vector facial rigging demonstrating realistic iris tracking, lash deformation, and expressive micro-movements.",
    cta: "Character animation sample.",
    audioDirection: "Subtle character expression timing.",
    videoSrc: "/videos/character-eye-blink.mp4",
    driveUrl: "https://drive.google.com/file/d/1_h7RYz7B58FAofMetG7sc4BBMCo_IlfP/view?usp=drive_link",
    aspect: "aspect-[16/10]",
  },
];

export default function MotionPage() {
  const [activeConcept, setActiveConcept] = useState<VideoItem | null>(null);

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
                  Original video reels, kinetic typography, community campaign vlogs, and 3D motion graphics featuring inline silent autoplay and modal inspection.
                </p>
              </div>

              <div className="font-mono text-xs text-warm-muted">
                <span>TOOLS: CapCut · VN Editor · Meta Reels · After Effects · 3D Keyframing</span>
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
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group rounded-2xl bg-dark-surface border border-white/[0.08] hover:border-white/20 transition-all overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Inline Video Player Preview Container */}
                  <PortfolioVideoPreview
                    item={item}
                    onClick={() => setActiveConcept(item)}
                  />

                  {/* Body Info */}
                  <div className="p-6 md:p-8 space-y-4">
                    <h2 className="text-xl sm:text-2xl font-sans font-bold text-warm-white group-hover:text-accent-blue transition-colors">
                      {item.title}
                    </h2>

                    <div className="space-y-2 text-xs font-mono text-warm-gray">
                      {item.hook && (
                        <p>
                          <span className="text-warm-muted uppercase tracking-wider block text-[10px]">
                            Hook / Visual:
                          </span>
                          {item.hook}
                        </p>
                      )}
                      {item.body && (
                        <p>
                          <span className="text-warm-muted uppercase tracking-wider block text-[10px]">
                            Breakdown:
                          </span>
                          {item.body}
                        </p>
                      )}
                    </div>

                    {item.tools && item.tools.length > 0 && (
                      <div className="pt-2 flex flex-wrap gap-1.5 font-mono text-[10px] text-warm-muted">
                        {item.tools.map((t, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 md:p-8 pt-0 border-t border-white/[0.04]">
                  <button
                    onClick={() => setActiveConcept(item)}
                    className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-warm-white hover:text-accent-blue transition-colors"
                  >
                    <span>Play &amp; Inspect Breakdown</span>
                    <FiArrowRight />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </main>

      {/* Cinematic Modal Player / Breakdown */}
      <VideoPlayerModal
        item={activeConcept}
        onClose={() => setActiveConcept(null)}
      />

      <Footer />
    </>
  );
}
