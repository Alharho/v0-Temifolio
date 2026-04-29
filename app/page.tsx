import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Process } from "@/components/process"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d0d0d]">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Process />
      <Skills />
      <Contact />
      <Footer />
      <WhatsAppButton service="Graphic Design" />
    </main>
  )
}
