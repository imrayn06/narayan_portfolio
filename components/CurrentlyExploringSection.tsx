"use client";

import { motion } from "framer-motion";

const exploringTopics = [
  "AI in Marketing",
  "Community-led Growth",
  "Marketing Automation",
  "Consumer Psychology",
  "Creator Economy",
  "Social Listening",
  "Brand Strategy",
  "Marketing Analytics"
];

export default function CurrentlyExploringSection() {
  return (
    <section className="py-20 md:py-32 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-sans mb-6 text-slate-800 dark:text-gray-100">
            Currently <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Exploring</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-gray-400 max-w-2xl mx-auto">
            Continuous learning is at the core of my approach. Here is what I am diving into right now.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-4xl mx-auto">
          {exploringTopics.map((topic, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -5, 
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              className="px-6 py-4 bg-white/60 dark:bg-slate-800/60 backdrop-blur-md rounded-full shadow-md border border-slate-200/50 dark:border-slate-700/50 cursor-pointer"
            >
              <span className="font-semibold text-slate-700 dark:text-gray-200 text-lg">
                {topic}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
