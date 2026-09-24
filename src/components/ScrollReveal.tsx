import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

type AnimationVariant =
  | 'fade-up'
  | 'fade-down'
  | 'fade-left'
  | 'fade-right'
  | 'fade-in'
  | 'zoom-in'
  | 'zoom-up';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  variant?: AnimationVariant;
  delay?: number;          // ms
  duration?: number;       // ms
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
  as?: React.ElementType;
}

const variantStyles: Record<AnimationVariant, { hidden: string; visible: string }> = {
  'fade-up': {
    hidden: 'opacity-0 translate-y-10',
    visible: 'opacity-100 translate-y-0',
  },
  'fade-down': {
    hidden: 'opacity-0 -translate-y-10',
    visible: 'opacity-100 translate-y-0',
  },
  'fade-left': {
    hidden: 'opacity-0 translate-x-12',
    visible: 'opacity-100 translate-x-0',
  },
  'fade-right': {
    hidden: 'opacity-0 -translate-x-12',
    visible: 'opacity-100 translate-x-0',
  },
  'fade-in': {
    hidden: 'opacity-0',
    visible: 'opacity-100',
  },
  'zoom-in': {
    hidden: 'opacity-0 scale-90',
    visible: 'opacity-100 scale-100',
  },
  'zoom-up': {
    hidden: 'opacity-0 scale-95 translate-y-6',
    visible: 'opacity-100 scale-100 translate-y-0',
  },
};

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  variant = 'fade-up',
  delay = 0,
  duration = 700,
  threshold = 0.12,
  rootMargin,
  once = true,
  as: Tag = 'div',
}) => {
  const { ref, isVisible } = useScrollReveal({ threshold, rootMargin, once });

  const { hidden, visible } = variantStyles[variant];

  return (
    <Tag
      ref={ref}
      className={`transition-all ease-out will-change-transform ${isVisible ? visible : hidden} ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: delay ? `${delay}ms` : undefined,
      }}
    >
      {children}
    </Tag>
  );
};

export default ScrollReveal;
