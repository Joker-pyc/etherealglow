import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Calendar, Phone, MessageCircle } from "lucide-react";

export function BookingCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-rose-gold/10 to-dusty-rose/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-warm-brown mb-6 text-balance">
          Ready to Experience Professional ?
        </h2>
        <p className="font-montserrat text-xl text-warm-brown/80 mb-8 text-pretty">
          Book your appointment today and let us create a personalized beauty
          experience just for you.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Button
            asChild
            size="lg"
            className="bg-rose-gold hover:bg-soft-gold text-white font-montserrat px-8 py-4 rounded-full text-lg Professional -shadow transition-all duration-300 hover:scale-105"
          >
            <Link href="/booking" className="flex items-center">
              <Calendar className="mr-2 h-5 w-5" />
              Book Online
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-2 border-warm-brown text-warm-brown hover:bg-warm-brown hover:text-cream font-montserrat px-8 py-4 rounded-full text-lg transition-all duration-300 bg-transparent"
          >
            <Link href="tel:+919876543210" className="flex items-center">
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </Link>
          </Button>
        </div>

        <div className="flex items-center justify-center text-warm-brown/70">
          <MessageCircle className="h-5 w-5 mr-2" />
          <span className="font-montserrat text-sm">
            Questions? WhatsApp us at +91 98765 43210
          </span>
        </div>
      </div>
    </section>
  );
}
