"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"
import { Calendar, Clock, User, Phone, Mail, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  { id: "nail-art", name: "Nail Art & Extensions", duration: "90 min", price: "₹2,500" },
  { id: "facial", name: "Signature Facial", duration: "75 min", price: "₹3,500" },
  { id: "hair-styling", name: "Hair Styling & Color", duration: "120 min", price: "₹4,500" },
  { id: "spa-package", name: "Luxury Spa Package", duration: "180 min", price: "₹8,500" },
]

const timeSlots = ["9:00 AM", "10:30 AM", "12:00 PM", "1:30 PM", "3:00 PM", "4:30 PM", "6:00 PM"]

export function BookingForm() {
  const [formData, setFormData] = useState({
    service: "",
    date: "",
    time: "",
    name: "",
    phone: "",
    email: "",
    notes: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    alert("Booking request submitted! We'll confirm your appointment within 24 hours.")
    setIsSubmitting(false)
    setFormData({
      service: "",
      date: "",
      time: "",
      name: "",
      phone: "",
      email: "",
      notes: "",
    })
  }

  const updateFormData = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl shadow-luxury p-8"
    >
      <h2 className="font-playfair text-3xl font-bold text-warm-brown mb-8">Schedule Your Appointment</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Service Selection */}
        <div>
          <label className="block font-montserrat font-medium text-warm-brown mb-3">Select Service</label>
          <div className="grid gap-3">
            {services.map((service) => (
              <label
                key={service.id}
                className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all ${
                  formData.service === service.id
                    ? "border-dusty-rose bg-dusty-rose/10"
                    : "border-cream hover:border-dusty-rose/50"
                }`}
              >
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="service"
                    value={service.id}
                    checked={formData.service === service.id}
                    onChange={(e) => updateFormData("service", e.target.value)}
                    className="sr-only"
                  />
                  <div>
                    <div className="font-cormorant text-lg font-semibold text-warm-brown">{service.name}</div>
                    <div className="font-inter text-sm text-warm-brown/70">{service.duration}</div>
                  </div>
                </div>
                <div className="font-montserrat font-bold text-dusty-rose">{service.price}</div>
              </label>
            ))}
          </div>
        </div>

        {/* Date and Time */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block font-montserrat font-medium text-warm-brown mb-3">
              <Calendar className="inline w-4 h-4 mr-2" />
              Select Date
            </label>
            <input
              type="date"
              value={formData.date}
              onChange={(e) => updateFormData("date", e.target.value)}
              min={new Date().toISOString().split("T")[0]}
              className="w-full p-4 rounded-xl border-2 border-cream focus:border-dusty-rose outline-none font-inter"
              required
            />
          </div>

          <div>
            <label className="block font-montserrat font-medium text-warm-brown mb-3">
              <Clock className="inline w-4 h-4 mr-2" />
              Select Time
            </label>
            <select
              value={formData.time}
              onChange={(e) => updateFormData("time", e.target.value)}
              className="w-full p-4 rounded-xl border-2 border-cream focus:border-dusty-rose outline-none font-inter"
              required
            >
              <option value="">Choose time</option>
              {timeSlots.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Personal Information */}
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
              <Phone className="inline w-4 h-4 mr-2" />
              Phone Number
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => updateFormData("phone", e.target.value)}
              className="w-full p-4 rounded-xl border-2 border-cream focus:border-dusty-rose outline-none font-inter"
              placeholder="+91 98765 43210"
              required
            />
          </div>
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

        {/* Special Requests */}
        <div>
          <label className="block font-montserrat font-medium text-warm-brown mb-3">
            <MessageSquare className="inline w-4 h-4 mr-2" />
            Special Requests (Optional)
          </label>
          <textarea
            value={formData.notes}
            onChange={(e) => updateFormData("notes", e.target.value)}
            rows={4}
            className="w-full p-4 rounded-xl border-2 border-cream focus:border-dusty-rose outline-none font-inter resize-none"
            placeholder="Any special requests or preferences..."
          />
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-rose hover:opacity-90 text-white font-montserrat font-semibold py-4 px-8 rounded-xl transition-all duration-300 disabled:opacity-50"
        >
          {isSubmitting ? "Submitting..." : "Book Appointment"}
        </Button>
      </form>
    </motion.div>
  )
}
