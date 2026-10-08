"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUpRight, FiArrowRight, FiX, FiCheck, FiExternalLink } from "react-icons/fi";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

interface WorkItem {
  id: string;
  client: string;
  title: string;
  category: "BRAND & SOCIAL" | "CAMPAIGN" | "SPEC";
  contribution: string;
  roleDescription: string;
  scope: string[];
  summary: string;
  insight: string;
  image: string;
  aspect: string;
  caseStudyUrl?: string;
  instaLink?: string;
  fbLink?: string;
  isSpec?: boolean;
}

const workArchive: WorkItem[] = [
  {
    id: "fifa",
    client: "Walplast",
    title: "FIFA 2026 Knockout Campaign",
    category: "CAMPAIGN",
    contribution: "Campaign Planning · Content Strategy · Community Management Support",
    roleDescription: "Assisted in campaign planning, prediction contest coordination, real-time match fixture alignment, and audience interaction support.",
    scope: [
      "Real-time fixture content calendar",
      "Interactive prediction posts for knockout games",
      "Compelling CTAs to drive comments and friend tagging",
      "1.1M+ Total Views, 30K+ Engagements, 28 Creatives published"
    ],
    summary: "High-engagement social media campaign executed during the FIFA knockout phase to drive real-time audience participation.",
    insight: "Interactive prediction mechanics tap into sports excitement, turning passive scrollers into active participants.",
    image: "/Brand_Logo/Walplast_Fifa_Campaign.png",
    aspect: "aspect-[16/9]",
    caseStudyUrl: "/work/fifa",
    instaLink: "https://www.instagram.com/walplast/",
    fbLink: "https://www.facebook.com/Walplast",
  },
  {
    id: "bisleri",
    client: "Bisleri (Spec Project)",
    title: "31-Day Winter Hydration Plan",
    category: "SPEC",
    isSpec: true,
    contribution: "Content Strategy · Visual Camera Hooks · Copywriting",
    roleDescription: "Self-initiated speculative content campaign designed to demonstrate end-to-end editorial planning and copywriting for FMCG packaged water.",
    scope: [
      "31 unique daily content scripts with camera plots",
      "Balanced across 4 pillars: Branding, Promotional, Social, Educational",
      "Copywriting scripts tailored for Meta / Instagram Reels",
      "Complete visual hook and plot breakdown"
    ],
    summary: "A comprehensive 31-day content roadmap addressing the seasonal winter drop in water consumption.",
    insight: "Cold weather suppresses thirst sensation, creating an opportunity to shift messaging from thirst satisfaction to essential wellness and purity.",
    image: "/portfolio/digital-age-brand.jpg",
    aspect: "aspect-[16/9]",
    caseStudyUrl: "/work/bisleri",
  },
  {
    id: "msp-steel",
    client: "MSP Steel",
    title: "B2B Social Media Execution Support",
    category: "BRAND & SOCIAL",
    contribution: "Social Media Content Handling · Scheduling · Posting Consistency",
    roleDescription: "Supported day-to-day social media execution, post scheduling, and brand-aligned communication under the agency marketing team.",
    scope: [
      "Supported social media content handling workflows",
      "Assisted in campaign coordination and calendar scheduling",
      "Helped maintain structured posting consistency across platforms",
      "Ensured messaging alignment with industrial B2B standards"
    ],
    summary: "Structured digital presence support for an established steel manufacturing brand.",
    insight: "Industrial B2B brands often suffer from irregular posting cadences; consistent thematic updates establish corporate authority.",
    image: "/Brand_Logo/msp.png.png",
    aspect: "aspect-[4/3]",
    instaLink: "https://www.instagram.com/mspsteelofficial/",
    fbLink: "https://www.facebook.com/MSPSteelOfficial",
  },
  {
    id: "walplast",
    client: "Walplast",
    title: "Brand Social Media Support",
    category: "BRAND & SOCIAL",
    contribution: "Social Media Workflows · Content Planning Coordination",
    roleDescription: "Contributed to content coordination, scheduling, and asset formatting for construction chemicals and wall putty brand accounts.",
    scope: [
      "Supported social media handling workflows",
      "Assisted in content planning and calendar coordination",
      "Helped format and schedule product-focused updates"
    ],
    summary: "Ongoing social presence support for a construction and building solutions brand.",
    insight: "Clarity in product applications and steady educational touchpoints help building material brands stay top-of-mind with contractors and homeowners.",
    image: "/Brand_Logo/walplast.png.png",
    aspect: "aspect-[4/3]",
    instaLink: "https://www.instagram.com/walplast/",
    fbLink: "https://www.facebook.com/Walplast",
  },
  {
    id: "drychem",
    client: "Drychem",
    title: "Digital Presence & Campaign Assistance",
    category: "BRAND & SOCIAL",
    contribution: "Content Flow Management · Messaging Alignment Support",
    roleDescription: "Assisted in managing content distribution, campaign rollout schedules, and cross-channel messaging consistency.",
    scope: [
      "Assisted in managing content flow and scheduling",
      "Supported campaign execution planning",
      "Helped maintain uniform brand voice across platforms"
    ],
    summary: "Structured communication support for an industrial manufacturing product line.",
    insight: "Simplifying technical product capabilities into digestible digital posts improves engagement in competitive niche sectors.",
    image: "/Brand_Logo/drychem.png.png",
    aspect: "aspect-[4/3]",
    instaLink: "https://www.instagram.com/drychemindia/",
    fbLink: "https://www.facebook.com/DryChemIndiaPvtLtd",
  },
  {
    id: "zee-bangla",
    client: "Zee Bangla Sonar",
    title: "Social Media Execution Support",
    category: "BRAND & SOCIAL",
    contribution: "Content Planning Support · Campaign Coordination Flow",
    roleDescription: "Assisted in high-cadence content planning, scheduling coordination, and post distribution for regional entertainment programming.",
    scope: [
      "Assisted in high-volume entertainment content scheduling",
      "Helped coordinate campaign execution workflows",
      "Supported engagement-focused posting cadences"
    ],
    summary: "Fast-paced content coordination and campaign distribution for television and entertainment media.",
    insight: "Media entertainment requires rapid turnaround and high posting frequency aligned directly with broadcast schedules.",
    image: "/Brand_Logo/z_bangla.png.png",
    aspect: "aspect-[4/3]",
    instaLink: "https://www.instagram.com/zeebanglasonar_official/",
    fbLink: "https://www.facebook.com/ZeeBanglaSonar",
  },
];

