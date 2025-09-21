import { Navigation } from "@/components/navigation";
import { ContactHero } from "@/components/contact-hero";
import { ContactForm } from "@/components/contact-form";
import { ContactInfo } from "@/components/contact-info";
import { LocationMap } from "@/components/location-map";
import { Footer } from "@/components/footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Navigation />
      <ContactHero />

      {/* Main Contact Section */}
      <section className="py-20 bg-gradient-to-br from-warm-beige/30 to-cream">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-warm-brown mb-4 text-balance">
              Let's Connect
            </h2>
            <p className="font-montserrat text-lg text-warm-brown/80 max-w-2xl mx-auto text-pretty">
              Ready to book your beauty experience? We're here to help you look
              and feel your absolute best.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>

      <LocationMap />
      <Footer />
    </main>
  );
}
