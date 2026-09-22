import React from 'react';
import { ShieldCheck, Zap, Clock, CheckCircle2 } from 'lucide-react';
import { WhyChooseUsSection } from './WhyChooseUsSection';
import { ClientMarquee } from './ClientMarquee';

interface WhyChooseUsViewProps {
  onOpenBooking?: (type?: 'emergency' | 'repair' | 'amc' | 'new_install') => void;
  onContact?: () => void;
}

export const WhyChooseUsView: React.FC<WhyChooseUsViewProps> = () => {
  return (
    <div className="animate-fadeIn">
      {/* Why Choose Us Hero Banner with Image */}
      <section className="relative pt-14 pb-16 sm:pt-20 sm:pb-20 bg-[#00153f] border-b border-[#0b2866]/80 overflow-hidden text-slate-100">
        {/* Background Image: Starts on right side, blurred, and transitions to transparent where hero text ends */}
        <div
          className="absolute top-0 right-0 bottom-0 w-full sm:w-3/4 lg:w-3/5 xl:w-1/2 overflow-hidden pointer-events-none select-none z-0"
          aria-hidden="true"
        >
          <img
            src="/assets/why-choose-us-banner.jpg"
            alt="B&B Constro HVAC Engineering Infrastructure"
            className="w-full h-full object-cover object-right filter blur-[3px] scale-105 opacity-40 brightness-95 contrast-105 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#00153f] via-[#00153f]/80 via-35% to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#00153f]/60 via-transparent to-[#00153f] pointer-events-none" />
        </div>

        {/* Ambient Brand Glow */}
        <div
          className="absolute -top-24 right-1/4 w-96 h-96 bg-[#c05e32]/20 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 z-10">
          {/* Hero Grid: Left Copy & Right Featured Image Banner Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Heading & Description */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <h1
                className="text-[32px] sm:text-[38px] font-extrabold text-white font-['Outfit'] tracking-tight leading-[1.18] mb-5"
                style={{ fontSize: '38px' }}
              >
                Why Choose B&B Constro
              </h1>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl font-light">
                We combine deep thermodynamic engineering, disciplined project execution, and rapid 60-minute SLA response guarantees to safeguard commercial and industrial climate control across Maharashtra.
              </p>
            </div>

            {/* Right Column: Featured Banner with Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl shadow-black/60 group bg-[#02102e]">
                {/* Image Banner */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src="/assets/why-choose-us-banner.jpg"
                    alt="B&B Constro Rooftop Commercial HVAC Installation"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#00153f] via-[#00153f]/30 to-transparent" />
                </div>

                {/* Banner Caption Overlay */}
                <div className="p-5 sm:p-6 bg-gradient-to-b from-[#00153f]/90 to-[#001133] border-t border-white/10 backdrop-blur-md">
                  <h3 className="text-base sm:text-lg font-bold text-white font-['Outfit'] leading-snug">
                    Commercial HVAC &amp; Cleanroom AHU Systems
                  </h3>
                  <p className="text-xs text-slate-300 font-light mt-1.5 leading-relaxed">
                    Engineered to withstand extreme temperature &amp; humidity fluctuations across Maharashtra.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Counter Stat Section (Same bg-white as Our Clients section) */}
      <section className="relative z-10 bg-white border-b border-slate-200 py-10 sm:py-12 text-[#0f172a] shadow-xs">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
            <div className="flex items-center gap-3.5 group">
              <div className="w-11 h-11 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-[#c05e32] shrink-0 transition-all duration-300 group-hover:bg-[#c05e32]/10 group-hover:border-[#c05e32]/30 group-hover:scale-105 shadow-xs">
                <Clock className="w-5 h-5 animate-why-clock stroke-[1.5]" />
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-[#00153f] font-['Outfit'] tracking-tight">60 Min</p>
                <p className="text-xs sm:text-[13px] text-slate-600 font-['Outfit'] font-medium">Rapid Breakdown SLA</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 group">
              <div className="w-11 h-11 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-[#c05e32] shrink-0 transition-all duration-300 group-hover:bg-[#c05e32]/10 group-hover:border-[#c05e32]/30 group-hover:scale-105 shadow-xs">
                <Zap className="w-5 h-5 animate-why-energy stroke-[1.5]" />
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-[#00153f] font-['Outfit'] tracking-tight">28%</p>
                <p className="text-xs sm:text-[13px] text-slate-600 font-['Outfit'] font-medium">Average Energy Savings</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 group">
              <div className="w-11 h-11 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-[#c05e32] shrink-0 transition-all duration-300 group-hover:bg-[#c05e32]/10 group-hover:border-[#c05e32]/30 group-hover:scale-105 shadow-xs">
                <ShieldCheck className="w-5 h-5 animate-why-shield stroke-[1.5]" />
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-[#00153f] font-['Outfit'] tracking-tight">Tier-1</p>
                <p className="text-xs sm:text-[13px] text-slate-600 font-['Outfit'] font-medium">Daikin &amp; Voltas Certified</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 group">
              <div className="w-11 h-11 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-[#c05e32] shrink-0 transition-all duration-300 group-hover:bg-[#c05e32]/10 group-hover:border-[#c05e32]/30 group-hover:scale-105 shadow-xs">
                <CheckCircle2 className="w-5 h-5 animate-why-discipline stroke-[1.5]" />
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-[#00153f] font-['Outfit'] tracking-tight">250+</p>
                <p className="text-xs sm:text-[13px] text-slate-600 font-['Outfit'] font-medium">Turnkey Deployments</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Attached Why Choose Us Section */}
      <WhyChooseUsSection />

      {/* Client Marquee */}
      <ClientMarquee />
    </div>
  );
};
