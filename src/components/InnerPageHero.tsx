import React from 'react';

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

export interface InnerPageHeroProps {
  breadcrumb?: BreadcrumbItem[];
  tagline?: string;
  title: React.ReactNode;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  children?: React.ReactNode;
  badge?: React.ReactNode;
  singleLineTitle?: boolean;
  titleClassName?: string;
  maxWidthClass?: string;
  imageClassName?: string;
}

export const InnerPageHero: React.FC<InnerPageHeroProps> = ({
  title,
  description,
  imageSrc = '/assets/why-choose-us-banner.jpg',
  imageAlt = 'B&B Constro HVAC Engineering Infrastructure',
  children,
  badge,
  singleLineTitle = false,
  titleClassName = '',
  maxWidthClass = '',
  imageClassName = ''
}) => {
  return (
    <section className="relative pt-28 pb-14 sm:pt-36 sm:pb-16 lg:pt-40 lg:pb-20 bg-[#00153f] border-b border-slate-300/70 overflow-hidden text-slate-100">
      {/* Background Image: Starts on right side, and transitions to transparent where hero text ends */}
      <div
        className="absolute top-0 right-0 bottom-0 w-full sm:w-3/4 lg:w-3/5 xl:w-1/2 overflow-hidden pointer-events-none select-none z-0"
        aria-hidden="true"
      >
        {/* Background Image on Right */}
        <img
          src={imageSrc}
          alt={imageAlt}
          className={imageClassName || "w-full h-full object-cover object-right filter blur-[3px] scale-105 opacity-40 brightness-95 contrast-105 transition-all duration-700"}
        />

        {/* Gradient Mask: Fades from solid brand navy on the left (where text ends) to transparent on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#00153f] via-[#00153f]/80 via-35% to-transparent pointer-events-none" />

        {/* Subtle Vertical Edge Blending */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#00153f]/60 via-transparent to-[#00153f] pointer-events-none" />
      </div>

      {/* Ambient Brand Copper Glow */}
      <div
        className="absolute -top-24 right-1/4 w-96 h-96 bg-[#c05e32]/15 rounded-full blur-3xl pointer-events-none z-0"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 z-10">
        {/* Page Heading & Copy: Placed cleanly on the left */}
        <div
          className={`${
            singleLineTitle
              ? 'max-w-none w-full xl:max-w-7xl'
              : maxWidthClass || 'max-w-2xl lg:max-w-3xl'
          }`}
        >
          {typeof title === 'string' ? (
            <h1
              className={`${
                singleLineTitle
                  ? 'text-[22px] sm:text-[26px] md:text-[28px] lg:text-[33px] xl:text-[38px] md:whitespace-nowrap'
                  : 'text-[32px] sm:text-[38px]'
              } font-extrabold text-white font-['Outfit'] tracking-tight leading-[1.18] mb-4 ${titleClassName}`}
              style={singleLineTitle ? undefined : { fontSize: '38px' }}
            >
              {title}
            </h1>
          ) : (
            title
          )}

          {description && (
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-light">
              {description}
            </p>
          )}

          {badge && <div className="mt-4">{badge}</div>}
        </div>

        {/* Optional Extra Elements (Stats bar, pills, CTAs) */}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
};
