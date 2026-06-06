"use client";

import { motion } from "framer-motion";
import { ArrowRight, Target, Lightbulb, CheckCircle2, Award, Briefcase, Users, Building } from "lucide-react";

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const leadershipTeam = [
  {
    id: "president",
    name: "Dr. Vikram Sharma",
    role: "Hon. President",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop",
    linkedin: "https://linkedin.com"
  },
  {
    id: "director1",
    name: "Rajesh Desai",
    role: "Managing Director",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop",
    linkedin: "https://linkedin.com"
  },
  {
    id: "director2",
    name: "Priya Menon",
    role: "Director of Global Operations",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
    linkedin: "https://linkedin.com"
  },
  {
    id: "vp",
    name: "Amit Singhal",
    role: "VP, Strategic Partnerships",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
    linkedin: "https://linkedin.com"
  },
  {
    id: "director3",
    name: "Kavita Rao",
    role: "Director of Marketing",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
    linkedin: "https://linkedin.com"
  },
  {
    id: "director4",
    name: "Siddharth Verma",
    role: "Head of Export Initiatives",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
    linkedin: "https://linkedin.com"
  }
];

const advisoryBoard = [
  {
    id: "adv1",
    name: "Sanjay Patel",
    role: "Former Trade Commissioner",
    expertise: "International Trade",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
    linkedin: "https://linkedin.com"
  },
  {
    id: "adv2",
    name: "Dr. Anita Rao",
    role: "Chief Economist",
    expertise: "Industrial Policy",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
    linkedin: "https://linkedin.com"
  },
  {
    id: "adv3",
    name: "Vivek Chandra",
    role: "CEO, TechInnovate",
    expertise: "Industry 4.0",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
    linkedin: "https://linkedin.com"
  },
  {
    id: "adv4",
    name: "Meera Reddy",
    role: "Partner, Global VC",
    expertise: "Venture Capital & FDI",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop",
    linkedin: "https://linkedin.com"
  },
];

const objectives = [
  { title: "Securing Business Interests", desc: "Securing the interest of Manufacturers, Exporters, Investors & SMEs", icon: Building },
  { title: "Branding & Market Promotion", desc: "Branding and Marketing of Manufacturing & Exports potentials of SMEs", icon: Award },
  { title: "Industry Integration", desc: "Integration of the manufacturing industries, SMEs & allied sectors", icon: Briefcase },
  { title: "Industrial Development", desc: "Industrialisation and Infrastructure development", icon: Users },
];

