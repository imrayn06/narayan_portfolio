"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlay, FiX, FiExternalLink } from "react-icons/fi";

export interface VideoItem {
  id: string;
  title: string;
  brand: string;
  format?: string;
  duration?: string;
  tools?: string[];
  hook?: string;
  body?: string;
  cta?: string;
  audioDirection?: string;
  poster?: string;
  videoSrc?: string; // Direct MP4 / WebM for pure HTML5 autoplay & looping
  driveUrl?: string; // Google Drive share URL or file ID
  aspect?: string; // e.g. "aspect-[16/9]" or "aspect-[9/16]"
  category?: string;
  context?: string;
}

export function extractDriveId(urlOrId?: string): string | null {
  if (!urlOrId) return null;
  const match = urlOrId.match(/(?:file\/d\/|id=)([a-zA-Z0-9_-]+)/);
  if (match) return match[1];
  if (/^[a-zA-Z0-9_-]{20,}$/.test(urlOrId)) return urlOrId;
  return null;
}

export function PortfolioVideoPreview({
  item,
  onClick,
  className = "",
}: {
  item: VideoItem;
  onClick?: () => void;
  className?: string;
}) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const driveId = extractDriveId(item.driveUrl);

  return (
    <div
      onClick={onClick}
      className={`relative w-full bg-[#141414] overflow-hidden cursor-pointer group/vid ${item.aspect || "aspect-[16/9]"} ${className}`}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick?.();
        }
      }}
      aria-label={`Play or inspect video: ${item.title}`}
    >
      {/* 1. Direct Native Video Autoplay (Silent, looping, playsinline, object-cover) */}
      {item.videoSrc && !prefersReducedMotion ? (
        <video
          ref={videoRef}
          src={item.videoSrc}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover/vid:scale-105"
        />
      ) : item.poster ? (
        <Image
          src={item.poster}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover/vid:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      ) : (
        <div className="absolute inset-0 bg-[#161616] flex items-center justify-center">
          <span className="font-mono text-xs text-warm-muted">{item.title}</span>
        </div>
      )}

      {/* Dark gradient overlay for typography readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

      {/* Floating Play / Expand Badge */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white flex items-center justify-center group-hover/vid:scale-110 group-hover/vid:bg-white group-hover/vid:text-black transition-all shadow-xl">
          <FiPlay size={20} className="ml-0.5" />
        </div>
      </div>

      {/* Top Badges */}
      <div className="absolute top-4 inset-x-4 flex items-center justify-between font-mono text-[10px] pointer-events-none z-10">
        {item.format && (
          <span className="px-2.5 py-1 rounded bg-black/80 backdrop-blur-md border border-white/[0.1] uppercase tracking-wider text-warm-white">
            {item.format}
          </span>
        )}
        {item.duration && (
          <span className="px-2 py-0.5 rounded bg-black/80 text-warm-gray border border-white/[0.06]">
            {item.duration}
          </span>
        )}
      </div>

      {/* Bottom Label */}
      <div className="absolute bottom-4 inset-x-4 font-mono text-[11px] text-warm-muted truncate pointer-events-none z-10 flex items-center justify-between">
        <span>Brand: {item.brand}</span>
        {driveId && !item.videoSrc && (
          <span className="text-[9px] text-accent-blue uppercase tracking-wider font-semibold">
            G-Drive Video
          </span>
        )}
      </div>
    </div>
  );
}

