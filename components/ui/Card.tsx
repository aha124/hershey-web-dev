'use client';

import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'highlighted' | 'bordered';
  hover?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', hover = true, children, ...props }, ref) => {
    const baseStyles = 'rounded-xl p-6 transition-all duration-300';

    const variants = {
      default: 'bg-[#fdf8f3] card-shadow',
      highlighted: 'bg-[#fdf8f3] border-2 border-[#d4a574] card-shadow',
      bordered: 'bg-[#fffefa] border border-[#4a3728]/20 card-shadow',
    };

    const hoverStyles = hover ? 'hover:card-shadow-hover hover:-translate-y-1' : '';

    return (
      <div
        ref={ref}
        className={cn(baseStyles, variants[variant], hoverStyles, className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export default Card;
