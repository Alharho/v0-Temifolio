"use client"

import { motion } from "framer-motion"

const brands = [
  "SIGNALSPARK",
  "MAKTARIS HERBALS",
  "BRUM AFRICA",
  "LEDOBIZ",
  "SNAPSHARE",
  "KORTIS LEGENDS",
  "THETRYBE CO",
  "HIGAINFX",
  "MUMMY'S PLACE",
]

export function TrustedBrands() {
  return (
    <section className="py-12 sm:py-16 bg-[#0d0d0d] border-y border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs sm:text-sm text-gray-500 tracking-widest uppercase mb-2">
            Trusted across fintech, FMCG, education & tech
          </p>
          <p className="text-xs text-gray-600">— 2019 / 2026</p>
        </div>

        {/* Scrolling Marquee */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-8 whitespace-nowrap"
            animate={{ x: [0, -1000] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {/* First set of brands */}
            {brands.map((brand, i) => (
              <div
                key={`${brand}-1-${i}`}
                className="flex-shrink-0 text-sm sm:text-base text-gray-600 hover:text-primary transition-colors cursor-pointer"
              >
                {brand}
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {brands.map((brand, i) => (
              <div
                key={`${brand}-2-${i}`}
                className="flex-shrink-0 text-sm sm:text-base text-gray-600 hover:text-primary transition-colors cursor-pointer"
              >
                {brand}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
