"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const navLinks = [
  { href: "#about", label: "Home" },
  { href: "#skills", label: "Projects" },
  { href: "#experience", label: "About" },
  { href: "#contact", label: "Contact" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#0d0d0d]/90 backdrop-blur-xl border-b border-white/5 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
              <Image
                src="/logo.png"
                alt="Temi Logo"
                width={80}
                height={32}
                className="h-8 w-auto"
                priority
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, idx) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
              >
                <Link
                  href={link.href}
                  className="relative text-sm text-gray-400 hover:text-white transition-colors group"
                >
                  {link.label}
                  <motion.span
                    className="absolute bottom-0 left-0 h-0.5 bg-primary rounded-full"
                    initial={{ width: "0%" }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: navLinks.length * 0.05 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  asChild
                  className="bg-primary text-black hover:bg-primary/90 transition-all rounded-full px-6 font-medium shadow-md hover:shadow-lg"
                >
                  <a href="/cv.pdf">
                    ↓ Download CV
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotate: isMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isMenuOpen ? 1 : 0, 
          height: isMenuOpen ? "auto" : 0 
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="md:hidden bg-[#0d0d0d]/95 backdrop-blur-md border-t border-white/5 overflow-hidden"
      >
        <nav className="flex flex-col px-4 py-4 gap-4">
          {navLinks.map((link, idx) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? 0 : -20 }}
              transition={{ delay: idx * 0.05 }}
            >
              <Link
                href={link.href}
                className="text-sm text-gray-400 hover:text-white transition-colors py-2 block"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? 0 : -20 }}
            transition={{ delay: navLinks.length * 0.05 }}
          >
            <Button
              asChild
              className="bg-primary text-black hover:bg-primary/90 transition-all rounded-full w-full font-medium"
            >
              <a href="/cv.pdf">
                ↓ Download CV
              </a>
            </Button>
          </motion.div>
        </nav>
      </motion.div>
    </header>
  )
}
