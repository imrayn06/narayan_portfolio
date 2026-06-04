"use client"


import React from 'react'
import { motion, useInView } from 'framer-motion'

const metrics = [
  {
    id: 1,
    value: '3+',
    label: 'Years of Technical Experience',
    description:
      'Experience as a Software Engineer and Test Engineer at Wipro and Q3 Technologies, working across development and Quality Assurance.'
  },
  {
    id: 2,
    value: '6+',
    label: 'Months in Digital Marketing',
    description:
      'Experience in digital marketing and content creation with exposure to strategy, brand growth, SEO, and analytics.'
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
      className='container mx-auto px-4 py-32 text-slate-900 dark:text-white'
    >
      <motion.h2

        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className='font-black font-bold mb-12 text-6xl'
      >
        KEY METRICS
      </motion.h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.id}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            className='flex flex-col'
          >
            <motion.h3

              initial={{ scale: 0.5 }}
              animate={isInView ? { scale: 1 } : { scale: 0.5 }}
              transition={{ duration: 0.4, delay: 0.6 + index * 0.1, type: 'spring' }}
              className='text-5xl font-bold font-mono text-purple-300 mb-2'
            >
              {metric.value}
            </motion.h3>

            <motion.p

              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
              className='text-xl font-mono font-semibold mb-2'
            >
              {metric.label}
            </motion.p>
            <motion.p

              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
              className='text-slate-600 dark:text-gray-400 font-mono mb-2'
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