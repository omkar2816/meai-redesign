"use client";

import { motion } from "framer-motion";
import { Globe2, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ExportPromotionPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-24">
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#00A651]/5 rounded-bl-[100px] pointer-events-none" />
        <div className="container mx-auto px-8 md:px-16 lg:px-24 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-16 h-16 rounded-2xl bg-[#00A651]/10 flex items-center justify-center mb-8"
            >
              <Globe2 className="w-8 h-8 text-[#00A651]" />
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6"
            >
              Export Promotion
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed"
            >
              Enter new global markets with strategic insights, compliance support, and international trade networks. Go global seamlessly.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-8 md:px-16 lg:px-24 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Go Global</h2>
            <ul className="space-y-6">
              {[
                "Market Entry Strategy & Research",
                "International Compliance & Certifications",
                "Cross-border Logistics Network",
                "Foreign Buyer Matchmaking"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-[#00A651] mr-4 flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-slate-700 dark:text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Link href="/join">
                <Button className="bg-[#00A651] hover:bg-[#00A651]/90 text-white rounded-full px-8 py-6 h-auto text-lg shadow-lg">
                  Start Exporting <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative h-[400px] rounded-3xl overflow-hidden bg-slate-200 dark:bg-slate-800">
            <img src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop" alt="Export Promotion" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>
    </div>
  );
}
