"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FiArrowLeft, FiArrowRight, FiCompass } from "react-icons/fi";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import ZeeContentCalendar from "@/components/zee-banglasonar/ZeeContentCalendar";
import ZeeAccountMetrics from "@/components/zee-banglasonar/ZeeAccountMetrics";
import ZeeGalleryLightbox from "@/components/zee-banglasonar/ZeeGalleryLightbox";
import { ZEE_BANGLASONAR_DATA } from "@/data/zee-banglasonar";

export default function ZeeBanglaSonarPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const {
    hero,
    strategicPremise,
    calendar,
    accountPerformance,
    gallery,
    strategicRecommendation,
  } = ZEE_BANGLASONAR_DATA;

  // Pillar styling helper
  const getPillarStyles = (name: string) => {
    switch (name) {
      case "Promotional":
        return {
          cardBg: "bg-[#e2ecff]/10 dark:bg-[#2f63e0]/10",
          border: "border-[#2f63e0]/30",
          badge: "bg-[#e2ecff] text-[#1b3f9e] dark:bg-[#2f63e0]/25 dark:text-[#93b5ff]",
          title: "text-[#1b3f9e] dark:text-[#93b5ff]",
          dot: "bg-[#2f63e0]",
        };
      case "Entertainment":
        return {
          cardBg: "bg-[#ffe0ec]/10 dark:bg-[#c2275f]/10",
          border: "border-[#c2275f]/30",
          badge: "bg-[#ffe0ec] text-[#8a1049] dark:bg-[#c2275f]/25 dark:text-[#ff8ab4]",
          title: "text-[#8a1049] dark:text-[#ff8ab4]",
          dot: "bg-[#c2275f]",
        };
      case "Nostalgia & culture":
        return {
          cardBg: "bg-[#fff0c2]/10 dark:bg-[#a56a00]/10",
          border: "border-[#a56a00]/30",
          badge: "bg-[#fff0c2] text-[#5e4100] dark:bg-[#a56a00]/25 dark:text-[#ffd566]",
          title: "text-[#5e4100] dark:text-[#ffd566]",
          dot: "bg-[#a56a00]",
        };
      case "Community":
        return {
          cardBg: "bg-[#d9f5e6]/10 dark:bg-[#17855a]/10",
          border: "border-[#17855a]/30",
          badge: "bg-[#d9f5e6] text-[#0b5b3d] dark:bg-[#17855a]/25 dark:text-[#79e2b1]",
          title: "text-[#0b5b3d] dark:text-[#79e2b1]",
          dot: "bg-[#17855a]",
        };
      default:
        return {
          cardBg: "bg-white/[0.04]",
          border: "border-white/[0.08]",
          badge: "bg-white/10 text-warm-white",
          title: "text-warm-white",
          dot: "bg-white/40",
        };
    }
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-32 pb-24 text-warm-white bg-dark-bg">
        <article className="max-w-6xl mx-auto px-5 sm:px-8">
          {/* Back link */}
          <div className="mb-10">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-warm-muted hover:text-warm-white transition-colors"
            >
              <FiArrowLeft aria-hidden="true" />
              <span>Back to Archive</span>
            </Link>
          </div>

          {/* ─── 01 / HERO + HONESTY NOTE ─── */}
          <header className="border-b border-white/[0.08] pb-12 mb-16 space-y-6">
            {/* Eyebrow & Badges */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-warm-muted">
                {hero.eyebrow}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-cyan-400 font-bold">
                16-POST EDITORIAL FRAMEWORK
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-sans font-black tracking-tight text-warm-white uppercase">
              {hero.title}
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-warm-gray font-light max-w-3xl leading-relaxed">
              {hero.subtitle}
            </p>

            {/* Stat Pills */}
            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              {hero.statPills.map((pill, i) => (
                <span
                  key={i}
                  className="px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.1] font-mono text-xs text-warm-white font-medium"
                >
                  {pill}
                </span>
              ))}
            </div>

            {/* Project Metadata Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-white/[0.06] font-mono text-xs">
              <div>
                <span className="text-warm-muted uppercase tracking-wider block text-[10px] mb-1">
                  BRAND FOCUS
                </span>
                <span className="text-warm-white font-medium">Zee BanglaSonar</span>
              </div>
              <div>
                <span className="text-warm-muted uppercase tracking-wider block text-[10px] mb-1">
                  TIMELINE
                </span>
                <span className="text-warm-white font-medium">July 2026 Calendar</span>
              </div>
              <div>
                <span className="text-warm-muted uppercase tracking-wider block text-[10px] mb-1">
                  CORE ASSETS
                </span>
                <span className="text-warm-white font-medium">9 Reels · 7 Statics / Carousels</span>
              </div>
              <div>
                <span className="text-warm-muted uppercase tracking-wider block text-[10px] mb-1">
                  AUDIENCE DIALECT
                </span>
                <span className="text-warm-white font-medium">Native Bengali Copy</span>
              </div>
            </div>
          </header>

          {/* ─── 02 / STRATEGIC PREMISE + FOUR CONTENT PILLARS ─── */}
          <section className="py-12 border-b border-white/[0.08] space-y-10" aria-labelledby="premise-heading">
            <div className="space-y-4">
              <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-warm-muted block">
                02 / STRATEGIC PREMISE &amp; OBJECTIVE
              </span>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-5">
                  <h2
                    id="premise-heading"
                    className="text-2xl sm:text-3xl font-sans font-bold text-warm-white leading-tight"
                  >
                    Extending Television Engagement into Social Storytelling
                  </h2>
                </div>
                <div className="md:col-span-7 space-y-4 text-warm-gray text-base leading-relaxed font-light">
                  <p>
                    {strategicPremise.objective}
                  </p>
                </div>
              </div>
            </div>

            {/* Four Pillar Cards */}
            <div className="space-y-4 pt-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-widest text-warm-muted font-bold">
                  THE FOUR CONTENT PILLARS
                </span>
                <span className="text-xs font-mono text-warm-muted">
                  4 Posts per pillar · 16 Total concepts
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 font-sans">
                {strategicPremise.pillars.map((pillar) => {
                  const style = getPillarStyles(pillar.name);

                  return (
                    <div
                      key={pillar.name}
                      className={`p-6 rounded-2xl border ${style.border} ${style.cardBg} space-y-4 flex flex-col justify-between shadow-md transition-all hover:scale-[1.01]`}
                    >
                      <div className="space-y-2.5">
                        <div className="flex items-center justify-between">
                          <span
                            className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold ${style.badge}`}
                          >
                            <span className={`w-1.5 h-1.5 rounded-full ${style.dot}`} aria-hidden="true" />
                            {pillar.name}
                          </span>
                          <span className="font-mono text-xs font-bold text-warm-muted">
                            {pillar.postCount} posts
                          </span>
                        </div>

                        <h3 className={`text-base font-bold ${style.title}`}>
                          {pillar.name}
                        </h3>

                        <p className="text-xs sm:text-sm text-warm-gray leading-relaxed font-light">
                          {pillar.description}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-white/[0.06] text-[11px] font-mono text-warm-muted flex items-center justify-between">
                        <span>Cadence: Weekly</span>
                        <span>Bi-daily cycle</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* ─── 03 / INTERACTIVE JULY 2026 CONTENT CALENDAR ─── */}
          <section className="py-16 border-b border-white/[0.08] space-y-6" aria-labelledby="calendar-section-heading">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-warm-muted block mb-2">
                  03 / EDITORIAL DELIVERABLE
                </span>
                <h2
                  id="calendar-section-heading"
                  className="text-2xl sm:text-3xl font-sans font-bold text-warm-white"
                >
                  Interactive Content Calendar
                </h2>
              </div>
              <span className="font-mono text-xs text-warm-muted">
                Inspect 16 concepts, formats, Bengali copy &amp; camera direction
              </span>
            </div>

            <div className="mt-6">
              <ZeeContentCalendar entries={calendar} pillars={strategicPremise.pillars} />
            </div>
          </section>

          {/* ─── 04 / ACCOUNT PERFORMANCE METRICS (JULY 2026) ─── */}
          <ZeeAccountMetrics
            data={accountPerformance}
            recapPanels={gallery.recapPanels}
            onOpenLightbox={(idx) => setLightboxIndex(idx)}
          />

          {/* ─── 05 / INSTAGRAM INSIGHTS SCREENSHOTS GALLERY ─── */}
          <ZeeGalleryLightbox
            recapPanels={gallery.recapPanels}
            extendedPanels={gallery.extendedPanels}
            independentAnalysisNote={gallery.independentAnalysisNote}
            lightboxIndex={lightboxIndex}
            onCloseLightbox={() => setLightboxIndex(null)}
            onOpenLightbox={(idx) => setLightboxIndex(idx)}
          />

          {/* ─── 06 / STRATEGIC RECOMMENDATION ─── */}
          <section className="py-16 border-b border-white/[0.08] space-y-6" aria-labelledby="rec-heading">
            <div className="space-y-2">
              <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-warm-muted block">
                06 / RETROSPECTIVE CONCLUSION
              </span>
              <h2
                id="rec-heading"
                className="text-2xl sm:text-3xl font-sans font-bold text-warm-white"
              >
                Strategic Recommendation
              </h2>
            </div>

            <div className="p-7 sm:p-8 rounded-3xl bg-dark-surface border border-white/[0.08] relative overflow-hidden shadow-xl">
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-blue-500 to-indigo-600" />
              <div className="space-y-4 max-w-4xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] font-mono text-xs text-blue-300">
                  <FiCompass className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Execution &amp; Verification Principle</span>
                </div>
                <blockquote className="text-base sm:text-lg md:text-xl font-light text-warm-white leading-relaxed italic">
                  &ldquo;{strategicRecommendation.quote}&rdquo;
                </blockquote>
                <div className="pt-2 text-xs font-mono text-warm-muted">
                  Case Study Author Note · Editorial Review
                </div>
              </div>
            </div>
          </section>

          {/* ─── NEXT / PREVIOUS NAVIGATION ─── */}
          <nav
            aria-label="Case study navigation"
            className="py-16 flex flex-col sm:flex-row items-center justify-between gap-6 font-mono text-xs"
          >
            <Link
              href="/work/bisleri"
              className="inline-flex items-center gap-2 uppercase tracking-[0.2em] text-warm-muted hover:text-warm-white transition-colors"
            >
              <FiArrowLeft aria-hidden="true" />
              <span>Previous: Bisleri Winter Campaign</span>
            </Link>

            <Link
              href="/work/fifa"
              className="inline-flex items-center gap-2 uppercase tracking-[0.2em] text-warm-white hover:text-accent-blue transition-colors group"
            >
              <span>Next: Walplast FIFA Campaign</span>
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
          </nav>
        </article>
      </main>

      <Footer />
    </>
  );
}
