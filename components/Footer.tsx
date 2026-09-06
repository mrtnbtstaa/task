import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYelp } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0b0b0b] text-gray-400 py-16 border-t border-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Brand Logo Image */}
        <div className="mb-6 flex justify-center">
          <div className="relative w-48 h-12">
            <Image
              src="/assets/brand_title.webp"
              alt="Marci Metzger Homes"
              fill
              sizes="(max-width: 640px) 192px, 220px"
              className="object-contain text-white"
            />
          </div>
        </div>

        {/* Social Links Icons with next/link & react-icons */}
        <div className="flex justify-center items-center space-x-6 mb-10 text-gray-300 text-lg">
          <Link
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="hover:text-[#c5a059] transition"
          >
            <FaFacebookF />
          </Link>
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="hover:text-[#c5a059] transition"
          >
            <FaInstagram />
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hover:text-[#c5a059] transition"
          >
            <FaLinkedinIn />
          </Link>
          <Link
            href="https://yelp.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Yelp"
            className="hover:text-[#c5a059] transition"
          >
            <FaYelp />
          </Link>
        </div>

        {/* Divider Line */}
        <div className="w-full h-px bg-gray-800/80 mb-8" />

        {/* Copyright Notice */}
        <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-gray-500 font-medium">
          Copyright &copy; {currentYear} Marci Metzger - All Rights Reserved
        </p>

      </div>
    </footer>
  );
}