import { Sparkles } from "lucide-react"

export function ServicesHero() {
  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-br from-dusty-rose/30 to-warm-beige overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border border-rose-gold rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-rose-gold rounded-full"></div>
        <div className="absolute bottom-20 left-1/3 w-16 h-16 border border-rose-gold rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Tagline */}
        <div className="flex items-center justify-center mb-6">
          <Sparkles className="h-5 w-5 text-rose-gold mr-2" />
          <span className="font-cormorant text-lg text-warm-brown/80 tracking-wide">Luxury Beauty Services</span>
          <Sparkles className="h-5 w-5 text-rose-gold ml-2" />
        </div>

        {/* Main Heading */}
        <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold text-warm-brown mb-6 text-balance">
          Our Services
        </h1>

        {/* Subtitle */}
        <p className="font-montserrat text-xl md:text-2xl text-warm-brown/80 mb-8 max-w-3xl mx-auto leading-relaxed text-pretty">
          Discover our comprehensive range of luxury beauty treatments, each crafted to enhance your natural radiance
          and provide an unforgettable experience.
        </p>
      </div>
    </section>
  )
}
