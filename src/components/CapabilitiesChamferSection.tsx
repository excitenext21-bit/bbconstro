import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ThermometerSun, Cpu, FileSpreadsheet, Wrench, Gauge } from 'lucide-react';

interface CapabilitiesChamferSectionProps {
  onSelectCapability?: (name: string) => void;
}

export const CapabilitiesChamferSection: React.FC<CapabilitiesChamferSectionProps> = ({
  onSelectCapability
}) => {
  const processStages = [
    {
      step: '01',
      title: 'Environmental Audit',
      desc: 'Defining comfort parameters & structural load requirements.',
      icon: ThermometerSun,
      animClass: 'animate-hvac-wind'
    },
    {
      step: '02',
      title: 'Modeling & Design',
      desc: 'Analyzing system performance to select the best components.',
      icon: Cpu,
      animClass: 'animate-hvac-pulse'
    },
    {
      step: '03',
      title: 'Infrastructure Blueprinting',
      desc: 'Creating actionable, highly technical schematics for the physical installation.',
      icon: FileSpreadsheet,
      animClass: 'animate-hvac-droplet'
    },
    {
      step: '04',
      title: 'System Deployment',
      desc: 'Validating proper air balance and system performance.',
      icon: Wrench,
      animClass: 'animate-hvac-shield'
    },
    {
      step: '05',
      title: 'Operational Excellence',
      desc: 'Ensuring optimal efficiency through monitoring and maintenance.',
      icon: Gauge,
      animClass: 'animate-hvac-fan'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : processStages.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < processStages.length - 1 ? prev + 1 : 0));
  };

  const handleSelect = (idx: number, title: string) => {
    setActiveIndex(idx);
    if (onSelectCapability) {
      onSelectCapability(title);
    }
  };

  return (
    <section data-theme="light" className="relative py-20 lg:py-28 bg-[#dce3ea] overflow-hidden text-[#0f172a] border-t border-b border-slate-300">
      
      {/* Background Watermark Typography */}
      <div className="watermark-text-light">
        APPROACH
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 z-10 text-center">
        
        {/* Section Header with content from Image 2 */}
        <div className="max-w-2xl mx-auto mb-14" data-reveal="fade-up" data-reveal-delay="0">
          <h2
            className="text-[32px] sm:text-[38px] font-extrabold text-[#0f172a] font-['Outfit'] tracking-tight leading-tight"
            style={{ fontSize: '38px' }}
          >
            Our approach
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            B&B Constro Life Cycle: Disciplined 5-stage HVAC engineering methodology transforming comfort parameters into sustained facility efficiency.
          </p>
        </div>

        {/* 5 Chamfered Polygon Cards matching exact design, look & feel */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5 mb-10">
          {processStages.map((item, idx) => {
            const Icon = item.icon;
            const isHighlighted = idx === activeIndex;

            return (
              <div
                key={item.step}
                onClick={() => handleSelect(idx, item.title)}
                data-reveal="zoom-up"
                data-reveal-delay={idx * 100}
                className={`chamfer-card group cursor-pointer p-6 sm:p-7 flex flex-col items-center justify-center text-center transition-all duration-300 min-h-[190px] sm:min-h-[220px] ${
                  isHighlighted
                    ? 'bg-white text-[#0f172a] shadow-xl shadow-slate-400/30 border-t-4 border-[#c05e32]'
                    : 'bg-white/90 hover:bg-white text-slate-700 shadow-md hover:shadow-lg border border-slate-300/80 hover:border-slate-400'
                }`}
              >
                {/* Icon with copper accent */}
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-[#c05e32] mb-3 transition-all duration-300 ${
                  isHighlighted ? 'bg-[#c05e32]/15 shadow-sm' : 'bg-[#c05e32]/5 group-hover:bg-[#c05e32]/15'
                }`}>
                  <Icon className={`w-7 h-7 stroke-[1] ${item.animClass} group-hover:scale-115 transition-transform duration-300`} strokeWidth={1} />
                </div>
                
                {/* Step Title (+5% font weight: 750 / font-extrabold) */}
                <h3
                  className="text-xs sm:text-sm font-extrabold tracking-tight text-[#0f172a] font-['Outfit']"
                  style={{ fontWeight: 750 }}
                >
                  {item.title}
                </h3>
                
                {/* Step Description from Image 2 */}
                <p className="text-[11px] sm:text-xs text-slate-500 mt-2 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Navigation Arrows < and > matching reference */}
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full border border-slate-300 bg-white text-slate-700 hover:text-[#c05e32] hover:border-[#c05e32] shadow-sm flex items-center justify-center transition cursor-pointer active:scale-95"
            aria-label="Previous process stage"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full border border-slate-300 bg-white text-slate-700 hover:text-[#c05e32] hover:border-[#c05e32] shadow-sm flex items-center justify-center transition cursor-pointer active:scale-95"
            aria-label="Next process stage"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>

    </section>
  );
};
