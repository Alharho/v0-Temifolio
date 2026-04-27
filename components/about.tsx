import { Linkedin, Mail, Phone, ExternalLink } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-primary font-mono text-sm tracking-widest uppercase">
                About Me
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                Building Brands Through Design
              </h2>
            </div>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I&apos;m a highly creative Graphic Designer based in Lagos, Nigeria, with over 5 years 
                of experience delivering brand-focused designs and digital marketing campaigns.
              </p>
              <p>
                My expertise spans Adobe Creative Cloud, content strategy, project management, 
                and digital storytelling. I have a strong record of improving client engagement, 
                boosting campaign performance, and supporting business growth across diverse industries.
              </p>
              <p>
                I believe in the power of visual communication to transform businesses and create 
                meaningful connections with audiences.
              </p>
            </div>
            
            {/* Contact Links */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="mailto:olaleretemitopejamiu@gmail.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                Email
              </a>
              <a
                href="tel:+2347067296912"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" />
                +234 706 729 6912
              </a>
              <a
                href="https://www.linkedin.com/in/temitope-olalere"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href="https://www.behance.net/temigfx"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                Behance
              </a>
            </div>
          </div>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="glass-card rounded-xl p-6 text-center">
              <p className="text-4xl font-bold text-primary">5+</p>
              <p className="text-sm text-muted-foreground mt-2">Years Experience</p>
            </div>
            <div className="glass-card rounded-xl p-6 text-center">
              <p className="text-4xl font-bold text-primary">25%</p>
              <p className="text-sm text-muted-foreground mt-2">Engagement Increase</p>
            </div>
            <div className="glass-card rounded-xl p-6 text-center">
              <p className="text-4xl font-bold text-primary">30%</p>
              <p className="text-sm text-muted-foreground mt-2">Sales Growth</p>
            </div>
            <div className="glass-card rounded-xl p-6 text-center">
              <p className="text-4xl font-bold text-primary">5+</p>
              <p className="text-sm text-muted-foreground mt-2">Web Applications</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
