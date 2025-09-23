"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Palette, Scissors, Sparkles } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const services = [
  {
    icon: Palette,
    title: "Nail Artistry",
    description:
      "Exquisite nail designs and premium manicures that transform your nails into works of art.",
    price: "From ₹800",
    image: "/luxury-nail-art-salon-with-elegant-manicure-setup.jpg",
  },
  {
    icon: Sparkles,
    title: "Skincare Treatments",
    description:
      "Rejuvenating facials and advanced skincare treatments for radiant, glowing skin.",
    price: "From ₹1,200",
    image: "/luxury-facial-treatment-room-with-soft-lighting.jpg",
  },
  {
    icon: Scissors,
    title: "Hair Styling",
    description:
      "Expert cuts, colors, and styling services to enhance your natural beauty.",
    price: "From ₹1,500",
    image: "/elegant-hair-salon-with-modern-styling-chairs.jpg",
  },
];

export function ServicesPreview() {
  const isMobile = useIsMobile();

  const renderServiceCard = (service: any, index: number) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: isMobile ? 0 : index * 0.2 }}
      viewport={{ once: true }}
      className="h-full"
    >
      <Card className="group overflow-hidden Professional -shadow hover:shadow-2xl transition-all duration-500 border-0 bg-white h-full flex flex-col">
        <div className="relative overflow-hidden">
          <img
            src={service.image || "/placeholder.svg"}
            alt={service.title}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-warm-brown/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute top-4 left-4 bg-rose-gold text-white p-2 rounded-full">
            <service.icon className="h-5 w-5" />
          </div>
        </div>
        <CardContent className="p-6 flex flex-col flex-grow">
          <h3 className="font-cormorant text-xl font-semibold text-warm-brown mb-2">
            {service.title}
          </h3>
          <p className="font-montserrat text-sm text-warm-brown/70 mb-4 leading-relaxed flex-grow">
            {service.description}
          </p>
          <div className="flex items-center justify-between mt-auto">
            <span className="font-playfair text-lg font-bold text-rose-gold">
              {service.price}
            </span>
            <Link href="/services" passHref>
              <Button
                variant="ghost"
                size="sm"
                className="text-rose-gold hover:text-soft-gold hover:bg-rose-gold/10 font-montserrat"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );

  return (
    <section className="py-20 bg-warm-beige">
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
            Our Signature Services
          </h2>
          <p className="font-montserrat text-lg text-warm-brown/80 max-w-2xl mx-auto text-pretty">
            Discover our curated collection of professional beauty treatments,
            each designed to enhance your natural radiance
          </p>
        </motion.div>

        {/* Services */}
        {isMobile ? (
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-xs sm:max-w-sm mx-auto"
          >
            <CarouselContent>
              {services.map((service, index) => (
                <CarouselItem key={index}>
                  <div className="p-1 h-full">
                    {renderServiceCard(service, index)}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute -left-2 sm:-left-4 top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute -right-2 sm:-right-4 top-1/2 -translate-y-1/2" />
          </Carousel>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map(renderServiceCard)}
          </div>
        )}

        {/* View All Services Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-8 sm:mt-10"
        >
          <Button
            asChild
            size="lg"
            className="bg-warm-brown hover:bg-warm-brown/90 text-cream font-montserrat px-8 py-4 rounded-full Professional -shadow"
          >
            <Link href="/services">View All Services</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
