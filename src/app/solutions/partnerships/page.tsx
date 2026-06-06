"use client";

import { motion } from "framer-motion";
import { Handshake, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function PartnershipsPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-24">
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#F28C1B]/5 rounded-bl-[100px] pointer-events-none" />
        <div className="container mx-auto px-8 md:px-16 lg:px-24 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-16 h-16 rounded-2xl bg-[#F28C1B]/10 flex items-center justify-center mb-8"
            >
              <Handshake className="w-8 h-8 text-[#F28C1B]" />
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6"
            >
              Strategic Partnerships
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed"
            >
              Forge powerful alliances with industry leaders, government bodies, and international organizations to multiply your impact.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-8 md:px-16 lg:px-24 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Build Alliances</h2>
            <ul className="space-y-6">
              {[
                "B2B Networking & Matchmaking",
                "Government & Policy Advocacy",
                "Joint Ventures & Technology Transfers",
                "Global Chamber of Commerce Connections"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-[#F28C1B] mr-4 flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-slate-700 dark:text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Link href="/join">
                <Button className="bg-[#F28C1B] hover:bg-[#F28C1B]/90 text-white rounded-full px-8 py-6 h-auto text-lg shadow-lg">
                  Connect Now <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative h-[400px] rounded-3xl overflow-hidden bg-slate-200 dark:bg-slate-800">
            <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop" alt="Strategic Partnerships" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>
    </div>
  );
}
