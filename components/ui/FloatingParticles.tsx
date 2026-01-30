"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  duration: number;
  delay: number;
  yRange: number;
  xRange: number;
}

interface FloatingParticlesProps {
  count?: number;
}

export function FloatingParticles({ count = 20 }: FloatingParticlesProps) {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    mediaQuery.addEventListener("change", handleChange);

    // Generate particles only on client side to avoid hydration mismatch
    const colors = [
      "rgba(212, 165, 116, 0.25)", // caramel
      "rgba(74, 55, 40, 0.18)",    // chocolate
      "rgba(212, 165, 116, 0.2)",  // caramel lighter
      "rgba(74, 55, 40, 0.12)",    // chocolate lighter
    ];

    const generated: Particle[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 8 + 4, // 4-12px
      color: colors[Math.floor(Math.random() * colors.length)],
      duration: Math.random() * 10 + 20, // 20-30 seconds
      delay: Math.random() * -20, // stagger start times (negative for immediate variety)
      yRange: 20 + Math.random() * 20, // 20-40px
      xRange: 10 + Math.random() * 15, // 10-25px
    }));

    setParticles(generated);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [count]);

  // Don't render if reduced motion or no particles yet
  if (prefersReducedMotion || particles.length === 0) {
    return null;
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full will-change-transform"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
          }}
          animate={{
            y: [0, -particle.yRange, 0, particle.yRange * 0.5, 0],
            x: [0, particle.xRange, 0, -particle.xRange * 0.5, 0],
            scale: [1, 1.1, 1, 0.95, 1],
            opacity: [1, 0.8, 1, 0.9, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  );
}

export default FloatingParticles;
