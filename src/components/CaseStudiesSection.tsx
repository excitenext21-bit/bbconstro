import React, { useState } from 'react';
import { ShieldCheck, Zap, Building2, Layers } from 'lucide-react';
import { LongTailArrowRight } from './LongTailArrow';
import { CASE_STUDIES } from '../data/hvacData';

interface CaseStudiesProps {
  onOpenBooking: () => void;
  activeTab?: number;
  onSelectTab?: (idx: number) => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesProps> = ({
  onOpenBooking,
  activeTab: controlledTab,
  onSelectTab
}) => {
  const [internalTab, setInternalTab] = useState<number>(0);
  const activeTab = controlledTab !== undefined ? controlledTab : internalTab;

  const handleTabChange = (idx: number) => {
    setInternalTab(idx);
    if (onSelectTab) onSelectTab(idx);
  };

  const currentStudy = CASE_STUDIES[activeTab] || CASE_STUDIES[0];

  return (
    <section id="featured-case-studies" className="relative py-24 bg-[#00153f] overflow-hidden scroll-mt-16">
      {/* Anchor for backward compatibility */}
      <span id="projects-section" className="absolute -top-16" aria-hidden="true" />
      {/* Background Watermark */}
      <div className="absolute top-12 left-12 select-none pointer-events-none text-slate-800/10 font-black text-8xl sm:text-9xl tracking-widest font-['Outfit']">
        PROJECTS
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <h2
              className="text-[32px] sm:text-[38px] font-extrabold text-white font-['Outfit'] tracking-tight"
              style={{ fontSize: '38px' }}
            >
              Featured Case Studies
            </h2>
            <p className="mt-2 text-slate-400 max-w-2xl text-base">
              Explore how we solved critical thermal challenges, saved millions in recurring power bills, and executed high-speed zero-complaint installations in Pune.
            </p>
          </div>

          {/* Tab Selector */}
          <div className="flex items-center gap-2 bg-slate-900/90 p-1.5 rounded-2xl border border-slate-800">
            {CASE_STUDIES.map((study, idx) => (
              <button
                key={study.id}
                onClick={() => handleTabChange(idx)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === idx
                    ? 'bg-gradient-to-r from-[#f7985f] to-[#c05e32] text-slate-950 shadow-md shadow-[0_4px_16px_rgba(247,152,95,0.25)]'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {study.client.split(' ')[0]} ({study.number})
              </button>
            ))}
          </div>
        </div>

        {/* Active Case Study Spotlight Card */}
        <div className="rounded-2xl bg-[#041a4a] border border-slate-800 shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Image & Stat Highlight */}
            <div className="lg:col-span-6 relative aspect-[16/11] lg:aspect-auto min-h-[380px] bg-slate-900">
              <img
                src={currentStudy.image}
                alt={currentStudy.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#041a4a] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#041a4a]" />
              
              {/* Featured Stat Floating Box */}
              <div className="absolute bottom-6 left-6 p-5 rounded-2xl bg-slate-950/90 backdrop-blur-md border border-[#c05e32]/40 shadow-2xl">
                <span className="text-3xl sm:text-4xl font-extrabold text-[#f7985f] font-['Outfit'] block">
                  {currentStudy.featuredStat.value}
                </span>
                <span className="text-[11px] uppercase tracking-wider text-slate-300 font-bold">
                  {currentStudy.featuredStat.label}
                </span>
              </div>
            </div>

            {/* Right Detailed Analysis */}
            <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit'] mb-3">
                  {currentStudy.title}
                </h3>
                
                <h4 className="text-sm font-semibold text-[#57b3ea] mb-4">
                  Client: {currentStudy.client}
                </h4>

                {/* Challenge */}
                <div className="mb-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <span className="text-[11px] uppercase tracking-wider font-bold text-[#57b3ea] block mb-1">
                    The Challenge:
                  </span>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {currentStudy.challenge}
                  </p>
                </div>

                {/* Solution */}
                <div className="mb-6 p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <span className="text-[11px] uppercase tracking-wider font-bold text-[#57b3ea] block mb-1">
                    Our Engineering Solution:
                  </span>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {currentStudy.solution}
                  </p>
                </div>

                {/* Key Deliverable Results */}
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-2">
                    Verified Outcomes:
                  </span>
                  <ul className="space-y-2.5">
                    {currentStudy.results.map((res, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <span className="inline-flex items-center shrink-0 w-[15px] h-4 mt-0.5" aria-hidden="true">
                          <svg
                            className="w-[15px] h-[1px] overflow-visible text-[#c05e32]"
                            viewBox="0 0 15 1"
                            fill="none"
                          >
                            <line
                              x1="0"
                              y1="0.5"
                              x2="15"
                              y2="0.5"
                              stroke="currentColor"
                              strokeWidth="1"
                              shapeRendering="crispEdges"
                            />
                          </svg>
                        </span>
                        <span>{res}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Specs & Action */}
              <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs text-slate-400">
                  <span className="block text-slate-500">Scale of Project:</span>
                  <span className="font-semibold text-white">{currentStudy.areaCovered}</span>
                </div>

                <button
                  onClick={onOpenBooking}
                  className="px-6 py-3 bg-transparent border border-white rounded-[3px] text-white hover:bg-white hover:text-slate-950 font-[300] text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg transition-all cursor-pointer"
                >
                  <span className="font-[300]">Enquire Now</span>
                  <LongTailArrowRight className="w-6 h-3 stroke-[1]" strokeWidth={1} />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
