import React from 'react';
import { LongTailArrowRight } from './LongTailArrow';

interface ConsultingBannerProps {
  onOpenBooking?: (type?: 'emergency' | 'repair' | 'amc') => void;
  onContact: () => void;
}

export const ConsultingBanner: React.FC<ConsultingBannerProps> = ({
  onContact
}) => {
  return (
    <section className="relative w-full min-h-[60vh] lg:min-h-[70vh] flex flex-col justify-center items-center py-20 sm:py-28 lg:py-36 bg-gradient-to-b from-[#001133] via-[#00153f] to-[#021133] border-t border-b border-[#0b2866]/80 overflow-hidden text-center">
      
      {/* Background Watermark Typography */}
      <div className="watermark-text select-none pointer-events-none">
        SOLUTIONS
      </div>

      {/* Top Edge Highlight */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#f7985f]/30 to-transparent" />

      {/* Ambient Diagonal Light Rays using Brand Palette */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background: `
            radial-gradient(ellipse 75% 50% at 75% 20%, rgba(247, 152, 95, 0.12), transparent 70%),
            radial-gradient(ellipse 60% 40% at 25% 80%, rgba(192, 94, 50, 0.1), transparent 70%),
            repeating-linear-gradient(
              -45deg,
              rgba(255, 255, 255, 0.015) 0px,
              rgba(255, 255, 255, 0.015) 35px,
              rgba(255, 255, 255, 0.045) 70px,
              rgba(255, 255, 255, 0.015) 105px
            )
          `
        }}
      />

      {/* Center Content (Fit to Screen Container) */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* Main Title: White + Brand Copper */}
        <h2
          className="text-[32px] sm:text-[38px] font-extrabold text-white font-['Outfit'] tracking-tight leading-[1.18] sm:leading-[1.15]"
          style={{ fontSize: '38px' }}
        >
          Smart HVAC Solutions{' '}
          <span className="text-[#f7985f] drop-shadow-[0_2px_20px_rgba(247,152,95,0.4)]">
            for Growing Businesses
          </span>
        </h2>

        {/* Subtitle / Description */}
        <p className="mt-5 text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
          All-inclusive HVAC engineering services to facilitate the easy and confident design, rapid breakdown recovery, and lifecycle energy optimization of your commercial properties.
        </p>

        {/* Single "Connect Us" Button */}
        <div className="mt-8 sm:mt-10 relative z-20">
          <button
            onClick={onContact}
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 rounded-[3px] bg-transparent border border-white text-white hover:bg-white hover:text-slate-950 font-[300] text-sm sm:text-base tracking-wide transition-all duration-200 shadow-md active:scale-95 shrink-0 cursor-pointer"
            aria-label="Connect Us"
          >
            <span className="font-[300]">Connect Us</span>
            <LongTailArrowRight className="w-6 h-3 stroke-[1]" strokeWidth={1} />
          </button>
        </div>

      </div>

      {/* Screen-Wide Glowing Horizon Arc Curve across the full bottom width */}
      <div className="absolute inset-x-0 bottom-0 pointer-events-none overflow-hidden h-40 sm:h-52 md:h-64 w-full z-0">
        <svg
          viewBox="0 0 1440 240"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <defs>
            <linearGradient id="brandHorizonGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#c05e32" stopOpacity="0" />
              <stop offset="20%" stopColor="#c05e32" stopOpacity="0.45" />
              <stop offset="50%" stopColor="#f7985f" stopOpacity="1" />
              <stop offset="80%" stopColor="#c05e32" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#c05e32" stopOpacity="0" />
            </linearGradient>
            <filter id="brandArcGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Ambient Wide Bloom */}
          <path
            d="M -100 240 Q 720 40 1540 240"
            fill="none"
            stroke="url(#brandHorizonGrad)"
            strokeWidth="56"
            opacity="0.25"
            className="blur-xl"
          />

          {/* Mid Glow Arc */}
          <path
            d="M -100 240 Q 720 40 1540 240"
            fill="none"
            stroke="url(#brandHorizonGrad)"
            strokeWidth="18"
            opacity="0.55"
            className="blur-sm"
          />

          {/* Sharp Core Arc Line */}
          <path
            d="M -100 240 Q 720 40 1540 240"
            fill="none"
            stroke="url(#brandHorizonGrad)"
            strokeWidth="3.5"
            filter="url(#brandArcGlow)"
            opacity="0.95"
          />

          {/* Ambient fill beneath horizon curve */}
          <path
            d="M -100 240 Q 720 40 1540 240 L 1540 240 L -100 240 Z"
            fill="url(#brandHorizonGrad)"
            opacity="0.08"
          />
        </svg>
      </div>

      {/* Ambient bottom spotlight behind the horizon arc */}
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-full max-w-5xl h-44 bg-gradient-to-t from-[#c05e32]/35 via-[#f7985f]/15 to-transparent rounded-[100%] blur-3xl pointer-events-none" />

    </section>
  );
};
