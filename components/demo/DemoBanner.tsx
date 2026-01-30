'use client';

import Link from 'next/link';
import { Sparkles, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function DemoBanner() {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="fixed top-0 left-0 right-0 z-[60] bg-[#d4a574] text-[#2d1f1a]"
    >
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex items-center justify-center gap-2 text-sm sm:text-base">
          <Sparkles className="w-4 h-4 hidden sm:block" />
          <span className="font-medium">
            This is a demo site built by Anthony Arbaiza.
          </span>
          <span className="hidden sm:inline">
            Want something like this for your business?
          </span>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-1 font-semibold hover:underline underline-offset-2"
          >
            Let&apos;s talk
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
