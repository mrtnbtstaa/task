import Image from 'next/image';

export default function SoldGrid() {
  return (
    <section id="services" className="py-20 bg-[#fbf9f5] text-[#1a1a1a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="uppercase tracking-[0.25em] text-xs text-[#c5a059] block mb-2 font-medium">
            Maximum Market Exposure
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-wide">
            GET IT SOLD
          </h2>
          <div className="flex items-center justify-center my-3">
            <div className="h-px w-16 bg-[#c5a059]/40"></div>
            <span className="mx-3 text-[#c5a059] text-xs">◈</span>
            <div className="h-px w-16 bg-[#c5a059]/40"></div>
          </div>
          <p className="text-gray-600 text-xs sm:text-sm tracking-wide max-w-xl mx-auto font-light">
            Delivering strategic marketing, high-touch negotiation, and seamless closings across Southern Nevada.
          </p>
        </div>

        <div className="space-y-20">
          
          {/* Row 1: Top Residential Sales */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative h-70 sm:h-87.5 rounded-lg overflow-hidden shadow-md">
              <Image
                src="/assets/residential_1.webp"
                alt="Luxury Kitchen Interior Listing"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="space-y-4">
              <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#8c733f] bg-[#f9f6ef] px-3 py-1 rounded border border-[#e6dcce] inline-block">
                Milestone Track Record
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold leading-tight">
                TOP RESIDENTIAL SALES LAST 5 YEARS
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-light">
                We helped nearly 90 clients in 2021, and closed 28.5 million in sales! Our team works hard everyday to grow and learn, so that we may continue to excel in our market. Our clients deserve our best, & we want to make sure our best is better every year.
              </p>
              <div className="flex items-center space-x-2 text-xs sm:text-sm font-semibold text-[#1a1a1a] pt-2">
                <span className="text-[#c5a059]">✔</span>
                <span>90+ SATISFIED FAMILIES IN A SINGLE YEAR</span>
              </div>
            </div>
          </div>

          {/* Row 2: Don't Just List It */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-4 order-2 md:order-1">
              <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#8c733f] bg-[#f9f6ef] px-3 py-1 rounded border border-[#e6dcce] inline-block">
                Targeted High-Return Exposure
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold leading-tight">
                DON&apos;T JUST LIST IT...
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-light">
                Get it SOLD! We exhaust every avenue to ensure our listings are at the fingertips of every possible buyer, getting you top dollar for your home.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-700 font-medium pt-2">
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-[#c5a059] rounded-full"></span>
                  <span>Professional Architectural Photography & Drone Tours</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-[#c5a059] rounded-full"></span>
                  <span>Multi-Channel MLS & Social Syndication</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-[#c5a059] rounded-full"></span>
                  <span>Tailored Staging and Open House Strategy</span>
                </li>
              </ul>
            </div>
            <div className="relative h-70 sm:h-87.5 rounded-lg overflow-hidden shadow-md order-1 md:order-2">
              <Image
                src="/assets/residential_2.webp"
                alt="Luxury Desert Estate with Pool"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Row 3: Guide to Buyers */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative h-70 sm:h-87.5 rounded-lg overflow-hidden shadow-md">
              <Image
                src="/assets/residential_3.webp"
                alt="Home Keys and Real Estate Consultation"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="space-y-4">
              <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#8c733f] bg-[#f9f6ef] px-3 py-1 rounded border border-[#e6dcce] inline-block">
                Buyer Representation
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold leading-tight">
                GUIDE TO BUYERS
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-light">
                Nobody knows the market like we do. Enjoy having a pro at your service. Market analysis, upgrades lists, contractors on speed dial, & more!
              </p>
              <div className="pt-3">
                <a
                  href="#contact"
                  className="inline-block bg-[#0d1b1e] text-[#f4f1ea] px-6 py-3 rounded text-xs sm:text-sm font-semibold uppercase tracking-wider hover:bg-[#14262b] transition-colors shadow-sm"
                >
                  Ask for a Buyer Consultation &rarr;
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}