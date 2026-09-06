import Link from "next/link";
import { FiX } from "react-icons/fi";

export default function Sidebar({
  setIsOpen,
  isOpen,
}: {
  setIsOpen: (val: boolean) => void,
  isOpen: boolean
}) {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-72 bg-[#0d1b1e] text-[#f4f1ea] shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col justify-between p-6 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      <div>
        {/* Top Sidebar Header with Close Icon */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
          <span className="font-serif text-sm tracking-widest text-[#c5a059] uppercase font-bold">
            Menu
          </span>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close Menu"
            className="text-2xl text-[#f4f1ea] hover:text-[#c5a059] transition"
          >
            <FiX />
          </button>
        </div>

        {/* Sidebar Nav Links */}
        <nav className="flex flex-col space-y-5 text-sm uppercase tracking-wider">
          <Link
            href="#about"
            onClick={() => setIsOpen(false)}
            className="hover:text-[#c5a059] transition-colors"
          >
            HOME
          </Link>
          <Link
            href="#services"
            onClick={() => setIsOpen(false)}
            className="hover:text-[#c5a059] transition-colors"
          >
            LISTINGS
          </Link>
          <Link
            href="#search"
            onClick={() => setIsOpen(false)}
            className="hover:text-[#c5a059] transition-colors"
          >
            LET{"'"}S MOVE
          </Link>
          <Link
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="hover:text-[#c5a059] transition-colors"
          >
            ABOUT US
          </Link>
        </nav>
      </div>

      {/* Sidebar Footer CTA */}
      <div className="pt-6 border-t border-white/10">
        <a
          href="#contact"
          onClick={() => setIsOpen(false)}
          className="block w-full text-center bg-[#c5a059] text-[#0d1b1e] px-5 py-3 rounded text-sm font-semibold uppercase tracking-wider hover:bg-[#b08d4b] transition-colors"
        >
          Get in Touch
        </a>
      </div>
    </div>
  );
}
