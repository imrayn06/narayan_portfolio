"use client";

import React from "react";
import { motion } from "framer-motion";

interface RobotMascotProps {
  variant?: "hero" | "timeline" | "resume" | "notfound";
  className?: string;
  size?: number;
}

export const RobotMascot: React.FC<RobotMascotProps> = ({
  variant = "hero",
  className = "",
  size = 48,
}) => {
  return (
    <div
      className={`inline-flex items-center justify-center select-none ${className}`}
      aria-hidden="true"
    >
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-warm-white/90 hover:text-warm-white transition-colors"
      >
        {/* Antenna */}
        <line
          x1="32"
          y1="8"
          x2="32"
          y2="16"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle
          cx="32"
          cy="6"
          r="2.5"
          fill="currentColor"
          className="opacity-90"
        />

        {/* Head */}
        <rect
          x="18"
          y="16"
          width="28"
          height="20"
          rx="4"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="var(--surface-1)"
        />

        {/* Ears / Sensors */}
        <line
          x1="14"
          y1="26"
          x2="18"
          y2="26"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <line
          x1="46"
          y1="26"
          x2="50"
          y2="26"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* Eyes based on variant */}
        {variant === "hero" && (
          <>
            <circle cx="26" cy="25" r="2.5" fill="currentColor" />
            <circle cx="38" cy="25" r="2.5" fill="currentColor" />
            <line
              x1="28"
              y1="31"
              x2="36"
              y2="31"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              opacity="0.6"
            />
          </>
        )}

        {variant === "timeline" && (
          <>
            <circle cx="27" cy="26" r="2" fill="currentColor" />
            <circle cx="39" cy="26" r="2" fill="currentColor" />
            <path
              d="M30 31L32 33L34 31"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.8"
            />
          </>
        )}

        {variant === "resume" && (
          <>
            <rect x="24" y="24" width="4" height="2" rx="1" fill="currentColor" />
            <rect x="36" y="24" width="4" height="2" rx="1" fill="currentColor" />
            <line
              x1="28"
              y1="30"
              x2="36"
              y2="30"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              opacity="0.7"
            />
          </>
        )}

        {variant === "notfound" && (
          <>
            <circle cx="26" cy="25" r="2" fill="currentColor" />
            <path
              d="M37 23C37.5 22.5 39 22.5 39.5 23.5C39.8 24.5 38.5 25.2 38.5 26"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            <circle cx="38.5" cy="28" r="0.8" fill="currentColor" />
            <path
              d="M28 31Q32 33 36 31"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              opacity="0.7"
            />
          </>
        )}

        {/* Neck connector */}
        <line
          x1="32"
          y1="36"
          x2="32"
          y2="40"
          stroke="currentColor"
          strokeWidth="2"
        />

        {/* Torso / Body */}
        <rect
          x="20"
          y="40"
          width="24"
          height="16"
          rx="3"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="var(--surface-2)"
        />

        {/* Chest details */}
        {variant === "resume" ? (
          <>
            <rect
              x="26"
              y="44"
              width="12"
              height="8"
              rx="1"
              stroke="currentColor"
              strokeWidth="1"
              fill="var(--surface-1)"
            />
            <line x1="28" y1="47" x2="36" y2="47" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
            <line x1="28" y1="49" x2="33" y2="49" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
          </>
        ) : (
          <>
            <line x1="26" y1="46" x2="38" y2="46" stroke="currentColor" strokeWidth="1" opacity="0.4" />
            <circle cx="32" cy="50" r="1.5" fill="var(--accent-blue)" className="opacity-90" />
          </>
        )}
      </motion.svg>
    </div>
  );
};

export default RobotMascot;
