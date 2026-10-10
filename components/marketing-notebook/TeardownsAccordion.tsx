"use client";

import React, { useState } from "react";
import { FiChevronDown, FiExternalLink, FiCheckCircle } from "react-icons/fi";
import { TeardownItem } from "@/data/marketing-notebook";

interface TeardownsAccordionProps {
  items: TeardownItem[];
  note: string;
}

export default function TeardownsAccordion({ items, note }: TeardownsAccordionProps) {
  // Open the first item by default, allow multiple or single toggles
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    [items[0]?.id || ""]: true,
  });

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="space-y-6">
      {/* Small Section Note */}
      <p className="text-xs font-mono text-warm-muted leading-relaxed">
        {note}
      </p>

      {/* Accordion List */}
      <div className="space-y-4">
        {items.map((item, idx) => {
          const isOpen = !!openItems[item.id];

          return (
            <div
              key={item.id}
              className="rounded-2xl border border-white/[0.08] bg-dark-surface overflow-hidden transition-all shadow-md"
            >
              {/* Accordion Header / Trigger Button */}
              <button
                type="button"
                id={`accordion-btn-${item.id}`}
                aria-expanded={isOpen}
                aria-controls={`accordion-content-${item.id}`}
                onClick={() => toggleItem(item.id)}
                className="w-full min-h-[52px] p-5 sm:p-6 text-left flex items-start sm:items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              >
                <div className="space-y-2 flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
                    <span className="text-accent-blue font-bold">
                      0{idx + 1}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-white/[0.06] text-warm-white border border-white/[0.08] font-semibold">
                      {item.brand}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-white/[0.03] text-warm-muted border border-white/[0.06]">
                      {item.format}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-xl font-bold font-sans text-warm-white leading-snug">
                    {item.title}
                  </h3>
                </div>

                <div className="flex items-center gap-2 shrink-0 pt-1 sm:pt-0">
                  <span className="text-xs font-mono text-warm-muted hidden md:inline">
                    {isOpen ? "Collapse" : "Expand"}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-warm-gray">
                    <FiChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </button>

              {/* Accordion Content Panel */}
              <div
                id={`accordion-content-${item.id}`}
                role="region"
                aria-labelledby={`accordion-btn-${item.id}`}
                className={`p-5 sm:p-6 pt-0 border-t border-white/[0.06] space-y-6 bg-black/20 ${
                  isOpen ? "block" : "hidden"
                }`}
              >
                {/* Source Link */}
                <div className="pt-4 flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-warm-muted">
                    ORIGINAL REFERENCE
                  </span>
                  <a
                    href={item.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-xs text-accent-blue hover:text-blue-300 transition-colors"
                  >
                    <span>{item.sourceLabel}</span>
                    <FiExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </div>

                {/* What Stood Out Bullets */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-warm-muted">
                    What Stood Out
                  </h4>
                  <ul className="space-y-2.5 font-sans">
                    {item.whatStoodOut.map((bullet, bIdx) => (
                      <li
                        key={bIdx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-warm-gray font-light leading-relaxed"
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full bg-accent-blue mt-2 shrink-0"
                          aria-hidden="true"
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Takeaway Box */}
                <div className="p-4 sm:p-5 rounded-xl bg-blue-500/10 border border-blue-500/20 space-y-1.5">
                  <span className="font-mono text-[10px] uppercase tracking-wider font-bold text-blue-300 block">
                    CORE TAKEAWAY
                  </span>
                  <p className="text-xs sm:text-sm text-blue-100 font-light italic leading-relaxed">
                    &ldquo;{item.takeaway}&rdquo;
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
