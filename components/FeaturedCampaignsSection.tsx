"use client";

import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";

const campaigns = [
  {
    id: 1,
    title: "Diwali Wellness Campaign",
    objective: "Drive brand awareness and product sales during the festive season.",
    targetAudience: "Health-conscious consumers, ages 25-45.",
    strategy: "Leveraged user-generated content and influencer partnerships focused on natural wellness.",
    contentFormats: "Reels, Carousel Posts, Stories, Giveaways.",
    platforms: "Instagram, Facebook",
    results: "25% increase in engagement and a 15% bump in online sales.",
    learning: "Interactive stories with direct product links significantly outperformed static image posts."
  },
  {
    id: 2,
    title: "Community Activation Drive",
    objective: "Reactivate dormant users and increase active daily participation.",
    targetAudience: "Existing community members and lookalike audiences.",
    strategy: "Hosted a 7-day interactive challenge with daily prompts and rewards.",
    contentFormats: "Live Q&A, Polls, Text Posts, Graphics.",
    platforms: "LinkedIn, Meta Groups",
    results: "Reactivated 300+ dormant members and increased daily comments by 40%.",
    learning: "Micro-commitments (like simple polls) lower the barrier to entry for engagement."
  }
];

export default function FeaturedCampaignsSection() {
  return (
    <section id="campaigns" className="py-20 md:py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-sans mb-6 text-slate-800 dark:text-gray-100">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">Campaigns</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-gray-400 max-w-2xl mx-auto">
            A look into the mechanics of successful end-to-end marketing campaigns.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {campaigns.map((campaign, index) => (
            <motion.div
              key={campaign.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-slate-800/80 rounded-3xl p-8 shadow-xl border border-slate-200 dark:border-slate-700/50 hover:shadow-2xl transition-all"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-gray-100 mb-6">
                {campaign.title}
              </h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <FiCheckCircle className="text-purple-500 mt-1 mr-3 shrink-0" size={18} />
                  <div>
                    <span className="font-semibold text-slate-800 dark:text-gray-200">Objective: </span>
                    <span className="text-slate-600 dark:text-gray-400">{campaign.objective}</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <FiCheckCircle className="text-purple-500 mt-1 mr-3 shrink-0" size={18} />
                  <div>
                    <span className="font-semibold text-slate-800 dark:text-gray-200">Target Audience: </span>
                    <span className="text-slate-600 dark:text-gray-400">{campaign.targetAudience}</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <FiCheckCircle className="text-purple-500 mt-1 mr-3 shrink-0" size={18} />
                  <div>
                    <span className="font-semibold text-slate-800 dark:text-gray-200">Strategy: </span>
                    <span className="text-slate-600 dark:text-gray-400">{campaign.strategy}</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <FiCheckCircle className="text-purple-500 mt-1 mr-3 shrink-0" size={18} />
                  <div>
                    <span className="font-semibold text-slate-800 dark:text-gray-200">Content Formats: </span>
                    <span className="text-slate-600 dark:text-gray-400">{campaign.contentFormats}</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <FiCheckCircle className="text-purple-500 mt-1 mr-3 shrink-0" size={18} />
                  <div>
                    <span className="font-semibold text-slate-800 dark:text-gray-200">Platforms Used: </span>
                    <span className="text-slate-600 dark:text-gray-400">{campaign.platforms}</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700 space-y-4">
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-2xl border border-green-100 dark:border-green-800/30">
                  <span className="font-bold text-green-700 dark:text-green-400 block mb-1">Results:</span>
                  <span className="text-green-600 dark:text-green-300 text-sm">{campaign.results}</span>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-2xl border border-purple-100 dark:border-purple-800/30">
                  <span className="font-bold text-purple-700 dark:text-purple-400 block mb-1">Key Learning:</span>
                  <span className="text-purple-600 dark:text-purple-300 text-sm">{campaign.learning}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
