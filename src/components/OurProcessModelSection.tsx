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
        APPROACH
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 z-10">
        
        {/* Section Header: Clean, Minimal, Centered */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2
            className="text-[32px] sm:text-[38px] font-extrabold text-white font-['Outfit'] tracking-tight leading-tight"
            style={{ fontSize: '38px' }}
          >
            Our Approach
          </h2>

          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed font-light">
            A disciplined 5-stage closed-loop methodology transforming comfort parameters into sustained facility efficiency.
          </p>
        </div>

        {/* Central Life Cycle Badge */}
        <div className="flex items-center justify-center mb-12">
          <div className="inline-flex items-center gap-3.5 px-6 py-2.5 rounded-full bg-[#041a4a]/90 border border-[#c05e32]/40 shadow-lg shadow-black/40 backdrop-blur-xs group">
            <img
              src="/bb-constro-emblem.png"
              alt="B&B Constro"
              className="h-7 w-auto object-contain drop-shadow-[0_2px_8px_rgba(247,152,95,0.4)]"
            />
            <div className="h-4 w-px bg-white/20" />
            <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-white font-['Outfit']">
              B&amp;B CONSTRO
            </span>
            <span className="text-sm italic font-serif text-[#f7985f]">
              Life Cycle
            </span>
          </div>
        </div>

        {/* 5 Process Cards Grid: Clean, Aesthetic, Single Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5 relative">
          {stages.map((stage, idx) => {
            const Icon = stage.icon;
            return (
              <div
                key={stage.step}
                className="group relative p-6 sm:p-7 rounded-2xl bg-[#041a4a]/80 border border-white/10 hover:border-[#c05e32]/60 hover:bg-[#041a4a] transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 shadow-md hover:shadow-xl hover:shadow-black/50"
              >
                {/* Arrow connector between stages on desktop */}
                {idx < stages.length - 1 && (
                  <div
                    className="hidden lg:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 w-6 h-6 rounded-full bg-[#00153f] border border-[#c05e32]/40 text-[#f7985f] items-center justify-center text-[10px] pointer-events-none shadow-sm"
                    aria-hidden="true"
                  >
                    <ArrowRight className="w-3 h-3 stroke-[2]" />
                  </div>
                )}

                <div>
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-2xl bg-[#00153f] border border-white/10 flex items-center justify-center text-[#f7985f] group-hover:border-[#c05e32]/60 group-hover:bg-[#c05e32] group-hover:text-white transition-all duration-300 shadow-inner mb-5">
                    <Icon className={`w-6 h-6 stroke-[1] ${stage.animClass}`} strokeWidth={1} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xs sm:text-[13.5px] font-bold uppercase tracking-wider text-white font-['Outfit'] mb-2.5 leading-snug group-hover:text-[#f7985f] transition-colors">
                    {stage.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-300 leading-relaxed font-light">
                    {stage.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
