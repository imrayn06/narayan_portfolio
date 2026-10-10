"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  FiCopy,
  FiCheck,
  FiTrendingUp,
  FiUsers,
  FiVideo,
  FiEye,
  FiCalendar,
  FiActivity,
} from "react-icons/fi";
import {
  ZeeBanglaSonarData,
  HeroMetric,
  InsightTableRow,
  InterpretationCard,
  GalleryImage,
} from "@/data/zee-banglasonar";

interface ZeeAccountMetricsProps {
  data: ZeeBanglaSonarData["accountPerformance"];
  recapPanels: GalleryImage[];
  onOpenLightbox?: (index: number) => void;
}

export default function ZeeAccountMetrics({
  data,
  recapPanels,
  onOpenLightbox,
}: ZeeAccountMetricsProps) {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [metricValues, setMetricValues] = useState<Record<string, string>>({
    views: "1.5M",
    "non-follower-views": "81%",
    "net-followers": "+741",
    "pieces-published": "247",
  });
  const [copiedMetrics, setCopiedMetrics] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // Count up animation respecting prefers-reduced-motion
  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setHasAnimated(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          startCountUp();
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const startCountUp = () => {
    const duration = 1200; // ms
    const startTime = performance.now();

    const updateCounts = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);

      const newValues: Record<string, string> = {
        views: `${(1.5 * eased).toFixed(1)}M`,
        "non-follower-views": `${Math.round(81 * eased)}%`,
        "net-followers": `+${Math.round(741 * eased)}`,
        "pieces-published": `${Math.round(247 * eased)}`,
      };

      setMetricValues(newValues);

      if (progress < 1) {
        requestAnimationFrame(updateCounts);
      } else {
        // Ensure exact target numbers
        setMetricValues({
          views: "1.5M",
          "non-follower-views": "81%",
          "net-followers": "+741",
          "pieces-published": "247",
        });
      }
    };

    requestAnimationFrame(updateCounts);
  };

  const handleCopyMetrics = () => {
    const textToCopy = `${data.copyMetricsTemplate.title}\n` +
      `• Views generated: 1.5M\n` +
      `• Non-follower views: 81%\n` +
      `• Net follower change (vs. June): +741\n` +
      `• Pieces published: 247 (246 Reels + 1 post)\n` +
      `• Active follower base: 60K followers\n\n` +
      `${data.copyMetricsTemplate.source}`;

    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(textToCopy).catch(() => {});
    }

    setCopiedMetrics(true);
    setTimeout(() => {
      setCopiedMetrics(false);
    }, 2500);
  };

  // Skip unverified metrics: only display rows that are not marked as unverified
  const displayInsightRows = data.insightTable.filter((row) => {
    const matchingUnverified = data.unverifiedMetrics.find((u) => u.id === row.id);
    return !matchingUnverified || matchingUnverified.verified === true;
  });

  return (
    <section
      id="account-performance"
      ref={sectionRef}
      className="py-16 border-b border-white/[0.08] space-y-12"
      aria-labelledby="metrics-heading"
    >
      {/* Section Header with Eyebrow */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-warm-muted">
            04 / ACCOUNT PERFORMANCE METRICS
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-cyan-400 font-semibold">
            INSTAGRAM RECAP
          </span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <h2
            id="metrics-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-black font-sans tracking-tight text-warm-white"
          >
            {data.heading}
          </h2>

          <button
            type="button"
            onClick={handleCopyMetrics}
            aria-label="Copy key hero metrics to clipboard"
            className="min-h-[44px] self-start sm:self-auto inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/[0.1] bg-white/[0.05] text-xs font-mono font-medium text-warm-gray hover:text-warm-white hover:bg-white/[0.1] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
          >
            {copiedMetrics ? (
              <>
                <FiCheck className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                <span className="text-emerald-400 font-semibold">Metrics Copied!</span>
              </>
            ) : (
              <>
                <FiCopy className="w-4 h-4 text-warm-muted" aria-hidden="true" />
                <span>Copy metrics</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Main Metrics Area: Hero Tiles + Recap Screenshots */}
      <div className="space-y-8">
        <div>
          <span className="font-mono text-xs tracking-widest uppercase text-warm-muted font-bold block mb-4">
            {data.heroSectionTitle}
          </span>

          {/* 4 Hero Tiles: 4 cols on desktop / 2 on tablet & phone */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {data.heroTiles.map((tile) => (
              <div
                key={tile.id}
                className="p-5 sm:p-6 rounded-2xl bg-dark-surface border border-white/[0.08] flex flex-col justify-between hover:border-white/20 transition-colors shadow-lg"
              >
                <span className="font-mono text-[10px] sm:text-[11px] tracking-wider uppercase text-warm-muted block mb-2">
                  {tile.label}
                </span>

                <div className="my-1">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-black font-mono tracking-tight text-warm-white">
                    {metricValues[tile.id] || tile.value}
                  </span>
                </div>

                <div className="pt-2 border-t border-white/[0.04] mt-2">
                  <span className="text-[11px] text-warm-muted font-light">
                    {tile.id === "pieces-published"
                      ? "246 Reels + 1 feed post"
                      : tile.id === "views"
                      ? "July 2026 total"
                      : tile.id === "non-follower-views"
                      ? "Algorithmic discovery"
                      : "Month-over-month growth"}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Supporting line */}
          <div className="mt-3 flex items-center justify-between text-xs font-mono text-warm-muted px-1">
            <span>Supporting metric: <strong>{data.supportingLine}</strong></span>
            <span className="hidden sm:inline">Source: Official Instagram Monthly Recap</span>
          </div>
        </div>

        {/* Split Bar: 81% Non-followers vs 19% Followers */}
        <div className="p-6 rounded-2xl bg-dark-surface border border-white/[0.08] space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="text-sm sm:text-base font-bold text-warm-white">
                View Distribution by Audience Relationship
              </h3>
              <p className="text-xs text-warm-muted font-light">
                One horizontal split showing the proportion of views from non-followers versus current followers.
              </p>
            </div>
            <div className="flex items-center gap-4 text-xs font-mono">
              <span className="flex items-center gap-1.5 text-cyan-400">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-500" aria-hidden="true" />
                Non-followers: 81%
              </span>
              <span className="flex items-center gap-1.5 text-warm-muted">
                <span className="w-2.5 h-2.5 rounded-full bg-white/20" aria-hidden="true" />
                Followers: 19%
              </span>
            </div>
          </div>

          {/* Horizontal Split Bar Container */}
          <div
            role="progressbar"
            aria-valuenow={data.splitBar.nonFollowers}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="81% Non-follower views vs 19% Follower views"
            className="w-full h-8 sm:h-9 rounded-xl overflow-hidden bg-white/[0.08] flex border border-white/[0.1]"
          >
            <div
              style={{ width: `${data.splitBar.nonFollowers}%` }}
              className="h-full bg-gradient-to-r from-cyan-600 to-blue-600 flex items-center justify-center text-xs font-bold text-white tracking-wider font-mono shadow-inner transition-all duration-700"
            >
              <span className="truncate px-2">{data.splitBar.labelNonFollowers}</span>
            </div>
            <div
              style={{ width: `${data.splitBar.followers}%` }}
              className="h-full bg-white/[0.12] flex items-center justify-center text-xs font-bold text-warm-gray tracking-wider font-mono transition-all duration-700"
            >
              <span className="truncate px-2">{data.splitBar.labelFollowers}</span>
            </div>
          </div>
        </div>

        {/* 01 and 02 Recap Screenshots Displayed Next to Hero Metrics */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-warm-muted font-bold block">
                PRIMARY DASHBOARD EVIDENCE
              </span>
              <h3 className="text-base sm:text-lg font-bold text-warm-white">
                Monthly Recap Panels (Panels 01 &amp; 02)
              </h3>
            </div>
            <span className="text-xs font-mono text-warm-muted hidden sm:inline">
              Click any image to enlarge
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recapPanels.map((panel, idx) => (
              <figure
                key={panel.id}
                className="group rounded-2xl bg-dark-surface border border-white/[0.08] overflow-hidden p-4 sm:p-5 flex flex-col justify-between hover:border-white/20 transition-all shadow-md"
              >
                <div
                  tabIndex={0}
                  role="button"
                  aria-label={`Enlarge image: ${panel.caption}`}
                  onClick={() => onOpenLightbox?.(idx)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      onOpenLightbox?.(idx);
                    }
                  }}
                  className="relative cursor-pointer overflow-hidden rounded-xl bg-black/40 border border-white/[0.06] aspect-[4/3] flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                >
                  <picture className="w-full h-full flex items-center justify-center">
                    <source
                      type="image/webp"
                      srcSet={`/work/zee-banglasonar/${panel.small} 800w, /work/zee-banglasonar/${panel.file} 1200w`}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 540px"
                    />
                    <img
                      src={`/work/zee-banglasonar/${panel.file}`}
                      alt={panel.alt}
                      width={panel.width}
                      height={panel.height}
                      loading="lazy"
                      className="w-full h-full object-contain p-2 group-hover:scale-[1.02] transition-transform duration-300"
                    />
                  </picture>

                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="px-3 py-1.5 rounded-lg bg-black/70 text-white font-mono text-xs border border-white/20 backdrop-blur-sm">
                      Click to Enlarge
                    </span>
                  </div>
                </div>

                <figcaption className="mt-3.5 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-cyan-400 font-bold">
                      {panel.badge || `Panel ${panel.id}`}
                    </span>
                    <span className="text-[11px] font-mono text-warm-muted">
                      {panel.width} × {panel.height}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-warm-white">
                    {panel.caption}
                  </p>
                  <p className="text-[11px] text-warm-muted line-clamp-2 font-light">
                    {panel.alt}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>

      {/* Insight Table: real th/td, stacked cards on small screens */}
      <div className="space-y-4">
        <div>
          <span className="font-mono text-xs tracking-widest uppercase text-warm-muted font-bold block mb-1">
            DETAILED OBSERVATIONS
          </span>
          <h3 className="text-xl sm:text-2xl font-bold font-sans text-warm-white">
            Instagram Insights Data Table
          </h3>
          <p className="text-xs text-warm-muted font-light mt-0.5">
            Key operational metrics recorded from account screenshots for July 2026.
          </p>
        </div>

        {/* Responsive Table: HTML table on md+, stacked cards on mobile */}
        <div className="rounded-2xl border border-white/[0.08] bg-dark-surface overflow-hidden shadow-lg">
          {/* Desktop Table View */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left border-collapse font-sans text-sm">
              <caption className="sr-only">
                Observed Instagram Insights Metrics for Zee BanglaSonar (July 2026)
              </caption>
              <thead>
                <tr className="border-b border-white/[0.08] bg-white/[0.02] font-mono text-xs uppercase tracking-wider text-warm-muted">
                  <th scope="col" className="py-4 px-6 font-bold w-1/2">
                    Metric / Dimension
                  </th>
                  <th scope="col" className="py-4 px-6 font-bold w-1/2">
                    Reported Observation
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.04]">
                {displayInsightRows.map((row) => (
                  <tr
                    key={row.id}
                    className="hover:bg-white/[0.02] transition-colors"
                  >
                    <th
                      scope="row"
                      className="py-4 px-6 font-medium text-warm-white flex items-center gap-2"
                    >
                      <span>{row.metric}</span>
                      {row.isCustomRange && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
                          Custom Range
                        </span>
                      )}
                    </th>
                    <td className="py-4 px-6 text-warm-gray font-mono text-xs font-semibold">
                      {row.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Stacked Cards View */}
          <div className="md:hidden divide-y divide-white/[0.06] p-2">
            {displayInsightRows.map((row) => (
              <div key={row.id} className="p-4 space-y-1.5">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-semibold text-warm-white">
                    {row.metric}
                  </span>
                  {row.isCustomRange && (
                    <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-amber-500/15 text-amber-300 border border-amber-500/25 shrink-0">
                      Custom Range
                    </span>
                  )}
                </div>
                <div className="text-xs font-mono text-warm-gray font-bold pl-2 border-l-2 border-cyan-500/60">
                  {row.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Four Plain English Interpretation Cards */}
      <div className="space-y-4">
        <div>
          <span className="font-mono text-xs tracking-widest uppercase text-warm-muted font-bold block mb-1">
            STRATEGIC ANALYSIS
          </span>
          <h3 className="text-xl sm:text-2xl font-bold font-sans text-warm-white">
            Performance Interpretations
          </h3>
          <p className="text-xs text-warm-muted font-light mt-0.5">
            Objective insights synthesized directly from verified data points.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 font-sans">
          {data.interpretations.map((card, idx) => (
            <div
              key={card.id}
              className="p-6 rounded-2xl bg-dark-surface border border-white/[0.08] space-y-3 hover:border-white/20 transition-colors shadow-md"
            >
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-accent-blue bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
                  0{idx + 1}
                </span>
                <h4 className="text-base font-bold text-warm-white">
                  {card.title}
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-warm-gray font-light leading-relaxed">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
