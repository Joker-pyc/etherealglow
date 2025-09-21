"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Award, Users, Clock, Star } from "lucide-react";

const stats = [
  { icon: Users, value: "500+", label: "Happy Clients" },
  { icon: Award, value: "50+", label: "Awards Won" },
  { icon: Clock, value: "3+", label: "Years Experience" },
  { icon: Star, value: "5.0", label: "Average Rating" },
];

export function AboutPreview() {
  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-warm-brown mb-6 text-balance">
              Meet Ishika
              <span className="block text-2xl font-cormorant font-light text-rose-gold mt-2">
                Your Beauty Artisan
              </span>
            </h2>

            <div className="space-y-4 mb-8">
              <p className="font-montserrat text-lg text-warm-brown/80 leading-relaxed">
                With over three years of passion-driven expertise, Ishika has
                transformed Etherealglow into a sanctuary where artistry meets
                Professional . Her vision was simple yet profound: create a
                space where every client feels like royalty.
              </p>

              <p className="font-montserrat text-lg text-warm-brown/80 leading-relaxed">
                Trained in advanced beauty techniques and committed to using
                only premium products, Ishika ensures every treatment is a
                masterpiece of precision and care.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <div className="bg-rose-gold/10 p-3 rounded-full">
                    <stat.icon className="h-6 w-6 text-rose-gold" />
                  </div>
                  <div>
                    <div className="font-playfair text-2xl font-bold text-warm-brown">
                      {stat.value}
                    </div>
                    <div className="font-montserrat text-sm text-warm-brown/70">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Button
                asChild
                size="lg"
                className="bg-rose-gold hover:bg-soft-gold text-white font-montserrat px-8 py-4 rounded-full Professional -shadow"
              >
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl Professional -shadow">
              <img
                src="/professional-beauty-salon-owner-ishika-in-elegant-.jpg"
                alt="Ishika - Founder of Etherealglow"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-warm-brown/20 to-transparent"></div>
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl Professional -shadow"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-rose-gold text-white p-3 rounded-full">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-cormorant text-lg font-semibold text-warm-brown">
                    Certified Expert
                  </div>
                  <div className="font-montserrat text-sm text-warm-brown/70">
                    Advanced Beauty Specialist
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
