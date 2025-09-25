"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  ArrowRight,
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
import { useEffect, useRef, useState, memo } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const pricingData = [
  {
    id: "nail-services",
    category: "Nail Services",
    icon: Palette,
    iconColor: "text-pink-600",
    popular: false,
    services: [
      { name: "Gel Polish" },
      { name: "Nail Extensions" },
      { name: "Manicure" },
      { name: "Pedicure" },
      { name: "Gel Extensions" },
      { name: "Soft Gel Extension" },
    ],
  },
  {
    id: "hair-services",
    category: "Hair Services",
    icon: Scissors,
    iconColor: "text-amber-600",
    popular: true,
    services: [
      { name: "Haircut & Styling" },
      { name: "Hair Coloring" },
      { name: "Root Touch-up" },
      { name: "Highlights" },
      { name: "Keratin Treatment" },
      { name: "Hair Spa" },
    ],
  },
  {
    id: "makeup",
    category: "Makeup Services",
    icon: Crown,
    iconColor: "text-purple-600",
    popular: false,
    services: [
      { name: "Bridal Makeup" },
      { name: "Party Makeup" },
      { name: "Engagement Makeup" },
      { name: "Siders Makeup" },
      { name: "Baby Shower Makeup" },
    ],
  },
  {
    id: "pamper-package",
    category: "Pamper Package",
    icon: Sparkles,
    iconColor: "text-emerald-600",
    popular: true,
    services: [
      { name: "Full Body Scrub & Wrap" },
      { name: "Facial" },
      { name: "Manicure with gel polish" },
      { name: "Hair Spa" },
      { name: "Pedicure" },
    ],
  },
  {
    id: "beauty-services",
    category: "Beauty services",
    icon: Zap,
    iconColor: "text-blue-600",
    popular: false,
    services: [
      { name: "Deep Cleansing Facial" },
      { name: "Anti-Aging Facial" },
      { name: "Body Scrub & Wrap" },
      { name: "Waxing Services" },
      { name: "Skin Analysis" },
    ],
  },
  {
    id: "monthly-care",
    category: "Monthly Care Package",
    icon: Heart,
    iconColor: "text-rose-600",
    popular: false,
    services: [
      { name: "Monthly Facial" },
      { name: "Regular Manicure" },
      { name: "Routine Pedicure" },
      { name: "Hair Maintenance" },
      { name: "Choose Any 4 Services" },
    ],
  },
];

// Optimized Service Item Component
const ServiceItem = memo(
  ({ service, index }: { service: any; index: number }) => (
    <div className="flex items-center justify-between py-2 border-b border-cream/50 last:border-b-0 group">
      <div className="flex-1">
        <div className="font-montserrat font-medium text-warm-brown group-hover:text-rose-gold transition-colors">
          {service.name}
        </div>
      </div>
      <div className="text-rose-gold font-medium">
        <Button
          variant="ghost"
          size="sm"
          className="text-rose-gold hover:bg-rose-gold/10 h-8 px-3"
          onClick={() => window.open("https://wa.me/your-number", "_blank")}
        >
          Book
        </Button>
      </div>
    </div>
  )
);

ServiceItem.displayName = "ServiceItem";

