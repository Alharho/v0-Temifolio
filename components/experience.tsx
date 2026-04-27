const experiences = [
  {
    title: "Creative Designer, Content Strategist",
    company: "SignalSpark Academy Ltd.",
    location: "Lagos",
    period: "2023 - Present",
    type: "Hybrid",
    highlights: [
      "Spearheaded designs of data-driven infographics, increasing client engagement by 25%",
      "Produced marketing collateral contributing to 16.67% increase in client acquisition",
      "Designed optimized email templates resulting in higher open rates and retention",
      "Built compelling presentations simplifying complex financial insights",
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
    title: "Graphic Designer",
    company: "Mummy's Place Int'l School",
    location: "Akure",
    period: "2022 - 2023",
    type: "Support Role",
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

export function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-2">
          <p className="text-primary font-mono text-sm tracking-widest uppercase">
            Career Journey
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Professional Experience
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-[5px] md:-translate-x-1.5 mt-2 glow-orange" />

                {/* Content */}
                <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="glass-card rounded-xl p-6 hover:border-primary/30 transition-colors">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">
                        {exp.period}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {exp.type}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-foreground">
                      {exp.title}
                    </h3>
                    <p className="text-sm text-primary mb-4">
                      {exp.company} - {exp.location}
                    </p>
                    
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, hIndex) => (
                        <li
                          key={hIndex}
                          className="text-sm text-muted-foreground flex items-start gap-2"
                        >
                          <span className="text-primary mt-1.5 text-xs">&#9656;</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
