"use client";

import { motion } from "framer-motion";
import { 
  FiTarget, FiUsers, FiSearch, FiMessageCircle, 
  FiCalendar, FiActivity, FiBriefcase, FiBarChart2, FiTrendingUp 
} from "react-icons/fi";

const steps = [
  { 
    title: "Business Goals", 
    desc: "Define KPIs, target brand metrics, and overall campaign objectives.", 
    icon: FiTarget 
  },
  { 
    title: "Audience Research", 
    desc: "Understand demographics, psychographics, pain points, and preferences.", 
    icon: FiUsers 
  },
  { 
    title: "Competitor Analysis", 
    desc: "Audit competitor positioning, content patterns, and performance gaps.", 
    icon: FiSearch 
  },
  { 
    title: "Content Strategy", 
    desc: "Establish pillars, visual guidelines, and content distribution calendars.", 
    icon: FiMessageCircle 
  },
  { 
    title: "Campaign Planning", 
    desc: "Conceptualize creative briefs, budgets, and platform distributions.", 
    icon: FiCalendar 
  },
  { 
    title: "Campaign Execution", 
    desc: "Launch and monitor campaigns, optimize ads, and manage content assets.", 
    icon: FiActivity 
  },
  { 
    title: "Community Engagement", 
    desc: "Nurture audience conversations, review feedback, and build relationships.", 
    icon: FiBriefcase 
  },
  { 
    title: "Performance Tracking", 
    desc: "Compile performance data, organic reach metrics, and click-through rates.", 
    icon: FiBarChart2 
  },
  { 
    title: "Optimization", 
    desc: "Refine copy, targeting, and creative assets based on conversion analytics.", 
    icon: FiTrendingUp 
  },
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

        {/* Desktop Grid Flow (md and larger) */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="p-6 bg-white dark:bg-slate-800 rounded-3xl shadow-md border border-slate-200 dark:border-slate-700 flex gap-4 items-start"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 text-white flex items-center justify-center shrink-0 shadow-md">
                <step.icon size={22} />
              </div>
              <div>
                <span className="block text-xs text-pink-500 font-bold tracking-wider uppercase mb-1">Step {index + 1}</span>
                <h3 className="text-lg font-bold text-slate-800 dark:text-gray-200 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-500 dark:text-gray-400 leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Vertical Timeline (under md) */}
        <div className="md:hidden relative max-w-md mx-auto pl-2">
          {/* Timeline line */}
          <div className="absolute left-6 top-2 bottom-2 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-orange-400 opacity-40" />
          
          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="relative flex gap-4 items-start pl-8"
              >
                {/* Step number circle along timeline */}
                <div className="absolute left-[-10px] top-0 w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-white flex items-center justify-center border-4 border-slate-50 dark:border-slate-900 shadow-md shrink-0 z-10">
                  <step.icon size={16} />
                </div>
                
                <div>
                  <span className="block text-xs text-pink-500 font-bold tracking-wider uppercase mb-1">Step {index + 1}</span>
                  <h3 className="text-base font-bold text-slate-800 dark:text-gray-200 mb-1">{step.title}</h3>
                  <p className="text-xs text-slate-500 dark:text-gray-400 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