export function VideoPlayerModal({
  item,
  onClose,
}: {
  item: VideoItem | null;
  onClose: () => void;
}) {
  const [useDriveEmbed, setUseDriveEmbed] = useState(false);

  useEffect(() => {
    if (item && !item.videoSrc && item.driveUrl) {
      setUseDriveEmbed(true);
    } else {
      setUseDriveEmbed(false);
    }
  }, [item]);

  if (!item) return null;

  const driveId = extractDriveId(item.driveUrl);
  const driveEmbedUrl = driveId ? `https://drive.google.com/file/d/${driveId}/preview` : null;
  const driveDirectViewUrl = driveId ? `https://drive.google.com/file/d/${driveId}/view` : item.driveUrl;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md p-4 sm:p-6 flex items-center justify-center overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-video-title"
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-4xl w-full bg-[#111111] border border-white/[0.12] rounded-3xl p-6 sm:p-8 space-y-6 max-h-[92vh] overflow-y-auto my-auto shadow-2xl text-warm-white"
        >
          {/* Modal Header */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-warm-muted">
                <span>{item.brand}</span>
                {item.format && <span>· {item.format}</span>}
                {item.duration && <span>· {item.duration}</span>}
              </div>
              <h3 id="modal-video-title" className="text-2xl sm:text-3xl font-sans font-bold text-warm-white mt-1">
                {item.title}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-white/[0.05] hover:bg-white/[0.15] text-warm-white transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center shrink-0"
              aria-label="Close video player"
            >
              <FiX size={20} />
            </button>
          </div>

          {/* Video Player Display Container */}
          <div className="relative w-full rounded-2xl overflow-hidden bg-black border border-white/[0.08] flex items-center justify-center">
            {useDriveEmbed && driveEmbedUrl ? (
              <div className="w-full aspect-[16/9] sm:aspect-[16/10] relative">
                <iframe
                  src={driveEmbedUrl}
                  className="w-full h-full border-0"
                  allow="autoplay; encrypted-media; fullscreen"
                  allowFullScreen
                  title={item.title}
                />
              </div>
            ) : item.videoSrc ? (
              <div className="w-full max-h-[60vh] flex items-center justify-center bg-black">
                <video
                  src={item.videoSrc}
                  controls
                  autoPlay
                  playsInline
                  className="max-h-[60vh] w-auto max-w-full rounded-xl"
                  poster={item.poster}
                />
              </div>
            ) : driveEmbedUrl ? (
              <div className="w-full aspect-[16/9] relative">
                <iframe
                  src={driveEmbedUrl}
                  className="w-full h-full border-0"
                  allow="autoplay; encrypted-media; fullscreen"
                  allowFullScreen
                  title={item.title}
                />
              </div>
            ) : item.poster ? (
              <div className="relative w-full aspect-[16/9]">
                <Image src={item.poster} alt={item.title} fill className="object-contain p-4" />
              </div>
            ) : null}
          </div>

          {/* Toggle Player Mode & External Drive Link Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 pb-1 border-b border-white/[0.06] font-mono text-xs">
            <div className="flex items-center gap-2">
              {item.videoSrc && driveEmbedUrl && (
                <button
                  type="button"
                  onClick={() => setUseDriveEmbed(!useDriveEmbed)}
                  className="px-3 py-1.5 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-warm-white transition-colors"
                >
                  {useDriveEmbed ? "Switch to Direct HTML5 Player" : "Switch to Google Drive Embed"}
                </button>
              )}
            </div>

            {driveDirectViewUrl && (
              <a
                href={driveDirectViewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.08] hover:bg-white/[0.16] text-warm-white transition-all text-xs"
              >
                <span>Open in Google Drive</span>
                <FiExternalLink size={13} />
              </a>
            )}
          </div>

          {/* Storyboard / Concept Breakdown (if present) */}
          {(item.hook || item.body || item.cta || item.audioDirection) && (
            <div className="space-y-3 text-sm font-light leading-relaxed">
              {item.hook && (
                <div className="p-4 rounded-xl bg-dark-surface border border-white/[0.06] space-y-1">
                  <span className="font-mono text-xs uppercase tracking-wider text-warm-white font-semibold">
                    01 / Visual Hook (0–3s)
                  </span>
                  <p className="text-warm-gray text-xs font-mono">{item.hook}</p>
                </div>
              )}

              {item.body && (
                <div className="p-4 rounded-xl bg-dark-surface border border-white/[0.06] space-y-1">
                  <span className="font-mono text-xs uppercase tracking-wider text-warm-white font-semibold">
                    02 / Content Body &amp; Retention
                  </span>
                  <p className="text-warm-gray text-xs font-mono">{item.body}</p>
                </div>
              )}

              {item.cta && (
                <div className="p-4 rounded-xl bg-dark-surface border border-white/[0.06] space-y-1">
                  <span className="font-mono text-xs uppercase tracking-wider text-warm-white font-semibold">
                    03 / Call to Action
                  </span>
                  <p className="text-warm-gray text-xs font-mono">{item.cta}</p>
                </div>
              )}

              {item.audioDirection && (
                <div className="p-4 rounded-xl bg-dark-surface border border-white/[0.06] space-y-1">
                  <span className="font-mono text-xs uppercase tracking-wider text-warm-white font-semibold">
                    04 / Audio &amp; Sound Treatment
                  </span>
                  <p className="text-warm-gray text-xs font-mono">{item.audioDirection}</p>
                </div>
              )}
            </div>
          )}

          {/* General Context / Description */}
          {item.context && (
            <div className="p-4 rounded-xl bg-dark-surface border border-white/[0.06]">
              <p className="text-warm-gray text-xs font-mono leading-relaxed">{item.context}</p>
            </div>
          )}

          {/* Footer Metadata */}
          <div className="pt-2 border-t border-white/[0.06] flex flex-wrap items-center justify-between text-xs font-mono text-warm-muted gap-2">
            <span>Brand: {item.brand}</span>
            {item.tools && item.tools.length > 0 && (
              <span>Tools: {item.tools.join(" · ")}</span>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
