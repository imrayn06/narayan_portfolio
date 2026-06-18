"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const testimonials = [
  {
    id: 1,
    quote: "A rare blend of strategic thinking and flawless execution. The campaigns led to measurable growth in our online engagement and directly impacted our bottom line.",
    author: "Marketing Director",
    company: "Placeholder Company",
  },
  {
    id: 2,
    quote: "The approach to community management was a game changer. We saw our dormant audience become highly active participants within a few weeks.",
    author: "Founder",
    company: "Placeholder Brand",
  },
  {
    id: 3,
    quote: "Extremely organized and data-driven. The content strategies provided a clear roadmap that kept all teams aligned and focused on the same goals.",
    author: "Head of Marketing",
    company: "Placeholder Agency",
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 md:py-32 bg-slate-100 dark:bg-slate-900/60 relative z-10">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-black font-sans mb-4 text-slate-800 dark:text-gray-100">
            Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">Testimonials</span>
          </h2>
        </motion.div>

        <div className="relative max-w-3xl mx-auto h-[250px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex flex-col items-center justify-center px-8"
            >
              <div className="text-6xl text-purple-300 dark:text-purple-900/50 mb-4 opacity-50 select-none">
                "
              </div>
              <p className="text-xl md:text-2xl text-slate-700 dark:text-gray-300 italic font-medium mb-8">
                {testimonials[currentIndex].quote}
              </p>
              <div>
                <p className="font-bold text-slate-900 dark:text-white text-lg">
                  {testimonials[currentIndex].author}
                </p>
                <p className="text-slate-500 dark:text-gray-500 text-sm">
                  {testimonials[currentIndex].company}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white dark:bg-slate-800 shadow-lg text-slate-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:scale-110 transition-all"
            aria-label="Previous testimonial"
          >
            <FiChevronLeft size={24} />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white dark:bg-slate-800 shadow-lg text-slate-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:scale-110 transition-all"
            aria-label="Next testimonial"
          >
            <FiChevronRight size={24} />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentIndex === i ? "bg-purple-600" : "bg-slate-300 dark:bg-slate-700"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
