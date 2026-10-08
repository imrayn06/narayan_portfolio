"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowLeft, FiArrowRight, FiCheckCircle, FiZoomIn, FiX } from "react-icons/fi";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function FifaCaseStudyPage() {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-32 pb-24 text-warm-white">
        <article className="max-w-5xl mx-auto px-6 sm:px-8">
          {/* Back link */}
          <div className="mb-10">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-warm-muted hover:text-warm-white transition-colors"
            >
              <FiArrowLeft />
              <span>Back to Archive</span>
            </Link>
          </div>

          {/* Header */}
          <header className="border-b border-white/[0.08] pb-12 mb-16 space-y-6">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-warm-muted">
                CASE STUDY 01
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-warm-muted">
                WALPLAST CAMPAIGN
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-sans font-black tracking-tight text-warm-white uppercase">
              FIFA 2026 Knockout Campaign
            </h1>

            <p className="text-lg sm:text-xl text-warm-gray font-light max-w-3xl leading-relaxed">
              Real-time community engagement campaign during the World Cup knockout rounds, leveraging interactive match predictions to maximize organic reach and conversation.
            </p>

            {/* Project Metadata Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-white/[0.06] font-mono text-xs">
              <div>
                <span className="text-warm-muted uppercase tracking-wider block text-[10px] mb-1">
                  CLIENT
                </span>
                <span className="text-warm-white font-medium">Walplast</span>
              </div>
              <div>
                <span className="text-warm-muted uppercase tracking-wider block text-[10px] mb-1">
                  TYPE
                </span>
                <span className="text-warm-white font-medium">Community Engagement</span>
              </div>
              <div>
                <span className="text-warm-muted uppercase tracking-wider block text-[10px] mb-1">
                  CONTRIBUTION
                </span>
                <span className="text-warm-white font-medium">Planning &amp; Community Support</span>
              </div>
              <div>
                <span className="text-warm-muted uppercase tracking-wider block text-[10px] mb-1">
                  PLATFORMS
                </span>
                <span className="text-warm-white font-medium">Instagram · Facebook</span>
              </div>
            </div>
          </header>

          {/* ─── 01 / THE BRIEF ─── */}
          <section className="py-12 border-b border-white/[0.08] space-y-6">
            <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-warm-muted block">
              01 / THE BRIEF
            </span>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-4">
                <h2 className="text-2xl font-sans font-bold text-warm-white">
                  Capturing Cultural Moment-Marketing
                </h2>
              </div>
              <div className="md:col-span-8 space-y-4 text-warm-gray text-base leading-relaxed font-light">
                <p>
                  Major sports tournaments command massive social media conversation volume. Walplast sought to build brand affinity, tap into trending tournament momentum, and turn passive brand followers into active community participants without appearing forced or off-brand.
                </p>
                <p>
                  The goal was to engineer high-frequency daily engagement during tournament knockout stages while sustaining positive brand recall and community growth.
                </p>
              </div>
            </div>
          </section>

          {/* ─── 02 / THE IDEA & HERO VISUAL ─── */}
          <section className="py-16 border-b border-white/[0.08] space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-warm-muted block mb-2">
                  02 / THE IDEA
                </span>
                <h2 className="text-2xl sm:text-3xl font-sans font-bold text-warm-white">
                  Interactive Match Predictions &amp; Community Tagging
                </h2>
              </div>
              <span className="font-mono text-xs text-warm-muted uppercase tracking-wider">
                Moment-Driven Content
              </span>
            </div>

            <p className="text-warm-gray text-base leading-relaxed font-light max-w-3xl">
              Rather than generic celebratory posts, we deployed match-prediction graphics ahead of high-stakes fixture kickoffs, incentivizing users to comment their score predictions and tag friends in comments.
            </p>

            {/* Large Visual */}
            <div
              onClick={() => setActiveImage("/Brand_Logo/Walplast_Fifa_Campaign.png")}
              className="relative w-full aspect-[16/9] bg-[#141414] rounded-3xl overflow-hidden border border-white/[0.1] cursor-pointer group"
            >
              <Image
                src="/Brand_Logo/Walplast_Fifa_Campaign.png"
                alt="Walplast FIFA Campaign Visual Asset"
                fill
                priority
                className="object-contain p-4 md:p-8 transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 90vw"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full btn-primary font-mono text-xs uppercase tracking-wider font-semibold shadow-md">
                  <FiZoomIn /> Click to expand
                </span>
              </div>
            </div>
          </section>

          {/* ─── 03 / THE APPROACH & EXECUTION ─── */}
          <section className="py-16 border-b border-white/[0.08] space-y-8">
            <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-warm-muted block">
              03 / THE APPROACH
            </span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
              <div className="p-6 rounded-2xl bg-dark-surface border border-white/[0.06] space-y-3">
                <span className="text-warm-white font-bold block text-sm">01 / Fixture Calendar</span>
                <p className="text-warm-gray leading-relaxed font-light">
                  Mapped campaign creative rollouts directly to tournament fixture schedules for maximum real-time relevance.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-dark-surface border border-white/[0.06] space-y-3">
                <span className="text-warm-white font-bold block text-sm">02 / Clear CTA Friction</span>
                <p className="text-warm-gray leading-relaxed font-light">
                  Designed copy with zero ambiguity: &ldquo;Predict &amp; Win&rdquo; mechanics requiring friend tagging to trigger viral reach.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-dark-surface border border-white/[0.06] space-y-3">
                <span className="text-warm-white font-bold block text-sm">03 / Rapid Turnaround</span>
                <p className="text-warm-gray leading-relaxed font-light">
                  Assisted in daily posting consistency, reviewing graphic deliverables, and monitoring audience comments in real time.
                </p>
              </div>
            </div>
          </section>

          {/* ─── 04 / DELIVERABLES & DOCUMENTED RESULTS ─── */}
          <section className="py-16 border-b border-white/[0.08] space-y-8">
            <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-warm-muted block">
              04 / DOCUMENTED DELIVERABLES &amp; IMPACT
            </span>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-dark-surface border border-white/[0.06] space-y-1">
                <span className="text-3xl sm:text-4xl font-sans font-black text-warm-white">
                  1.1M+
                </span>
                <p className="font-mono text-[11px] uppercase tracking-wider text-warm-muted">
                  Total Views
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-dark-surface border border-white/[0.06] space-y-1">
                <span className="text-3xl sm:text-4xl font-sans font-black text-warm-white">
                  30K+
                </span>
                <p className="font-mono text-[11px] uppercase tracking-wider text-warm-muted">
                  Total Engagements
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-dark-surface border border-white/[0.06] space-y-1">
                <span className="text-3xl sm:text-4xl font-sans font-black text-warm-white">
                  323+
                </span>
                <p className="font-mono text-[11px] uppercase tracking-wider text-warm-muted">
                  New Followers
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-dark-surface border border-white/[0.06] space-y-1">
                <span className="text-3xl sm:text-4xl font-sans font-black text-warm-white">
                  28
                </span>
                <p className="font-mono text-[11px] uppercase tracking-wider text-warm-muted">
                  Creatives Published
                </p>
              </div>
            </div>
          </section>

          {/* ─── 05 / KEY TAKEAWAY ─── */}
          <section className="py-16 border-b border-white/[0.08] space-y-6">
            <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-warm-muted block">
              05 / CONCLUSION &amp; LEARNING
            </span>
            <div className="p-8 rounded-3xl bg-dark-surface border border-white/[0.08] space-y-4">
              <h3 className="text-xl font-sans font-bold text-warm-white">
                Low Barrier to Entry Multiplies Organic Velocity
              </h3>
              <p className="text-warm-gray text-base font-light leading-relaxed">
                When content asks audiences for simple, opinionated micro-actions (such as picking a score rather than answering a complex prompt), engagement barriers dissolve. The campaign demonstrated that community management combined with agile moment-marketing delivers measurable visibility even for traditional B2B/construction-aligned parent brands.
              </p>
            </div>
          </section>

          {/* ─── NEXT PROJECT NAVIGATION ─── */}
          <div className="py-16 flex flex-col sm:flex-row items-center justify-between gap-6 font-mono text-xs">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 uppercase tracking-[0.2em] text-warm-muted hover:text-warm-white transition-colors"
            >
              <FiArrowLeft />
              <span>All Work</span>
            </Link>

            <Link
              href="/work/bisleri"
              className="inline-flex items-center gap-2 uppercase tracking-[0.2em] text-warm-white hover:text-accent-blue transition-colors group"
            >
              <span>Next: Bisleri Winter Plan (Spec)</span>
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </article>
      </main>

      {/* Lightbox */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md p-4 flex items-center justify-center cursor-zoom-out"
          >
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/20 text-white min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Close"
            >
              <FiX size={20} />
            </button>
            <div
              className="relative max-w-5xl max-h-[85vh] w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={activeImage}
                alt="Enlarged creative preview"
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}
