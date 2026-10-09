"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiArrowRight, FiDownload } from "react-icons/fi";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { RobotMascot } from "@/components/RobotMascot";

const selectedWorks = [
  {
    num: "01",
    client: "Walplast",
    project: "FIFA 2026 Knockout Campaign",
    contribution: "Campaign Planning · Content Strategy · Community Support",
    type: "COMMUNITY ENGAGEMENT CAMPAIGN",
    image: "/Brand_Logo/Walplast_Fifa_Campaign.png",
    aspect: "aspect-[16/9]",
    stat: "1.1M+ Views · 30K+ Engagements",
    href: "/work/fifa",
    isCaseStudy: true,
  },
  {
    num: "02",
    client: "MSP Steel",
    project: "B2B Social Media Support",
    contribution: "Social Media Handling · Scheduling · Consistency",
    type: "B2B BRAND EXECUTION",
    image: "/Brand_Logo/msp.png.png",
    aspect: "aspect-[16/10]",
    stat: "Multi-Platform Presence",
    href: "/work",
    isCaseStudy: false,
  },
  {
    num: "03",
    client: "Bisleri (Spec)",
    project: "Winter Hydration Content Plan",
    contribution: "31-Day Content Strategy · Visual Scripts · Copywriting",
    type: "SPEC / PERSONAL PROJECT",
    image: "/portfolio/bisleri-ad-creative.jpg",
    aspect: "aspect-[16/9]",
    stat: "31 Editorial Plots & Scripts",
    href: "/work/bisleri",
    isCaseStudy: true,
  },
  {
    num: "04",
    client: "Core Fit",
    project: "High-Impact Social Creative",
    contribution: "Visual Concept · Copywriting · Creative Direction",
    type: "VISUAL & COPYWRITING",
    image: "/portfolio/fitness-brand-be-fit.jpg",
    aspect: "aspect-square",
    stat: "Featured Creative Asset",
    href: "/creative",
    isCaseStudy: false,
  },
];

