'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const galleryItems = [
  { id: 1, label: 'Our Interior', image: '/images/demo-interior.jpg', span: 'col-span-2' },
  { id: 2, label: 'Brunch Favorites', image: '/images/demo-food-brunch.jpg', span: 'col-span-1' },
  { id: 3, label: 'Fresh Coffee', image: '/images/demo-coffee.jpg', span: 'col-span-1' },
  { id: 4, label: 'Dinner Plate', image: '/images/demo-food-dinner.jpg', span: 'col-span-1' },
  { id: 5, label: 'Breakfast', image: '/images/demo-food-breakfast.jpg', span: 'col-span-1' },
  { id: 6, label: 'House Cookie', image: '/images/demo-food-cookie.jpg', span: 'col-span-2' },
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
              <Image
                src={item.image}
                alt={item.label}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              {/* Overlay with label */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#3d2314]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-[#fdf6e3] font-medium text-sm">
                  {item.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
