"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Palette, Sparkles, Scissors, Heart, Crown, Gift } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const serviceCategories = [
  {
    icon: Palette,
    title: "Nail services",
    description: "Elegant nail care and enhancements tailored to your style.",
    image: "/luxury-nail-art-salon-with-elegant-manicure-setup.jpg",
    services: [
      "Gel polish / Manicure",
      "Nail extensions / Pedicure",
      "Gel extensions",
      "Soft gel extensions",
    ],
  },
  {
    icon: Scissors,
    title: "Hair services",
    description:
      "Precision cuts, color, treatments and relaxing spa for your hair.",
    image: "/elegant-hair-salon-with-modern-styling-chairs.jpg",
    services: [
      "Precision haircut",
      "Global hair colour",
      "Root touch-up",
      "Highlights",
      "Hair styling (blow-dry / ironing / curls)",
      "Keratin / Botox / Nanoplastia",
      "Straight smoothing",
      "Head massage",
    ],
  },
  {
    icon: Crown,
    title: "Makeup",
    description: "Flawless looks for every occasion, from party to bridal.",
    image: "/happy-female-client-portrait.jpg",
    services: [
      "Ladies makeup (general makeup)",
      "Engagement makeup",
      "Bridal makeup",
      "Party makeup",
    ],
  },
  {
    icon: Gift,
    title: "Pamper package",
    description: "Curated head-to-toe indulgence for deep relaxation and glow.",
    image: "/serene-spa-treatment-room-with-massage-table.jpg",
    services: [
      "Full body scrub & wrap",
      "Facial",
      "Manicure with gel (optional)",
      "Polish",
      "Hair spa",
      "Pedicure",
    ],
  },
  {
    icon: Sparkles,
    title: "Skin / Facials / Waxing",
    description:
      "Advanced facials and effective waxing for smooth, radiant skin.",
    image: "/professional-skincare-specialist-in-white-coat.jpg",
    services: [
      "Deep cleansing facial (cleanup)",
      "Basic facial",
      "Body scrub & wrap",
      "Anti-ageing facial",
      "Advanced facial",
      "Hand wax + underarm",
      "Half leg wax",
      "Full leg wax",
    ],
  },
  {
    icon: Sparkles,
    title: "Monthly maintenance (skin) — Choose any 4",
    description: "Build your own routine with any 4 essentials each month.",
    image: "/happy-client-with-beautiful-hair.jpg",
    services: [
      "Face cleanup (Deep cleansing facial)",
      "Basic facials",
      "Manicure",
      "Pedicure",
      "Full hand wax",
      "Half leg wax",
      "Underarm wax",
    ],
  },
];

export function ServiceCategories() {
  const isMobile = useIsMobile();
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

        {/* Services Grid / Carousel */}
        {isMobile ? (
          <Carousel className="w-full max-w-xs sm:max-w-sm mx-auto">
            <CarouselContent>
              {serviceCategories.map((category, index) => (
                <CarouselItem key={index}>
                  <div className="p-1 h-full">
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
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
                            </ul>
                          </div>
                          <Button className="w-full bg-rose-gold hover:bg-soft-gold text-white font-montserrat rounded-full transition-all duration-300">
                            View Details & Pricing
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute -left-2 sm:-left-4 top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute -right-2 sm:-right-4 top-1/2 -translate-y-1/2" />
          </Carousel>
        ) : (
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
        )}
      </div>
    </section>
  );
}
