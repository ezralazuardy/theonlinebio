"use client";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Shell } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`fixed w-full z-10 transition-all duration-300`}>
      <div
        className={`mx-auto pt-8 pb-3 lg:py-10 px-10 lg:px-20 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "backdrop-filter backdrop-blur-md animate-fadeIn" : ""
        }`}
        style={{
          animation: isMobileMenuOpen ? "fadeIn 0.3s ease-in-out" : "none",
        }}
      >
        <div className="flex justify-between items-start">
          {/* Logo Navigation */}
          <div className="flex flex-col">
            <Link
              href="/"
              className="flex space-x-1.5 text-lg font-semibold transition-opacity duration-500 hover:opacity-80"
            >
              <Shell className="size-4 mt-1.5" />
              <span>The Online Bio™</span>
            </Link>
            <span className="w-auto">
              <Link
                href="https://www.lazuardy.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs opacity-70 hover:underline"
              >
                by Lazuardy
              </Link>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="#"
                    className={`transition-colors opacity-60 ${pathname === "/showcase" ? "underline" : "hover:underline"}`}
                  >
                    Showcase
                  </Link>
                </TooltipTrigger>
                <TooltipContent className="bg-white text-black" side="bottom">
                  <p>Coming Soon!</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <Link
              href="/pricing"
              className={`transition-colors ${pathname === "/pricing" ? "underline" : "hover:underline"}`}
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              className={`transition-colors ${pathname === "/contact" ? "underline" : "hover:underline"}`}
            >
              Contact
            </Link>
            <Link
              href="/about"
              className={`transition-colors ${pathname === "/about" ? "underline" : "hover:underline"}`}
            >
              About
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="mt-1 md:hidden focus:outline-none cursor-pointer"
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
          <nav className="grid grid-cols-2 md:hidden mt-6 space-y-4">
            <div className="flex">
              <Link
                href="#"
                className={`block opacity-60 transition-colors ${pathname === "/showcase" ? "underline" : "hover:underline"}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Showcase
              </Link>
            </div>
            <div className="flex">
              <Link
                href="/pricing"
                className={`block transition-colors ${pathname === "/pricing" ? "underline" : "hover:underline"}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </Link>
            </div>
            <div className="flex">
              <Link
                href="/contact"
                className={`block transition-colors ${pathname === "/contact" ? "underline" : "hover:underline"}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
            <div className="flex">
              <Link
                href="/about"
                className={`block transition-colors ${pathname === "/about" ? "underline" : "hover:underline"}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
