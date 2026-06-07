"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"

const rotatingWords = ["lead", "dominate", "sell", "stand out", "inspire", "trend"]

const stats = [
  { value: 5, suffix: "+", label: "Years Experience", desc: "Creative design career" },
  { value: 296, suffix: "+", label: "Clients Served", desc: "Across diverse industries" },
  { value: 50, suffix: "+", label: "Project Collaborations", desc: "Multi-brand campaigns" },
  { value: 30, suffix: "%", label: "Avg. Sales Boost", desc: "Measurable client growth" },
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

function RotatingWord() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingWords.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <span className="text-primary italic">
      <motion.span
        key={index}
        initial={{ opacity: 0, y: 10, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -10, scale: 0.95 }}
        transition={{ 
          duration: 0.5,
          ease: "easeOut"
        }}
      >
        {rotatingWords[index]}
      </motion.span>
    </span>
  )
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0d0d0d]">
      {/* Animated gradient overlay at top */}
      <motion.div 
        className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-orange-500/20 via-orange-600/10 to-transparent blur-3xl animate-float"
        style={{
          backgroundPosition: ['0% 50%', '100% 50%'],
        }}
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 6,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Main headline with rotating word */}
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-tight font-serif text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          >
            Brands that <RotatingWord />, dominate, sell, stand out, inspire, or trend — start with design.
          </motion.h1>
          
          <motion.p 
            className="mx-auto max-w-2xl text-gray-400 leading-relaxed text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Temitope J. Olalere — Strategic Graphic Designer & Brand Consultant helping fintech, FMCG, education, and tech companies turn visual identity into measurable growth.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-primary text-black hover:bg-primary/90 rounded-full px-8 font-medium shadow-lg hover:shadow-xl transition-shadow"
              >
                <a href="#projects">
                  View my work →
                </a>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10 rounded-full px-8"
              >
                <a href="#contact">
                  Start a project →
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Stats Section with Glass Cards */}
      <div className="relative z-10 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: i * 0.12,
                  ease: "easeOut",
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                whileHover={{ 
                  y: -8,
                  boxShadow: "0 20px 40px rgba(245, 166, 35, 0.2)"
                }}
                className="backdrop-blur-md bg-white/5 rounded-2xl p-6 border border-white/10 text-center group hover:border-primary/50 transition-all cursor-pointer"
              >
                <motion.div 
                  className="font-serif text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-300 mb-1"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 + 0.3 }}
                >
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </motion.div>
                <motion.div 
                  className="font-semibold text-white text-sm mb-1"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 + 0.4 }}
                >
                  {stat.label}
                </motion.div>
                <motion.div 
                  className="text-xs text-gray-500"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 + 0.5 }}
                >
                  {stat.desc}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll to work link with pulse animation */}
      <motion.div 
        className="relative z-10 flex justify-center pb-8"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <motion.a 
          href="#projects"
          className="text-sm text-gray-400 hover:text-primary transition-colors flex items-center gap-2"
          whileHover={{ gap: "12px" }}
        >
          Scroll to work
          <motion.span
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            ↓
          </motion.span>
        </motion.a>
      </motion.div>
    </section>
  )
}
