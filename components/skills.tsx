const skillCategories = [
  {
    title: "Design & Brand Development",
    skills: [
      "Adobe Illustrator",
      "Adobe Photoshop",
      "Adobe InDesign",
      "CorelDraw",
      "Figma",
      "Canva",
      "Brand Identity Systems",
      "Logo Design",
      "Typography",
      "Visual Communication",
    ],
  },
  {
    title: "Digital & Print Design",
    skills: [
      "Digital Marketing & Campaigns",
      "Print & Production Design",
      "Product & Packaging Design",
      "Email Marketing Templates",
      "UI/UX Design Principles",
      "Data Visualization",
      "Infographic Design",
    ],
  },
  {
    title: "Motion & Video",
    skills: [
      "PowerDirector",
      "CapCut",
      "Motion Graphics",
    ],
  },
  {
    title: "Professional & Strategic Skills",
    skills: [
      "Project Management",
      "Content Strategy",
      "Social Media Management",
      "Market Research",
      "Client Communication",
      "Cross-functional Collaboration",
      "Creative Problem-solving",
      "Presentation Design",
      "Visual Storytelling",
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-2">
          <p className="text-primary font-mono text-sm tracking-widest uppercase">
            Expertise
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Skills & Competencies
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="glass-card rounded-xl p-6 hover:border-primary/30 transition-colors"
            >
              <h3 className="text-lg font-semibold text-primary mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="text-sm text-muted-foreground bg-secondary/50 px-3 py-1.5 rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
