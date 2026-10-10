"use client";

import React from "react";
import { FiDownload, FiFileText } from "react-icons/fi";
import { SourcePdfItem } from "@/data/marketing-notebook";

interface SourcePdfsSectionProps {
  showSourcePdfs: boolean;
  pdfs: SourcePdfItem[];
}

export default function SourcePdfsSection({
  showSourcePdfs,
  pdfs,
}: SourcePdfsSectionProps) {
  if (!showSourcePdfs || pdfs.length === 0) return null;

  return (
    <div className="space-y-4">
      <p className="text-xs sm:text-sm text-warm-gray font-light">
        Original raw exercise notes, teardown matrices and concept drafts prepared during training.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 font-mono">
        {pdfs.map((pdf) => (
          <a
            key={pdf.fileName}
            href={pdf.href}
            download
            className="p-5 rounded-2xl bg-dark-surface border border-white/[0.08] hover:border-white/20 hover:bg-white/[0.03] transition-all group flex flex-col justify-between space-y-3 min-h-[52px]"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="w-9 h-9 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 flex items-center justify-center shrink-0">
                <FiFileText className="w-4 h-4" aria-hidden="true" />
              </div>
              <span className="text-[10px] uppercase tracking-wider text-warm-muted bg-white/[0.04] px-2 py-0.5 rounded">
                PDF Document
              </span>
            </div>

            <div className="space-y-1">
              <h4 className="text-sm font-bold text-warm-white group-hover:text-accent-blue transition-colors font-sans">
                {pdf.title}
              </h4>
              <div className="text-[11px] text-warm-muted flex items-center gap-2">
                <span>{pdf.pages} {pdf.pages === 1 ? "page" : "pages"}</span>
                <span>·</span>
                <span>{pdf.size}</span>
              </div>
            </div>

            <div className="pt-2 border-t border-white/[0.04] flex items-center justify-between text-xs text-accent-blue group-hover:underline">
              <span>Download PDF</span>
              <FiDownload className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" aria-hidden="true" />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
