import React from 'react';

interface LongTailArrowProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  strokeWidth?: number;
}

export const LongTailArrowRight: React.FC<LongTailArrowProps> = ({
  className = 'w-6 h-3',
  strokeWidth = 1,
  ...props
}) => (
  <svg
    viewBox="0 0 28 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`shrink-0 ${className}`}
    aria-hidden="true"
    {...props}
  >
    <line x1="1" y1="6" x2="26" y2="6" />
    <polyline points="19.5 2 26 6 19.5 10" />
  </svg>
);

export const LongTailArrowUp: React.FC<LongTailArrowProps> = ({
  className = 'w-3 h-7',
  strokeWidth = 1,
  ...props
}) => (
  <svg
    viewBox="0 0 12 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`shrink-0 ${className}`}
    aria-hidden="true"
    {...props}
  >
    <line x1="6" y1="27" x2="6" y2="2" />
    <polyline points="2 8.5 6 2 10 8.5" />
  </svg>
);

export const LongTailArrowUpRight: React.FC<LongTailArrowProps> = ({
  className = 'w-8 h-4',
  strokeWidth = 1,
  ...props
}) => (
  <svg
    viewBox="0 0 32 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`shrink-0 ${className}`}
    aria-hidden="true"
    {...props}
  >
    <g transform="rotate(-20 16 8)">
      <line x1="2" y1="8" x2="30" y2="8" />
      <polyline points="23 3.5 30 8 23 12.5" />
    </g>
  </svg>
);
