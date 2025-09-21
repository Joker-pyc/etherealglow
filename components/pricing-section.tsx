import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star } from "lucide-react";

const pricingData = [
  {
    category: "Nail Artistry",
    popular: false,
    services: [
      { name: "Classic Manicure", price: "₹800", duration: "45 min" },
      { name: "Gel Polish Manicure", price: "₹1,200", duration: "60 min" },
      { name: "Nail Art (Simple)", price: "₹1,500", duration: "75 min" },
      { name: "Nail Art (Detailed)", price: "₹2,500", duration: "90 min" },
      { name: "Nail Extensions", price: "₹3,000", duration: "120 min" },
      { name: "French Manicure", price: "₹1,000", duration: "50 min" },
    ],
  },
  {
    category: "Skincare Treatments",
    popular: true,
    services: [
      { name: "Deep Cleansing Facial", price: "₹1,200", duration: "60 min" },
      { name: "Anti-Aging Facial", price: "₹2,500", duration: "90 min" },
      { name: "Hydrating Facial", price: "₹1,800", duration: "75 min" },
      { name: "Acne Treatment", price: "₹2,000", duration: "80 min" },
      { name: "Brightening Facial", price: "₹2,200", duration: "85 min" },
      { name: "Collagen Therapy", price: "₹3,500", duration: "100 min" },
    ],
  },
  {
    category: "Hair Styling",
    popular: false,
    services: [
      { name: "Precision Haircut", price: "₹1,500", duration: "45 min" },
      { name: "Hair Coloring", price: "₹3,500", duration: "150 min" },
      { name: "Highlights", price: "₹4,500", duration: "180 min" },
      { name: "Hair Styling", price: "₹1,200", duration: "60 min" },
      { name: "Keratin Treatment", price: "₹6,000", duration: "240 min" },
      { name: "Hair Spa", price: "₹2,000", duration: "90 min" },
    ],
  },
];

export function PricingSection() {
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

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pricingData.map((category, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden Professional -shadow border-0 ${
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

              <CardContent className="bg-white p-6">
                <div className="space-y-4">
                  {category.services.map((service, serviceIndex) => (
                    <div
                      key={serviceIndex}
                      className="flex items-center justify-between py-3 border-b border-dusty-rose/20 last:border-b-0"
                    >
                      <div className="flex-1">
                        <div className="font-montserrat font-medium text-warm-brown">
                          {service.name}
                        </div>
                        <div className="font-montserrat text-sm text-warm-brown/60">
                          {service.duration}
                        </div>
                      </div>
                      <div className="font-playfair text-lg font-bold text-rose-gold">
                        {service.price}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-dusty-rose/20">
                  <Button className="w-full bg-rose-gold hover:bg-soft-gold text-white font-montserrat rounded-full transition-all duration-300">
                    Book {category.category}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Package Deals */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="font-cormorant text-3xl font-semibold text-warm-brown mb-2">
              Special Packages
            </h3>
            <p className="font-montserrat text-warm-brown/80">
              Save more with our curated service combinations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
                            {
                name: "Pamper Package",
                services: [
                  "Full Body Massage",
                  "Facial Treatment",
                  "Manicure",
                  "Hair Spa",
                ],
                originalPrice: "₹6,200",
                packagePrice: "₹4,800",
                savings: "₹1,400",
              },
              {
                name: "Bridal Complete",
                services: [
                  "Bridal Makeup",
                  "Hair Styling",
                  "Nail Art",
                  "Pre-Wedding Facial",
                ],
                originalPrice: "₹8,500",
                packagePrice: "₹6,500",
                savings: "₹2,000",
              },
              {
                name: "Monthly Maintenance",
                services: ["Monthly Facial", "Manicure", "Hair Cut & Style"],
                originalPrice: "₹4,500",
                packagePrice: "₹3,500",
                savings: "₹1,000",
              },
            ].map((pkg, index) => (
              <Card
                key={index}
                className="bg-white Professional -shadow border-0"
              >
                <CardContent className="p-6">
                  <h4 className="font-cormorant text-xl font-semibold text-warm-brown mb-3">
                    {pkg.name}
                  </h4>
                  <ul className="space-y-2 mb-4">
                    {pkg.services.map((service, i) => (
                      <li
                        key={i}
                        className="flex items-center font-montserrat text-sm text-warm-brown/80"
                      >
                        <Check className="h-4 w-4 text-rose-gold mr-2 flex-shrink-0" />
                        {service}
                      </li>
                    ))}
                  </ul>
                  <div className="border-t border-dusty-rose/20 pt-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-montserrat text-sm text-warm-brown/60 line-through">
                        {pkg.originalPrice}
                      </span>
                      <span className="font-montserrat text-xs bg-rose-gold/10 text-rose-gold px-2 py-1 rounded">
                        Save {pkg.savings}
                      </span>
                    </div>
                    <div className="font-playfair text-2xl font-bold text-rose-gold mb-3">
                      {pkg.packagePrice}
                    </div>
                    <Button className="w-full bg-warm-brown hover:bg-warm-brown/90 text-cream font-montserrat rounded-full">
                      Book Package
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
