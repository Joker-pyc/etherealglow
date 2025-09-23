"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  Home,
  Scissors,
  CalendarCheck,
  Images,
  User,
  Sparkles,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { useIsMobile } from "@/hooks/use-mobile";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [hiddenOnScroll, setHiddenOnScroll] = useState(false);
  const pathname = usePathname();
  const isMobile = useIsMobile();

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const currentY = window.scrollY;
      const shouldHide = currentY > lastY && currentY > 24; // hide on scroll down
      setHiddenOnScroll(shouldHide);
      lastY = currentY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll as any);
  }, []);

  const navItems = useMemo(
    () => [
      { href: "/", label: "Home", icon: Home },
      { href: "/services", label: "Services", icon: Scissors },
      { href: "/gallery", label: "Gallery", icon: Images },
      { href: "/about", label: "About", icon: Sparkles },
      { href: "/contact", label: "Contact", icon: User },
    ],
    []
  );

  return (
    <>
      {/* Desktop/Tablet floating top nav */}
      {!isMobile && (
        <nav
          className={
            "fixed left-1/2 top-3 z-[100] w-[min(1120px,92vw)] -translate-x-1/2"
          }
          aria-label="Primary"
        >
          <div
            className={
              `glass-strong glass-border-white premium-shadow supports-[backdrop-filter]:bg-white/10 bg-white/15` +
              ` rounded-[24px] h-16 px-4 sm:px-6 flex items-center justify-between transition-transform duration-300` +
              ` ${hiddenOnScroll ? "-translate-y-24" : "translate-y-0"}`
            }
          >
            {/* Logo */}
            <Link
              href="/"
              className="group flex items-center gap-2 min-w-0 ripple"
              aria-label="Etherealglow home"
            >
              <Sparkles className="size-5 text-rose-gold group-hover:scale-110 transition-transform duration-300" />
              <div className="text-xl font-playfair font-bold text-warm-brown truncate">
                Etherealglow
              </div>
            </Link>

            {/* Desktop Nav Items */}
            <div className="hidden lg:flex items-center gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={
                      `ripple group inline-flex items-center gap-2 rounded-full px-4 py-2` +
                      ` text-sm font-montserrat transition-all duration-300` +
                      ` ${
                        isActive
                          ? "bg-white/40 text-warm-brown"
                          : "text-warm-brown hover:text-rose-gold hover:bg-white/30"
                      }`
                    }
                  >
                    <Icon className="size-4 opacity-90 group-hover:opacity-100 transition-opacity" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>

            {/* CTA */}
            <div className="flex items-center gap-3">
              <Button
                asChild
                className="ripple coral-peach-gradient text-white font-montserrat rounded-full px-5 py-2 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                <Link href="/booking" aria-label="Book appointment">
                  <CalendarCheck className="size-4" />
                  <span>Book</span>
                </Link>
              </Button>
              {/* No mobile trigger in desktop layout */}
            </div>
          </div>
        </nav>
      )}

      {/* Mobile top header */}
      {isMobile && (
        <div className="fixed top-0 left-0 right-0 z-[100] px-3 pt-3">
          <div
            className={`glass-strong glass-border-white premium-shadow rounded-2xl h-14 px-3 flex items-center justify-between transition-transform duration-300 ${
              hiddenOnScroll ? "-translate-y-20" : "translate-y-0"
            }`}
          >
            <Link
              href="/"
              className="flex items-center gap-2 ripple"
              aria-label="Etherealglow home"
            >
              <Sparkles className="size-5 text-rose-gold" />
              <div className="text-base font-playfair font-bold text-warm-brown">
                Etherealglow
              </div>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-warm-brown"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
          {isOpen && (
            <div
              id="mobile-menu"
              className="mt-2 glass-strong glass-border-white premium-shadow rounded-2xl overflow-hidden"
            >
              <div className="py-2">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      aria-current={isActive ? "page" : undefined}
                      className={`flex items-center gap-3 px-4 py-3 text-warm-brown transition-colors ${
                        isActive ? "bg-white/40" : "hover:bg-white/20"
                      }`}
                    >
                      <Icon className="size-5" />
                      <span className="font-montserrat">{item.label}</span>
                    </Link>
                  );
                })}
                <div className="px-3 pt-1 pb-3">
                  <Button
                    asChild
                    className="w-full coral-peach-gradient text-white rounded-full ripple"
                  >
                    <Link href="/booking">
                      <CalendarCheck className="size-4" />
                      <span>Book Appointment</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Mobile bottom nav removed per request */}
      {/* Floating Contact FAB removed per request */}
    </>
  );
}
