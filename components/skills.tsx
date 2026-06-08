"use client"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import {
  Palette,
  Pen,
  FileText,
  Square,
  Zap,
  Clapperboard,
  Music,
} from "lucide-react"

const softwareTools = [
  { name: "Photoshop", icon: Palette, color: "from-[#31a8ff] to-[#1e5f9e]", label: "Photo Editing" },
  { name: "Illustrator", icon: Pen, color: "from-[#ff9a00] to-[#cc7700]", label: "Vector Design" },
  { name: "InDesign", icon: FileText, color: "from-[#ff3366] to-[#cc1a4d]", label: "Layout Design" },
  { name: "CorelDraw", icon: Square, color: "from-[#6dd400] to-[#54aa00]", label: "Graphics" },
  { name: "Figma", icon: Zap, color: "from-[#f24e1e] to-[#c23a0f]", label: "UI Design" },
  { name: "Canva", icon: Palette, color: "from-[#00c4cc] to-[#0099a1]", label: "Design Tool" },
  { name: "After Effects", icon: Clapperboard, color: "from-[#9999ff] to-[#6666cc]", label: "Motion" },
  { name: "CapCut", icon: Music, color: "from-white/80 to-gray-300", label: "Video Edit" },
]

const coreSkills = [
  { name: "Brand Identity", level: 95 },
  { name: "Visual Design", level: 93 },
  { name: "Print Design", level: 90 },
  { name: "Digital Design", level: 94 },
  { name: "UX/UI Design", level: 88 },
  { name: "Motion Graphics", level: 85 },
]

const expertiseAreas = [
  { title: "Brand Strategy", items: ["Logo Design", "Brand Guidelines", "Identity Systems", "Market Positioning"] },
  { title: "Digital Marketing", items: ["Social Media Assets", "Email Templates", "Web Graphics", "Ad Campaigns"] },
  { title: "Content Creation", items: ["Infographics", "Illustrations", "Photography Direction", "Art Direction"] },
  { title: "Print & Packaging", items: ["Packaging Design", "Print Collateral", "Brochures", "Signage"] },
]

