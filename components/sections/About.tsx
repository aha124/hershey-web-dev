'use client';

import { motion } from 'framer-motion';
import { ABOUT_CONTENT } from '@/lib/constants';

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#fdf8f3] grain-texture">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2d1f1a]">
            {ABOUT_CONTENT.sectionTitle}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* Photo placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex justify-center"
          >
            <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-full bg-gradient-to-br from-[#4a3728]/10 to-[#d4a574]/30 border-4 border-[#4a3728]/20 flex items-center justify-center">
              <span className="text-[#4a3728]/40 text-sm font-medium">
                Photo
              </span>
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 space-y-6"
          >
            {ABOUT_CONTENT.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-[#4a3728] text-lg leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
            <p className="text-[#2d1f1a] font-semibold text-lg pt-2">
              {ABOUT_CONTENT.signoff}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
