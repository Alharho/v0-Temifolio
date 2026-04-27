import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Academic Assessment System",
    category: "Web Application",
    description:
      "Designed engaging UI/UX for an academic assessment platform, focusing on user experience and data visualization.",
  },
  {
    title: "SnapShare",
    category: "Web Application",
    description:
      "Created the visual identity and interface design for a media sharing platform.",
  },
  {
    title: "inTally",
    category: "Web Application",
    description:
      "Developed the design system and user interface for a counting/tracking application.",
  },
  {
    title: "Charades",
    category: "Web Application",
    description:
      "Designed an interactive game interface with playful visuals and intuitive user flows.",
  },
  {
    title: "SignalSpark Academy Branding",
    category: "Brand Identity",
    description:
      "Created data-driven infographics and marketing collateral, contributing to 16.67% increase in client acquisition.",
  },
  {
    title: "Maktaris Herbals Rebrand",
    category: "Product Design",
    description:
      "Transformed product packaging and marketing materials, driving 30% increase in product sales.",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-2">
          <p className="text-primary font-mono text-sm tracking-widest uppercase">
            Featured Work
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Projects
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card rounded-xl p-6 hover:border-primary/30 transition-all group"
            >
              <div className="space-y-4">
                <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">
                  {project.category}
                </span>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 glow-orange px-8"
          >
            <a
              href="https://www.behance.net/temigfx"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              View All Projects on Behance
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
