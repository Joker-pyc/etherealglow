"use client";

import { motion } from "framer-motion";

export function ContactHero() {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/luxury-salon-interior.png"
          alt="Contact Etherealglow"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dusty-rose/80 via-dusty-rose/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-6 text-balance">
            Get In Touch
          </h1>
          <p className="font-montserrat text-xl md:text-2xl text-cream max-w-3xl mx-auto leading-relaxed text-pretty">
            We'd love to hear from you. Reach out for appointments, questions,
            or just to say hello
          </p>
        </motion.div>
      </div>
    </section>
  );
}
