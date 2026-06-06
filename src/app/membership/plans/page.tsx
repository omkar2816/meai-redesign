import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const plans = [
  {
    name: "Annual Membership",
    description: "The standard tier for growing enterprises looking to expand their manufacturing and export footprint.",
    price: "Custom",
    priceDetail: "Based on Enterprise Category",
    popular: false,
    features: [
      "Access to standard networking events",
      "Listing in the Global Business Directory",
      "Basic B2B Matchmaking services",
      "Quarterly Market Intelligence Reports",
      "Standard Policy Advocacy representation",
      "Member-only newsletter access"
    ]
  },
  {
    name: "Premium Membership",
    description: "The elite tier for established corporations seeking strategic dominance and VIP ecosystem access.",
    price: "Custom",
    priceDetail: "Based on Enterprise Category",
    popular: true,
    features: [
      "Everything in Annual Membership",
      "Priority VIP access to all MEAI Summits",
      "Dedicated account manager & advisory",
      "Premium B2B & Investor Matchmaking",
      "Feature spot in MEAI Global Directory",
      "Direct participation in Policy Roundtables",
      "Exclusive access to VC/PE investment networks"
    ]
  }
];

export default function PlansPage() {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden text-center">
        <div className="absolute top-0 inset-x-0 h-full bg-gradient-to-b from-[#F5C400]/10 to-transparent pointer-events-none" />
        <div className="container mx-auto px-8 md:px-16 lg:px-24 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6">
              Membership <span className="text-[#F5C400]">Plans</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
              Choose the level of access that aligns with your enterprise's growth strategy. Pricing is dynamically structured based on your organization's annual turnover.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-24 relative">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, idx) => (
              <div 
                key={idx} 
                className={`relative rounded-3xl p-8 md:p-10 border ${plan.popular ? 'border-[#F5C400] shadow-2xl shadow-[#F5C400]/10 bg-white dark:bg-slate-900' : 'border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50'} flex flex-col`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-8 -translate-y-1/2 bg-[#F5C400] text-slate-900 text-sm font-bold px-4 py-1 rounded-full uppercase tracking-wide">
                    Most Popular
                  </div>
                )}
                <div className="mb-8">
                  <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">{plan.name}</h3>
                  <p className="text-slate-600 dark:text-slate-400 h-16">{plan.description}</p>
                </div>
                
                <div className="mb-8 pb-8 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-extrabold text-slate-900 dark:text-white">{plan.price}</span>
                  </div>
                  <span className="text-sm text-slate-500 font-medium">{plan.priceDetail}</span>
                </div>

                <div className="flex-grow">
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3">
                        <div className={`mt-1 w-5 h-5 rounded-full flex items-center justify-center ${plan.popular ? 'bg-[#F5C400]/20 text-[#F5C400]' : 'bg-[#403A8B]/10 text-[#403A8B]'}`}>
                          <Check className="w-3 h-3 font-bold" />
                        </div>
                        <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link href="/membership/apply">
                  <Button 
                    size="lg" 
                    className={`w-full h-14 text-lg font-bold rounded-xl ${plan.popular ? 'bg-[#F5C400] hover:bg-[#F5C400]/90 text-slate-900' : 'bg-[#403A8B] hover:bg-[#403A8B]/90 text-white'}`}
                  >
                    Select Plan
                  </Button>
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-slate-100 dark:bg-slate-800/50 rounded-2xl p-8 max-w-5xl mx-auto border border-slate-200 dark:border-slate-700">
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Enterprise Categories</h4>
            <p className="text-slate-600 dark:text-slate-400 mb-6">Pricing for both Annual and Premium plans is scaled across the following 8 turnover brackets to ensure fair access for businesses of all sizes:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-700 dark:text-slate-300">
              <ul className="space-y-2 list-disc list-inside">
                <li>Small Enterprises (A) (Up to Rs.50 crs.)</li>
                <li>Small Enterprises (B) (Rs.51 - Rs.100 crs.)</li>
                <li>Mid-sized Enterprises (A) (Rs.101 - Rs.250 crs.)</li>
                <li>Mid-sized Enterprises (B) (Rs.251 - Rs.500 crs.)</li>
              </ul>
              <ul className="space-y-2 list-disc list-inside">
                <li>Mid-Corporates (Rs.501 - Rs.1000 crs.)</li>
                <li>Corporates Category (A) (Rs.1001 - Rs.3000 crs.)</li>
                <li>Corporates Category (B) (Rs.3001 - Rs.5000 crs.)</li>
                <li>Corporates, MNCs & Institutions (Above Rs.5001 crs.)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
