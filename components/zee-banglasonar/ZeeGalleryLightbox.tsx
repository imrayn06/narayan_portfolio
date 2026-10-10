"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  FiChevronDown,
  FiChevronUp,
  FiX,
  FiArrowLeft,
  FiArrowRight,
  FiMaximize2,
} from "react-icons/fi";
import { GalleryImage } from "@/data/zee-banglasonar";

interface ZeeGalleryLightboxProps {
  recapPanels: GalleryImage[];
  extendedPanels: GalleryImage[];
  independentAnalysisNote?: string;
  lightboxIndex: number | null;
  onCloseLightbox: () => void;
  onOpenLightbox: (index: number) => void;
}

export default function ZeeGalleryLightbox({
  recapPanels,
  extendedPanels,
  independentAnalysisNote,
  lightboxIndex,
  onCloseLightbox,
  onOpenLightbox,
}: ZeeGalleryLightboxProps) {
  // Collapsible state for extended gallery (03 to 07)
  const [isOpen, setIsOpen] = useState(true);

  // Combine all images for continuous lightbox navigation (01 to 07)
  const allImages = [...recapPanels, ...extendedPanels];

  const modalRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const previouslyFocusedElement = useRef<HTMLElement | null>(null);

  // Navigate lightbox
  const showPrev = useCallback(() => {
    if (lightboxIndex === null) return;
    const prev = lightboxIndex > 0 ? lightboxIndex - 1 : allImages.length - 1;
    onOpenLightbox(prev);
  }, [lightboxIndex, allImages.length, onOpenLightbox]);

  const showNext = useCallback(() => {
    if (lightboxIndex === null) return;
    const next = lightboxIndex < allImages.length - 1 ? lightboxIndex + 1 : 0;
    onOpenLightbox(next);
  }, [lightboxIndex, allImages.length, onOpenLightbox]);

  // Focus trap & keyboard listeners for lightbox
  useEffect(() => {
    if (lightboxIndex === null) {
      if (previouslyFocusedElement.current) {
        previouslyFocusedElement.current.focus();
        previouslyFocusedElement.current = null;
      }
      return;
    }

    // Save active element to restore focus on close
    previouslyFocusedElement.current = document.activeElement as HTMLElement;

    // Focus close button initially
    setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onCloseLightbox();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        showPrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        showNext();
      } else if (e.key === "Tab") {
        // Focus trap inside modal
        if (!modalRef.current) return;
        const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, onCloseLightbox, showPrev, showNext]);

  const activeImage = lightboxIndex !== null ? allImages[lightboxIndex] : null;

  return (
    <section
      id="insights-gallery"
      className="py-16 border-b border-white/[0.08] space-y-8"
      aria-labelledby="gallery-heading"
    >
      {/* Section Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-warm-muted">
            05 / DASHBOARD EVIDENCE
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-pink-400" />
          <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-pink-400 font-semibold">
            SCREENSHOTS GALLERY
          </span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2
              id="gallery-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-black font-sans tracking-tight text-warm-white"
            >
              Instagram Insights Gallery
            </h2>
            <p className="text-xs sm:text-sm text-warm-gray font-light mt-1">
              Complete visual documentation from the account dashboard (Panels 03 through 07).
            </p>
          </div>

          {/* Toggle Collapsible Gallery */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="extended-gallery-content"
            className="min-h-[44px] self-start sm:self-auto inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/[0.1] bg-white/[0.05] text-xs font-mono font-medium text-warm-gray hover:text-warm-white hover:bg-white/[0.1] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
          >
            <span>{isOpen ? "Hide Extended Gallery" : "Show All 5 Extended Panels"}</span>
            {isOpen ? <FiChevronUp /> : <FiChevronDown />}
          </button>
        </div>
      </div>

      {/* Collapsible Extended Gallery (Panels 03 through 07) */}
      {isOpen && (
        <div
          id="extended-gallery-content"
          className="space-y-6 pt-2"
        >
          <div className="flex items-center justify-between text-xs font-mono text-warm-muted">
            <span>
              Showing <strong>{extendedPanels.length}</strong> additional dashboard views
            </span>
            <span>Tap any screenshot to open high-resolution lightbox</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {extendedPanels.map((panel, idx) => {
              // Global index in allImages array is recapPanels.length + idx
              const globalIndex = recapPanels.length + idx;

              return (
                <figure
                  key={panel.id}
                  className={`group rounded-2xl bg-dark-surface border overflow-hidden p-4 sm:p-5 flex flex-col justify-between hover:border-white/20 transition-all shadow-md ${
                    panel.id === "03"
                      ? "border-amber-500/40 bg-amber-500/[0.03]"
                      : "border-white/[0.08]"
                  }`}
                >
                  {/* Click-to-enlarge wrapper */}
                  <div
                    tabIndex={0}
                    role="button"
                    aria-label={`Enlarge image: ${panel.caption}`}
                    onClick={() => onOpenLightbox(globalIndex)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        onOpenLightbox(globalIndex);
                      }
                    }}
                    className="relative cursor-pointer overflow-hidden rounded-xl bg-black/40 border border-white/[0.06] aspect-[4/3] flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                  >
                    <picture className="w-full h-full flex items-center justify-center">
                      <source
                        type="image/webp"
                        srcSet={`/work/zee-banglasonar/${panel.small} 800w, /work/zee-banglasonar/${panel.file} 1200w`}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
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
                      <span className="px-3 py-1.5 rounded-lg bg-black/70 text-white font-mono text-xs border border-white/20 backdrop-blur-sm flex items-center gap-1.5">
                        <FiMaximize2 className="w-3.5 h-3.5" />
                        <span>Enlarge</span>
                      </span>
                    </div>
                  </div>

                  {/* Caption & Metadata */}
                  <figcaption className="mt-3.5 space-y-2">
                    <div className="flex items-center justify-between">
                      <span
                        className={`font-mono text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded ${
                          panel.id === "03"
                            ? "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                            : "bg-white/[0.06] text-pink-400 border border-white/[0.08]"
                        }`}
                      >
                        {panel.badge || `Panel ${panel.id}`}
                      </span>
                      <span className="text-[10px] font-mono text-warm-muted">
                        {panel.width} × {panel.height}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm font-semibold text-warm-white">
                      {panel.caption}
                    </p>

                    {/* Specific required custom range notice for Panel 03 */}
                    {panel.customRangeNotice && (
                      <p className="text-[11px] font-mono text-amber-300/90 bg-amber-500/10 p-2 rounded-lg border border-amber-500/20 leading-relaxed">
                        {panel.customRangeNotice}
                      </p>
                    )}

                    <p className="text-[11px] text-warm-muted line-clamp-2 font-light">
                      {panel.alt}
                    </p>
                  </figcaption>
                </figure>
              );
            })}
          </div>
        </div>
      )}

      {/* Accessible Lightbox Modal */}
      {lightboxIndex !== null && activeImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Image lightbox: ${activeImage.caption}`}
          ref={modalRef}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-6"
        >
          {/* Close button */}
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onCloseLightbox}
            aria-label="Close lightbox (Esc)"
            className="absolute top-4 right-4 z-50 min-h-[44px] min-w-[44px] rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition border border-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
          >
            <FiX className="w-5 h-5" aria-hidden="true" />
          </button>

          {/* Previous image button */}
          <button
            type="button"
            onClick={showPrev}
            aria-label="Previous image (Left arrow)"
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-50 min-h-[48px] min-w-[48px] rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition border border-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
          >
            <FiArrowLeft className="w-5 h-5" aria-hidden="true" />
          </button>

          {/* Next image button */}
          <button
            type="button"
            onClick={showNext}
            aria-label="Next image (Right arrow)"
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-50 min-h-[48px] min-w-[48px] rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition border border-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
          >
            <FiArrowRight className="w-5 h-5" aria-hidden="true" />
          </button>

          {/* Modal Content */}
          <div className="max-w-4xl w-full max-h-[90vh] flex flex-col items-center justify-center space-y-4">
            <div className="relative w-full max-h-[70vh] flex items-center justify-center overflow-hidden">
              <picture className="max-h-[70vh] flex items-center justify-center">
                <source
                  type="image/webp"
                  srcSet={`/work/zee-banglasonar/${activeImage.small} 800w, /work/zee-banglasonar/${activeImage.file} 1200w`}
                  sizes="(max-width: 768px) 100vw, 900px"
                />
                <img
                  src={`/work/zee-banglasonar/${activeImage.file}`}
                  alt={activeImage.alt}
                  width={activeImage.width}
                  height={activeImage.height}
                  className="max-h-[70vh] w-auto max-w-full object-contain rounded-xl shadow-2xl border border-white/15"
                />
              </picture>
            </div>

            {/* Lightbox Caption & Info */}
            <div className="text-center max-w-2xl space-y-2 px-4">
              <div className="flex items-center justify-center gap-3">
                <span className="font-mono text-xs uppercase px-2.5 py-0.5 rounded-full bg-white/10 text-cyan-300 border border-white/15">
                  Panel {activeImage.id} of {allImages.length}
                </span>
                <span className="text-xs font-mono text-warm-muted">
                  {activeImage.width} × {activeImage.height}
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-white">
                {activeImage.caption}
              </h3>

              {activeImage.customRangeNotice && (
                <p className="text-xs font-mono text-amber-300 bg-amber-500/15 p-2 rounded border border-amber-500/30">
                  {activeImage.customRangeNotice}
                </p>
              )}

              <p className="text-xs text-warm-muted font-light leading-relaxed">
                {activeImage.alt}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
