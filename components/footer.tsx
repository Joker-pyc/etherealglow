import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Instagram, Facebook, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-warm-brown text-cream">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <div className="text-2xl font-playfair font-bold text-rose-gold mb-1">
                Etherealglow
              </div>
              <div className="text-sm font-cormorant text-dusty-rose">
                By Ishika
              </div>
            </div>
            <p className="font-montserrat text-cream/80 mb-6 leading-relaxed">
              Your premier destination for Professional beauty treatments and
              exceptional service.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="sm"
                className="text-cream hover:text-rose-gold hover:bg-rose-gold/10"
              >
                <Instagram className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-cream hover:text-rose-gold hover:bg-rose-gold/10"
              >
                <Facebook className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-cormorant text-lg font-semibold text-rose-gold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {["Home", "Services", "About", "Gallery", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                      className="font-montserrat text-cream/80 hover:text-rose-gold transition-colors duration-300"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-cormorant text-lg font-semibold text-rose-gold mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              {["Nail Art", "Skincare", "Hair Styling", "Bridal Packages"].map(
                (service) => (
                  <li key={service}>
                    <Link
                      href="/services"
                      className="font-montserrat text-cream/80 hover:text-rose-gold transition-colors duration-300"
                    >
                      {service}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-cormorant text-lg font-semibold text-rose-gold mb-4">
              Contact Info
            </h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-rose-gold mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-montserrat text-cream/80">
                    +91 98765 43210
                  </div>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-rose-gold mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-montserrat text-cream/80">
                    hello@etherealglow.com
                  </div>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-rose-gold mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-montserrat text-cream/80">
                    Mobile Service Available
                    <br />
                    Mumbai & Surrounding Areas
                  </div>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="h-5 w-5 text-rose-gold mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-montserrat text-cream/80">
                    Mon-Sat: 10AM-8PM
                    <br />
                    Sunday: 11AM-6PM
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cream/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="font-montserrat text-cream/60 text-sm mb-4 md:mb-0">
              © 2024 Etherealglow by Ishika. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link
                href="/privacy"
                className="font-montserrat text-cream/60 hover:text-rose-gold text-sm transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="font-montserrat text-cream/60 hover:text-rose-gold text-sm transition-colors duration-300"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
