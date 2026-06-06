"use client";

import { motion } from "framer-motion";
import { Camera, Image as ImageIcon } from "lucide-react";
import { useState } from "react";

const galleryImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop",
    title: "Global Trade Expo 2025",
    category: "Events",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop",
    title: "Advanced Manufacturing Facility Tour",
    category: "Manufacturing",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2070&auto=format&fit=crop",
    title: "Leadership Summit",
    category: "Corporate",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop",
    title: "Women in Manufacturing",
    category: "Initiatives",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
    title: "Export Policy Workshop",
    category: "Events",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1565514120036-c28926eb3717?q=80&w=2069&auto=format&fit=crop",
    title: "Strategic Partnerships Meet",
    category: "Corporate",
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop",
    title: "Skill Development Program",
    category: "Initiatives",
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1580983546059-4d69bc3d04fc?q=80&w=2070&auto=format&fit=crop",
    title: "International Supply Chain Conference",
    category: "Events",
  },
  {
    id: 9,
    url: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop",
    title: "Industry 4.0 Demonstration",
    category: "Manufacturing",
  },
];

const categories = ["All", "Events", "Manufacturing", "Corporate", "Initiatives"];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All"
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-24">
      {/* Header Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#403A8B]/5 rounded-bl-[100px] pointer-events-none" />
        <div className="container mx-auto px-8 md:px-16 lg:px-24 relative z-10 text-center">
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-16 h-16 rounded-2xl bg-[#403A8B]/10 flex items-center justify-center mb-8 mx-auto"
          >
            <Camera className="w-8 h-8 text-[#403A8B]" />
          </motion.div> */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6"
          >
            Moments at <span className="text-[#403A8B] dark:text-[#F5C400]">MEAI</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed"
          >
            Explore the visual journey of our events, initiatives, and the dynamic manufacturing and export community.
          </motion.p>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="container mx-auto px-8 md:px-16 lg:px-24 py-8">
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${activeCategory === category
                ? "bg-[#403A8B] text-white shadow-md"
                : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {filteredImages.map((image) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={image.id}
              className="group relative rounded-3xl overflow-hidden aspect-[4/3] bg-slate-200 dark:bg-slate-800 cursor-pointer shadow-sm hover:shadow-xl transition-all"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <div className="inline-block px-3 py-1 mb-2 rounded-full bg-[#F5C400] text-slate-900 text-xs font-bold uppercase tracking-wider">
                  {image.category}
                </div>
                <h3 className="text-xl font-bold text-white">{image.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredImages.length === 0 && (
          <div className="text-center py-20">
            <ImageIcon className="w-16 h-16 text-slate-300 dark:text-slate-700 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-slate-500 dark:text-slate-400">No images found for this category.</h3>
          </div>
        )}
      </section>
    </div>
  );
}
