"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const certifications = [
  {
    id: 1,
    title: "Digital Marketing Certified",
    image: "/certifications/digital-marketing.png",
  },
  {
    id: 2,
    title: "KDMI Certificate",
    image: "/certifications/kdmi.jpg",
  },
  {
    id: 3,
    title: "Masai Certificate",
    image: "/certifications/masai.png",
  },
];

export default function CertificationsSection() {
  return (
    <section className="py-20 md:py-32 text-slate-800 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-sans">
            My Recent <span className="text-slate-500 dark:text-gray-400">Certifications</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-center justify-center">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <div
                className="relative w-full aspect-[4/3] rounded-2xl shadow-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 z-10 hover:z-50 active:z-50 transition-all duration-500 hover:scale-[1.25] active:scale-[1.25] md:hover:scale-[1.4] hover:shadow-2xl"
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
                style={{
                  WebkitUserSelect: "none",
                  userSelect: "none",
                }}
              >
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-contain p-4 pointer-events-none"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  draggable={false}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
