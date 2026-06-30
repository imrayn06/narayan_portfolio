"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const certifications = [
  {
    id: 1,
    title: "HubSpot Academy - Social Media Certified",
    image: "https://hubspot-credentials-na1.s3.amazonaws.com/prod/badges/user/6b6c3e92bae54d2cb80e1d98a884010e.png",
    link: "https://app-na2.hubspot.com/academy/achievements/8d7gqtv7/en/1/sneh-dutta/social-media-certified",
  },
  {
    id: 2,
    title: "Digital Marketing Certified",
    image: "https://hubspot-credentials-na1.s3.amazonaws.com/prod/badges/user/2289737151764252bffcb649cc0896fb.png",
    link: "https://app-na2.hubspot.com/academy/achievements/x09qss96/en/1/sneh-dutta/digital-marketing-certified",
  },
  {
    id: 3,
    title: "KDMI Certificate",
    image: "/certifications/kdmi.jpg",
    link: null,
  },
  {
    id: 4,
    title: "Masai Certificate",
    image: "/certifications/masai.png",
    link: null,
  },
];

export default function CertificationsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 5);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);

      const scrollableWidth = scrollWidth - clientWidth;
      const progress = scrollableWidth > 0 ? (scrollLeft / scrollableWidth) * 100 : 0;
      setScrollProgress(progress);
    }
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) {
      el.addEventListener("scroll", checkScroll);
      // Run once initially
      checkScroll();
      // Run on resize
      window.addEventListener("resize", checkScroll);
    }
    return () => {
      if (el) {
        el.removeEventListener("scroll", checkScroll);
      }
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      // Scroll by 1 card width + gap approximately
      const cardWidth = 340;
      scrollContainerRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - cardWidth : scrollLeft + cardWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-20 md:py-32 text-slate-800 dark:text-white transition-colors duration-300 relative overflow-hidden">
      {/* CSS style block for hiding scrollbar */}
      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}} />

      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-sans">
            My Recent <span className="text-slate-500 dark:text-gray-400">Certifications</span>
          </h2>
          <p className="text-slate-500 dark:text-gray-400 mt-4 max-w-xl mx-auto text-sm md:text-base">
            Scroll or drag to view credentials and badges
          </p>
        </div>

        <div className="relative group max-w-5xl mx-auto">
          {/* Left Arrow Button */}
          <button
            onClick={() => scroll("left")}
            className={`absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-slate-50 dark:hover:bg-slate-800 ${
              canScrollLeft ? "opacity-100 cursor-pointer" : "opacity-0 pointer-events-none"
            }`}
            aria-label="Scroll left"
          >
            <FiChevronLeft size={24} />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={() => scroll("right")}
            className={`absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-slate-50 dark:hover:bg-slate-800 ${
              canScrollRight ? "opacity-100 cursor-pointer" : "opacity-0 pointer-events-none"
            }`}
            aria-label="Scroll right"
          >
            <FiChevronRight size={24} />
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 md:gap-8 py-6 px-4 no-scrollbar snap-x snap-mandatory scroll-smooth justify-start"
          >
            {certifications.map((cert, index) => {
              const CardContent = (
                <div
                  className="relative w-full aspect-[4/3] rounded-2xl shadow-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 z-10 transition-all duration-500 hover:scale-[1.05] active:scale-[1.05] hover:shadow-2xl hover:border-slate-300 dark:hover:border-slate-700 flex items-center justify-center p-4"
                  onContextMenu={(e) => e.preventDefault()}
                  onDragStart={(e) => e.preventDefault()}
                  style={{
                    WebkitUserSelect: "none",
                    userSelect: "none",
                  }}
                >
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-contain p-6 pointer-events-none"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    draggable={false}
                  />
                </div>
              );

              return (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="w-[280px] sm:w-[320px] md:w-[340px] flex-shrink-0 snap-center"
                >
                  {cert.link ? (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={cert.title}
                      className="block w-full"
                    >
                      {CardContent}
                    </a>
                  ) : (
                    CardContent
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Scroll Progress Bar Indicator */}
          <div className="w-32 h-1 bg-slate-200/50 dark:bg-slate-800/50 rounded-full mx-auto mt-8 overflow-hidden">
            <div
              className="h-full bg-slate-400 dark:bg-slate-600 rounded-full transition-all duration-150"
              style={{
                width: `${scrollProgress}%`,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
