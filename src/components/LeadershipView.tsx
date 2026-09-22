import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ShieldCheck, Award, Briefcase, Users } from 'lucide-react';
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
      <section className="relative pt-12 pb-14 sm:pt-16 sm:pb-18 bg-[#00153f] border-b border-[#0b2866]/80 overflow-hidden text-slate-100">
        {/* Background Ambient Glow */}
        <div
          className="absolute -top-24 right-1/4 w-96 h-96 bg-[#c05e32]/15 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs uppercase tracking-widest text-slate-400 font-['Outfit'] mb-6">
            <Link to="/" className="hover:text-[#f7985f] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <Link to="/about" className="hover:text-[#f7985f] transition-colors">
              About Us
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-[#f7985f] font-semibold">Leadership</span>
          </nav>

          {/* Page Heading */}
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#f7985f] font-['Outfit']">
                EXECUTIVE DIRECTION &amp; GOVERNANCE
              </span>
              <span className="w-10 h-[1.5px] bg-[#c05e32]/60" />
            </div>

            <h1
              className="text-[34px] sm:text-[44px] font-extrabold uppercase tracking-tight text-white font-['Outfit'] leading-tight mb-4"
            >
              LEADERSHIP AT B&amp;B CONSTRO
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
