"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { getFooterData, FooterGroup } from "../../lib/builder-data";

export default function Footer() {
  const [footerLinks, setFooterLinks] = useState<FooterGroup[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFooterData() {
      try {
        const links = await getFooterData();
        setFooterLinks(links);
      } catch (error) {
        console.error("Error fetching footer data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchFooterData();
  }, []);

  if (loading) {
    return (
      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">P</span>
                </div>
                <div>
                  <div className="font-bold text-blue-800">Dr. Pfleger</div>
                  <div className="text-sm text-blue-600">ARZNEIMITTEL</div>
                </div>
              </div>
              <p className="text-gray-600 text-sm">Medizinisch fundiert</p>
            </div>
            <div className="animate-pulse bg-gray-200 h-4 w-32 rounded"></div>
            <div className="animate-pulse bg-gray-200 h-4 w-32 rounded"></div>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <div>
                <div className="font-bold text-blue-800">Dr. Pfleger</div>
                <div className="text-sm text-blue-600">ARZNEIMITTEL</div>
              </div>
            </div>
            <p className="text-gray-600 text-sm">Medizinisch fundiert</p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <svg
                className="w-5 h-5 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <h3 className="text-gray-800 font-semibold">Kontakt</h3>
            </div>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="space-y-4">
            {footerLinks.map((group, groupIndex) => (
              <div key={groupIndex} className="space-y-2">
                <h3 className="text-gray-800 font-semibold">
                  {group.groupTitle}
                </h3>
                <ul className="space-y-1">
                  {group.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.url}
                        className="text-blue-600 hover:text-blue-800 text-sm transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="text-sm text-gray-600 space-y-2">
            <p className="font-semibold">
              BIO-H-TIN® Vitamin H 2,5 mg /-5 mg Tabletten
            </p>
            <p>Wirkstoff: Biotin</p>
            <p className="text-xs">
              Anwendungsgebiete: -2.5 mg: Prophylaxe und Therapie von
              Biotin-Mangelzuständen. -5 mg: Prophylaxe und Therapie von
              Biotin-Mangelzuständen beim sehr seltenen Biotin-abhängigen,
              multiplen Carboxylasemangel.
            </p>
            <p className="text-xs">
              Zu Risiken und Nebenwirkungen lesen Sie die Packungsbeilage und
              fragen Sie Ihren Arzt oder Apotheker.
            </p>
            <p className="text-xs text-gray-500">(BHT/20190529/LW)</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