const certificationsSummary = [
  { name: "Social Media Marketing II", org: "HubSpot Academy" },
  { name: "Inbound Marketing Certified", org: "HubSpot Academy" },
  { name: "Digital Marketing Certified", org: "HubSpot Academy" },
  { name: "Digital Marketing Graduate", org: "KDMI" },
];

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-32 pb-24 text-warm-white">
        {/* ─── 01 / HERO SECTION ─── */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 pt-6 pb-20 md:py-24 border-b border-white/[0.06]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            {/* Main Headline & Intro */}
            <div className="lg:col-span-8 space-y-8">
              {/* Meta Label */}
              <div className="flex items-center gap-3">
                <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-warm-muted">
                  00 / SELECTED PORTFOLIO
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
                <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-warm-muted">
                  2026 EDITION
                </span>
              </div>

              {/* Title & Roles */}
              <div className="space-y-4">
                <motion.h1
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-4xl sm:text-6xl md:text-7xl font-sans font-black tracking-tight text-warm-white uppercase"
                >
                  SHENEHASHIS DUTTA
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="font-mono text-sm sm:text-base md:text-lg tracking-[0.12em] uppercase text-warm-gray"
                >
                  DIGITAL MARKETING · SOCIAL MEDIA · CONTENT
                </motion.p>
              </div>

              {/* Supporting Statement */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg md:text-xl text-warm-gray leading-relaxed max-w-2xl font-light"
              >
                Former Software Engineer transitioning into digital marketing, with
                hands-on experience supporting social media, content planning, SEO research,
                and campaign execution.
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="pt-4 flex flex-wrap items-center gap-4"
              >
                <Link
                  href="/work"
                  className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full btn-primary font-mono text-xs uppercase tracking-[0.2em] font-semibold transition-all shadow-md"
                >
                  <span>View Work</span>
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/resume"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full border border-dark-borderSubtle hover:border-dark-border hover:bg-dark-surface2 text-warm-white font-mono text-xs uppercase tracking-[0.2em] transition-all"
                >
                  <FiDownload size={14} className="text-warm-gray" />
                  <span>Resume</span>
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-3.5 text-warm-gray hover:text-warm-white font-mono text-xs uppercase tracking-[0.18em] transition-colors"
                >
                  <span>Contact</span>
                  <FiArrowUpRight />
                </Link>
              </motion.div>
            </div>

            {/* Aside / Status & Subtle Mascot */}
            <div className="lg:col-span-4 lg:pl-8 flex flex-col justify-between h-full space-y-8 pt-4 lg:pt-0">
              <div className="p-6 rounded-2xl bg-dark-surface border border-white/[0.06] space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-warm-muted">
                    STATUS
                  </span>
                  <RobotMascot variant="hero" size={40} />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <p className="font-mono text-xs uppercase tracking-[0.15em] text-warm-white font-semibold">
                      Open to Opportunities
                    </p>
                  </div>
                  <p className="text-xs text-warm-gray leading-relaxed">
                    Entry-level digital marketing, content coordinator, and social media specialist roles.
                  </p>
                </div>
                <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-warm-muted">
                  <span>LOCATION</span>
                  <span className="text-warm-gray">Kolkata, India</span>
                </div>
              </div>

              {/* Headshot Thumbnail */}
              <div className="relative group overflow-hidden rounded-2xl border border-white/[0.08] bg-dark-surface max-w-[260px]">
                <Image
                  src="/og-image.png"
                  alt="Shenehashis Dutta"
                  width={260}
                  height={260}
                  priority
                  className="w-full aspect-square object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black via-black/80 to-transparent flex items-center justify-between font-mono text-[10px] uppercase tracking-wider text-warm-gray">
                  <span>Shenehashis Dutta</span>
                  <span className="text-warm-muted">Ex-SDE</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 02 / SELECTED WORK PREVIEWS ─── */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 py-20 md:py-28 border-b border-white/[0.06]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4">
            <div>
              <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-warm-muted block mb-2">
                01 / CURATED ARCHIVE
              </span>
              <h2 className="text-3xl sm:text-5xl font-sans font-bold tracking-tight text-warm-white uppercase">
                Selected Work
              </h2>
            </div>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.2em] uppercase text-warm-gray hover:text-warm-white transition-colors group"
            >
              <span>Explore All Projects (6)</span>
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="space-y-16">
            {selectedWorks.map((work, idx) => (
              <motion.article
                key={work.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative border-t border-white/[0.08] pt-10"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column: Number & Metadata */}
                  <div className="lg:col-span-5 space-y-4">
                    <div className="flex items-center gap-3 font-mono text-xs tracking-[0.2em] text-warm-muted uppercase">
                      <span>{work.num}</span>
                      <span>/</span>
                      <span className="text-warm-gray">{work.client}</span>
                      {work.type.includes("SPEC") && (
                        <span className="px-2 py-0.5 rounded text-[9px] bg-white/[0.08] text-warm-white font-bold">
                          SPEC
                        </span>
                      )}
                    </div>

                    <Link href={work.href} className="block group/title">
                      <h3 className="text-2xl sm:text-4xl font-sans font-bold text-warm-white group-hover/title:text-accent-blue transition-colors">
                        {work.project}
                      </h3>
                    </Link>

                    <div className="space-y-2 pt-2 text-xs font-mono text-warm-gray">
                      <p>
                        <span className="text-warm-muted uppercase tracking-wider block mb-0.5">
                          Contribution:
                        </span>
                        {work.contribution}
                      </p>
                      <p>
                        <span className="text-warm-muted uppercase tracking-wider block mb-0.5">
                          Highlight:
                        </span>
                        {work.stat}
                      </p>
                    </div>

                    <div className="pt-4">
                      <Link
                        href={work.href}
                        className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-warm-white group-hover:underline underline-offset-8"
                      >
                        <span>{work.isCaseStudy ? "View Case Study" : "View Work"}</span>
                        <FiArrowUpRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Editorial Large Visual */}
                  <div className="lg:col-span-7">
                    <Link href={work.href} className="block group/img overflow-hidden rounded-2xl border border-white/[0.08] bg-dark-surface relative">
                      <div className={`relative w-full ${work.aspect} overflow-hidden`}>
                        <Image
                          src={work.image}
                          alt={work.project}
                          fill
                          className="object-contain p-4 md:p-8 transition-transform duration-700 ease-out group-hover/img:scale-105"
                          sizes="(max-width: 1024px) 100vw, 60vw"
                        />
                        {/* Subtle dark gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover/img:opacity-10 transition-opacity" />
                      </div>
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* ─── 03 / BEFORE MARKETING: THE SOFTWARE FOUNDATION ─── */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 py-20 md:py-28 border-b border-white/[0.06]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4 space-y-3">
              <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-warm-muted block">
                02 / BACKGROUND
              </span>
              <h2 className="text-2xl sm:text-4xl font-sans font-bold text-warm-white uppercase">
                The Analytical Edge
              </h2>
              <p className="font-mono text-xs uppercase tracking-[0.15em] text-warm-gray">
                Software Engineering &amp; QA Rigor
              </p>
            </div>

            <div className="lg:col-span-8 space-y-8 text-warm-gray leading-relaxed text-base sm:text-lg font-light">
              <p>
                Before transitioning into digital marketing, I spent three years working as a
                <strong className="text-warm-white font-medium"> Software Engineer at Q3 Technologies</strong> and a
                <strong className="text-warm-white font-medium"> Test Engineer at Wipro</strong>.
              </p>
              <p>
                That technical background instilled structured problem-solving, quality assurance discipline,
                and comfort with complex software platforms. In marketing, it translates to:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2 font-mono text-xs">
                <div className="p-5 rounded-xl bg-dark-surface border border-white/[0.06] space-y-2">
                  <span className="text-warm-white font-bold block">01 / Process Rigor</span>
                  <p className="text-warm-muted text-[11px] leading-relaxed">
                    Treating content calendars and campaign rollouts with the same QA precision as software releases.
                  </p>
                </div>
                <div className="p-5 rounded-xl bg-dark-surface border border-white/[0.06] space-y-2">
                  <span className="text-warm-white font-bold block">02 / Technical SEO</span>
                  <p className="text-warm-muted text-[11px] leading-relaxed">
                    Understanding DOM structures, crawler mechanics, and search indexing at the code level.
                  </p>
                </div>
                <div className="p-5 rounded-xl bg-dark-surface border border-white/[0.06] space-y-2">
                  <span className="text-warm-white font-bold block">03 / Tool Fluency</span>
                  <p className="text-warm-muted text-[11px] leading-relaxed">
                    Fast adoption of marketing automation, analytics dashboards, Meta Business Suite, and generative tools.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-warm-white hover:text-accent-blue transition-colors"
                >
                  <span>Read the career transition story</span>
                  <FiArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 04 / CERTIFICATIONS STRIP ─── */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 py-16 md:py-20 border-b border-white/[0.06]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-warm-muted">
              03 / VERIFIED CERTIFICATIONS
            </span>
            <Link
              href="/experience"
              className="font-mono text-xs uppercase tracking-[0.18em] text-warm-gray hover:text-warm-white transition-colors"
            >
              View Full Credentials →
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {certificationsSummary.map((cert, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-dark-surface border border-white/[0.06] flex flex-col justify-between min-h-[90px]"
              >
                <span className="text-xs font-semibold text-warm-white">{cert.name}</span>
                <span className="font-mono text-[10px] text-warm-muted uppercase tracking-wider">
                  {cert.org}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ─── 05 / CLOSING INVITATION ─── */}
        <section className="max-w-7xl mx-auto px-6 sm:px-8 py-20 md:py-28 text-center space-y-6">
          <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-warm-muted block">
            NEXT STEPS
          </span>
          <h2 className="text-3xl sm:text-5xl font-sans font-bold text-warm-white uppercase max-w-2xl mx-auto leading-tight">
            Explore the creative work or review the resume
          </h2>
          <p className="text-warm-gray max-w-md mx-auto text-sm sm:text-base">
            Detailed project breakdowns, social creatives, short-form concepts, and career history.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link
              href="/work"
              className="px-6 py-3 rounded-full btn-primary font-mono text-xs uppercase tracking-[0.2em] font-semibold transition-all"
            >
              Browse Work
            </Link>
            <Link
              href="/resume"
              className="px-6 py-3 rounded-full border border-dark-borderSubtle text-warm-white font-mono text-xs uppercase tracking-[0.2em] hover:bg-dark-surface2 transition-all"
            >
              Resume
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full text-warm-gray hover:text-warm-white font-mono text-xs uppercase tracking-[0.2em] transition-all"
            >
              Contact
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}