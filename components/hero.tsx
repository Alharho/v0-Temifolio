"use client"

import { useEffect, useState } from "react"
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
  { value: "5+", label: "Years Experience", sublabel: "Creative design career" },
  { value: "3+", label: "Industries Served", sublabel: "Across diverse industries" },
  { value: "5+", label: "Web App Designs", sublabel: "Multi-brand campaigns" },
  { value: "30%", label: "Avg. Sales Boost", sublabel: "Measurable client growth" },
]

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = target / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [target])

  return <span>{count}{suffix}</span>
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0d0d0d]">
      {/* Gradient overlay at top */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-orange-500/20 via-orange-600/10 to-transparent blur-3xl" />
      
      {/* Floating Software Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {softwareIcons.map((icon, index) => (
          <div
            key={icon.abbr}
            className={`absolute ${icon.color} w-10 h-10 rounded-lg flex items-center justify-center text-xs font-bold shadow-lg opacity-60`}
            style={{
              top: `${15 + (index % 3) * 25}%`,
              left: index < 5 ? `${5 + (index * 8)}%` : undefined,
              right: index >= 5 ? `${5 + ((index - 5) * 8)}%` : undefined,
              transform: `rotate(${(index - 4) * 5}deg)`,
            }}
          >
            {icon.abbr}
          </div>
        ))}
      </div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="space-y-6">
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
        </div>
      </div>
      
      {/* Stats Bar */}
      <div className="relative z-10 w-full border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {stats.map((stat, index) => (
              <div key={index} className="py-8 px-4 text-center">
                <p className="text-3xl md:text-4xl font-serif text-primary">
                  {stat.value.includes("%") ? (
                    <AnimatedCounter target={parseInt(stat.value)} suffix="%" />
                  ) : (
                    <AnimatedCounter target={parseInt(stat.value)} suffix="+" />
                  )}
                </p>
                <p className="text-sm text-white mt-1">{stat.label}</p>
                <p className="text-xs text-gray-500 mt-0.5">{stat.sublabel}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
