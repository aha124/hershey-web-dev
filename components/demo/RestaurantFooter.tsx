'use client';

import { Instagram, Facebook } from 'lucide-react';
import { RESTAURANT_DEMO } from '@/lib/constants';

export default function RestaurantFooter() {
  return (
    <footer className="py-12 bg-[#3d2314]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-[#fdf6e3] mb-4">
              {RESTAURANT_DEMO.name}
            </h3>
            <p className="text-[#fdf6e3]/60 text-sm">
              {RESTAURANT_DEMO.tagline}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-[#fdf6e3] mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-[#fdf6e3]/60">
              <p>{RESTAURANT_DEMO.address}</p>
              <p>{RESTAURANT_DEMO.phone}</p>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold text-[#fdf6e3] mb-4">Hours</h4>
            <div className="space-y-2 text-sm text-[#fdf6e3]/60">
              <p>{RESTAURANT_DEMO.hours.weekday}</p>
              <p>{RESTAURANT_DEMO.hours.weekend}</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#fdf6e3]/10 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[#fdf6e3]/50 text-sm">
              &copy; 2025 {RESTAURANT_DEMO.name}
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="text-[#fdf6e3]/50 hover:text-[#b87333] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-[#fdf6e3]/50 hover:text-[#b87333] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
