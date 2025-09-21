"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const categories = [
  { id: "all", label: "All Work", count: 48 },
  { id: "nails", label: "Nail Art", count: 18 },
  { id: "skincare", label: "Skincare", count: 12 },
  { id: "hair", label: "Hair Styling", count: 10 },
  { id: "spa", label: "Spa Treatments", count: 8 },
];

interface GalleryCategoriesProps {
  activeCategory?: string;
  onCategoryChange?: (category: string) => void;
}

export function GalleryCategories({
  activeCategory = "all",
  onCategoryChange,
}: GalleryCategoriesProps) {
  const [active, setActive] = useState(activeCategory);

  const handleCategoryChange = (categoryId: string) => {
    setActive(categoryId);
    onCategoryChange?.(categoryId);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-warm-brown mb-6">
            Browse Our Work
          </h2>
          <p className="font-inter text-xl text-warm-brown/70 max-w-3xl mx-auto text-pretty">
            Explore our portfolio of transformations and artistic creations
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-6 py-3 rounded-full font-montserrat font-medium transition-all duration-300 ${
                active === category.id
                  ? "bg-gradient-rose text-white shadow-Professional "
                  : "bg-cream text-warm-brown hover:bg-dusty-rose/20 hover:text-dusty-rose"
              }`}
            >
              {category.label}
              <span className="ml-2 text-sm opacity-70">
                ({category.count})
              </span>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
