"use client";

import { motion } from "framer-motion";
import { Globe, LineChart, Network, Building2, Shuffle, Handshake } from "lucide-react";

const benefits = [
  {
    title: "Global Market Access",
    description: "Navigate international trade with expert guidance and established export channels.",
    icon: Globe,
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  },
  {
    title: "Investor Connections",
    description: "Get direct introductions to venture capital, private equity, and institutional investors.",
    icon: LineChart,
    color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  },
  {
    title: "Industry Networking",
    description: "Join a curated community of top-tier manufacturing and export leaders.",
    icon: Network,
    color: "bg-primary/10 text-primary",
  },
  {
    title: "Government Facilitation",
    description: "Fast-track regulatory compliance, licensing, and policy advocacy.",
    icon: Building2,
    color: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
  },
  {
    title: "Business Matchmaking",
    description: "AI-driven connections between buyers, suppliers, and joint venture partners.",
    icon: Shuffle,
    color: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
  },
  {
    title: "International Collaborations",
    description: "Form strategic alliances with global manufacturing hubs and technology providers.",
    icon: Handshake,
    color: "bg-pink-500/10 text-pink-600 dark:text-pink-400",
  },
];

export function Benefits() {
  return (
    <section id="benefits" className="py-24 bg-slate-50 dark:bg-slate-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-1/4 -right-1/4 w-[1000px] h-[1000px] rounded-full bg-gradient-to-br from-primary/5 to-transparent blur-[100px]" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-accent/5 to-transparent blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
            Why Businesses Join MEAI
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            An exclusive ecosystem engineered to remove friction from your growth trajectory.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group relative bg-white dark:bg-slate-950 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${benefit.color}`}>
                <benefit.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
                {benefit.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
