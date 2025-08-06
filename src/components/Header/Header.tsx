"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { getHeaderData, HeaderLink } from "../../lib/builder-data";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [headerLinks, setHeaderLinks] = useState<HeaderLink[]>([]);
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    async function fetchHeaderData() {
      try {
        console.log("Fetching header data...");
        const links = await getHeaderData();
        console.log("Header data received:", links);
        setHeaderLinks(links);
      } catch (error) {
        console.error("Error fetching header data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchHeaderData();
  }, []);

  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            {mounted ? (
              <Link href="/" className="flex items-center">
                <span className="text-2xl font-bold text-gray-800">
                  <span className="text-gray-800">BIO-</span>
                  <span className="text-orange-500">H</span>
                  <span className="text-gray-800">-TIN</span>
                </span>
              </Link>
            ) : (
              <div className="flex items-center">
                <span className="text-2xl font-bold text-gray-800">
                  <span className="text-gray-800">BIO-</span>
                  <span className="text-orange-500">H</span>
                  <span className="text-gray-800">-TIN</span>
                </span>
              </div>
            )}
          </div>

          <nav className="hidden md:flex space-x-8">
            {mounted &&
              !loading &&
              headerLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.url}
                  className="text-gray-700 hover:text-orange-500 px-3 py-2 text-lg font-extrabold uppercase transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            {(!mounted || loading) && (
              <div className="animate-pulse bg-gray-200 h-4 w-32 rounded"></div>
            )}
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-orange-500 focus:outline-none focus:text-orange-500"
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

        {isMenuOpen && mounted && !loading && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-100">
              {headerLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.url}
                  className="text-gray-700 hover:text-orange-500 block px-3 py-2 text-base font-medium transition-colors duration-200"
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
