"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: 'Minimal marks, Maximum impact - 2025 Logofolio',
    company: 'Logofolio Collection',
    description: 'A curated collection of minimal logo designs showcasing the power of simple marks to create maximum visual impact.',
    tags: ['Logo Design', 'Brand Identity', 'Minimalism'],
    link: 'https://www.behance.net/gallery/248099793/Minimal-marks-Maximum-impact-2025-Logofolio',
    thumb: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/5e9f8f248099793.682e0bd66f9ad.png',
  },
  {
    title: 'Snapshare – Real-Time Visual System',
    company: 'Snapshare App',
    description: 'UI/UX and visual identity design for a real-time photo sharing application, creating a dynamic and intuitive visual design system.',
    tags: ['UI/UX', 'App Design', 'Visual Identity'],
    link: 'https://www.behance.net/gallery/247860145/Snapshare-Real-Time-Visual-System',
    thumb: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/44f65c247860145.682c9f1c7e6f3.jpg',
  },
  {
    title: 'Ledobiz – Brand Identity & Logo Style Guide',
    company: 'Ledobiz Technologies',
    description: 'Complete brand identity and comprehensive logo style guide for a technology company, establishing strong visual foundations across all touchpoints.',
    tags: ['Brand Identity', 'Logo Design', 'Style Guide'],
    link: 'https://www.behance.net/gallery/247722159/Ledobiz-Brand-Identity-and-Logo-Style-Guide',
    thumb: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/43d7f3247722159.682b4c7b3c5e1.jpg',
  },
  {
    title: 'Visual Branding & Social Media System',
    company: 'SignalSpark Academy',
    description: 'Full brand-identity overhaul — comprehensive brand guide and social-media design strategy to strengthen digital presence and drive client acquisition.',
    tags: ['Brand Identity', 'Social Media', 'Illustrator', 'Photoshop'],
    link: 'https://www.behance.net/gallery/247513637/VISUAL-BRANDING-AND-SOCIAL-MEDIA-SYSTEM',
    thumb: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/e7e10c247513637.6828ebc54d7f0.jpg',
  },
  {
    title: 'Maktaris Herbals – Social Media Contents',
    company: 'Maktaris Herbals',
    description: 'Designed a full suite of social media marketing campaign graphics driving 50% increase in online engagement and 30% boost in product sales.',
    tags: ['Social Media', 'Campaign Design', 'Digital Marketing'],
    link: 'https://www.behance.net/gallery/247511479/Maktaris-Herbals-Social-Media-Contents',
    thumb: 'https://mir-s3-cdn-cf.behance.net/projects/max_808/247511479.6882cc9cdfc93.jpg',
  },
  {
    title: 'Call of Duty Mobile – Tournament Campaign',
    company: 'Kortis Legends / COD Community',
    description: 'High-impact event branding and tournament campaign visuals for the Kortis Legends COD gaming community — from scattered assets to a cohesive masterpiece.',
    tags: ['Event Branding', 'Campaign Design', 'Gaming'],
    link: 'https://www.behance.net/gallery/247495937/Call-of-Duty-Mobile-Tournament-Campaign',
    thumb: 'https://mir-s3-cdn-cf.behance.net/projects/max_808/247495937.6882c30f9b3f7.jpg',
  },
]

export function Projects() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)

  return (
    <section id="projects" className="relative py-24 sm:py-32 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-12">
          <p className="text-xs sm:text-sm text-gray-500 tracking-widest uppercase mb-2">
            Featured projects · 2019 — 2026
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16"
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Selected work,<br />built to convert.
            </h2>
          </motion.div>
          <motion.a
            href="https://www.behance.net/temigfx"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 text-sm text-gray-400 hover:text-primary hover:border-primary/30 transition-all whitespace-nowrap cursor-pointer"
          >
            View full archive on Behance ↗
          </motion.a>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              transition={{ 
                duration: 0.5, 
                delay: i * 0.12,
                ease: "easeOut",
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              whileHover={{ 
                y: -12,
                boxShadow: "0 30px 60px rgba(245, 166, 35, 0.15)"
              }}
              className="group backdrop-blur-md bg-white/5 rounded-2xl border border-white/10 hover:border-primary/40 transition-all overflow-hidden block cursor-pointer"
            >
              {/* Thumbnail */}
              <div className="relative overflow-hidden aspect-video bg-gray-900">
                <motion.img
                  src={project.thumb}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                    const fallback = target.nextElementSibling as HTMLElement
                    if (fallback) fallback.style.display = 'flex'
                  }}
                />
                {/* Fallback */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 items-center justify-center hidden">
                  <span className="font-serif text-4xl font-bold text-primary/20">{project.company[0]}</span>
                </div>
                {/* Overlay on hover */}
                <motion.div 
                  className="absolute inset-0 bg-[#0d0d0d]/60 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIdx === i ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-black text-sm font-semibold shadow-lg"
                    whileHover={{ scale: 1.05 }}
                  >
                    <ExternalLink className="w-4 h-4" /> View on Behance
                  </motion.div>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-5">
                <motion.p 
                  className="text-xs text-primary mb-1.5 tracking-wide font-semibold"
                  whileHover={{ letterSpacing: "0.15em" }}
                  transition={{ duration: 0.3 }}
                >
                  {project.company}
                </motion.p>
                <h3 className="font-semibold text-white text-base leading-snug mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-3 line-clamp-2">
                  {project.description}
                </p>
                <motion.div 
                  className="flex flex-wrap gap-1.5"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 + 0.3 }}
                >
                  {project.tags.map((tag, idx) => (
                    <motion.span 
                      key={tag} 
                      className="px-2 py-0.5 rounded-md bg-white/5 text-xs text-gray-400 border border-white/10 hover:border-primary/30 hover:bg-primary/10 transition-all cursor-pointer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.12 + 0.3 + idx * 0.05 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
