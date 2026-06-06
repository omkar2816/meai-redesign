import { motion } from "framer-motion";
import { ArrowRight, Target, Compass, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const leaders = [
  { name: "Rajesh Kumar", role: "Chairman", image: "https://i.pravatar.cc/300?img=11" },
  { name: "Anita Desai", role: "Vice President", image: "https://i.pravatar.cc/300?img=5" },
  { name: "Sanjay Gupta", role: "Secretary General", image: "https://i.pravatar.cc/300?img=15" },
  { name: "Priya Sharma", role: "Director of Global Trade", image: "https://i.pravatar.cc/300?img=9" },
];

const advisoryBoard = [
  { name: "Dr. Vikram Seth", role: "Chief Economic Advisor", image: "https://i.pravatar.cc/300?img=8" },
  { name: "Meera Reddy", role: "Policy Strategy Head", image: "https://i.pravatar.cc/300?img=1" },
  { name: "Anand Verma", role: "Tech & Innovation Lead", image: "https://i.pravatar.cc/300?img=13" },
  { name: "Sunita Rao", role: "International Relations", image: "https://i.pravatar.cc/300?img=20" },
  { name: "Arjun Nair", role: "SME Growth Expert", image: "https://i.pravatar.cc/300?img=12" },
  { name: "Kavita Menon", role: "Sustainability Director", image: "https://i.pravatar.cc/300?img=16" },
];

export default function AboutPage() {
  return (
    <div className="bg-slate-50 dark:bg-slate-950">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-full bg-gradient-to-b from-[#403A8B]/5 to-transparent pointer-events-none" />
        <div className="container mx-auto px-8 md:px-16 lg:px-24 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
              Empowering India&apos;s <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#403A8B] to-[#F28C1B]">Global Manufacturers</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl leading-relaxed">
              MEAI is India's premier association dedicated to driving growth, innovation, and global expansion for the manufacturing and export sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Vision & Mission</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Our strategic roadmap for propelling Indian businesses onto the world stage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-slate-50 dark:bg-slate-800/50 p-10 rounded-3xl border border-slate-100 dark:border-slate-700 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#403A8B]/10 rounded-full blur-3xl -mr-10 -mt-10 transition-transform group-hover:scale-150" />
              <Compass className="w-12 h-12 text-[#403A8B] mb-6 relative z-10" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 relative z-10">Our Vision</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed relative z-10">
                To position India as the undisputed global hub for high-quality manufacturing and innovative exports, fostering a sustainable and globally competitive industrial ecosystem.
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800/50 p-10 rounded-3xl border border-slate-100 dark:border-slate-700 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#F28C1B]/10 rounded-full blur-3xl -mr-10 -mt-10 transition-transform group-hover:scale-150" />
              <Target className="w-12 h-12 text-[#F28C1B] mb-6 relative z-10" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 relative z-10">Our Mission</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed relative z-10">
                To equip our members with cutting-edge market intelligence, technological enablement, policy advocacy, and strategic global partnerships to accelerate their business growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 relative">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Leadership</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
              Meet the executive team driving MEAI's strategic initiatives forward.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {leaders.map((leader, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl aspect-[4/5] mb-4 bg-slate-200 dark:bg-slate-800">
                  <img 
                    src={leader.image} 
                    alt={leader.name} 
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{leader.name}</h3>
                <p className="text-[#403A8B] dark:text-[#F5C400] font-medium">{leader.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F28C1B]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#403A8B]/20 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="container mx-auto px-8 md:px-16 lg:px-24 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Advisory Board</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Our esteemed employee members and industry veterans guiding our policy and market strategies.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {advisoryBoard.map((member, idx) => (
              <div key={idx} className="text-center group">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4 border-2 border-white/10 group-hover:border-[#F5C400] transition-colors relative">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="object-cover w-full h-full filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <h3 className="text-base font-semibold text-white">{member.name}</h3>
                <p className="text-xs text-slate-400 mt-1">{member.role}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Link href="/membership/apply">
              <Button size="lg" className="bg-white hover:bg-slate-100 text-[#403A8B] rounded-full px-8 font-bold">
                Join the Network <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
