"use client";

import { useState } from "react";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { getNavigationData } from "../lib/builder-data";

interface NavLink {
  label: string;
  url?: string;
  type?: "link" | "dropdown";
  children?: NavLink[];
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { data, isLoading } = useQuery({
    queryKey: ["navigation"],
    queryFn: getNavigationData,
  });

  const headerLinks: NavLink[] = data?.headerLinks || [];
  const hamburgerLinks: NavLink[] = data?.hamburger || [];

  return (
    <header className="bg-white shadow-sm border-b border-light relative z-50">
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
          <nav className="hidden md:flex items-center space-x-8">
            {!isLoading ? (
              <>
                {headerLinks.map((link, idx) =>
                  link.type === "dropdown" && link.children ? (
                    <div key={idx} className="relative group">
                      <button className="text-medium hover:text-orange-color px-3 py-2 text-lg font-extrabold uppercase">
                        {link.label}
                      </button>
                      {/* Dropdown */}
                      <div className="absolute left-0 hidden group-hover:grid grid-cols-2 gap-2 bg-white shadow-lg rounded-md mt-2 p-3 min-w-[400px] border border-gray-200 z-50">
                        {link.children.map((child, cIdx) => (
                          <Link
                            key={cIdx}
                            href={child.url || "#"}
                            className="block px-3 py-2 text-medium hover:bg-light hover:text-orange-color transition-colors rounded-md"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={idx}
                      href={link.url || "#"}
                      className="text-medium hover:text-orange-color px-3 py-2 text-lg font-extrabold uppercase transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  )
                )}

                {/* Desktop Hamburger Section */}
                {hamburgerLinks.length > 0 && (
                  <div className="relative group">
                    <button className="text-medium hover:text-orange-color px-3 py-2 text-lg font-extrabold uppercase">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        {isMenuOpen ? (
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
                    <div className="absolute right-0 hidden group-hover:flex flex-col bg-white shadow-lg rounded-md mt-2 p-3 min-w-[200px] border border-gray-200 z-50">
                      {hamburgerLinks.map((extra, idx) => (
                        <Link
                          key={idx}
                          href={extra.url || "#"}
                          className="px-3 py-2 text-medium hover:bg-light hover:text-orange-color transition-colors rounded-md"
                        >
                          {extra.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </>
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
                {isMenuOpen ? (
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
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && !isLoading && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-light">
              {headerLinks.map((link, idx) =>
                link.type === "dropdown" && link.children ? (
                  <div key={idx}>
                    <p className="text-medium font-bold uppercase px-3 py-2">
                      {link.label}
                    </p>
                    <div className="ml-4">
                      {link.children.map((child, cIdx) => (
                        <Link
                          key={cIdx}
                          href={child.url || "#"}
                          className="block px-3 py-2 text-base text-medium hover:text-orange-color transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={idx}
                    href={link.url || "#"}
                    className="block px-3 py-2 text-base text-medium hover:text-orange-color transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              )}

              {/* Mobile Hamburger Links */}
              {hamburgerLinks.length > 0 && (
                <div className="mt-4 border-t border-light pt-2">
                  {hamburgerLinks.map((extra, idx) => (
                    <Link
                      key={idx}
                      href={extra.url || "#"}
                      className="block px-3 py-2 text-base text-medium hover:text-orange-color transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {extra.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
