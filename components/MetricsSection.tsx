"use client"

import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView, animate } from 'framer-motion'

const metrics = [
  { id: 1, value: 4, suffix: '+', label: 'Years of Experience' },
  { id: 2, value: 10, suffix: '+', label: 'Campaigns Strategized & Executed' },
  { id: 3, value: 100, suffix: '+', label: 'Content Pieces Curated' },
  { id: 4, value: 5, suffix: '+', label: 'Brands Collaborated With' },
  { id: 5, value: 3, suffix: '+', label: 'Communities Engaged & Managed' },
]

function AnimatedCounter({ from, to, duration = 2, suffix = '' }: { from: number, to: number, duration?: number, suffix?: string }) {
  const nodeRef = useRef<HTMLSpanElement>(null)
  const inView = useInView(nodeRef, { once: true, margin: "-100px" })

  useEffect(() => {
    if (inView && nodeRef.current) {
      const controls = animate(from, to, {
        duration,
        ease: "easeOut",
        onUpdate(value) {
          if (nodeRef.current) {
            nodeRef.current.textContent = Math.floor(value).toString() + suffix;
          }
        }
      });
      return () => controls.stop();
    }
  }, [from, to, duration, inView, suffix]);

  return <span ref={nodeRef}>{from}{suffix}</span>
}

function MetricsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      className='container mx-auto px-4 py-16 md:py-24 text-slate-900 dark:text-white'
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className='font-black font-sans mb-4 text-4xl md:text-5xl lg:text-6xl text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500 animate-gradient'
      >
        KEY HIGHLIGHTS
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center text-slate-500 dark:text-gray-400 text-lg md:text-xl font-medium mb-12"
      >
        Meta • Instagram • LinkedIn
      </motion.p>

      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 max-w-6xl mx-auto gap-6 lg:gap-8'>
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.id}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            data-hover="true"
            className='flex flex-col items-center justify-center text-center p-6 rounded-3xl glass bg-white/10 hover:bg-white/30 dark:hover:bg-slate-800/30 transition-all shadow-lg hover:shadow-xl border border-white/20 dark:border-white/10'
          >
            <motion.h3
              initial={{ scale: 0.5 }}
              animate={isInView ? { scale: 1 } : { scale: 0.5 }}
              transition={{ duration: 0.4, delay: 0.6 + index * 0.1, type: 'spring' }}
              className='text-4xl md:text-5xl font-black font-sans text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500 animate-gradient mb-2'
            >
              <AnimatedCounter from={0} to={metric.value} suffix={metric.suffix} />
            </motion.h3>

            <p className='text-sm md:text-base font-sans font-bold text-slate-700 dark:text-gray-200 mt-2'>
              {metric.label}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default MetricsSection