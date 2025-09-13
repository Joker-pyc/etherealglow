import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ServicesPreview } from "@/components/services-preview"
import { AboutPreview } from "@/components/about-preview"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-cream">
      <Navigation />
      <HeroSection />
      <ServicesPreview />
      <AboutPreview />
      <TestimonialsSection />
      <Footer />
    </main>
  )
}
