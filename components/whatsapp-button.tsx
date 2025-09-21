"use client";

import { motion } from "framer-motion";
import { MessageCircle, Sparkles } from "lucide-react";

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
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
        delay: 2,
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className="fixed bottom-6 right-6 z-50"
    >
      <motion.button
        onClick={handleWhatsAppClick}
        className="relative bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 group border-2 border-white/20"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />

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
        <div className="absolute right-full mr-4 top-1/2 transform -translate-y-1/2 bg-warm-brown text-cream text-sm px-4 py-2 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-lg border border-rose-gold/20">
          <span className="font-montserrat font-medium">
            Chat with us on WhatsApp
          </span>
          <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-warm-brown"></div>
        </div>
      </motion.button>
    </motion.div>
  );
}
