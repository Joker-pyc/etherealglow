"use client"

import { motion } from "framer-motion"

const teamMembers = [
  {
    name: "Priya Sharma",
    role: "Senior Nail Artist",
    specialty: "3D Nail Art & Extensions",
    image: "/professional-nail-artist-in-luxury-salon.jpg",
  },
  {
    name: "Ananya Patel",
    role: "Skincare Specialist",
    specialty: "Anti-Aging & Facial Treatments",
    image: "/professional-skincare-specialist-in-white-coat.jpg",
  },
  {
    name: "Kavya Reddy",
    role: "Hair Stylist",
    specialty: "Color & Styling Expert",
    image: "/professional-hair-stylist-with-modern-tools.jpg",
  },
]

export function TeamSection() {
  return (
    <section className="py-20 bg-cream/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-warm-brown mb-6">Our Expert Team</h2>
          <p className="font-inter text-xl text-warm-brown/70 max-w-3xl mx-auto text-pretty">
            Meet the talented artists who bring your beauty vision to life with skill, passion, and attention to detail
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-luxury hover:shadow-luxury-hover transition-all duration-500 group-hover:-translate-y-2">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-cormorant text-2xl font-bold text-warm-brown mb-2">{member.name}</h3>
                  <p className="font-montserrat text-dusty-rose font-medium mb-2">{member.role}</p>
                  <p className="font-inter text-warm-brown/70 text-sm">{member.specialty}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
