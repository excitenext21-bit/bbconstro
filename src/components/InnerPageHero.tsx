import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

export interface InnerPageHeroProps {
  breadcrumb: BreadcrumbItem[];
  tagline: string;
  title: React.ReactNode;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  children?: React.ReactNode;
  badge?: React.ReactNode;
}

export const InnerPageHero: React.FC<InnerPageHeroProps> = ({
  breadcrumb,
  tagline,
  title,
  description,
  imageSrc = '/assets/why-choose-us-banner.jpg',
  imageAlt = 'B&B Constro HVAC Engineering Infrastructure',
  children,
  badge,
}) => {
  return (
    <section className="relative pt-12 pb-14 sm:pt-16 sm:pb-18 bg-[#00153f] border-b border-[#0b2866]/80 overflow-hidden text-slate-100">
      {/* Background Image: Starts on right side, blurred, and transitions to transparent where hero text ends */}
      <div
        className="absolute top-0 right-0 bottom-0 w-full sm:w-3/4 lg:w-3/5 xl:w-1/2 overflow-hidden pointer-events-none select-none z-0"
        aria-hidden="true"
      >
        {/* Blurred Image on Right */}
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover object-right filter blur-[3px] scale-105 opacity-40 brightness-95 contrast-105 transition-all duration-700"
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
        {/* Breadcrumb */}
        {breadcrumb.length > 0 && (
          <nav className="flex items-center gap-2 text-xs uppercase tracking-widest text-slate-400 font-['Outfit'] mb-6">
            {breadcrumb.map((item, idx) => {
              const isLast = idx === breadcrumb.length - 1;
              return (
                <React.Fragment key={idx}>
                  {item.path && !isLast ? (
                    <Link to={item.path} className="hover:text-[#f7985f] transition-colors">
                      {item.label}
                    </Link>
                  ) : (
                    <span className={isLast ? 'text-[#f7985f] font-semibold' : ''}>
                      {item.label}
                    </span>
                  )}
                  {!isLast && <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />}
                </React.Fragment>
              );
            })}
          </nav>
        )}

        {/* Page Heading & Copy: Placed cleanly on the left */}
        <div className="max-w-2xl lg:max-w-3xl">
          {tagline && (
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#f7985f] font-['Outfit']">
                {tagline}
              </span>
              <span className="w-10 h-[1.5px] bg-[#c05e32]/60" />
            </div>
          )}

          {typeof title === 'string' ? (
            <h1 className="text-[34px] sm:text-[44px] font-extrabold uppercase tracking-tight text-white font-['Outfit'] leading-tight mb-4">
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
