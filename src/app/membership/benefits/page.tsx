import { motion } from "framer-motion";
import { ArrowRight, Globe, TrendingUp, Users, ShieldCheck, Zap, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const benefits = [
  {
    icon: Globe,
    title: "Global Market Access",
    description: "Connect with international buyers and expand your export footprint with our dedicated global trade network.",
    color: "from-blue-500 to-cyan-400"
  },
  {
    icon: Handshake,
    title: "Strategic B2B Matchmaking",
    description: "Get paired with verified suppliers, distributors, and enterprise partners tailored to your industry.",
    color: "from-[#403A8B] to-purple-500"
  },
  {
    icon: TrendingUp,
    title: "Investment Opportunities",
    description: "Gain exclusive access to VC firms, PE investors, and government grants for scaling operations.",
    color: "from-[#00A651] to-emerald-400"
  },
  {
    icon: ShieldCheck,
    title: "Policy Advocacy",
    description: "We represent your interests to policymakers, ensuring regulations favor manufacturing growth.",
    color: "from-[#F28C1B] to-orange-400"
  },
  {
    icon: Users,
    title: "Exclusive Networking Events",
    description: "Attend high-profile summits, roundtables, and VIP galas with industry titans.",
    color: "from-rose-500 to-pink-500"
  },
  {
    icon: Zap,
    title: "Tech & Innovation Support",
    description: "Access heavily subsidized tech stack solutions, AI consulting, and automation resources.",
    color: "from-[#F5C400] to-yellow-300"
  }
];

export default function BenefitsPage() {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden text-center">
        <div className="absolute top-0 inset-x-0 h-full bg-gradient-to-b from-[#403A8B]/5 to-transparent pointer-events-none" />
        <div className="container mx-auto px-8 md:px-16 lg:px-24 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
              Unlock Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#403A8B] to-[#F28C1B]">Growth Potential</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              Joining MEAI means gaining an unfair advantage. Discover the exclusive benefits designed to accelerate your manufacturing and export business.
            </p>
            <Link href="/membership/apply">
              <Button size="lg" className="bg-[#403A8B] hover:bg-[#403A8B]/90 text-white rounded-full px-8 font-bold h-14 text-lg">
                Apply for Membership <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/20 dark:shadow-none hover:-translate-y-2 transition-transform duration-300 group">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-6 text-white shadow-lg`}>
                  <benefit.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-[#403A8B] dark:group-hover:text-[#F5C400] transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#403A8B] text-white text-center">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <h2 className="text-4xl font-bold mb-6">Ready to scale your business?</h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Review our membership plans to find the perfect tier for your enterprise size.
          </p>
          <Link href="/membership/plans">
            <Button size="lg" className="bg-white hover:bg-slate-100 text-[#403A8B] rounded-full px-8 font-bold h-14 text-lg">
              View Membership Plans <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
