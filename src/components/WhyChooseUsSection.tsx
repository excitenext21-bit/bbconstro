import React from 'react';
import { ThermometerSun, Zap, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const WhyChooseUsSection: React.FC = () => {
  const pillars = [
    {
      title: 'Climate-Resilient Engineering',
      desc: 'Handling extreme temperature fluctuations and humidity levels, ensuring peak performance.',
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
      title: 'End-to-End Reliability',
      desc: 'Providing comprehensive maintenance and rapid response support for lasting comfort with zero hassle.',
      icon: ShieldCheck,
      animClass: 'animate-why-shield',
    },
    {
      title: 'Disciplined Project Execution',
      desc: 'Ensuring every installation is executed with strict adherence to timelines and safety standards.',
      icon: CheckCircle2,
      animClass: 'animate-why-discipline',
    },
  ];

  return (
    <section
      id="why-choose-us"
      data-theme="light"
      className="relative py-20 sm:py-24 lg:py-28 bg-white text-[#0f172a] border-t border-b border-slate-200 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 xl:gap-14 items-center">
          
          {/* Left Column: Headline & Intro Paragraph */}
          <div className="lg:col-span-4 xl:col-span-4 flex flex-col justify-center">
            {/* Main Headline: 38px, Outfit font, clean multi-line uppercase typography */}
            <h2
              className="text-[32px] sm:text-[38px] font-['Outfit'] uppercase tracking-[0.06em] text-[#00153f] leading-[1.18] mb-6"
              style={{ fontSize: '38px' }}
            >
              <span className="font-extrabold block">DESIGNED FOR</span>
              <span className="font-extrabold block">WELLBEING.</span>
              <span className="font-light block text-[#00153f]/90">BUILT FOR LONG-</span>
              <span className="font-light block text-[#00153f]/90">TERM VALUE</span>
            </h2>

            {/* Intro Copy */}
            <p className="text-slate-600 text-xs sm:text-[13.5px] leading-relaxed font-normal text-justify sm:text-left pr-0 lg:pr-4">
              At <strong className="text-[#00153f] font-semibold">B&amp;B Constro</strong>, we deliver reliable environmental control across India&apos;s demanding climates. Our strategy ensures rigorous design &amp; seamless deployment of HVAC infrastructure, transforming complex requirements into sustained efficiency and complete comfort.
            </p>
          </div>

          {/* Right Column: 4 Columns inside a single sleek bordered box with vertical dividers */}
          <div className="lg:col-span-8 xl:col-span-8">
            <div className="border border-slate-200 bg-white grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 shadow-xs transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/90 hover:border-slate-300">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="group relative px-6 py-10 sm:px-6 sm:py-12 flex flex-col items-center text-center transition-all duration-300 hover:bg-white hover:z-10 hover:shadow-lg hover:shadow-slate-300/60"
                  >
                    {/* Centered Outline Icon in Brand Copper with Sleek 1px Stroke & Animation */}
                    <div className="w-14 h-14 mb-6 flex items-center justify-center text-[#c05e32] transition-transform duration-300 group-hover:scale-110">
                      <Icon
                        className={`w-9 h-9 stroke-[1] ${pillar.animClass} transition-colors duration-300 group-hover:text-[#c05e32]`}
                      />
                    </div>

                    {/* Title: Centered, Bold, Uppercase Tracking */}
                    <h3 className="text-xs sm:text-[13.5px] font-bold uppercase tracking-[0.14em] text-[#00153f] font-['Outfit'] mb-4 leading-snug min-h-[38px] flex items-center justify-center">
                      {pillar.title}
                    </h3>

                    {/* Description: Centered, Light, Elegant */}
                    <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                      {pillar.desc}
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

