"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const galleryItems = [
  {
    id: 1,
    category: "nails",
    title: "3D Floral Nail Art",
    image: "/luxury-nail-art-salon-with-elegant-manicure-setup.jpg",
    description: "Intricate 3D floral design with rose gold accents",
  },
  {
    id: 2,
    category: "skincare",
    title: "Hydrating Facial Treatment",
    image: "/luxury-facial-treatment-room-with-soft-lighting.jpg",
    description: "Deep hydration therapy with organic ingredients",
  },
  {
    id: 3,
    category: "hair",
    title: "Balayage Color Transformation",
    image: "/elegant-hair-salon-with-modern-styling-chairs.jpg",
    description: "Natural-looking highlights with dimensional color",
  },
  {
    id: 4,
    category: "nails",
    title: "Geometric Nail Design",
    image: "/luxury-nail-art-salon-with-elegant-manicure-setup.jpg",
    description: "Modern geometric patterns in rose gold",
  },

  {
    id: 6,
    category: "skincare",
    title: "Anti-Aging Treatment",
    image: "/luxury-facial-treatment-room-with-soft-lighting.jpg",
    description: "Advanced anti-aging facial with visible results",
  },
];

interface GalleryGridProps {
  activeCategory: string;
}

export function GalleryGrid({ activeCategory }: GalleryGridProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const isMobile = useIsMobile();

  const filteredItems =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const openLightbox = (id: number) => {
    setSelectedImage(id);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return;

    const currentIndex = filteredItems.findIndex(
      (item) => item.id === selectedImage
    );
    let newIndex;

    if (direction === "prev") {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredItems.length - 1;
    } else {
      newIndex = currentIndex < filteredItems.length - 1 ? currentIndex + 1 : 0;
    }

    setSelectedImage(filteredItems[newIndex].id);
  };

  const selectedItem = selectedImage
    ? galleryItems.find((item) => item.id === selectedImage)
    : null;

  return (
    <>
      <section className="py-16 bg-cream/30">
        <div className="max-w-7xl mx-auto px-6">
          {isMobile ? (
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {filteredItems.map((item, index) => (
                  <CarouselItem
                    key={item.id}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
                      onClick={() => openLightbox(item.id)}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-64 sm:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                      <div className="absolute bottom-0 left-0 p-6">
                        <h3 className="font-playfair text-2xl font-bold text-white mb-2">
                          {item.title}
                        </h3>
                        <p className="font-inter text-white/90">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute -left-2 sm:left-4 top-1/2 -translate-y-1/2" />
              <CarouselNext className="absolute -right-2 sm:right-4 top-1/2 -translate-y-1/2" />
            </Carousel>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
                  onClick={() => openLightbox(item.id)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="font-playfair text-2xl font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="font-inter text-white/90">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && selectedItem && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-dusty-rose transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            <button
              onClick={() => navigateImage("prev")}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-dusty-rose transition-colors"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button
              onClick={() => navigateImage("next")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-dusty-rose transition-colors"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <img
              src={selectedItem.image || "/placeholder.svg"}
              alt={selectedItem.title}
              className="max-w-full max-h-full object-contain rounded-lg"
            />

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <h3 className="font-cormorant text-2xl font-bold text-white mb-2">
                {selectedItem.title}
              </h3>
              <p className="font-inter text-white/80">
                {selectedItem.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
