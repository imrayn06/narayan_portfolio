"use client"


import React from 'react'
import { motion, useInView } from 'framer-motion'

const metrics = [
  {
    id: 2,
    value: '6+',
    label: 'Months in Digital Marketing',
    description:
      'Experience in digital marketing and content creation with exposure to strategy, brand growth, SEO, and analytics.'
  },
  {
    id: 1,
    value: '3+',
    label: 'Years of Technical Experience',
    description:
      'Experience as a Software Engineer and Test Engineer at Wipro and Q3 Technologies, working across development and Quality Assurance.'
  },
  {
    id: 3,
    value: '10+',
    label: 'Skills Acquired',
    description:
      'Trained & Skilled in Content creation, Copy Writing, Meta Optimization, SEO, Local SEO, Keyword Research, Social Media Marketing, Design, and Analytics.'
  },
  {
    id: 4,
    value: '10+',
    label: 'Live Projects & Campaigns',
    description:
      'Worked on executing strategies, campaigns and initiatives to support brand visibility, engagement, and digital presence.'
  },
]


function KeyMetrix() {
  const ref = React.useRef<HTMLElement>(null);

  const isInView = useInView(ref, { once: false });



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
        className='font-black font-bold mb-12 text-6xl text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500 animate-gradient'
      >
        KEY METRICS
      </motion.h2>
      <div className='grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto gap-8'>
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.id}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            data-hover="true"
            className='flex flex-col items-center text-center p-8 rounded-3xl glass bg-white/10 hover:bg-white/30 dark:hover:bg-slate-800/30 transition-all shadow-lg hover:shadow-xl'>
            <motion.h3

              initial={{ scale: 0.5 }}
              animate={isInView ? { scale: 1 } : { scale: 0.5 }}
              transition={{ duration: 0.4, delay: 0.6 + index * 0.1, type: 'spring' }}
              className='text-6xl font-black font-mono text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500 animate-gradient mb-4'
            >
              {metric.value}
            </motion.h3>

            <motion.p

              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
              className='text-2xl font-mono font-bold mb-3'
            >
              {metric.label}
            </motion.p>
            <motion.p

              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
              className='text-slate-600 dark:text-gray-400 font-mono text-sm leading-relaxed'
            >
              {metric.description}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default KeyMetrix