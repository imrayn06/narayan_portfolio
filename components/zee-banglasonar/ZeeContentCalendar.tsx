"use client";

import React, { useState, useMemo, useEffect, useRef } from "react";
import {
  FiCalendar,
  FiList,
  FiSearch,
  FiCopy,
  FiCheck,
  FiVideo,
  FiLayers,
  FiImage,
  FiFilter,
  FiX,
  FiArrowRight,
} from "react-icons/fi";
import {
  CalendarEntry,
  ContentPillar,
  ContentFormat,
  PillarMeta,
} from "@/data/zee-banglasonar";

interface ZeeContentCalendarProps {
  entries: CalendarEntry[];
  pillars: PillarMeta[];
}

// Days of week for grid starting Monday
const DOW = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

// July 2026 starts on Wednesday: 0 = Mon, 1 = Tue, 2 = Wed -> offset is 2
const FIRST_DAY_OFFSET = 2;
const DAYS_IN_JULY = 31;

export default function ZeeContentCalendar({
  entries,
  pillars,
}: ZeeContentCalendarProps) {
  const [view, setView] = useState<"list" | "calendar">("list");
  const [selectedPillar, setSelectedPillar] = useState<ContentPillar | null>(
    null
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedDate, setCopiedDate] = useState<string | null>(null);
  const [highlightedDate, setHighlightedDate] = useState<string | null>(null);
  const postRefs = useRef<Record<string, HTMLElement | null>>({});

  // Pillar styling lookup
  const pillarStyles = useMemo(() => {
    const map = new Map<ContentPillar, PillarMeta["colors"]>();
    pillars.forEach((p) => map.set(p.name, p.colors));
    return map;
  }, [pillars]);

  // Filter posts
  const filteredEntries = useMemo(() => {
    return entries.filter((entry) => {
      if (selectedPillar && entry.pillar !== selectedPillar) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.trim().toLowerCase();
        const searchable = [
          entry.title,
          entry.direction,
          entry.captionEn,
          entry.captionBn,
          entry.format,
          entry.pillar,
          entry.date,
        ]
          .join(" ")
          .toLowerCase();
        if (!searchable.includes(q)) return false;
      }
      return true;
    });
  }, [entries, selectedPillar, searchQuery]);

  // Copy caption: copies "captionEn (captionBn)"
  const handleCopyCaption = (entry: CalendarEntry) => {
    const copyText = `${entry.captionEn} (${entry.captionBn})`;
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(copyText).catch(() => {});
    }
    setCopiedDate(entry.date);
    setTimeout(() => {
      setCopiedDate(null);
    }, 2000);
  };

  // Jump from monthly grid to list view
  const handleSelectDay = (entryDate: string) => {
    setView("list");
    setSelectedPillar(null);
    setSearchQuery("");
    setHighlightedDate(entryDate);

    setTimeout(() => {
      const el = postRefs.current[entryDate];
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        el.focus?.();
      }
    }, 120);

    setTimeout(() => {
      setHighlightedDate(null);
    }, 3000);
  };

  // Format icon helper
  const getFormatIcon = (format: ContentFormat) => {
    if (format === "Reel") {
      return <FiVideo className="w-3.5 h-3.5 shrink-0 text-pink-400" aria-hidden="true" />;
    }
    if (format.includes("carousel") || format === "Carousel") {
      return <FiLayers className="w-3.5 h-3.5 shrink-0 text-cyan-400" aria-hidden="true" />;
    }
    return <FiImage className="w-3.5 h-3.5 shrink-0 text-amber-400" aria-hidden="true" />;
  };

  // Custom badge styling per pillar
  const getPillarBadgeClasses = (pillar: ContentPillar) => {
    switch (pillar) {
      case "Promotional":
        return "bg-[#e2ecff] text-[#1b3f9e] border-[#2f63e0]/40 dark:bg-[#2f63e0]/20 dark:text-[#93b5ff] dark:border-[#2f63e0]/50";
      case "Entertainment":
        return "bg-[#ffe0ec] text-[#8a1049] border-[#c2275f]/40 dark:bg-[#c2275f]/20 dark:text-[#ff8ab4] dark:border-[#c2275f]/50";
      case "Nostalgia & culture":
        return "bg-[#fff0c2] text-[#5e4100] border-[#a56a00]/40 dark:bg-[#a56a00]/25 dark:text-[#ffd566] dark:border-[#a56a00]/50";
      case "Community":
        return "bg-[#d9f5e6] text-[#0b5b3d] border-[#17855a]/40 dark:bg-[#17855a]/20 dark:text-[#79e2b1] dark:border-[#17855a]/50";
    }
  };

  const getPillarDotColor = (pillar: ContentPillar) => {
    switch (pillar) {
      case "Promotional":
        return "bg-[#2f63e0]";
      case "Entertainment":
        return "bg-[#c2275f]";
      case "Nostalgia & culture":
        return "bg-[#a56a00]";
      case "Community":
        return "bg-[#17855a]";
    }
  };

  const getPillarBorderLeftColor = (pillar: ContentPillar) => {
    switch (pillar) {
      case "Promotional":
        return "border-l-[#2f63e0]";
      case "Entertainment":
        return "border-l-[#c2275f]";
      case "Nostalgia & culture":
        return "border-l-[#a56a00]";
      case "Community":
        return "border-l-[#17855a]";
    }
  };

  return (
    <div
      id="content-calendar"
      className="rounded-3xl border border-white/[0.08] bg-dark-surface overflow-hidden shadow-2xl transition-colors"
    >
      {/* Calendar Header Bar */}
      <div className="p-5 sm:p-7 md:p-8 bg-gradient-to-r from-[#1b2559] via-[#1c357d] to-[#144766] text-white flex flex-col md:flex-row md:items-center justify-between gap-5 border-b border-white/[0.08]">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <span className="text-[11px] uppercase tracking-[0.2em] font-mono font-bold text-blue-200">
              Interactive July 2026 Grid
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="text-[11px] font-mono text-emerald-200">16 Concepts</span>
          </div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-white">
            July 2026 Content Calendar
          </h3>
          <p className="text-xs sm:text-sm text-blue-100/85 max-w-xl font-light">
            Bi-daily editorial framework combining serial drama, regional cinema nostalgia, audience polls, and tune-in schedules.
          </p>
        </div>

        {/* View Switcher: List vs Monthly Grid */}
        <div
          role="group"
          aria-label="Calendar view selector"
          className="inline-flex items-center self-start md:self-center bg-black/40 p-1.5 rounded-2xl border border-white/15 shrink-0"
        >
          <button
            type="button"
            id="view-list-toggle"
            aria-pressed={view === "list"}
            onClick={() => setView("list")}
            className={`min-h-[44px] px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 ${
              view === "list"
                ? "bg-white text-slate-950 shadow-lg"
                : "text-white/80 hover:text-white hover:bg-white/10"
            }`}
          >
            <FiList className="w-4 h-4" aria-hidden="true" />
            <span>List View</span>
          </button>
          <button
            type="button"
            id="view-grid-toggle"
            aria-pressed={view === "calendar"}
            onClick={() => setView("calendar")}
            className={`min-h-[44px] px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 ${
              view === "calendar"
                ? "bg-white text-slate-950 shadow-lg"
                : "text-white/80 hover:text-white hover:bg-white/10"
            }`}
          >
            <FiCalendar className="w-4 h-4" aria-hidden="true" />
            <span>Monthly Grid</span>
          </button>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="p-4 sm:p-6 border-b border-white/[0.08] bg-black/20 space-y-4">
        <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
          {/* Search Input */}
          <div className="relative flex-1">
            <label htmlFor="calendar-search" className="sr-only">
              Search calendar concepts, captions, or Bengali text
            </label>
            <FiSearch
              className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-warm-muted"
              aria-hidden="true"
            />
            <input
              id="calendar-search"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search concepts, formats, or Bengali (e.g. কমেন্টে)..."
              className="w-full min-h-[44px] pl-10 pr-10 py-2.5 rounded-xl border border-white/[0.1] bg-dark-surface2 text-sm text-warm-white placeholder-warm-muted focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                aria-label="Clear search query"
                className="absolute right-3 top-1/2 -translate-y-1/2 min-w-[32px] min-h-[32px] flex items-center justify-center text-warm-muted hover:text-warm-white transition"
              >
                <FiX className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Quick status count */}
          <div className="text-xs font-mono text-warm-muted shrink-0 self-center">
            Showing <strong className="text-warm-white">{filteredEntries.length}</strong> of {entries.length} concepts
          </div>
        </div>

        {/* Pillar Filter Chips */}
        <div
          role="group"
          aria-label="Pillar filters"
          className="flex flex-wrap items-center gap-2 pt-1"
        >
          <span className="text-xs font-semibold text-warm-muted mr-1 flex items-center gap-1.5">
            <FiFilter className="w-3.5 h-3.5" aria-hidden="true" />
            Pillars:
          </span>

          {/* All Filter */}
          <button
            type="button"
            id="filter-pillar-all"
            aria-pressed={selectedPillar === null}
            onClick={() => setSelectedPillar(null)}
            className={`min-h-[44px] inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold border transition focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 ${
              selectedPillar === null
                ? "bg-accent-blue text-white border-accent-blue shadow-md"
                : "bg-white/[0.04] text-warm-gray border-white/[0.08] hover:border-white/20 hover:text-warm-white"
            }`}
          >
            <span>All Pillars</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-black/20 font-mono">
              {entries.length}
            </span>
          </button>

          {/* 4 Pillar Chips */}
          {pillars.map((p) => {
            const isSelected = selectedPillar === p.name;
            const count = entries.filter((e) => e.pillar === p.name).length;
            const dotClass = getPillarDotColor(p.name);
            const badgeClass = getPillarBadgeClasses(p.name);

            return (
              <button
                key={p.name}
                type="button"
                id={`filter-pillar-${p.name.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                aria-pressed={isSelected}
                onClick={() => setSelectedPillar(isSelected ? null : p.name)}
                className={`min-h-[44px] inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold border transition focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 ${
                  isSelected
                    ? `${badgeClass} ring-2 ring-current shadow-md`
                    : "bg-white/[0.04] text-warm-gray border-white/[0.08] hover:border-white/20 hover:text-warm-white"
                }`}
              >
                <span className={`w-2.5 h-2.5 rounded-full ${dotClass} shrink-0`} aria-hidden="true" />
                <span>{p.name}</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-black/20 font-mono">
                  {count}
                </span>
              </button>
            );
          })}

          {selectedPillar && (
            <button
              type="button"
              onClick={() => setSelectedPillar(null)}
              className="text-xs font-mono text-accent-blue hover:underline ml-2"
            >
              Reset filter
            </button>
          )}
        </div>
      </div>

      {/* Calendar Body */}
      <div className="p-4 sm:p-6 md:p-8">
        {view === "list" ? (
          /* ================= LIST VIEW ================= */
          <div className="space-y-4" role="region" aria-label="Content calendar list view">
            {filteredEntries.length === 0 ? (
              <div className="py-16 text-center text-warm-muted space-y-3">
                <p className="text-base font-medium text-warm-gray">
                  No concepts match your search or filter.
                </p>
                <p className="text-xs">
                  Try searching for another keyword or reset the pillar filter.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedPillar(null);
                    setSearchQuery("");
                  }}
                  className="min-h-[44px] px-4 py-2 rounded-xl bg-white/[0.06] text-accent-blue text-xs font-semibold hover:bg-white/[0.1] transition"
                >
                  Clear search and filters
                </button>
              </div>
            ) : (
              filteredEntries.map((entry) => {
                const dayStr = entry.date.split("-")[2];
                const badgeClass = getPillarBadgeClasses(entry.pillar);
                const borderLeftClass = getPillarBorderLeftColor(entry.pillar);
                const isCopied = copiedDate === entry.date;
                const isHighlighted = highlightedDate === entry.date;

                return (
                  <article
                    key={entry.date}
                    id={`post-${entry.date}`}
                    ref={(el) => {
                      postRefs.current[entry.date] = el;
                    }}
                    tabIndex={-1}
                    className={`rounded-2xl border transition-all duration-300 p-5 sm:p-6 bg-dark-surface2/60 border-l-4 ${borderLeftClass} ${
                      isHighlighted
                        ? "ring-4 ring-amber-400/90 shadow-2xl scale-[1.01] bg-dark-surface2"
                        : "border-white/[0.08] hover:border-white/20 hover:shadow-lg"
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row gap-4 sm:items-start">
                      {/* Date Badge */}
                      <div className="flex sm:flex-col items-center justify-center min-w-[76px] px-3 py-2 rounded-xl bg-black/30 border border-white/[0.08] text-center self-start">
                        <span className="text-2xl sm:text-3xl font-black text-warm-white font-mono leading-none">
                          {dayStr}
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-warm-muted mt-1 font-mono">
                          Jul 2026
                        </span>
                      </div>

                      {/* Content Info */}
                      <div className="flex-1 min-w-0 space-y-3">
                        {/* Tags: Pillar + Format */}
                        <div className="flex flex-wrap items-center gap-2">
                          <span
                            className={`inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-bold border ${badgeClass}`}
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${getPillarDotColor(
                                entry.pillar
                              )}`}
                              aria-hidden="true"
                            />
                            {entry.pillar}
                          </span>

                          <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-semibold bg-white/[0.05] text-warm-gray border border-white/[0.08]">
                            {getFormatIcon(entry.format)}
                            <span>{entry.format}</span>
                          </span>
                        </div>

                        {/* Title & Direction */}
                        <div className="space-y-1">
                          <h4 className="text-lg sm:text-xl font-bold font-sans text-warm-white leading-snug">
                            {entry.title}
                          </h4>
                          <p className="text-xs sm:text-sm text-warm-gray leading-relaxed font-light">
                            {entry.direction}
                          </p>
                        </div>

                        {/* Caption Concept Box */}
                        <div className="rounded-xl p-3.5 sm:p-4 bg-black/35 border border-white/[0.08] space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] uppercase font-mono tracking-widest text-warm-muted font-bold">
                              Caption Concept
                            </span>
                            {/* Copy button */}
                            <button
                              type="button"
                              onClick={() => handleCopyCaption(entry)}
                              aria-label={`Copy caption for ${entry.title}`}
                              className="min-h-[36px] inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium border border-white/[0.1] bg-white/[0.04] text-warm-gray hover:text-warm-white hover:bg-white/[0.08] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                            >
                              {isCopied ? (
                                <>
                                  <FiCheck className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
                                  <span className="text-emerald-400 font-semibold">Copied!</span>
                                </>
                              ) : (
                                <>
                                  <FiCopy className="w-3.5 h-3.5 text-warm-muted" aria-hidden="true" />
                                  <span>Copy caption</span>
                                </>
                              )}
                            </button>
                          </div>

                          {/* English bold + Bengali in parentheses */}
                          <div className="space-y-1 pt-1">
                            <p className="text-sm sm:text-base font-bold text-warm-white leading-relaxed">
                              &ldquo;{entry.captionEn}&rdquo;
                            </p>
                            <p
                              lang="bn"
                              className="text-sm sm:text-base text-warm-gray leading-relaxed font-bengali"
                            >
                              ({entry.captionBn})
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })
            )}
          </div>
        ) : (
          /* ================= MONTHLY GRID VIEW (JULY 2026) ================= */
          <div className="space-y-5" role="region" aria-label="Content calendar monthly grid view">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2">
              <div>
                <h4 className="text-lg font-bold text-warm-white">
                  July 2026 Editorial Grid
                </h4>
                <p className="text-xs text-warm-muted">
                  Click any scheduled date to inspect its camera direction &amp; copy in List view.
                </p>
              </div>
              <span className="text-xs font-mono text-warm-muted">
                16 Posts scheduled on alternate days
              </span>
            </div>

            {/* DOW Headers (Mon-Sun) */}
            <div className="grid grid-cols-7 gap-1 sm:gap-2 text-center border-b border-white/[0.08] pb-2">
              {DOW.map((day) => (
                <div
                  key={day}
                  className="text-[11px] font-mono font-bold uppercase tracking-wider text-warm-muted py-1"
                >
                  {day}
                </div>
              ))}
            </div>

            {/* 7-column Calendar Grid */}
            <div className="grid grid-cols-7 gap-1 sm:gap-2">
              {/* Leading offset for July 2026 (Wed = 2 empty cells for Mon, Tue) */}
              {Array.from({ length: FIRST_DAY_OFFSET }).map((_, i) => (
                <div
                  key={`empty-${i}`}
                  aria-hidden="true"
                  className="min-h-[48px] sm:min-h-[90px] md:min-h-[110px] rounded-xl bg-transparent opacity-20 border border-transparent"
                />
              ))}

              {/* 31 Days of July 2026 */}
              {Array.from({ length: DAYS_IN_JULY }).map((_, idx) => {
                const dayNum = idx + 1;
                const dateIso = `2026-07-${dayNum < 10 ? `0${dayNum}` : dayNum}`;
                const entry = entries.find((e) => e.date === dateIso);
                const isFilteredMatch = entry
                  ? filteredEntries.some((e) => e.date === entry.date)
                  : false;

                if (entry) {
                  const borderLeftClass = getPillarBorderLeftColor(entry.pillar);
                  const dotColor = getPillarDotColor(entry.pillar);

                  return (
                    <button
                      key={dayNum}
                      type="button"
                      onClick={() => handleSelectDay(entry.date)}
                      aria-label={`July ${dayNum}: ${entry.pillar} - ${entry.title}. Click to view in list.`}
                      className={`min-h-[48px] sm:min-h-[90px] md:min-h-[110px] p-1.5 sm:p-2.5 rounded-xl text-left border-l-4 ${borderLeftClass} border border-white/[0.1] bg-dark-surface2/80 hover:bg-dark-surface2 hover:shadow-xl transition flex flex-col justify-between group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 ${
                        !isFilteredMatch ? "opacity-30 hover:opacity-100" : "opacity-100"
                      }`}
                    >
                      {/* Date number + pillar dot */}
                      <div className="flex items-center justify-between w-full">
                        <span className="text-xs sm:text-sm font-black font-mono text-warm-white group-hover:text-blue-300 transition-colors">
                          {dayNum}
                        </span>
                        <span
                          className={`w-2.5 h-2.5 rounded-full ${dotColor} shrink-0`}
                          aria-hidden="true"
                        />
                      </div>

                      {/* Desktop only: Title snippet & format */}
                      <p className="hidden sm:block text-[11px] font-semibold text-warm-gray group-hover:text-warm-white line-clamp-2 leading-tight">
                        {entry.title}
                      </p>

                      <div className="hidden sm:flex items-center justify-between text-[9px] uppercase font-mono tracking-wider text-warm-muted">
                        <span className="truncate">{entry.pillar}</span>
                        {entry.format === "Reel" && (
                          <span className="text-pink-400 font-bold">Reel</span>
                        )}
                      </div>
                    </button>
                  );
                }

                // Unsched day
                return (
                  <div
                    key={dayNum}
                    aria-label={`July ${dayNum}, no post scheduled`}
                    className="min-h-[48px] sm:min-h-[90px] md:min-h-[110px] p-1.5 sm:p-2.5 rounded-xl border border-white/[0.04] bg-white/[0.01] text-warm-muted/50 text-xs font-mono flex flex-col justify-start"
                  >
                    <span>{dayNum}</span>
                  </div>
                );
              })}
            </div>

            {/* Pillar Legend */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/[0.08] text-xs font-mono text-warm-muted">
              <span className="font-semibold text-warm-white">Pillar Legend:</span>
              {pillars.map((p) => (
                <div key={p.name} className="flex items-center gap-2">
                  <span
                    className={`w-2.5 h-2.5 rounded-full ${getPillarDotColor(
                      p.name
                    )}`}
                    aria-hidden="true"
                  />
                  <span>{p.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
