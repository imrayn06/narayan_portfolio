"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiLinkedin, FiFileText } from 'react-icons/fi'
import Link from 'next/link'

function ContactSection() {
  return (
    <section id='contact' className='py-20 md:py-32 text-slate-900 dark:text-white font-sans max-w-[1200px] mx-auto px-4'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className='text-center max-w-4xl mx-auto'
      >
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='text-4xl md:text-7xl font-black text-slate-900 dark:text-white mb-6'
        >
          Let's Build <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500'>Something</span> Impactful
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className='text-base md:text-xl text-slate-600 dark:text-gray-400 mb-12 md:mb-16 max-w-2xl mx-auto leading-relaxed'
        >
          Looking for someone who can combine strategy, creativity, community engagement, client coordination, and data-driven marketing to grow your brand? Let's connect.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className='flex flex-col sm:flex-row justify-center items-center gap-4 mb-20 max-w-xs sm:max-w-none mx-auto w-full px-4 sm:px-0'
        >
          <a href="mailto:duttarayan3@gmail.com" className="w-full sm:w-auto block">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 text-white font-semibold text-lg shadow-lg hover:shadow-purple-500/30 hover:shadow-xl transition-all min-h-[48px]"
            >
              <FiMail size={20} />
              Send an Email
            </motion.button>
          </a>

          <a href="https://www.linkedin.com/in/im-rayn/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto block">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-full bg-[#0A66C2] text-white font-semibold text-lg shadow-lg hover:shadow-blue-600/30 hover:shadow-xl transition-all min-h-[48px]"
            >
              <FiLinkedin size={20} />
              LinkedIn
            </motion.button>
          </a>

          <a
            href="https://drive.google.com/file/d/1SIgneDnDqqFIYPjAzUY2wXyBdhGGrPp6/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto block"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-full bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 font-semibold text-lg shadow-lg hover:shadow-xl transition-all min-h-[48px]"
            >
              <FiFileText size={20} />
              Download Resume
            </motion.button>
          </a>

          <Link href="/case-studies" className="w-full sm:w-auto block">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 border border-slate-200 dark:border-slate-700 font-semibold text-lg shadow-lg hover:shadow-xl transition-all min-h-[48px]"
            >
              <FiFileText size={20} />
              View Portfolio
            </motion.button>
          </Link>
        </motion.div>

        {/* Existing contact info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className='glass p-8 rounded-3xl space-y-6 max-w-md mx-auto text-center'
        >
          <div className='space-y-1'>
            <p className='text-sm text-purple-400 font-semibold uppercase tracking-wider'>Phone</p>
            <a href="tel:9073277478" className='text-xl font-bold text-slate-900 hover:text-purple-600 dark:text-white dark:hover:text-purple-300 transition duration-300 flex items-center justify-center gap-2'>
              +91 907-327-7478
            </a>
          </div>
          <div className='space-y-1'>
            <p className='text-sm text-purple-400 font-semibold uppercase tracking-wider'>Email</p>
            <a href="mailto:duttarayan3@gmail.com" className='text-xl font-bold text-slate-900 hover:text-purple-600 dark:text-white dark:hover:text-purple-300 transition duration-300 flex items-center justify-center gap-2'>
              duttarayan3@gmail.com
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default ContactSection