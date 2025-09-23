"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, Clock } from "lucide-react";

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
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-warm-brown mb-6">
            Service Areas
          </h2>
          <p className="font-inter text-xl text-warm-brown/70 max-w-3xl mx-auto text-pretty">
            Mobile beauty services available across Mumbai and surrounding areas
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
            <div className="bg-cream rounded-2xl overflow-hidden shadow-Professional relative w-full aspect-square md:aspect-[4/3] lg:aspect-[16/9]">
              <iframe
                title="Mumbai Service Area Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609868138!2d72.7410995442406!3d19.08219783989307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63f8f91c6a9%3A0x7f5f6b6e75c6e8df!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1695291860180!5m2!1sen!2sin"
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
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
            <div className="bg-white rounded-xl p-6 shadow-Professional ">
              <div className="flex items-center gap-3 mb-4">
                <Navigation className="w-6 h-6 text-dusty-rose" />
                <h3 className="font-cormorant text-xl font-bold text-warm-brown">
                  Service Details
                </h3>
              </div>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-montserrat font-medium text-warm-brown">
                    Coverage Area
                  </div>
                  <div className="font-inter text-warm-brown/70">
                    Mumbai & surrounding areas
                    <br />
                    Contact for specific location
                  </div>
                </div>
                <div>
                  <div className="font-montserrat font-medium text-warm-brown">
                    Travel Time
                  </div>
                  <div className="font-inter text-warm-brown/70">
                    Flexible scheduling
                    <br />
                    Professional equipment included
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-Professional ">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-dusty-rose" />
                <h3 className="font-cormorant text-xl font-bold text-warm-brown">
                  Service Hours
                </h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-montserrat text-warm-brown">
                    Mon - Fri
                  </span>
                  <span className="font-inter text-warm-brown/70">
                    9:00 AM - 8:00 PM
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-montserrat text-warm-brown">
                    Saturday
                  </span>
                  <span className="font-inter text-warm-brown/70">
                    9:00 AM - 7:00 PM
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-montserrat text-warm-brown">
                    Sunday
                  </span>
                  <span className="font-inter text-warm-brown/70">
                    10:00 AM - 6:00 PM
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
