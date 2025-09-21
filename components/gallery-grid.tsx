"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

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
    id: 5,
    category: "spa",
    title: "Relaxing Spa Environment",
    image: "/luxury-salon-interior.png",
    description: "Tranquil spa setting for ultimate relaxation",
  },
  {
    id: 6,
    category: "skincare",
    title: "Anti-Aging Treatment",
    image: "/luxury-facial-treatment-room-with-soft-lighting.jpg",
    description: "Advanced anti-aging facial with visible results",
  },
];

export function GalleryGrid() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("all");

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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
                onClick={() => openLightbox(item.id)}
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-Professional  hover:shadow-Professional -hover transition-all duration-500 group-hover:-translate-y-2">
                  <div className="aspect-square overflow-hidden relative">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-warm-brown/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="font-cormorant text-xl font-bold mb-1">
                        {item.title}
                      </h3>
                      <p className="font-inter text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
