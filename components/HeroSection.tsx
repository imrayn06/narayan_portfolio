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
      id="about"
    >
      <div className="z-10 flex flex-col items-center text-center space-y-5">
        {/* Status badge */}
        <span className="inline-flex items-center justify-center rounded-full border border-purple-300/70 bg-gradient-to-r from-purple-100 via-fuchsia-100 to-pink-100 px-4 py-2 text-sm font-semibold tracking-wide text-purple-800 shadow-[0_10px_30px_rgba(168,85,247,0.12)] dark:border-sky-500/60 dark:bg-gradient-to-r dark:from-slate-900 dark:via-slate-950 dark:to-indigo-950 dark:text-sky-300 dark:shadow-[0_10px_30px_rgba(59,130,246,0.18)]">
          Open for work
        </span>

        {/* Intro */}
        <motion.h1
          data-hover="true"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-slate-800/40 dark:text-white/40 md:text-7xl text-5xl font-black"
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
        <br />
        <br />

        {/* Profile picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Image
            src={profilepic}
            alt="profile picture"
            width={250}
            className="rounded-3xl mx-auto shadow-lg dark:shadow-none"
          />
        </motion.div>
        <br />

        {/* Welcome box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex bg-slate-200/50 dark:bg-white/10 shadow-xl p-3 rounded-3xl justify-center items-center space-x-2 text-slate-800 dark:text-gray-200"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
            className="flex items-center justify-center"
          >
            <Image
              src={object}
              alt="object"
              width={30}
              className="rounded-2xl mx-auto"
            />
          </motion.div>
          <p className="font-semibold">WELCOME TO MY PORTFOLIO</p>
        </motion.div>
        <br />
        {/* Description */}
        <motion.div
          data-hover="true"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="w-full max-w-5xl mx-auto px-6 sm:px-8 md:px-14 lg:px-20 py-8 md:py-10 text-center rounded-3xl bg-white/30 dark:bg-slate-900/40 backdrop-blur-xl shadow-lg shadow-slate-300/10 dark:shadow-black/30 ring-1 ring-white/20 dark:ring-white/10"
        >
          <div className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] leading-relaxed md:leading-8 lg:leading-9 text-slate-800 dark:text-neutral-200 font-sans font-medium space-y-6">
            <p>
              Versatile professional with nearly four years of cross-functional experience spanning Digital Marketing, Social Media Management, Software Development, Testing, and Quality Assurance. In recent roles, I specialised in Digital and Social Media Marketing, driving content strategy, brand positioning, audience engagement, campaign execution, and online growth initiatives. Successfully contributed to digital marketing efforts at JRD Ayurveda and led social media and marketing activities at Mind and Matter, enhancing brand visibility, increasing audience engagement, and supporting business growth through data-driven marketing strategies.
            </p>

            <p>
              I have a strong interest in client servicing, media coordination, and community engagement, with experience collaborating across teams, coordinating campaigns, managing online communities, and fostering meaningful interactions that strengthen brand relationships and support business objectives. My ability to balance creativity with analytical thinking enables me to develop and execute marketing initiatives that align with both brand and business goals.
            </p>

            <p>
              Before transitioning into marketing, I built a strong foundation through three years of experience in Software Development, Testing, and Quality Assurance, developing expertise in analytical thinking, problem-solving, process optimisation, and quality management. This unique blend of technical proficiency and creative marketing acumen enables me to bridge business, creative, and technical teams while delivering strategic, results-oriented solutions that align technology with business and customer objectives.
            </p>
          </div>
        </motion.div>
        <br />
        {/* Resume button */}
        <a
          href="https://drive.google.com/file/d/1SIgneDnDqqFIYPjAzUY2wXyBdhGGrPp6/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <motion.button
            style={{
              border: "1px solid #61DAFB",
              boxShadow: "0px 4px 24px #61DAFB"
            }}
            whileHover={{ scale: 1.015 }}
            whileTap={{ scale: 0.985 }}
            className="flex w-fit items-center gap-3 rounded-full px-7 py-3 text-lg tracking-wide font-semibold bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 text-white shadow-[0_20px_50px_rgba(168,85,247,0.22)] transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_60px_rgba(168,85,247,0.28)] dark:bg-gradient-to-r dark:from-sky-500 dark:via-blue-500 dark:to-indigo-600 dark:shadow-[0_20px_50px_rgba(59,130,246,0.24)] font-sans"
          >
            Download Resume
            <FiArrowRight />
          </motion.button>
        </a>
      </div>

      {/* Animated background circle — theme-aware */}
      <AnimatedBgCircle theme={theme} />

    </motion.section>
  );
};
