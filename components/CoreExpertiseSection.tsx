"use client";

import { motion } from "framer-motion";
import { 
  FiTrendingUp, FiMessageCircle, FiUsers, FiBriefcase, 
  FiRadio, FiCalendar, FiTarget, FiBarChart2, 
  FiActivity, FiUserPlus, FiSearch, FiLayers 
} from "react-icons/fi";

const expertiseAreas = [
  { title: "Social Media Strategy", icon: <FiTrendingUp size={24} /> },
  { title: "Content Strategy", icon: <FiMessageCircle size={24} /> },
  { title: "Community Engagement", icon: <FiUsers size={24} /> },
  { title: "Client Coordination", icon: <FiBriefcase size={24} /> },
  { title: "Media Coordination", icon: <FiRadio size={24} /> },
  { title: "Campaign Planning", icon: <FiCalendar size={24} /> },
  { title: "Brand Positioning", icon: <FiTarget size={24} /> },
  { title: "Marketing Analytics", icon: <FiBarChart2 size={24} /> },
  { title: "Performance Marketing", icon: <FiActivity size={24} /> },
  { title: "Audience Growth", icon: <FiUserPlus size={24} /> },
  { title: "Consumer Insights", icon: <FiSearch size={24} /> },
  { title: "Cross-functional Collab", icon: <FiLayers size={24} /> },
];

export default function CoreExpertiseSection() {
  return (
    <section id="expertise" className="py-20 md:py-32 relative z-10 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-sans mb-6 text-slate-800 dark:text-gray-100">
            Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-sky-500">Expertise</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive skill set designed to drive strategic growth and brand impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {expertiseAreas.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="p-6 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 shadow-md hover:shadow-xl dark:shadow-none transition-all flex flex-col items-center text-center group cursor-pointer"
            >
              <div className="w-14 h-14 mb-4 rounded-full bg-slate-100 dark:bg-slate-700/50 flex items-center justify-center text-purple-600 dark:text-purple-400 group-hover:bg-purple-600 group-hover:text-white dark:group-hover:bg-purple-500 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-slate-800 dark:text-gray-200">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
