"use client";

import { motion } from "framer-motion";

const categories = [
  { id: "all", label: "All Work", count: 40 },
  { id: "nails", label: "Nail Art", count: 18 },
  { id: "skincare", label: "Skincare", count: 12 },
  { id: "hair", label: "Hair Styling", count: 10 },
];

interface GalleryCategoriesProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function GalleryCategories({
  activeCategory,
  onCategoryChange,
}: GalleryCategoriesProps) {
  return (
    <section className="py-10 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-warm-brown mb-2">
            Browse Our Work
          </h2>
          <p className="font-inter text-base md:text-lg text-warm-brown/70 max-w-3xl mx-auto text-pretty">
            Explore our portfolio of transformations and artistic creations
          </p>
        </motion.div>

        {/* Horizontal, scrollable pill row on mobile; wraps on desktop */}
        <div className="relative">
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
            {categories.map((category, index) => {
              const isActive = activeCategory === category.id;
              return (
                <motion.button
                  key={category.id}
                  onClick={() => onCategoryChange(category.id)}
                  aria-pressed={isActive}
                  className={`ripple inline-flex items-center gap-2 rounded-full border glass-border-white whitespace-nowrap ${
                    isActive
                      ? "coral-peach-gradient text-white premium-shadow"
                      : "glass-strong text-warm-brown hover:bg-white/30"
                  } px-4 md:px-5 py-2 md:py-2.5 font-inter font-semibold text-sm md:text-base transition-all duration-300`}
                  transition={{ duration: 0.4, delay: index * 0.04 }}
                >
                  <span className="leading-none">{category.label}</span>
                  <span
                    className={`min-w-[34px] shrink-0 text-center px-2 py-0.5 rounded-full text-xs font-medium leading-none ${
                      isActive
                        ? "bg-white/25 text-white"
                        : "bg-white/70 text-warm-brown/80"
                    }`}
                  >
                    {category.count}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
