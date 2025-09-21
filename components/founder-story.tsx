"use client";

import { motion } from "framer-motion";

export function FounderStory() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-Professional ">
              <img
                src="/elegant-portrait-of-ishika--professional-beauty-sa.jpg"
                alt="Ishika - Founder of Etherealglow"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-rose rounded-full opacity-20" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-warm-brown mb-8">
              Meet Ishika
            </h2>
            <div className="space-y-6 font-inter text-lg text-warm-brown/80 leading-relaxed">
              <p>
                With over a decade of experience in the beauty industry, Ishika
                founded Etherealglow with a vision to create more than just a
                salon – a sanctuary where beauty, wellness, and artistry
                converge.
              </p>
              <p>
                Her journey began in prestigious beauty academies, where she
                mastered the art of nail design, skincare, and holistic beauty
                treatments. Today, she leads a team of passionate artists who
                share her commitment to excellence.
              </p>
              <p>
                "Beauty is not just about looking good – it's about feeling
                confident, radiant, and authentically yourself. That's what we
                create here at Etherealglow."
              </p>
            </div>

            {/* Signature */}
            <div className="mt-8">
              <div className="font-cormorant text-3xl text-dusty-rose italic">
                - Ishika
              </div>
              <div className="font-montserrat text-sm text-warm-brown/60 mt-1">
                Founder & Creative Director
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
