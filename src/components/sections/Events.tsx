"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const events = [
  {
    title: "Global Manufacturing Summit 2026",
    date: "Aug 15 - 17, 2026",
    location: "New Delhi, India",
    type: "Flagship Event",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Export Compliance Workshop",
    date: "Sep 05, 2026",
    location: "Virtual",
    type: "Masterclass",
    image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "EU Market Entry Strategy",
    date: "Oct 12, 2026",
    location: "Mumbai, India",
    type: "Networking",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
  },
];

export function Events() {
  return (
    <section id="events" className="py-24 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
              Upcoming Events
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Connect with industry leaders, investors, and policymakers at our exclusive summits and workshops.
            </p>
          </div>
          <Button variant="outline" className="rounded-full px-6">
            View All Events
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group rounded-3xl overflow-hidden bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 text-xs font-semibold bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-full text-slate-900 dark:text-white">
                    {event.type}
                  </span>
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 line-clamp-2">
                    {event.title}
                  </h3>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                      <Calendar className="w-4 h-4 mr-2 text-primary" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
                      <MapPin className="w-4 h-4 mr-2 text-primary" />
                      {event.location}
                    </div>
                  </div>
                </div>
                <div className="flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform cursor-pointer w-max">
                  Register Now <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
