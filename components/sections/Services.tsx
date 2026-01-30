'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { PRICING } from '@/lib/constants';

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-[#fffefa]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2d1f1a] mb-4">
            {PRICING.sectionTitle}
          </h2>
          <p className="text-lg text-[#4a3728] max-w-2xl mx-auto">
            {PRICING.sectionSubtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8">
          {PRICING.packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card
                variant={pkg.highlighted ? 'highlighted' : 'default'}
                hover={false}
                className="h-full flex flex-col relative"
              >
                {pkg.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge variant="accent">{pkg.badge}</Badge>
                  </div>
                )}

                <div className="text-center mb-6 pt-2">
                  <h3 className="text-xl font-semibold text-[#2d1f1a] mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-3xl sm:text-4xl font-bold text-[#4a3728]">
                    {pkg.price}
                  </p>
                </div>

                <ul className="space-y-3 mb-6 flex-1">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#d4a574] flex-shrink-0 mt-0.5" />
                      <span className="text-[#4a3728]">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-[#4a3728]/10">
                  <p className="text-sm text-[#4a3728]/70">
                    <span className="font-medium">Perfect for:</span> {pkg.perfectFor}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-[#4a3728]/70 text-sm"
        >
          {PRICING.footnote}
        </motion.p>
      </div>
    </section>
  );
}
