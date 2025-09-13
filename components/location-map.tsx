"use client"

import { motion } from "framer-motion"
import { MapPin, Navigation, Clock } from "lucide-react"

export function LocationMap() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-warm-brown mb-6">Find Us</h2>
          <p className="font-inter text-xl text-warm-brown/70 max-w-3xl mx-auto text-pretty">
            Located in the heart of Bandra West, easily accessible by metro and road
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-cream rounded-2xl overflow-hidden shadow-luxury h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-dusty-rose mx-auto mb-4" />
                <h3 className="font-cormorant text-2xl font-bold text-warm-brown mb-2">Interactive Map</h3>
                <p className="font-inter text-warm-brown/70">
                  123 Luxury Lane, Bandra West
                  <br />
                  Mumbai, Maharashtra 400050
                </p>
              </div>
            </div>
          </motion.div>

          {/* Directions */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white rounded-xl p-6 shadow-luxury">
              <div className="flex items-center gap-3 mb-4">
                <Navigation className="w-6 h-6 text-dusty-rose" />
                <h3 className="font-cormorant text-xl font-bold text-warm-brown">Directions</h3>
              </div>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-montserrat font-medium text-warm-brown">By Metro</div>
                  <div className="font-inter text-warm-brown/70">
                    Linking Road Metro Station
                    <br />
                    5-minute walk from Exit 2
                  </div>
                </div>
                <div>
                  <div className="font-montserrat font-medium text-warm-brown">By Car</div>
                  <div className="font-inter text-warm-brown/70">
                    Valet parking available
                    <br />
                    Street parking nearby
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-luxury">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-dusty-rose" />
                <h3 className="font-cormorant text-xl font-bold text-warm-brown">Visit Hours</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-montserrat text-warm-brown">Mon - Fri</span>
                  <span className="font-inter text-warm-brown/70">9:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-montserrat text-warm-brown">Saturday</span>
                  <span className="font-inter text-warm-brown/70">9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-montserrat text-warm-brown">Sunday</span>
                  <span className="font-inter text-warm-brown/70">10:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
