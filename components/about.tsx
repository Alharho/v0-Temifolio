import Image from "next/image"
import { Paintbrush, Target, Lightbulb, Users } from "lucide-react"

const services = [
  {
    icon: Paintbrush,
    title: "Brand Identity",
    description: "Creating cohesive visual systems that communicate brand values and attract target audiences.",
  },
  {
    icon: Target,
    title: "Campaign Design",
    description: "Data-driven digital marketing campaigns that boost engagement and drive measurable results.",
  },
  {
    icon: Lightbulb,
    title: "Creative Strategy",
    description: "Merging design intuition with content strategy for impactful storytelling.",
  },
  {
    icon: Users,
    title: "Cross-Industry",
    description: "Proven track record across fintech, education, FMCG, and tech industries.",
  },
]

const tools = ["Adobe CC", "Figma", "CorelDraw", "Canva", "Motion Graphics", "UI/UX"]

export function About() {
  return (
    <section id="about" className="relative py-24 bg-[#0d0d0d] overflow-hidden">
      {/* Creative Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: "url('/images/bg-creative.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d] via-transparent to-[#0d0d0d]" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* About Me Header */}
        <div className="mb-16">
          <p className="text-primary text-sm tracking-widest uppercase mb-4">About Me</p>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
                Designing with{" "}
                <span className="text-primary italic">Purpose</span> &<br />
                Visual <span className="text-primary italic">Impact</span>
              </h2>
            </div>
            <div className="lg:flex lg:justify-end">
              {/* Quote Card with Profile Picture */}
              <div className="flex items-center gap-6">
                <div className="bg-[#1a1a1a] rounded-2xl p-6 max-w-md border border-white/5">
                  <div className="text-4xl text-primary mb-4">&quot;</div>
                  <p className="text-gray-400 italic leading-relaxed">
                    Design is not just what it looks like and feels like. Design is how it works — and how it drives results.
                  </p>
                  <div className="flex items-center gap-3 mt-6">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                      TJ
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">Temitope J. Olalere</p>
                      <p className="text-gray-500 text-xs">Creative Designer &middot; Lagos, Nigeria</p>
                    </div>
                  </div>
                </div>
                {/* Round Profile Picture */}
                <div className="hidden lg:block relative">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/30 shadow-lg shadow-primary/20">
                    <Image
                      src="/images/profile.jpg"
                      alt="Temitope J. Olalere"
                      width={128}
                      height={128}
                      className="w-full h-full object-cover object-center"
                      style={{ objectPosition: "center 20%" }}
                    />
                  </div>
                  <div className="absolute -inset-2 rounded-full border border-primary/10 -z-10" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bio Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-4 text-gray-400 leading-relaxed">
            <p>
              I&apos;m <span className="text-white font-medium">Temitope J. Olalere</span>, a highly creative Graphic Designer and Content Strategist based in Lagos, Nigeria. With over 5 years of experience, I specialise in delivering brand-focused designs, digital marketing campaigns, and cross-industry visual storytelling.
            </p>
            <p>
              My work spans from fintech infographics and email templates to product packaging and UI/UX design — always with a focus on engagement, clarity, and aesthetic excellence. I&apos;m skilled in the full Adobe Creative Cloud suite, Figma, Canva, and motion graphics tools.
            </p>
            {/* Tools Tags */}
            <div className="flex flex-wrap gap-2 pt-4">
              {tools.map((tool) => (
                <span 
                  key={tool}
                  className="px-3 py-1.5 bg-[#1a1a1a] text-gray-300 text-sm rounded-full border border-white/10"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-[#141414] rounded-2xl p-6 border border-white/5 hover:border-primary/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-[#1a1a1a] flex items-center justify-center mb-4 border border-white/10">
                <service.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-white font-medium mb-2">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
