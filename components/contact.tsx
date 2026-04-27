"use client"

import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Linkedin } from 'lucide-react'

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'temigrafix@gmail.com', href: 'mailto:temigrafix@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+234 706 729 6912', href: 'tel:+2347067296912' },
  { icon: MapPin, label: 'Location', value: 'Lagos, Nigeria', href: null },
]

export function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-primary/5 rounded-full blur-[200px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs text-primary tracking-widest uppercase">Get In Touch</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 text-white">
            Let&apos;s Create <span className="text-primary italic">Together</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-lg mx-auto">
            Have a project in mind? Looking for a creative partner? I&apos;d love to hear about your vision.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="backdrop-blur-md bg-white/5 rounded-2xl p-8 border border-white/10 space-y-8">
            {/* Contact Info */}
            <div className="space-y-6">
              {contactInfo.map(info => (
                <div key={info.label} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">{info.label}</p>
                    {info.href ? (
                      <a href={info.href} className="text-sm text-white hover:text-primary transition-colors">{info.value}</a>
                    ) : (
                      <p className="text-sm text-white">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-white/10">
              <p className="text-xs text-gray-500 mb-4">Find my work & connect</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://www.behance.net/temigfx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl backdrop-blur-md bg-white/5 border border-primary/20 text-sm text-primary hover:bg-primary/10 transition-all"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029H23.726zm-7.726-3h3.427c-.123-1.979-1.159-2.688-1.703-2.688-1.279 0-1.712.958-1.724 2.688zM5 8h4.5c2.7 0 4.5 1.35 4.5 3.375 0 1.215-.675 2.025-1.8 2.475C13.5 14.4 14.25 15.3 14.25 16.5 14.25 19.05 12.375 20 9.75 20H5V8zm2 4.5h2.25c.9 0 1.5-.45 1.5-1.2 0-.675-.6-1.05-1.5-1.05H7v2.25zm0 5h2.625c1.05 0 1.875-.525 1.875-1.425S10.725 14.7 9.75 14.7H7V17.5z"/>
                  </svg>
                  Behance Portfolio
                </a>
                <a
                  href="https://www.linkedin.com/in/temigfx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl backdrop-blur-md bg-white/5 border border-[#0077B5]/30 text-sm text-[#0077B5] hover:bg-[#0077B5]/10 transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
