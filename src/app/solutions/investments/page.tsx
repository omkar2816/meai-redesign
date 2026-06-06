"use client";

import { motion } from "framer-motion";
import { Landmark, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function InvestmentsPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-24">
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#F5C400]/5 rounded-bl-[100px] pointer-events-none" />
        <div className="container mx-auto px-8 md:px-16 lg:px-24 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-16 h-16 rounded-2xl bg-[#F5C400]/10 flex items-center justify-center mb-8"
            >
              <Landmark className="w-8 h-8 text-[#F5C400]" />
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6"
            >
              Investments & Funding
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed"
            >
              Unlock capital streams and connect with investors ready to back high-growth manufacturing ventures. Access the capital you need to scale.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-8 md:px-16 lg:px-24 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Access Capital</h2>
            <ul className="space-y-6">
              {[
                "Venture Capital & Private Equity Matchmaking",
                "Government Grant Assistance",
                "Foreign Direct Investment (FDI) Facilitation",
                "Mergers & Acquisitions Advisory"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-[#F5C400] mr-4 flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-slate-700 dark:text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Link href="/join">
                <Button className="bg-[#F5C400] hover:bg-[#F5C400]/90 text-slate-900 rounded-full px-8 py-6 h-auto text-lg shadow-lg font-bold">
                  Find Investors <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative h-[400px] rounded-3xl overflow-hidden bg-slate-200 dark:bg-slate-800">
            <img src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=2070&auto=format&fit=crop" alt="Investments" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>
    </div>
  );
}
