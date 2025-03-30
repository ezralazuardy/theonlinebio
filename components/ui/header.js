"use client";

import { Shell } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`fixed w-full z-10 transition-all duration-300`}>
      <div className="mx-auto py-10 px-20">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <Link
              href="/"
              className="flex space-x-1.5 text-lg font-semibold transition-opacity duration-500 hover:opacity-80"
            >
              <Shell className="size-4 mt-1.5" />
              <span>The Online Bio™</span>
            </Link>
            <Link
              href="https://www.lazuardy.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs opacity-70 mt-0.5 hover:underline"
            >
              by Lazuardy
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10">
            <Link href="/pricing" className="hover:underline transition-colors">
              Pricing
            </Link>
            <Link href="/about" className="hover:underline transition-colors">
              About
            </Link>
            <Link href="/contact" className="hover:underline transition-colors">
              Contact
            </Link>
            <Link href="/faq" className="hover:underline transition-colors">
              FAQ
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none cursor-pointer"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 space-y-4">
            <Link
              href="/pricing"
              className="block hover:underline transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/about"
              className="block hover:underline transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block hover:underline transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
