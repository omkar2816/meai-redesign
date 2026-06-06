"use client";

import { motion } from "framer-motion";
import { Globe, Activity, Zap, Users, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const solutions = [
  {
    id: "export",
    title: "Export Promotions",
    subtitle: "Scale Your Business Globally",
    icon: Globe,
    description: "Navigate international markets with confidence. We provide end-to-end export assistance, from market intelligence and regulatory compliance to finding international buyers.",
    color: "from-blue-500 to-cyan-400",
    bgColor: "bg-blue-500/10 dark:bg-blue-500/5",
    features: [
      "International Market Intelligence & Research",
      "Export Documentation & Compliance Support",
      "Global Trade Fair Participation",
      "B2B Matchmaking with Foreign Buyers"
    ],
    image: "https://images.unsplash.com/photo-1586528116311-ad8ed7c82633?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "manufacturing",
    title: "Manufacturing Growth",
    subtitle: "Optimize & Scale Operations",
    icon: Activity,
    description: "Embrace Industry 4.0 and lean manufacturing. We help enterprises optimize their production lines, integrate advanced technologies, and improve overall operational efficiency.",
    color: "from-[#F5C400] to-yellow-500",
    bgColor: "bg-[#F5C400]/10 dark:bg-[#F5C400]/5",
    features: [
      "Industry 4.0 & Automation Integration",
      "Supply Chain Optimization",
      "Quality Control & Lean Management",
      "Technology Transfer Assistance"
    ],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
    reverse: true
  },
  {
    id: "investments",
    title: "Investments",
    subtitle: "Attract Capital for Growth",
    icon: Zap,
    description: "Unlock funding opportunities. MEAI connects promising manufacturing enterprises with venture capitalists, private equity firms, and government funding schemes to fuel aggressive expansion.",
    color: "from-[#00A651] to-emerald-500",
    bgColor: "bg-[#00A651]/10 dark:bg-[#00A651]/5",
    features: [
      "VC & Private Equity Matchmaking",
      "Government Subsidy & Grant Navigation",
      "Pitch Deck Preparation & Advisory",
      "FDI Facilitation & Joint Ventures"
    ],
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "partnerships",
    title: "Strategic Partnership",
    subtitle: "Collaborate to Win",
    icon: Users,
    description: "Build an ecosystem of success. We facilitate strategic alliances between complementary businesses, academic institutions, and global tech providers to drive mutual growth.",
    color: "from-[#403A8B] to-indigo-500",
    bgColor: "bg-[#403A8B]/10 dark:bg-[#403A8B]/5",
    features: [
      "Cross-industry Alliances",
      "Academia-Industry Collaboration",
      "Technology Licensing & Sharing",
      "Co-manufacturing Agreements"
    ],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
    reverse: true
  }
];

export default function SolutionsPage() {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen pb-24">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden text-center">
        <div className="absolute top-0 inset-x-0 h-full bg-gradient-to-b from-[#403A8B]/10 to-transparent pointer-events-none" />
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#F5C400]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-40 left-20 w-96 h-96 bg-[#00A651]/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="container mx-auto px-8 md:px-16 lg:px-24 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight"
            >
              Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#403A8B] to-[#F28C1B]">Solutions</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              Comprehensive strategic frameworks designed to accelerate growth, secure capital, and expand your market footprint globally.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Solutions Sections */}
      <section className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="space-y-32 py-12">
          {solutions.map((solution, idx) => (
            <div key={solution.id} id={solution.id} className="scroll-mt-32">
              <div className={`flex flex-col lg:flex-row gap-16 items-center ${solution.reverse ? 'lg:flex-row-reverse' : ''}`}>
                
                {/* Image/Visual Side */}
                <motion.div 
                  initial={{ opacity: 0, x: solution.reverse ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="w-full lg:w-1/2 relative"
                >
                  <div className={`absolute inset-0 translate-x-4 translate-y-4 rounded-3xl ${solution.bgColor} -z-10`} />
                  <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl border border-white/20 dark:border-slate-800/50">
                    {/* Using standard img to avoid Next.js image domain configuration issues */}
                    <img 
                      src={solution.image} 
                      alt={solution.title} 
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30`}>
                          <solution.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-white font-semibold text-lg">{solution.title}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Content Side */}
                <motion.div 
                  initial={{ opacity: 0, x: solution.reverse ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="w-full lg:w-1/2"
                >
                  <div className={`inline-flex items-center rounded-full border px-3 py-1 text-sm font-semibold mb-6 ${solution.bgColor} text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-800`}>
                    <solution.icon className="mr-2 h-4 w-4" />
                    {solution.title}
                  </div>
                  
                  <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
                    {solution.subtitle}
                  </h2>
                  
                  <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                    {solution.description}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                    {solution.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 mt-0.5 text-[#00A651] shrink-0" />
                        <span className="text-slate-700 dark:text-slate-300 font-medium leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link href="/join">
                    <Button className={`bg-gradient-to-r ${solution.color} hover:opacity-90 text-white rounded-full px-8 py-6 h-auto text-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1`}>
                      Get Started <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                </motion.div>
                
              </div>
            </div>
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
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#403A8B] rounded-full blur-[100px] opacity-40" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#F5C400] rounded-full blur-[100px] opacity-20" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-slate-300 mb-10">
              Join the MEAI ecosystem today and get immediate access to our full suite of enterprise solutions, networking events, and dedicated support.
            </p>
            <Link href="/join" className="inline-block w-full sm:w-auto">
              <Button className="w-full sm:w-auto bg-white hover:bg-slate-100 text-slate-900 rounded-full px-6 sm:px-10 py-4 sm:py-7 h-auto text-lg sm:text-xl font-bold shadow-xl transition-transform hover:scale-105 whitespace-normal text-center">
                Apply for Membership
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
