import React from 'react';
import { Compass, Building, Shield } from 'lucide-react';
import { LongTailArrowRight } from './LongTailArrow';

interface AboutSectionProps {
  onLearnMore?: () => void;
  onBookAudit?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onLearnMore, onBookAudit }) => {
  return (
    <section className="relative pt-20 lg:pt-28 pb-0 bg-[#00153f] overflow-hidden text-[#c0c0eb]">
      
      {/* Background Watermark Typography */}
      <div className="watermark-text">
        ABOUT
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 z-10">
        
        {/* Top Narrative Row + 3D Copper 'B' Pipe Motif (Aligned against both headings) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pb-12 sm:pb-16 border-b border-slate-800/80">
          
          {/* Left Column: Both Headings & Narrative */}
          <div className="lg:col-span-8">
            
            {/* Top Heading: About Us */}
            <div className="mb-7 sm:mb-8">
              <h2
                className="text-[32px] sm:text-[38px] font-extrabold text-white font-['Outfit'] tracking-tight"
                style={{ fontSize: '38px' }}
              >
                About Us
              </h2>
              <p className="mt-3 text-slate-400 max-w-xl text-sm sm:text-base leading-relaxed">
                We are an engineering firm with over 17 years of expertise, and our main goal is to deliver flawless climate solutions to our partners.
              </p>
            </div>

            {/* Second Heading: Statement Headline */}
            <h3 className="text-[18px] sm:text-[22.5px] lg:text-[27px] font-extrabold text-white leading-snug font-['Outfit'] max-w-3xl">
              All-inclusive HVAC engineering services to facilitate the easy, precise, and energy-efficient climate control of your properties
            </h3>
            <p className="mt-4 text-xs sm:text-sm text-slate-400 max-w-2xl leading-relaxed">
              Founded by Mr. Pravin Bakshi (ex-Daikin & Voltas), B&B Constro unites deep engineering calculations with certified on-ground execution for Pune's corporate towers, hospitals, and residences.
            </p>

            {/* Know More on right side below paragraph */}
            <div className="mt-5 max-w-2xl flex justify-end">
              <button
                onClick={onLearnMore}
                className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-[300] text-[#c0c0eb] hover:text-[#f7985f] transition-all duration-300 group cursor-pointer"
              >
                <span className="tracking-wide pb-1 border-b border-[#c0c0eb]/70 group-hover:border-[#f7985f] transition-colors">
                  Know More
                </span>
                <LongTailArrowRight className="w-8 h-3.5 stroke-[1] text-[#c0c0eb] group-hover:text-[#f7985f] group-hover:translate-x-1.5 transition-all duration-300" strokeWidth={1} />
              </button>
            </div>
          </div>

          {/* Right Column: Copper 'B' Refrigerant Pipe Motif right-aligned against both headings */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end items-center">
            <div className="relative group flex items-center justify-center animate-float-vertical">
              {/* Subtle ambient copper glow behind */}
              <div className="absolute -inset-6 bg-gradient-to-tr from-[#f7985f]/20 to-transparent rounded-full blur-2xl pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
              
              <img
                src="/assets/brand-copper-b.png"
                alt="B&B Constro HVAC Copper Refrigerant Piping Motif"
                className="relative max-h-[280px] sm:max-h-[340px] lg:max-h-[380px] w-auto object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.65)] hover:scale-105 transition-transform duration-500 select-none"
              />
            </div>
          </div>

        </div>

      </div>

      {/* Dedicated Attached Section: 3 Feature Cards with Topographic Contour Pattern ONLY */}
      <div className="relative pt-12 sm:pt-14 pb-20 lg:pb-28 overflow-hidden">
        {/* Topographic Contour Texture matching Value section - strictly confined to this attached cards section */}
        <div
          className="absolute inset-0 pointer-events-none select-none opacity-15 overflow-hidden z-0"
          aria-hidden="true"
        >
          <svg
            className="w-full h-full"
            viewBox="0 0 1200 360"
            preserveAspectRatio="none"
            fill="none"
          >
            <path
              d="M0,50 Q300,10 600,70 T1200,40"
              stroke="#f7985f"
              strokeWidth="1.2"
            />
            <path
              d="M0,100 Q400,40 750,120 T1200,80"
              stroke="#c05e32"
              strokeWidth="1"
            />
            <path
              d="M0,165 Q250,105 550,180 T1200,145"
              stroke="#ffffff"
              strokeWidth="0.8"
            />
            <path
              d="M0,225 Q450,165 800,245 T1200,205"
              stroke="#f7985f"
              strokeWidth="1"
            />
            <path
              d="M0,280 Q350,220 700,295 T1200,260"
              stroke="#c05e32"
              strokeWidth="1.2"
            />
            <path
              d="M0,325 Q400,270 850,335 T1200,305"
              stroke="#ffffff"
              strokeWidth="0.8"
            />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 z-10">
          {/* 3 Feature Columns with Outline Icons matching reference */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
            
            {/* Card 1: HVAC Heat Load Modeling */}
            <div className="group flex flex-col items-start cursor-default" data-reveal="fade-up" data-reveal-delay="0">
              <div className="w-12 h-12 rounded-2xl border border-slate-700/80 bg-slate-900/70 flex items-center justify-center text-[#f7985f] mb-4 group-hover:border-[#f7985f] group-hover:bg-[#041a4a] group-hover:shadow-[0_0_20px_rgba(247,152,95,0.35)] group-hover:-translate-y-1 transition-all duration-300">
                <Compass className="w-6 h-6 stroke-[1] animate-compass group-hover:scale-110 transition-transform duration-300" strokeWidth={1} />
              </div>
              <h4 className="text-lg font-bold text-white font-['Outfit'] mb-2 group-hover:text-[#f7985f] transition-colors duration-200">
                HVAC Heat Load Modeling
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                All-inclusive engineering calculations to facilitate the easy, accurate, and optimal equipment sizing for your commercial spaces.
              </p>
            </div>

            {/* Card 2: Turnkey VRV Execution */}
            <div className="group flex flex-col items-start cursor-default" data-reveal="fade-up" data-reveal-delay="150">
              <div className="w-12 h-12 rounded-2xl border border-slate-700/80 bg-slate-900/70 flex items-center justify-center text-[#f7985f] mb-4 group-hover:border-[#f7985f] group-hover:bg-[#041a4a] group-hover:shadow-[0_0_20px_rgba(247,152,95,0.35)] group-hover:-translate-y-1 transition-all duration-300">
                <Building className="w-6 h-6 stroke-[1] animate-building group-hover:scale-110 transition-transform duration-300" strokeWidth={1} />
              </div>
              <h4 className="text-lg font-bold text-white font-['Outfit'] mb-2 group-hover:text-[#f7985f] transition-colors duration-200">
                Turnkey VRV Execution
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Turnkey project execution involves providing expert installation, ducting, and piping to improve facility performance and efficiency.
              </p>
            </div>

            {/* Card 3: 24/7 Repairs & AMC */}
            <div className="group flex flex-col items-start cursor-default" data-reveal="fade-up" data-reveal-delay="300">
              <div className="w-12 h-12 rounded-2xl border border-slate-700/80 bg-slate-900/70 flex items-center justify-center text-[#f7985f] mb-4 group-hover:border-[#f7985f] group-hover:bg-[#041a4a] group-hover:shadow-[0_0_20px_rgba(247,152,95,0.35)] group-hover:-translate-y-1 transition-all duration-300">
                <Shield className="w-6 h-6 stroke-[1] animate-shield group-hover:scale-110 transition-transform duration-300" strokeWidth={1} />
              </div>
              <h4 className="text-lg font-bold text-white font-['Outfit'] mb-2 group-hover:text-[#f7985f] transition-colors duration-200">
                24/7 Repairs & AMC
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Rapid response maintenance services facilitate the easy and confident operation of your HVAC assets experiencing heavy commercial demand.
              </p>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
};
