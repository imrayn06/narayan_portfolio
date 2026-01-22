"use client";

import { motion, useMotionTemplate, useMotionValue, animate } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import profilepic from "../assets/profilepic.png"
import object from "../assets/obj1.png";
import { FiArrowRight } from "react-icons/fi";
import "../app/globals.css"

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export const Hero = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`
  const boxShadow = useMotionTemplate`(0px 4px 24px solid ${color}`

  return (
<motion.section
  style={{ backgroundImage }}
  className="relative grid min-h-screen place-content-center overflow-hidden px-4 py-24 text-gray-200"
  id="about"
>
  <div className="z-10 flex flex-col items-center text-center space-y-5">
    {/* Status badge */}
    <span className="inline-block rounded-full bg-gray-600/50 px-3 py-1.5 text-sm font-mono">
      Open for work
    </span>

    {/* Intro */}
    <h1 className="text-white/40 md:text-7xl text-5xl font-black">
      Hi, I am
    </h1>

    {/* Name */}
    <h1 className="font-mono max-w-3xl bg-gradient-to-br from-white to-gray-200 bg-clip-text font-black leading-tight text-transparent md:text-7xl text-5xl">
      Shenehashis Dutta
    </h1>
    <line></line>
    <line></line>

    {/* Profile picture */}
    <Image
      src={profilepic}
      alt="profile picture"
      width={250}
      className="rounded-3xl mx-auto"
    />
    <line></line>

    {/* Welcome box */}
    <div className="flex bg-white/10 shadow-xl p-3 rounded-3xl justify-center items-center space-x-2">
      <Image
        src={object}
        alt="object"
        width={30}
        className="rounded-2xl mx-auto"
      />
      <p className="font-black">WELCOME TO MY PORTFOLIO</p>
    </div>
    <line></line>
    {/* Description */}
    <p className="w-full max-w-6xl mx-auto px-4 md:px-6 lg:px-8 text-center text-[20.5px] md:text-[22px] lg:text-[26px] leading-8 md:leading-9 lg:leading-10 text-neutral-300 font-bold gap-y-6 flex flex-col">

      I am a motivated professional with nearly three years of experience as a Software Engineer and Test Engineer at Wipro and Q3 Technologies. I have a strong foundation in development lifecycles, testing, and quality assurance. Driven by a growing interest in brand growth and digital strategy, I transitioned into digital marketing, gaining skills in SEO, content strategy, social media, and analytics. I currently have one month of hands-on experience as a Digital Marketer at JRD Ayurveda, working on live projects and business growth initiatives.
    </p>
    <line></line>
    {/* Resume button */}
    <a
      href="https://drive.google.com/file/d/1cYAqEg3wsdv5ee5-5iA43fDo-Nq5-7W8/view?usp=sharing"
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
        className="flex w-fit items-center gap-2 rounded-full px-4 py-2 bg-gray-800 text-white font-mono"
      >
        Download Resume
        <FiArrowRight />
      </motion.button>
    </a>
  </div>

  {/* Background circles */}
  <div className="bg-circle-container">
    <div className="bg-circle-background"></div>
    <div className="bg-circle"></div>
  </div>
</motion.section>

  );
};
