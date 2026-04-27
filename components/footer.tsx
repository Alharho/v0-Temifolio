import Image from "next/image"
import Link from "next/link"
import { Linkedin, ExternalLink, Twitter, Instagram, Dribbble } from "lucide-react"

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
]

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/temitope-olalere",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "https://www.behance.net/temigfx",
    icon: ExternalLink,
    label: "Behance",
  },
  {
    href: "https://twitter.com",
    icon: Twitter,
    label: "Twitter",
  },
  {
    href: "https://instagram.com",
    icon: Instagram,
    label: "Instagram",
  },
  {
    href: "https://dribbble.com",
    icon: Dribbble,
    label: "Dribbble",
  },
]

export function Footer() {
  return (
    <footer className="py-12 bg-[#0a0a0a] border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Temi Logo"
              width={80}
              height={32}
              className="h-8 w-auto"
            />
          </Link>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary/30 transition-all"
                aria-label={link.label}
              >
                <link.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Navigation */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-gray-500 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} Temitope Olalere &middot; Lagos, Nigeria
          </p>
        </div>
      </div>
    </footer>
  )
}
