import React from 'react';
import { Check, ShieldCheck, Zap, Clock, Star, HelpCircle } from 'lucide-react';
import { LongTailArrowRight } from './LongTailArrow';
import { AMC_PLANS } from '../data/hvacData';

interface AMCSectionProps {
  onBookAMC: (planName?: string) => void;
}

export const AMCComparisonSection: React.FC<AMCSectionProps> = ({ onBookAMC }) => {
  return (
    <section id="amc-section" className="relative py-24 bg-[#080d18] overflow-hidden border-t border-slate-800/80">
      {/* Background Watermark */}
      <div className="absolute top-12 right-12 select-none pointer-events-none text-slate-800/10 font-black text-8xl sm:text-9xl tracking-widest font-['Outfit']">
        AMC
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-bold tracking-widest text-[#f7985f] block mb-2">
            3.4 ANNUAL MAINTENANCE CONTRACT (AMC)
          </span>
          <h2
            className="text-[32px] sm:text-[38px] font-extrabold text-white font-['Outfit'] tracking-tight"
            style={{ fontSize: '38px' }}
          >
            Stress-Free Air Conditioning Tiers
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Regular maintenance through our structured AMCs maintains peak thermodynamic efficiency, protects compressors, eliminates surprise breakdowns, and lowers ongoing utility costs.
          </p>
        </div>

        {/* 3 AMC Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 items-stretch">
          {AMC_PLANS.map((plan) => {
            const isPopular = plan.popular;

            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  isPopular
                    ? 'bg-gradient-to-b from-[#121e36] to-[#0c1424] border-2 border-[#c05e32]/80 shadow-2xl shadow-amber-500/15 scale-[1.02] z-10'
                    : 'bg-[#041a4a] border border-slate-800/90 hover:border-slate-700'
                }`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#f7985f] to-orange-500 text-slate-950 text-[11px] font-extrabold uppercase tracking-wider shadow-lg flex items-center gap-1.5">
                    <Star className="w-3 h-3 fill-slate-950" />
                    <span>Most Popular For Enterprises</span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-slate-800 text-[#f7985f]">
                      {plan.badge}
                    </span>
                    <span className="text-xs font-semibold text-slate-400 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#f7985f]" />
                      {plan.visits}
                    </span>
                  </div>

                  <h3 className="text-2xl font-extrabold text-white font-['Outfit'] mb-2">
                    {plan.name}
                  </h3>

                  <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                    {plan.coverage}
                  </p>

                  <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 mb-6">
                    <span className="text-[11px] font-bold text-[#f9ab7c] block mb-1">
                      Recommended For:
                    </span>
                    <p className="text-xs text-slate-300">
                      {plan.recommendedFor}
                    </p>
                  </div>

                  {/* Features List from PDF */}
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-3">
                    Scope of Coverage:
                  </span>
                  
                  <ul className="space-y-2.5 mb-8">
                    {plan.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-[#f7985f] shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-slate-800/80">
                  <button
                    onClick={() => onBookAMC(plan.name)}
                    className="w-full py-3.5 bg-transparent border border-white rounded-[3px] text-white hover:bg-white hover:text-slate-950 font-[300] text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all active:scale-95 shadow-md cursor-pointer"
                  >
                    <span className="font-[300]">Get {plan.name} Quote</span>
                    <LongTailArrowRight className="w-6 h-3 stroke-[1]" strokeWidth={1} />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Info Banner on 3 Visits: 2 Dry - 1 Wet */}
        <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#c05e32]/20 text-[#f7985f] flex items-center justify-center shrink-0">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-white block text-sm">
                Standard Protocol: 3 Scheduled Service Visits Per Annum (2 Dry + 1 Deep Chemical Wet Cleaning)
              </span>
              <span className="text-slate-400">
                Wet cleaning includes full condenser degreasing, drain tray sanitation, and cooling coil descaling to maximize air velocity.
              </span>
            </div>
          </div>
          
          <button
            onClick={() => onBookAMC('Custom Enterprise AMC')}
            className="px-5 py-2.5 bg-transparent border border-white/70 hover:border-white rounded-[3px] text-white hover:bg-white hover:text-slate-950 font-[300] text-xs shrink-0 transition-all cursor-pointer"
          >
            <span className="font-[300]">Custom Society / Corporate SLA</span>
          </button>
        </div>

      </div>
    </section>
  );
};
