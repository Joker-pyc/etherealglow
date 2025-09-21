"use client";

import { motion } from "framer-motion";

export function BookingHero() {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/luxury-salon-interior.png"
          alt="Book Your Appointment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-warm-brown/80 via-warm-brown/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-6 text-balance">
            Book Your Experience
          </h1>
          <p className="font-montserrat text-xl md:text-2xl text-cream max-w-3xl mx-auto leading-relaxed text-pretty">
            Reserve your appointment and step into a world of Professional and
            transformation
          </p>
        </motion.div>
      </div>
    </section>
  );
}
