'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import Button from '@/components/ui/Button';
import { FloatingParticles } from '@/components/ui/FloatingParticles';
import { HERO_CONTENT } from '@/lib/constants';

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check mobile
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Check reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handleMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    mediaQuery.addEventListener('change', handleMotionChange);

    return () => {
      window.removeEventListener('resize', checkMobile);
      mediaQuery.removeEventListener('change', handleMotionChange);
    };
  }, []);

  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Particle count based on device
  const particleCount = isMobile ? 12 : 20;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Layer 1: Base Gradient */}
      <div
        className="absolute inset-0 -z-30"
        style={{
          background: 'linear-gradient(135deg, #fdf8f3 0%, #f5ebe0 50%, #fdf8f3 100%)',
        }}
      />

      {/* Layer 2: Soft Abstract Blobs */}
      <div className="absolute inset-0 -z-20 overflow-hidden pointer-events-none">
        {/* Top-right blob */}
        <div
          className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 rounded-full blur-3xl"
          style={{ backgroundColor: 'rgba(212, 165, 116, 0.15)' }}
        />
        {/* Bottom-left blob */}
        <div
          className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 rounded-full blur-3xl"
          style={{ backgroundColor: 'rgba(74, 55, 40, 0.08)' }}
        />
        {/* Center subtle blob */}
        <div
          className="absolute top-1/3 left-1/4 w-1/3 h-1/3 rounded-full blur-3xl"
          style={{ backgroundColor: 'rgba(212, 165, 116, 0.1)' }}
        />
      </div>

      {/* Layer 3: Animated Floating Particles */}
      <div className="-z-10">
        <FloatingParticles count={particleCount} />
      </div>

      {/* Layer 4: Grain/Noise Texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03] -z-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Layer 5: Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        {/* Subtle backdrop for better text readability on mobile */}
        <div className="absolute inset-0 -mx-4 sm:-mx-6 lg:-mx-8 bg-gradient-to-b from-transparent via-[#fdf8f3]/40 to-transparent pointer-events-none md:hidden" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#2d1f1a] mb-6 leading-tight drop-shadow-sm">
            {HERO_CONTENT.headline}
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <p className="text-lg sm:text-xl text-[#4a3728] mb-10 max-w-2xl mx-auto leading-relaxed">
            {HERO_CONTENT.subheadline}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 relative"
        >
          <Button
            variant="primary"
            size="lg"
            onClick={() => handleScroll('#work')}
          >
            {HERO_CONTENT.ctaPrimary}
          </Button>
          <button
            onClick={() => handleScroll('#contact')}
            className="text-[#4a3728] hover:text-[#2d1f1a] font-medium underline underline-offset-4 transition-colors"
          >
            {HERO_CONTENT.ctaSecondary}
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.button
            onClick={() => handleScroll('#why-local')}
            className="text-[#4a3728]/50 hover:text-[#4a3728] transition-colors"
            animate={prefersReducedMotion ? {} : { y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            aria-label="Scroll to next section"
          >
            <ArrowDown className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
