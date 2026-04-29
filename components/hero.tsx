"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"

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
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: "url('/images/bg-bokeh.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d]/60 via-transparent to-[#0d0d0d]" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
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
