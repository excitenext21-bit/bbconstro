import React, { useState, useEffect, useRef } from 'react';

interface CountUpProps {
  end: number;
  suffix?: string;
  isVisible: boolean;
  duration?: number;
}

const CountUp: React.FC<CountUpProps> = ({ end, suffix = '', isVisible, duration = 2000 }) => {
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
      {count}
      {suffix}
    </span>
  );
};

export const StatsBar: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      target: 250,
      suffix: '+',
      label: 'ELEGANT PROJECTS',
      sublabel: 'Commercial & Luxury Residences'
    },
    {
      target: 950,
      suffix: '+',
      label: 'SYSTEM INSTALLATIONS',
      sublabel: 'VRV, Chillers & Ventilation'
    },
    {
      target: 18,
      suffix: 'k+',
      label: 'SATISFIED CLIENTS',
      sublabel: 'IT Parks, SEZs & Hospitals'
    },
    {
      target: 2,
      suffix: 'k+',
      label: 'ACTIVE AMC CONTRACTS',
      sublabel: '24/7 Breakdown Coverage'
    }
  ];

  return (
    <section
      ref={sectionRef}
      data-theme="light"
      className="relative z-10 bg-[#dce3ea] py-10 sm:py-12 px-4 sm:px-6 lg:px-12 text-[#0f172a]"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center sm:text-left">
        {stats.map((stat, idx) => (
          <div key={idx} className="flex flex-col items-center sm:items-start group">
            <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] group-hover:text-[#c05e32] font-['Outfit'] tracking-tight transition-colors duration-300">
              <CountUp
                end={stat.target}
                suffix={stat.suffix}
                isVisible={isVisible}
                duration={2200}
              />
            </span>
            <span className="text-xs sm:text-sm font-bold tracking-wider text-slate-700 uppercase mt-1">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
