"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight, FiSquare } from "react-icons/fi";

const galleryItems = [
  {
    id: 1,
    image: "/assets/gallery_1.webp",
    category: "INTERIOR ARCHITECTURE",
    title: "Designer Interior Living",
    description:
      "Open-concept luxury with high ceilings, artisanal finishes, and serene desert light.",
  },
  {
    id: 2,
    image: "/assets/gallery_2.webp",
    category: "EXTERIOR & LANDSCAPING",
    title: "Custom Desert Estate",
    description:
      "Seamless indoor-outdoor living framed by panoramic mountain backdrops.",
  },
  {
    id: 3,
    image: "/assets/gallery_3.webp",
    category: "GOLF COURSE VIEWS",
    title: "Fairway Panorama",
    description:
      "Direct views overlooking pristine championship greens and wide-open skies.",
  },
  {
    id: 4,
    image: "/assets/gallery_4.webp",
    category: "ARCHITECTURAL DETAILS",
    title: "Modern Custom Finishes",
    description:
      "Handcrafted woodwork, natural stone, and state-of-the-art smart home integration.",
  },
  {
    id: 5,
    image: "/assets/gallery_5.webp",
    category: "OUTDOOR LIVING",
    title: "Sunset Patio & Pool",
    description:
      "Resort-style poolside lounging designed for ultimate relaxation and evening entertainment.",
  },
  {
    id: 6,
    image: "/assets/gallery_6.webp",
    category: "KITCHEN & DINING",
    title: "Culinary Masterpiece",
    description:
      "Chef-grade appliances, waterfall quartz islands, and custom European cabinetry.",
  },
  {
    id: 7,
    image: "/assets/gallery_7.webp",
    category: "PRIMARY SUITE",
    title: "Private Desert Sanctuary",
    description:
      "Expansive master quarters featuring private terrace access and spa-inspired bath ensuite.",
  },
];

export default function PhotoGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === galleryItems.length - 1 ? 0 : prev + 1,
      );
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const nextSlide = () =>
    setCurrentIndex((prev) =>
      prev === galleryItems.length - 1 ? 0 : prev + 1,
    );
  const prevSlide = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? galleryItems.length - 1 : prev - 1,
    );

  const currentItem = galleryItems[currentIndex];

  return (
    <section id="gallery" className="py-24 bg-[#121212] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <span className="uppercase tracking-[0.25em] text-xs text-[#c5a059] block mb-2 font-medium">
            Visual Portfolio
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-wide">
            PHOTO GALLERY
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm max-w-xl mx-auto mt-2">
            Explore our premier desert golf estates, custom ranches, and scenic
            community enclaves.
          </p>
        </div>

        {/* Main Gallery Frame */}
        <div
          className="relative bg-black rounded-lg overflow-hidden shadow-2xl border border-gray-800"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main Image Container */}
          <div className="relative h-95 sm:h-130 w-full">
            <Image
              src={currentItem.image}
              alt={currentItem.title}
              fill
              priority
              sizes="(max-width: 640px) 192px, 220px"
              className="object-cover transition-all duration-700"
            />

            {/* Gradient Overlay for Readability */}
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

            {/* Counter Top Right */}
            <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded text-xs tracking-widest text-gray-300 border border-white/10">
              {currentIndex + 1} / {galleryItems.length}
            </div>

            {/* Left/Right Navigation Arrows */}
            <button
              onClick={prevSlide}
              aria-label="Previous Slide"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black text-white p-3 rounded-full transition border border-white/10 z-20 flex items-center justify-center"
            >
              <FiChevronLeft className="text-lg" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next Slide"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black text-white p-3 rounded-full transition border border-white/10 z-20 flex items-center justify-center"
            >
              <FiChevronRight className="text-lg" />
            </button>

            {/* Content Overlay Bottom Left */}
            <div className="absolute bottom-12 left-6 sm:left-10 right-6 z-10">
              <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#c5a059] block mb-1">
                {currentItem.category}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-1 text-white">
                {currentItem.title}
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm max-w-lg">
                {currentItem.description}
              </p>
            </div>

            {/* Bottom Status bar inside image frame */}
            <div className="absolute bottom-3 left-6 right-6 flex justify-between items-center text-[10px] uppercase tracking-wider text-gray-400 z-10 border-t border-white/10 pt-2">
              <span className="flex items-center gap-1.5">
                <FiSquare className="text-[9px]" />
                {isPaused
                  ? "AUTO-PLAYING (PAUSED)"
                  : "AUTO-PLAYING (HOVER TO PAUSE)"}
              </span>
              <div className="space-x-4">
                <button
                  onClick={prevSlide}
                  className="hover:text-white transition"
                >
                  &laquo; PREV
                </button>
                <button
                  onClick={nextSlide}
                  className="hover:text-white transition"
                >
                  NEXT &raquo;
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnail Navigation Strip (Adjusted to grid-cols-7 for 7 items) */}
        <div className="mt-6 grid grid-cols-4 sm:grid-cols-7 gap-2">
          {galleryItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setCurrentIndex(index)}
              className={`relative h-16 sm:h-20 rounded-md overflow-hidden border-2 transition-all ${
                currentIndex === index
                  ? "border-[#c5a059] opacity-100 scale-[1.02]"
                  : "border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 25vw, (max-width: 1024px) 15vw, 10vw"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}