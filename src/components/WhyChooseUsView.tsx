import React from 'react';
import { ShieldCheck, Zap, Clock, CheckCircle2 } from 'lucide-react';
import { WhyChooseUsSection } from './WhyChooseUsSection';
import { ClientMarquee } from './ClientMarquee';
import { ConsultingBanner } from './ConsultingBanner';

interface WhyChooseUsViewProps {
  onOpenBooking: (type?: 'emergency' | 'repair' | 'amc' | 'new_install') => void;
  onContact: () => void;
}

export const WhyChooseUsView: React.FC<WhyChooseUsViewProps> = ({
  onOpenBooking,
  onContact,
}) => {
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
                className="text-[34px] sm:text-[44px] lg:text-[48px] font-extrabold uppercase tracking-tight text-white font-['Outfit'] leading-[1.12] mb-5"
              >
                WHY CHOOSE <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#f7985f]">
                  B&amp;B CONSTRO
                </span>
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

          {/* Quick Metrics Bar spanning bottom of Hero */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-12 pt-8 border-t border-slate-800/80">
            <div className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#f7985f] shrink-0 transition-all duration-300 group-hover:bg-white/10 group-hover:border-[#f7985f]/40">
                <Clock className="w-5 h-5 animate-why-clock" />
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-extrabold text-white font-['Outfit']">60 Min</p>
                <p className="text-xs text-slate-400 font-['Outfit']">Rapid Breakdown SLA</p>
              </div>
            </div>

            <div className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#f7985f] shrink-0 transition-all duration-300 group-hover:bg-white/10 group-hover:border-[#f7985f]/40">
                <Zap className="w-5 h-5 animate-why-energy" />
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-extrabold text-white font-['Outfit']">28%</p>
                <p className="text-xs text-slate-400 font-['Outfit']">Average Energy Savings</p>
              </div>
            </div>

            <div className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#f7985f] shrink-0 transition-all duration-300 group-hover:bg-white/10 group-hover:border-[#f7985f]/40">
                <ShieldCheck className="w-5 h-5 animate-why-shield" />
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-extrabold text-white font-['Outfit']">Tier-1</p>
                <p className="text-xs text-slate-400 font-['Outfit']">Daikin &amp; Voltas Certified</p>
              </div>
            </div>

            <div className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#f7985f] shrink-0 transition-all duration-300 group-hover:bg-white/10 group-hover:border-[#f7985f]/40">
                <CheckCircle2 className="w-5 h-5 animate-why-discipline" />
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-extrabold text-white font-['Outfit']">250+</p>
                <p className="text-xs text-slate-400 font-['Outfit']">Turnkey Deployments</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Attached Why Choose Us Section */}
      <WhyChooseUsSection />

      {/* Client Marquee */}
      <ClientMarquee />

      {/* Direct Consultation Banner */}
      <ConsultingBanner
        onOpenBooking={onOpenBooking}
        onContact={onContact}
      />
    </div>
  );
};
