import { Navigation } from "@/components/navigation";
import { AboutHero } from "@/components/about-hero";
import { FounderStory } from "@/components/founder-story";
import { ValuesSection } from "@/components/values-section";
import { CertificationsSection } from "@/components/certifications-section";
import { Footer } from "@/components/footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Navigation />
      <AboutHero />
      <FounderStory />
      <ValuesSection />
      <CertificationsSection />
      <Footer />
    </main>
  );
}
