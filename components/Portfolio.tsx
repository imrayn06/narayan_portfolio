"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import { useMotionTemplate, useMotionValue, motion, animate, AnimatePresence } from "motion/react"
import { useTheme } from "./ThemeContext"

const projects = [
  {
    id: 1,
    date: "Jan 2026",
    title: "Social Media Marketing Project",
    description:
      "Planned and executed social media content strategies including post creatives, captions, and hashtag research using Canva. Focused on improving reach, engagement, and brand consistency.",
    images: [
      "https://drive.google.com/uc?export=view&id=1NZu1XFHiMNzE_opIjXwZPOYom5Y-_1CI",
      "https://drive.google.com/uc?export=view&id=17oZDjhdY7WJaXLV1KuP0PTMY4BCTzhUC",
      "https://drive.google.com/uc?export=view&id=1G3yWh-G-oqXBi4IARKah2bHSmuRka2VP",
      "https://drive.google.com/uc?export=view&id=1wNAR9V74AEfMw81Rw4qPq4xxO9mXwYQY",

    ],
    links: [
      {
        label: "Drive Folder",
        url: "https://drive.google.com/drive/folders/1Xhi2Gm97evckCWL1QeLAc-MSMXaB4xJS?usp=sharing",
      },
    ],
  },
  {
    id: 2,
    date: "Dec 2025",
    title: "SEO Practice Project",
    description:
      "Performed keyword research using Google Keyword Planner, Ubersuggest, and SEMrush. Optimized pages with on-page SEO including meta tags, headings, and internal linking.",
    images: [
      "https://drive.google.com/uc?export=view&id=1cjD_wxk2Tq4A4ptDLuFBSWLqiz5yueie",
      "https://drive.google.com/uc?export=view&id=1QZ4sXzM99MYm2m26TJpMKW2kwS2uLRfh",
      "https://drive.google.com/uc?export=view&id=145pVk4HvXDmUlrrH1IAniyGu8JncgIWO",
      "https://drive.google.com/uc?export=view&id=1kAhzPPgNgqzl4Lm9Qkp_2Zl-vjnmHpFn"
    ],
    links: [
      {
        label: "SEO Document",
        url: "https://drive.google.com/drive/folders/1BiwkVnjJnDDMa1YaioWJyvjn4YLDWW3a?usp=sharing",
      },
    ],
  },
  {
    id: 3,
    date: "Dec 2025",
    title: "Google Ads Campaign Practice",
    description:
      "Worked on Google Ads fundamentals including campaign structure, keyword match types, ad copywriting, bidding strategies, and performance analysis.",
    images: [
      "https://drive.google.com/uc?export=view&id=17afIpbIWmbLWN9gfelZVEgo5KE9Kc13s",
      "https://drive.google.com/uc?export=view&id=1mA9xA8kqjcKsfugLAitlhOY0pZ8kAr5A",

    ],
    links: [
      {
        label: "Drive Folder",
        url: "https://drive.google.com/drive/folders/1VN10hTldfpIONu0OwDeHbNUQZqKFIoY5?usp=sharing",
      },
    ],
  },
  {
    id: 4,
    date: "Dec 2025",
    title: "Meta Ads Manager Campaign",
    description:
      "Created and managed practice campaigns using Meta Ads Manager with audience targeting, creative testing, budget control, and performance tracking.",
    images: [
      "https://drive.google.com/uc?export=view&id=13p3-1mIY30ZzoLAuBSNVSA8P1kO3MrfG",
      "https://drive.google.com/uc?export=view&id=1nLTHf_lSIMLnuCEdZCayw8z6AKtbXpWA",
      "https://drive.google.com/uc?export=view&id=1aIt-Y33GYD5duU5SgE_3EHy3SPk4_5nO",
      "https://drive.google.com/uc?export=view&id=1o0RsmN8uqpbddbWV6TCa_EC3-WlCvv4y"
    ],
    links: [
      {
        label: "Drive Folder",
        url: "https://drive.google.com/drive/folders/1tj_aQtD9dKcnraPV1JxR_8b3ADk0gA0A?usp=sharing",
      },
    ],
  },
  {
    id: 5,
    date: "Nov 2025",
    title: "Content Writing & Branding",
    description:
      "Wrote blogs, ad copies, and Instagram captions focusing on storytelling, CTA optimization, and brand tone. Used AI tools like ChatGPT and AdCreative.ai.",
    images: [
      "https://drive.google.com/uc?export=view&id=1OVeBDceRN9sWr7wPKs6_aqXVyIJ-qhD6",
      "https://drive.google.com/uc?export=view&id=1O9Sv3e--77a5HAKV8CrTWUmq0lTYwfsD"
    ],
    links: [
      {
        label: "Drive Folder",
        url: "https://drive.google.com/drive/folders/1leJPGRlppqWZtq4bfWwEG6EsYH9ddS6X?usp=sharing",
      },
    ],
  },
]

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"]

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(projects[0])
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const { theme } = useTheme()

  const color = useMotionValue(COLORS_TOP[0])

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    })
  }, [color])

  useEffect(() => {
    setActiveImageIndex(0)
  }, [selectedProject])

  // Auto-slide carousel
  useEffect(() => {
    if (selectedProject.images.length <= 1) return
    const interval = setInterval(() => {
      setActiveImageIndex((prev) =>
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      )
    }, 2500)
    return () => clearInterval(interval)
  }, [selectedProject])

  const handlePrev = () =>
    setActiveImageIndex((prev) =>
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    )

  const handleNext = () =>
    setActiveImageIndex((prev) =>
      prev === selectedProject.images.length - 1 ? 0 : prev + 1
    )

  const backgroundImage = useMotionTemplate`
    radial-gradient(125% 125% at 50% 0%, ${theme === "dark" ? "#000" : "#fff"} 50%, ${color})
  `

  return (
    <motion.section
      id="portfolio"
      className="py-20 md:py-32 text-slate-800 dark:text-white transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-8 lg:gap-12">

        {/* LEFT SIDE – project list */}
        <div className="order-2 lg:order-1">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-mono mb-8">
            Selected <span className="text-slate-500 dark:text-gray-400">Projects</span>
          </h2>

          {projects.map((project, index) => (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer mb-6 group"
            >
              <p className="text-slate-500 dark:text-gray-400 font-mono text-sm md:text-base mb-1">
                {project.date}
              </p>

              <h3
                className={`text-xl md:text-2xl lg:text-3xl font-semibold font-mono transition-colors duration-300
                  ${selectedProject.id === project.id
                    ? "text-slate-800 dark:text-gray-200"
                    : "text-slate-400 dark:text-gray-500 hover:text-slate-600 dark:hover:text-gray-300"
                  }`}
              >
                {project.title}
              </h3>

              {selectedProject.id === project.id && (
                <>
                  <div className="border-b-2 border-slate-300 dark:border-gray-600 my-3" />
                  <p className="text-slate-600 dark:text-gray-300 text-base md:text-lg font-mono">
                    {project.description}
                  </p>

                  {project.links.length > 0 && (
                    <div className="flex flex-wrap gap-3 mt-4">
                      {project.links.map((link, index) => (
                        <a
                          key={index}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 border border-slate-400 dark:border-gray-400 rounded font-mono text-sm
                                     hover:bg-slate-800 hover:text-white dark:hover:bg-white dark:hover:text-black transition"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                </>
              )}
            </motion.div>
          ))}
        </div>

        {/* RIGHT SIDE – image carousel */}
        <div className="order-1 lg:order-2 flex flex-col items-center justify-start lg:justify-center">
          {selectedProject.images.length > 0 ? (
            <div className="w-full">
              {/* Image container – shows full image without cropping */}
              <div className="relative w-full h-[500px] md:h-[650px] lg:h-[750px] rounded-xl overflow-hidden shadow-2xl bg-slate-200 dark:bg-gray-900 flex items-center justify-center transition-colors duration-300">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeImageIndex + "-" + selectedProject.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full flex items-center justify-center absolute inset-0"
                  >
                    <Image
                      src={selectedProject.images[activeImageIndex]}
                      alt={selectedProject.title}
                      width={800}
                      height={600}
                      className="object-contain w-full h-full max-h-full"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Prev / Next buttons */}
                {selectedProject.images.length > 1 && (
                  <>
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      onClick={handlePrev}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white rounded-full w-9 h-9 flex items-center justify-center text-lg transition z-10"
                      aria-label="Previous image"
                    >
                      ‹
                    </motion.button>
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      onClick={handleNext}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white rounded-full w-9 h-9 flex items-center justify-center text-lg transition z-10"
                      aria-label="Next image"
                    >
                      ›
                    </motion.button>
                  </>
                )}
              </div>

              {/* Dot indicators */}
              {selectedProject.images.length > 1 && (
                <div className="flex justify-center gap-2 mt-3 relative z-10">
                  {selectedProject.images.map((_, i) => (
                    <motion.button
                      whileTap={{ scale: 0.8 }}
                      key={i}
                      onClick={() => setActiveImageIndex(i)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === activeImageIndex
                        ? "bg-slate-800 dark:bg-white scale-125"
                        : "bg-slate-300 dark:bg-gray-600 hover:bg-slate-400 dark:hover:bg-gray-400"
                        }`}
                      aria-label={`Go to image ${i + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="w-full aspect-[4/3] bg-slate-200 dark:bg-gray-800 rounded-xl flex items-center justify-center text-slate-500 dark:text-gray-400 font-mono">
              No preview available
            </div>
          )}
        </div>

      </div>
    </motion.section>
  )
}
