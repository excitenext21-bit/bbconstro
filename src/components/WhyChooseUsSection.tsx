import React from 'react';
import { ThermometerSun, Zap, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const WhyChooseUsSection: React.FC = () => {
  const pillars = [
    {
      title: 'Climate-Resilient Engineering',
      desc: 'Handling the extreme temperature fluctuations and humidity levels ensuring peak performance.',
      icon: ThermometerSun,
      animClass: 'animate-why-climate',
    },
    {
      title: 'Optimized Energy Performance',
      desc: 'Our systems are calibrated to maximize cooling output while minimizing power consumption.',
      icon: Zap,
      animClass: 'animate-why-energy',
    },
    {
      title: 'End-to-End Lifecycle Reliability',
      desc: 'Providing comprehensive maintenance and rapid response support lasting comfort with zero hassle.',
      icon: ShieldCheck,
      animClass: 'animate-why-shield',
    },
    {
      title: 'Disciplined Project Execution',
      desc: 'Ensuring, every installation is executed with adherence to timelines & safety with industry standards.',
      icon: CheckCircle2,
      animClass: 'animate-why-discipline',
    },
  ];

  return (
    <section
      id="why-choose-us"
      data-theme="light"
      className="relative py-20 sm:py-24 lg:py-28 bg-[#faf8f5] text-[#0f172a] border-t border-b border-slate-200 overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 z-10">

        {/* Two-Part Layout: Heading Left + 4 Pillars Right (matching reference) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">

          {/* Left Column: Label + Large Heading (reference style) */}
          <div className="lg:col-span-3 lg:sticky lg:top-28">
            {/* Small label with horizontal rule */}
            <div className="flex items-center gap-3 mb-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#c05e32] font-['Outfit'] whitespace-nowrap">
                Why Choose Us
              </p>
              <div className="h-px flex-1 bg-[#c05e32]/40" />
            </div>

            {/* Large Bold Heading */}
            <h2
              className="font-['Outfit'] font-extrabold uppercase tracking-[0.04em] text-[#00153f] leading-[1.1]"
              style={{ fontSize: '38px' }}
            >
              Designed for
              <br />
              Comfort.
              <br />
              <span className="text-[#00153f]/70 font-light">Built for</span>
              <br />
              <span className="text-[#00153f]/70 font-light">Long-Term</span>
              <br />
              <span className="text-[#00153f]/70 font-light">Value</span>
            </h2>
          </div>

          {/* Right Column: 4 Pillars with Vertical Dividers (matching reference) */}
          <div className="lg:col-span-9">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 relative">

              {pillars.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="group relative flex flex-col items-center text-center px-5 sm:px-6 py-8 sm:py-6"
                  >
                    {/* Vertical Divider Line (between columns, not before first) */}
                    {idx > 0 && (
                      <div className="absolute left-0 top-6 bottom-6 w-px bg-[#00153f]/10 hidden lg:block" />
                    )}

                    {/* Icon — thin line style in brand copper */}
                    <div className="mb-5 sm:mb-6 transition-transform duration-300 group-hover:scale-110">
                      <Icon
                        className={`w-8 h-8 text-[#c05e32] ${item.animClass} transition-all duration-300 group-hover:[animation-duration:1.4s]`}
                        strokeWidth={1.2}
                      />
                    </div>

                    {/* Bold Uppercase Title */}
                    <h3 className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.16em] text-[#00153f] font-['Outfit'] mb-3 leading-snug group-hover:text-[#c05e32] transition-colors duration-300">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed font-normal max-w-[200px]">
                      {item.desc}
                    </p>
                  </div>
                );
              })}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
