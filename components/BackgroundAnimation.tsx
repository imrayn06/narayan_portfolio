"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useTheme } from "@/components/ThemeContext";

import CanvasStarfield from "@/components/CanvasStarfield";

/* ─────────────────────────────────────────
   Nebula blobs (fixed positions)
───────────────────────────────────────── */
const nebulas = [
  { cx: "15%", cy: "20%", rx: "22%", ry: "18%", delay: 0 },
  { cx: "75%", cy: "12%", rx: "18%", ry: "20%", delay: 3 },
  { cx: "85%", cy: "70%", rx: "20%", ry: "16%", delay: 6 },
  { cx: "10%", cy: "80%", rx: "16%", ry: "18%", delay: 9 },
  { cx: "50%", cy: "50%", rx: "24%", ry: "22%", delay: 4 },
];

/* ─────────────────────────────────────────
   Shooting stars
───────────────────────────────────────── */
const shooters = Array.from({ length: 5 }, (_, i) => ({
  id: i,
  top: Math.random() * 50,
  delay: i * 4 + Math.random() * 2,
  duration: 1.2 + Math.random() * 0.8,
}));

export default function BackgroundAnimation() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const controls = useAnimation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  /* Orbit the celestial body */
  useEffect(() => {
    controls.start({
      x: ["-10vw", "90vw", "110vw"],
      y: ["10vh", "5vh", "15vh"],
      transition: { duration: 60, ease: "linear", repeat: Infinity },
    });
  }, [controls]);

  if (!mounted) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* ── Interactive Canvas Stars ── */}
      {isDark && <CanvasStarfield />}

      {/* ── SVG canvas for nebulae & shooting stars ── */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Nebula gradients – dark */}
          <radialGradient id="neb0d" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#6d28d9" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#6d28d9" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="neb1d" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1d4ed8" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="neb2d" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#9333ea" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#9333ea" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="neb3d" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.10" />
            <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="neb4d" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
          </radialGradient>

          {/* Nebula gradients – light */}
          <radialGradient id="neb0l" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f472b6" stopOpacity="0.20" />
            <stop offset="100%" stopColor="#f472b6" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="neb1l" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#a78bfa" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="neb2l" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fb923c" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#fb923c" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="neb3l" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.10" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="neb4l" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f9a8d4" stopOpacity="0.10" />
            <stop offset="100%" stopColor="#f9a8d4" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Nebulae */}
        {nebulas.map((n, i) => (
          <motion.ellipse
            key={i}
            cx={n.cx}
            cy={n.cy}
            rx={n.rx}
            ry={n.ry}
            fill={`url(#neb${i}${isDark ? "d" : "l"})`}
            animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.08, 1] }}
            transition={{
              duration: 10 + i * 2,
              delay: n.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}



        {/* Shooting stars – dark only */}
        {isDark &&
          shooters.map((sh) => (
            <motion.line
              key={sh.id}
              x1="-2%"
              y1={`${sh.top}%`}
              x2="0%"
              y2={`${sh.top}%`}
              stroke="white"
              strokeWidth="1.5"
              strokeOpacity="0.8"
              animate={{
                x1: ["-2%", "105%"],
                x2: ["0%", "107%"],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: sh.duration,
                delay: sh.delay,
                repeat: Infinity,
                repeatDelay: 12 + sh.id * 3,
                ease: "easeOut",
              }}
            />
          ))}
      </svg>

      {/* ── Orbiting Moon (dark) or Sun (light) ── */}
      {isDark ? (
        /* MOON */
        <motion.div
          className="absolute"
          style={{ top: "8vh", left: 0 }}
          animate={{
            x: ["-80px", "calc(100vw + 80px)"],
            y: ["0px", "40px", "0px"],
          }}
          transition={{ duration: 80, ease: "linear", repeat: Infinity }}
        >
          <div className="relative w-14 h-14">
            {/* Moon body */}
            <div
              className="w-14 h-14 rounded-full"
              style={{
                background: "radial-gradient(circle at 35% 35%, #f5f0dc, #c8c0a0)",
                boxShadow:
                  "0 0 30px 10px rgba(245,240,200,0.30), 0 0 80px 30px rgba(245,240,200,0.10)",
              }}
            />
            {/* Moon craters */}
            <div
              className="absolute rounded-full"
              style={{ width: 10, height: 10, top: 12, left: 18, background: "rgba(160,150,120,0.40)" }}
            />
            <div
              className="absolute rounded-full"
              style={{ width: 6, height: 6, top: 28, left: 10, background: "rgba(160,150,120,0.30)" }}
            />
            <div
              className="absolute rounded-full"
              style={{ width: 7, height: 7, top: 22, left: 30, background: "rgba(160,150,120,0.35)" }}
            />
            {/* Moon shadow (crescent) */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "radial-gradient(circle at 70% 40%, transparent 42%, rgba(10,10,30,0.55) 60%)",
              }}
            />
          </div>
        </motion.div>
      ) : (
        /* SUN */
        <motion.div
          className="absolute"
          style={{ top: "6vh", left: 0 }}
          animate={{
            x: ["-80px", "calc(100vw + 80px)"],
            y: ["0px", "30px", "0px"],
          }}
          transition={{ duration: 90, ease: "linear", repeat: Infinity }}
        >
          <motion.div
            className="relative w-16 h-16"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {/* Sun glow */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: "radial-gradient(circle, #fef08a 30%, #fb923c 70%, transparent 100%)",
                boxShadow:
                  "0 0 40px 15px rgba(251,146,60,0.40), 0 0 100px 50px rgba(254,240,138,0.15)",
                filter: "blur(1px)",
              }}
            />
            {/* Sun core */}
            <div
              className="absolute rounded-full"
              style={{
                inset: 6,
                background: "radial-gradient(circle at 40% 35%, #fff7ae, #fde047 55%, #facc15)",
                boxShadow: "inset 0 0 12px rgba(251,146,60,0.5)",
                filter: "none",
              }}
            />
            {/* Sun rays */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
              <div
                key={deg}
                className="absolute"
                style={{
                  width: 3,
                  height: 10,
                  background: "linear-gradient(to bottom, #fde047, transparent)",
                  top: "50%",
                  left: "50%",
                  transformOrigin: "50% 38px",
                  transform: `translateX(-50%) rotate(${deg}deg)`,
                  borderRadius: 2,
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      )}

      {/* ── Light mode: soft cloud wisps ── */}
      {!isDark && (
        <>
          {[
            { top: "15%", left: "5%", delay: 0, w: 220 },
            { top: "35%", left: "60%", delay: 5, w: 180 },
            { top: "65%", left: "20%", delay: 10, w: 200 },
          ].map((c, i) => (
            <motion.div
              key={i}
              className="absolute opacity-25"
              style={{ top: c.top, left: c.left }}
              animate={{ x: [0, 30, 0], opacity: [0.2, 0.35, 0.2] }}
              transition={{ duration: 14, delay: c.delay, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg width={c.w} height={70} viewBox="0 0 220 70" fill="none">
                <ellipse cx="110" cy="45" rx="110" ry="25" fill="white" fillOpacity="0.6" />
                <ellipse cx="75" cy="35" rx="65" ry="30" fill="white" fillOpacity="0.7" />
                <ellipse cx="145" cy="38" rx="55" ry="26" fill="white" fillOpacity="0.65" />
                <ellipse cx="110" cy="28" rx="45" ry="22" fill="white" fillOpacity="0.8" />
              </svg>
            </motion.div>
          ))}
        </>
      )}
    </div>
  );
}
