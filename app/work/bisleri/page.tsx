"use client";

import React from "react";
import Link from "next/link";
import { FiArrowLeft, FiArrowRight, FiInfo } from "react-icons/fi";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import ContentCalendarSection from "@/components/ContentCalendarSection";

export default function BisleriSpecPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-32 pb-24 text-warm-white">
        <article className="max-w-6xl mx-auto px-6 sm:px-8">
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

          {/* Spec Project Notice Banner */}
          <div className="mb-8 p-4 sm:p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono text-xs flex items-start gap-3">
            <FiInfo size={18} className="shrink-0 mt-0.5 text-amber-400" />
            <div className="space-y-1">
              <span className="font-bold tracking-wider uppercase block">
                CLASSIFICATION: SPECULATIVE / PERSONAL PROJECT
              </span>
              <p className="text-amber-200/80 font-light leading-relaxed">
                This project is an independent creative exercise developed to demonstrate strategic campaign architecture, content pillar formulation, visual direction, and 31 days of continuous reel &amp; social copywriting for a national FMCG brand. It is not an official client engagement with Bisleri International.
              </p>
            </div>
          </div>

          {/* Header */}
          <header className="border-b border-white/[0.08] pb-12 mb-16 space-y-6">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-warm-muted">
                SPEC PROJECT 02
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-warm-muted">
                31-DAY CONTENT STRATEGY
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-sans font-black tracking-tight text-warm-white uppercase">
              Bisleri Winter Campaign Strategy
            </h1>

            <p className="text-lg sm:text-xl text-warm-gray font-light max-w-3xl leading-relaxed">
              Addressing the seasonal winter dip in packaged water consumption by reframing hydration as an essential winter immunity and skin-health ritual.
            </p>

            {/* Project Metadata Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-white/[0.06] font-mono text-xs">
              <div>
                <span className="text-warm-muted uppercase tracking-wider block text-[10px] mb-1">
                  BRAND FOCUS
                </span>
                <span className="text-warm-white font-medium">Bisleri (Packaged Water)</span>
              </div>
              <div>
                <span className="text-warm-muted uppercase tracking-wider block text-[10px] mb-1">
                  TIMELINE
                </span>
                <span className="text-warm-white font-medium">31-Day Winter Calendar</span>
              </div>
              <div>
                <span className="text-warm-muted uppercase tracking-wider block text-[10px] mb-1">
                  SKILLS DEMONSTRATED
                </span>
                <span className="text-warm-white font-medium">Scriptwriting · Visual Hooks</span>
              </div>
              <div>
                <span className="text-warm-muted uppercase tracking-wider block text-[10px] mb-1">
                  FORMATS
                </span>
                <span className="text-warm-white font-medium">Short-form Reels · Carousels</span>
              </div>
            </div>
          </header>

          {/* ─── 01 / THE CHALLENGE & HYPOTHESIS ─── */}
          <section className="py-12 border-b border-white/[0.08] space-y-6">
            <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-warm-muted block">
              01 / STRATEGIC PREMISE
            </span>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-5">
                <h2 className="text-2xl font-sans font-bold text-warm-white leading-tight">
                  The Winter Hydration Paradox
                </h2>
              </div>
              <div className="md:col-span-7 space-y-4 text-warm-gray text-base leading-relaxed font-light">
                <p>
                  In summer, water consumption is driven by acute physiological thirst. In colder months, the body&apos;s thirst response drops by up to 40%, leading to unconscious dehydration, lethargy, and dry skin.
                </p>
                <p>
                  The strategic challenge: Transform packaged water from a reactive thirst-quencher into a deliberate daily winter self-care habit.
                </p>
              </div>
            </div>
          </section>

          {/* ─── 02 / THE FOUR CONTENT PILLARS ─── */}
          <section className="py-16 border-b border-white/[0.08] space-y-8">
            <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-warm-muted block">
              02 / THE 4 CONTENT PILLARS
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-mono text-xs">
              <div className="p-6 rounded-2xl bg-dark-surface border border-white/[0.06] space-y-3">
                <span className="text-blue-400 font-bold block text-sm">01 / Branding</span>
                <p className="text-warm-gray leading-relaxed font-light">
                  Establishing purity as constant, regardless of the season. Atmospheric, visual-heavy winter aesthetic.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-dark-surface border border-white/[0.06] space-y-3">
                <span className="text-emerald-400 font-bold block text-sm">02 / Promotional</span>
                <p className="text-warm-gray leading-relaxed font-light">
                  Capitalizing on holiday parties, December travel, and wedding season hydration packs for group gatherings.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-dark-surface border border-white/[0.06] space-y-3">
                <span className="text-purple-400 font-bold block text-sm">03 / Social Event</span>
                <p className="text-warm-gray leading-relaxed font-light">
                  Relatable cultural moments, holiday countdowns, Gen-Z cold weather memes, and festive warmth.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-dark-surface border border-white/[0.06] space-y-3">
                <span className="text-amber-400 font-bold block text-sm">04 / Informational</span>
                <p className="text-warm-gray leading-relaxed font-light">
                  Science-backed winter health facts: combating indoor dry air, skin glow, and calculating winter water needs.
                </p>
              </div>
            </div>
          </section>

          {/* ─── 03 / INTERACTIVE 31-DAY SCRIPT EXPLORER ─── */}
          <section className="py-16 border-b border-white/[0.08] space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-warm-muted block mb-2">
                  03 / INTERACTIVE DELIVERABLE
                </span>
                <h2 className="text-2xl sm:text-3xl font-sans font-bold text-warm-white">
                  31-Day Script &amp; Plot Explorer
                </h2>
              </div>
              <span className="font-mono text-xs text-warm-muted">
                Inspect camera direction, copywriting &amp; visual hooks
              </span>
            </div>

            <div className="mt-8 rounded-3xl bg-dark-surface border border-white/[0.08] overflow-hidden">
              <ContentCalendarSection embedded={true} />
            </div>
          </section>

          {/* ─── NEXT NAVIGATION ─── */}
          <div className="py-16 flex flex-col sm:flex-row items-center justify-between gap-6 font-mono text-xs">
            <Link
              href="/work/fifa"
              className="inline-flex items-center gap-2 uppercase tracking-[0.2em] text-warm-muted hover:text-warm-white transition-colors"
            >
              <FiArrowLeft />
              <span>Previous: Walplast FIFA Campaign</span>
            </Link>

            <Link
              href="/creative"
              className="inline-flex items-center gap-2 uppercase tracking-[0.2em] text-warm-white hover:text-accent-blue transition-colors group"
            >
              <span>Explore Creative Gallery</span>
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
