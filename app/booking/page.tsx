import { Navigation } from "@/components/navigation"
import { BookingHero } from "@/components/booking-hero"
import { BookingForm } from "@/components/booking-form"
import { BookingInfo } from "@/components/booking-info"
import { Footer } from "@/components/footer"

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Navigation />
      <BookingHero />
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <BookingForm />
            </div>
            <div className="lg:col-span-1">
              <BookingInfo />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
