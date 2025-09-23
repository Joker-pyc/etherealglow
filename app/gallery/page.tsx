"use client";

import { useState } from "react";
import { Navigation } from "@/components/navigation";
import { GalleryHero } from "@/components/gallery-hero";
import { GalleryGrid } from "@/components/gallery-grid";
import { GalleryCategories } from "@/components/gallery-categories";
import { Footer } from "@/components/footer";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <main className="min-h-screen bg-cream">
      <Navigation />
      <GalleryHero />
      <GalleryCategories
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      <GalleryGrid activeCategory={activeCategory} />
      <Footer />
    </main>
  );
}
