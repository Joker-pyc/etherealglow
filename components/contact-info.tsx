"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";

const contactDetails = [
  {
    icon: MapPin,
    title: "Service Areas",
    details: [
      "Available in Mumbai & surrounding areas",
      "Flexible location options",
      "Contact for specific area coverage",
    ],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: [
      "+91 98765 43210",
      "+91 98765 43211",
      "Available during business hours",
    ],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: [
      "hello@etherealglow.com",
      "appointments@etherealglow.com",
      "We respond within 24 hours",
    ],
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: [
      "Mon-Fri: 9:00 AM - 8:00 PM",
      "Saturday: 9:00 AM - 7:00 PM",
      "Sunday: 10:00 AM - 6:00 PM",
    ],
  },
];

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      <div className="text-center lg:text-left">
        <h2 className="font-playfair text-3xl font-bold text-warm-brown mb-3">
          Get In Touch
        </h2>
        <p className="font-inter text-warm-brown/70 mb-8">
          Multiple ways to reach us. Choose what works best for you.
        </p>
      </div>

      {/* Contact Details */}
      <div className="space-y-6">
        {contactDetails.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-rose-gold/10 group"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-rose-gold to-soft-gold rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-cormorant text-xl font-bold text-warm-brown mb-2">
                  {item.title}
                </h3>
                <div className="space-y-1">
                  {item.details.map((detail, idx) => (
                    <p
                      key={idx}
                      className="font-inter text-warm-brown/70 text-sm"
                    >
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Social Media */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-rose-gold/10"
      >
        <h3 className="font-cormorant text-xl font-bold text-warm-brown mb-4">
          Follow Us
        </h3>
        <p className="font-inter text-warm-brown/70 text-sm mb-4">
          Stay updated with our latest work and beauty tips
        </p>
        <div className="flex gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="w-12 h-12 bg-gradient-to-br from-rose-gold to-soft-gold rounded-full flex items-center justify-center text-white hover:scale-110 hover:shadow-lg transition-all duration-300"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </motion.div>

      {/* Emergency Contact */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-rose-gold to-soft-gold rounded-2xl p-6 text-white text-center shadow-lg"
      >
        <Phone className="w-8 h-8 mx-auto mb-3" />
        <h3 className="font-cormorant text-xl font-bold mb-2">
          Need Immediate Assistance?
        </h3>
        <p className="font-inter text-sm mb-4 opacity-90">
          For urgent appointments or last-minute changes
        </p>
        <a
          href="tel:+919876543210"
          className="inline-block bg-white text-rose-gold font-montserrat font-semibold px-6 py-3 rounded-xl hover:bg-cream hover:scale-105 transition-all duration-300 shadow-lg"
        >
          Call Now: +91 98765 43210
        </a>
      </motion.div>
    </motion.div>
  );
}
