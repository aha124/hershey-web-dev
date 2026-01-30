'use client';

import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { RESTAURANT_DEMO } from '@/lib/constants';

export default function RestaurantCTA() {
  return (
    <section id="reservation" className="py-16 sm:py-24 bg-[#722f37]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#fdf6e3] mb-4">
            {RESTAURANT_DEMO.cta.title}
          </h2>
          <p className="text-xl text-[#fdf6e3]/80 mb-8">
            {RESTAURANT_DEMO.cta.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href={`tel:${RESTAURANT_DEMO.phone}`}
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#fdf6e3] text-[#722f37] font-semibold rounded-lg hover:bg-[#b87333] hover:text-[#fdf6e3] transition-colors"
            >
              <Phone className="w-5 h-5" />
              {RESTAURANT_DEMO.phone}
            </a>
            <span className="text-[#fdf6e3]/60">
              to reserve a table
            </span>
          </div>

          <p className="mt-8 text-[#fdf6e3]/50 text-sm">
            Walk-ins always welcome
          </p>
        </motion.div>
      </div>
    </section>
  );
}
