'use client';

import { motion } from 'framer-motion';

const galleryItems = [
  { id: 1, label: 'Interior', span: 'col-span-2' },
  { id: 2, label: 'Dish', span: 'col-span-1' },
  { id: 3, label: 'Coffee', span: 'col-span-1' },
  { id: 4, label: 'People', span: 'col-span-1' },
  { id: 5, label: 'Kitchen', span: 'col-span-1' },
  { id: 6, label: 'Dessert', span: 'col-span-2' },
];

export default function RestaurantGallery() {
  return (
    <section id="gallery" className="py-16 sm:py-24 bg-[#fdf6e3]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#3d2314] mb-4">
            Gallery
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${item.span} aspect-square md:aspect-auto md:h-64 rounded-xl overflow-hidden group relative`}
            >
              <div className="w-full h-full bg-gradient-to-br from-[#722f37]/20 via-[#b87333]/20 to-[#3d2314]/20 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                <span className="text-[#3d2314]/40 font-medium">
                  {item.label}
                </span>
              </div>
              <div className="absolute inset-0 bg-[#722f37]/0 group-hover:bg-[#722f37]/20 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
