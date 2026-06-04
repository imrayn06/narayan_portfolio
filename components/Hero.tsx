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
          <p className="">WELCOME TO MY PORTFOLIO</p>
        </div>
        <line></line>
        {/* Description */}
        <p className="w-full max-w-6xl mx-auto px-4 md:px-6 lg:px-8 text-center text-[20.5px] md:text-[22px] lg:text-[26px] leading-8 md:leading-9 lg:leading-10 text-neutral-300 font-mono font-medium gap-y-6 flex flex-col">

          Versatile professional with nearly three years of experience in Software Engineering, Testing, and Quality Assurance, alongside experience in Digital Marketing and Social Media Management. Passionate about content creation, brand growth, and audience engagement, with hands-on experience in digital marketing initiatives at JRD Ayurveda and six months of experience as a Digital Marketing Executive and Social Media Manager at Mind and Matter. Skilled in content strategy, campaign coordination, social media management, analytics, and business growth initiatives.
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
