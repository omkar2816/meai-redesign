"use client";

import { motion } from "framer-motion";
import { TrendingUp, Globe2, Factory, Zap, ShieldCheck, Cpu, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const allStories = [
  {
    company: "TechFab India",
    industry: "Manufacturing",
    metric: "+300%",
    metricLabel: "Export Volume Growth",
    duration: "in 18 months",
    icon: Globe2,
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    company: "AeroParts Global",
    industry: "Engineering",
    metric: "$50M",
    metricLabel: "FDI Secured",
    duration: "Series B Funding",
    icon: TrendingUp,
    gradient: "from-emerald-400 to-emerald-600",
  },
  {
    company: "Nova Electronics",
    industry: "Electronics",
    metric: "45",
    metricLabel: "New Global Markets",
    duration: "Market Expansion",
    icon: Factory,
    gradient: "from-orange-400 to-orange-600",
  },
  {
    company: "EcoSteel Solutions",
    industry: "Heavy Industry",
    metric: "-40%",
    metricLabel: "Carbon Footprint",
    duration: "Green Manufacturing",
    icon: ShieldCheck,
    gradient: "from-[#00A651] to-emerald-400",
  },
  {
    company: "Automata Robotics",
    industry: "Automation",
    metric: "10x",
    metricLabel: "Production Speed",
    duration: "Industry 4.0 Integration",
    icon: Cpu,
    gradient: "from-[#F5C400] to-yellow-500",
  },
  {
    company: "Nexus Pharma",
    industry: "Pharmaceuticals",
    metric: "$120M",
    metricLabel: "Joint Venture Deal",
    duration: "Cross-border Partnership",
    icon: Zap,
    gradient: "from-[#403A8B] to-indigo-600",
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen pb-24">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden text-center">
        <div className="absolute top-0 inset-x-0 h-full bg-gradient-to-b from-[#00A651]/10 to-transparent pointer-events-none" />
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#403A8B]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-[#F5C400]/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="container mx-auto px-8 md:px-16 lg:px-24 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-semibold mb-6 bg-white/50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 text-[#00A651]"
            >
              Proven Impact
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight"
            >
              Case <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A651] to-emerald-500">Studies</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              Discover how MEAI has transformed businesses across India through strategic partnerships, investments, and global market expansion.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="container mx-auto px-8 md:px-16 lg:px-24 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allStories.map((story, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group relative overflow-hidden rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">{story.company}</h3>
                  <p className="text-sm text-slate-500 font-medium">{story.industry}</p>
                </div>
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${story.gradient} flex items-center justify-center text-white shadow-lg`}>
                  <story.icon className="w-4 h-4" />
                </div>
              </div>
              
              <div className="space-y-1 mb-8 flex-grow">
                <div className={`text-5xl font-extrabold tracking-tighter bg-clip-text text-transparent bg-gradient-to-br ${story.gradient}`}>
                  {story.metric}
                </div>
                <p className="text-base font-semibold text-slate-900 dark:text-white">
                  {story.metricLabel}
                </p>
                <p className="text-xs text-slate-500">
                  {story.duration}
                </p>
              </div>

              {/* Decorative background element */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br from-transparent to-slate-200 dark:to-slate-800 rounded-full blur-2xl opacity-50 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="container mx-auto px-8 md:px-16 lg:px-24 mt-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900 dark:bg-slate-900 rounded-3xl p-12 text-center relative overflow-hidden border border-slate-800"
        >
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#00A651] rounded-full blur-[100px] opacity-20" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#403A8B] rounded-full blur-[100px] opacity-40" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Become Our Next Success Story</h2>
            <p className="text-xl text-slate-300 mb-10">
              Join MEAI today to unlock unprecedented growth, access global markets, and connect with top industry leaders.
            </p>
            <Link href="/join">
              <Button className="bg-[#00A651] hover:bg-[#00A651]/90 text-white rounded-full px-10 py-7 h-auto text-xl font-bold shadow-xl transition-transform hover:scale-105">
                Join the Ecosystem <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
