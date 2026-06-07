"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const impacts = [
  {
    num: "01",
    title: "Manufacturing Growth",
    subtitle: "Supporting industrial expansion and manufacturing excellence.",
    content: "India's manufacturing sector contributes approximately 17% of the country's GDP, making it one of the key drivers of economic growth. MEAI works towards strengthening manufacturing capabilities through industry collaboration, business networking, and growth-oriented initiatives.",
    stats: [
      { value: "17%", label: "of India's GDP" },
      { value: "77%", label: "of Industrial Output" }
    ]
  },
  {
    num: "02",
    title: "Export Opportunities",
    subtitle: "Opening pathways to global markets and international trade.",
    content: "India exported goods worth over $430 Billion in recent years, highlighting the growing demand for Indian products worldwide. MEAI promotes export readiness, market access, and international business connections for manufacturers and exporters.",
    stats: [
      { value: "$430B+", label: "Export Economy" },
      { value: "1.8%", label: "of Global Merchandise Exports" }
    ]
  },
  {
    num: "03",
    title: "Strategic Partnerships",
    subtitle: "Building stronger business connections for long-term growth.",
    content: "Strategic collaborations, joint ventures, and industry partnerships help businesses accelerate growth, enter new markets, and access new capabilities. MEAI encourages meaningful industry-to-industry connections that create lasting value.",
    stats: [
      { value: "30%", label: "of India's GDP" },
      { value: "45%+", label: "of National Exports" }
    ]
  },
  {
    num: "04",
    title: "Investment Facilitation",
    subtitle: "Connecting businesses with opportunities for expansion.",
    content: "India continues to attract billions of dollars in investment across manufacturing, infrastructure, technology, and industrial development. MEAI supports businesses in exploring investment opportunities and growth-oriented collaborations.",
    stats: [
      { value: "$100B+", label: "Annual FDI Inflows" },
      { value: "Fastest", label: "Growing Major Economy" }
    ]
  },
  {
    num: "05",
    title: "SME & Startup Empowerment",
    subtitle: "Supporting the backbone of India's economy.",
    content: "MSMEs account for over 30% of India's GDP and play a critical role in employment generation and industrial development. MEAI supports SMEs and startups through networking, partnerships, and business development opportunities.",
    stats: [
      { value: "63M+", label: "MSMEs Nationwide" },
      { value: "6.5 Crore", label: "Registered Enterprises" }
    ]
  },
  {
    num: "06",
    title: "Industry Development",
    subtitle: "Strengthening industrial ecosystems through collaboration.",
    content: "Sustainable industrial growth requires cooperation between businesses, investors, policymakers, and industry leaders. MEAI works towards fostering stronger industry engagement and development initiatives across sectors.",
    stats: [
      { value: "28 Crore", label: "Jobs Supported" },
      { value: "45%", label: "of Mfg Output Driven by MSMEs" }
    ]
  }
];

export function SuccessStories() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="lg:w-1/3 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
                Creating Impact Across Industries
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                Driving manufacturing growth, export opportunities, strategic partnerships, and business expansion through a connected industry ecosystem.
              </p>
            </motion.div>
          </div>

          <div className="lg:w-2/3 w-full">
            <Accordion className="w-full flex flex-col gap-4">
              {impacts.map((item, idx) => (
                <motion.div
                  key={item.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                >
                  <AccordionItem
                    value={`item-${idx}`}
                    className="border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 rounded-2xl px-6 py-2 shadow-sm hover:shadow-md transition-all data-[state=open]:border-primary/50 data-[state=open]:shadow-md data-[state=open]:bg-primary/5 dark:data-[state=open]:bg-primary/10 !border-b-slate-200 dark:!border-b-slate-800"
                  >
                    <AccordionTrigger className="hover:no-underline py-4 text-left group items-center [&_[data-slot=accordion-trigger-icon]]:!size-5 data-[state=open]:text-primary">
                      <div className="flex items-start sm:items-center gap-6">
                        <span className="text-3xl md:text-4xl font-light text-slate-300 dark:text-slate-700 group-hover:text-primary group-data-[state=open]:text-primary transition-colors">
                          {item.num}
                        </span>
                        <div className="flex flex-col items-start gap-1 pr-6">
                          <span className="text-xl font-semibold text-slate-900 dark:text-white group-hover:text-primary group-data-[state=open]:text-primary transition-colors">
                            {item.title}
                          </span>
                          <span className="text-sm font-normal text-slate-500 dark:text-slate-400">
                            {item.subtitle}
                          </span>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-600 dark:text-slate-300 sm:pl-[4.5rem] pr-4 pb-6 pt-2 leading-relaxed text-base">
                      <p className="mb-6">{item.content}</p>
                      <div className="grid grid-cols-2 gap-4">
                        {item.stats.map((stat, i) => (
                          <div key={i} className="bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-xl p-4 flex flex-col justify-center transition-all hover:shadow-md hover:border-primary/30 group/stat">
                            <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary to-indigo-500 group-hover/stat:scale-105 origin-left transition-transform mb-1">{stat.value}</span>
                            <span className="text-xs text-slate-600 dark:text-slate-400 font-semibold uppercase tracking-wider">{stat.label}</span>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