export default function AboutPage() {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen pb-24 overflow-x-hidden">
      {/* Hero / About MEAI Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-full bg-gradient-to-b from-[#403A8B]/10 to-transparent pointer-events-none" />
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#F5C400]/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-40 left-20 w-96 h-96 bg-[#F28C1B]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-8 md:px-16 lg:px-24 relative z-10">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-semibold mb-6 bg-white/50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800 text-[#403A8B] dark:text-[#F5C400]"
            >
              Who We Are
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-8 leading-tight"
            >
              Manufacturers & Exporters <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#403A8B] to-[#F28C1B]">Association of India</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl font-light tracking-wide text-slate-700 dark:text-slate-300 mb-8 leading-relaxed text-justify md:text-center"
            >
              MEAI has been providing support services to the manufacturing industries, corporates, MNCs, SMEs, exporters, start-ups and allied business entities to enhance business contacts, business growth, export promotion, setting up of new manufacturing industries, channelize finance and investments, mergers & acquisitions, foreign direct investments, distribution, franchise, joint ventures, technology transfers, contract manufacturing and explore the various emerging business opportunities at the national and international markets.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl font-light tracking-wide text-slate-700 dark:text-slate-300 mb-8 leading-relaxed text-justify md:text-center"
            >
              We also provide business advisory services for marketing, promotion, branding, export-import services, Government services & liaison, identification of strategic business partners & investors, market survey & research, industrial land & ready-made industrial premises, resolving various issues related to the industries, revival of sick manufacturing industries & SMEs.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section id="vision" className="py-20 bg-white dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800 scroll-mt-20">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto items-stretch">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative p-8 rounded-3xl bg-gradient-to-br from-[#403A8B]/5 to-[#F5C400]/10 border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col justify-center"
            >
              <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
                <Target className="w-32 h-32 text-[#403A8B] dark:text-[#F5C400]" />
              </div>
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center mb-6 shadow-sm">
                  <Target className="w-7 h-7 text-[#403A8B] dark:text-[#F5C400]" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Our Vision</h2>
                <p className="text-xl text-slate-700 dark:text-slate-300 font-light leading-relaxed">
                  Enhancing manufacturing Excellence for quality productivity and global competitiveness.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative p-8 rounded-3xl bg-gradient-to-br from-[#00A651]/5 to-[#F28C1B]/10 border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col justify-center"
            >
              <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
                <Lightbulb className="w-32 h-32 text-[#00A651] dark:text-[#F28C1B]" />
              </div>
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center mb-6 shadow-sm">
                  <Lightbulb className="w-7 h-7 text-[#00A651] dark:text-[#F28C1B]" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Our Mission</h2>
                <p className="text-xl text-slate-700 dark:text-slate-300 font-light leading-relaxed">
                  Industrial growth, Export promotion, JV, Contract manufacturing and setting up manufacturing units in tier 2 & tier 3 cities.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="mt-24">
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Core Objectives</h3>
              <div className="w-24 h-1 bg-gradient-to-r from-[#403A8B] to-[#F5C400] mx-auto rounded-full" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {objectives.map((obj, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-all"
                >
                  <obj.icon className="w-10 h-10 text-[#403A8B] dark:text-[#F5C400] mb-6" />
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{obj.title}</h4>
                  <p className="text-slate-600 dark:text-slate-400">{obj.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="py-24 relative scroll-mt-20">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6">
              Leadership & <span className="text-[#403A8B] dark:text-[#F5C400]">Management</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Meet the visionary minds driving MEAI's strategic initiatives and guiding India's manufacturing excellence.
            </p>
          </div>

          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full max-w-7xl mx-auto px-12"
          >
            <CarouselContent className="-ml-4 md:-ml-8">
              {leadershipTeam.map((member, idx) => (
                <CarouselItem key={member.id} className="pl-4 md:pl-8 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    className="group relative"
                  >
                    <div className="relative overflow-hidden rounded-3xl aspect-[3/4] mb-6 bg-slate-200 dark:bg-slate-800">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                        <Link href={member.linkedin} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-[#0077b5] hover:text-white transition-all text-white border border-white/30 transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 duration-500">
                          <LinkedinIcon className="w-5 h-5" />
                        </Link>
                      </div>
                    </div>
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">{member.name}</h3>
                      <p className="text-[#403A8B] dark:text-[#F5C400] font-medium">{member.role}</p>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="w-14 h-14 [&>svg]:w-8 [&>svg]:h-8 -left-4 lg:-left-12 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors" />
            <CarouselNext className="w-14 h-14 [&>svg]:w-8 [&>svg]:h-8 -right-4 lg:-right-12 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors" />
          </Carousel>
        </div>
      </section>

      {/* Advisory Board Section */}
      <section id="advisory" className="py-24 bg-slate-900 dark:bg-slate-900 relative scroll-mt-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#403A8B] rounded-full blur-[150px] opacity-30" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F5C400] rounded-full blur-[150px] opacity-20" />

        <div className="container mx-auto px-8 md:px-16 lg:px-24 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 border-b border-slate-800 pb-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
                National <span className="text-[#F5C400]">Advisory Board</span>
              </h2>
              <p className="text-lg text-slate-400">
                Industry experts, business leaders, and strategic contributors shaping the future of global trade.
              </p>
            </div>
          </div>

          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full max-w-7xl mx-auto px-12"
          >
            <CarouselContent className="-ml-4 md:-ml-8 py-4">
              {advisoryBoard.map((advisor, idx) => (
                <CarouselItem key={advisor.id} className="pl-4 md:pl-8 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-slate-500 rounded-3xl p-6 transition-all duration-300 hover:-translate-y-2 h-full"
                  >
                    <div className="flex items-center gap-5 mb-6">
                      <div className="w-20 h-20 shrink-0 rounded-full overflow-hidden border-2 border-slate-600 group-hover:border-[#F5C400] transition-colors">
                        <img
                          src={advisor.image}
                          alt={advisor.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{advisor.name}</h3>
                        <Link href={advisor.linkedin} target="_blank" className="text-slate-400 hover:text-[#0077b5] transition-colors">
                          <LinkedinIcon className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm font-medium text-slate-300">{advisor.role}</div>
                      <div className="text-xs font-semibold text-[#F5C400] bg-[#F5C400]/10 px-3 py-1 rounded-full inline-block">
                        {advisor.expertise}
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="w-14 h-14 [&>svg]:w-8 [&>svg]:h-8 -left-4 lg:-left-12 border-slate-700 bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-800 hover:border-slate-500 transition-all" />
            <CarouselNext className="w-14 h-14 [&>svg]:w-8 [&>svg]:h-8 -right-4 lg:-right-12 border-slate-700 bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-800 hover:border-slate-500 transition-all" />
          </Carousel>

          <div className="mt-20 text-center">
            <Link href="/join">
              <Button className="bg-[#F5C400] hover:bg-[#F5C400]/90 text-slate-900 rounded-full px-10 py-6 h-auto text-lg font-bold shadow-xl transition-transform hover:scale-105">
                Join the MEAI Community <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
