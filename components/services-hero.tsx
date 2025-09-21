"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function ServicesHero() {
  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-br from-dusty-rose/30 to-warm-beige overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border border-rose-gold rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-rose-gold rounded-full"></div>
        <div className="absolute bottom-20 left-1/3 w-16 h-16 border border-rose-gold rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex items-center justify-center mb-6"
        >
          <Sparkles className="h-5 w-5 text-rose-gold mr-2" />
          <span className="font-cormorant text-lg text-warm-brown/80 tracking-wide">
            Professional Beauty Services
          </span>
          <Sparkles className="h-5 w-5 text-rose-gold ml-2" />
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold text-warm-brown mb-6 text-balance"
        >
          Our Services
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="font-montserrat text-xl md:text-2xl text-warm-brown/80 mb-8 max-w-3xl mx-auto leading-relaxed text-pretty"
        >
          Discover our comprehensive range of Professional beauty treatments,
          each crafted to enhance your natural radiance and provide an
          unforgettable experience.
        </motion.p>
      </div>
    </section>
  );
}
