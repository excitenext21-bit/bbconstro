import React from 'react';
import { ThermometerSun, Cpu, FileSpreadsheet, Wrench, Gauge, ArrowRight } from 'lucide-react';

export const OurProcessModelSection: React.FC = () => {
  const stages = [
    {
      step: '01',
      pill: 'Environmental Audit',
      title: 'ENVIRONMENTAL AUDIT',
      desc: 'Defining comfort parameters & structural load requirements.',
      icon: ThermometerSun,
      animClass: 'animate-hvac-wind'
    },
    {
      step: '02',
      pill: 'Modeling & Design',
      title: 'MODELING & DESIGN',
      desc: 'Analyzing system performance to select the best components.',
      icon: Cpu,
      animClass: 'animate-hvac-pulse'
    },
    {
      step: '03',
      pill: 'Infrastructure Blueprinting',
      title: 'INFRASTRUCTURE BLUEPRINTING',
      desc: 'Creating actionable, highly technical schematics for the physical installation.',
      icon: FileSpreadsheet,
      animClass: 'animate-hvac-droplet'
    },
    {
      step: '04',
      pill: 'System Deployment',
      title: 'SYSTEM DEPLOYMENT',
      desc: 'Validating proper air balance and system performance.',
      icon: Wrench,
      animClass: 'animate-hvac-shield'
    },
    {
      step: '05',
      pill: 'Operational Excellence',
      title: 'OPERATIONAL EXCELLENCE',
      desc: 'Ensuring optimal efficiency through monitoring and maintenance.',
      icon: Gauge,
      animClass: 'animate-hvac-fan'
    }
  ];

  return (
    <section
      id="our-process-model"
      className="relative py-20 sm:py-24 lg:py-28 bg-[#00153f] border-t border-b border-[#0b2866]/80 overflow-hidden text-slate-100"
    >
      {/* Background Watermark Typography */}
      <div className="watermark-text select-none pointer-events-none">
        LIFE CYCLE
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 z-10">
        
        {/* Section Header: Clean, Minimal, Centered */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2
            className="text-[32px] sm:text-[38px] font-extrabold text-white font-['Outfit'] tracking-tight leading-tight"
            style={{ fontSize: '38px' }}
          >
            B&amp;B CONSTRO <span className="text-[#f7985f]">Life Cycle</span>
          </h2>

          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed font-light">
            A disciplined 5-stage closed-loop methodology transforming comfort parameters into sustained facility efficiency.
          </p>
        </div>

        {/* 5 Process Cards Grid with Continuous Flow Arrow through the middle */}
        <div className="relative">
          
          {/* Continuous Horizontal Flow Line through the middle of the cards (Desktop) */}
          <div
            className="hidden lg:flex items-center absolute top-1/2 -translate-y-1/2 left-8 -right-8 pointer-events-none z-0"
            aria-hidden="true"
          >
            {/* The horizontal connecting line */}
            <div className="flex-1 h-[2.5px] bg-gradient-to-r from-[#c05e32]/60 via-[#f7985f] to-[#c05e32] shadow-[0_0_8px_rgba(247,152,95,0.4)]" />
            
            {/* Smooth Animated Arrowhead at the far right past Box 5 */}
            <div className="text-[#f7985f] -ml-1 flex items-center animate-arrow-flow">
              <svg
                className="w-7 h-7 text-[#f7985f]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="2" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5 relative z-10">
            {stages.map((stage) => {
              const Icon = stage.icon;
              return (
                <div
                  key={stage.step}
                  className="group relative p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 hover:border-[#c05e32] transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 shadow-lg hover:shadow-2xl hover:shadow-black/40 text-slate-800"
                >
                  <div>
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center text-[#c05e32] group-hover:border-[#c05e32] group-hover:bg-[#c05e32] group-hover:text-white transition-all duration-300 shadow-xs mb-5">
                      <Icon className={`w-6 h-6 stroke-[1] ${stage.animClass}`} strokeWidth={1} />
                    </div>

                    {/* Title */}
                    <h3 className="text-xs sm:text-[13.5px] font-bold uppercase tracking-wider text-[#00153f] font-['Outfit'] mb-2.5 leading-snug group-hover:text-[#c05e32] transition-colors">
                      {stage.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {stage.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
