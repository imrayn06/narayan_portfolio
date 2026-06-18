"use client";

import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FiArrowLeft } from "react-icons/fi";
import Link from "next/link";

const caseStudies = [
  {
    id: 1,
    title: "Brand Revitalization & Engagement Growth",
    category: "Social Media Strategy",
    overview: "A strategic initiative to revamp social media presence for a healthcare and wellness brand, focusing on building a consistent visual identity and driving meaningful audience interactions.",
    challenge: "The brand was struggling with low organic reach, inconsistent visual identity, and declining engagement on Instagram and Facebook. Content lacked a strategic direction and was not aligned with business goals.",
    research: "Analyzed competitor social media strategies in the Ayurveda/wellness sector. Conducted audience analysis to understand demographics, content preferences, and peak activity times. Studied trending content formats in the health and wellness niche.",
    strategy: "Developed a cohesive content calendar focusing on educational posts, behind-the-scenes content, and user testimonials. Created a consistent visual brand language with a curated color palette and template system.",
    execution: "Designed and published daily creatives using Canva, implemented a strategic hashtag system, and scheduled posts for optimal engagement windows. Ran A/B tests on content formats to identify top performers.",
    analytics: "Tracked KPIs including reach, engagement rate, follower growth, and click-through rates using Meta Business Suite and Google Analytics. Generated weekly performance reports.",
    results: "Achieved a 15% increase in engagement rate, 120% growth in organic reach, and a notable improvement in brand consistency scores within 3 months.",
    learnings: "Consistency in visual language combined with data-driven posting schedules yields the highest ROI. Educational content significantly outperformed promotional posts."
  },
  {
    id: 2,
    title: "Performance Optimization & Search Visibility",
    category: "SEO & Content Strategy",
    overview: "A project focused on improving organic search visibility and website traffic through comprehensive on-page SEO improvements and strategic content restructuring.",
    challenge: "The website had poor organic discoverability, low traffic from target keywords, and was not optimized for local search. Content was not structured for search engine crawling.",
    research: "Conducted thorough keyword research using Google Keyword Planner, Ubersuggest, and SEMrush. Performed a detailed technical SEO audit and identified content gaps through competitor analysis.",
    strategy: "Created a phased SEO roadmap prioritizing high-impact, low-difficulty keywords. Planned content restructuring to improve topical authority and internal linking architecture.",
    execution: "Optimized meta titles, descriptions, and heading structures across all key landing pages. Improved internal linking, added schema markup, and restructured content for better readability and crawlability.",
    analytics: "Monitored keyword rankings, organic traffic, bounce rates, and average session duration using Google Search Console and Analytics.",
    results: "Significant improvement in SERP rankings for top 10 targeted keywords. Organic traffic showed a notable upward trend within the first month.",
    learnings: "Technical SEO must be perfectly aligned with user intent for sustainable traffic growth. Quick wins from meta optimization can build momentum for larger content initiatives."
  },
  {
    id: 3,
    title: "Community-Led Growth Initiative",
    category: "Community Management",
    overview: "An initiative to transform a passive online audience into an engaged, loyal community through targeted campaigns and authentic two-way communication.",
    challenge: "The brand had a large but passive following with minimal interaction. Community members were not engaged, and there was no systematic approach to fostering meaningful conversations.",
    research: "Studied successful community-building case studies across similar industries. Analyzed existing audience demographics and identified key engagement drivers through social listening.",
    strategy: "Shifted the overall approach from broadcasting to community-building. Designed a multi-phase engagement plan with interactive content, recognition programs, and direct outreach.",
    execution: "Launched weekly poll series, hosted Q&A sessions, created member spotlight features, and ran targeted ad campaigns on Meta and LinkedIn to acquire high-intent community members.",
    analytics: "Tracked community growth rate, daily active users, comment rates, and member retention using platform insights and custom dashboards.",
    results: "Built a vibrant community of 2,000+ active members. Achieved a 5% improvement in CTR on community links and reactivated 300+ dormant members.",
    learnings: "Authentic two-way communication builds stronger brand equity than polished, one-way advertising. Micro-commitments like polls significantly lower the barrier to entry for engagement."
  }
];

