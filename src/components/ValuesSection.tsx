import React from 'react';
import { Target, ShieldCheck, Flame } from 'lucide-react';

export const ValuesSection: React.FC = () => {
  const values = [
    {
      number: '01',
      title: 'PRECISION IN EVERY INSTALLATION',
      desc: 'We choose quality that matters. Every system we design should optimize air quality and energy efficiency, helping facilities operate at their best.',
      icon: Target,
    },
    {
      number: '02',
      title: 'CRAFTSMANSHIP WITH INTEGRITY',
      desc: 'We do things the right way. We stay transparent, professional, and committed to delivering reliable HVAC performance in every project.',
      icon: ShieldCheck,
    },
    {
      number: '03',
      title: 'INNOVATION THAT COOLS & HEATS',
      desc: 'We stay curious and open to modern technologies. We learn, explore, and implement the latest thermal solutions to find smarter ways to regulate environments.',
      icon: Flame,
    },
  ];

  return (
    <section
      id="values"
      className="relative py-20 lg:py-28 bg-[#00153f] text-slate-100 overflow-hidden border-t border-b border-[#0b2866]/80"
    >
      {/* Background Watermark Typography */}
      <div className="watermark-text" aria-hidden="true">
        VALUES
      </div>

      {/* Topographic Contour Texture matching Image 1 */}
      <div
        className="absolute inset-0 pointer-events-none select-none opacity-10 overflow-hidden z-0"
        aria-hidden="true"
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 600"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M0,150 Q300,50 600,180 T1200,120"
            stroke="#f7985f"
            strokeWidth="1.2"
          />
          <path
            d="M0,220 Q400,120 750,260 T1200,190"
            stroke="#c05e32"
            strokeWidth="1"
          />
          <path
            d="M0,320 Q250,220 550,340 T1200,280"
            stroke="#ffffff"
            strokeWidth="0.8"
          />
          <path
            d="M0,420 Q450,300 800,450 T1200,380"
            stroke="#f7985f"
            strokeWidth="1"
          />
          <path
            d="M0,520 Q350,420 700,530 T1200,470"
            stroke="#c05e32"
            strokeWidth="1.2"
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 z-10">
        {/* Section Heading: VALUES (with underline bar matching Image 2, 38px font size) */}
        <div className="mb-14 sm:mb-16">
          <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-[#f7985f] mb-3 block font-['Outfit']">
            Core Beliefs
          </span>
          <h2
            className="text-[30px] sm:text-[38px] font-extrabold uppercase tracking-[0.14em] text-white font-['Outfit']"
            style={{ fontSize: '38px' }}
          >
            VALUES
          </h2>
          {/* Underline bar matching Image 2 with Brand Copper */}
          <div className="flex items-center gap-1.5 mt-3">
            <div className="h-0.5 w-16 bg-[#c05e32]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#f7985f]" />
          </div>
        </div>

        {/* 3 Columns matching Image 1: Top horizontal accent bar, Icon + Number, Title & Description */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
          {values.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="group relative flex flex-col">
                {/* Top Horizontal Accent Line Bar matching Image 1 in Brand Copper */}
                <div className="h-[3px] w-full bg-[#c05e32] group-hover:bg-[#f7985f] transition-colors duration-300 rounded-full" />

                {/* Content Container below bar */}
                <div className="pt-8 sm:pt-10 flex items-start gap-5 sm:gap-6 flex-1">
                  {/* Left: Icon & Number Badge */}
                  <div className="shrink-0 flex flex-col items-center">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#f7985f] group-hover:text-white group-hover:bg-[#c05e32] group-hover:border-[#c05e32] group-hover:scale-105 transition-all duration-300 shadow-inner">
                      <Icon className="w-6 h-6" strokeWidth={1.8} />
                    </div>
                    <span className="text-[11px] font-bold tracking-widest text-[#f7985f]/90 mt-2.5 font-['Outfit']">
                      {item.number}
                    </span>
                  </div>

                  {/* Right: Title & Description from Image 2 */}
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-bold uppercase tracking-[0.12em] text-white font-['Outfit'] mb-2.5 group-hover:text-[#f7985f] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
