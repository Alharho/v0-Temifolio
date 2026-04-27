"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"

const softwareIcons = [
  { abbr: "Ps", name: "Photoshop", color: "bg-[#31a8ff]" },
  { abbr: "Ai", name: "Illustrator", color: "bg-[#ff9a00]" },
  { abbr: "Id", name: "InDesign", color: "bg-[#ff3366]" },
  { abbr: "Ae", name: "After Effects", color: "bg-[#9999ff]" },
  { abbr: "Pr", name: "Premiere", color: "bg-[#9999ff]" },
  { abbr: "Cv", name: "Canva", color: "bg-[#00c4cc]" },
  { abbr: "Cd", name: "CorelDraw", color: "bg-[#6dd400]" },
  { abbr: "Fg", name: "Figma", color: "bg-[#f24e1e]" },
  { abbr: "Cc", name: "CapCut", color: "bg-white text-black" },
]

const stats = [
  { value: 5, suffix: "+", label: "Years Experience", desc: "Creative design career" },
  { value: 191, suffix: "+", label: "Clients Served", desc: "Across diverse industries" },
  { value: 25, suffix: "+", label: "Project Collaborations", desc: "Multi-brand campaigns" },
  { value: 33.3, suffix: "%", label: "Avg. Sales Boost", desc: "Measurable client growth" },
]

function CountUp({ target, suffix, duration = 2000 }: { target: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const isDecimal = target % 1 !== 0
    const steps = 60
    const increment = target / steps
    let current = 0
    let step = 0
    const timer = setInterval(() => {
      step++
      current = Math.min(current + increment, target)
      setCount(isDecimal ? parseFloat(current.toFixed(1)) : Math.floor(current))
      if (step >= steps) clearInterval(timer)
    }, duration / steps)
    return () => clearInterval(timer)
  }, [inView, target, duration])

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  )
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0d0d0d]">
      {/* Gradient overlay at top */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-orange-500/20 via-orange-600/10 to-transparent blur-3xl" />
      
      {/* Floating Software Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {softwareIcons.map((icon, index) => (
          <motion.div
            key={icon.abbr}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.6, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`absolute ${icon.color} w-10 h-10 rounded-lg flex items-center justify-center text-xs font-bold shadow-lg`}
            style={{
              top: `${15 + (index % 3) * 25}%`,
              left: index < 5 ? `${5 + (index * 8)}%` : undefined,
              right: index >= 5 ? `${5 + ((index - 5) * 8)}%` : undefined,
              transform: `rotate(${(index - 4) * 5}deg)`,
            }}
          >
            {icon.abbr}
          </motion.div>
        ))}
      </div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Availability badge */}
          <div className="inline-flex items-center gap-2 text-sm text-primary">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Available for freelance work
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight">
            <span className="text-white font-serif">Temitope J.</span>
            <br />
            <span className="text-primary font-serif italic">Olalere</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-400 font-light">
            Creative Graphic Designer & Content Strategist
          </p>
          
          <p className="mx-auto max-w-2xl text-gray-500 leading-relaxed">
            5+ years delivering brand-focused designs, digital marketing campaigns, 
            and visual storytelling across diverse industries.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              asChild
              size="lg"
              className="bg-primary text-black hover:bg-primary/90 rounded-full px-8 font-medium"
            >
              <a href="#projects">
                View Portfolio
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/20 text-white hover:bg-white/10 rounded-full px-8"
            >
              <a
                href="https://www.behance.net/temigfx"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Behance Profile
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
      
      {/* Stats Section with Glass Cards */}
      <div className="relative z-10 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="backdrop-blur-md bg-white/5 rounded-2xl p-6 border border-white/10 text-center group hover:border-primary/30 transition-all"
              >
                <div className="font-serif text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-300 mb-1">
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="font-semibold text-white text-sm mb-1">{stat.label}</div>
                <div className="text-xs text-gray-500">{stat.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