export default function WorkPage() {
  const [filter, setFilter] = useState<"ALL" | "BRAND & SOCIAL" | "CAMPAIGNS">("ALL");
  const [selectedBrand, setSelectedBrand] = useState<WorkItem | null>(null);

  const filteredItems = workArchive.filter((item) => {
    if (filter === "ALL") return true;
    if (filter === "BRAND & SOCIAL") return item.category === "BRAND & SOCIAL";
    if (filter === "CAMPAIGNS") return item.category === "CAMPAIGN" || item.category === "SPEC";
    return true;
  });

  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-32 pb-24 text-warm-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          {/* Header */}
          <div className="border-b border-white/[0.08] pb-12 mb-12">
            <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-warm-muted block mb-3">
              01 / WORK ARCHIVE
            </span>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div>
                <h1 className="text-4xl sm:text-6xl font-sans font-bold tracking-tight uppercase text-warm-white">
                  Brand &amp; Campaign Work
                </h1>
                <p className="text-warm-gray text-base sm:text-lg max-w-2xl mt-4 font-light">
                  A transparent record of hands-on social media execution, content planning, and campaign support across diverse brand accounts.
                </p>
              </div>

              {/* Filter Tabs */}
              <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
                {(["ALL", "BRAND & SOCIAL", "CAMPAIGNS"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setFilter(tab)}
                    className={`px-4 py-2 rounded-full border transition-all ${
                      filter === tab
                        ? "btn-primary border-transparent font-semibold shadow-sm"
                        : "bg-transparent text-warm-gray border-dark-borderSubtle hover:text-warm-white hover:border-dark-border"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Notice regarding contribution */}
          <div className="mb-12 p-4 rounded-xl bg-dark-surface border border-white/[0.06] flex items-start gap-3 text-xs font-mono text-warm-muted">
            <span className="text-accent-blue font-bold">INFO:</span>
            <span>
              Work completed during internships at Mind &amp; Matter, KDMI, and JRD Ayurveda. For each brand, the level of execution contribution is explicitly noted.
            </span>
          </div>

          {/* Work Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {filteredItems.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group rounded-2xl bg-dark-surface border border-white/[0.08] hover:border-white/20 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Visual Card Banner */}
                  <div className="relative w-full aspect-[16/10] bg-[#141414] border-b border-white/[0.06] flex items-center justify-center p-6 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />

                    {/* Badge */}
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded bg-black/80 backdrop-blur-md border border-white/[0.1] font-mono text-[9px] uppercase tracking-wider text-warm-white">
                        {item.category}
                      </span>
                      {item.isSpec && (
                        <span className="px-2.5 py-1 rounded bg-white text-black font-mono text-[9px] uppercase tracking-wider font-bold">
                          SPEC PROJECT
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Body Info */}
                  <div className="p-6 md:p-8 space-y-4">
                    <div className="flex items-center justify-between font-mono text-xs text-warm-muted">
                      <span>{item.client}</span>
                      <span className="text-[10px] tracking-wider uppercase">SUPPORT ROLE</span>
                    </div>

                    <h2 className="text-2xl font-sans font-bold text-warm-white group-hover:text-accent-blue transition-colors">
                      {item.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-warm-gray leading-relaxed font-light">
                      {item.summary}
                    </p>

                    <div className="pt-2 border-t border-white/[0.06] space-y-1">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-warm-muted block">
                        Contribution Level:
                      </span>
                      <p className="font-mono text-xs text-warm-offwhite">
                        {item.contribution}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 md:p-8 pt-0 flex items-center justify-between border-t border-white/[0.04]">
                  {item.caseStudyUrl ? (
                    <Link
                      href={item.caseStudyUrl}
                      className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-warm-white hover:text-accent-blue transition-colors"
                    >
                      <span>Read Case Study</span>
                      <FiArrowRight />
                    </Link>
                  ) : (
                    <button
                      onClick={() => setSelectedBrand(item)}
                      className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-warm-white hover:text-accent-blue transition-colors"
                    >
                      <span>View Scope &amp; Details</span>
                      <FiArrowUpRight />
                    </button>
                  )}

                  {/* Social Channel Links */}
                  <div className="flex items-center gap-3 text-warm-muted">
                    {item.instaLink && (
                      <a
                        href={item.instaLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-warm-white transition-colors"
                        aria-label={`${item.client} Instagram`}
                      >
                        <FaInstagram size={16} />
                      </a>
                    )}
                    {item.fbLink && (
                      <a
                        href={item.fbLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-warm-white transition-colors"
                        aria-label={`${item.client} Facebook`}
                      >
                        <FaFacebook size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Cross Links to Creative & Motion */}
          <div className="mt-20 pt-16 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 gap-8">
            <Link
              href="/creative"
              className="p-8 rounded-2xl bg-dark-surface border border-white/[0.06] hover:border-white/20 transition-all group"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-warm-muted block mb-2">
                VISUAL COLLATERAL
              </span>
              <h3 className="text-xl font-bold font-sans text-warm-white group-hover:text-accent-blue transition-colors flex items-center justify-between">
                <span>Creative &amp; Design Archive</span>
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </h3>
              <p className="text-xs text-warm-gray mt-2 leading-relaxed">
                Brand marks, social media creative layouts, and graphic collateral with high-res zoom.
              </p>
            </Link>

            <Link
              href="/motion"
              className="p-8 rounded-2xl bg-dark-surface border border-white/[0.06] hover:border-white/20 transition-all group"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-warm-muted block mb-2">
                SHORT-FORM &amp; REELS
              </span>
              <h3 className="text-xl font-bold font-sans text-warm-white group-hover:text-accent-blue transition-colors flex items-center justify-between">
                <span>Motion &amp; Video Concepts</span>
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </h3>
              <p className="text-xs text-warm-gray mt-2 leading-relaxed">
                Reels treatments, video hooks, pacing outlines, and short-form campaign concepts.
              </p>
            </Link>
          </div>
        </div>
      </main>

      {/* Brand Detail Modal */}
      <AnimatePresence>
        {selectedBrand && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedBrand(null)}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md p-4 sm:p-6 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full bg-[#111111] border border-white/[0.12] rounded-3xl p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-warm-muted">
                    {selectedBrand.category} · {selectedBrand.client}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-sans font-bold text-warm-white mt-1">
                    {selectedBrand.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedBrand(null)}
                  className="p-2 rounded-full bg-white/[0.05] hover:bg-white/[0.1] text-warm-white transition-colors min-h-[40px] min-w-[40px] flex items-center justify-center"
                  aria-label="Close"
                >
                  <FiX size={18} />
                </button>
              </div>

              <div className="space-y-4 text-sm text-warm-gray font-light leading-relaxed">
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-warm-white font-semibold mb-1">
                    Context &amp; Overview
                  </h4>
                  <p>{selectedBrand.summary}</p>
                </div>

                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-warm-white font-semibold mb-1">
                    Key Insight
                  </h4>
                  <p>{selectedBrand.insight}</p>
                </div>

                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-warm-white font-semibold mb-1">
                    My Role &amp; Contribution
                  </h4>
                  <p>{selectedBrand.roleDescription}</p>
                </div>

                <div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-warm-white font-semibold mb-2">
                    Scope of Work Supported
                  </h4>
                  <ul className="space-y-2 font-mono text-xs text-warm-offwhite">
                    {selectedBrand.scope.map((s, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <FiCheck className="text-accent-blue mt-0.5 shrink-0" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Social Channels in Modal */}
              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                <span className="font-mono text-xs text-warm-muted">Official Brand Profiles:</span>
                <div className="flex items-center gap-3">
                  {selectedBrand.instaLink && (
                    <a
                      href={selectedBrand.instaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-xs font-mono text-warm-white transition-colors"
                    >
                      <FaInstagram size={14} />
                      <span>Instagram</span>
                    </a>
                  )}
                  {selectedBrand.fbLink && (
                    <a
                      href={selectedBrand.fbLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-xs font-mono text-warm-white transition-colors"
                    >
                      <FaFacebook size={14} />
                      <span>Facebook</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}
