"use client";

import { motion } from "framer-motion";
import { Wrench, Zap, Cpu, Car, Scissors, Coffee, ShoppingCart, Pill, Briefcase, Rocket, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const industries = [
  { id: "manufacturing", label: "Manufacturing", icon: Wrench, description: "Advanced production systems, industry 4.0 integration, and supply chain optimization.", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop", details: "MEAI supports the core manufacturing sector by providing access to advanced Industry 4.0 technologies, facilitating technology transfers, and optimizing supply chains. We help manufacturers scale operations efficiently while reducing overhead costs through sustainable practices." },
  { id: "engineering", label: "Engineering", icon: Zap, description: "Heavy machinery, precision engineering, and infrastructural development.", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop", details: "For the engineering sector, MEAI bridges the gap between raw talent and industry demands. We foster innovation in heavy machinery and precision engineering through strategic global partnerships and access to specialized R&D funding." },
  { id: "electronics", label: "Electronics", icon: Cpu, description: "Semiconductors, consumer electronics, and hardware innovation.", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop", details: "The electronics industry is at the heart of modern growth. MEAI empowers electronics manufacturers by navigating complex import-export regulations for semiconductors, securing component supply chains, and driving local hardware innovation." },
  { id: "automotive", label: "Automotive", icon: Car, description: "EV transition, auto components, and vehicle manufacturing.", image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?q=80&w=2070&auto=format&fit=crop", details: "As the world shifts towards Electric Vehicles (EVs), MEAI is actively helping the automotive sector transition. We provide frameworks for EV battery manufacturing, auto component localization, and export promotion to global markets." },
  { id: "textile", label: "Textile", icon: Scissors, description: "Apparel manufacturing, sustainable fabrics, and global exports.", image: "https://images.unsplash.com/photo-1605289982774-9a6fef564df8?q=80&w=1964&auto=format&fit=crop", details: "India's textile heritage meets modern scale. MEAI assists textile manufacturers in adopting sustainable fabrics, complying with global environmental standards, and securing lucrative international contracts in the apparel market." },
  { id: "food", label: "Food Processing", icon: Coffee, description: "Agri-tech, packaged foods, and cold chain logistics.", image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974&auto=format&fit=crop", details: "MEAI strengthens the food processing industry by promoting agri-tech integration and modernizing cold chain logistics. We help food brands scale nationally and clear international regulatory hurdles for food exports." },
  { id: "fmcg", label: "FMCG", icon: ShoppingCart, description: "Fast-moving consumer goods, retail distribution, and packaging.", image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?q=80&w=1974&auto=format&fit=crop", details: "For FMCG companies, MEAI focuses on optimizing packaging costs, enhancing retail distribution networks, and securing strategic venture capital to rapidly expand market penetration and brand visibility." },
  { id: "pharma", label: "Pharmaceuticals", icon: Pill, description: "Active pharmaceutical ingredients (APIs), biotech, and global health.", image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?q=80&w=2070&auto=format&fit=crop", details: "MEAI champions India's position as the pharmacy of the world. We assist pharma and biotech companies in API manufacturing, clinical research collaborations, and navigating FDA approvals for global distribution." },
  { id: "smes", label: "SMEs", icon: Briefcase, description: "Small and medium enterprises driving grassroots economic growth.", image: "https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=2070&auto=format&fit=crop", details: "SMEs are the backbone of the economy. MEAI provides dedicated advisory services, micro-financing access, and B2B matchmaking to ensure small and medium enterprises can compete on a global stage." },
  { id: "startups", label: "Startups", icon: Rocket, description: "Innovative new ventures disrupting traditional manufacturing models.", image: "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?q=80&w=1932&auto=format&fit=crop", details: "MEAI acts as a catalyst for industrial startups. We provide incubation spaces, connect founders with angel investors, and offer mentorship from seasoned manufacturing veterans to turn innovative ideas into scalable realities." },
];

export function Industries() {
  return (
    <section id="industries" className="py-24 bg-slate-50 dark:bg-slate-950 relative overflow-hidden border-t border-slate-200 dark:border-slate-800">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[600px] bg-gradient-to-r from-[#403A8B]/10 via-[#F5C400]/10 to-[#F28C1B]/10 blur-3xl rounded-full pointer-events-none opacity-50 dark:opacity-20" />

      <div className="container mx-auto px-8 md:px-16 lg:px-24 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
              Empowering <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#403A8B] to-[#F28C1B]">Every Sector</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Driving sector-specific growth across India's most critical economic pillars. Explore opportunities tailored to your industry.
            </p>
          </div>
          <Link href="/join" className="group hidden md:flex items-center text-sm font-bold text-[#403A8B] dark:text-[#F5C400] hover:opacity-80 transition-opacity">
            Join The Ecosystem
            <div className="ml-2 w-8 h-8 rounded-full bg-[#403A8B]/10 dark:bg-[#F5C400]/10 flex items-center justify-center group-hover:translate-x-1 transition-transform">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {industries.map((ind, idx) => (
            <motion.div
              key={ind.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
            >
              <Dialog>
                <DialogTrigger className="text-left w-full group h-full bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 hover:border-[#403A8B]/30 dark:hover:border-[#F5C400]/30 hover:shadow-2xl hover:shadow-[#403A8B]/5 transition-all duration-300 relative overflow-hidden flex flex-col cursor-pointer">

                    {/* Hover gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#403A8B]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />

                    <div className="relative z-10">
                      <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#403A8B] dark:group-hover:bg-[#F5C400] transition-all duration-300 shadow-sm">
                        <ind.icon className="w-6 h-6 text-[#403A8B] dark:text-[#F5C400] group-hover:text-white dark:group-hover:text-slate-900 transition-colors" />
                      </div>

                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-[#403A8B] dark:group-hover:text-[#F5C400] transition-colors">
                        {ind.label}
                      </h3>

                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 flex-grow">
                        {ind.description}
                      </p>
                    </div>

                    <div className="mt-auto relative z-10 flex items-center text-sm font-bold text-[#403A8B] dark:text-[#F5C400] opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      Explore <ArrowUpRight className="ml-1 w-4 h-4" />
                    </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[550px] overflow-hidden rounded-[2rem] p-0 border-0 bg-white dark:bg-slate-900 shadow-2xl">
                  <div className="relative h-64 bg-slate-100 dark:bg-slate-800 w-full overflow-hidden">
                    <img src={ind.image} alt={ind.label} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
                    <div className="absolute bottom-6 left-6 flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 shadow-lg">
                        <ind.icon className="w-7 h-7 text-white drop-shadow-md" />
                      </div>
                      <DialogTitle className="text-3xl font-extrabold text-white tracking-tight drop-shadow-md">{ind.label}</DialogTitle>
                    </div>
                  </div>
                  <div className="p-8 space-y-6">
                    <DialogHeader className="sr-only">
                      <DialogTitle>{ind.label} Overview</DialogTitle>
                    </DialogHeader>
                    <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                      {ind.details}
                    </p>
                    <div className="pt-4 flex gap-4 w-full">
                      <Link href="/join" className="w-full inline-block">
                        <Button className="w-full rounded-2xl bg-[#403A8B] hover:bg-[#403A8B]/90 text-white font-bold text-lg h-14 shadow-lg transition-transform hover:-translate-y-1">
                          Join the Ecosystem
                        </Button>
                      </Link>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 md:hidden flex justify-center">
          <Link href="/join" className="group flex items-center text-sm font-bold text-[#403A8B] dark:text-[#F5C400] hover:opacity-80 transition-opacity">
            Join The Ecosystem
            <div className="ml-2 w-8 h-8 rounded-full bg-[#403A8B]/10 dark:bg-[#F5C400]/10 flex items-center justify-center group-hover:translate-x-1 transition-transform">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
