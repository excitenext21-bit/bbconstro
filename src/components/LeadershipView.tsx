import React from 'react';
import { ShieldCheck, Award, Briefcase, Users } from 'lucide-react';
import { LeadershipSection } from './LeadershipSection';
import { ClientMarquee } from './ClientMarquee';
import { ConsultingBanner } from './ConsultingBanner';

interface LeadershipViewProps {
  onOpenBooking: (type?: 'emergency' | 'repair' | 'amc' | 'new_install') => void;
  onContact: () => void;
}

export const LeadershipView: React.FC<LeadershipViewProps> = ({
  onOpenBooking,
  onContact,
}) => {
  return (
    <div className="animate-fadeIn">
      {/* Leadership Hero Banner */}
      <section className="relative pt-14 pb-16 sm:pt-20 sm:pb-20 bg-[#00153f] border-b border-[#0b2866]/80 overflow-hidden text-slate-100">
        {/* Background Image: Starts on right side, blurred, and transitions to transparent where hero text ends */}
        <div
          className="absolute top-0 right-0 bottom-0 w-full sm:w-3/4 lg:w-3/5 xl:w-1/2 overflow-hidden pointer-events-none select-none z-0"
          aria-hidden="true"
        >
          <img
            src="/assets/why-choose-us-banner.jpg"
            alt="B&B Constro HVAC Engineering Leadership"
            className="w-full h-full object-cover object-right filter blur-[3px] scale-105 opacity-40 brightness-95 contrast-105 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#00153f] via-[#00153f]/80 via-35% to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#00153f]/60 via-transparent to-[#00153f] pointer-events-none" />
        </div>

        {/* Background Ambient Glow */}
        <div
          className="absolute -top-24 right-1/4 w-96 h-96 bg-[#c05e32]/15 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 z-10">
          {/* Page Heading */}
          <div className="max-w-3xl">

            <h1
              className="text-[32px] sm:text-[38px] font-extrabold text-white font-['Outfit'] tracking-tight leading-[1.18] mb-4"
              style={{ fontSize: '38px' }}
            >
              Leadership at B&B Constro
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-light">
              Guided by deep engineering expertise, hands-on field experience, and a steadfast commitment to technological innovation across India&apos;s most demanding climate zones.
            </p>
          </div>

          {/* Quick Stats / Pillars */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-10 pt-8 border-t border-slate-800/80">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#f7985f] shrink-0">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-extrabold text-white font-['Outfit']">17+</p>
                <p className="text-xs text-slate-400 font-['Outfit']">Years HVAC Expertise</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#f7985f] shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-extrabold text-white font-['Outfit']">250+</p>
                <p className="text-xs text-slate-400 font-['Outfit']">Projects Delivered</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#f7985f] shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-extrabold text-white font-['Outfit']">100%</p>
                <p className="text-xs text-slate-400 font-['Outfit']">Zero-Accident Safety</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#f7985f] shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-extrabold text-white font-['Outfit']">75+</p>
                <p className="text-xs text-slate-400 font-['Outfit']">Field Specialists</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Attached Leadership / Director Section */}
      <LeadershipSection />

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
