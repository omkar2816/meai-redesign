"use client";

import { motion } from "framer-motion";
import { Wrench, Zap, Cpu, Car, Scissors, Coffee, ShoppingCart, Pill, Briefcase, Rocket, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const industries = [
  { id: "manufacturing", label: "Manufacturing", icon: Wrench, description: "Advanced production systems, industry 4.0 integration, and supply chain optimization." },
  { id: "engineering", label: "Engineering", icon: Zap, description: "Heavy machinery, precision engineering, and infrastructural development." },
  { id: "electronics", label: "Electronics", icon: Cpu, description: "Semiconductors, consumer electronics, and hardware innovation." },
  { id: "automotive", label: "Automotive", icon: Car, description: "EV transition, auto components, and vehicle manufacturing." },
  { id: "textile", label: "Textile", icon: Scissors, description: "Apparel manufacturing, sustainable fabrics, and global exports." },
  { id: "food", label: "Food Processing", icon: Coffee, description: "Agri-tech, packaged foods, and cold chain logistics." },
  { id: "fmcg", label: "FMCG", icon: ShoppingCart, description: "Fast-moving consumer goods, retail distribution, and packaging." },
  { id: "pharma", label: "Pharmaceuticals", icon: Pill, description: "Active pharmaceutical ingredients (APIs), biotech, and global health." },
  { id: "smes", label: "SMEs", icon: Briefcase, description: "Small and medium enterprises driving grassroots economic growth." },
  { id: "startups", label: "Startups", icon: Rocket, description: "Innovative new ventures disrupting traditional manufacturing models." },
];

export function Industries() {
  return (
    <section id="industries" className="py-24 bg-slate-50 dark:bg-slate-950 relative overflow-hidden border-t border-slate-200 dark:border-slate-800">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[600px] bg-gradient-to-r from-[#403A8B]/10 via-[#F5C400]/10 to-[#F28C1B]/10 blur-3xl rounded-full pointer-events-none opacity-50 dark:opacity-20" />

      <div className="container mx-auto px-8 md:px-16 lg:px-24 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
              Empowering <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#403A8B] to-[#F28C1B]">Every Sector</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Driving sector-specific growth across India's most critical economic pillars. Explore opportunities tailored to your industry.
            </p>
          </div>
          <Link href="/join" className="group hidden md:flex items-center text-sm font-bold text-[#403A8B] dark:text-[#F5C400] hover:opacity-80 transition-opacity">
            Join The Ecosystem
            <div className="ml-2 w-8 h-8 rounded-full bg-[#403A8B]/10 dark:bg-[#F5C400]/10 flex items-center justify-center group-hover:translate-x-1 transition-transform">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {industries.map((ind, idx) => (
            <motion.div
              key={ind.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
            >
              <div className="group h-full bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 hover:border-[#403A8B]/30 dark:hover:border-[#F5C400]/30 hover:shadow-2xl hover:shadow-[#403A8B]/5 transition-all duration-300 relative overflow-hidden flex flex-col">

                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#403A8B]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#403A8B] dark:group-hover:bg-[#F5C400] transition-all duration-300">
                    <ind.icon className="w-6 h-6 text-[#403A8B] dark:text-[#F5C400] group-hover:text-white dark:group-hover:text-slate-900 transition-colors" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-[#403A8B] dark:group-hover:text-[#F5C400] transition-colors">
                    {ind.label}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 flex-grow">
                    {ind.description}
                  </p>
                </div>

                <div className="mt-auto relative z-10 flex items-center text-sm font-semibold text-[#403A8B] dark:text-[#F5C400] opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  Explore <ArrowUpRight className="ml-1 w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 md:hidden flex justify-center">
          <Link href="/join" className="group flex items-center text-sm font-bold text-[#403A8B] dark:text-[#F5C400] hover:opacity-80 transition-opacity">
            Join The Ecosystem
            <div className="ml-2 w-8 h-8 rounded-full bg-[#403A8B]/10 dark:bg-[#F5C400]/10 flex items-center justify-center group-hover:translate-x-1 transition-transform">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
