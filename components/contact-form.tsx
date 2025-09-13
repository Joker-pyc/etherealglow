"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"
import { Send, User, Mail, Phone, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"

const inquiryTypes = [
  "General Inquiry",
  "Appointment Booking",
  "Service Information",
  "Pricing Questions",
  "Special Events",
  "Feedback",
]

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    alert("Message sent successfully! We'll get back to you within 24 hours.")
    setIsSubmitting(false)
    setFormData({
      name: "",
      email: "",
      phone: "",
      inquiryType: "",
      message: "",
    })
  }

  const updateFormData = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="bg-white rounded-2xl shadow-luxury p-8">
        <h2 className="font-playfair text-3xl font-bold text-warm-brown mb-2">Send Us a Message</h2>
        <p className="font-inter text-warm-brown/70 mb-8">
          Fill out the form below and we'll respond to your inquiry as soon as possible.
        </p>

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
                className="w-full p-4 rounded-xl border-2 border-cream focus:border-dusty-rose outline-none font-inter"
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
                className="w-full p-4 rounded-xl border-2 border-cream focus:border-dusty-rose outline-none font-inter"
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
                className="w-full p-4 rounded-xl border-2 border-cream focus:border-dusty-rose outline-none font-inter"
                placeholder="+91 98765 43210"
              />
            </div>

            <div>
              <label className="block font-montserrat font-medium text-warm-brown mb-3">Inquiry Type</label>
              <select
                value={formData.inquiryType}
                onChange={(e) => updateFormData("inquiryType", e.target.value)}
                className="w-full p-4 rounded-xl border-2 border-cream focus:border-dusty-rose outline-none font-inter"
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
              className="w-full p-4 rounded-xl border-2 border-cream focus:border-dusty-rose outline-none font-inter resize-none"
              placeholder="Tell us how we can help you..."
              required
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-rose hover:opacity-90 text-white font-montserrat font-semibold py-4 px-8 rounded-xl transition-all duration-300 disabled:opacity-50"
          >
            <Send className="w-4 h-4 mr-2" />
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </div>
    </motion.div>
  )
}
