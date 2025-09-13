import { Navigation } from "@/components/navigation"
import { ServicesHero } from "@/components/services-hero"
import { ServiceCategories } from "@/components/service-categories"
import { PricingSection } from "@/components/pricing-section"
import { BookingCTA } from "@/components/booking-cta"
import { Footer } from "@/components/footer"

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Navigation />
      <ServicesHero />
      <ServiceCategories />
      <PricingSection />
      <BookingCTA />
      <Footer />
    </main>
  )
}
