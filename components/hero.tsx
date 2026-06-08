"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const stats = [
  { value: 296, suffix: "+", label: "Clients", desc: "Worldwide" },
  { value: 50, suffix: "+", label: "Projects", desc: "Completed" },
  { value: 30, suffix: "%", label: "Growth", desc: "Average boost" },
]

function CountUp({ target, suffix, duration = 2000 }: { target: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !inView) {
        setInView(true)
      }
    })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [inView])

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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0d0d0d]">
      {/* Mouse blur effect background */}
      <motion.div 
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background: `radial-gradient(200px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 140, 0, 0.04), transparent 70%)`
        }}
      />

      {/* Animated gradient orbs */}
      <motion.div 
        className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-orange-500/15 to-transparent rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
      <motion.div 
        className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-tr from-cyan-500/10 to-transparent rounded-full blur-3xl"
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 10,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
      
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-32">
        <motion.div 
          className="text-center space-y-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Main headline - simplified */}
          <motion.h1 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold leading-tight text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          >
            Visual Identity
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-amber-500">
              That Sells
            </span>
          </motion.h1>
          
          <motion.p 
            className="mx-auto max-w-2xl text-lg sm:text-xl text-gray-400 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Strategic graphic design and brand consulting for fintech, FMCG, education, and tech companies. 
            <br className="hidden sm:block" />
            <span className="text-white font-medium">Transforming ideas into measurable growth.</span>
          </motion.p>
          
          {/* Primary CTA */}
          <motion.div 
            className="flex justify-center pt-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <motion.div
              whileHover={{ scale: 1.08, y: -6 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-amber-500 text-white hover:from-orange-600 hover:to-amber-600 rounded-full px-10 py-7 font-semibold text-lg shadow-2xl hover:shadow-orange-500/50 transition-shadow"
              >
                <a href="#projects" className="flex items-center gap-2">
                  View My Work
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Simplified Stats */}
      <motion.div 
        className="relative z-10 max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "0px 0px -50px 0px" }}
              transition={{ 
                duration: 0.5, 
                delay: i * 0.1,
                type: "spring",
                stiffness: 120,
                damping: 15
              }}
              whileHover={{ 
                y: -6,
                boxShadow: "0 20px 40px rgba(245, 166, 35, 0.15)"
              }}
              className="text-center backdrop-blur-sm bg-white/3 rounded-xl p-6 border border-white/10 hover:border-orange-500/40 transition-all cursor-pointer"
            >
              <motion.div 
                className="text-4xl sm:text-5xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500 mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                transition={{ duration: 0.5, delay: i * 0.1 + 0.2 }}
              >
                <CountUp target={stat.value} suffix={stat.suffix} />
              </motion.div>
              <div className="text-sm text-white font-medium mb-1">{stat.label}</div>
              <div className="text-xs text-gray-500">{stat.desc}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
