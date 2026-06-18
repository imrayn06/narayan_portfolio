"use client";

import { motion } from "framer-motion";

export const AboutSection = () => {
  return (
    <section id="about" className="relative px-4 py-16 md:py-24 overflow-hidden z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-800 dark:text-gray-100">
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">Me</span>
        </h2>
      </motion.div>

      <motion.div
        data-hover="true"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full max-w-5xl mx-auto px-6 sm:px-8 md:px-14 lg:px-20 py-8 md:py-10 text-center rounded-3xl bg-white/30 dark:bg-slate-900/40 backdrop-blur-xl shadow-lg shadow-slate-300/10 dark:shadow-black/30 ring-1 ring-white/20 dark:ring-white/10"
      >
        <div className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] leading-relaxed md:leading-8 lg:leading-9 text-slate-800 dark:text-neutral-200 font-sans font-medium space-y-6">
          
          <div className="p-4 mb-6 rounded-2xl bg-gradient-to-r from-purple-100/50 to-pink-100/50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200/50 dark:border-purple-800/30">
            <p className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
              "Combining technical expertise with strategic marketing to create measurable business impact."
            </p>
          </div>

          <p>
            Versatile professional with nearly four years of cross-functional experience spanning Digital Marketing, Social Media Management, Software Development, Testing, and Quality Assurance. In recent roles, I specialised in Digital and Social Media Marketing, driving content strategy, brand positioning, audience engagement, campaign execution, and online growth initiatives. Successfully contributed to digital marketing efforts at JRD Ayurveda and led social media and marketing activities at Mind and Matter, enhancing brand visibility, increasing audience engagement, and supporting business growth through data-driven marketing strategies.
          </p>

          <p>
            I have a strong interest in client servicing, media coordination, and community engagement, with experience collaborating across teams, coordinating campaigns, managing online communities, and fostering meaningful interactions that strengthen brand relationships and support business objectives. My ability to balance creativity with analytical thinking enables me to develop and execute marketing initiatives that align with both brand and business goals.
          </p>

          <p>
            Before transitioning into marketing, I built a strong foundation through three years of experience in Software Development, Testing, and Quality Assurance, developing expertise in analytical thinking, problem-solving, process optimisation, and quality management. This unique blend of technical proficiency and creative marketing acumen enables me to bridge business, creative, and technical teams while delivering strategic, results-oriented solutions that align technology with business and customer objectives.
          </p>
          
        </div>
      </motion.div>
    </section>
  );
};
