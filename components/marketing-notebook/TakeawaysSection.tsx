"use client";

import React from "react";
import Link from "next/link";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import { TakeawayItem, WorkLinkItem } from "@/data/marketing-notebook";

interface TakeawaysSectionProps {
  items: TakeawayItem[];
  closingLine: string;
  whereItShowsUp: WorkLinkItem[];
}

export default function TakeawaysSection({
  items,
  closingLine,
  whereItShowsUp,
}: TakeawaysSectionProps) {
  return (
    <div className="space-y-10">
      {/* Five Numbered Takeaways Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 font-sans">
        {items.map((item, idx) => (
          <div
            key={item.number}
            className={`p-6 rounded-2xl bg-dark-surface border border-white/[0.08] hover:border-white/20 transition-all flex flex-col justify-between space-y-3 ${
              idx === items.length - 1 ? "md:col-span-2 lg:col-span-1" : ""
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold text-accent-blue bg-blue-500/10 px-2.5 py-1 rounded-md border border-blue-500/20">
                0{item.number}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-warm-muted">
                PRINCIPLE
              </span>
            </div>

            <p className="text-xs sm:text-sm text-warm-gray leading-relaxed font-light">
              {item.text}
            </p>
          </div>
        ))}
      </div>

      {/* Closing Line Box */}
      <div className="p-5 sm:p-6 rounded-2xl bg-black/30 border border-white/[0.06] text-center">
        <p className="font-sans text-sm sm:text-base font-medium text-warm-white italic">
          &ldquo;{closingLine}&rdquo;
        </p>
      </div>

      {/* Where this shows up in my work */}
      <div className="space-y-4 pt-4 border-t border-white/[0.08]">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs uppercase tracking-widest text-warm-muted font-bold">
            WHERE THIS SHOWS UP IN MY WORK
          </span>
          <span className="text-xs font-mono text-warm-muted">Applied Portfolio Case Studies</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 font-sans">
          {whereItShowsUp.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className="p-5 sm:p-6 rounded-2xl bg-dark-surface border border-white/[0.08] hover:border-white/20 hover:bg-white/[0.02] transition-all group flex flex-col justify-between space-y-3 shadow-md"
            >
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-accent-blue font-bold">
                    PORTFOLIO APPLICATION
                  </span>
                  <FiArrowRight
                    className="w-4 h-4 text-warm-muted group-hover:text-warm-white group-hover:translate-x-1 transition-all"
                    aria-hidden="true"
                  />
                </div>
                <h4 className="text-base sm:text-lg font-bold text-warm-white group-hover:text-accent-blue transition-colors">
                  {link.title}
                </h4>
                <p className="text-xs sm:text-sm text-warm-gray font-light leading-relaxed">
                  {link.annotation}
                </p>
              </div>

              <div className="pt-2 font-mono text-[11px] text-accent-blue flex items-center gap-1 group-hover:underline">
                <span>View Full Case Study</span>
                <FiArrowRight className="w-3 h-3" aria-hidden="true" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
