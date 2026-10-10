"use client";

import React from "react";
import Link from "next/link";
import { FiArrowLeft, FiArrowRight, FiInfo } from "react-icons/fi";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import FrameworkLenses from "@/components/marketing-notebook/FrameworkLenses";
import TeardownsAccordion from "@/components/marketing-notebook/TeardownsAccordion";
import OriginalConcepts from "@/components/marketing-notebook/OriginalConcepts";
import TakeawaysSection from "@/components/marketing-notebook/TakeawaysSection";
import SourcePdfsSection from "@/components/marketing-notebook/SourcePdfsSection";
import { MARKETING_NOTEBOOK_DATA } from "@/data/marketing-notebook";

export default function MarketingNotebookPage() {
  const {
    header,
    framework,
    teardowns,
    originalConcepts,
    takeaways,
    workingNotes,
  } = MARKETING_NOTEBOOK_DATA;

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

          {/* Header */}
          <header className="border-b border-white/[0.08] pb-12 mb-16 space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-warm-muted">
                {header.classificationLabel}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-warm-muted">
                {header.seriesLabel}
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-sans font-black tracking-tight text-warm-white uppercase">
              {header.h1}
            </h1>

            <p className="text-lg sm:text-xl text-warm-gray font-light max-w-3xl leading-relaxed">
              {header.standfirst}
            </p>

            {/* Project Metadata Grid */}
            <div
              className={`grid gap-6 pt-6 border-t border-white/[0.06] font-mono text-xs ${
                header.metadata.timeline
                  ? "grid-cols-2 sm:grid-cols-4"
                  : "grid-cols-1 sm:grid-cols-3"
              }`}
            >
              <div>
                <span className="text-warm-muted uppercase tracking-wider block text-[10px] mb-1">
                  FOCUS
                </span>
                <span className="text-warm-white font-medium">
                  {header.metadata.focus}
                </span>
              </div>
              <div>
                <span className="text-warm-muted uppercase tracking-wider block text-[10px] mb-1">
                  SKILLS DEMONSTRATED
                </span>
                <span className="text-warm-white font-medium">
                  {header.metadata.skillsDemonstrated}
                </span>
              </div>
              <div>
                <span className="text-warm-muted uppercase tracking-wider block text-[10px] mb-1">
                  FORMATS
                </span>
                <span className="text-warm-white font-medium">
                  {header.metadata.formats}
                </span>
              </div>
              {/* Only render TIMELINE if non-null */}
              {header.metadata.timeline && (
                <div>
                  <span className="text-warm-muted uppercase tracking-wider block text-[10px] mb-1">
                    TIMELINE
                  </span>
                  <span className="text-warm-white font-medium">
                    {header.metadata.timeline}
                  </span>
                </div>
              )}
            </div>

            {/* Visible Note directly under header */}
            <div
              role="note"
              aria-label="Training exercises notice"
              className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-warm-muted flex items-start gap-3.5 shadow-sm"
            >
              <FiInfo size={18} className="shrink-0 mt-0.5 text-accent-blue" aria-hidden="true" />
              <p className="font-light leading-relaxed text-warm-gray">
                {header.visibleNote}
              </p>
            </div>
          </header>

          {/* ─── 01 / THE FRAMEWORK ─── */}
          <section
            className="py-16 border-b border-white/[0.08] space-y-8"
            aria-labelledby="framework-heading"
          >
            <div className="space-y-3">
              <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-warm-muted block">
                {framework.sectionNumber} / {framework.sectionTitle}
              </span>
              <h2
                id="framework-heading"
                className="text-2xl sm:text-3xl font-sans font-bold text-warm-white leading-tight"
              >
                {framework.h2}
              </h2>
              <p className="text-xs sm:text-sm text-warm-gray font-light max-w-2xl leading-relaxed">
                {framework.intro}
              </p>
            </div>

            <FrameworkLenses lenses={framework.lenses} />
          </section>

          {/* ─── 02 / THE TEARDOWNS ─── */}
          <section
            className="py-16 border-b border-white/[0.08] space-y-8"
            aria-labelledby="teardowns-heading"
          >
            <div className="space-y-3">
              <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-warm-muted block">
                {teardowns.sectionNumber} / {teardowns.sectionTitle}
              </span>
              <h2
                id="teardowns-heading"
                className="text-2xl sm:text-3xl font-sans font-bold text-warm-white leading-tight"
              >
                {teardowns.h2}
              </h2>
            </div>

            <TeardownsAccordion items={teardowns.items} note={teardowns.note} />
          </section>

          {/* ─── 03 / ORIGINAL CONCEPTS ─── */}
          <section
            className="py-16 border-b border-white/[0.08] space-y-8"
            aria-labelledby="concepts-heading"
          >
            <div className="space-y-3">
              <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-warm-muted block">
                {originalConcepts.sectionNumber} / {originalConcepts.sectionTitle}
              </span>
              <h2
                id="concepts-heading"
                className="text-2xl sm:text-3xl font-sans font-bold text-warm-white leading-tight"
              >
                {originalConcepts.h2}
              </h2>
              <p className="text-xs sm:text-sm text-warm-gray font-light max-w-2xl leading-relaxed">
                {originalConcepts.intro}
              </p>
            </div>

            <OriginalConcepts
              conceptA={originalConcepts.conceptA}
              conceptB={originalConcepts.conceptB}
              conceptC={originalConcepts.conceptC}
            />
          </section>

          {/* ─── 04 / WHAT I TOOK FROM THIS ─── */}
          <section
            className="py-16 border-b border-white/[0.08] space-y-8"
            aria-labelledby="takeaways-heading"
          >
            <div className="space-y-3">
              <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-warm-muted block">
                {takeaways.sectionNumber} / {takeaways.sectionTitle}
              </span>
              <h2
                id="takeaways-heading"
                className="text-2xl sm:text-3xl font-sans font-bold text-warm-white leading-tight"
              >
                {takeaways.h2}
              </h2>
            </div>

            <TakeawaysSection
              items={takeaways.items}
              closingLine={takeaways.closingLine}
              whereItShowsUp={takeaways.whereItShowsUp}
            />
          </section>

          {/* ─── 05 / WORKING NOTES ─── */}
          {workingNotes.showSourcePdfs && (
            <section
              className="py-16 border-b border-white/[0.08] space-y-8"
              aria-labelledby="notes-heading"
            >
              <div className="space-y-3">
                <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-warm-muted block">
                  {workingNotes.sectionNumber} / {workingNotes.sectionTitle}
                </span>
                <h2
                  id="notes-heading"
                  className="text-2xl sm:text-3xl font-sans font-bold text-warm-white leading-tight"
                >
                  {workingNotes.h2}
                </h2>
              </div>

              <SourcePdfsSection
                showSourcePdfs={workingNotes.showSourcePdfs}
                pdfs={workingNotes.pdfs}
              />
            </section>
          )}

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
              <span>Previous: Bisleri Winter Plan</span>
            </Link>

            <Link
              href="/work/zee-banglasonar"
              className="inline-flex items-center gap-2 uppercase tracking-[0.2em] text-warm-white hover:text-accent-blue transition-colors group"
            >
              <span>Next: Zee BanglaSonar Calendar</span>
              <FiArrowRight
                className="group-hover:translate-x-1 transition-transform"
                aria-hidden="true"
              />
            </Link>
          </nav>
        </article>
      </main>

      <Footer />
    </>
  );
}
