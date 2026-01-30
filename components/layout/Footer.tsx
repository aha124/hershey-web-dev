'use client';

import Link from 'next/link';
import { FOOTER_CONTENT, NAV_LINKS } from '@/lib/constants';

export default function Footer() {
  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-[#2d1f1a] text-[#fdf8f3]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">Anthony Arbaiza</h3>
            <p className="text-[#fdf8f3]/70 text-sm">
              {FOOTER_CONTENT.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-[#fdf8f3]/70 hover:text-[#d4a574] transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Portfolio Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Portfolio</h4>
            <ul className="space-y-2">
              {FOOTER_CONTENT.portfolioLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#fdf8f3]/70 hover:text-[#d4a574] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#fdf8f3]/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[#fdf8f3]/70 text-sm">
              &copy; {FOOTER_CONTENT.copyright}
            </p>
            <p className="text-[#fdf8f3]/50 text-sm text-center">
              {FOOTER_CONTENT.builtWith}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
