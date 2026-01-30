'use client';

import { useMemo, useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import Button from '@/components/ui/Button';
import { HERO_CONTENT } from '@/lib/constants';

// Generate particle configurations
function generateParticles(count: number) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100, // percentage position
    y: Math.random() * 100,
    size: 4 + Math.random() * 8, // 4-12px
    color: Math.random() > 0.5 ? 'caramel' : 'chocolate',
    duration: 20 + Math.random() * 15, // 20-35 seconds
    delay: Math.random() * 5,
    yRange: 20 + Math.random() * 20, // 20-40px float range
    xRange: 5 + Math.random() * 10, // 5-15px horizontal drift
  }));
}

// Floating particle component
function FloatingParticle({
  particle,
  reducedMotion,
}: {
  particle: ReturnType<typeof generateParticles>[number];
  reducedMotion: boolean;
}) {
  const colorClass =
    particle.color === 'caramel'
      ? 'bg-[#d4a574]/20'
      : 'bg-[#4a3728]/15';

  if (reducedMotion) {
    return (
      <div
        className={`absolute rounded-full ${colorClass}`}
        style={{
          left: `${particle.x}%`,
          top: `${particle.y}%`,
          width: particle.size,
          height: particle.size,
        }}
      />
    );
  }

  return (
    <motion.div
      className={`absolute rounded-full ${colorClass} will-change-transform`}
      style={{
        left: `${particle.x}%`,
        top: `${particle.y}%`,
        width: particle.size,
        height: particle.size,
      }}
      animate={{
        y: [0, -particle.yRange, 0],
        x: [0, particle.xRange, 0],
      }}
      transition={{
        duration: particle.duration,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: particle.delay,
      }}
    />
  );
}

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Generate particles - fewer on mobile
  const particles = useMemo(() => {
    const count = isMobile ? 10 : 18;
    return generateParticles(count);
  }, [isMobile]);

  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-10"
        style={{ filter: 'brightness(1.1) opacity(0.3)' }}
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Warm overlay to tint the video */}
      <div
        className="absolute inset-0 -z-5"
        style={{ backgroundColor: 'rgba(253, 248, 243, 0.85)' }}
      />

      {/* Layer 1: Base Gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #fdf8f3 0%, #f5ebe0 100%)',
        }}
      />

      {/* Layer 2: Soft Abstract Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top-right blob */}
        <div
          className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full blur-[100px]"
          style={{ background: 'rgba(212, 165, 116, 0.12)' }}
        />
        {/* Bottom-left blob */}
        <div
          className="absolute -bottom-32 -left-32 w-[600px] h-[600px] rounded-full blur-[120px]"
          style={{ background: 'rgba(74, 55, 40, 0.07)' }}
        />
        {/* Center-left subtle blob */}
        <div
          className="absolute top-1/3 left-1/4 w-[300px] h-[300px] rounded-full blur-[80px]"
          style={{ background: 'rgba(212, 165, 116, 0.08)' }}
        />
      </div>

      {/* Layer 3: Animated Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <FloatingParticle
            key={particle.id}
            particle={particle}
            reducedMotion={prefersReducedMotion || false}
          />
        ))}
      </div>

      {/* Layer 4: Grain/Noise Texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Layer 5: Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        {/* Subtle backdrop for better text readability on mobile */}
        <div className="absolute inset-0 -mx-4 sm:-mx-6 lg:-mx-8 bg-gradient-to-b from-transparent via-[#fdf8f3]/30 to-transparent pointer-events-none md:hidden" />

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
