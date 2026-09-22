import React from 'react';

export interface BrandLogoProps {
  variant?: 'horizontal' | 'stacked' | 'emblem' | 'image';
  theme?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showSubtitle?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'horizontal',
  theme = 'dark',
  size = 'md',
  className = '',
}) => {
  const isLight = theme === 'light';

  // Responsive size mappings for the full official horizontal brand logo
  const logoSizes = {
    sm: 'h-7 sm:h-8 w-auto',
    md: 'h-9 sm:h-10 md:h-11 w-auto',
    lg: 'h-12 sm:h-14 w-auto',
    xl: 'h-16 sm:h-20 w-auto',
  };

  // Emblem size mappings
  const emblemSizes = {
    sm: 'h-8 w-auto',
    md: 'h-10 sm:h-12 w-auto',
    lg: 'h-14 sm:h-16 w-auto',
    xl: 'h-20 sm:h-24 w-auto',
  };

  // Emblem-only variant
  if (variant === 'emblem') {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <img
          src="/bb-constro-emblem.png"
          alt="B&B Constro Monogram"
          className={`${emblemSizes[size]} object-contain drop-shadow-[0_4px_14px_rgba(247,152,95,0.35)] hover:scale-105 transition-transform duration-300`}
        />
      </div>
    );
  }

  // Official logo image: white text for dark surfaces, dark navy text for light surfaces
  const logoSrc = isLight ? '/bb-constro-logo-dark.png' : '/bb-constro-logo-white.png';

  return (
    <div className={`flex items-center select-none ${className}`}>
      <img
        src={logoSrc}
        alt="B&B Constro Private Limited"
        className={`${logoSizes[size]} max-w-[75vw] sm:max-w-none object-contain transition-transform duration-300 group-hover:scale-[1.02]`}
      />
    </div>
  );
};
