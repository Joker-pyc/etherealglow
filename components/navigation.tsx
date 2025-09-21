"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] glass-effect">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 min-w-0">
            <div className="text-xl sm:text-2xl font-playfair font-bold text-warm-brown truncate">
              Etherealglow
            </div>
            <div className="text-xs sm:text-sm font-cormorant text-warm-brown/80 whitespace-nowrap">
              By Ishika
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-montserrat text-warm-brown hover:text-rose-gold transition-colors duration-300"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              asChild
              className="bg-rose-gold hover:bg-soft-gold text-white font-montserrat px-6 py-2 rounded-full transition-all duration-300 Professional -shadow"
            >
              <Link href="/booking">Book Appointment</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-warm-brown"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-dusty-rose shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 font-montserrat text-warm-brown hover:text-rose-gold transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button
                  asChild
                  className="w-full bg-rose-gold hover:bg-soft-gold text-white font-montserrat rounded-full"
                >
                  <Link href="/booking">Book Appointment</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