function ToolsMarquee({ tools }: { tools: typeof softwareTools }) {
  return (
    <div className="overflow-hidden py-8">
      {/* First marquee - left to right */}
      <div className="flex gap-8 mb-8 animate-marquee">
        {[...tools, ...tools].map((tool, idx) => (
          <div key={`${tool.name}-${idx}`} className="flex items-center gap-2 whitespace-nowrap flex-shrink-0">
            <span className="text-gray-400 text-sm">{tool.name}</span>
          </div>
        ))}
      </div>
      
      {/* Second marquee - right to left */}
      <div className="flex gap-8 animate-marquee-reverse">
        {[...tools.slice().reverse(), ...tools.slice().reverse()].map((tool, idx) => (
          <div key={`${tool.name}-reverse-${idx}`} className="flex items-center gap-2 whitespace-nowrap flex-shrink-0">
            <span className="text-gray-400 text-sm">{tool.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function ToolCard({ tool, index }: { tool: typeof softwareTools[0]; index: number }) {
  const Icon = tool.icon
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "0px 0px -50px 0px" }}
      transition={{
        duration: 0.4,
        delay: index * 0.05,
        type: "spring",
        stiffness: 150,
        damping: 12
      }}
      whileHover={{
        y: -12,
        boxShadow: "0 30px 50px rgba(245, 166, 35, 0.25)"
      }}
      className="group"
    >
      <div className={`bg-gradient-to-br ${tool.color} rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all cursor-pointer backdrop-blur-sm border border-white/20 hover:border-white/50`}>
        <div className="h-16 flex items-center justify-center mb-3">
          <motion.div
            whileHover={{ scale: 1.15, rotate: 8 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Icon className="w-10 h-10 text-white drop-shadow-lg" />
          </motion.div>
        </div>
        <p className="text-sm font-bold text-white text-center mb-1">{tool.name}</p>
        <p className="text-xs text-white/70 text-center">{tool.label}</p>
      </div>
    </motion.div>
  )
}

function SkillBar({ skill, index }: { skill: typeof coreSkills[0]; index: number }) {
  const [width, setWidth] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => setWidth(skill.level), index * 50)
      }
    }, { threshold: 0.1 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [skill.level, index])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "0px 0px -50px 0px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="space-y-2"
    >
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-gray-300">{skill.name}</span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: width > 0 ? 1 : 0 }}
          className="text-xs font-semibold text-orange-400"
        >
          {width}%
        </motion.span>
      </div>
      <div className="h-2 bg-white/5 rounded-full overflow-hidden border border-white/10">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${width}%` }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-orange-400 via-orange-500 to-amber-500 rounded-full shadow-lg shadow-orange-500/50"
        />
      </div>
    </motion.div>
  )
}

function ExpertiseCard({ expertise, index }: { expertise: typeof expertiseAreas[0]; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "0px 0px -50px 0px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      whileHover={{
        y: -8,
        boxShadow: "0 20px 50px rgba(245, 166, 35, 0.15)"
      }}
      className="relative overflow-hidden"
    >
      <div className="backdrop-blur-sm bg-gradient-to-br from-white/8 to-white/3 rounded-2xl p-6 border border-white/15 hover:border-orange-500/40 transition-all cursor-pointer h-full">
        {/* Background gradient animation */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-500/0"
          animate={isExpanded ? {
            background: "linear-gradient(135deg, rgba(245,166,35,0.1) 0%, rgba(245,166,35,0.05) 100%)"
          } : {
            background: "linear-gradient(135deg, rgba(245,166,35,0) 0%, rgba(245,166,35,0) 100%)"
          }}
          transition={{ duration: 0.3 }}
        />

        <div className="relative z-10 space-y-4">
          <motion.h3
            className="text-lg font-semibold text-white flex items-center gap-2"
            animate={isExpanded ? { x: 4 } : { x: 0 }}
          >
            {expertise.title}
            <motion.span
              animate={isExpanded ? { rotate: 180, scale: 1.1 } : { rotate: 0, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="text-orange-400 ml-auto"
            >
              →
            </motion.span>
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={isExpanded ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="space-y-2 pt-4 border-t border-white/10">
              {expertise.items.map((item, idx) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isExpanded ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex items-center gap-2 text-sm text-gray-400"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export function Skills() {
  return (
    <section id="skills" className="relative py-32 bg-[#0d0d0d] overflow-hidden">
      {/* Background gradient */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: "radial-gradient(ellipse at center, rgba(245,166,35,0.1) 0%, transparent 70%)"
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <motion.p
            className="text-orange-400 text-sm font-semibold tracking-widest uppercase mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Expertise & Tools
          </motion.p>
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -50px 0px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Mastering Design Across
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">
              Multiple Platforms
            </span>
          </motion.h2>
        </motion.div>

        {/* TIER 1: Software Tools Marquee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-24"
        >
          <p className="text-xs text-gray-500 tracking-widest uppercase mb-8 text-center">Tools I work with</p>
          <ToolsMarquee tools={softwareTools} />
        </motion.div>

        {/* TIER 2: Core Competencies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-24"
        >
          <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 sm:p-10 border border-white/10">
            <h3 className="text-2xl font-serif font-bold text-white mb-10">Core Competencies</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {coreSkills.map((skill, idx) => (
                <SkillBar key={skill.name} skill={skill} index={idx} />
              ))}
            </div>
          </div>
        </motion.div>

        {/* TIER 3: Expertise Areas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="mb-6">
            <h3 className="text-2xl font-serif font-bold text-white mb-6">Areas of Expertise</h3>
            <p className="text-gray-400 text-sm">Hover to explore detailed skills in each area</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {expertiseAreas.map((area, idx) => (
              <ExpertiseCard key={area.title} expertise={area} index={idx} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
