"use client";

import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";

const offerings = [
  "Strategic Content Planning",
  "Community Engagement",
  "Client Coordination",
  "Media Coordination",
  "Campaign Execution",
  "Data-driven Optimization",
  "Cross-functional Collaboration",
  "Business-focused Marketing",
];

export default function WhatIBringSection() {
  return (
    <section className="py-20 md:py-32 relative z-10 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-sans mb-6 text-slate-800 dark:text-gray-100">
            What I <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400">Bring</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-gray-400 max-w-2xl mx-auto">
            A reliable partner to help you achieve your marketing goals through proven strategies and meticulous execution.
          </p>
        </motion.div>

        <div className="bg-white dark:bg-slate-800/80 rounded-3xl p-8 md:p-12 shadow-xl border border-slate-200 dark:border-slate-700">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {offerings.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center space-x-4 group"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                  <FiCheckCircle size={20} />
                </div>
                <span className="text-lg font-semibold text-slate-700 dark:text-gray-200 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
