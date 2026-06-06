"use client";

import { motion } from "framer-motion";

// Mock partner logos using placeholders
const partners = [
  { name: "FISA", logo: "/partners/meai1.jpg" },
  { name: "IITC", logo: "/partners/meai2.jpg" },
  { name: "WSTC", logo: "/partners/meai3.jpg" },
  { name: "MIDA", logo: "/partners/meai4.jpg" },
  { name: "PIAI", logo: "/partners/meai5.jpg" },
  { name: "SCI", logo: "/partners/meai6.jpg" },
  { name: "WEDC", logo: "/partners/meai7.jpg" },
  { name: "SBMI", logo: "/partners/meai8.jpg" },
  { name: "SBF", logo: "/partners/meai9.jpg" },
  { name: "STDC", logo: "/partners/meai10.jpg" },
  { name: "SCM", logo: "/partners/meai11.jpg" },
];

export function PartnerEcosystem() {
  return (
    <section className="py-20 bg-white dark:bg-slate-950 overflow-hidden border-y border-slate-100 dark:border-slate-900">
      <div className="container mx-auto px-4 md:px-8 text-center mb-10">
        <h3 className="text-m font-semibold tracking-wider text-slate-500 uppercase">
          Trusted by industry leaders & global organizations
        </h3>
      </div>

      <div className="relative flex overflow-x-hidden w-full group">
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white dark:from-slate-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white dark:from-slate-950 to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex space-x-16 items-center px-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
        >
          {/* Double the array for seamless looping */}
          {[...partners, ...partners].map((partner, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 opacity-50 hover:opacity-100 transition-opacity cursor-default filter grayscale hover:grayscale-0"
            >
              <img src={partner.logo} alt={partner.name} className="h-25 w-auto object-contain rounded" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
