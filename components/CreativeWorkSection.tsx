"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiZoomIn, FiX } from "react-icons/fi";

const creativeWorks = [
  {
    id: 1,
    title: "Core Fit - Social Media Creative",
    subtitle: "High-impact fitness brand creative & copywriting",
    category: "Social Media Creative",
    image: "/portfolio/fitness-brand-be-fit.jpg",
    aspect: "aspect-square",
    accent: "from-lime-500 to-emerald-600",
    tagColor: "bg-lime-500/90 text-black"
  },
  {
    id: 2,
    title: "Digitally Kolkata - Official Emblem",
    subtitle: "Heritage-inspired brand mark with iconic Kolkata architecture",
    category: "Brand Identity",
    image: "/portfolio/digitally-kolkata-logo.jpg",
    aspect: "aspect-square",
    accent: "from-amber-500 to-red-600",
    tagColor: "bg-amber-500/90 text-black"
  },
  {
    id: 3,
    title: "Digitally Kolkata - Brand Banner",
    subtitle: "Digital growth agency positioning and banner collateral",
    category: "Brand Collateral",
    image: "/portfolio/digitally-kolkata-banner.jpg",
    aspect: "aspect-[16/9]",
    accent: "from-teal-500 to-cyan-600",
    tagColor: "bg-teal-500/90 text-white"
  },
  {
    id: 4,
    title: "Digital Age - Tech Brand Concept",
    subtitle: "Minimalist circuit-inspired tech branding & typography",
    category: "Logo Concept",
    image: "/portfolio/digital-age-brand.jpg",
    aspect: "aspect-[16/9]",
    accent: "from-blue-500 to-indigo-600",
    tagColor: "bg-blue-500/90 text-white"
  }
];

export default function CreativeWorkSection() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <section id="creative" className="py-20 md:py-32 relative z-10 bg-slate-50/50 dark:bg-[#0B0F1A]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Visual Identity &amp; Creative Assets
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-sans mb-4 text-slate-800 dark:text-gray-100">
            Creative <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-400">Designs</span>
          </h2>
          <p className="text-base md:text-lg text-slate-600 dark:text-gray-400 max-w-2xl mx-auto">
            A curated showcase of brand identities, digital banners, social media creatives, and logo concepts designed for real-world visibility.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {creativeWorks.map((work, index) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex flex-col rounded-3xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 transition-all duration-300 hover:shadow-2xl hover:border-slate-300 dark:hover:border-slate-700"
            >
              {/* Image Preview Container */}
              <div 
                onClick={() => setActiveImage(work.image)}
                className="relative w-full aspect-[4/3] bg-slate-100 dark:bg-slate-950 flex items-center justify-center overflow-hidden cursor-pointer"
              >
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  className="object-contain p-3 transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={index < 2}
                />
                
                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 dark:bg-slate-900/90 text-slate-900 dark:text-white text-xs font-bold shadow-lg backdrop-blur-sm">
                    <FiZoomIn className="w-3.5 h-3.5" /> Tap to expand
                  </span>
                </div>
              </div>

              {/* Information Footnote */}
              <div className="p-5 md:p-6 flex flex-col justify-between flex-1 border-t border-slate-100 dark:border-slate-800/80">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`px-2.5 py-0.5 text-[11px] font-extrabold uppercase tracking-wider rounded-md ${work.tagColor}`}>
                      {work.category}
                    </span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-slate-800 dark:text-white group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                    {work.title}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                    {work.subtitle}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox / Modal for High-Res View */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md p-4 flex items-center justify-center cursor-zoom-out"
          >
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition z-50 min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Close"
            >
              <FiX className="w-6 h-6" />
            </button>
            <div 
              className="relative max-w-4xl max-h-[85vh] w-full h-full flex items-center justify-center p-2"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={activeImage}
                alt="Enlarged creative design"
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
