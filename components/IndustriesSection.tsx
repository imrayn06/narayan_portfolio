"use client";

import { motion } from "framer-motion";
import { FiHeart, FiCpu, FiShield, FiBookOpen, FiCoffee } from "react-icons/fi";
import { FaLeaf } from "react-icons/fa";

const industries = [
  { name: "Healthcare", icon: <FiHeart size={32} />, color: "text-red-500", bg: "bg-red-100 dark:bg-red-900/30" },
  { name: "Ayurveda", icon: <FaLeaf size={32} />, color: "text-green-500", bg: "bg-green-100 dark:bg-green-900/30" },
  { name: "Technology", icon: <FiCpu size={32} />, color: "text-blue-500", bg: "bg-blue-100 dark:bg-blue-900/30" },
  { name: "Compliance", icon: <FiShield size={32} />, color: "text-slate-500", bg: "bg-slate-200 dark:bg-slate-700/50" },
  { name: "Education", icon: <FiBookOpen size={32} />, color: "text-yellow-500", bg: "bg-yellow-100 dark:bg-yellow-900/30" },
  { name: "Lifestyle", icon: <FiCoffee size={32} />, color: "text-orange-500", bg: "bg-orange-100 dark:bg-orange-900/30" },
];

export default function IndustriesSection() {
  return (
    <section className="py-20 md:py-32 relative z-10 bg-slate-50 dark:bg-slate-900/30">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-sans mb-6 text-slate-800 dark:text-gray-100">
            Industries <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">Served</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-gray-400 max-w-2xl mx-auto">
            Experience tailoring marketing strategies across diverse business sectors.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {industries.map((ind, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="flex flex-col items-center justify-center p-6 bg-white dark:bg-slate-800 rounded-3xl shadow-lg border border-slate-100 dark:border-slate-700"
            >
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${ind.bg} ${ind.color}`}>
                {ind.icon}
              </div>
              <h3 className="font-bold text-slate-800 dark:text-gray-200 text-center">
                {ind.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
