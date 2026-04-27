"use client"

import { motion } from "framer-motion"
import { Paintbrush, Target, Lightbulb, Users } from "lucide-react"

const services = [
  {
    icon: Paintbrush,
    title: "Brand Identity",
    description: "Creating cohesive visual systems that communicate brand values and attract target audiences.",
  },
  {
    icon: Target,
    title: "Campaign Design",
    description: "Data-driven digital marketing campaigns that boost engagement and drive measurable results.",
  },
  {
    icon: Lightbulb,
    title: "Creative Strategy",
    description: "Merging design intuition with content strategy for impactful storytelling.",
  },
  {
    icon: Users,
    title: "Cross-Industry",
    description: "Proven track record across fintech, education, FMCG, and tech industries.",
  },
]

const tools = ["Adobe CC", "Figma", "CorelDraw", "Canva", "Motion Graphics", "UI/UX"]

export function About() {
  return (
    <section id="about" className="py-28 sm:py-36 bg-[#0d0d0d]">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* About Me Header */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-primary text-xs tracking-[0.2em] uppercase font-medium mb-6">About Me</p>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-[1.1] tracking-tight">
                Designing with{" "}
                <span className="text-primary italic">Purpose</span> &<br />
                Visual <span className="text-primary italic">Impact</span>
              </h2>
            </div>
            <div className="lg:flex lg:justify-end">
              {/* Quote Card */}
              <div className="bg-white/[0.02] rounded-2xl p-8 max-w-md border border-white/[0.06]">
                <div className="text-5xl text-primary/60 font-serif leading-none mb-4">&ldquo;</div>
                <p className="text-gray-400 italic leading-relaxed text-lg">
                  Design is not just what it looks like and feels like. Design is how it works — and how it drives results.
                </p>
                <div className="flex items-center gap-4 mt-8">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold">
                    TJ
                  </div>
                  <div>
                    <p className="text-white font-medium">Temitope J. Olalere</p>
                    <p className="text-gray-500 text-sm">Creative Designer &middot; Lagos, Nigeria</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bio Section */}
        <motion.div 
          className="grid lg:grid-cols-2 gap-16 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
            <p>
              I&apos;m <span className="text-white font-medium">Temitope J. Olalere</span>, a highly creative Graphic Designer and Content Strategist based in Lagos, Nigeria. With over 5 years of experience, I specialise in delivering brand-focused designs, digital marketing campaigns, and cross-industry visual storytelling.
            </p>
            <p>
              My work spans from fintech infographics and email templates to product packaging and UI/UX design — always with a focus on engagement, clarity, and aesthetic excellence.
            </p>
            {/* Tools Tags */}
            <div className="flex flex-wrap gap-2 pt-4">
              {tools.map((tool) => (
                <span 
                  key={tool}
                  className="px-4 py-2 bg-white/[0.03] text-gray-300 text-sm rounded-full border border-white/[0.06]"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="bg-white/[0.02] rounded-2xl p-6 sm:p-8 border border-white/[0.06] hover:border-primary/20 transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
            >
              <div className="w-14 h-14 rounded-xl bg-white/[0.03] flex items-center justify-center mb-6 border border-white/[0.06] group-hover:border-primary/20 transition-colors duration-300">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-3">{service.title}</h3>
              <p className="text-gray-500 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
