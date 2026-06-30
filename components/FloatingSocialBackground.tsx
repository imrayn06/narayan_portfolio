"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  FaInstagram, FaFacebook, FaLinkedin, FaYoutube, 
  FaTwitter, FaHashtag, FaHeart 
} from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";

const floatingItems = [
  { icon: FaInstagram, top: "12%", left: "8%", size: 36, duration: 9, delay: 0 },
  { icon: FaFacebook, top: "28%", left: "82%", size: 30, duration: 11, delay: 1 },
  { icon: FaLinkedin, top: "68%", left: "14%", size: 34, duration: 13, delay: 2 },
  { icon: FaYoutube, top: "82%", left: "78%", size: 38, duration: 10, delay: 0.5 },
  { icon: FaTwitter, top: "42%", left: "6%", size: 26, duration: 8, delay: 3 },
  { icon: FaHashtag, top: "18%", left: "64%", size: 28, duration: 12, delay: 1.5 },
  { icon: FaHeart, top: "58%", left: "86%", size: 24, duration: 7, delay: 4 },
  { icon: FiShare2, top: "86%", left: "28%", size: 28, duration: 11, delay: 2.5 },
  { icon: FaLinkedin, top: "34%", left: "48%", size: 26, duration: 14, delay: 5 },
  { icon: FaInstagram, top: "52%", left: "68%", size: 32, duration: 9, delay: 3.5 },
];

export default function FloatingSocialBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-[0.06] select-none"
    >
      {floatingItems.map((item, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{ top: item.top, left: item.left }}
          animate={{
            y: [0, -20, 0],
            x: [0, 8, -8, 0],
          }}
          transition={{
            duration: item.duration,
            delay: item.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <item.icon size={item.size} className="text-slate-800 dark:text-slate-200" />
        </motion.div>
      ))}
    </div>
  );
}
