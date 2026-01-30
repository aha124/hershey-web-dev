'use client';

import { motion } from 'framer-motion';
import { RESTAURANT_DEMO } from '@/lib/constants';

export default function RestaurantMenu() {
  return (
    <section id="menu" className="py-16 sm:py-24 bg-[#3d2314]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#fdf6e3] mb-4">
            From Our Kitchen
          </h2>
          <p className="text-[#fdf6e3]/70">
            A taste of what we serve
          </p>
        </motion.div>

        <div className="space-y-8">
          {RESTAURANT_DEMO.menuItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-8 pb-8 border-b border-[#fdf6e3]/10 last:border-0"
            >
              <div className="flex-1">
                <div className="flex items-baseline gap-3">
                  <h3 className="text-xl font-semibold text-[#fdf6e3]">
                    {item.name}
                  </h3>
                  <div className="hidden sm:block flex-1 border-b border-dotted border-[#fdf6e3]/20" />
                </div>
                <p className="text-[#fdf6e3]/60 mt-2">
                  {item.description}
                </p>
              </div>
              <span className="text-[#b87333] font-semibold text-lg">
                {item.price}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-[#fdf6e3]/50 text-sm mt-12"
        >
          Full menu available in-house
        </motion.p>
      </div>
    </section>
  );
}
