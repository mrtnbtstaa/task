'use client';
import Image from 'next/image';

const servicesData = [
  {
    id: 1,
    image: '/assets/services_1.webp',
    title: 'REAL ESTATE DONE RIGHT',
    description: "Nervous about your property adventure? Don't be. Whether you're getting ready to buy or sell your residence, looking at investment properties, or just curious about the markets, our team ensures you get the best experience possible!",
    linkText: 'LEARN MORE >',
    linkHref: '#learn-more',
  },
  {
    id: 2,
    image: '/assets/services_2.webp',
    title: 'COMMERCIAL & RESIDENTIAL',
    description: "Large or small, condo or mansion, we can find it and get at the price that's right. Fixer-uppers? Luxury? We can help with all of it! We live, work, and play in this community. Happy to help you find where to put your hard-earned dollars.",
    linkText: 'VIEW OPPORTUNITIES >',
    linkHref: '#search',
  },
  {
    id: 3,
    image: '/assets/services_3.webp',
    title: 'RELY ON EXPERTISE',
    description: "If you have questions about affordability, credit, and loan options, trust us to connect you with the right people to get the answers you need in a timely fashion. We make sure you feel confident and educated every step of the way.",
    linkText: 'MEET OUR LENDERS >',
    linkHref: '#lenders',
  },
];

export default function OurServices() {
  return (
    <section id="services" className="py-24 bg-[#fbf9f5] text-[#1a1a1a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="uppercase tracking-[0.25em] text-xs text-[#c5a059] block mb-2 font-medium">
            Comprehensive Real Estate Solutions
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-wide">
            OUR SERVICES
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm max-w-xl mx-auto mt-2">
            Guiding you with transparency, localized data, and unmatched personal dedication.
          </p>
        </div>

        {/* 3-Column Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="bg-white border border-gray-200/80 p-8 rounded-lg shadow-sm flex flex-col justify-between text-center transition-transform hover:-translate-y-1 duration-300"
            >
              <div>
                {/* Circular Image Container */}
                <div className="relative w-36 h-36 mx-auto mb-8 rounded-full overflow-hidden border-4 border-[#fbf9f5] shadow-md">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 25vw, (max-width: 1024px) 15vw, 10vw"
                  />
                </div>

                {/* Service Title */}
                <h3 className="font-serif text-xl font-bold tracking-wide text-[#1a1a1a] mb-4 min-h-[56px] flex items-center justify-center">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-8">
                  {service.description}
                </p>
              </div>

              {/* Action Link */}
              <div>
                <a
                  href={service.linkHref}
                  className="inline-block text-[11px] uppercase font-bold tracking-[0.2em] text-[#1a1a1a] hover:text-[#c5a059] transition-colors pb-1 border-b border-transparent hover:border-[#c5a059]"
                >
                  {service.linkText}
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}