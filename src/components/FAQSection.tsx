import React, { useState } from 'react';
import { ChevronDown, ShieldCheck } from 'lucide-react';
import { LongTailArrowRight } from './LongTailArrow';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQS_DATA: FAQItem[] = [
  {
    category: 'Emergency & Dispatch',
    question: 'What is the typical emergency response time for commercial HVAC breakdowns in Pune?',
    answer: 'For clients in our primary Pune service corridors—including Hinjewadi IT Park, Magarpatta City, Kharadi EON Free Zone, Baner, PCMC, and Senapati Bapat Road—our rapid-response engineering teams guarantee on-site arrival within 60 minutes, 24/7/365.'
  },
  {
    category: 'Engineering & Technology',
    question: 'How does Lokring braze-free piping benefit high-occupancy and cleanroom facilities?',
    answer: 'Lokring is a patented, flame-free mechanical joinery method for refrigerant copper lines. It completely eliminates open-flame hazards, hot-work permits, and harmful internal nitrogen oxide scaling, reducing installation downtime by 40% in critical environments like hospitals, pharma labs, and occupied IT towers.'
  },
  {
    category: 'System Selection',
    question: 'What is the difference between VRV/VRF systems and central chillers for large buildings?',
    answer: 'VRV/VRF (Variable Refrigerant Volume/Flow) systems modulate compressor speed and refrigerant flow to match individual zone demands with high partial-load efficiency. They are ideal for multi-tenant offices and luxury residences. Central water-cooled screw chillers offer superior bulk efficiency and lower lifecycle cost for continuous base-load facilities exceeding 300+ TR.'
  },
  {
    category: 'AMC & Maintenance',
    question: 'What is covered under B&B Constro Comprehensive vs. Preventive AMC contracts?',
    answer: 'Comprehensive AMC covers 100% of all spare parts (scroll/screw compressors, inverter PCB boards, fan motors, sensor modules), unlimited breakdown calls, priority emergency dispatch, and 4 quarterly chemical washes. Preventive AMC covers scheduled quarterly maintenance and tune-ups, with replacement parts billed at contracted preferential OEM rates.'
  },
  {
    category: 'Multi-Brand Service',
    question: 'Do you service and maintain HVAC installations executed by other contractors or OEMs?',
    answer: 'Yes. Our team of 75+ full-time certified technicians and Daikin/Voltas alumnus leadership regularly service, overhaul, retrofit, and audit existing installations from Daikin, Voltas, Blue Star, Carrier, Mitsubishi Electric, and Trane, regardless of the original installing vendor.'
  },
  {
    category: 'Energy & Audits',
    question: 'How can an HVAC thermal and energy audit reduce our facility power expenses?',
    answer: 'HVAC typically accounts for 45% to 65% of commercial electricity bills in Pune. Our comprehensive energy audits assess kW/TR efficiency, CFM airflow balancing, duct static pressure losses, and condenser fouling to implement optimization retrofits that typically yield 15% to 28% measured power savings.'
  }
];

interface FAQSectionProps {
  onOpenBooking?: (type?: 'emergency' | 'repair' | 'amc') => void;
  onContact?: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenBooking, onContact }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFAQ = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq-section" className="relative py-20 lg:py-28 bg-[#00153f] overflow-hidden text-slate-100 border-t border-[#0b2866]/80">
      
      {/* Watermark Typography */}
      <div className="watermark-text select-none pointer-events-none text-white/[0.035] font-black text-6xl sm:text-8xl tracking-widest font-['Outfit'] absolute top-0 left-6">
        FAQS
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 z-10">
        
        {/* Section Header */}
        <div className="mb-12 max-w-3xl">
          <h2
            className="text-[32px] sm:text-[38px] font-extrabold text-white font-['Outfit'] tracking-tight"
            style={{ fontSize: '38px' }}
          >
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            Clear answers regarding commercial HVAC engineering, 60-minute emergency breakdown dispatch, AMC warranties, and energy optimization in Pune.
          </p>
        </div>

        {/* FAQs Accordion Grid */}
        <div className="max-w-4xl mx-auto space-y-4">
          {FAQS_DATA.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl transition-all duration-300 border ${
                  isOpen
                    ? 'bg-[#041a4a] border-[#f7985f]/50 shadow-[0_8px_24px_rgba(0,0,0,0.35)]'
                    : 'bg-[#021133] border-[#0b2866] hover:border-[#0e358a]'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 select-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex flex-col">
                    <h3 className="text-base sm:text-lg font-bold text-white font-['Outfit'] leading-snug">
                      {faq.question}
                    </h3>
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-1 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-gradient-to-r from-[#f7985f] to-[#c05e32] text-slate-950 rotate-180'
                        : 'bg-[#041a4a] text-slate-400 border border-[#0d348a]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-300 text-sm leading-relaxed border-t border-[#0b2866]/50 animate-fadeIn">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Helper Box */}
        <div className="max-w-4xl mx-auto mt-12 p-6 rounded-2xl bg-gradient-to-r from-[#041a4a] to-[#021133] border border-[#0d348a] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#c05e32]/20 border border-[#f7985f]/40 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-[#f7985f]" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white font-['Outfit']">
                Have a specific question about your project?
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Our HVAC engineering specialists are available for technical consultations and on-site assessments.
              </p>
            </div>
          </div>

          <button
            onClick={() => onOpenBooking && onOpenBooking('repair')}
            className="px-6 py-3 bg-transparent border border-white rounded-[3px] text-white hover:bg-white hover:text-slate-950 font-[300] text-xs uppercase tracking-wider flex items-center gap-2 shadow-md shrink-0 active:scale-95 transition-all cursor-pointer"
          >
            <span className="font-[300]">Ask An Engineer</span>
            <LongTailArrowRight className="w-6 h-3 stroke-[1]" strokeWidth={1} />
          </button>
        </div>

      </div>

    </section>
  );
};
