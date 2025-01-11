"use client"

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import project1 from '@/assets/proj1.png'
import project2 from '@/assets/proj2.png'
import project3 from '@/assets/proj13.png'
import project6 from '@/assets/proj6.png'
import proj3 from '@/assets/proj3.png'
import proj5 from '@/assets/proj5.png'
import { useMotionTemplate, useMotionValue, motion, animate } from 'motion/react'

const projects = [
  {
    id: 1, date: 'January,2025', title: 'ChatMe', description: "ChatMe is a Full Stack Chatting App that provides real-time communication using Socket.io. It securely stores user details in encrypted format in a MongoDB database.", image: project1,
  },
  {
    id: 2, date: 'November,2024', title: 'CodePen_Editor-clone', description: "A functional clone of CodePen's editor built using React and Vite. This application provides an environment for editing and previewing HTML, CSS, and JavaScript code in real time.", image: project2,
  },
  {
    id: 3, date: 'December,2024', title: 'eCommerce Website', description: "This project showcases an eCommerce website built using React JS. The website is designed to provide a seamless shopping experience with multiple features, including product browsing, user authentication, and a responsive interface.", image: proj3,
  },
  {
    id: 4, date: 'October,2024', title: 'SportStyle', description: "SportStyle is an interactive e-commerce platform developed to showcase and manage a variety of sportswear and accessories. This project is built using HTML, CSS, and JavaScript, featuring an intuitive user interface and seamless shopping experience.", image: project3,
  },
  {
    id: 5, date: 'December,2024', title: 'Todo Application', description: "A Todo application enhanced with drag-and-drop functionality using React DnD. This project allows users to intuitively reorder tasks by dragging and dropping them, along with priority tagging.", image: proj5,
  },
  {
    id: 6, date: 'December,2024', title: 'React CRUD App', description: "This is a simple React application that demonstrates CRUD (Create, Read, Update, Delete) functionality using a REST API. The app allows users to manage posts, including creating, updating, deleting, and viewing posts.", image: project6,
  },
];

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(projects[0])
  const color = useMotionValue(COLORS_TOP[0]);


  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`;

  return (
    <motion.section id='portfolio' className='py-32 text-white'
      style={{ backgroundImage }}>
      <div className='max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12'>

        <div>
          <h2 className='text-6xl font-bold font-mono mb-10'>
            Selected <span className='text-gray-400'>Project</span>
          </h2>
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className='cursor-pointer mb-8 group'
            >
              <p className='text-gray-400 font-mono text-lg mb-2'>{project.date}</p>
              <h3
                className={`text-3xl font-semibold group-hover:text-gray-400 transition-colors
          ${selectedProject.id === project.id ? 'text-gray-200 font-mono' : 'font-mono'}
          duration-300`}
              >
                {project.title}
              </h3>

              {selectedProject.id === project.id && (
                <div className='border-b-2 border-gray-500 my-4'></div>
              )}
              {selectedProject.id === project.id && (
                <p className='text-gray-300 text-xl font-mono transition-all duration-500 ease-in-out'>
                  {project.description}
                </p>
              )}
            </div>
          ))}
        </div>


        <div
          className={`flex justify-center items-center ${selectedProject.id ? 'lg:justify-end' : 'lg:justify-center'
            }`}
        >
          <Image
            src={selectedProject.image.src}
            alt={selectedProject.title}
            className='rounded h-96 shadow-lg transition-opacity duration-500 ease-in-out'
            width={800}
            height={450}
          />
        </div>
      </div>

    </motion.section>
  )
}

export default Portfolio