// Optimized Pricing Card Component
const PricingCard = memo(
  ({ category, index }: { category: any; index: number }) => (
    <div id={category.id} className="scroll-mt-20">
      <Card className="relative overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border-0 flex flex-col h-full bg-white">
        {category.popular && (
          <div className="absolute top-3 right-3 z-10">
            <Badge className="bg-rose-gold text-white font-montserrat text-xs">
              <Star className="h-3 w-3 mr-1" />
              Popular
            </Badge>
          </div>
        )}

        <CardHeader className="bg-gradient-to-br from-cream to-warm-beige/50 pb-4">
          <div className="flex items-center justify-center mb-2">
            <div
              className={`p-3 rounded-full bg-white/80 ${category.iconColor}`}
            >
              <category.icon className="h-6 w-6" />
            </div>
          </div>
          <h3 className="font-playfair text-xl font-semibold text-warm-brown text-center">
            {category.category}
          </h3>
        </CardHeader>

        <CardContent className="p-4 flex flex-col flex-grow">
          <div className="space-y-2 flex-grow mb-4">
            {category.services.map((service: any, serviceIndex: number) => (
              <ServiceItem
                key={serviceIndex}
                service={service}
                index={serviceIndex}
              />
            ))}
          </div>

          <div className="flex gap-2">
            <Button
              onClick={() => window.open("https://wa.me/your-number", "_blank")}
              className="flex-1 bg-rose-gold hover:bg-soft-gold text-white font-montserrat transition-all duration-300"
            >
              <Phone className="h-4 w-4 mr-2" />
              Book Now
            </Button>
            <Button
              variant="outline"
              className="border-rose-gold text-rose-gold hover:bg-rose-gold hover:text-white"
              onClick={() => {
                // Scroll to contact section or open contact modal
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Info
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
);

PricingCard.displayName = "PricingCard";

export function PricingSection() {
  const isMobile = useIsMobile();
  const router = useRouter();
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  // Simplified hash navigation
  useEffect(() => {
    const handleCustomNavigation = (event: CustomEvent) => {
      const hash = window.location.hash.substring(1);
      // console.log("Custom navigation - hash:", hash, "isMobile:", isMobile);

      if (hash && isMobile) {
        const categoryIndex = pricingData.findIndex((cat) => cat.id === hash);
        // console.log("Category index found:", categoryIndex, "for hash:", hash);
        if (categoryIndex !== -1) {
          setExpandedItem(`item-${categoryIndex}`);
          // console.log("Setting expanded item:", `item-${categoryIndex}`);
        }
      }
    };

    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);

      if (hash && isMobile) {
        const categoryIndex = pricingData.findIndex((cat) => cat.id === hash);
        if (categoryIndex !== -1) {
          setExpandedItem(`item-${categoryIndex}`);
        }
      }
    };

    // Check hash on mount
    handleHashChange();

    // Listen for navigation events
    window.addEventListener(
      "serviceNavigation",
      handleCustomNavigation as EventListener
    );
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener(
        "serviceNavigation",
        handleCustomNavigation as EventListener
      );
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [isMobile]);

  return (
    <section className="py-16 bg-gradient-to-br from-warm-beige to-cream relative overflow-hidden">
      {/* Clean Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-16 h-16 border border-rose-gold rounded-full"></div>
        <div className="absolute bottom-10 left-10 w-12 h-12 border border-soft-gold rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Clean Header */}
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-warm-brown mb-4">
            Service Pricing
          </h2>
          <p className="font-montserrat text-lg text-warm-brown/80 max-w-2xl mx-auto">
            Transparent pricing for professional beauty services. Quality at
            every price point.
          </p>
        </div>

        {/* Pricing Display */}
        {isMobile ? (
          <Accordion
            type="single"
            collapsible
            className="w-full"
            value={expandedItem || ""}
            onValueChange={setExpandedItem}
          >
            {pricingData.map((category, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-cream/50 mb-3 bg-white rounded-lg shadow-sm overflow-hidden"
              >
                <AccordionTrigger className="font-playfair text-lg font-semibold text-warm-brown hover:no-underline py-4 px-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-full bg-white/80 ${category.iconColor}`}
                    >
                      <category.icon className="h-5 w-5" />
                    </div>
                    <span>{category.category}</span>
                    {category.popular && (
                      <Badge className="bg-rose-gold text-white font-montserrat text-xs ml-2">
                        <Star className="h-3 w-3 mr-1" />
                        Popular
                      </Badge>
                    )}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  <div className="space-y-2 mb-4">
                    {category.services.map(
                      (service: any, serviceIndex: number) => (
                        <ServiceItem
                          key={serviceIndex}
                          service={service}
                          index={serviceIndex}
                        />
                      )
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      onClick={() =>
                        window.open("https://wa.me/your-number", "_blank")
                      }
                      className="flex-1 bg-rose-gold hover:bg-soft-gold text-white font-montserrat"
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      Book Now
                    </Button>
                    <Button
                      variant="outline"
                      className="border-rose-gold text-rose-gold hover:bg-rose-gold hover:text-white"
                    >
                      Info
                    </Button>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pricingData.map((category, index) => (
              <PricingCard key={index} category={category} index={index} />
            ))}
          </div>
        )}

        {/* Simple Contact CTA */}
        <div className="text-center mt-12">
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-rose-gold/20">
            <h3 className="font-playfair text-2xl font-semibold text-warm-brown mb-3">
              Need More Information?
            </h3>
            <p className="font-montserrat text-warm-brown/70 mb-4">
              Contact us for personalized consultations and custom packages
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                onClick={() => router.push("/contact")}
                className="bg-rose-gold hover:bg-soft-gold text-white font-montserrat px-6 py-3 rounded-full"
              >
                Contact Us
                <ArrowRight className="h-4 w-4 ml-2" />
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
        </div>
      </div>
    </section>
  );
}
