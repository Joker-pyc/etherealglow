"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const pricingData = [
  {
    category: "Nail services",
    popular: false,
    services: [
      { name: "Gel polish / Manicure" },
      { name: "Nail extensions / Pedicure" },
      { name: "Gel extensions" },
      { name: "Soft gel extensions" },
    ],
  },
  {
    category: "Hair services",
    popular: false,
    services: [
      { name: "Precision haircut" },
      { name: "Global hair colour" },
      { name: "Root touch-up" },
      { name: "Highlights" },
      { name: "Hair styling (blow-dry / ironing / curls)" },
      { name: "Keratin / Botox / Nanoplastia" },
      { name: "Straight smoothing" },
      { name: "Head massage" },
    ],
  },
  {
    category: "Makeup",
    popular: false,
    services: [
      { name: "Ladies makeup (general makeup)" },
      { name: "Engagement makeup" },
      { name: "Bridal makeup" },
      { name: "Party makeup" },
    ],
  },
  {
    category: "Pamper package",
    popular: true,
    services: [
      { name: "Full body scrub & wrap" },
      { name: "Facial" },
      { name: "Manicure with gel (optional)" },
      { name: "Polish" },
      { name: "Hair spa" },
      { name: "Pedicure" },
    ],
  },
  {
    category: "Skin / Facials / Waxing",
    popular: false,
    services: [
      { name: "Deep cleansing facial (cleanup)" },
      { name: "Basic facial" },
      { name: "Body scrub & wrap" },
      { name: "Anti-ageing facial" },
      { name: "Advanced facial" },
      { name: "Hand wax + underarm" },
      { name: "Half leg wax" },
      { name: "Full leg wax" },
    ],
  },
  {
    category: "Monthly maintenance (skin) — Choose any 4",
    popular: false,
    services: [
      { name: "Face cleanup (Deep cleansing facial)" },
      { name: "Basic facials" },
      { name: "Manicure" },
      { name: "Pedicure" },
      { name: "Full hand wax" },
      { name: "Half leg wax" },
      { name: "Underarm wax" },
    ],
  },
];

export function PricingSection() {
  const isMobile = useIsMobile();

  const renderService = (service: any, serviceIndex: number) => (
    <div
      key={serviceIndex}
      className="flex items-center justify-between py-3 border-b border-dusty-rose/20 last:border-b-0"
    >
      <div className="flex-1">
        <div className="font-montserrat font-medium text-warm-brown">
          {service.name}
        </div>
        {service.duration && (
          <div className="font-montserrat text-sm text-warm-brown/60">
            {service.duration}
          </div>
        )}
      </div>
      {service.price && (
        <div className="font-playfair text-lg font-bold text-rose-gold">
          {service.price}
        </div>
      )}
    </div>
  );

  return (
    <section className="py-20 bg-warm-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-warm-brown mb-4 text-balance">
            Service Pricing
          </h2>
          <p className="font-montserrat text-lg text-warm-brown/80 max-w-2xl mx-auto text-pretty">
            Transparent pricing for all our Professional beauty services.
            Quality and excellence at every price point.
          </p>
        </div>

        {/* Pricing */}
        {isMobile ? (
          <Accordion type="single" collapsible className="w-full">
            {pricingData.map((category, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b-2 border-rose-gold/20"
              >
                <AccordionTrigger className="font-cormorant text-2xl font-semibold text-warm-brown hover:no-underline">
                  <div className="flex items-center">
                    {category.category}
                    {category.popular && (
                      <Badge className="bg-rose-gold text-white font-montserrat ml-4">
                        <Star className="h-3 w-3 mr-1" />
                        Popular
                      </Badge>
                    )}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="p-2">
                  <div className="space-y-4">
                    {category.services.map(renderService)}
                  </div>
                  <Button className="w-full mt-6 bg-rose-gold hover:bg-soft-gold text-white font-montserrat">
                    Book Now
                  </Button>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricingData.map((category, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden Professional -shadow border-0 flex flex-col ${
                  category.popular ? "ring-2 ring-rose-gold" : ""
                }`}
              >
                {category.popular && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-rose-gold text-white font-montserrat">
                      <Star className="h-3 w-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="bg-white pb-4">
                  <h3 className="font-cormorant text-2xl font-semibold text-warm-brown text-center">
                    {category.category}
                  </h3>
                </CardHeader>

                <CardContent className="bg-white p-6 flex flex-col flex-grow">
                  <div className="space-y-4 flex-grow">
                    {category.services.map(renderService)}
                  </div>
                  <Button className="w-full mt-8 bg-rose-gold hover:bg-soft-gold text-white font-montserrat">
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
