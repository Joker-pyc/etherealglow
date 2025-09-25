"use client";

import { motion } from "framer-motion";

export function AboutHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/luxury-salon-interior.png"
          alt="Etherealglow Salon Interior"
          className="w-full h-full object-cover"
        />
        {/* Enhanced overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-cream/95 via-warm-beige/80 to-cream/60" />
        <div className="absolute inset-0 bg-white/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-warm-brown mb-6 text-balance drop-shadow-lg">
            Our Story
          </h1>
          <p className="font-montserrat text-xl md:text-2xl text-warm-brown/80 max-w-3xl mx-auto leading-relaxed text-pretty drop-shadow-md">
            Where passion meets artistry, and every client becomes part of our
            beautiful journey
          </p>
        </motion.div>
      </div>
    </section>
  );
}
