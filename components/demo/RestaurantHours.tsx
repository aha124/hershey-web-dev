'use client';

import { motion } from 'framer-motion';
import { MapPin, Clock, Phone } from 'lucide-react';
import { RESTAURANT_DEMO } from '@/lib/constants';

export default function RestaurantHours() {
  return (
    <section id="location" className="py-16 sm:py-20 bg-[#fdf6e3]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#3d2314] mb-2">
                Visit Us
              </h2>
              <p className="text-[#3d2314]/70">
                We&apos;d love to see you
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#b87333]/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#722f37]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#3d2314] mb-1">Address</h3>
                  <p className="text-[#3d2314]/70">{RESTAURANT_DEMO.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#b87333]/20 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-[#722f37]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#3d2314] mb-1">Hours</h3>
                  <p className="text-[#3d2314]/70">{RESTAURANT_DEMO.hours.weekday}</p>
                  <p className="text-[#3d2314]/70">{RESTAURANT_DEMO.hours.weekend}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#b87333]/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#722f37]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#3d2314] mb-1">Phone</h3>
                  <a
                    href={`tel:${RESTAURANT_DEMO.phone}`}
                    className="text-[#722f37] hover:text-[#b87333] transition-colors"
                  >
                    {RESTAURANT_DEMO.phone}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square sm:aspect-video lg:aspect-square rounded-xl overflow-hidden bg-[#3d2314]/10">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-[#3d2314]/30 mx-auto mb-3" />
                  <p className="text-[#3d2314]/50 font-medium">
                    Map would go here
                  </p>
                  <p className="text-[#3d2314]/40 text-sm mt-1">
                    (Google Maps integration)
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
