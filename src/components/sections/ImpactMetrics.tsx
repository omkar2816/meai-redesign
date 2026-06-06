"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

function AnimatedCounter({ value, suffix = "", duration = 2 }: { value: number, suffix?: string, duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const totalSteps = Math.ceil(duration * 60);
      const increment = end / totalSteps;
      let currentStep = 0;

      const timer = setInterval(() => {
        start += increment;
        currentStep++;
        
        if (currentStep >= totalSteps) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);

      return () => clearInterval(timer);
    }
  }, [value, duration, isInView]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export function ImpactMetrics() {
  const metrics = [
    { label: "Businesses Supported", value: 5000, suffix: "+" },
    { label: "Industry Partners", value: 150, suffix: "+" },
    { label: "Export Opportunities", value: 1000, suffix: "+" },
    { label: "Strategic Collaborations", value: 300, suffix: "+" },
  ];

  return (
    <section className="py-24 bg-white dark:bg-slate-950 border-y border-slate-100 dark:border-slate-900 relative">
      <div className="absolute inset-0 bg-grid-slate-100/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-900/[0.04]" />
      <div className="container mx-auto px-8 md:px-16 lg:px-24 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          {metrics.map((metric, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-2 p-6 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors"
            >
              <AnimatedCounter value={metric.value} suffix={metric.suffix} />
              <span className="text-sm md:text-base font-medium text-slate-500 dark:text-slate-400">
                {metric.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
