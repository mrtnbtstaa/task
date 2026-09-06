"use client";
import { useState } from "react";
import Image from "next/image";

export default function PropertySearch() {
  const [location, setLocation] = useState("any");
  const [propertyType, setPropertyType] = useState("any");
  const [sortBy, setSortBy] = useState("newest");
  const [bedrooms, setBedrooms] = useState("any");
  const [baths, setBaths] = useState("any");
  const [minPrice, setMinPrice] = useState("any");
  const [maxPrice, setMaxPrice] = useState("any");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `Searching listings with: Location=${location}, Type=${propertyType}, Sort=${sortBy}, Beds=${bedrooms}, Baths=${baths}, Min=${minPrice}, Max=${maxPrice}`,
    );
  };

  return (
    <section id="search" className="relative py-24 text-white overflow-hidden">
      {/* Background Image using next/image */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/assets/dream_home_img.webp"
          alt="Nevada Property Landscape"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65 -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <span className="uppercase tracking-[0.25em] text-xs text-[#c5a059] block mb-2 font-medium">
            Find Your Next Nevada Property
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-wide">
            FIND YOUR DREAM HOME
          </h2>
        </div>

        {/* Search Card Container */}
        <div className="bg-[#fbf9f5] text-[#1a1a1a] p-6 sm:p-10 rounded-lg shadow-2xl border border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-gray-200 pb-4 mb-6">
            <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-wide text-[#1a1a1a]">
              SEARCH LISTINGS
            </h3>
            <span className="text-[11px] uppercase tracking-widest text-gray-500 font-semibold mt-1 sm:mt-0">
              Real-Time Nevada MLS Access
            </span>
          </div>

          <form onSubmit={handleSearch} className="space-y-4">
            {/* Row 1 Filters */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-[10px] uppercase font-bold tracking-widest mb-1.5 text-gray-600">
                  Location
                </label>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full border border-gray-300 rounded p-2.5 text-xs sm:text-sm bg-white focus:outline-none focus:border-[#c5a059]"
                >
                  <option value="any">Any (All Pahrump &amp; Valley)</option>
                  <option value="pahrump">Pahrump</option>
                  <option value="las-vegas">Las Vegas</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] uppercase font-bold tracking-widest mb-1.5 text-gray-600">
                  Type
                </label>
                <select
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full border border-gray-300 rounded p-2.5 text-xs sm:text-sm bg-white focus:outline-none focus:border-[#c5a059]"
                >
                  <option value="any">Any Property Type</option>
                  <option value="single-family">Single Family Home</option>
                  <option value="luxury">Luxury Estate</option>
                  <option value="land">Land / Lot</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] uppercase font-bold tracking-widest mb-1.5 text-gray-600">
                  Sort By
                </label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full border border-gray-300 rounded p-2.5 text-xs sm:text-sm bg-white focus:outline-none focus:border-[#c5a059]"
                >
                  <option value="newest">Newest First</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>

            {/* Row 2 Filters */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-[10px] uppercase font-bold tracking-widest mb-1.5 text-gray-600">
                  Bedrooms
                </label>
                <select
                  value={bedrooms}
                  onChange={(e) => setBedrooms(e.target.value)}
                  className="w-full border border-gray-300 rounded p-2.5 text-xs sm:text-sm bg-white focus:outline-none focus:border-[#c5a059]"
                >
                  <option value="any">Any Number</option>
                  <option value="1">1+ Bedrooms</option>
                  <option value="2">2+ Bedrooms</option>
                  <option value="3">3+ Bedrooms</option>
                  <option value="4">4+ Bedrooms</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] uppercase font-bold tracking-widest mb-1.5 text-gray-600">
                  Baths
                </label>
                <select
                  value={baths}
                  onChange={(e) => setBaths(e.target.value)}
                  className="w-full border border-gray-300 rounded p-2.5 text-xs sm:text-sm bg-white focus:outline-none focus:border-[#c5a059]"
                >
                  <option value="any">Any Number</option>
                  <option value="1">1+ Baths</option>
                  <option value="2">2+ Baths</option>
                  <option value="3">3+ Baths</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] uppercase font-bold tracking-widest mb-1.5 text-gray-600">
                  Min Price
                </label>
                <input
                  type="text"
                  placeholder="$ Any"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  className="w-full border border-gray-300 rounded p-2.5 text-xs sm:text-sm bg-white focus:outline-none focus:border-[#c5a059]"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase font-bold tracking-widest mb-1.5 text-gray-600">
                  Max Price
                </label>
                <input
                  type="text"
                  placeholder="$ Any"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  className="w-full border border-gray-300 rounded p-2.5 text-xs sm:text-sm bg-white focus:outline-none focus:border-[#c5a059]"
                />
              </div>
            </div>

            {/* Search Button */}
            <div className="pt-4 flex justify-end">
              <button
                type="submit"
                className="bg-[#d5cdc1] text-[#1a1a1a] px-8 py-3 rounded text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-[#c5bcad] transition-colors shadow-sm"
              >
                Search Now
              </button>
            </div>
          </form>
        </div>

        {/* Footer Trust Badges using next/image */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-center text-center text-xs tracking-wider uppercase text-gray-300 opacity-90">
          <div className="flex items-center justify-center space-x-2">
            <div className="relative w-6 h-6">
              <Image
                src="/assets/ridge.webp"
                alt="The Ridge Realty Group"
                fill
                sizes="(max-width: 640px) 192px, 220px"
                className="object-contain"
              />
            </div>
            <span>The Ridge Realty Group</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <div className="relative w-6 h-6">
              <Image
                src="/assets/equal_housing.webp"
                alt="Equal Housing Opportunity"
                fill
                sizes="(max-width: 640px) 192px, 220px"
                className="object-contain"
              />
            </div>
            <span>Equal Housing Opportunity</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <div className="relative w-6 h-6">
              <Image
                src="/assets/realtor.webp"
                alt="Realtor Member"
                fill
                sizes="(max-width: 640px) 192px, 220px"
                className="object-contain"
              />
            </div>
            <span>Realtor® Member</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <div className="relative w-6 h-6">
              <Image
                src="/assets/valley.webp"
                alt="Pahrump Valley Board"
                fill
                sizes="(max-width: 640px) 192px, 220px"
                className="object-contain"
              />
            </div>
            <span>Pahrump Valley Board</span>
          </div>
        </div>
      </div>
    </section>
  );
}
