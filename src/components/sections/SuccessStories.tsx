"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp, Globe2, Factory } from "lucide-react";
import Link from "next/link";

const stories = [
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
];

export function SuccessStories() {
  return (
    <section className="py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
              Proven Impact
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Real business outcomes driven by the MEAI ecosystem. We measure success in revenue, funding, and global expansion.
            </p>
          </div>
          <Link href="/case-studies" className="flex items-center text-primary font-semibold hover:text-primary/80 transition-colors">
            View All Case Studies <ArrowUpRight className="ml-1 w-5 h-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stories.map((story, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group relative overflow-hidden rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 hover:shadow-xl transition-all duration-300"
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
              
              <div className="space-y-1">
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
      </div>
    </section>
  );
}
