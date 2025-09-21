"use client";

import type React from "react";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send, User, Mail, Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const inquiryTypes = [
  "General Inquiry",
  "Appointment Booking",
  "Service Information",
  "Pricing Questions",
  "Special Events",
  "Feedback",
];

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create WhatsApp message
    const whatsappMessage = `Hi! I'm ${formData.name} and I'm interested in your beauty services.

Inquiry Type: ${formData.inquiryType}
Phone: ${formData.phone}
Email: ${formData.email}

Message: ${formData.message}

Please get back to me with more information. Thank you!`;

    // Redirect to WhatsApp
    const phoneNumber = "+919876543210";
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(
      /[^0-9]/g,
      ""
    )}?text=${encodedMessage}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, "_blank");

    setIsSubmitting(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      inquiryType: "",
      message: "",
    });
  };

  const updateFormData = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="bg-white rounded-3xl shadow-2xl p-8 border border-rose-gold/10 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-rose-gold/5 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-dusty-rose/5 to-transparent rounded-full translate-y-12 -translate-x-12"></div>

        <div className="relative z-10">
          <div className="text-center mb-8">
            <h2 className="font-playfair text-3xl font-bold text-warm-brown mb-3">
              Send Us a Message
            </h2>
            <p className="font-inter text-warm-brown/70">
              Fill out the form below and we'll get back to you within 24 hours
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name and Email */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block font-montserrat font-medium text-warm-brown mb-3">
                  <User className="inline w-4 h-4 mr-2" />
                  Full Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => updateFormData("name", e.target.value)}
                  className="w-full p-4 rounded-xl border-2 border-cream focus:border-rose-gold focus:ring-2 focus:ring-rose-gold/20 outline-none font-inter transition-all duration-300 bg-cream/30"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <label className="block font-montserrat font-medium text-warm-brown mb-3">
                  <Mail className="inline w-4 h-4 mr-2" />
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateFormData("email", e.target.value)}
                  className="w-full p-4 rounded-xl border-2 border-cream focus:border-rose-gold focus:ring-2 focus:ring-rose-gold/20 outline-none font-inter transition-all duration-300 bg-cream/30"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
            </div>

            {/* Phone and Inquiry Type */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block font-montserrat font-medium text-warm-brown mb-3">
                  <Phone className="inline w-4 h-4 mr-2" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => updateFormData("phone", e.target.value)}
                  className="w-full p-4 rounded-xl border-2 border-cream focus:border-rose-gold focus:ring-2 focus:ring-rose-gold/20 outline-none font-inter transition-all duration-300 bg-cream/30"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label className="block font-montserrat font-medium text-warm-brown mb-3">
                  Inquiry Type
                </label>
                <select
                  value={formData.inquiryType}
                  onChange={(e) =>
                    updateFormData("inquiryType", e.target.value)
                  }
                  className="w-full p-4 rounded-xl border-2 border-cream focus:border-rose-gold focus:ring-2 focus:ring-rose-gold/20 outline-none font-inter transition-all duration-300 bg-cream/30"
                  required
                >
                  <option value="">Select inquiry type</option>
                  {inquiryTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block font-montserrat font-medium text-warm-brown mb-3">
                <MessageSquare className="inline w-4 h-4 mr-2" />
                Message
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => updateFormData("message", e.target.value)}
                rows={6}
                className="w-full p-4 rounded-xl border-2 border-cream focus:border-rose-gold focus:ring-2 focus:ring-rose-gold/20 outline-none font-inter resize-none transition-all duration-300 bg-cream/30"
                placeholder="Tell us how we can help you..."
                required
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-rose-gold to-soft-gold hover:from-soft-gold hover:to-rose-gold text-white font-montserrat font-semibold py-4 px-8 rounded-xl transition-all duration-300 disabled:opacity-50 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Send className="w-4 h-4 mr-2" />
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}
