"use client";

import { motion } from "framer-motion";
import { ArrowDown, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function ServicesHero() {
  const router = useRouter();

  const scrollToServices = () => {
    const servicesSection = document.querySelector(".service-categories");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-24 pb-16 bg-gradient-to-br from-cream via-warm-beige to-cream overflow-hidden min-h-[80vh] flex items-center">
      {/* Minimal Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-24 h-24 border border-rose-gold rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 border border-soft-gold rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-8 h-8 border border-rose-gold rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Clean Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-warm-brown mb-4 leading-tight">
            Professional Beauty Services
          </h1>
          <p className="font-montserrat text-lg md:text-xl lg:text-2xl text-warm-brown/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your look with our expert beauty treatments. Quality care,
            stunning results, every time.
          </p>
        </motion.div>

        {/* Simple Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <Button
            onClick={() => router.push("/booking")}
            className="bg-rose-gold hover:bg-soft-gold text-white font-montserrat px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <Calendar className="h-5 w-5 mr-2" />
            Book Appointment
          </Button>
          <Button
            onClick={() => window.open("https://wa.me/your-number", "_blank")}
            variant="outline"
            className="border-rose-gold text-rose-gold hover:bg-rose-gold hover:text-white font-montserrat px-8 py-4 rounded-full text-lg transition-all duration-300"
          >
            <Phone className="h-5 w-5 mr-2" />
            WhatsApp
          </Button>
        </motion.div>

        {/* Service Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12"
        >
          {[
            { title: "Expert Stylists", desc: "Certified professionals" },
            { title: "Premium Products", desc: "High-quality brands" },
            { title: "Personalized Care", desc: "Tailored to your needs" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/40 backdrop-blur-sm rounded-xl p-4 border border-rose-gold/20"
            >
              <h3 className="font-playfair text-lg font-semibold text-warm-brown mb-1">
                {item.title}
              </h3>
              <p className="font-montserrat text-sm text-warm-brown/70">
                {item.desc}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Simple Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col items-center cursor-pointer"
          onClick={scrollToServices}
        >
          <span className="font-montserrat text-sm text-warm-brown/60 mb-2">
            Explore Services
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ArrowDown className="h-5 w-5 text-rose-gold" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
