import React, { useState, useEffect, useRef } from 'react';
import { ShieldCheck, Award, Briefcase, Users } from 'lucide-react';
import { LeadershipSection } from './LeadershipSection';
import { ClientMarquee } from './ClientMarquee';
import { ConsultingBanner } from './ConsultingBanner';

interface CountUpProps {
  end: number;
  prefix?: string;
  suffix?: string;
  isVisible: boolean;
  duration?: number;
}

const CountUp: React.FC<CountUpProps> = ({ end, prefix = '', suffix = '', isVisible, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Smooth cubic ease-out
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(easeOut * end);

      setCount(current);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible, end, duration]);

  return (
    <span className="tabular-nums">
      {prefix}
      {count}
      {suffix}
    </span>
  );
};

interface LeadershipViewProps {
  onOpenBooking: (type?: 'emergency' | 'repair' | 'amc' | 'new_install') => void;
  onContact: () => void;
}

export const LeadershipView: React.FC<LeadershipViewProps> = ({
  onOpenBooking,
  onContact,
}) => {
  const statsSectionRef = useRef<HTMLElement>(null);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      setStatsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (statsSectionRef.current) {
      observer.observe(statsSectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

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
        </div>
      </section>

      {/* Counter Stat Section (Matches background colour of image 2 - bg-white with running stats) */}
      <section
        ref={statsSectionRef}
        className="relative z-10 bg-white border-b border-slate-200 py-10 sm:py-12 text-[#0f172a] shadow-xs"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
            <div className="flex items-center gap-3.5 group">
              <div className="w-11 h-11 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-[#c05e32] shrink-0 transition-all duration-300 group-hover:bg-[#c05e32]/10 group-hover:border-[#c05e32]/30 group-hover:scale-105 shadow-xs">
                <Briefcase className="w-5 h-5 stroke-[1.5]" />
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-[#00153f] font-['Outfit'] tracking-tight">
                  <CountUp end={17} suffix="+" isVisible={statsVisible} duration={1800} />
                </p>
                <p className="text-xs sm:text-[13px] text-slate-600 font-['Outfit'] font-medium">Years HVAC Expertise</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 group">
              <div className="w-11 h-11 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-[#c05e32] shrink-0 transition-all duration-300 group-hover:bg-[#c05e32]/10 group-hover:border-[#c05e32]/30 group-hover:scale-105 shadow-xs">
                <ShieldCheck className="w-5 h-5 stroke-[1.5]" />
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-[#00153f] font-['Outfit'] tracking-tight">
                  <CountUp end={250} suffix="+" isVisible={statsVisible} duration={2200} />
                </p>
                <p className="text-xs sm:text-[13px] text-slate-600 font-['Outfit'] font-medium">Projects Delivered</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 group">
              <div className="w-11 h-11 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-[#c05e32] shrink-0 transition-all duration-300 group-hover:bg-[#c05e32]/10 group-hover:border-[#c05e32]/30 group-hover:scale-105 shadow-xs">
                <Award className="w-5 h-5 stroke-[1.5]" />
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-[#00153f] font-['Outfit'] tracking-tight">
                  <CountUp end={100} suffix="%" isVisible={statsVisible} duration={2000} />
                </p>
                <p className="text-xs sm:text-[13px] text-slate-600 font-['Outfit'] font-medium">Zero-Accident Safety</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 group">
              <div className="w-11 h-11 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-[#c05e32] shrink-0 transition-all duration-300 group-hover:bg-[#c05e32]/10 group-hover:border-[#c05e32]/30 group-hover:scale-105 shadow-xs">
                <Users className="w-5 h-5 stroke-[1.5]" />
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-[#00153f] font-['Outfit'] tracking-tight">
                  <CountUp end={75} suffix="+" isVisible={statsVisible} duration={1900} />
                </p>
                <p className="text-xs sm:text-[13px] text-slate-600 font-['Outfit'] font-medium">Field Specialists</p>
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
