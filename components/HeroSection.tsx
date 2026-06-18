"use client";

import { motion, useMotionValue, animate, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import profilepic from "../assets/profilepic.png"
import object from "../assets/obj1.png";
import { FiArrowRight } from "react-icons/fi";
import { useTheme } from "./ThemeContext";
import "../app/globals.css"

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

/* ── Animated background circle ── */
const DARK_STOPS = [
  ["rgba(109,40,217,0.22)", "rgba(59,130,246,0.14)", "rgba(168,85,247,0.08)", "rgba(15,23,42,0.04)"],
  ["rgba(59,130,246,0.20)", "rgba(99,102,241,0.16)", "rgba(139,92,246,0.10)", "rgba(15,23,42,0.04)"],
  ["rgba(168,85,247,0.22)", "rgba(236,72,153,0.12)", "rgba(99,102,241,0.08)", "rgba(15,23,42,0.04)"],
  ["rgba(14,165,233,0.20)", "rgba(109,40,217,0.14)", "rgba(59,130,246,0.08)", "rgba(15,23,42,0.04)"],
];

const LIGHT_STOPS = [
  ["rgba(244,114,182,0.28)", "rgba(167,139,250,0.20)", "rgba(251,146,60,0.10)", "rgba(255,255,255,0.04)"],
  ["rgba(167,139,250,0.26)", "rgba(56,189,248,0.18)", "rgba(244,114,182,0.10)", "rgba(255,255,255,0.04)"],
  ["rgba(251,146,60,0.24)", "rgba(244,114,182,0.18)", "rgba(167,139,250,0.10)", "rgba(255,255,255,0.04)"],
  ["rgba(56,189,248,0.26)", "rgba(167,139,250,0.20)", "rgba(251,191,36,0.10)", "rgba(255,255,255,0.04)"],
];

function makeBg(stops: string[]) {
  return `radial-gradient(circle, ${stops[0]} 0%, ${stops[1]} 25%, ${stops[2]} 60%, ${stops[3]} 100%)`;
}

function AnimatedBgCircle({ theme }: { theme: string }) {
  const [bgIdx, setBgIdx] = useState(0);
  const stops = theme === "dark" ? DARK_STOPS : LIGHT_STOPS;

  useEffect(() => {
    setBgIdx(0); // reset on theme change
    const id = setInterval(() => {
      setBgIdx((prev) => (prev + 1) % stops.length);
    }, 4000);
    return () => clearInterval(id);
  }, [theme, stops.length]);

  return (
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full z-0 pointer-events-none"
      style={{
        width: 1000,
        height: 1000,
        background: makeBg(stops[bgIdx]),
        transition: "background 4s ease-in-out",
        opacity: 0.7,
      }}
    />
  );
}


export const HeroSection = () => {
  const { theme } = useTheme();
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  return (
    <motion.section
      data-hover="true"
      className="relative grid min-h-screen place-content-center overflow-hidden px-4 py-24 text-slate-800 dark:text-gray-200 transition-colors duration-300"
      id="home"
    >
      <div className="z-10 flex flex-col items-center text-center space-y-5">
        {/* Intro */}
        <motion.h1
          data-hover="true"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-slate-800/40 dark:text-white/40 md:text-7xl text-5xl font-black mt-10"
        >
          Hi, I am
        </motion.h1>

        {/* Name */}
        <motion.h1
          data-hover="true"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-sans max-w-3xl bg-gradient-to-br from-slate-900 to-slate-700 dark:from-white dark:to-gray-200 bg-clip-text font-black leading-tight text-transparent md:text-7xl text-5xl"
        >
          Shenehashis Dutta
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          data-hover="true"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-2 text-2xl md:text-3xl font-bold text-slate-800 dark:text-gray-100"
        >
          Digital Marketing Strategist
        </motion.h2>

        <motion.h3
          data-hover="true"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl font-medium text-slate-600 dark:text-gray-300"
        >
          Content Strategy | Community Engagement | Client & Media Coordination
        </motion.h3>

        <motion.p
          data-hover="true"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-base md:text-lg text-slate-500 dark:text-gray-400 max-w-2xl mt-4 mb-8"
        >
          Helping brands grow through strategic content, audience engagement, and data-driven marketing.
        </motion.p>

        {/* Profile picture with Skill Pills */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative w-full max-w-lg mx-auto flex justify-center py-10"
        >
          {/* Floating Skill Pills */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 md:-left-10 z-20 px-4 py-2 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-md shadow-lg border border-purple-100 dark:border-purple-900/50 text-sm font-semibold text-purple-700 dark:text-purple-300"
          >
            Content Strategy
          </motion.div>
          
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-1/4 right-0 md:-right-12 z-20 px-4 py-2 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-md shadow-lg border border-sky-100 dark:border-sky-900/50 text-sm font-semibold text-sky-700 dark:text-sky-300"
          >
            Community Management
          </motion.div>
          
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-10 left-4 md:-left-4 z-20 px-4 py-2 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-md shadow-lg border border-pink-100 dark:border-pink-900/50 text-sm font-semibold text-pink-700 dark:text-pink-300"
          >
            Client Servicing
          </motion.div>

          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute bottom-0 right-10 md:right-0 z-20 px-4 py-2 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-md shadow-lg border border-indigo-100 dark:border-indigo-900/50 text-sm font-semibold text-indigo-700 dark:text-indigo-300"
          >
            Campaign Planning
          </motion.div>

          <Image
            src={profilepic}
            alt="profile picture"
            width={220}
            className="rounded-[2rem] shadow-2xl relative z-10 border-4 border-white/50 dark:border-slate-800/50"
          />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4 mt-8"
        >
          <a href="#portfolio" style={{ textDecoration: "none" }}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 rounded-full px-6 py-3 text-base font-semibold bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-lg hover:shadow-xl transition-all"
            >
              View My Work
            </motion.button>
          </a>
          
          <a
            href="https://drive.google.com/file/d/1SIgneDnDqqFIYPjAzUY2wXyBdhGGrPp6/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 rounded-full px-6 py-3 text-base font-semibold bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 text-white shadow-lg hover:shadow-xl transition-all"
            >
              Download Resume
            </motion.button>
          </a>
          
          <a href="#contact" style={{ textDecoration: "none" }}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 rounded-full px-6 py-3 text-base font-semibold bg-white text-slate-900 dark:bg-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition-all"
            >
              Contact Me
            </motion.button>
          </a>
        </motion.div>

        {/* Badges */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mt-8"
        >
          <span className="px-3 py-1 text-xs font-medium bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full border border-green-200 dark:border-green-800/50">
            • Open to Work
          </span>
          <span className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 rounded-full border border-blue-200 dark:border-blue-800/50">
            • 4+ Years Experience
          </span>
          <span className="px-3 py-1 text-xs font-medium bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400 rounded-full border border-orange-200 dark:border-orange-800/50">
            • Based in Kolkata
          </span>
          <span className="px-3 py-1 text-xs font-medium bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400 rounded-full border border-purple-200 dark:border-purple-800/50">
            • Available for Freelance
          </span>
        </motion.div>
      </div>

      {/* Animated background circle — theme-aware */}
      <AnimatedBgCircle theme={theme} />

    </motion.section>
  );
};
