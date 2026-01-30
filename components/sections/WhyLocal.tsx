'use client';

import { motion } from 'framer-motion';
import { MapPin, BadgeDollarSign, MessageCircle, LucideIcon } from 'lucide-react';
import Card from '@/components/ui/Card';
import { WHY_LOCAL } from '@/lib/constants';

const iconMap: Record<string, LucideIcon> = {
  MapPin,
  BadgeDollarSign,
  MessageCircle,
};

export default function WhyLocal() {
  return (
    <section id="why-local" className="py-20 sm:py-28 bg-[#fffefa]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2d1f1a] mb-4">
            {WHY_LOCAL.sectionTitle}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {WHY_LOCAL.cards.map((card, index) => {
            const Icon = iconMap[card.icon];
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card variant="bordered" className="h-full">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-14 h-14 rounded-full bg-[#d4a574]/20 flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-[#4a3728]" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#2d1f1a] mb-3">
                      {card.title}
                    </h3>
                    <p className="text-[#4a3728] leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
