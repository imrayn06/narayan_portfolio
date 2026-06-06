"use client"

import { motion } from "framer-motion"

interface SectionAnimationProps {
  icon: string
  direction: "left" | "right"
}

export default function SectionAnimation({ icon, direction }: SectionAnimationProps) {
  const fromLeft = direction === "right"

  return (
    <section className="relative overflow-hidden py-3">
      <div className="relative h-14 flex items-center">
        <motion.div
          className="absolute top-1/2 -translate-y-1/2"
          initial={{ x: fromLeft ? "-10vw" : "110vw" }}
          animate={{ x: fromLeft ? "110vw" : "-10vw" }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <span className="text-4xl select-none">{icon}</span>
        </motion.div>
      </div>
    </section>
  )
}
