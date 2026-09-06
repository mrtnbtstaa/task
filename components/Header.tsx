'use client';
import { useState } from 'react';
import Link from "next/link";
import Image from 'next/image';
import { FiMenu, FiX } from 'react-icons/fi';
import Sidebar from './Sidebar';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId?: string) => {
    e.preventDefault();
    if (targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0d1b1e] text-[#f4f1ea] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link 
          href="#" 
          onClick={(e) => handleSmoothScroll(e)}
          className="inline-block relative cursor-pointer"
        >
          <div className="relative w-48 h-10">
            <Image
              src="/assets/brand_title.webp"
              alt="Marci Metzger"
              fill
              sizes="(max-width: 640px) 192px, 220px"
              priority
              className="object-contain"
            />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex space-x-8 text-sm uppercase tracking-wider">
          <a
            href="#"
            className="hover:text-[#c5a059] transition-colors whitespace-nowrap cursor-pointer"
          >
            HOME
          </a>
          <a
            href="#"
            className="hover:text-[#c5a059] transition-colors whitespace-nowrap cursor-pointer"
          >
            LISTINGS
          </a>
          <a
            href="#"
            className="hover:text-[#c5a059] transition-colors whitespace-nowrap cursor-pointer"
          >
            LET{"'"}S MOVE
          </a>
          <a
            href="#"
            className="hover:text-[#c5a059] transition-colors whitespace-nowrap cursor-pointer"
          >
            ABOUT US
          </a>
        </nav>

        {/* Desktop CTA & Mobile Hamburger Button */}
        <div className="flex items-center space-x-4">
          <a
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, 'contact')}
            className="hidden sm:inline-block whitespace-nowrap bg-[#c5a059] text-[#0d1b1e] px-5 py-2.5 rounded text-sm font-semibold uppercase tracking-wider hover:bg-[#b08d4b] transition-colors cursor-pointer"
          >
            Get in Touch
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            className="sm:hidden text-2xl text-[#f4f1ea] hover:text-[#c5a059] transition focus:outline-none"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-40 md:hidden transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Sidebar Panel */}
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
}