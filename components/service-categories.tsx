"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Star,
  Phone,
  Palette,
  Scissors,
  Crown,
  Sparkles,
  Heart,
  Zap,
} from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useRouter } from "next/navigation";
import { useState, memo } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const serviceCategories = [
  {
    id: "nail-services",
    title: "Nail Services",
    description: "Professional nail care and beautiful enhancements.",
    image: "/luxury-nail-art-salon-with-elegant-manicure-setup.jpg",
    services: [
      "Manicure",
      "Pedicure",
      "Gel Polish",
      "Nail Extensions",
      "Nail Art",
    ],
    featured: false,
    icon: Palette,
    iconColor: "text-pink-600",
  },
  {
    id: "hair-services",
    title: "Hair Services",
    description: "Expert cuts, styling, and treatments for beautiful hair.",
    image: "/elegant-hair-salon-with-modern-styling-chairs.jpg",
    services: [
      "Haircut & Styling",
      "Hair Coloring",
      "Highlights",
      "Keratin Treatment",
      "Hair Spa",
    ],
    featured: true,
    icon: Scissors,
    iconColor: "text-amber-600",
  },
  {
    id: "makeup",
    title: "Makeup",
    description: "Flawless makeup for every special occasion.",
    image: "/happy-female-client-portrait.jpg",
    services: [
      "Bridal Makeup",
      "Party Makeup",
      "Engagement Makeup",
      "Professional Makeup",
      "Special Events",
    ],
    featured: false,
    icon: Crown,
    iconColor: "text-purple-600",
  },
  {
    id: "pamper-package",
    title: "Pamper Package",
    description: "Complete relaxation and beauty treatments.",
    image: "/serene-spa-treatment-room-with-massage-table.jpg",
    services: [
      "Full Body Treatment",
      "Facial & Skincare",
      "Hair & Nail Care",
      "Relaxation Therapy",
      "Beauty Package",
    ],
    featured: true,
    icon: Sparkles,
    iconColor: "text-emerald-600",
  },
  {
    id: "beauty-services",
    title: "Beauty services",
    description: "Advanced skincare treatments for glowing skin.",
    image: "/professional-skincare-specialist-in-white-coat.jpg",
    services: [
      "Deep Cleansing Facial",
      "Anti-Aging Treatment",
      "Body Scrub & Wrap",
      "Waxing Services",
      "Skin Analysis",
    ],
    featured: false,
    icon: Zap,
    iconColor: "text-blue-600",
  },
  {
    id: "monthly-care",
    title: "Monthly Care",
    description: "Regular beauty maintenance packages.",
    image: "/happy-client-with-beautiful-hair.jpg",
    services: [
      "Monthly Facial",
      "Regular Manicure",
      "Routine Pedicure",
      "Hair Maintenance",
      "Skin Care Routine",
    ],
    featured: false,
    icon: Heart,
    iconColor: "text-rose-600",
  },
];

