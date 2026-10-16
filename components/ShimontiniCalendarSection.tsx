"use client";

import React, { useState, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiCalendar,
  FiList,
  FiSearch,
  FiCopy,
  FiCheck,
  FiChevronDown,
  FiChevronUp,
  FiVideo,
  FiLayers,
  FiZap,
  FiEye,
  FiInfo,
  FiClock,
  FiFilm,
} from "react-icons/fi";
import {
  SHIMONTINI_REELS,
  SHIMONTINI_PILLARS,
  SHIMONTINI_PHASES,
  BASE_HASHTAGS,
  ShimontiniReel,
} from "@/data/shimontini-reels";

const MONTH_NAMES = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

const WEEKDAY_NAMES = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

interface Props {
  embedded?: boolean;
}

export default function ShimontiniCalendarSection({ embedded = false }: Props) {
  const [selectedPillar, setSelectedPillar] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [viewMode, setViewMode] = useState<"list" | "grid">("list");
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [expandedIds, setExpandedIds] = useState<Set<number>>(new Set());
  const [flashId, setFlashId] = useState<number | null>(null);
  const itemRefs = useRef<Record<number, HTMLElement | null>>({});

  // Filter reels based on pillar and search query
  const filteredReels = useMemo(() => {
    return SHIMONTINI_REELS.filter((r) => {
      const matchPillar = selectedPillar === "all" || r.pillar === selectedPillar;
      if (!matchPillar) return false;

      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        r.title.toLowerCase().includes(q) ||
        r.caption.toLowerCase().includes(q) ||
        r.hook.toLowerCase().includes(q) ||
        r.fabric.toLowerCase().includes(q) ||
        r.plot.toLowerCase().includes(q) ||
        r.phase.toLowerCase().includes(q)
      );
    });
  }, [selectedPillar, searchQuery]);

  // Pillar counts
  const pillarCounts = useMemo(() => {
    const counts: Record<string, number> = { all: SHIMONTINI_REELS.length };
    Object.keys(SHIMONTINI_PILLARS).forEach((k) => {
      counts[k] = SHIMONTINI_REELS.filter((r) => r.pillar === k).length;
    });
    return counts;
  }, []);

  const toggleExpand = (id: number) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const handleExpandAll = () => {
    if (expandedIds.size === filteredReels.length) {
      setExpandedIds(new Set());
    } else {
      setExpandedIds(new Set(filteredReels.map((r) => r.id)));
    }
  };

  const handleCopyCaption = (reel: ShimontiniReel) => {
    const fullText = `${reel.caption}\n\n${BASE_HASHTAGS} ${reel.extraTags}`;
    navigator.clipboard.writeText(fullText).then(() => {
      setCopiedId(reel.id);
      setTimeout(() => setCopiedId(null), 2000);
    });
  };

  const handleSelectDateFromGrid = (reelId: number) => {
    setViewMode("list");
    setSelectedPillar("all");
    setExpandedIds((prev) => new Set(prev).add(reelId));
    setFlashId(reelId);

    setTimeout(() => {
      const el = itemRefs.current[reelId];
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 150);

    setTimeout(() => {
      setFlashId(null);
    }, 2000);
  };

  // Helper to format ISO time "20:00" to "8:00 PM"
  const formatTime = (timeStr: string) => {
    const [h, m] = timeStr.split(":").map(Number);
    const period = h >= 12 ? "PM" : "AM";
    const hour12 = h % 12 || 12;
    return `${hour12}:${String(m).padStart(2, "0")} ${period}`;
  };

  // Calendar grid builder for October and November 2026
  const renderMonthGrid = (year: number, monthIndex: number, monthTitle: string) => {
    const firstDay = new Date(year, monthIndex, 1);
    // Monday as start of week: 0 = Mon, 6 = Sun
    const lead = (firstDay.getDay() + 6) % 7;
    const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();

    const cells: React.ReactNode[] = [];
    for (let i = 0; i < lead; i++) {
      cells.push(<div key={`empty-${i}`} className="aspect-square opacity-0" />);
    }

    for (let d = 1; d <= daysInMonth; d++) {
      const iso = `${year}-${String(monthIndex + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
      const reel = SHIMONTINI_REELS.find((r) => r.date === iso);

      if (reel) {
        const pillarMeta = SHIMONTINI_PILLARS[reel.pillar];
        const isDim = selectedPillar !== "all" && reel.pillar !== selectedPillar;

        cells.push(
          <button
            key={iso}
            onClick={() => handleSelectDateFromGrid(reel.id)}
            style={{ borderColor: pillarMeta.colorVar }}
            className={`aspect-square rounded-xl p-2 sm:p-2.5 flex flex-col justify-between text-left transition-all relative border-2 bg-dark-surface hover:scale-[1.05] hover:shadow-lg ${
              isDim ? "opacity-25" : "opacity-100"
            }`}
            title={`Reel #${reel.id} (${d} ${MONTH_NAMES[monthIndex]}): ${reel.title}`}
          >
            <div className="flex items-center justify-between w-full">
              <span className="font-mono text-xs font-bold text-warm-white">{d}</span>
              <span
                style={{ backgroundColor: pillarMeta.colorVar }}
                className="w-2 h-2 rounded-full"
              />
            </div>
            <div className="space-y-0.5">
              <span
                style={{ color: pillarMeta.colorVar }}
                className="font-mono text-[10px] font-bold block"
              >
                #{reel.id}
              </span>
              <span className="text-[10px] text-warm-muted truncate block max-w-full font-sans leading-tight">
                {reel.title}
              </span>
            </div>
          </button>
        );
      } else {
        cells.push(
          <div
            key={iso}
            className="aspect-square rounded-xl p-2 border border-white/[0.04] bg-white/[0.01] flex flex-col justify-start"
          >
            <span className="font-mono text-xs text-warm-muted">{d}</span>
          </div>
        );
      }
    }

    return (
      <div className="space-y-4">
        <h4 className="text-xl font-sans font-bold text-warm-white flex items-center justify-between">
          <span>{monthTitle}</span>
          <span className="font-mono text-xs text-warm-muted font-normal">
            {daysInMonth} Days
          </span>
        </h4>

        <div className="grid grid-cols-7 gap-2">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((w) => (
            <div
              key={w}
              className="font-mono text-[11px] text-center uppercase tracking-wider text-warm-muted py-1"
            >
              {w}
            </div>
          ))}
          {cells}
        </div>
      </div>
    );
  };

  return (
    <div className={`space-y-12 ${embedded ? "p-6 sm:p-10" : "max-w-6xl mx-auto px-4 sm:px-6 py-12"}`}>
      {/* ─── PHASE STRIP ─── */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-warm-muted">
            Campaign Timeline &amp; Phases (Oct–Nov 2026)
          </span>
          <span className="font-mono text-xs text-accent-blue font-semibold">
            43 Scheduled Reels
          </span>
        </div>

        {/* Proportional visual bar */}
        <div className="flex rounded-full overflow-hidden h-3 bg-white/[0.06] p-0.5 gap-1">
          {SHIMONTINI_PHASES.map((ph) => {
            const count = ph.end - ph.start + 1;
            const pct = (count / 43) * 100;
            return (
              <div
                key={ph.name}
                style={{ width: `${pct}%` }}
                className={`h-full rounded-full ${ph.color} transition-all`}
                title={`${ph.name} (${ph.range}): ${count} reels`}
              />
            );
          })}
        </div>

        {/* Phase labels */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-2 font-mono text-xs">
          {SHIMONTINI_PHASES.map((ph) => (
            <div key={ph.name} className="space-y-0.5">
              <div className="flex items-center gap-1.5">
                <span className={`w-2 h-2 rounded-full ${ph.color}`} />
                <span className="font-bold text-warm-white truncate text-[11px]">{ph.name}</span>
              </div>
              <span className="text-[10px] text-warm-muted block pl-3.5">
                {ph.range} · {ph.end - ph.start + 1} reels
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ─── CONTROLS: FILTER CHIPS, SEARCH, & VIEW TOGGLE ─── */}
      <div className="space-y-6 pt-4 border-t border-white/[0.08]">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          {/* Pillar Chips */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setSelectedPillar("all")}
              className={`px-3.5 py-1.5 rounded-full font-mono text-xs uppercase tracking-wider transition-all flex items-center gap-2 ${
                selectedPillar === "all"
                  ? "bg-warm-white text-dark-bg font-bold shadow-md"
                  : "bg-white/[0.04] text-warm-gray hover:text-warm-white border border-white/[0.08]"
              }`}
            >
              <span>All Posts</span>
              <span className="text-[10px] opacity-75">({pillarCounts.all})</span>
            </button>

            {(Object.keys(SHIMONTINI_PILLARS) as Array<"B" | "P" | "S" | "I">).map((key) => {
              const meta = SHIMONTINI_PILLARS[key];
              const isSelected = selectedPillar === key;
              return (
                <button
                  key={key}
                  onClick={() => setSelectedPillar(key)}
                  className={`px-3.5 py-1.5 rounded-full font-mono text-xs uppercase tracking-wider transition-all flex items-center gap-2 ${
                    isSelected
                      ? "bg-warm-white text-dark-bg font-bold shadow-md"
                      : "bg-white/[0.04] text-warm-gray hover:text-warm-white border border-white/[0.08]"
                  }`}
                >
                  <span
                    style={{ backgroundColor: meta.colorVar }}
                    className="w-2 h-2 rounded-full"
                  />
                  <span>{meta.name}</span>
                  <span className="text-[10px] opacity-75">({pillarCounts[key]})</span>
                </button>
              );
            })}
          </div>

          {/* View switcher */}
          <div className="flex items-center gap-2 self-start lg:self-auto">
            <div className="inline-flex rounded-full p-1 bg-white/[0.04] border border-white/[0.08]">
              <button
                onClick={() => setViewMode("list")}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full font-mono text-xs transition-all ${
                  viewMode === "list"
                    ? "bg-accent-blue text-white font-bold"
                    : "text-warm-gray hover:text-warm-white"
                }`}
              >
                <FiList size={13} />
                <span>List View</span>
              </button>

              <button
                onClick={() => setViewMode("grid")}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full font-mono text-xs transition-all ${
                  viewMode === "grid"
                    ? "bg-accent-blue text-white font-bold"
                    : "text-warm-gray hover:text-warm-white"
                }`}
              >
                <FiCalendar size={13} />
                <span>Monthly Grid</span>
              </button>
            </div>
          </div>
        </div>

        {/* Search bar & Expand All */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-warm-muted" />
            <input
              type="text"
              placeholder="Search hooks, sarees, drapes, or captions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-white/[0.03] border border-white/[0.08] text-warm-white placeholder:text-warm-muted font-sans text-xs focus:outline-none focus:border-accent-blue transition-colors"
            />
          </div>

          <div className="flex items-center gap-4 font-mono text-xs text-warm-muted">
            <span>
              Showing <strong className="text-warm-white">{filteredReels.length}</strong> of 43 reels
            </span>

            {viewMode === "list" && (
              <button
                onClick={handleExpandAll}
                className="inline-flex items-center gap-1.5 text-warm-gray hover:text-warm-white transition-colors"
              >
                {expandedIds.size === filteredReels.length ? (
                  <>
                    <FiChevronUp size={13} />
                    <span>Collapse All</span>
                  </>
                ) : (
                  <>
                    <FiChevronDown size={13} />
                    <span>Expand All</span>
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ─── LIST VIEW ─── */}
      {viewMode === "list" && (
        <div className="space-y-4">
          {filteredReels.length === 0 ? (
            <div className="p-12 text-center rounded-2xl bg-dark-surface border border-white/[0.06] text-warm-muted font-mono text-xs">
              No reels match the selected pillar or search query.
            </div>
          ) : (
            filteredReels.map((reel) => {
              const d = new Date(reel.date);
              const dayNum = d.getDate();
              const monthStr = MONTH_NAMES[d.getMonth()];
              const weekdayStr = WEEKDAY_NAMES[d.getDay()];
              const isExpanded = expandedIds.has(reel.id);
              const isCopied = copiedId === reel.id;
              const isFlashing = flashId === reel.id;
              const pillarMeta = SHIMONTINI_PILLARS[reel.pillar];

              return (
                <article
                  key={reel.id}
                  id={`reel-${reel.id}`}
                  ref={(el) => {
                    itemRefs.current[reel.id] = el;
                  }}
                  className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 relative ${
                    isFlashing
                      ? "ring-2 ring-accent-blue bg-accent-blue/10 border-accent-blue"
                      : "bg-dark-surface border-white/[0.06] hover:border-white/[0.12]"
                  }`}
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                    {/* Date Block */}
                    <div className="md:col-span-2 flex md:flex-col items-baseline md:items-start gap-2 md:gap-0 font-mono">
                      <span className="text-3xl sm:text-4xl font-sans font-black text-warm-white leading-none">
                        {dayNum}
                      </span>
                      <span className="text-xs uppercase tracking-wider text-warm-muted font-semibold mt-1">
                        {monthStr} 2026
                      </span>
                      <span className="text-[11px] text-warm-muted/80">{weekdayStr}</span>
                    </div>

                    {/* Main Content */}
                    <div className="md:col-span-10 space-y-4">
                      {/* Meta Tags Row */}
                      <div className="flex flex-wrap items-center gap-2.5 font-mono text-[10px] uppercase tracking-wider">
                        <span
                          style={{
                            borderColor: pillarMeta.colorVar,
                            color: pillarMeta.colorVar,
                          }}
                          className="px-2.5 py-0.5 rounded-full border bg-white/[0.03] font-bold inline-flex items-center gap-1.5"
                        >
                          <span
                            style={{ backgroundColor: pillarMeta.colorVar }}
                            className="w-1.5 h-1.5 rounded-full"
                          />
                          <span>{pillarMeta.name}</span>
                        </span>

                        <span className="text-warm-muted">·</span>
                        <span className="text-warm-gray">{reel.phase}</span>
                        <span className="text-warm-muted">·</span>
                        <span className="text-warm-muted">Reel / Video</span>
                        <span className="text-warm-muted">·</span>
                        <span className="text-accent-blue font-semibold">Strategist: Sneh</span>
                      </div>

                      {/* Title & Caption */}
                      <div className="space-y-2">
                        <h3 className="text-xl sm:text-2xl font-sans font-bold text-warm-white">
                          #{reel.id} · {reel.title}
                        </h3>

                        <div className="pl-4 border-l-2 border-white/[0.15] py-1">
                          <p className="text-sm sm:text-base text-warm-gray font-light italic leading-relaxed">
                            &ldquo;{reel.caption}&rdquo;
                          </p>
                        </div>

                        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-warm-muted pt-1">
                          <span className="inline-flex items-center gap-1.5">
                            <FiClock size={12} className="text-warm-muted" />
                            <span>Post at {formatTime(reel.time)}</span>
                          </span>
                          <span>·</span>
                          <span className="inline-flex items-center gap-1.5">
                            <FiFilm size={12} className="text-warm-muted" />
                            <span>Duration: {reel.length}</span>
                          </span>
                        </div>
                      </div>

                      {/* Copy Caption Action */}
                      <div className="pt-1 flex items-center gap-3">
                        <button
                          onClick={() => handleCopyCaption(reel)}
                          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-white/[0.08] hover:border-white/[0.2] bg-white/[0.02] hover:bg-white/[0.05] text-xs font-mono text-warm-gray hover:text-warm-white transition-all"
                        >
                          {isCopied ? (
                            <>
                              <FiCheck size={12} className="text-emerald-400" />
                              <span className="text-emerald-400 font-semibold">Caption Copied!</span>
                            </>
                          ) : (
                            <>
                              <FiCopy size={12} />
                              <span>Copy Caption + Tags</span>
                            </>
                          )}
                        </button>

                        <button
                          onClick={() => toggleExpand(reel.id)}
                          className="inline-flex items-center gap-1.5 text-xs font-mono text-accent-blue hover:underline"
                        >
                          <span>{isExpanded ? "Hide Breakdown" : "View Camera & Plot"}</span>
                          <FiChevronDown
                            size={12}
                            className={`transition-transform ${isExpanded ? "rotate-180" : ""}`}
                          />
                        </button>
                      </div>

                      {/* Collapsible Plot & Visual Breakdown */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden pt-3 border-t border-white/[0.06]"
                          >
                            <div className="p-5 rounded-xl bg-black/40 border border-white/[0.06] space-y-4 text-xs font-mono">
                              {/* Visual Hook */}
                              <div>
                                <span className="text-[10px] uppercase tracking-wider text-warm-muted block mb-1">
                                  VISUAL HOOK (FIRST 2 SECONDS)
                                </span>
                                <p className="text-sm font-sans font-semibold text-rose-300">
                                  &ldquo;{reel.hook}&rdquo;
                                </p>
                              </div>

                              {/* Plot */}
                              <div>
                                <span className="text-[10px] uppercase tracking-wider text-warm-muted block mb-1">
                                  SHOT SEQUENCE &amp; PLOT
                                </span>
                                <p className="text-warm-gray leading-relaxed font-light">
                                  {reel.plot}
                                </p>
                                {reel.confirmNote && (
                                  <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded border border-dashed border-amber-500/50 bg-amber-500/10 text-amber-300 text-[11px]">
                                    <FiInfo size={11} />
                                    <span>To confirm with client: {reel.confirmNote}</span>
                                  </div>
                                )}
                              </div>

                              {/* Camera Direction */}
                              <div>
                                <span className="text-[10px] uppercase tracking-wider text-warm-muted block mb-1">
                                  CAMERA DIRECTION &amp; SETUP
                                </span>
                                <p className="text-warm-gray leading-relaxed font-light">
                                  {reel.camera}
                                </p>
                              </div>

                              {/* Fabric & Audio */}
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-white/[0.04]">
                                <div>
                                  <span className="text-[10px] uppercase tracking-wider text-warm-muted block mb-1">
                                    FABRIC &amp; WEAVE
                                  </span>
                                  <span className="text-warm-white font-medium">
                                    {reel.fabric}
                                  </span>
                                </div>
                                <div>
                                  <span className="text-[10px] uppercase tracking-wider text-warm-muted block mb-1">
                                    AUDIO &amp; SOUND DESIGN
                                  </span>
                                  <span className="text-warm-white font-medium">
                                    {reel.audio}
                                  </span>
                                </div>
                              </div>

                              {/* Strategic Reason */}
                              <div className="pt-2 border-t border-white/[0.04]">
                                <span className="text-[10px] uppercase tracking-wider text-warm-muted block mb-1">
                                  STRATEGIC REASON (WHY IT WORKS)
                                </span>
                                <p className="text-warm-gray leading-relaxed font-light">
                                  {reel.why}
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </article>
              );
            })
          )}
        </div>
      )}

      {/* ─── MONTHLY GRID VIEW ─── */}
      {viewMode === "grid" && (
        <div className="space-y-12">
          {/* Legend */}
          <div className="flex flex-wrap items-center gap-4 p-4 rounded-xl bg-dark-surface border border-white/[0.06] text-xs font-mono">
            <span className="text-warm-muted uppercase tracking-wider text-[10px]">Pillar Legend:</span>
            {(Object.keys(SHIMONTINI_PILLARS) as Array<"B" | "P" | "S" | "I">).map((key) => {
              const meta = SHIMONTINI_PILLARS[key];
              return (
                <div key={key} className="flex items-center gap-1.5">
                  <span
                    style={{ backgroundColor: meta.colorVar }}
                    className="w-2.5 h-2.5 rounded-full"
                  />
                  <span className="text-warm-white font-medium">{meta.name}</span>
                </div>
              );
            })}
            <span className="ml-auto text-[11px] text-warm-muted hidden sm:inline">
              Click any date box to inspect full reel script
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="p-6 sm:p-8 rounded-2xl bg-dark-surface border border-white/[0.06]">
              {renderMonthGrid(2026, 9, "October 2026 (Pujo & Autumn)")}
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-dark-surface border border-white/[0.06]">
              {renderMonthGrid(2026, 10, "November 2026 (Diwali & Wedding Season)")}
            </div>
          </div>
        </div>
      )}

      {/* ─── FOOTER NOTES ─── */}
      <div className="pt-8 border-t border-white/[0.08] text-xs font-mono text-warm-muted space-y-1.5">
        <p>• Open any reel&apos;s breakdown to inspect camera directions, visual hook script, and copywriting rationale.</p>
        <p>• Items flagged with dashed borders represent client-side logistics to confirm before publishing in Meta Business Suite.</p>
        <p>• Strategist: Sneh · Narayan Shenehashis Dutta, Kolkata</p>
      </div>
    </div>
  );
}
