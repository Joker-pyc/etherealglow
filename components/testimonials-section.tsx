"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Priya Sharma",
    service: "Nail Art & Spa",
    rating: 5,
    text: "Etherealglow is pure magic! Ishika's attention to detail is incredible. My nails have never looked better, and the spa experience was absolutely divine.",
    image: "/happy-female-client-portrait.jpg",
  },
  {
    name: "Ananya Patel",
    service: "Skincare Treatment",
    rating: 5,
    text: "The facial treatment here transformed my skin completely. The ambiance is so relaxing, and Ishika's expertise shows in every service. Highly recommend!",
    image: "/satisfied-female-customer-portrait.jpg",
  },
  {
    name: "Kavya Reddy",
    service: "Hair Styling",
    rating: 5,
    text: "I've been coming here for months now, and every visit exceeds my expectations. The hair styling is top-notch, and the overall experience is luxurious.",
    image: "/happy-client-with-beautiful-hair.jpg",
  },
];

export function TestimonialsSection() {
  const isMobile = useIsMobile();

  const renderTestimonialCard = (testimonial: any, index: number) => (
    <Card
      key={index}
      className="bg-white border-0 Professional -shadow hover:shadow-2xl transition-all duration-300 h-full"
    >
      <CardContent className="p-8 flex flex-col h-full">
        <div className="mb-4">
          <Quote className="h-8 w-8 text-rose-gold" />
        </div>
        <div className="flex items-center mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="h-5 w-5 text-rose-gold fill-current" />
          ))}
        </div>
        <p className="font-montserrat text-warm-brown/80 mb-6 leading-relaxed text-pretty flex-grow">
          "{testimonial.text}"
        </p>
        <div className="flex items-center mt-auto">
          <img
            src={testimonial.image || "/placeholder.svg"}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
          <div>
            <div className="font-cormorant text-lg font-semibold text-warm-brown">
              {testimonial.name}
            </div>
            <div className="font-montserrat text-sm text-rose-gold">
              {testimonial.service}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section className="py-20 bg-dusty-rose/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-warm-brown mb-4 text-balance">
            What Our Clients Say
          </h2>
          <p className="font-montserrat text-lg text-warm-brown/80 max-w-2xl mx-auto text-pretty">
            Discover why our clients choose Etherealglow for their beauty
            journey
          </p>
        </div>

        {/* Testimonials Carousel or Grid */}
        {isMobile ? (
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-xs sm:max-w-sm mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    {renderTestimonialCard(testimonial, index)}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute -left-2 sm:-left-4 top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute -right-2 sm:-right-4 top-1/2 -translate-y-1/2" />
          </Carousel>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(renderTestimonialCard)}
          </div>
        )}
      </div>
    </section>
  );
}
