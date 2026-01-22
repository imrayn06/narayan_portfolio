"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import { useMotionTemplate, useMotionValue, motion, animate } from "motion/react"

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
      "https://drive.google.com/uc?export=view&id=1QZ4sXzM99MYm2m26TJpMKW2kwS2uLRfh"
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
    if (selectedProject.images.length <= 1) return; // No need to slide if 1 image
    const interval = setInterval(() => {
      setActiveImageIndex((prevIndex) =>
        prevIndex === selectedProject.images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // Change slide every 4 seconds

    return () => clearInterval(interval); // Cleanup on project change/unmount
  }, [selectedProject]);

  const backgroundImage = useMotionTemplate`
    radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})
  `

  return (
    <motion.section
      id="portfolio"
      className="py-32 text-white"
      style={{ backgroundImage }}
    >
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
        {/* LEFT SIDE */}
        <div>
          <h2 className="text-6xl font-bold font-mono mb-10">
            Selected <span className="text-gray-400">Projects</span>
          </h2>

          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer mb-8 group"
            >
              <p className="text-gray-400 font-mono text-lg mb-2">
                {project.date}
              </p>

              <h3
                className={`text-3xl font-semibold font-mono transition-colors duration-300
                  ${selectedProject.id === project.id
                    ? "text-gray-200"
                    : "group-hover:text-gray-400"
                  }`}
              >
                {project.title}
              </h3>

              {selectedProject.id === project.id && (
                <>
                  <div className="border-b-2 border-gray-600 my-4" />
                  <p className="text-gray-300 text-xl font-mono">
                    {project.description}
                  </p>

                  {/* LINKS */}
                  {project.links.length > 0 && (
                    <div className="flex flex-wrap gap-4 mt-6">
                      {project.links.map((link, index) => (
                        <a
                          key={index}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 border border-gray-400 rounded font-mono text-sm
                                     hover:bg-white hover:text-black transition"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col items-center justify-center lg:items-end">
          {selectedProject.images.length > 0 ? (
            <>
              <Image
                src={selectedProject.images[activeImageIndex]}
                alt={selectedProject.title}
                width={500}  // Max width
                height={500} // Max height
                className="rounded shadow-lg object-contain max-h-[500px] max-w-full"
                priority
              />

             
            </>
          ) : (
            <div className="h-96 w-full bg-gray-800 rounded flex items-center justify-center text-gray-400 font-mono">
              No preview available
            </div>
          )}
        </div>

      </div>
    </motion.section>
  )
}
