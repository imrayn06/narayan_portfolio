"use client"
import Link from "next/link"
import React, { useState } from "react"
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { FiSun, FiMoon } from "react-icons/fi"
import { useTheme } from "./ThemeContext"
import { motion, AnimatePresence } from "framer-motion"

const navlinks = [
  { title: "About", path: "#about" },
  { title: "Experience", path: "#experience" },
  { title: "Portfolio", path: "#portfolio" },
  { title: "Skills", path: "#skills" },
  { title: "Contact", path: "#contact" }
]

export const Navbar = () => {
  const [nav, setNav] = useState(false)
  const { theme, toggleTheme } = useTheme()

  const toggleNav = () => {
    setNav(!nav)
  }

  return (
    <div className="z-50 fixed top-0 left-0 w-full text-slate-800 dark:text-white font-bold">
      {/* Mobile Top Bar (Sticky with blur background) */}
      <div className="flex md:hidden items-center justify-between px-6 py-4 w-full bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md border-b border-purple-200/20 dark:border-white/10 shadow-sm z-50 relative">
        <Link href="#home" className="text-xl font-black bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          SD
        </Link>
        <div className="flex items-center gap-4">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-full hover:bg-purple-100 dark:hover:bg-white/10 transition-colors text-purple-700 dark:text-slate-200 flex items-center justify-center min-w-[44px] min-h-[44px]"
          >
            {theme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={toggleNav}
            aria-label="Toggle menu"
            className="p-2 rounded-xl text-purple-700 dark:text-white/70 border border-purple-200/70 dark:border-white/20 hover:bg-purple-100 dark:hover:bg-white/10 transition-colors flex items-center justify-center min-w-[44px] min-h-[44px]"
          >
            {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Desktop Navbar */}
      <div className="border border-purple-200/70 dark:border-white/20 mt-8 bg-white/80 dark:bg-[#0a0a0a]/40 backdrop-blur-3xl rounded-3xl hidden md:flex items-center justify-between p-2 max-w-[600px] mx-auto px-6 shadow-lg shadow-purple-200/30 dark:shadow-none">
        <ul className="flex flex-row p-2 space-x-8">
          {navlinks.map((link, index) => (
            <li key={index}>
              <Link href={link.path} className="transform hover:text-purple-700 dark:hover:text-white/50 transition-all duration-300 ease-in-out font-sans text-slate-900 dark:text-white">
                {link.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Theme Toggle Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="p-2 rounded-full hover:bg-purple-100 dark:hover:bg-white/10 transition-colors text-purple-700 dark:text-slate-200 flex items-center justify-center min-w-[44px] min-h-[44px]"
        >
          <motion.div
            key={theme}
            initial={{ scale: 0.5, rotate: -90, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            {theme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
          </motion.div>
        </motion.button>
      </div>

      {/* Mobile Nav Menu Drawer */}
      <AnimatePresence>
        {nav && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed left-0 top-[65px] w-full bg-white/95 dark:bg-[#0a0a0a]/95 backdrop-blur-lg border-b border-purple-200/20 dark:border-white/10 z-40 md:hidden shadow-lg"
          >
            <ul className="flex flex-col items-center py-8 space-y-6 text-xl">
              {navlinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.path}
                    onClick={toggleNav}
                    className="block transform hover:text-purple-600 dark:hover:text-white/50 transition-all duration-300 ease-in-out py-2 px-6 min-w-[44px] min-h-[44px] flex items-center justify-center"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
