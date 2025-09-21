"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Palette, Sparkles, Scissors, Heart, Crown, Gift } from "lucide-react";

const serviceCategories = [
  {
    icon: Palette,
    title: "Nail Artistry",
    description:
      "Transform your nails into stunning works of art with our premium nail services.",
    image: "/luxury-nail-art-salon-with-elegant-manicure-setup.jpg",
    services: [
      "Classic Manicure",
      "Gel Polish Application",
      "Nail Art Designs",
      "French Manicure",
      "Nail Extensions",
      "Cuticle Care",
    ],
  },
  {
    icon: Sparkles,
    title: "Skincare Treatments",
    description:
      "Rejuvenate and restore your skin with our advanced facial treatments.",
    image: "/luxury-facial-treatment-room-with-soft-lighting.jpg",
    services: [
      "Deep Cleansing Facial",
      "Anti-Aging Treatment",
      "Hydrating Facial",
      "Acne Treatment",
      "Brightening Facial",
      "Collagen Therapy",
    ],
  },
  {
    icon: Scissors,
    title: "Hair Styling",
    description:
      "Expert cuts, colors, and styling to enhance your natural beauty.",
    image: "/elegant-hair-salon-with-modern-styling-chairs.jpg",
    services: [
      "Precision Haircuts",
      "Hair Coloring",
      "Highlights & Lowlights",
      "Hair Styling",
      "Keratin Treatment",
      "Hair Spa",
    ],
  },
  {
    icon: Crown,
    title: "Bridal Packages",
    description: "Complete bridal beauty solutions for your special day.",
    image: "/serene-spa-treatment-room-with-massage-table.jpg",
    services: [
      "Bridal Makeup",
      "Hair Styling",
      "Pre-Wedding Skincare",
      "Nail Art",
      "Trial Sessions",
      "Complete Bridal Package",
    ],
  },
  {
    icon: Gift,
    title: "Special Occasions",
    description:
      "Look stunning for any special event with our occasion-specific treatments.",
    image: "/happy-client-with-beautiful-hair.jpg",
    services: [
      "Party Makeup",
      "Event Hair Styling",
      "Photoshoot Ready",
      "Anniversary Packages",
      "Birthday Specials",
      "Corporate Events",
    ],
  },
];

export function ServiceCategories() {
  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-warm-brown mb-4 text-balance">
            Service Categories
          </h2>
          <p className="font-montserrat text-lg text-warm-brown/80 max-w-2xl mx-auto text-pretty">
            Explore our comprehensive range of beauty services, each designed to
            provide exceptional results
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="group overflow-hidden Professional -shadow hover:shadow-2xl transition-all duration-500 border-0 bg-white">
                <div className="relative overflow-hidden">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-warm-brown/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4 bg-rose-gold text-white p-3 rounded-full">
                    <category.icon className="h-6 w-6" />
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="font-cormorant text-2xl font-semibold text-warm-brown mb-3">
                    {category.title}
                  </h3>
                  <p className="font-montserrat text-warm-brown/70 mb-4 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Services List */}
                  <div className="mb-6">
                    <h4 className="font-montserrat font-semibold text-warm-brown mb-2">
                      Services Include:
                    </h4>
                    <ul className="space-y-1">
                      {category.services
                        .slice(0, 4)
                        .map((service, serviceIndex) => (
                          <li
                            key={serviceIndex}
                            className="font-montserrat text-sm text-warm-brown/70 flex items-center"
                          >
                            <div className="w-1.5 h-1.5 bg-rose-gold rounded-full mr-2 flex-shrink-0"></div>
                            {service}
                          </li>
                        ))}
                      {category.services.length > 4 && (
                        <li className="font-montserrat text-sm text-rose-gold">
                          +{category.services.length - 4} more services
                        </li>
                      )}
                    </ul>
                  </div>

                  <Button className="w-full bg-rose-gold hover:bg-soft-gold text-white font-montserrat rounded-full transition-all duration-300">
                    View Details & Pricing
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
