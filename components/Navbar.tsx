"use client"
import Link from "next/link"
import React, { useState } from "react"
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { FiSun, FiMoon } from "react-icons/fi"
import { useTheme } from "./ThemeContext"
import { motion } from "framer-motion"

const navlinks = [
  { title: "About", path: "#about" },
  { title: "Portfolio", path: "#portfolio" },
  { title: "Stack", path: "#stack" },
  { title: "Contact", path: "#contact" }
]

export const Navbar = () => {
  const [nav, setNav] = useState(false)
  const { theme, toggleTheme } = useTheme()

  const toggleNav = () => {
    setNav(!nav)
  }

  return (
    <div className="z-50 fixed justify-center w-full text-slate-800 dark:text-white font-bold">
      {/* Desktop Navbar */}
      <div className="border border-purple-200/70 dark:border-white/20 mt-8 bg-white/80 dark:bg-[#0a0a0a]/40 backdrop-blur-3xl rounded-3xl hidden md:flex items-center justify-between p-2 max-w-[500px] mx-auto px-6 shadow-lg shadow-purple-200/30 dark:shadow-none">

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
          className="p-2 rounded-full hover:bg-purple-100 dark:hover:bg-white/10 transition-colors text-purple-700 dark:text-slate-200 flex items-center justify-center"
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

      {/* Mobile Nav Button */}
      <div
        onClick={toggleNav}
        className="md:hidden absolute top-5 right-3 border rounded-xl z-50 text-purple-700 dark:text-white/70 border-purple-200/70 dark:border-white/70 p-2 bg-white/90 dark:bg-black/50 backdrop-blur-md cursor-pointer flex items-center gap-2"
      >
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={(e) => {
            e.stopPropagation();
            toggleTheme();
          }}
          aria-label="Toggle theme"
          className="p-1 rounded-full hover:bg-purple-100 dark:hover:bg-white/10 transition-colors text-purple-700 dark:text-slate-200"
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
        <motion.div whileTap={{ scale: 0.9 }}>
          {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </motion.div>
      </div>

      {/* Mobile Nav Menu */}
      <div
        className={`fixed left-0 top-0 w-full h-full bg-white dark:bg-black/95 transform transition-transform duration-300
    ${nav ? 'translate-x-0' : '-translate-x-full'}`}>

        <ul className="flex flex-col items-center justify-center space-y-8 h-full text-2xl">
          {navlinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.path}
                onClick={toggleNav}
                className="transform hover:text-purple-600 dark:hover:text-white/50 transition-all duration-300 ease-in-out"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div >

    </div>
  )
}
