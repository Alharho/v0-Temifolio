"use client"

import { motion } from "framer-motion"
import { Search, Target, Palette, Rocket } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "Understanding the problem, audience, and goals before a single pixel is designed.",
    icon: Search,
  },
  {
    number: "02",
    title: "Strategy",
    description: "Defining direction, messaging framework, and visual structure to guide execution.",
    icon: Target,
  },
  {
    number: "03",
    title: "Design",
    description: "Translating strategy into effective visual systems that communicate and convert.",
    icon: Palette,
  },
  {
    number: "04",
    title: "Execution",
    description: "Delivering, refining, and ensuring every asset creates real-world impact.",
    icon: Rocket,
  },
]

export function Process() {
  return (
    <section id="process" className="py-24 sm:py-32 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs text-primary tracking-widest uppercase">HOW I WORK</span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold mt-3 text-white">
            My <span className="text-primary italic">Process</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl">
            I don&apos;t guess. Every project follows a structured system designed to turn brand challenges into measurable outcomes.
          </p>
        </motion.div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative p-6 rounded-2xl bg-[#141414] border border-white/5 hover:border-primary/30 transition-all"
            >
              {/* Icon and Number */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <step.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-2xl font-bold text-white/10 group-hover:text-primary/30 transition-colors">
                  {step.number}
                </span>
              </div>

              {/* Content */}
              <h3 className="font-serif text-xl text-white mb-2 group-hover:text-primary transition-colors">
                {step.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
