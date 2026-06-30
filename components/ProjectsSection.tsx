"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";

const caseStudies = [
  {
    id: 1,
    title: "MSP Steel",
    subtitle: "B2B Social Media Execution Support",
    category: "B2B Social Media",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    summary: "MSP Steel required structured and consistent digital communication to strengthen its B2B presence and maintain visibility across social platforms.",
    problem: "MSP Steel required structured and consistent digital communication to strengthen its B2B presence and maintain visibility across social platforms.",
    insight: "Industrial brands often lack consistent content systems, leading to low engagement and weak digital positioning despite strong offline presence.",
    role: "Assisted in execution and campaign coordination",
    accent: "from-blue-500 to-cyan-400"
  },
  {
    id: 2,
    title: "Walplast",
    subtitle: "Brand Social Media Support",
    category: "Brand Support",
    image: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=800&q=80",
    summary: "Needed structured content flow and improved consistency in digital communication for stronger brand visibility.",
    problem: "Needed structured content flow and improved consistency in digital communication for stronger brand visibility.",
    insight: "Consistency and structured messaging are critical for B2B construction brands to maintain relevance in digital spaces.",
    role: "Supported campaign execution and content coordination",
    accent: "from-purple-500 to-pink-500"
  },
  {
    id: 3,
    title: "Drychem",
    subtitle: "Digital Presence & Campaign Assistance",
    category: "Digital Presence",
    image: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?auto=format&fit=crop&w=800&q=80",
    summary: "Required structured online visibility and improved communication of product offerings in a competitive B2B segment.",
    problem: "Required structured online visibility and improved communication of product offerings in a competitive B2B segment.",
    insight: "Clear digital presence and consistent messaging help industrial product brands improve discoverability and trust.",
    role: "Assisted in execution and content planning support",
    accent: "from-cyan-500 to-emerald-400"
  },
  {
    id: 4,
    title: "Zee Bangla Sonar",
    subtitle: "Social Media Execution Support",
    category: "Campaign Support",
    image: "https://images.unsplash.com/photo-1598257006458-087169a1f08d?auto=format&fit=crop&w=800&q=80",
    summary: "Required structured coordination for ongoing social media campaigns and content distribution.",
    problem: "Required structured coordination for ongoing social media campaigns and content distribution.",
    insight: "Media brands require fast-paced and consistent content execution to maintain engagement and relevance.",
    role: "Assisted in campaign execution and coordination",
    accent: "from-pink-500 to-purple-500"
  }
];

export default function ProjectsSection() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-[#0B0F1A]/20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-sans mb-6 text-slate-800 dark:text-gray-100">
            Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6]">Case Studies</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-[#9CA3AF] max-w-2xl mx-auto">
            Deep dives into how I tackle challenges, formulate strategies, and deliver measurable results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {caseStudies.map((study, index) => {
            const isExpanded = expandedId === study.id;
            return (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-white/60 dark:bg-slate-900/60 backdrop-blur-md rounded-3xl overflow-hidden shadow-lg border border-slate-200/50 dark:border-slate-800/50 flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/10 hover:border-purple-500/20"
              >
                {/* Thumbnail */}
                <div className="relative h-64 md:h-60 w-full overflow-hidden bg-slate-200 dark:bg-slate-800">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent opacity-90" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-white text-xs font-bold rounded-full mb-2 uppercase tracking-wide">
                      {study.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white leading-tight">
                      {study.title}
                    </h3>
                    <p className="text-sm text-slate-300 font-medium mt-1">
                      {study.subtitle}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <p className="text-slate-600 dark:text-[#9CA3AF] text-sm mb-4 leading-relaxed line-clamp-3">
                      {study.summary}
                    </p>

                    {/* Toggle Button for Mobile */}
                    <button
                      onClick={() => toggleExpand(study.id)}
                      className="md:hidden text-xs text-purple-600 dark:text-purple-400 font-bold mb-4 underline block"
                    >
                      {isExpanded ? "Hide Details" : "Reveal Details"}
                    </button>

                    {/* Details Container - Collapsible on Mobile, always block on Desktop */}
                    <div className={`space-y-3 mb-6 text-sm md:block ${isExpanded ? 'block' : 'hidden'}`}>
                      <div className="flex items-start gap-2">
                        <span className="font-bold text-slate-800 dark:text-gray-200 w-20 shrink-0">Problem:</span>
                        <span className="text-slate-600 dark:text-[#9CA3AF]">{study.problem}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="font-bold text-slate-800 dark:text-gray-200 w-20 shrink-0">Insight:</span>
                        <span className="text-slate-600 dark:text-[#9CA3AF]">{study.insight}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="font-bold text-slate-800 dark:text-gray-200 w-20 shrink-0">Role:</span>
                        <span className="text-[#3B82F6] dark:text-[#3B82F6] font-semibold">{study.role}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80">
                    <Link href={`/case-studies?id=${study.id}`} className="flex items-center justify-between w-full group/btn">
                      <span className="font-semibold text-[#8B5CF6] dark:text-[#8B5CF6] group-hover/btn:text-purple-400 transition-colors">
                        View Case Study
                      </span>
                      <span className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-[#8B5CF6] group-hover/btn:bg-[#8B5CF6] group-hover/btn:text-white transition-all transform group-hover/btn:translate-x-1">
                        <FiArrowRight />
                      </span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
