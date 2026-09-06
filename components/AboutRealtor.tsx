import Image from 'next/image';

export default function AboutRealtor() {
  return (
    <section id="about" className="py-20 bg-[#fbf9f5] text-[#1a1a1a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-[#c5a059] font-medium block mb-2">
            Personalized Real Estate Service
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-wide text-[#1a1a1a]">
            MARCI METZGER
          </h2>
          <div className="flex items-center justify-center my-3">
            <div className="h-px w-16 bg-[#c5a059]/40"></div>
            <span className="mx-3 text-[#c5a059] text-xs">◈</span>
            <div className="h-px w-16 bg-[#c5a059]/40"></div>
          </div>
          <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-gray-700 font-medium">
            Realtor For Nearly 3 Decades
          </p>
        </div>

        {/* Main Card Container */}
        <div className="bg-white p-6 sm:p-12 shadow-md rounded-xl grid grid-cols-1 md:grid-cols-12 gap-8 items-center border border-gray-100">
          
          {/* Left Side: Profile Card Box with Background */}
          <div className="md:col-span-5 relative rounded-lg overflow-hidden flex flex-col items-center justify-center p-8 bg-linear-to-b from-[#3a3a3a] to-[#1c1c1c] text-white text-center shadow-inner min-h-[380px]">
            {/* Background Image / Texture if desired behind gradient overlay */}
            <div className="absolute inset-0 opacity-20">
              <Image
                src="/assets/marci_metzger.webp"
                alt="Background Scenery"
                fill
                sizes="(max-width: 640px) 25vw, (max-width: 1024px) 15vw, 10vw"
                className="object-cover"
              />
            </div>

            {/* Circular Profile Image */}
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-[#c5a059] shadow-xl z-10 mb-6">
              <Image
                src="/assets/marci_metzger.webp"
                alt="Marci Metzger"
                fill
                sizes="(max-width: 640px) 25vw, (max-width: 1024px) 15vw, 10vw"
                className="object-cover"
              />
            </div>

            {/* Phone Number Display */}
            <div className="relative z-10 font-bold tracking-wider text-[#f4f1ea] text-xl sm:text-2xl drop-shadow-md">
              206-919-6886
            </div>
          </div>

          {/* Right Side: Copy & Stats */}
          <div className="md:col-span-7 space-y-6">
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold leading-snug text-[#1a1a1a]">
                A Proven Record of Integrity, Passion & Record-Breaking Results
              </h3>
            </div>

            <p className="text-gray-600 leading-relaxed text-sm sm:text-base font-light">
              With almost thirty years of dedicated real estate leadership, Marci Metzger and The Ridge Realty Group provide unmatched insider familiarity with the Pahrump Valley, custom desert golf estates, ranches, and residential communities.
            </p>

            <p className="text-gray-600 leading-relaxed text-sm sm:text-base font-light">
              Whether positioning your property for top market value or securing your idyllic desert sanctuary, Marci pairs personalized white-glove attention with modern aggressive marketing strategies.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
              <div className="flex items-center space-x-3">
                <div>
                  <div className="font-bold text-sm sm:text-base text-[#1a1a1a]">28+ YEARS</div>
                  <div className="text-[11px] text-gray-500 uppercase tracking-wide">Real Estate Practice</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div>
                  <div className="font-bold text-sm sm:text-base text-[#1a1a1a]">$28.5M+</div>
                  <div className="text-[11px] text-gray-500 uppercase tracking-wide">Sales Record Volume</div>
                </div>
              </div>
            </div>

            {/* Connect Action Link */}
            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#0d1b1e] hover:text-[#c5a059] transition-colors"
              >
                Connect With Marci <span className="ml-2">→</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}