"use client";

import { motion } from "framer-motion";
import { ArrowRight, Factory, Globe2, Landmark, Handshake } from "lucide-react";

export function CoreSolutions() {
  return (
    <section id="solutions" className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
            Core Growth Solutions
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Comprehensive ecosystems designed to accelerate your business growth across critical verticals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Manufacturing Growth (Large) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 group relative overflow-hidden rounded-3xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 p-8 shadow-sm hover:shadow-xl transition-all duration-500"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Factory className="w-48 h-48 text-primary" />
            </div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Factory className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Manufacturing Growth</h3>
                <p className="text-slate-600 dark:text-slate-400 max-w-md">
                  Scale your operations with advanced manufacturing frameworks, technology adoption, and capacity building support tailored for modern enterprises.
                </p>
              </div>
              <div className="mt-8 flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform cursor-pointer w-max">
                Explore Frameworks <ArrowRight className="ml-2 w-5 h-5" />
              </div>
            </div>
          </motion.div>

          {/* Card 2: Export Promotion */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group relative overflow-hidden rounded-3xl bg-primary border border-primary-foreground/10 p-8 shadow-sm hover:shadow-xl transition-all duration-500 text-white"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-700">
              <Globe2 className="w-32 h-32" />
            </div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6 backdrop-blur-md">
                  <Globe2 className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Export Promotion</h3>
                <p className="text-primary-foreground/80">
                  Enter new global markets with strategic insights, compliance support, and international trade networks.
                </p>
              </div>
              <div className="mt-8 flex items-center font-semibold group-hover:translate-x-2 transition-transform cursor-pointer w-max">
                Go Global <ArrowRight className="ml-2 w-5 h-5" />
              </div>
            </div>
          </motion.div>

          {/* Card 3: Investments & Funding */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group relative overflow-hidden rounded-3xl bg-secondary dark:bg-secondary/90 border border-secondary/20 p-8 shadow-sm hover:shadow-xl transition-all duration-500"
          >
            <div className="absolute -bottom-8 -right-8 opacity-20 group-hover:rotate-12 transition-transform duration-700">
              <Landmark className="w-48 h-48 text-secondary-foreground" />
            </div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-secondary-foreground/10 flex items-center justify-center mb-6">
                  <Landmark className="w-7 h-7 text-secondary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-secondary-foreground mb-4">Investments & Funding</h3>
                <p className="text-secondary-foreground/80">
                  Unlock capital streams and connect with investors ready to back high-growth manufacturing ventures.
                </p>
              </div>
              <div className="mt-8 flex items-center text-secondary-foreground font-semibold group-hover:translate-x-2 transition-transform cursor-pointer w-max">
                Access Capital <ArrowRight className="ml-2 w-5 h-5" />
              </div>
            </div>
          </motion.div>

          {/* Card 4: Strategic Partnerships (Large) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 group relative overflow-hidden rounded-3xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 p-8 shadow-sm hover:shadow-xl transition-all duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10 h-full flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
              <div className="max-w-md">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                  <Handshake className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Strategic Partnerships</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Forge powerful alliances with industry leaders, government bodies, and international organizations to multiply your impact.
                </p>
              </div>
              <div className="flex-shrink-0">
                <button className="flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white group-hover:bg-accent group-hover:text-white transition-colors">
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
