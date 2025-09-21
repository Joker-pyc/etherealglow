"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Sparkles, Home, MapPin, Clock } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/luxury-salon-interior.png"
          alt="Etherealglow Home Beauty Services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-warm-brown/80 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Tagline */}
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="h-5 w-5 text-rose-gold mr-2" />
            <span className="font-cormorant text-lg text-white tracking-wide">
              Where Beauty Meets Artistry
            </span>
            <Sparkles className="h-5 w-5 text-rose-gold ml-2" />
          </div>

          {/* Main Heading */}
          <h1 className="font-playfair text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 text-balance">
            Etherealglow
            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-cormorant font-light text-white/90 mt-2">
              By Ishika
            </span>
          </h1>

          {/* Subtitle */}
          <p className="font-montserrat text-lg sm:text-xl md:text-2xl text-white/95 mb-8 max-w-3xl mx-auto leading-relaxed text-pretty">
            Experience premium beauty treatments wherever you are. From
            exquisite nail artistry to rejuvenating skincare, I bring
            professional beauty services directly to you.
          </p>

          {/* Service Benefits */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
            <div className="flex items-center text-white/90">
              <MapPin className="h-4 w-4 text-rose-gold mr-2" />
              <span className="font-montserrat text-sm">
                Mobile Service Available
              </span>
            </div>
            <div className="flex items-center text-white/90">
              <Clock className="h-4 w-4 text-rose-gold mr-2" />
              <span className="font-montserrat text-sm">
                Flexible Scheduling
              </span>
            </div>
            <div className="flex items-center text-white/90">
              <Sparkles className="h-4 w-4 text-rose-gold mr-2" />
              <span className="font-montserrat text-sm">
                Professional Equipment
              </span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              asChild
              size="lg"
              className="bg-rose-gold hover:bg-soft-gold text-white font-montserrat px-8 py-4 rounded-full text-lg Professional -shadow transition-all duration-300 hover:scale-105"
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
              className="border-2 border-white text-white hover:bg-white hover:text-warm-brown font-montserrat px-8 py-4 rounded-full text-lg transition-all duration-300 bg-transparent"
            >
              <Link href="/services">View Services</Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-white/90">
            <div className="flex items-center">
              <div className="font-playfair text-2xl font-bold text-rose-gold mr-2">
                200+
              </div>
              <div className="font-montserrat text-sm">Happy Clients</div>
            </div>
            <div className="hidden sm:block w-px h-8 bg-white/30"></div>
            <div className="flex items-center">
              <div className="font-playfair text-2xl font-bold text-rose-gold mr-2">
                5★
              </div>
              <div className="font-montserrat text-sm">Customer Rating</div>
            </div>
            <div className="hidden sm:block w-px h-8 bg-white/30"></div>
            <div className="flex items-center">
              <div className="font-playfair text-2xl font-bold text-rose-gold mr-2">
                3+
              </div>
              <div className="font-montserrat text-sm">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/70 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
