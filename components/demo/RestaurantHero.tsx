'use client';

import { motion } from 'framer-motion';
import { RESTAURANT_DEMO } from '@/lib/constants';

export default function RestaurantHero() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image placeholder */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#3d2314]/90 via-[#3d2314]/70 to-[#3d2314]/90">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0iIzNkMjMxNCIvPgo8Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxLjUiIGZpbGw9IiM1YTM1MjAiIG9wYWNpdHk9IjAuMyIvPgo8L3N2Zz4=')] opacity-50" />
      </div>

      {/* Decorative food images would go here */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-[#b87333]/10 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-[#722f37]/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center pt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-[#fdf6e3] mb-6 tracking-tight">
            {RESTAURANT_DEMO.name}
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-xl sm:text-2xl text-[#fdf6e3]/90 mb-10">
            {RESTAURANT_DEMO.tagline}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => scrollTo('menu')}
            className="px-8 py-4 bg-[#b87333] text-[#fdf6e3] font-semibold rounded-lg hover:bg-[#a06328] transition-colors"
          >
            View Menu
          </button>
          <button
            onClick={() => scrollTo('reservation')}
            className="px-8 py-4 border-2 border-[#fdf6e3] text-[#fdf6e3] font-semibold rounded-lg hover:bg-[#fdf6e3] hover:text-[#3d2314] transition-colors"
          >
            Make a Reservation
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-[#fdf6e3]/50 rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1.5 h-3 bg-[#fdf6e3]/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
