"use client";

import { motion } from "framer-motion";

export function GalleryHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/luxury-salon-interior.png"
          alt="Etherealglow Gallery"
          className="w-full h-full object-cover"
        />
        {/* Stronger overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-warm-brown/80 via-warm-brown/40 to-cream/90" />
        <div className="absolute inset-0 bg-white/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-warm-brown mb-6 text-balance drop-shadow-lg">
            Our Gallery
          </h1>
          <p className="font-montserrat text-xl md:text-2xl text-warm-brown/90 max-w-3xl mx-auto leading-relaxed text-pretty drop-shadow-md">
            Discover the artistry and elegance that defines every Etherealglow
            experience
          </p>
        </motion.div>
      </div>
    </section>
  );
}
