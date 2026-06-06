"use client"

import { motion } from "framer-motion"

export default function AnimatedCar() {
  return (
    <section className="relative overflow-hidden py-12">
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative h-14">
          <motion.div
            className="absolute top-1/2 -translate-y-1/2"
            initial={{ x: "-10vw" }}
            animate={{ x: "110vw" }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            <span className="text-4xl select-none">🚀</span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
