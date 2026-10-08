"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiArrowUpRight, FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "./ThemeContext";

const navLinks = [
  { title: "Work", href: "/work" },
  { title: "Creative", href: "/creative" },
  { title: "Motion", href: "/motion" },
  { title: "Experience", href: "/experience" },
  { title: "About", href: "/about" },
  { title: "Resume", href: "/resume" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 py-5 sm:py-6 transition-all duration-300 pointer-events-none ${
        isOpen ? "mix-blend-normal bg-dark-bg/95 md:bg-transparent" : "mix-blend-difference"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between pointer-events-auto text-white">
        {/* Brand Logotype (Inverts dynamically against background) */}
        <Link
          href="/"
          className="group flex items-center gap-3 font-mono text-xs tracking-[0.25em] uppercase text-white hover:opacity-75 transition-opacity"
        >
          <span className="w-2 h-2 rounded-full bg-white" />
          <span className="font-bold">SHENEHASHIS</span>
        </Link>

        {/* Desktop Nav (Inverts per-letter over whatever is beneath) */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-7"
        >
          <div className="flex items-center gap-6 text-xs font-mono tracking-[0.18em] uppercase">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative py-1 transition-opacity ${
                    isActive
                      ? "text-white font-bold"
                      : "text-white font-medium hover:opacity-75"
                  }`}
                >
                  {link.title}
                  {isActive && (
                    <motion.span
                      layoutId="navUnderline"
                      className="absolute -bottom-1 left-0 w-full h-[1.5px] bg-white"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="h-4 w-[1px] bg-white/50" />

          {/* Theme Switcher Toggle (Inverts dynamically) */}
          <button
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="p-2 rounded-full border border-white/60 hover:bg-white/20 text-white transition-all flex items-center justify-center min-w-[36px] min-h-[36px]"
          >
            {theme === "dark" ? (
              <FiSun size={15} />
            ) : (
              <FiMoon size={15} />
            )}
          </button>

          {/* Contact CTA (Inverts dynamically) */}
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 text-xs font-mono tracking-[0.18em] uppercase text-white px-3.5 py-1.5 rounded-full border border-white/70 hover:bg-white/20 transition-all font-semibold"
          >
            <span>Contact</span>
            <FiArrowUpRight />
          </Link>
        </nav>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center gap-2">
          {/* Mobile Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg border border-white/60 text-white"
          >
            {theme === "dark" ? (
              <FiSun size={18} />
            ) : (
              <FiMoon size={18} />
            )}
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
            className="text-white p-2 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg border border-white/60 hover:bg-white/20 transition-colors"
          >
            {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Uses regular stacking so the full menu is opaque & readable) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[65px] bg-dark-surface border-b border-dark-borderSubtle px-6 py-8 md:hidden shadow-2xl mix-blend-normal pointer-events-auto text-warm-white"
          >
            <div className="flex flex-col space-y-5 text-left font-mono">
              <span className="text-[10px] tracking-[0.25em] uppercase text-warm-muted pb-2 border-b border-dark-borderSubtle">
                Index
              </span>

              {navLinks.map((link, idx) => {
                const isActive = pathname.startsWith(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between py-2 text-sm uppercase tracking-[0.2em] transition-colors"
                  >
                    <span
                      className={
                        isActive
                          ? "text-warm-white font-bold"
                          : "text-warm-gray hover:text-warm-white"
                      }
                    >
                      0{idx + 1} / {link.title}
                    </span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
                    )}
                  </Link>
                );
              })}

              <div className="pt-4 mt-2 border-t border-dark-borderSubtle flex items-center justify-between">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center py-3 text-xs tracking-[0.2em] uppercase font-mono btn-primary font-semibold rounded-full"
                >
                  Get In Touch →
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
