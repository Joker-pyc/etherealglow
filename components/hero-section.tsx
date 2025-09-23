"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Sparkles, Home, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] sm:min-h-screen flex items-center overflow-hidden pt-24">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/luxury-salon-interior.png"
          alt="Etherealglow Home Beauty Services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-warm-brown/70 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-2xl sm:max-w-3xl mx-auto">
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center mb-4"
          >
            <Sparkles className="h-5 w-5 text-rose-gold mr-2" />
            <span className="font-cormorant text-base sm:text-lg text-white tracking-wide">
              Professional Mobile Beauty Services
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7 }}
            className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3"
          >
            Etherealglow
            <span className="block text-2xl sm:text-3xl md:text-4xl font-cormorant font-light text-white/90 mt-1">
              By Ishika
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-montserrat text-base sm:text-lg md:text-xl text-white/95 mb-7 leading-relaxed text-pretty max-w-2xl mx-auto"
          >
            Premium beauty treatments at your location. Nails, skincare, and
            hair— expertly delivered to you.
          </motion.p>

          {/* Service Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mb-8 max-w-xl mx-auto justify-items-center"
          >
            <div className="flex items-center text-white/95 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-full border border-white/20">
              <MapPin className="h-4 w-4 text-rose-gold mr-2" />
              <span className="font-montserrat text-sm">Mobile Service</span>
            </div>
            <div className="flex items-center text-white/95 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-full border border-white/20">
              <Clock className="h-4 w-4 text-rose-gold mr-2" />
              <span className="font-montserrat text-sm">
                Flexible Scheduling
              </span>
            </div>
            <div className="flex items-center text-white/95 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-full border border-white/20">
              <Sparkles className="h-4 w-4 text-rose-gold mr-2" />
              <span className="font-montserrat text-sm">Pro Equipment</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10"
          >
            <Button
              asChild
              size="lg"
              className="bg-rose-gold hover:bg-soft-gold text-white font-montserrat px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg min-h-[44px] Professional -shadow transition-all duration-300 hover:scale-[1.02]"
            >
              <Link href="/booking" className="flex items-center">
                Book Your Service
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-white/80 text-white hover:bg-white hover:text-warm-brown font-montserrat px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg min-h-[44px] transition-all duration-300 bg-transparent"
            >
              <Link href="/services">View Services</Link>
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-row flex-wrap items-center justify-center gap-x-10 gap-y-5 text-white/90 mt-1"
          >
            <div className="flex items-center">
              <div className="font-playfair text-2xl font-bold text-rose-gold mr-2">
                200+
              </div>
              <div className="font-montserrat text-sm">Happy Clients</div>
            </div>
            <div className="flex items-center">
              <div className="font-playfair text-2xl font-bold text-rose-gold mr-2">
                5★
              </div>
              <div className="font-montserrat text-sm">Customer Rating</div>
            </div>
            <div className="flex items-center">
              <div className="font-playfair text-2xl font-bold text-rose-gold mr-2">
                3+
              </div>
              <div className="font-montserrat text-sm">Years Experience</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
