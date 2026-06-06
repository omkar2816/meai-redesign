"use client";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Wrench, Zap, Cpu, Car, Scissors, Coffee, ShoppingCart, Pill, Briefcase, Rocket } from "lucide-react";

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
    <section id="industries" className="py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
            Industries We Empower
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Driving sector-specific growth across India's most critical economic pillars.
          </p>
        </div>

        <Tabs defaultValue="manufacturing" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="flex flex-wrap h-auto justify-center gap-2 bg-transparent p-0">
              {industries.map((ind) => (
                <TabsTrigger 
                  key={ind.id} 
                  value={ind.id}
                  className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-full px-6 py-3 bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800 transition-all data-[state=active]:shadow-md border border-transparent data-[state=active]:border-primary/20"
                >
                  <ind.icon className="w-4 h-4 mr-2" />
                  {ind.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {industries.map((ind) => (
            <TabsContent key={ind.id} value={ind.id} className="mt-0 focus-visible:outline-none focus-visible:ring-0">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="max-w-4xl mx-auto"
              >
                <div className="relative overflow-hidden rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-12 text-center shadow-inner">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
                    <ind.icon className="w-96 h-96" />
                  </div>
                  
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-20 h-20 rounded-2xl bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center mb-8 border border-slate-100 dark:border-slate-700">
                      <ind.icon className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">{ind.label}</h3>
                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
                      {ind.description}
                    </p>
                    
                    <button className="mt-10 px-8 py-3 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium hover:bg-primary dark:hover:bg-primary transition-colors">
                      View {ind.label} Opportunities
                    </button>
                  </div>
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
