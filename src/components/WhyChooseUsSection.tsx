import React from 'react';
import { ThermometerSun, Zap, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const WhyChooseUsSection: React.FC = () => {
  const pillars = [
    {
      title: 'Climate-Resilient Engineering',
      desc: 'Handling extreme temperature fluctuations and humidity levels ensuring peak performance.',
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
      desc: 'Ensuring every installation is executed with adherence to timelines & safety with industry standards.',
      icon: CheckCircle2,
      animClass: 'animate-why-discipline',
    },
  ];

  return (
    <section
      id="why-choose-us"
      data-theme="light"
      className="relative py-20 sm:py-24 lg:py-28 bg-[#F7F5F0] text-[#0f172a] border-t border-b border-[#E2DCCE] overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Eyebrow with Line, Big Heading, Intro description matching reference */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            {/* Eyebrow with horizontal line matching reference */}
            <div className="flex items-center gap-3.5 mb-5">
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-[#8e3f1a] font-['Outfit']">
                OUR PHILOSOPHY
              </span>
              <span className="w-12 h-[1.5px] bg-[#c05e32]/40" />
            </div>

            {/* Main Heading: 38px, clean, uppercase, matching reference style */}
            <h2
              className="text-[30px] sm:text-[36px] lg:text-[38px] font-extrabold uppercase tracking-[0.06em] text-[#00153f] font-['Outfit'] leading-[1.18] mb-6"
              style={{ fontSize: '38px' }}
            >
              DESIGNED FOR CLIMATE.{' '}
              <span className="block font-light text-[#00153f]/80">
                BUILT FOR SUSTAINED VALUE
              </span>
            </h2>

            {/* Intro paragraph from existing content */}
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal text-justify sm:text-left">
              At <strong className="text-[#00153f] font-semibold">B&amp;B Constro</strong>, we deliver reliable environmental control across India&apos;s demanding climates. We transform complex climate requirements into sustained efficiency and complete comfort.
            </p>
          </div>

          {/* Right Column: 4-column connected box with borders matching reference image */}
          <div className="lg:col-span-8">
            <div className="bg-transparent border border-[#DDD7CD] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {pillars.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className={`group relative flex flex-col items-center text-center py-10 sm:py-12 lg:py-14 px-5 sm:px-6 transition-colors duration-300 hover:bg-white/50 ${
                      idx !== 0 ? 'border-t sm:border-t-0 border-[#DDD7CD]' : ''
                    } ${
                      idx % 2 === 1 ? 'sm:border-l border-[#DDD7CD]' : ''
                    } ${
                      idx >= 2 ? 'sm:border-t lg:border-t-0 border-[#DDD7CD]' : ''
                    } ${
                      idx !== 0 ? 'lg:border-l lg:border-t-0 border-[#DDD7CD]' : ''
                    }`}
                  >
                    {/* Minimalist Icon matching reference */}
                    <div className="mb-7 text-[#c05e32] transition-transform duration-300 group-hover:scale-110 group-hover:text-[#f7985f]">
                      <Icon
                        className={`w-9 h-9 sm:w-10 sm:h-10 ${item.animClass}`}
                        strokeWidth={1.35}
                      />
                    </div>

                    {/* Title: Centered, uppercase, bold tracking */}
                    <h3 className="text-xs sm:text-[13px] font-bold uppercase tracking-[0.14em] text-[#00153f] font-['Outfit'] leading-snug mb-4">
                      {item.title}
                    </h3>

                    {/* Description: Centered, clean slate */}
                    <p className="text-xs sm:text-[12.5px] text-slate-600 leading-relaxed font-normal">
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
