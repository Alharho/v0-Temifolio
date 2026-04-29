"use client"

import { motion } from "framer-motion"

const designSkills = [
  "Brand Identity & Visual Systems",
  "Logo Design & Style Guides",
  "Social Media Design",
  "UI/UX Principles",
  "Print & Packaging Design",
  "Infographic & Data Viz",
  "Motion Graphics",
]

const strategySkills = [
  "Content Strategy",
  "Digital Marketing",
  "Social Media Management",
  "Visual Storytelling",
  "Campaign Planning",
  "Client Consultation",
  "Project Management",
]

const tools = [
  { name: "Photoshop", abbr: "Ps", bg: "bg-[#001e36]", color: "text-[#31a8ff]" },
  { name: "Illustrator", abbr: "Ai", bg: "bg-[#330000]", color: "text-[#ff9a00]" },
  { name: "InDesign", abbr: "Id", bg: "bg-[#49021f]", color: "text-[#ff3366]" },
  { name: "After Effects", abbr: "Ae", bg: "bg-[#1d1d3b]", color: "text-[#9999ff]" },
  { name: "Figma", abbr: "Fg", bg: "bg-[#1a1a1a]", color: "text-white" },
  { name: "CorelDRAW", abbr: "Cd", bg: "bg-[#1a2e00]", color: "text-[#6dd400]" },
  { name: "Canva", abbr: "Cv", bg: "bg-[#002d2f]", color: "text-[#00c4cc]" },
  { name: "CapCut", abbr: "Cc", bg: "bg-white", color: "text-black" },
]

// Duplicate tools for infinite scroll effect
const duplicatedTools = [...tools, ...tools]

export function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs text-primary tracking-widest uppercase">CAPABILITIES</span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold mt-3 text-white">
            Skills & <span className="text-primary italic">Expertise</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl">
            I combine design craft with strategic thinking to help brands communicate clearly and grow intentionally.
          </p>
        </motion.div>

        {/* Three Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Design Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-serif text-xl text-white mb-6">Design</h3>
            <div className="flex flex-wrap gap-2">
              {designSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-400 hover:border-primary/30 hover:text-white transition-all"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Strategy Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-serif text-xl text-primary mb-6">Strategy</h3>
            <div className="flex flex-wrap gap-2">
              {strategySkills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-400 hover:border-primary/30 hover:text-white transition-all"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Tools Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-serif text-xl text-primary mb-2">Tools</h3>
            <p className="text-xs text-gray-500 tracking-widest uppercase mb-6">
              TOOLS I USE TO EXECUTE AT SCALE
            </p>
            
            {/* Scrolling Tools Marquee */}
            <div className="relative overflow-hidden">
              <div className="flex gap-4 animate-marquee">
                {duplicatedTools.map((tool, index) => (
                  <div
                    key={`${tool.abbr}-${index}`}
                    className="flex flex-col items-center gap-2 flex-shrink-0"
                  >
                    <div
                      className={`${tool.bg} ${tool.color} w-14 h-14 rounded-xl flex items-center justify-center font-bold text-lg shadow-lg`}
                    >
                      {tool.abbr}
                    </div>
                    <span className="text-gray-500 text-xs whitespace-nowrap">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* CSS for marquee animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
