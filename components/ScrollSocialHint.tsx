"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollSocialHint() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY + window.innerHeight;
      const total = document.documentElement.scrollHeight;
      setVisible(scrolled >= total - 200);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="social-hint"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.85 }}
          transition={{ type: "spring", stiffness: 180, damping: 18 }}
          className="fixed z-50 pointer-events-none select-none flex flex-col items-center"
          style={{
            /* sits in the blank right half, at the same height as the contact card */
            right: "3%",
            bottom: "140px",
            width: "500px",
          }}
        >
          {/* Big handwritten text */}
          <motion.span
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-purple-400 dark:text-purple-300 text-center block"
            style={{
              fontFamily: "'Segoe Script', 'Caveat', 'Comic Sans MS', cursive",
              fontSize: "2.6rem",
              lineHeight: 1.3,
              transform: "rotate(-2deg)",
              textShadow: "0 0 24px rgba(167,139,250,0.5)",
            }}
          >
            check out<br />my socials!
          </motion.span>

          {/*
            Arrow: starts from bottom-center of text, curves down-left
            toward the LinkedIn icon which sits at ~center of viewport.
            The container right edge is at ~3% from right, width 500px.
            So center of this container = right 3% + 250px from right edge
            = viewport_width - (0.03*vw) - 250px from left
            LinkedIn is at ~50% of viewport from left.
            So the arrow needs to sweep to the left significantly.
          */}
          <svg
            width="100%"
            height="130"
            viewBox="0 0 500 130"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Curve: from center-top (250,0) sweeps down-left to ~(80,125) */}
            <motion.path
              d="M 250 0 C 240 30, 150 80, 80 122"
              stroke="#a78bfa"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.25 }}
            />
            {/* Arrowhead */}
            <motion.path
              d="M 80 122 L 96 108 M 80 122 L 95 130"
              stroke="#a78bfa"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.2 }}
            />
          </svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
