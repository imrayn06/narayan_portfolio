"use client"


import React from 'react'
import { motion, useInView } from 'framer-motion'

const metrics = [
  {
    id: 1,
    value: '2.5',
    label: 'Years of Experience',
    description: 'Blending testing expertise with a passion for full-stack development to grow as a developer.'
  },
  {
    id: 2,
    value: '400+',
    label: 'DSA Problems Solved',
    description: 'Building a strong foundation in problem-solving through consistent practice.'
  },
  {
    id: 3,
    value: '1200+',
    label: 'Hours of Coding',
    description: 'Investing time in coding to enhance my skills and learn new technologies.'
  },
  {
    id: 4,
    value: '6+',
    label: 'Projects Completed',
    description: 'Gaining hands-on experience by creating beginner-friendly yet challenging projects.'
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
      className='container mx-auto px-4 py-32 text-white'
    >
      <motion.h2

        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className='font-mono font-bold mb-12 text-6xl'
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
              className='text-gray-400 font-mono mb-2'
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