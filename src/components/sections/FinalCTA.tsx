import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function FinalCTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background with brand gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#403A8B] via-indigo-600 to-[#F28C1B] z-0" />
      
      {/* Abstract background elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/30 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-black/30 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-8 md:px-16 lg:px-24 relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Ready To Expand <br className="hidden md:block" /> Beyond Borders?
          </h2>
          
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-medium">
            Join India's fastest-growing ecosystem for manufacturers, exporters, SMEs, startups, and investors.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Link href="/join" className="w-full sm:w-auto">
              <Button size="lg" className="h-14 px-8 text-base rounded-full bg-white hover:bg-slate-100 text-[#403A8B] shadow-xl w-full font-bold transition-transform hover:-translate-y-1">
                Join MEAI <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
