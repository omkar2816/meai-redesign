import { ArrowRight, Globe, TrendingUp, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function FinalCTA() {
  return (
    <section className="relative py-32 overflow-hidden bg-slate-50 dark:bg-slate-950">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent" />
      
      <div className="container mx-auto px-8 md:px-16 lg:px-24 relative z-10">
        <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl">
          {/* Glowing Orbs */}
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#403A8B] rounded-full blur-[120px] opacity-60 mix-blend-screen pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#F5C400] rounded-full blur-[120px] opacity-30 mix-blend-screen pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#00A651] rounded-full blur-[150px] opacity-10 mix-blend-screen pointer-events-none" />

          {/* Noise Texture Overlay */}
          <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

          <div className="relative z-10 px-8 py-20 md:py-28 md:px-16 flex flex-col lg:flex-row items-center justify-between gap-16">
            
            {/* Left Content Area */}
            <div className="w-full lg:w-3/5 text-center lg:text-left space-y-8">
              <div className="inline-flex items-center rounded-full border border-slate-700 bg-slate-800/50 px-4 py-1.5 text-sm font-semibold text-slate-300 backdrop-blur-md">
                <span className="flex h-2 w-2 rounded-full bg-[#00A651] mr-2 animate-pulse"></span>
                The Future of Indian Manufacturing
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                Ready to Expand <br className="hidden lg:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5C400] to-[#F28C1B]">
                  Beyond Borders?
                </span>
              </h2>
              
              <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
                Join India's fastest-growing ecosystem for manufacturers, exporters, SMEs, startups, and investors. Connect, collaborate, and conquer global markets.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <Link href="/join" className="w-full sm:w-auto">
                  <Button size="lg" className="h-14 px-8 text-base rounded-full bg-white hover:bg-slate-100 text-[#403A8B] shadow-[0_0_40px_rgba(255,255,255,0.2)] w-full font-bold transition-all hover:scale-105">
                    Become a Member <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/solutions" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="h-14 px-8 text-base rounded-full bg-transparent border-slate-600 text-white hover:bg-slate-800 hover:border-slate-500 w-full font-semibold transition-all">
                    Explore Solutions
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Features Area */}
            <div className="w-full lg:w-2/5 flex flex-col gap-6">
              <div className="flex items-start gap-4 bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 p-6 rounded-2xl hover:bg-slate-800/60 transition-colors">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#403A8B]/20 flex items-center justify-center border border-[#403A8B]/30">
                  <Globe className="w-6 h-6 text-[#403A8B] dark:text-[#8e85ee]" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Global Reach</h4>
                  <p className="text-slate-400 text-sm leading-snug">Access international markets with our dedicated export promotion frameworks.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 p-6 rounded-2xl hover:bg-slate-800/60 transition-colors md:ml-8">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#00A651]/20 flex items-center justify-center border border-[#00A651]/30">
                  <TrendingUp className="w-6 h-6 text-[#00A651] dark:text-[#3cd886]" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Accelerated Growth</h4>
                  <p className="text-slate-400 text-sm leading-snug">Connect with leading VCs, secure FDI, and scale your manufacturing operations.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 p-6 rounded-2xl hover:bg-slate-800/60 transition-colors">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#F5C400]/20 flex items-center justify-center border border-[#F5C400]/30">
                  <ShieldCheck className="w-6 h-6 text-[#F5C400]" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Trusted Network</h4>
                  <p className="text-slate-400 text-sm leading-snug">Join thousands of verified industry partners in a highly secure ecosystem.</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
