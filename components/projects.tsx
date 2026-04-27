import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    initial: "S",
    initialColor: "bg-blue-500",
    title: "Visual Branding & Social Media System",
    client: "SignalSpark Academy",
    description: "Full brand-identity overhaul — comprehensive brand guide and social-media design strategy to strengthen digital presence and drive client acquisition.",
    tags: ["Brand Identity", "Social Media", "Illustrator", "Photoshop"],
    behanceUrl: "https://www.behance.net/temigfx",
  },
  {
    initial: "M",
    initialColor: "bg-green-500",
    title: "Maktaris Herbals – Social Media Contents",
    client: "Maktaris Herbals",
    description: "Designed a full suite of social media marketing campaign graphics driving 50% increase in online engagement and 30% boost in product sales.",
    tags: ["Social Media", "Campaign Design", "Digital Marketing"],
    behanceUrl: "https://www.behance.net/temigfx",
  },
  {
    initial: "B",
    initialColor: "bg-orange-500",
    title: "Brum Africa – Brand Designs & Visual Illustration",
    client: "Brum Africa",
    description: "Logo design and visual illustration for a purpose-driven African brand. Developed a cohesive identity reflecting growth, connection and opportunity.",
    tags: ["Logo Design", "Brand Identity", "Illustration"],
    behanceUrl: "https://www.behance.net/temigfx",
  },
  {
    initial: "L",
    initialColor: "bg-purple-500",
    title: "Ledobiz – Brand Identity & Logo Style Guide",
    client: "Ledobiz Technologies",
    description: "Complete brand identity and comprehensive logo style guide for a technology company, establishing strong visual foundations across all touchpoints.",
    tags: ["Brand Identity", "Logo Design", "Style Guide"],
    behanceUrl: "https://www.behance.net/temigfx",
  },
  {
    initial: "S",
    initialColor: "bg-pink-500",
    title: "Snapshare – Real-Time Visual System",
    client: "Snapshare App",
    description: "UI/UX and visual identity design for a real-time photo sharing application, creating a dynamic and intuitive visual design system.",
    tags: ["UI/UX", "App Design", "Visual Identity"],
    behanceUrl: "https://www.behance.net/temigfx",
  },
  {
    initial: "K",
    initialColor: "bg-red-500",
    title: "Call of Duty Mobile – Tournament Campaign",
    client: "Kortis Legends / COD Community",
    description: "High-impact event branding and tournament campaign visuals for the Kortis Legends COD gaming community — from scattered assets to a cohesive masterpiece.",
    tags: ["Event Branding", "Campaign Design", "Gaming"],
    behanceUrl: "https://www.behance.net/temigfx",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#0d0d0d]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <p className="text-primary text-sm tracking-widest uppercase mb-4">Work</p>
            <h2 className="text-4xl md:text-5xl font-serif text-white">
              Featured <span className="text-primary italic">Projects</span>
            </h2>
          </div>
          <Button
            asChild
            variant="outline"
            className="border-white/20 text-white hover:bg-white/10 rounded-full"
          >
            <a
              href="https://www.behance.net/temigfx"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              Full Portfolio on Behance
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-[#fafafa] rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Project Header */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-10 h-10 ${project.initialColor} rounded-lg flex items-center justify-center text-white font-bold`}>
                    {project.initial}
                  </div>
                  <a
                    href={project.behanceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-600 transition-colors flex items-center gap-1 text-sm"
                  >
                    View on Behance
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
                
                <p className="text-gray-400 text-sm mb-2">{project.client}</p>
                <h3 className="text-gray-900 font-medium text-lg mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
