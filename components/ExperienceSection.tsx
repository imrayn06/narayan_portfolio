"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

const experiences = [
  {
    role: "Digital Marketing Intern",
    company: "Mind & Matter India",
    date: "February 2026 – Present",
    details: {
      strategy: "Develop content strategies and monthly content calendars aligned with client objectives, brand positioning, and audience behavior across digital platforms.",
      execution: "Support Meta Ads optimization, marketing automation initiatives, content planning, and the creation of engaging captions and short-form video concepts to maximize reach and engagement.",
      collaboration: "Coordinate with clients, designers, and internal teams by briefing creative requirements, reviewing deliverables, collecting feedback, and ensuring timely campaign execution.",
      results: "Contributed to streamlined marketing operations, improved campaign execution, and enhanced brand consistency through data-driven planning and cross-functional coordination.",
    }
  },
  {
    role: "Founder & Digital Marketing Consultant",
    company: "Digitally Kolkata",
    date: "December 2025 – Present",
    details: {
      strategy: "Provide digital growth strategies tailored to small businesses, focusing on brand visibility, audience acquisition, and online presence.",
      execution: "Deliver Social Media Marketing (SMM), SEO, SEM, PPC, and paid advertising solutions while creating performance-oriented marketing campaigns.",
      collaboration: "Work directly with clients to understand business goals, develop customized strategies, and execute digital initiatives aligned with their objectives.",
      results: "Help businesses strengthen their digital presence through integrated marketing solutions and continuous optimization.",
    }
  },
  {
    role: "Digital Marketing Intern",
    company: "JRD",
    date: "January 2026",
    details: {
      strategy: "Analyzed business objectives and digital performance to identify opportunities for improving online visibility, SEO, and user experience.",
      execution: "Planned content aligned with brand goals, designed digital creatives, supported Google Ads and Meta Ads campaigns, and monitored campaign performance.",
      collaboration: "Worked alongside marketing and creative teams to execute data-driven initiatives that supported business growth.",
      results: "Built a strong foundation in strategy-led digital marketing by combining analytics, creativity, and optimization to support informed marketing decisions.",
    }
  },
  {
    role: "Software Engineer",
    company: "Q3 Technologies",
    date: "April 2025 – October 2025",
    details: {
      strategy: "Applied analytical thinking and solution-oriented development practices to enhance CRM systems and improve internal processes.",
      execution: "Collaborated on multiple CRM enhancement projects and led the migration of the organization's time-tracking application to the latest .NET framework using Blazor and Bootstrap.",
      collaboration: "Worked with cross-functional development teams and enterprise stakeholders to deliver scalable and efficient business solutions.",
      results: "Successfully contributed to multiple enterprise projects while strengthening expertise in software architecture, problem-solving, and process optimization.",
    }
  },
  {
    role: "Test Engineer",
    company: "Wipro",
    date: "September 2021 – February 2024",
    details: {
      strategy: "Implemented quality assurance methodologies to ensure software reliability and optimize testing efficiency.",
      execution: "Performed manual and automation testing with a focus on Salesforce CPQ, utilizing Jira for test planning, execution, and defect management.",
      collaboration: "Partnered with developers, business analysts, and stakeholders to validate requirements and maintain product quality throughout the development lifecycle.",
      results: "Delivered high-quality software solutions while building a strong foundation in analytical thinking, quality management, and data-driven decision-making that continues to inform my marketing approach today.",
    }
  }
];

export default function ExperienceSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="py-20 md:py-32 relative z-10">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-sans mb-6 text-slate-800 dark:text-gray-100">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500">Experience</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-gray-400 max-w-3xl mx-auto">
            A track record of combining technical expertise with strategic marketing to drive brand growth, audience engagement, and business impact.
          </p>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-white dark:bg-slate-800/60 rounded-3xl p-6 md:p-8 shadow-lg border border-slate-200 dark:border-slate-700/50"
              >
                {/* Accordion Header */}
                <div
                  onClick={() => toggleExpand(index)}
                  className="flex items-center justify-between cursor-pointer select-none group"
                >
                  <div className="flex-grow pr-4">
                    <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-lg font-semibold text-slate-500 dark:text-slate-400">
                      {exp.company}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-4 shrink-0">
                    <span className="hidden sm:inline-block px-4 py-2 bg-slate-100 dark:bg-slate-700/50 text-slate-700 dark:text-slate-300 rounded-full text-xs md:text-sm font-medium">
                      {exp.date}
                    </span>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-700/50 flex items-center justify-center text-slate-500 dark:text-slate-300 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-950/50 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors"
                    >
                      <FiChevronDown size={20} />
                    </motion.div>
                  </div>
                </div>

                {/* Mobile-only date display under header */}
                <div className="mt-2 sm:hidden">
                  <span className="inline-block px-3 py-1 bg-slate-100 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 rounded-full text-xs font-semibold">
                    {exp.date}
                  </span>
                </div>

                {/* Accordion Content */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 mt-6 border-t border-slate-150 dark:border-slate-700/50">
                        {/* Strategy & Execution */}
                        <div className="space-y-6">
                          <div>
                            <h4 className="text-base font-bold text-slate-800 dark:text-gray-200 mb-2 flex items-center">
                              <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span> Strategy
                            </h4>
                            <p className="text-sm md:text-base text-slate-600 dark:text-gray-400 leading-relaxed">
                              {exp.details.strategy}
                            </p>
                          </div>
                          <div>
                            <h4 className="text-base font-bold text-slate-800 dark:text-gray-200 mb-2 flex items-center">
                              <span className="w-2 h-2 rounded-full bg-pink-500 mr-2"></span> Execution
                            </h4>
                            <p className="text-sm md:text-base text-slate-600 dark:text-gray-400 leading-relaxed">
                              {exp.details.execution}
                            </p>
                          </div>
                        </div>

                        {/* Collaboration & Results */}
                        <div className="space-y-6">
                          <div>
                            <h4 className="text-base font-bold text-slate-800 dark:text-gray-200 mb-2 flex items-center">
                              <span className="w-2 h-2 rounded-full bg-purple-500 mr-2"></span> Collaboration
                            </h4>
                            <p className="text-sm md:text-base text-slate-600 dark:text-gray-400 leading-relaxed">
                              {exp.details.collaboration}
                            </p>
                          </div>
                          <div>
                            <h4 className="text-base font-bold text-slate-800 dark:text-gray-200 mb-2 flex items-center">
                              <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span> Results
                            </h4>
                            <p className="text-sm md:text-base text-slate-600 dark:text-gray-400 leading-relaxed font-medium">
                              {exp.details.results}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
