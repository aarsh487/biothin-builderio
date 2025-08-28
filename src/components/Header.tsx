"use client";

import Link from "next/link";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getHeaderData, HeaderLink } from "../lib/builder-data";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { data: headerLinks = [], isLoading } = useQuery<HeaderLink[]>({
    queryKey: ["header-links"],
    queryFn: getHeaderData,
  });

  return (
    <header className="bg-white shadow-sm border-b border-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-medium">
                <span className="text-medium">BIO-</span>
                <span className="text-orange-color">H</span>
                <span className="text-medium">-TIN</span>
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {!isLoading ? (
              headerLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.url}
                  className="text-medium hover:text-orange-color px-3 py-2 text-lg font-extrabold uppercase transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))
            ) : (
              <div className="animate-pulse bg-light h-4 w-32 rounded"></div>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && !isLoading && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-light">
              {headerLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.url}
                  className="text-medium block px-3 py-2 text-base font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