// Optimized Service Card Component
const ServiceCard = memo(
  ({
    service,
    index,
    onViewDetails,
  }: {
    service: any;
    index: number;
    onViewDetails: (id: string) => void;
  }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="h-full"
    >
      <Card className="group overflow-hidden h-full border-0 bg-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
        <div className="relative overflow-hidden h-48">
          <Image
            src={service.image || "/placeholder.svg"}
            alt={service.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            priority={index < 3}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          {/* Icon and Badge */}
          <div className="absolute top-3 left-3 flex items-center gap-2">
            <div
              className={`w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center ${service.iconColor}`}
            >
              <service.icon className="h-5 w-5" />
            </div>
            {service.featured && (
              <Badge className="bg-rose-gold text-white text-xs font-medium">
                <Star className="h-3 w-3 mr-1" />
                Popular
              </Badge>
            )}
          </div>

          {/* Quick Contact on Hover */}
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button
              size="sm"
              className="bg-rose-gold hover:bg-soft-gold text-white rounded-full h-8 w-8 p-0"
              onClick={(e) => {
                e.stopPropagation();
                window.open("https://wa.me/your-number", "_blank");
              }}
            >
              <Phone className="h-3 w-3" />
            </Button>
          </div>
        </div>

        <CardContent className="p-4">
          <div className="mb-3">
            <h3 className="font-playfair text-xl font-semibold text-warm-brown mb-2">
              {service.title}
            </h3>
            <p className="font-montserrat text-sm text-warm-brown/70 leading-relaxed">
              {service.description}
            </p>
          </div>

          <div className="mb-4">
            <div className="flex flex-wrap gap-1">
              {service.services.slice(0, 3).map((item: string, i: number) => (
                <span
                  key={i}
                  className="text-xs bg-cream text-warm-brown/80 px-2 py-1 rounded-full"
                >
                  {item}
                </span>
              ))}
              {service.services.length > 3 && (
                <span className="text-xs text-rose-gold font-medium">
                  +{service.services.length - 3} more
                </span>
              )}
            </div>
          </div>

          <Button
            onClick={() => onViewDetails(service.id)}
            className="w-full bg-rose-gold hover:bg-soft-gold text-white font-montserrat rounded-full transition-all duration-300 transform hover:scale-105"
          >
            View Pricing
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
);

ServiceCard.displayName = "ServiceCard";

export function ServiceCategories() {
  const isMobile = useIsMobile();
  const router = useRouter();
  const [isNavigating, setIsNavigating] = useState(false);

  const handleViewDetails = (categoryId: string) => {
    // console.log("Navigating to category:", categoryId, "isMobile:", isMobile);
    setIsNavigating(true);

    // Simplified navigation logic
    if (!isMobile) {
      // Desktop: Direct smooth scroll
      const pricingSection = document.getElementById("pricing-section");
      // console.log("Pricing section found:", !!pricingSection);
      if (pricingSection) {
        pricingSection.scrollIntoView({ behavior: "smooth", block: "start" });
        setTimeout(() => {
          const categoryElement = document.getElementById(categoryId);
          // console.log("Category element found:", !!categoryElement, "ID:", categoryId);
          if (categoryElement) {
            categoryElement.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
          }
          setIsNavigating(false);
        }, 600);
      }
    } else {
      // Mobile: Hash navigation for accordion
      window.location.hash = categoryId;
      window.dispatchEvent(
        new CustomEvent("serviceNavigation", {
          detail: { categoryId, isMobile },
        })
      );

      const pricingSection = document.getElementById("pricing-section");
      if (pricingSection) {
        pricingSection.scrollIntoView({ behavior: "smooth", block: "start" });
        setTimeout(() => setIsNavigating(false), 1000);
      }
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-cream to-warm-beige relative overflow-hidden">
      {/* Simplified Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 border border-rose-gold rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 border border-soft-gold rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Clean Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-warm-brown mb-4">
            Our Services
          </h2>
          <p className="font-montserrat text-lg text-warm-brown/80 max-w-2xl mx-auto">
            Professional beauty treatments designed to enhance your natural
            radiance
          </p>
        </motion.div>

        {/* Navigation Indicator */}
        {isNavigating && (
          <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-rose-gold text-white px-4 py-2 rounded-full text-sm font-montserrat shadow-lg">
            Navigating to pricing...
          </div>
        )}

        {/* Service Grid */}
        {isMobile ? (
          <div className="relative">
            <Carousel className="w-full max-w-sm mx-auto">
              <CarouselContent>
                {serviceCategories.map((service, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <ServiceCard
                        service={service}
                        index={index}
                        onViewDetails={handleViewDetails}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2" />
              <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2" />
            </Carousel>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCategories.map((service, index) => (
              <ServiceCard
                key={index}
                service={service}
                index={index}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>
        )}

        {/* Simple CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-rose-gold/20">
            <h3 className="font-playfair text-2xl font-semibold text-warm-brown mb-3">
              Ready to Book?
            </h3>
            <p className="font-montserrat text-warm-brown/70 mb-4">
              Get in touch for personalized beauty treatments
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                onClick={() => router.push("/booking")}
                className="bg-rose-gold hover:bg-soft-gold text-white font-montserrat px-6 py-3 rounded-full"
              >
                Book Appointment
              </Button>
              <Button
                variant="outline"
                onClick={() =>
                  window.open("https://wa.me/your-number", "_blank")
                }
                className="border-rose-gold text-rose-gold hover:bg-rose-gold hover:text-white font-montserrat px-6 py-3 rounded-full"
              >
                <Phone className="h-4 w-4 mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
