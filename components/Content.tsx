'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AboutRealtor from "./AboutRealtor";
import CallOrVisit from "./CallOrVisit";
import Hero from "./Hero";
import OfficeLocation from "./OfficeLocation";
import OurServices from "./OurServices";
import PhotoGallery from "./PhotoGallery";
import PropertySearch from "./PropertySearch";
import SoldGrid from "./SoldGrid";

gsap.registerPlugin(ScrollTrigger);

export default function Content() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = containerRef.current?.children;
      if (!sections) return;

      Array.from(sections).forEach((section, index) => {
        // Skip animating the Hero section immediately on load if desired
        if (index === 0) return;

        gsap.fromTo(
          section,
          { opacity: 0, y: 1 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="overflow-hidden">
      <Hero />
      <AboutRealtor />
      <SoldGrid />
      <PropertySearch />
      <PhotoGallery />
      <OurServices />
      <CallOrVisit />
      <OfficeLocation />
    </div>
  );
}