"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe2 } from "lucide-react";
import Link from "next/link";

function NetworkVisual() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex items-center justify-center opacity-30 dark:opacity-20">
      <div className="relative w-[800px] h-[800px] sm:w-[1000px] sm:h-[1000px]">
        {/* Abstract Globe Base */}
        <div className="absolute inset-0 rounded-full border border-primary/20 bg-gradient-to-tr from-primary/5 to-accent/5 animate-pulse-slow" />
        
        {/* Latitude/Longitude lines mock */}
        <svg className="absolute inset-0 w-full h-full text-primary/10" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="49" fill="none" stroke="currentColor" strokeWidth="0.2" />
          <ellipse cx="50" cy="50" rx="49" ry="20" fill="none" stroke="currentColor" strokeWidth="0.2" className="animate-[spin_20s_linear_infinite]" />
          <ellipse cx="50" cy="50" rx="20" ry="49" fill="none" stroke="currentColor" strokeWidth="0.2" className="animate-[spin_30s_linear_infinite]" />
        </svg>

        {/* Nodes and Connections */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
          <defs>
            <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.8" />
              <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="lineGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="var(--color-secondary)" stopOpacity="0.8" />
              <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Lines */}
          <motion.path
            d="M 20 40 Q 50 10 80 30"
            fill="none"
            stroke="url(#lineGrad1)"
            strokeWidth="0.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.path
            d="M 80 30 Q 70 70 30 80"
            fill="none"
            stroke="url(#lineGrad2)"
            strokeWidth="0.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2.5, ease: "easeInOut", repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
          />
          <motion.path
            d="M 30 80 Q 10 50 20 40"
            fill="none"
            stroke="url(#lineGrad1)"
            strokeWidth="0.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2.2, ease: "easeInOut", repeat: Infinity, repeatType: "reverse", delay: 1 }}
          />

          {/* Nodes */}
          <motion.circle cx="20" cy="40" r="1.5" fill="var(--color-primary)" filter="url(#glow)"
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 3, repeat: Infinity }} />
          <motion.circle cx="80" cy="30" r="2" fill="var(--color-secondary)" filter="url(#glow)"
            animate={{ scale: [1, 1.8, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 4, repeat: Infinity, delay: 0.5 }} />
          <motion.circle cx="30" cy="80" r="1.5" fill="var(--color-accent)" filter="url(#glow)"
            animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 3.5, repeat: Infinity, delay: 1 }} />
          <motion.circle cx="50" cy="50" r="3" fill="var(--color-success)" filter="url(#glow)"
            animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }} transition={{ duration: 5, repeat: Infinity }} />
        </svg>

        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/20 rounded-full blur-[100px]" />
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-background pt-20 pb-32">
      <NetworkVisual />
      
      <div className="container relative z-10 px-8 md:px-16 lg:px-24 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-slate-800 dark:text-slate-200 border-primary/20">
            <Globe2 className="h-4 w-4 text-primary" />
            <span>India's Leading Growth Ecosystem</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1]">
            Empowering Indian <br className="hidden md:block" />
            <span className="text-gradient">Manufacturers & Exporters</span><br />
            To Scale Globally
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-medium leading-relaxed">
            Helping businesses unlock exports, investments, manufacturing growth, strategic partnerships, and international opportunities.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button size="lg" className="h-14 px-8 text-base rounded-full bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/25 transition-all hover:-translate-y-1 w-full sm:w-auto">
              Become A Member <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-base rounded-full bg-white/50 backdrop-blur-sm border-slate-200 hover:bg-slate-50 text-slate-900 transition-all w-full sm:w-auto dark:bg-slate-900/50 dark:border-slate-800 dark:text-slate-100 dark:hover:bg-slate-800">
              Explore Opportunities
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Subtle bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
    </section>
  );
}
