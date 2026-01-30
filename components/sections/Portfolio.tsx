'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink, Sparkles, Globe } from 'lucide-react';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { PORTFOLIO_PROJECTS } from '@/lib/constants';

function ProjectImage({ project }: { project: typeof PORTFOLIO_PROJECTS[number] }) {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return (
      <div className="w-full h-full bg-gradient-to-br from-[#4a3728]/10 to-[#d4a574]/20 flex items-center justify-center">
        <Globe className="w-12 h-12 text-[#4a3728]/20" />
      </div>
    );
  }

  return (
    <Image
      src={project.image}
      alt={`${project.title} website screenshot`}
      fill
      className="object-cover"
      sizes="(max-width: 1024px) 100vw, 33vw"
      onError={() => setImageError(true)}
    />
  );
}

export default function Portfolio() {
  return (
    <section id="work" className="py-20 sm:py-28 bg-[#fdf8f3]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2d1f1a] mb-4">
            Recent Work
          </h2>
          <p className="text-lg text-[#4a3728] max-w-2xl mx-auto">
            A few projects I&apos;ve built for local organizations and businesses.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {PORTFOLIO_PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card variant="default" className="h-full flex flex-col overflow-hidden">
                {/* Project image */}
                <div className="relative h-48 -mx-6 -mt-6 mb-6 overflow-hidden">
                  <ProjectImage project={project} />
                  {project.isDemo && (
                    <div className="absolute top-3 right-3 bg-[#fffefa]/90 rounded-full p-1.5">
                      <Sparkles className="w-4 h-4 text-[#d4a574]" />
                    </div>
                  )}
                </div>

                <div className="flex-1 flex flex-col">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="text-xl font-semibold text-[#2d1f1a]">
                      {project.title}
                    </h3>
                    <Badge variant="default">{project.badge}</Badge>
                  </div>

                  <p className="text-[#4a3728] mb-4 flex-1">
                    {project.description}
                  </p>

                  {project.note && (
                    <p className="text-sm text-[#4a3728]/70 italic mb-4">
                      {project.note}
                    </p>
                  )}

                  <Link
                    href={project.link}
                    target={project.isDemo ? undefined : '_blank'}
                    rel={project.isDemo ? undefined : 'noopener noreferrer'}
                    className="inline-flex items-center gap-2 text-[#4a3728] hover:text-[#d4a574] font-medium transition-colors group"
                  >
                    {project.isDemo ? 'View Demo' : 'Visit Site'}
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
