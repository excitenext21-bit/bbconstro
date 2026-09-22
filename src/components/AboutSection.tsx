import React from 'react';
import { Compass, Building, Shield } from 'lucide-react';
import { LongTailArrowRight } from './LongTailArrow';

interface AboutSectionProps {
  onLearnMore?: () => void;
  onBookAudit?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onLearnMore, onBookAudit }) => {
  return (
    <section className="relative py-20 lg:py-28 bg-[#00153f] overflow-hidden text-slate-100">
      
      {/* Background Watermark Typography */}
      <div className="watermark-text">
        ABOUT
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 z-10">
        
        {/* Top Narrative Row + 3D Copper 'B' Pipe Motif (Aligned against both headings) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 pb-12 border-b border-slate-800/80">
          
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
                className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-[300] text-slate-200 hover:text-[#f7985f] transition-colors group cursor-pointer"
              >
                <span className="tracking-wide">Know More</span>
                <LongTailArrowRight className="w-8 h-3.5 stroke-[1] text-slate-200 group-hover:text-[#f7985f] group-hover:translate-x-1.5 transition-all duration-300" strokeWidth={1} />
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

        {/* 3 Feature Columns with Outline Icons matching reference */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          
          {/* Card 1: Property Valuation -> Heat Load & Modeling */}
          <div className="group flex flex-col items-start cursor-default">
            <div className="w-12 h-12 rounded-xl border border-slate-700/80 bg-slate-900/70 flex items-center justify-center text-[#f7985f] mb-4 group-hover:border-[#f7985f] group-hover:bg-[#041a4a] group-hover:shadow-[0_0_20px_rgba(247,152,95,0.35)] group-hover:-translate-y-1 transition-all duration-300">
              <Compass className="w-6 h-6 stroke-[1.5] animate-compass group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h4 className="text-lg font-bold text-white font-['Outfit'] mb-2 group-hover:text-[#f7985f] transition-colors duration-200">
              HVAC Heat Load Modeling
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              All-inclusive engineering calculations to facilitate the easy, accurate, and optimal equipment sizing for your commercial spaces.
            </p>
          </div>

          {/* Card 2: Property Management -> Turnkey Project Execution */}
          <div className="group flex flex-col items-start cursor-default">
            <div className="w-12 h-12 rounded-xl border border-slate-700/80 bg-slate-900/70 flex items-center justify-center text-[#f7985f] mb-4 group-hover:border-[#f7985f] group-hover:bg-[#041a4a] group-hover:shadow-[0_0_20px_rgba(247,152,95,0.35)] group-hover:-translate-y-1 transition-all duration-300">
              <Building className="w-6 h-6 stroke-[1.5] animate-building group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h4 className="text-lg font-bold text-white font-['Outfit'] mb-2 group-hover:text-[#f7985f] transition-colors duration-200">
              Turnkey VRV Execution
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Turnkey project execution involves providing expert installation, ducting, and piping to improve facility performance and efficiency.
            </p>
          </div>

          {/* Card 3: Invest Opportunities -> 24/7 Breakdown & AMC */}
          <div className="group flex flex-col items-start cursor-default">
            <div className="w-12 h-12 rounded-xl border border-slate-700/80 bg-slate-900/70 flex items-center justify-center text-[#f7985f] mb-4 group-hover:border-[#f7985f] group-hover:bg-[#041a4a] group-hover:shadow-[0_0_20px_rgba(247,152,95,0.35)] group-hover:-translate-y-1 transition-all duration-300">
              <Shield className="w-6 h-6 stroke-[1.5] animate-shield group-hover:scale-110 transition-transform duration-300" />
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

    </section>
  );
};
