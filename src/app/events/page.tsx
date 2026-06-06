"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowRight, Radio, Clock, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const liveEvents = [
  {
    title: "Global Supply Chain Resilience Panel",
    date: "Happening Now",
    location: "Virtual Broadcast",
    type: "Live Stream",
    image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&q=80&w=800",
  }
];

const upcomingEvents = [
  {
    title: "Global Manufacturing Summit 2026",
    date: "Aug 15 - 17, 2026",
    location: "New Delhi, India",
    type: "Flagship Event",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Export Compliance Masterclass",
    date: "Sep 05, 2026",
    location: "Virtual",
    type: "Masterclass",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "EU Market Entry Strategy",
    date: "Oct 12, 2026",
    location: "Mumbai, India",
    type: "Networking",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800",
  },
];

const pastEvents = [
  {
    title: "Tech-Driven Export Growth Summit 2025",
    date: "Mar 10 - 12, 2025",
    location: "Bangalore, India",
    type: "Conference",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "SME Investment Bootcamp",
    date: "Jan 22, 2025",
    location: "Pune, India",
    type: "Workshop",
    image: "https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Middle East Trade Delegation",
    date: "Nov 05 - 08, 2024",
    location: "Dubai, UAE",
    type: "Delegation",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800",
  },
];

const EventCard = ({ event, badgeColor, actionText, icon: Icon, isLive = false }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className={`group rounded-3xl overflow-hidden bg-white dark:bg-slate-950 border ${isLive ? 'border-red-500/50 shadow-lg shadow-red-500/10' : 'border-slate-200 dark:border-slate-800'} hover:shadow-xl transition-all duration-300 flex flex-col`}
  >
    <div className="relative h-48 overflow-hidden">
      <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10" />
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute top-4 left-4 z-20">
        <span className={`px-3 py-1 text-xs font-semibold bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-full ${badgeColor}`}>
          {isLive && <span className="inline-block w-2 h-2 rounded-full bg-red-500 mr-2 animate-pulse" />}
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
          <div className={`flex items-center text-sm ${isLive ? 'text-red-500 font-medium' : 'text-slate-600 dark:text-slate-400'}`}>
            <Icon className="w-4 h-4 mr-2" />
            {event.date}
          </div>
          <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">
            <MapPin className="w-4 h-4 mr-2 text-primary" />
            {event.location}
          </div>
        </div>
      </div>
      <div className={`flex items-center font-semibold group-hover:translate-x-2 transition-transform cursor-pointer w-max ${isLive ? 'text-red-500' : 'text-primary'}`}>
        {actionText} <ArrowRight className="ml-2 w-4 h-4" />
      </div>
    </div>
  </motion.div>
);

export default function EventsPage() {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen pb-24">
      {/* Hero Section */}
      <section className="relative pt-10 pb-10 overflow-hidden text-center">
        <div className="absolute top-0 inset-x-0 h-full bg-gradient-to-b from-[#403A8B]/10 to-transparent pointer-events-none" />
        <div className="container mx-auto px-8 md:px-16 lg:px-24 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6">
              Events & <span className="text-[#403A8B] dark:text-[#F5C400]">Summits</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              Discover industry-leading conferences, masterclasses, and networking opportunities designed to scale your business.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-8 md:px-16 lg:px-24 space-y-24">

        {/* Live Events Section */}
        <section>
          <div className="flex items-center mb-8">
            <Radio className="w-8 h-8 text-red-500 mr-3 animate-pulse" />
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Live Now</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {liveEvents.map((event, idx) => (
              <EventCard
                key={idx}
                event={event}
                isLive={true}
                badgeColor="text-red-500"
                actionText="Join Broadcast"
                icon={Radio}
              />
            ))}
          </div>
        </section>

        {/* Upcoming Events Section */}
        <section>
          <div className="flex items-center mb-8">
            <Calendar className="w-8 h-8 text-[#403A8B] dark:text-[#F5C400] mr-3" />
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Upcoming Events</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, idx) => (
              <EventCard
                key={idx}
                event={event}
                badgeColor="text-slate-900 dark:text-white"
                actionText="Register Now"
                icon={Calendar}
              />
            ))}
          </div>
        </section>

        {/* Past Events Section */}
        <section>
          <div className="flex items-center mb-8 opacity-70">
            <Clock className="w-8 h-8 text-slate-500 mr-3" />
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Past Events</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event, idx) => (
              <EventCard
                key={idx}
                event={event}
                badgeColor="text-slate-500"
                actionText="Watch Recording"
                icon={CheckCircle2}
              />
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
