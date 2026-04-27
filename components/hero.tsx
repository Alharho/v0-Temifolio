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
      {/* Subtle grain texture overlay */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
      }} />
      
      {/* Subtle gradient */}
      <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-gradient-to-bl from-primary/10 via-primary/5 to-transparent blur-3xl" />
      
      <div className="relative z-10 mx-auto max-w-5xl px-6 sm:px-8 lg:px-12 py-32 text-center">
        <motion.div 
          className="space-y-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.1]">
            <span className="text-white font-serif font-medium">Temitope J.</span>
            <br />
            <span className="text-primary font-serif italic font-medium">Olalere</span>
          </h1>
          
          <motion.p 
            className="text-xl sm:text-2xl md:text-3xl text-white/90 font-light tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Strategic Design Partner
          </motion.p>
          
          <motion.p 
            className="mx-auto max-w-2xl text-gray-400 text-base sm:text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Transforming brands across <span className="text-white">fintech</span>, <span className="text-white">education</span>, <span className="text-white">FMCG</span>, and <span className="text-white">tech</span> with designs that drive measurable growth and lasting impact.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-primary text-black hover:bg-primary/90 hover:scale-[1.02] rounded-full px-10 py-6 font-medium text-base transition-all shadow-lg shadow-primary/20"
            >
              <a href="#projects">
                View Work
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/20 text-white hover:bg-white/5 hover:border-white/40 rounded-full px-10 py-6 transition-all"
            >
              <a
                href="https://www.behance.net/temigfx"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Behance
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Stats Section with Glass Cards */}
      <div className="relative z-10 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                className="backdrop-blur-md bg-white/[0.03] rounded-2xl p-6 sm:p-8 border border-white/[0.06] text-center group hover:border-primary/20 hover:bg-white/[0.05] transition-all duration-300"
              >
                <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-300 mb-2">
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="font-medium text-white text-sm sm:text-base mb-1">{stat.label}</div>
                <div className="text-xs sm:text-sm text-gray-500">{stat.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
