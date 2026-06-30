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
    title: "MSP Steel",
    category: "B2B Social Media Execution Support",
    overview: "MSP Steel required structured and consistent digital communication to strengthen its B2B presence and maintain visibility across social platforms.",
    problem: "MSP Steel required structured and consistent digital communication to strengthen its B2B presence and maintain visibility across social platforms.",
    insight: "Industrial brands often lack consistent content systems, leading to low engagement and weak digital positioning despite strong offline presence.",
    execution: [
      "Supported social media content handling",
      "Assisted in campaign coordination and scheduling",
      "Helped maintain structured posting consistency",
      "Ensured alignment of content with B2B brand communication"
    ],
    growthModel: [
      "Month 1–2: Brand audit + profile structure setup",
      "Month 3–4: Content framework + audience positioning",
      "Month 5–6: Campaign execution + optimization"
    ],
    role: "Assisted in execution and campaign coordination"
  },
  {
    id: 2,
    title: "Walplast",
    category: "Brand Social Media Support",
    overview: "Needed structured content flow and improved consistency in digital communication for stronger brand visibility.",
    problem: "Needed structured content flow and improved consistency in digital communication for stronger brand visibility.",
    insight: "Consistency and structured messaging are critical for B2B construction brands to maintain relevance in digital spaces.",
    execution: [
      "Supported social media handling workflows",
      "Assisted in content planning coordination",
      "Helped maintain brand-aligned communication style"
    ],
    growthModel: [
      "Month 1–2: Digital presence setup",
      "Month 3–4: Content system development",
      "Month 5–6: Awareness campaign execution"
    ],
    role: "Supported campaign execution and content coordination"
  },
  {
    id: 3,
    title: "Drychem",
    category: "Digital Presence & Campaign Assistance",
    overview: "Required structured online visibility and improved communication of product offerings in a competitive B2B segment.",
    problem: "Required structured online visibility and improved communication of product offerings in a competitive B2B segment.",
    insight: "Clear digital presence and consistent messaging help industrial product brands improve discoverability and trust.",
    execution: [
      "Assisted in managing content flow",
      "Supported campaign execution planning",
      "Helped align messaging across platforms"
    ],
    growthModel: [
      "Month 1–2: Brand presence structuring",
      "Month 3–4: Content development phase",
      "Month 5–6: Campaign rollout and optimization"
    ],
    role: "Assisted in execution and content planning support"
  },
  {
    id: 4,
    title: "Zee Bangla Sonar",
    category: "Social Media Execution Support",
    overview: "Required structured coordination for ongoing social media campaigns and content distribution.",
    problem: "Required structured coordination for ongoing social media campaigns and content distribution.",
    insight: "Media brands require fast-paced and consistent content execution to maintain engagement and relevance.",
    execution: [
      "Assisted in content planning support",
      "Helped coordinate campaign execution flow",
      "Supported engagement-driven posting structure"
    ],
    growthModel: [
      "Month 1–2: Content direction alignment",
      "Month 3–4: Campaign rollout planning",
      "Month 5–6: Engagement optimization"
    ],
    role: "Assisted in campaign execution and coordination"
  }
];

export default function CaseStudiesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 pb-20 bg-gradient-to-b from-[#0B0F1A] to-[#111827] text-white">
        <div className="max-w-5xl mx-auto px-4">
          {/* Back Link */}
          <Link href="/" className="inline-flex items-center gap-2 text-[#8B5CF6] font-semibold mb-8 hover:gap-3 transition-all">
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
            <h1 className="text-5xl md:text-6xl font-black text-white mb-4">
              Case <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6]">Studies</span>
            </h1>
            <p className="text-xl text-[#9CA3AF] max-w-2xl mx-auto">
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
                className="bg-[#111827]/80 backdrop-blur-md rounded-3xl shadow-xl border border-slate-800 overflow-hidden"
              >
                {/* Case Study Header */}
                <div className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] px-8 py-6">
                  <span className="inline-block px-3 py-1 bg-white/20 text-white text-xs font-bold rounded-full mb-3 uppercase tracking-wider">
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
                    <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                      <span className="w-1.5 h-6 bg-[#3B82F6] rounded-full mr-3"></span>
                      Overview
                    </h3>
                    <p className="text-[#9CA3AF] leading-relaxed">{study.overview}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Problem */}
                    <div className="bg-red-950/20 p-6 rounded-2xl border border-red-900/30">
                      <h3 className="text-lg font-bold text-red-400 mb-3">Problem</h3>
                      <p className="text-[#9CA3AF] text-sm leading-relaxed">{study.problem}</p>
                    </div>

                    {/* Insight */}
                    <div className="bg-blue-950/20 p-6 rounded-2xl border border-blue-900/30">
                      <h3 className="text-lg font-bold text-blue-400 mb-3">Insight</h3>
                      <p className="text-[#9CA3AF] text-sm leading-relaxed">{study.insight}</p>
                    </div>

                    {/* Execution */}
                    <div className="bg-purple-950/20 p-6 rounded-2xl border border-purple-900/30 md:col-span-2">
                      <h3 className="text-lg font-bold text-purple-400 mb-3">Execution</h3>
                      <ul className="list-disc pl-5 space-y-2 text-[#9CA3AF] text-sm">
                        {study.execution.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Growth Model */}
                    <div className="bg-cyan-950/20 p-6 rounded-2xl border border-cyan-900/30">
                      <h3 className="text-lg font-bold text-cyan-400 mb-3">Practical 6-Month Growth Model</h3>
                      <ul className="list-disc pl-5 space-y-2 text-[#9CA3AF] text-sm">
                        {study.growthModel.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Role */}
                    <div className="bg-green-950/20 p-6 rounded-2xl border border-green-900/30">
                      <h3 className="text-lg font-bold text-green-400 mb-3">Role</h3>
                      <p className="text-green-400 text-sm leading-relaxed font-semibold">{study.role}</p>
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
