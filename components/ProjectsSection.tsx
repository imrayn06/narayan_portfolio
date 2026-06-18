"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";

const caseStudies = [
  {
    id: 1,
    title: "Brand Revitalization & Engagement Growth",
    category: "Social Media Strategy",
    image: "https://drive.google.com/uc?export=view&id=1NZu1XFHiMNzE_opIjXwZPOYom5Y-_1CI",
    summary: "A comprehensive social media strategy that improved reach, engagement, and brand consistency.",
    challenge: "Low organic reach and inconsistent brand messaging across platforms.",
    strategy: "Developed a cohesive content calendar focusing on storytelling and high-value educational posts.",
    execution: "Designed fresh creatives using Canva and optimized hashtag strategies for target demographics.",
    results: "15% increase in engagement and 120% growth in overall organic reach within 3 months.",
    learning: "Consistency in visual language combined with data-driven posting schedules yields the highest ROI."
  },
  {
    id: 2,
    title: "Performance Optimization & Search Visibility",
    category: "SEO & Content",
    image: "https://drive.google.com/uc?export=view&id=1cjD_wxk2Tq4A4ptDLuFBSWLqiz5yueie",
    summary: "Implemented on-page SEO improvements and content restructuring to boost search rankings.",
    challenge: "Poor organic discoverability and low website traffic from target keywords.",
    strategy: "Conducted in-depth keyword research and competitor analysis to identify content gaps.",
    execution: "Optimized meta tags, headings, and internal linking structures across key landing pages.",
    results: "Significant improvement in SERP rankings for top 10 targeted keywords.",
    learning: "Technical SEO must be perfectly aligned with user intent for sustainable traffic growth."
  },
  {
    id: 3,
    title: "Community-Led Growth Initiative",
    category: "Community Management",
    image: "https://drive.google.com/uc?export=view&id=13p3-1mIY30ZzoLAuBSNVSA8P1kO3MrfG",
    summary: "Built and nurtured a highly engaged online community through targeted Meta and LinkedIn campaigns.",
    challenge: "Lack of brand loyalty and passive audience interaction.",
    strategy: "Shifted focus from broadcasting to community-building via interactive content and direct engagement.",
    execution: "Launched poll series, Q&A sessions, and targeted ad campaigns to acquire high-intent members.",
    results: "Built a vibrant community of 2,000+ active members with a 5% improvement in CTR on community links.",
    learning: "Authentic two-way communication builds stronger brand equity than polished, one-way advertising."
  }
];

export default function ProjectsSection() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-slate-50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-sans mb-6 text-slate-800 dark:text-gray-100">
            Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Case Studies</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-gray-400 max-w-2xl mx-auto">
            Deep dives into how I tackle challenges, formulate strategies, and deliver measurable results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => {
            const isExpanded = expandedId === study.id;
            return (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700 flex flex-col"
              >
                {/* Thumbnail */}
                <div className="relative h-64 md:h-56 w-full overflow-hidden bg-slate-200 dark:bg-slate-700">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-80" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-3 py-1 bg-purple-500 text-white text-xs font-bold rounded-full mb-2">
                      {study.category}
                    </span>
                    <h3 className="text-xl font-bold text-white line-clamp-2">
                      {study.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <p className="text-slate-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                      {study.summary}
                    </p>

                    {/* Toggle Button for Mobile */}
                    <button
                      onClick={() => toggleExpand(study.id)}
                      className="md:hidden text-xs text-purple-600 dark:text-purple-400 font-bold mb-4 underline block"
                    >
                      {isExpanded ? "Hide Project Details" : "Reveal Project Details"}
                    </button>

                    {/* Details Container - Collapsible on Mobile, always block on Desktop */}
                    <div className={`space-y-3 mb-6 text-sm md:block ${isExpanded ? 'block' : 'hidden'}`}>
                      <div className="flex items-start">
                        <span className="font-bold text-slate-800 dark:text-gray-200 w-24 shrink-0">Challenge:</span>
                        <span className="text-slate-600 dark:text-gray-400">{study.challenge}</span>
                      </div>
                      <div className="flex items-start">
                        <span className="font-bold text-slate-800 dark:text-gray-200 w-24 shrink-0">Strategy:</span>
                        <span className="text-slate-600 dark:text-gray-400">{study.strategy}</span>
                      </div>
                      <div className="flex items-start">
                        <span className="font-bold text-slate-800 dark:text-gray-200 w-24 shrink-0">Results:</span>
                        <span className="text-green-600 dark:text-green-400 font-semibold">{study.results}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 dark:border-slate-700">
                    <Link href={`/case-studies?id=${study.id}`} className="flex items-center justify-between w-full group/btn">
                      <span className="font-semibold text-purple-600 dark:text-purple-400 group-hover/btn:text-purple-700 dark:group-hover/btn:text-purple-300 transition-colors">
                        View Case Study
                      </span>
                      <span className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 group-hover/btn:bg-purple-600 group-hover/btn:text-white transition-all transform group-hover/btn:translate-x-1">
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
