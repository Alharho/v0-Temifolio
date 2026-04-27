"use client"

import { useState } from "react"
import { ChevronDown, Building2 } from "lucide-react"

const experiences = [
  {
    title: "Creative Designer, Content Strategist",
    company: "SignalSpark Academy Ltd.",
    location: "Lagos",
    period: "2023 - Present",
    type: "Hybrid",
    highlights: [
      "Spearheaded data-driven infographics and charts, increasing client engagement with financial data by 25%",
      "Produced marketing collateral (brochures, banners, promo assets) contributing to a 16.67% increase in client acquisition",
      "Designed optimised email templates and newsletters resulting in significantly higher open rates",
      "Built compelling presentations simplifying complex financial insights for investors",
      "Applied emerging design trends ensuring consistently fresh and competitive brand materials",
    ],
  },
  {
    title: "Graphic Designer",
    company: "TheTrybe Co",
    location: "Akure",
    period: "2022 - Present",
    type: "Hybrid",
    highlights: [
      "Collaborated cross-functionally on branded merchandise and digital campaigns",
      "Created designs for 5+ web applications (Academic assessment system, SnapShare, inTally, Charades)",
      "Drafted tailored design proposals ensuring multi-industry client satisfaction",
    ],
  },
  {
    title: "Graphic Designer (Support)",
    company: "Mummy's Place Int'l School",
    location: "Akure",
    period: "2022 - 2023",
    type: "Contract",
    highlights: [
      "Redesigned school stationeries and classroom visuals",
      "Created interactive board presentations enhancing classroom experience",
    ],
  },
  {
    title: "Product Manager",
    company: "Maktaris Herbals",
    location: "Ibadan",
    period: "2021 - 2022",
    type: "Full-time",
    highlights: [
      "Transformed product packaging driving 30% increase in product sales",
      "Managed social media campaigns generating 50% additional online engagement",
    ],
  },
  {
    title: "Graphic Designer",
    company: "Constancy Multi-Concept Limited",
    location: "Lagos",
    period: "2019 - 2020",
    type: "Full-time",
    highlights: [
      "Delivered innovative product design concepts for marketing campaigns",
      "Strengthened customer relationships through design and social media efforts",
    ],
  },
]

function ExperienceItem({ exp, isOpen, onToggle }: { 
  exp: typeof experiences[0]; 
  isOpen: boolean; 
  onToggle: () => void;
}) {
  return (
    <div className="bg-[#141414] rounded-2xl border border-white/5 overflow-hidden">
      <button 
        onClick={onToggle}
        className="w-full flex items-center gap-4 p-6 text-left hover:bg-white/5 transition-colors"
      >
        <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
          <Building2 className="h-5 w-5 text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-white font-medium">{exp.title}</h3>
          <p className="text-primary text-sm">{exp.company} &middot; {exp.location}</p>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <span className="hidden sm:inline-block px-3 py-1 bg-white/10 text-gray-300 text-xs rounded-full border border-white/10">
            {exp.type}
          </span>
          <span className="text-gray-500 text-sm whitespace-nowrap">{exp.period}</span>
          <ChevronDown 
            className={`h-5 w-5 text-gray-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
          />
        </div>
      </button>
      
      {isOpen && (
        <div className="px-6 pb-6 pt-2 border-t border-white/5">
          <ul className="space-y-3 ml-14">
            {exp.highlights.map((highlight, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-400 text-sm">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export function Experience() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="experience" className="py-24 bg-[#0d0d0d]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-primary text-sm tracking-widest uppercase mb-4">Career</p>
          <h2 className="text-4xl md:text-5xl font-serif text-white">
            Work <span className="text-primary italic">Experience</span>
          </h2>
          <p className="text-gray-500 mt-4">Click any role to expand details</p>
        </div>

        {/* Experience List */}
        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <ExperienceItem 
              key={index}
              exp={exp}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
