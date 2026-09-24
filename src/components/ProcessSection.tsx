import React from 'react';
import { ThermometerSun, Cpu, FileSpreadsheet, Wrench, Gauge, ShieldCheck, Zap, Clock, LifeBuoy } from 'lucide-react';
import { LongTailArrowRight } from './LongTailArrow';
import { PROCESS_STEPS } from '../data/hvacData';

interface ProcessSectionProps {
  onStartProject?: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onStartProject }) => {
  const getProcessIcon = (iconName: string) => {
    switch (iconName) {
      case 'ThermometerSun': return ThermometerSun;
      case 'Cpu': return Cpu;
      case 'FileSpreadsheet': return FileSpreadsheet;
      case 'Wrench': return Wrench;
      case 'Gauge': return Gauge;
      default: return Cpu;
    }
  };

  const whyChooseUsPoints = [
    {
      title: 'Climate-Resilient Engineering',
      desc: 'Engineered specifically for Pune & Western Maharashtra’s sharp seasonal temperature swings and monsoon humidity.',
      icon: ThermometerSun
    },
    {
      title: 'Optimized Energy Performance',
      desc: 'Systems dynamically calibrated with inverters, VRV electronic expansion valves, and automated staging to minimize power bills by 15-20%.',
      icon: Zap
    },
    {
      title: 'Disciplined Project Execution',
      desc: 'Time, Cost, Risk & Quality management frameworks with zero compromise on safety protocols and NBC fire regulations.',
      icon: ShieldCheck
    },
    {
      title: 'End-to-End Lifecycle Reliability',
      desc: 'From blueprinting to 24/7 rapid emergency breakdown support and structured AMC tiers ensuring zero operational disruption.',
      icon: LifeBuoy
    }
  ];

  return (
    <section className="relative py-24 bg-[#00153f] overflow-hidden border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Eyebrow & Headline */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs uppercase font-bold tracking-widest text-[#f7985f] block mb-2">
            02. HOW WE WORK & METHODOLOGY
          </span>
          <h2
            className="text-[32px] sm:text-[38px] font-extrabold text-white font-['Outfit'] tracking-tight"
            style={{ fontSize: '38px' }}
          >
            Our 5-Stage Life Cycle Process
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            One framework. Two models. Disciplined execution. We transform complex climate and architectural requirements into sustained efficiency and complete facility comfort.
          </p>
        </div>

        {/* 5 Process Steps Linear / Circular Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative mb-20">
          {PROCESS_STEPS.map((step, idx) => {
            const Icon = getProcessIcon(step.icon);
            return (
              <div
                key={step.step}
                className="relative p-6 rounded-2xl bg-[#041a4a] border border-slate-800 hover:border-[#c05e32]/50 transition-all flex flex-col justify-between group hover:-translate-y-1 duration-300"
              >
                {/* Arrow connector on desktop */}
                {idx < PROCESS_STEPS.length - 1 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-[#c05e32]/20 text-[#f7985f] border border-[#c05e32]/40 flex items-center justify-center text-[10px]">
                    →
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center text-[#f7985f] group-hover:bg-gradient-to-r from-[#f7985f] to-[#c05e32] group-hover:text-slate-950 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-black text-slate-700 group-hover:text-[#f7985f]/40 font-mono transition">
                      {step.step}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2 font-['Outfit'] group-hover:text-[#f9ab7c] transition">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-800/80 text-[11px] text-[#f7985f]/80 font-mono">
                  STAGE {step.step}
                </div>
              </div>
            );
          })}
        </div>

        {/* 2.1 WHY CHOOSE US Cards (From PDF Page 6) */}
        <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-br from-[#041a4a] to-[#111c34] border border-slate-800 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-10 pb-8 border-b border-slate-800">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-[#f7985f] block mb-1">
                2.1 WHY CHOOSE B&B CONSTRO
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit']">
                Engineered for India's Demanding Climates
              </h3>
            </div>
            
            <button
              onClick={onStartProject}
              className="px-6 py-3 bg-transparent border border-white rounded-[3px] text-white hover:bg-white hover:text-slate-950 font-[300] text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg transition-all shrink-0 cursor-pointer"
            >
              <span className="font-[300]">Consult Our Engineering Team</span>
              <LongTailArrowRight className="w-6 h-3 stroke-[1]" strokeWidth={1} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUsPoints.map((point, i) => {
              const Icon = point.icon;
              return (
                <div key={i} className="flex flex-col">
                  <div className="w-10 h-10 rounded-lg bg-[#f7985f]/15 border border-[#c05e32]/30 flex items-center justify-center text-[#f7985f] mb-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1.5 font-['Outfit']">
                    {point.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
