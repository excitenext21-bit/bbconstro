import React, { useState, useEffect, useRef } from 'react';
import { ShieldCheck, Zap, Clock, CheckCircle2 } from 'lucide-react';
import { WhyChooseUsPillarsSection } from './WhyChooseUsPillarsSection';
import { OurProcessModelSection } from './OurProcessModelSection';
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

interface WhyChooseUsViewProps {
  onOpenBooking?: (type?: 'emergency' | 'repair' | 'amc' | 'new_install') => void;
  onContact?: () => void;
}

export const WhyChooseUsView: React.FC<WhyChooseUsViewProps> = ({
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
      {/* Why Choose Us Hero Banner with Image */}
      <section className="relative pt-28 pb-14 sm:pt-36 sm:pb-16 lg:pt-40 lg:pb-20 bg-[#00153f] border-b border-[#0b2866]/80 overflow-hidden text-slate-100">
        {/* Background Image: Starts on right side, and transitions to transparent where hero text ends */}
        <div
          className="absolute top-0 right-0 bottom-0 w-full sm:w-3/4 lg:w-3/5 xl:w-1/2 overflow-hidden pointer-events-none select-none z-0"
          aria-hidden="true"
        >
          <img
            src="/assets/about-us-banner.png"
            alt="B&B Constro HVAC Engineering Infrastructure"
            className="w-full h-full object-cover object-right opacity-60 brightness-100 contrast-105 transition-all duration-700"
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
          <div className="max-w-2xl lg:max-w-3xl">
            <h1
              className="text-[32px] sm:text-[38px] font-extrabold text-white font-['Outfit'] tracking-tight leading-[1.18] mb-5"
              style={{ fontSize: '38px' }}
            >
              Why Choose B&B Constro
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              We combine deep thermodynamic engineering, disciplined project execution, and rapid 60-minute SLA response guarantees to safeguard commercial and industrial climate control across Maharashtra.
            </p>
          </div>
        </div>
      </section>

      {/* Counter Stat Section (Same bg-white as Our Clients section with running numbers) */}
      <section
        ref={statsSectionRef}
        className="relative z-10 bg-white border-b border-slate-200 py-10 sm:py-12 text-[#0f172a] shadow-xs"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
            <div className="flex items-center gap-3.5 group">
              <div className="w-11 h-11 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-[#c05e32] shrink-0 transition-all duration-300 group-hover:bg-[#c05e32]/10 group-hover:border-[#c05e32]/30 group-hover:scale-105 shadow-xs">
                <Clock className="w-5 h-5 animate-why-clock stroke-[1.5]" />
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-[#00153f] font-['Outfit'] tracking-tight">
                  <CountUp end={60} suffix=" Min" isVisible={statsVisible} duration={1800} />
                </p>
                <p className="text-xs sm:text-[13px] text-slate-600 font-['Outfit'] font-medium">Rapid Breakdown SLA</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 group">
              <div className="w-11 h-11 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-[#c05e32] shrink-0 transition-all duration-300 group-hover:bg-[#c05e32]/10 group-hover:border-[#c05e32]/30 group-hover:scale-105 shadow-xs">
                <Zap className="w-5 h-5 animate-why-energy stroke-[1.5]" />
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-[#00153f] font-['Outfit'] tracking-tight">
                  <CountUp end={28} suffix="%" isVisible={statsVisible} duration={2000} />
                </p>
                <p className="text-xs sm:text-[13px] text-slate-600 font-['Outfit'] font-medium">Average Energy Savings</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 group">
              <div className="w-11 h-11 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-[#c05e32] shrink-0 transition-all duration-300 group-hover:bg-[#c05e32]/10 group-hover:border-[#c05e32]/30 group-hover:scale-105 shadow-xs">
                <ShieldCheck className="w-5 h-5 animate-why-shield stroke-[1.5]" />
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-[#00153f] font-['Outfit'] tracking-tight">
                  <CountUp end={1} prefix="Tier-" isVisible={statsVisible} duration={1500} />
                </p>
                <p className="text-xs sm:text-[13px] text-slate-600 font-['Outfit'] font-medium">Daikin &amp; Voltas Certified</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 group">
              <div className="w-11 h-11 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-[#c05e32] shrink-0 transition-all duration-300 group-hover:bg-[#c05e32]/10 group-hover:border-[#c05e32]/30 group-hover:scale-105 shadow-xs">
                <CheckCircle2 className="w-5 h-5 animate-why-discipline stroke-[1.5]" />
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-[#00153f] font-['Outfit'] tracking-tight">
                  <CountUp end={250} suffix="+" isVisible={statsVisible} duration={2200} />
                </p>
                <p className="text-xs sm:text-[13px] text-slate-600 font-['Outfit'] font-medium">Turnkey Deployments</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Why Choose Us (02. How We Work / 2.1 Why Choose Us) */}
      <WhyChooseUsPillarsSection
        onOpenBooking={onOpenBooking}
        onContact={onContact}
      />

      {/* Section 2: Our Process (2.2 Our Process Model / 5-Stage Life Cycle) */}
      <OurProcessModelSection />

      {/* Client Marquee */}
      <ClientMarquee />

      {/* Direct Consultation CTA */}
      <ConsultingBanner
        onOpenBooking={onOpenBooking}
        onContact={onContact || (() => {})}
      />
    </div>
  );
};
