import { Navigation } from "@/components/navigation";
import { ServicesHero } from "@/components/services-hero";
import { ServiceCategories } from "@/components/service-categories";
import { PricingSection } from "@/components/pricing-section";
import { BookingCTA } from "@/components/booking-cta";
import { Footer } from "@/components/footer";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-cream via-warm-beige to-cream">
      <Navigation />
      <ServicesHero />
      <div className="service-categories">
        <ServiceCategories />
      </div>
      <div id="pricing-section">
        <PricingSection />
      </div>
      <BookingCTA />
      <Footer />
    </main>
  );
}
