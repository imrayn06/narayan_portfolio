"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FiArrowLeft, FiArrowRight, FiInstagram, FiMessageCircle } from "react-icons/fi";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import ShimontiniCalendarSection from "@/components/ShimontiniCalendarSection";

export default function ShimontiniCaseStudyPage() {
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

          {/* Header */}
          <header className="border-b border-white/[0.08] pb-12 mb-16 space-y-6">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-warm-muted">
                FEATURED SPEC STRATEGY
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-warm-muted">
                43-REEL FESTIVE CALENDAR
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-sans font-black tracking-tight text-warm-white uppercase">
              Shimontini Festive Reels Strategy
            </h1>

            <p className="text-lg sm:text-xl text-warm-gray font-light max-w-3xl leading-relaxed">
              Keeping a boutique saree brand that books via DMs and WhatsApp visible and bookable across the entire festive curve — from Durga Puja through Diwali, Kali Puja, Bhai Phota, and winter wedding season.
            </p>

            {/* Project Metadata Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-white/[0.06] font-mono text-xs">
              <div>
                <span className="text-warm-muted uppercase tracking-wider block text-[10px] mb-1">
                  BRAND FOCUS
                </span>
                <span className="text-warm-white font-medium">Shimontini FashionStudio</span>
              </div>
              <div>
                <span className="text-warm-muted uppercase tracking-wider block text-[10px] mb-1">
                  TIMELINE
                </span>
                <span className="text-warm-white font-medium">Oct–Nov 2026 (43 Reels)</span>
              </div>
              <div>
                <span className="text-warm-muted uppercase tracking-wider block text-[10px] mb-1">
                  SKILLS DEMONSTRATED
                </span>
                <span className="text-warm-white font-medium">Visual Hooks · Scriptwriting</span>
              </div>
              <div>
                <span className="text-warm-muted uppercase tracking-wider block text-[10px] mb-1">
                  FORMATS
                </span>
                <span className="text-warm-white font-medium">Short-form Reels (Meta)</span>
              </div>
            </div>
          </header>

          {/* Campaign Cover Hero Banner */}
          <div className="mb-16 rounded-3xl overflow-hidden border border-white/[0.08] relative aspect-[16/9] w-full bg-[#1b0d17] shadow-2xl">
            <Image
              src="/portfolio/shimontini-cover.jpg"
              alt="Shimontini Festive Saree Collection - 43-Reel Content Strategy"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 sm:p-10">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-rose-300 font-semibold mb-2">
                Boutique DM Sales Funnel
              </span>
              <h2 className="text-2xl sm:text-4xl font-sans font-bold text-warm-white">
                Festive Saree Content Engine · 43 Short-Form Scripts
              </h2>
            </div>
          </div>

          {/* ─── 01 / THE STRATEGIC PREMISE ─── */}
          <section className="py-12 border-b border-white/[0.08] space-y-6">
            <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-warm-muted block">
              01 / STRATEGIC PREMISE
            </span>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-5">
                <h2 className="text-2xl sm:text-3xl font-sans font-bold text-warm-white leading-tight">
                  One Peak Is Not Enough
                </h2>
              </div>
              <div className="md:col-span-7 space-y-4 text-warm-gray text-base leading-relaxed font-light">
                <p>
                  Durga Puja is the loudest buying moment for any Bengali saree label, but engagement typically collapses immediately after Bijoya Dashami.
                </p>
                <p>
                  Because Shimontini sells directly through Instagram DMs and WhatsApp conversations, every reel must fulfill a clear objective: either build emotional brand affinity or direct the viewer into the inbox with low friction.
                </p>
                <p>
                  The strategic challenge: bridge audience momentum from Durga Puja into Kojagari Lakshmi Puja, Diwali, Kali Puja, Bhai Phota, and winter wedding season — keeping the collection active and bookable without audience fatigue.
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
              <div className="p-6 rounded-2xl bg-dark-surface border border-amber-500/20 space-y-3">
                <span className="text-amber-400 font-bold block text-sm">01 / Branding (10 Reels)</span>
                <p className="text-warm-gray leading-relaxed font-light">
                  Mood-first greetings, Sodepur studio stories, packaging ASMR, and macro fabric close-ups that anchor premium boutique positioning.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-dark-surface border border-rose-500/20 space-y-3">
                <span className="text-rose-400 font-bold block text-sm">02 / Promotional (12 Reels)</span>
                <p className="text-warm-gray leading-relaxed font-light">
                  Season trailers, 2:30 PM live-drop countdown teasers, shipping deadline reminders, and frictionless order walkthroughs sending viewers to DMs.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-dark-surface border border-teal-500/20 space-y-3">
                <span className="text-teal-400 font-bold block text-sm">03 / Social Event (11 Reels)</span>
                <p className="text-warm-gray leading-relaxed font-light">
                  Looks timed to Shashthi, Saptami, Ashtami Anjali, Navami night party, Kali Puja, and Bhai Phota gifting, plus relatable pandal-hopping tests.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-dark-surface border border-purple-500/20 space-y-3">
                <span className="text-purple-400 font-bold block text-sm">04 / Informational (10 Reels)</span>
                <p className="text-warm-gray leading-relaxed font-light">
                  Real Jamdani authenticity checklists, 30-second pre-pleating hacks, fabric comparisons (Tissue vs Organza), and post-Pujo zari storage care.
                </p>
              </div>
            </div>
          </section>

          {/* ─── 03 / INTERACTIVE 43-REEL EXPLORER ─── */}
          <section className="py-16 border-b border-white/[0.08] space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-warm-muted block mb-2">
                  03 / INTERACTIVE DELIVERABLE
                </span>
                <h2 className="text-2xl sm:text-3xl font-sans font-bold text-warm-white">
                  43-Reel Script &amp; Plot Explorer
                </h2>
              </div>
              <span className="font-mono text-xs text-warm-muted">
                Camera directions, visual hooks, copy &amp; monthly calendar view
              </span>
            </div>

            <div className="mt-8 rounded-3xl bg-dark-surface border border-white/[0.08] overflow-hidden">
              <ShimontiniCalendarSection embedded={true} />
            </div>
          </section>

          {/* ─── NEXT NAVIGATION ─── */}
          <div className="py-16 flex flex-col sm:flex-row items-center justify-between gap-6 font-mono text-xs">
            <Link
              href="/work/bisleri"
              className="inline-flex items-center gap-2 uppercase tracking-[0.2em] text-warm-muted hover:text-warm-white transition-colors"
            >
              <FiArrowLeft />
              <span>Next Spec: Bisleri Winter Strategy</span>
            </Link>

            <Link
              href="/work"
              className="inline-flex items-center gap-2 uppercase tracking-[0.2em] text-warm-white hover:text-accent-blue transition-colors group"
            >
              <span>Explore All Projects</span>
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
