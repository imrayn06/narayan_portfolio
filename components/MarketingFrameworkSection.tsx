"use client";

import { motion } from "framer-motion";
import { FiArrowRight, FiArrowDown } from "react-icons/fi";

const steps = [
  "Business Goals",
  "Audience Research",
  "Competitor Analysis",
  "Content Strategy",
  "Campaign Planning",
  "Campaign Execution",
  "Community Engagement",
  "Performance Tracking",
  "Optimization",
];

export default function MarketingFrameworkSection() {
  return (
    <section id="framework" className="py-20 md:py-32 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-sans mb-6 text-slate-800 dark:text-gray-100">
            Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400">Framework</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-gray-400 max-w-2xl mx-auto">
            A proven, step-by-step approach to turning business objectives into measurable marketing success.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Desktop Flow (Grid) */}
          <div className="hidden md:flex flex-wrap justify-center items-center gap-y-12">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="px-6 py-4 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 font-semibold text-slate-800 dark:text-gray-200 text-center min-w-[180px] z-10"
                >
                  <span className="block text-xs text-pink-500 mb-1 font-bold tracking-wider uppercase">Step {index + 1}</span>
                  {step}
                </motion.div>
                
                {/* Arrow to next item, except for the last one */}
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                    className="px-3 text-slate-400 dark:text-slate-600"
                  >
                    <FiArrowRight size={24} />
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Flow (Vertical) */}
          <div className="flex md:hidden flex-col items-center gap-y-4 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="w-full max-w-[250px] px-6 py-4 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 font-semibold text-slate-800 dark:text-gray-200 text-center"
                >
                  <span className="block text-xs text-pink-500 mb-1 font-bold tracking-wider uppercase">Step {index + 1}</span>
                  {step}
                </motion.div>
                
                {/* Arrow to next item */}
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                    className="py-2 text-slate-400 dark:text-slate-600"
                  >
                    <FiArrowDown size={24} />
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
