"use client";

import React from "react";
import { FrameworkLens } from "@/data/marketing-notebook";

interface FrameworkLensesProps {
  lenses: FrameworkLens[];
}

export default function FrameworkLenses({ lenses }: FrameworkLensesProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 font-sans">
      {lenses.map((lens) => (
        <div
          key={lens.number}
          className="p-5 sm:p-6 rounded-2xl bg-dark-surface border border-white/[0.08] hover:border-white/20 transition-all flex flex-col justify-between space-y-3 group"
        >
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs font-bold text-accent-blue bg-blue-500/10 px-2.5 py-1 rounded-md border border-blue-500/20">
              {String(lens.number).padStart(2, "0")}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-wider text-warm-muted">
              CHECKLIST LENS
            </span>
          </div>

          <div className="space-y-1.5">
            <h3 className="text-base sm:text-lg font-bold text-warm-white group-hover:text-blue-300 transition-colors">
              {lens.name}
            </h3>
            <p className="text-xs sm:text-sm text-warm-gray leading-relaxed font-light">
              {lens.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
