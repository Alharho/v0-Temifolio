"use client"

import { useEffect, useState, useRef } from "react"

const softwareTools = [
  { abbr: "Ps", name: "Photoshop", color: "bg-[#31a8ff]" },
  { abbr: "Ai", name: "Illustrator", color: "bg-[#ff9a00]" },
  { abbr: "Id", name: "InDesign", color: "bg-[#ff3366]" },
  { abbr: "Cd", name: "CorelDraw", color: "bg-[#6dd400]" },
  { abbr: "Fg", name: "Figma", color: "bg-[#f24e1e]" },
  { abbr: "Cv", name: "Canva", color: "bg-[#00c4cc]" },
  { abbr: "Ae", name: "After Effects", color: "bg-[#9999ff]" },
  { abbr: "Cc", name: "CapCut", color: "bg-white text-black" },
]

const digitalPrintSkills = [
  { name: "Brand Identity", percentage: 92, color: "from-orange-400 to-cyan-400" },
  { name: "Print Production", percentage: 88, color: "from-purple-400 to-pink-400" },
  { name: "Infographic Design", percentage: 90, color: "from-yellow-400 to-orange-400" },
  { name: "Email Marketing", percentage: 87, color: "from-orange-400 to-red-400" },
  { name: "Packaging Design", percentage: 85, color: "from-cyan-400 to-green-400" },
  { name: "UI/UX Principles", percentage: 82, color: "from-purple-400 to-blue-400" },
]

const strategySkills = [
  { name: "Content Strategy", percentage: 88 },
  { name: "Digital Marketing", percentage: 85 },
  { name: "Social Media Mgmt", percentage: 90 },
  { name: "Project Management", percentage: 83 },
  { name: "Visual Storytelling", percentage: 94 },
  { name: "Client Relations", percentage: 92 },
]

function CircularProgress({ percentage, color }: { percentage: number; color: string }) {
  const [animatedPercentage, setAnimatedPercentage] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const duration = 1500
          const steps = 60
          const increment = percentage / steps
          let current = 0

          const timer = setInterval(() => {
            current += increment
            if (current >= percentage) {
              setAnimatedPercentage(percentage)
              clearInterval(timer)
            } else {
              setAnimatedPercentage(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [percentage])

  const circumference = 2 * Math.PI * 40
  const strokeDashoffset = circumference - (animatedPercentage / 100) * circumference

  return (
    <div ref={ref} className="relative w-20 h-20">
      <svg className="w-full h-full -rotate-90">
        <circle
          cx="40"
          cy="40"
          r="40"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="4"
          fill="none"
        />
        <circle
          cx="40"
          cy="40"
          r="40"
          stroke="url(#gradient)"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          className="transition-all duration-1000"
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" className={color.split(" ")[0].replace("from-", "stop-")} stopColor="currentColor" />
            <stop offset="100%" className={color.split(" ")[1].replace("to-", "stop-")} stopColor="currentColor" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-white font-medium text-sm">{animatedPercentage}%</span>
      </div>
    </div>
  )
}

function ProgressBar({ percentage, index }: { percentage: number; index: number }) {
  const [animatedWidth, setAnimatedWidth] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setAnimatedWidth(percentage), index * 100)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [percentage, index])

  return (
    <div ref={ref} className="h-2 bg-white/10 rounded-full overflow-hidden">
      <div 
        className="h-full bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 rounded-full transition-all duration-1000 ease-out"
        style={{ width: `${animatedWidth}%` }}
      />
    </div>
  )
}

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#0d0d0d]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-primary text-sm tracking-widest uppercase mb-4">Capabilities</p>
          <h2 className="text-4xl md:text-5xl font-serif text-white">
            Skills & <span className="text-primary italic">Expertise</span>
          </h2>
        </div>

        {/* Design & Brand Software */}
        <div className="mb-12">
          <h3 className="text-lg text-gray-400 mb-6">Design & Brand Software</h3>
          <div className="grid grid-cols-4 sm:grid-cols-8 gap-4">
            {softwareTools.map((tool) => (
              <div key={tool.abbr} className="flex flex-col items-center gap-2">
                <div className={`${tool.color} w-12 h-12 rounded-lg flex items-center justify-center font-bold text-sm shadow-lg`}>
                  {tool.abbr}
                </div>
                <span className="text-gray-500 text-xs text-center">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Digital & Print Design */}
          <div className="bg-[#141414] rounded-2xl p-6 border border-white/5">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 bg-primary rounded-full" />
              <h3 className="text-white font-serif italic">Digital & Print Design</h3>
            </div>
            <div className="grid grid-cols-3 gap-6">
              {digitalPrintSkills.map((skill) => (
                <div key={skill.name} className="flex flex-col items-center text-center">
                  <CircularProgress percentage={skill.percentage} color={skill.color} />
                  <span className="text-gray-400 text-xs mt-2 leading-tight">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Strategy & Management */}
          <div className="bg-[#141414] rounded-2xl p-6 border border-white/5">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 bg-primary rounded-full" />
              <h3 className="text-white font-serif italic">Strategy & Management</h3>
            </div>
            <div className="space-y-4">
              {strategySkills.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-400">{skill.name}</span>
                    <span className="text-gray-500">{skill.percentage}%</span>
                  </div>
                  <ProgressBar percentage={skill.percentage} index={index} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
