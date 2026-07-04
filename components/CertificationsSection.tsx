"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const certifications = [
  {
    id: 1,
    title: "Inbound Marketing Certified",
    image: "https://hubspot-credentials-na1.s3.amazonaws.com/prod/badges/user/db663a23c1ac49639ecf4b5e36e97091.png",
    link: "https://app-na2.hubspot.com/academy/achievements/1c6rkgft/en/1/sneh-dutta/inbound-marketing-certified",
  },
  {
    id: 2,
    title: "HubSpot Academy - Social Media Certified",
    image: "https://hubspot-credentials-na1.s3.amazonaws.com/prod/badges/user/6b6c3e92bae54d2cb80e1d98a884010e.png",
    link: "https://app-na2.hubspot.com/academy/achievements/8d7gqtv7/en/1/sneh-dutta/social-media-certified",
  },
  {
    id: 3,
    title: "Digital Marketing Certified",
    image: "https://hubspot-credentials-na1.s3.amazonaws.com/prod/badges/user/2289737151764252bffcb649cc0896fb.png",
    link: "https://app-na2.hubspot.com/academy/achievements/x09qss96/en/1/sneh-dutta/digital-marketing-certified",
  },
  {
    id: 4,
    title: "KDMI Certificate",
    image: "/certifications/kdmi.jpg",
    link: null,
  },
  {
    id: 5,
    title: "Masai Certificate",
    image: "/certifications/masai.png",
    link: null,
  },
];

function CertCard({ cert }: { cert: typeof certifications[number] }) {
  const card = (
    <div
      className="relative w-[280px] sm:w-[320px] md:w-[340px] aspect-[4/3] rounded-2xl shadow-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 transition-all duration-500 hover:scale-[1.06] hover:shadow-2xl hover:border-slate-300 dark:hover:border-slate-600 flex items-center justify-center flex-shrink-0"
      onContextMenu={(e) => e.preventDefault()}
      onDragStart={(e) => e.preventDefault()}
      style={{ WebkitUserSelect: "none", userSelect: "none" }}
    >
      <Image
        src={cert.image}
        alt={cert.title}
        fill
        className="object-contain p-6 pointer-events-none"
        sizes="340px"
        draggable={false}
      />
    </div>
  );

  if (cert.link) {
    return (
      <a
        href={cert.link}
        target="_blank"
        rel="noopener noreferrer"
        title={cert.title}
        className="flex-shrink-0"
      >
        {card}
      </a>
    );
  }
  return <div className="flex-shrink-0">{card}</div>;
}

export default function CertificationsSection() {
  // Duplicate the list so the marquee loops seamlessly
  const looped = [...certifications, ...certifications];

  return (
    <section className="py-20 md:py-32 text-slate-800 dark:text-white transition-colors duration-300 relative overflow-hidden">
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes marquee-scroll {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .marquee-track {
            animation: marquee-scroll 28s linear infinite;
            will-change: transform;
          }
          .marquee-track:hover {
            animation-play-state: paused;
          }
        `
      }} />

      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-sans">
            My Recent <span className="text-slate-500 dark:text-gray-400">Certifications</span>
          </h2>
          <p className="text-slate-500 dark:text-gray-400 mt-4 max-w-xl mx-auto text-sm md:text-base">
            Hover to pause · Click a badge to verify
          </p>
        </motion.div>
      </div>

      {/* Full-width marquee — outside max-w container so it bleeds edge-to-edge */}
      <div className="relative w-full overflow-hidden">
        {/* Left fade mask */}
        <div
          className="absolute left-0 top-0 h-full w-24 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, var(--tw-bg-opacity, 1) white, transparent)",
          }}
          aria-hidden="true"
        >
          <div className="h-full w-full bg-gradient-to-r from-white dark:from-slate-950 to-transparent" />
        </div>

        {/* Right fade mask */}
        <div
          className="absolute right-0 top-0 h-full w-24 z-10 pointer-events-none"
          aria-hidden="true"
        >
          <div className="h-full w-full bg-gradient-to-l from-white dark:from-slate-950 to-transparent" />
        </div>

        {/* Scrolling track (original + duplicate for seamless loop) */}
        <div className="marquee-track flex gap-6 md:gap-8 py-6 w-max">
          {looped.map((cert, index) => (
            <CertCard key={`${cert.id}-${index}`} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  );
}
