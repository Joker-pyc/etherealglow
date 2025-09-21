"use client";

import { motion } from "framer-motion";

const certifications = [
  {
    title: "International Beauty Therapy Certification",
    issuer: "CIDESCO",
    year: "2023",
  },
  {
    title: "Advanced Nail Art Specialist",
    issuer: "Nail Harmony Academy",
    year: "2022",
  },
  {
    title: "Organic Skincare Certification",
    issuer: "International Dermal Institute",
    year: "2023",
  },
  {
    title: "Hair Color & Styling Expert",
    issuer: "L'Oréal Professional",
    year: "2022",
  },
];

export function CertificationsSection() {
  return (
    <section className="py-20 bg-cream/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-warm-brown mb-6">
            Certifications & Training
          </h2>
          <p className="font-inter text-xl text-warm-brown/70 max-w-3xl mx-auto text-pretty">
            Our commitment to excellence is backed by continuous education and
            industry recognition
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-Professional  hover:shadow-Professional -hover transition-all duration-300"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-cormorant text-xl font-bold text-warm-brown mb-2">
                    {cert.title}
                  </h3>
                  <p className="font-montserrat text-dusty-rose font-medium mb-1">
                    {cert.issuer}
                  </p>
                  <p className="font-inter text-warm-brown/60 text-sm">
                    Certified {cert.year}
                  </p>
                </div>
                <div className="w-12 h-12 bg-gradient-rose rounded-full flex items-center justify-center ml-4">
                  <span className="font-montserrat text-white font-bold text-sm">
                    {cert.year}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
