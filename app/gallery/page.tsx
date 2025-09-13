import { Navigation } from "@/components/navigation"
import { GalleryHero } from "@/components/gallery-hero"
import { GalleryGrid } from "@/components/gallery-grid"
import { GalleryCategories } from "@/components/gallery-categories"
import { Footer } from "@/components/footer"

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Navigation />
      <GalleryHero />
      <GalleryCategories />
      <GalleryGrid />
      <Footer />
    </main>
  )
}
