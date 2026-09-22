import React from 'react';
import { ThermometerSun, Zap, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const WhyChooseUsSection: React.FC = () => {
  const itemsRow1 = [
    {
      title: 'Climate-Resilient Engineering',
      desc: 'Handling the extreme temperature fluctuations and humidity levels ensuring peak performance.',
      icon: ThermometerSun,
      iconColor: 'text-[#c05e32]', // Brand Copper
      animClass: 'animate-why-climate',
      bgGlow: 'from-[#c05e32]/25 to-transparent',
    },
    {
      title: 'Optimized Energy Performance',
      desc: 'Our systems are calibrated to maximize cooling output while minimizing power consumption.',
      icon: Zap,
      iconColor: 'text-[#f7985f]', // Brand Copper Glow
      animClass: 'animate-why-energy',
      bgGlow: 'from-[#f7985f]/30 to-transparent',
    },
  ];

  const itemsRow2 = [
    {
      title: 'End-to-End Lifecycle Reliability',
      desc: 'Providing comprehensive maintenance and rapid response support lasting comfort with zero hassle.',
      icon: ShieldCheck,
      iconColor: 'text-[#00153f]', // Brand Navy
      animClass: 'animate-why-shield',
      bgGlow: 'from-[#00153f]/25 to-transparent',
    },
    {
      title: 'Disciplined Project Execution',
      desc: 'Ensuring, every installation is executed with adherence to timelines & safety with industry standards.',
      icon: CheckCircle2,
      iconColor: 'text-[#c05e32]', // Brand Copper
      animClass: 'animate-why-discipline',
      bgGlow: 'from-[#c05e32]/25 to-transparent',
    },
  ];

  return (
    <section
      id="why-choose-us"
      data-theme="light"
      className="relative py-20 sm:py-24 bg-[#f4f6f8] text-[#0f172a] border-t border-b border-slate-200 overflow-hidden"
    >
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Heading matching Image 1: Bold "WHY" + Light "CHOOSING US" */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <h2
            className="text-[32px] sm:text-[38px] uppercase tracking-[0.14em] font-['Outfit'] text-center"
            style={{ fontSize: '38px' }}
          >
            <span className="font-extrabold text-[#00153f]">WHY </span>
            <span className="font-light text-[#00153f]/80">CHOOSING US</span>
          </h2>

          {/* Intro copy taken directly from Image 2 */}
          <p className="text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed mt-4">
            At <strong className="text-[#00153f] font-semibold">B&B Constro</strong>, we deliver reliable environmental control across India&apos;s demanding climates. Our strategy ensures the rigorous design &amp; seamless deployment of HVAC infrastructure. We transform complex climate requirements into sustained efficiency and complete comfort.
          </p>
        </div>

        {/* Features Container matching Image 1 layout */}
        <div className="mt-12 sm:mt-16 max-w-5xl mx-auto">
          
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            {itemsRow1.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="group flex items-start gap-4 sm:gap-5">
                  {/* Circular White Disk Icon Badge matching Image 1 with Animated Icon */}
                  <div className="relative shrink-0">
                    <div
                      className={`absolute -inset-1 rounded-full bg-gradient-to-br ${item.bgGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm pointer-events-none`}
                    />
                    <div className="relative w-12 h-12 rounded-full bg-white shadow-md shadow-slate-200/80 border border-slate-100 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-slate-300/60 group-hover:border-slate-200">
                      <Icon className={`w-5 h-5 ${item.iconColor} ${item.animClass} transition-transform duration-300 group-hover:[animation-duration:1.4s]`} strokeWidth={1.8} />
                    </div>
                  </div>

                  {/* Title & Description matching Image 1 Typography */}
                  <div className="flex-1">
                    <h3 className="text-sm sm:text-base font-normal tracking-[0.12em] uppercase text-[#00153f] font-['Outfit'] mb-2 group-hover:text-[#c05e32] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Faint Horizontal Dividing Line matching Image 1 */}
          <div className="w-full h-px bg-slate-200/80 my-8 sm:my-10" />

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            {itemsRow2.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="group flex items-start gap-4 sm:gap-5">
                  {/* Circular White Disk Icon Badge matching Image 1 with Animated Icon */}
                  <div className="relative shrink-0">
                    <div
                      className={`absolute -inset-1 rounded-full bg-gradient-to-br ${item.bgGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm pointer-events-none`}
                    />
                    <div className="relative w-12 h-12 rounded-full bg-white shadow-md shadow-slate-200/80 border border-slate-100 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-slate-300/60 group-hover:border-slate-200">
                      <Icon className={`w-5 h-5 ${item.iconColor} ${item.animClass} transition-transform duration-300 group-hover:[animation-duration:1.4s]`} strokeWidth={1.8} />
                    </div>
                  </div>

                  {/* Title & Description matching Image 1 Typography */}
                  <div className="flex-1">
                    <h3 className="text-sm sm:text-base font-normal tracking-[0.12em] uppercase text-[#00153f] font-['Outfit'] mb-2 group-hover:text-[#c05e32] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {item.desc}
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
