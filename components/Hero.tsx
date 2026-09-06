import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-[85vh] min-h-125 flex items-center justify-center text-center overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/hero_img.webp" // Update this path to your exact uploaded image source if needed
          alt="Pahrump Nevada Landscape and Real Estate"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-[#f4f1ea]">
        <span className="uppercase tracking-[0.3em] text-xs sm:text-sm font-medium mb-3 block text-[#c5a059]">
          Pahrump Realtor
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-wide mb-6">
          Pahrump Realtor
        </h1>
        <p className="text-base sm:text-lg max-w-2xl mx-auto mb-8 font-light text-gray-200">
          Serving Pahrump, Las Vegas, and neighboring Nevada communities.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#search"
            className="bg-[#c5a059] text-[#0d1b1e] px-8 py-3.5 rounded font-medium uppercase tracking-wider hover:bg-[#b08d4b] transition-colors"
          >
            Search Properties
          </a>
          <a
            href="#contact"
            className="border border-[#f4f1ea] text-[#f4f1ea] px-8 py-3.5 rounded font-medium uppercase tracking-wider hover:bg-[#f4f1ea] hover:text-[#0d1b1e] transition-colors"
          >
            Book Consultation
          </a>
        </div>
      </div>
    </section>
  );
}