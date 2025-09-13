"use client"

import { motion } from "framer-motion"
import { Sparkles, Heart, Award, Users } from "lucide-react"

const values = [
  {
    icon: Sparkles,
    title: "Excellence",
    description: "We pursue perfection in every service, using only premium products and advanced techniques.",
  },
  {
    icon: Heart,
    title: "Care",
    description: "Your comfort and satisfaction are our priority. We create a nurturing, relaxing environment.",
  },
  {
    icon: Award,
    title: "Expertise",
    description: "Our team continuously trains in the latest beauty trends and innovative treatments.",
  },
  {
    icon: Users,
    title: "Community",
    description: "We build lasting relationships with our clients, becoming part of your beauty journey.",
  },
]

export function ValuesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-warm-brown mb-6">Our Values</h2>
          <p className="font-inter text-xl text-warm-brown/70 max-w-3xl mx-auto text-pretty">
            The principles that guide everything we do at Etherealglow
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-rose rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <value.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-cormorant text-2xl font-bold text-warm-brown mb-4">{value.title}</h3>
              <p className="font-inter text-warm-brown/70 leading-relaxed text-pretty">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
