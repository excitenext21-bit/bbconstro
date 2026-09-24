import React from 'react';
import { ThermometerSun, Zap, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface WhyChooseUsPillarsSectionProps {
  onOpenBooking?: (type?: 'emergency' | 'repair' | 'amc' | 'new_install') => void;
  onContact?: () => void;
}

export const WhyChooseUsPillarsSection: React.FC<WhyChooseUsPillarsSectionProps> = ({
  onOpenBooking,
  onContact
}) => {
  const pillars = [
    {
      id: '01',
      title: 'Climate-Resilient Engineering',
      desc: 'Handling extreme temperature fluctuations and humidity levels, ensuring peak performance.',
      icon: ThermometerSun,
      animClass: 'animate-why-climate',
    },
    {
      id: '02',
      title: 'Optimized Energy Performance',
      desc: 'Our systems are calibrated to maximize cooling output while minimizing power consumption.',
      icon: Zap,
      animClass: 'animate-why-energy',
    },
    {
      id: '03',
      title: 'End-to-End Reliability',
      desc: 'Providing comprehensive maintenance and rapid response support for lasting comfort with zero hassle.',
      icon: ShieldCheck,
      animClass: 'animate-why-shield',
    },
    {
      id: '04',
      title: 'Disciplined Project Execution',
      desc: 'Ensuring every installation is executed with strict adherence to timelines and safety standards.',
      icon: CheckCircle2,
      animClass: 'animate-why-discipline',
    },
  ];

  const handleAction = () => {
    if (onContact) {
      onContact();
    } else if (onOpenBooking) {
      onOpenBooking('new_install');
    }
  };

  return (
    <section
      id="why-choose-us-pillars"
      data-theme="light"
      className="relative py-20 sm:py-24 lg:py-28 bg-white text-[#0f172a] border-t border-b border-slate-200 overflow-hidden"
    >
      {/* Background Watermark Typography */}
      <div className="watermark-text-light select-none pointer-events-none">
        STANDARDS
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-16 items-center">
          
          {/* Left Column: Heading with Underline Accent, Description & Pill Action Button */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            
            {/* Main Headline: 38px Outfit font with Copper Gradient Underline Bar */}
            <h2
              className="text-[32px] sm:text-[38px] lg:text-[40px] font-extrabold text-[#00153f] font-['Outfit'] tracking-tight leading-[1.15] mb-6"
              style={{ fontSize: '38px' }}
            >
              <span className="block">Engineered for</span>
              <span className="block">India&apos;s Demanding</span>
              <span className="relative inline-block pb-3.5">
                Climates.
                <span
                  className="absolute bottom-0 left-0 w-full h-[3.5px] bg-gradient-to-r from-[#c05e32] via-[#f7985f] to-[#c05e32] rounded-full shadow-[0_2px_8px_rgba(192,94,50,0.35)]"
                  aria-hidden="true"
                />
              </span>
            </h2>

            {/* Intro Copy */}
            <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed font-normal mb-8 max-w-lg">
              At <strong className="text-[#00153f] font-semibold">B&amp;B Constro</strong>, delivers reliable environmental control across India&apos;s demanding climates. Our strategy ensures the rigorous design &amp; seamless deployment of HVAC infrastructure. We transform complex climate requirements into sustained efficiency and complete comfort.
            </p>

            {/* Pill Action Button */}
            <div>
              <button
                onClick={handleAction}
                className="px-8 py-3 rounded-full border-[1.5px] border-[#00153f] text-[#00153f] hover:bg-[#00153f] hover:text-white text-xs uppercase tracking-wider font-bold transition-all duration-300 shadow-sm hover:shadow-xl active:scale-95 cursor-pointer inline-flex items-center gap-2"
              >
                <span>Connect Us</span>
              </button>
            </div>

          </div>

          {/* Right Column: 4 Joined Boxes in 2x2 Grid with exact border management & drop shadow hover */}
          <div className="lg:col-span-7">
            <div className="border border-slate-300 bg-[#f8fafc]/70 backdrop-blur-xs rounded-2xl overflow-hidden shadow-xs grid grid-cols-1 sm:grid-cols-2">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                
                // Border management for joined 2x2 layout:
                // Mobile: border-b on all except the last item
                // sm+ (2 cols x 2 rows):
                //   idx 0 (top-left): border-r border-b
                //   idx 1 (top-right): border-b
                //   idx 2 (bottom-left): border-r
                //   idx 3 (bottom-right): no right/bottom borders
                const borderClasses = `
                  border-slate-300
                  ${idx !== 3 ? 'border-b sm:border-b-0' : ''}
                  ${idx < 2 ? 'sm:border-b' : ''}
                  ${idx % 2 === 0 ? 'sm:border-r' : ''}
                `;

                return (
                  <div
                    key={pillar.id}
                    className={`group relative px-6 py-10 sm:px-8 sm:py-12 flex flex-col items-center text-center transition-all duration-300 hover:z-20 hover:bg-white hover:shadow-[0_16px_36px_-6px_rgba(0,21,63,0.15)] hover:ring-1 hover:ring-slate-300 hover:-translate-y-1 cursor-pointer ${borderClasses}`}
                  >
                    {/* Centered Outline Icon in Brand Copper with Animation */}
                    <div className="w-14 h-14 mb-6 flex items-center justify-center text-[#c05e32] transition-transform duration-300 group-hover:scale-110">
                      <Icon
                        className={`w-9 h-9 stroke-[1.25] ${pillar.animClass} transition-colors duration-300 group-hover:text-[#c05e32]`}
                      />
                    </div>

                    {/* Title: Centered, Bold, Uppercase Tracking */}
                    <h3 className="text-xs sm:text-[13.5px] font-bold uppercase tracking-[0.14em] text-[#00153f] font-['Outfit'] mb-3.5 leading-snug min-h-[38px] flex items-center justify-center">
                      {pillar.title}
                    </h3>

                    {/* Description: Centered, Light, Elegant */}
                    <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal max-w-xs">
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
