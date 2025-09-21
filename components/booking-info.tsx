"use client";

import { motion } from "framer-motion";
import { Clock, MapPin, Phone, Mail, Calendar, Shield } from "lucide-react";

const businessHours = [
  { day: "Monday - Friday", hours: "9:00 AM - 8:00 PM" },
  { day: "Saturday", hours: "9:00 AM - 7:00 PM" },
  { day: "Sunday", hours: "10:00 AM - 6:00 PM" },
];

const policies = [
  "24-hour cancellation policy",
  "15-minute grace period for arrivals",
  "Consultation included with all services",
  "Flexible rescheduling options",
];

export function BookingInfo() {
  return (
    <div className="space-y-8">
      {/* Contact Information */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-white rounded-2xl shadow-Professional  p-6"
      >
        <h3 className="font-playfair text-2xl font-bold text-warm-brown mb-6">
          Contact Information
        </h3>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-dusty-rose mt-1 flex-shrink-0" />
            <div>
              <div className="font-montserrat font-medium text-warm-brown">
                Service Areas
              </div>
              <div className="font-inter text-warm-brown/70 text-sm">
                Mobile service available
                <br />
                Mumbai & surrounding areas
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-dusty-rose flex-shrink-0" />
            <div>
              <div className="font-montserrat font-medium text-warm-brown">
                Phone
              </div>
              <div className="font-inter text-warm-brown/70 text-sm">
                +91 98765 43210
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-dusty-rose flex-shrink-0" />
            <div>
              <div className="font-montserrat font-medium text-warm-brown">
                Email
              </div>
              <div className="font-inter text-warm-brown/70 text-sm">
                hello@etherealglow.com
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Business Hours */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: true }}
        className="bg-white rounded-2xl shadow-Professional  p-6"
      >
        <h3 className="font-playfair text-2xl font-bold text-warm-brown mb-6">
          <Clock className="inline w-6 h-6 mr-2" />
          Business Hours
        </h3>
        <div className="space-y-3">
          {businessHours.map((schedule, index) => (
            <div key={index} className="flex justify-between items-center">
              <span className="font-montserrat font-medium text-warm-brown">
                {schedule.day}
              </span>
              <span className="font-inter text-warm-brown/70">
                {schedule.hours}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Booking Policies */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="bg-white rounded-2xl shadow-Professional  p-6"
      >
        <h3 className="font-playfair text-2xl font-bold text-warm-brown mb-6">
          <Shield className="inline w-6 h-6 mr-2" />
          Booking Policies
        </h3>
        <div className="space-y-3">
          {policies.map((policy, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="w-2 h-2 bg-dusty-rose rounded-full mt-2 flex-shrink-0" />
              <span className="font-inter text-warm-brown/70 text-sm">
                {policy}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="bg-gradient-rose rounded-2xl p-6 text-white text-center"
      >
        <Calendar className="w-8 h-8 mx-auto mb-4" />
        <h3 className="font-playfair text-xl font-bold mb-2">Need Help?</h3>
        <p className="font-inter text-sm mb-4 opacity-90">
          Call us directly for immediate assistance or special requests
        </p>
        <a
          href="tel:+919876543210"
          className="inline-block bg-white text-dusty-rose font-montserrat font-semibold px-6 py-2 rounded-lg hover:bg-cream transition-colors"
        >
          Call Now
        </a>
      </motion.div>
    </div>
  );
}
