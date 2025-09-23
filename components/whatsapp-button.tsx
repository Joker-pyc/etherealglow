"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
}

// Inline WhatsApp brand icon (optimized SVG)
function WhatsAppIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      className={className}
      role="img"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="#fff"
        d="M128.1 40c-47.5 0-86 38.5-86 86 0 15.1 4 29.7 11.6 42.7L40 216l48.7-13.2c12.5 6.8 26.7 10.4 41.4 10.4h.1c47.5 0 86-38.5 86-86 0-22.9-8.9-44.5-25.2-60.8C172.6 48.9 151 40 128.1 40zm0 155.1c-13.4 0-26.5-3.6-37.8-10.3l-2.7-1.6-28.9 7.8 7.7-28.1-1.8-2.9c-7.2-11.7-11.1-25.1-11.1-38.9 0-41 33.4-74.4 74.6-74.4 19.9 0 38.7 7.7 52.8 21.8 14.1 14.1 21.9 32.9 21.9 52.8 0 41.2-33.5 74.8-74.7 74.8z"
      />
      <path
        fill="#fff"
        d="M175.2 145.9c-2.7-1.4-16-7.9-18.4-8.8-2.4-.9-4.2-1.4-6 1.4-1.8 2.7-6.9 8.8-8.4 10.6-1.6 1.8-3.1 2-5.8.7-2.7-1.4-11.3-4.2-21.5-13.5-7.9-7-13.2-15.6-14.7-18.3-1.6-2.7-.2-4.1 1.2-5.5 1.2-1.2 2.7-3.1 4.1-4.7 1.4-1.6 1.8-2.7 2.7-4.5.9-1.8.5-3.4-.2-4.7-.7-1.4-6-14.4-8.2-19.7-2.1-5.1-4.3-4.4-6-4.5-1.6-.1-3.4-.1-5.2-.1s-4.7.7-7.1 3.4c-2.4 2.7-9.3 9.1-9.3 22.3 0 13.2 9.5 25.9 10.8 27.7 1.4 1.8 18.7 28.5 45.2 39.8 6.3 2.7 11.1 4.3 14.9 5.5 6.3 2 12 .2 16.5-3.1 5.1-3.8 7.9-9.7 9-12.1 1.1-2.4 1.1-4.5.7-5s-2.5-1.8-5.2-3.1z"
      />
    </svg>
  );
}

export function WhatsAppButton({
  phoneNumber = "+919876543210",
  message = "Hi! I'm interested in your beauty services. Can you help me with more information?",
}: WhatsAppButtonProps) {
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(
      /[^0-9]/g,
      ""
    )}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        delay: 0.6,
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className="fixed right-4 bottom-6 md:right-8 md:bottom-8 z-50 pr-[env(safe-area-inset-right)] pb-[env(safe-area-inset-bottom)]"
    >
      <motion.button
        onClick={handleWhatsAppClick}
        className="relative bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 group border-2 border-white/20"
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.96 }}
        aria-label="Contact us on WhatsApp"
      >
        <WhatsAppIcon className="w-6 h-6" />

        {/* Sparkle Animation */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-1 -right-1"
        >
          <Sparkles className="w-3 h-3 text-yellow-300" />
        </motion.div>

        {/* Pulse Ring */}
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.7, 0, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 rounded-full border-2 border-green-400"
        />

        {/* Tooltip */}
        <div className="hidden sm:block absolute right-full mr-4 top-1/2 transform -translate-y-1/2 bg-warm-brown text-cream text-sm px-4 py-2 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-lg border border-rose-gold/20">
          <span className="font-montserrat font-medium">
            Chat with us on WhatsApp
          </span>
          <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-warm-brown"></div>
        </div>
      </motion.button>
    </motion.div>
  );
}
