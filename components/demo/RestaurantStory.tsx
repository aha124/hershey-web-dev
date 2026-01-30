'use client';

import { motion } from 'framer-motion';
import { RESTAURANT_DEMO } from '@/lib/constants';

export default function RestaurantStory() {
  return (
    <section id="story" className="py-16 sm:py-24 bg-[#fdf6e3]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br from-[#722f37]/10 via-[#b87333]/10 to-[#3d2314]/20 flex items-center justify-center">
              <span className="text-[#3d2314]/40 font-medium">
                Owner Photo
              </span>
            </div>
          </motion.div>

          {/* Story content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#3d2314] mb-6">
              Our Story
            </h2>
            <p className="text-[#3d2314]/80 text-lg leading-relaxed">
              {RESTAURANT_DEMO.story}
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-[#b87333]/20 flex items-center justify-center">
                <span className="text-[#3d2314]/40 text-xs">Photo</span>
              </div>
              <div>
                <p className="font-semibold text-[#3d2314]">The Owners</p>
                <p className="text-[#3d2314]/60 text-sm">Founders, The Cocoa Table</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
