"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { 
  SiGoogleanalytics, SiCanva, SiFigma, SiNotion, SiWordpress, SiGoogle
} from 'react-icons/si'
import { FaFacebook, FaRobot, FaVideo, FaFileExcel } from 'react-icons/fa'

const strategicSkills = [
  { name: 'Content Strategy', level: 90 },
  { name: 'Brand Strategy', level: 85 },
  { name: 'Community Management', level: 95 },
  { name: 'Consumer Psychology', level: 80 },
  { name: 'Campaign Planning', level: 85 },
  { name: 'Client Servicing', level: 90 },
  { name: 'Media Coordination', level: 85 },
  { name: 'Competitor Analysis', level: 80 },
  { name: 'Social Listening', level: 85 },
  { name: 'Marketing Analytics', level: 75 },
];

const marketingTools = [
  { name: 'Meta Business Suite', icon: FaFacebook, color: '#1877F2' },
  { name: 'Google Analytics', icon: SiGoogleanalytics, color: '#F97316' },
  { name: 'Canva', icon: SiCanva, color: '#00C4CC' },
  { name: 'CapCut', icon: FaVideo, color: '#000000', darkColor: '#FFFFFF' },
  { name: 'ChatGPT', icon: FaRobot, color: '#10A37F' },
  { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
  { name: 'Notion', icon: SiNotion, color: '#000000', darkColor: '#FFFFFF' },
  { name: 'WordPress', icon: SiWordpress, color: '#21759B' },
  { name: 'Excel', icon: FaFileExcel, color: '#217346' },
  { name: 'Looker Studio', icon: SiGoogle, color: '#4285F4' },
];

function SkillBar({ name, level, index }: { name: string, level: number, index: number }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-semibold text-slate-700 dark:text-gray-300">{name}</span>
      </div>
      <div className="h-2 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
        />
      </div>
    </div>
  )
}

function TechStackSection() {
  return (
    <section id='skills' className='py-20 md:py-32 font-sans'>
      <div className='max-w-7xl mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className='text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-slate-800 dark:text-gray-100'>
            Tools & <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">Skills</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-gray-400 max-w-2xl mx-auto">
            The strategic frameworks and technical platforms I use to drive marketing success.
          </p>
        </motion.div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20'>
          
          {/* Strategic Skills */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-slate-800/50 p-8 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-700/50"
          >
            <h3 className="text-2xl font-bold mb-8 text-slate-800 dark:text-gray-200 flex items-center">
              Strategic Skills
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
              <div className="space-y-2">
                {strategicSkills.slice(0, 5).map((skill, index) => (
                  <SkillBar key={index} name={skill.name} level={skill.level} index={index} />
                ))}
              </div>
              <div className="space-y-2">
                {strategicSkills.slice(5).map((skill, index) => (
                  <SkillBar key={index + 5} name={skill.name} level={skill.level} index={index + 5} />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Marketing Tools */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-8 text-slate-800 dark:text-gray-200 flex items-center justify-center lg:justify-start">
              Marketing Tools
            </h3>
            <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
              {marketingTools.map((tool, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className='flex flex-col items-center justify-center p-4 bg-white dark:bg-slate-800/80 rounded-2xl shadow-md border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-all group'
                >
                  <div className='mb-3 text-3xl sm:text-4xl transition-transform group-hover:scale-110' style={{ color: tool.color }}>
                    <tool.icon className={`dark:text-[${tool.darkColor || tool.color}] text-[${tool.color}]`} />
                  </div>
                  <p className='text-slate-700 dark:text-gray-300 font-semibold text-xs text-center'>{tool.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default TechStackSection