export default function CaseStudiesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-20">
        <div className="max-w-5xl mx-auto px-4">
          {/* Back Link */}
          <Link href="/" className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 font-semibold mb-8 hover:gap-3 transition-all">
            <FiArrowLeft />
            Back to Portfolio
          </Link>

          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-20 text-center"
          >
            <h1 className="text-5xl md:text-6xl font-black text-slate-800 dark:text-white mb-4">
              Case <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Studies</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-gray-400 max-w-2xl mx-auto">
              In-depth breakdowns of how I approach challenges, formulate strategies, and deliver measurable results.
            </p>
          </motion.div>

          {/* Case Studies */}
          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <motion.article
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-slate-800/60 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-700/50 overflow-hidden"
              >
                {/* Case Study Header */}
                <div className="bg-gradient-to-r from-purple-600 to-pink-500 dark:from-purple-800 dark:to-pink-700 px-8 py-6">
                  <span className="inline-block px-3 py-1 bg-white/20 text-white text-xs font-bold rounded-full mb-3">
                    {study.category}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-black text-white">
                    {study.title}
                  </h2>
                </div>

                {/* Body */}
                <div className="p-8 md:p-10 space-y-8">
                  {/* Overview */}
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-gray-100 mb-3 flex items-center">
                      <span className="w-1.5 h-6 bg-purple-500 rounded-full mr-3"></span>
                      Overview
                    </h3>
                    <p className="text-slate-600 dark:text-gray-400 leading-relaxed">{study.overview}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Challenge */}
                    <div className="bg-red-50 dark:bg-red-900/10 p-6 rounded-2xl border border-red-100 dark:border-red-800/30">
                      <h3 className="text-lg font-bold text-red-700 dark:text-red-400 mb-3">Challenge</h3>
                      <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed">{study.challenge}</p>
                    </div>

                    {/* Research */}
                    <div className="bg-blue-50 dark:bg-blue-900/10 p-6 rounded-2xl border border-blue-100 dark:border-blue-800/30">
                      <h3 className="text-lg font-bold text-blue-700 dark:text-blue-400 mb-3">Research</h3>
                      <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed">{study.research}</p>
                    </div>

                    {/* Strategy */}
                    <div className="bg-purple-50 dark:bg-purple-900/10 p-6 rounded-2xl border border-purple-100 dark:border-purple-800/30">
                      <h3 className="text-lg font-bold text-purple-700 dark:text-purple-400 mb-3">Strategy</h3>
                      <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed">{study.strategy}</p>
                    </div>

                    {/* Execution */}
                    <div className="bg-orange-50 dark:bg-orange-900/10 p-6 rounded-2xl border border-orange-100 dark:border-orange-800/30">
                      <h3 className="text-lg font-bold text-orange-700 dark:text-orange-400 mb-3">Execution</h3>
                      <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed">{study.execution}</p>
                    </div>
                  </div>

                  {/* Analytics */}
                  <div className="bg-slate-50 dark:bg-slate-700/30 p-6 rounded-2xl border border-slate-200 dark:border-slate-600/50">
                    <h3 className="text-lg font-bold text-slate-800 dark:text-gray-200 mb-3">Analytics & Tracking</h3>
                    <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed">{study.analytics}</p>
                  </div>

                  {/* Results & Learnings */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-green-50 dark:bg-green-900/10 p-6 rounded-2xl border border-green-100 dark:border-green-800/30">
                      <h3 className="text-lg font-bold text-green-700 dark:text-green-400 mb-3">Results</h3>
                      <p className="text-green-600 dark:text-green-300 text-sm leading-relaxed font-medium">{study.results}</p>
                    </div>

                    <div className="bg-indigo-50 dark:bg-indigo-900/10 p-6 rounded-2xl border border-indigo-100 dark:border-indigo-800/30">
                      <h3 className="text-lg font-bold text-indigo-700 dark:text-indigo-400 mb-3">Key Learnings</h3>
                      <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed">{study.learnings}</p>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
