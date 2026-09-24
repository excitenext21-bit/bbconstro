import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ChevronRight, ChevronLeft, Plus, Minus, HelpCircle } from 'lucide-react';
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
  isFaqPage?: boolean;
}

export const FAQSection: React.FC<FAQSectionProps> = ({
  onOpenBooking,
  onContact,
  isFaqPage: isFaqPageProp
}) => {
  const location = useLocation();
  const isFaqPage = isFaqPageProp !== undefined ? isFaqPageProp : location.pathname.includes('/faqs');

  // State for Home Page Accordion (Previous Style)
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  // State for FAQ Page 2-Column Light Style
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const activeFaq = FAQS_DATA[activeIdx];

  const toggleFAQ = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  // Dedicated FAQ Page View (Current 2-Column Light #dce3ea style preserved)
  if (isFaqPage) {
    return (
      <section
        id="faq-section"
        data-theme="light"
        className="relative py-16 sm:py-20 lg:py-24 bg-[#dce3ea] overflow-hidden text-[#0f172a] border-t border-b border-slate-300"
      >
        {/* Background Watermark Typography */}
        <div className="watermark-text-light !left-8 sm:!left-14 lg:!left-20 !top-2 text-slate-900/[0.04] select-none pointer-events-none">
          FAQS
        </div>

        <div className="relative max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 z-10">
          
          {/* Section Header with generous spacing */}
          <div className="mb-10 sm:mb-14 max-w-3xl">
            <h2
              className="text-[32px] sm:text-[38px] font-extrabold text-[#00153f] font-['Outfit'] tracking-tight"
              style={{ fontSize: '38px' }}
            >
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Clear, technical answers regarding commercial HVAC engineering, our 60-minute emergency breakdown dispatch, AMC warranties, and energy optimization in Pune.
            </p>
          </div>

          {/* 2-Column Layout: Questions on the Left Line by Line, Answer on the Right Side */}
          <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-10 xl:gap-14">
            
            {/* Left Side: Questions Line by Line */}
            <div className="w-full lg:w-[48%] xl:w-[45%] shrink-0 divide-y divide-slate-300/80">
              {FAQS_DATA.map((faq, idx) => {
                const isSelected = activeIdx === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveIdx(idx)}
                    className={`w-full text-left py-4 sm:py-5 px-1 sm:px-2 transition-all duration-200 flex items-center justify-between gap-4 group cursor-pointer border-b ${
                      isSelected
                        ? 'border-[#c05e32]'
                        : 'border-slate-300/80 hover:border-slate-400'
                    }`}
                    aria-selected={isSelected}
                    role="tab"
                  >
                    <div className="flex-1 min-w-0 pr-2">
                      <p
                        className={`text-base sm:text-[17px] leading-snug transition-colors font-['Outfit'] ${
                          isSelected
                            ? 'font-normal text-[#00153f]'
                            : 'font-normal text-slate-700 group-hover:text-[#00153f]'
                        }`}
                      >
                        {faq.question}
                      </p>
                    </div>

                    <div className="flex items-center justify-center shrink-0">
                      {isSelected ? (
                        <Minus className="w-[21px] h-[21px] stroke-[1] text-[#c05e32] transition-transform duration-200" strokeWidth={1} />
                      ) : (
                        <Plus className="w-[21px] h-[21px] stroke-[1] text-slate-400 group-hover:text-[#c05e32] transition-colors duration-200" strokeWidth={1} />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Side: Answer Display Panel */}
            <div className="w-full lg:w-[52%] xl:w-[55%]">
              <div className="lg:sticky lg:top-28 bg-white border-[1.5px] border-slate-300/70 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl shadow-slate-400/20 relative overflow-hidden text-slate-800">
                
                {/* Copper Gradient Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#f7985f] via-[#c05e32] to-[#00153f]" />

                {/* Card Header */}
                <div className="flex items-center justify-end mb-3 sm:mb-4">
                  <span className="text-xs sm:text-[13px] font-mono tracking-widest text-slate-900/40 font-semibold select-none">
                    {String(activeIdx + 1).padStart(2, '0')}/{String(FAQS_DATA.length).padStart(2, '0')}
                  </span>
                </div>

                {/* Question Heading */}
                <h3 className="text-xl sm:text-2xl lg:text-[25px] font-extrabold text-[#00153f] font-['Outfit'] leading-snug mb-5">
                  {activeFaq.question}
                </h3>

                {/* Divider */}
                <div className="h-px bg-slate-200 mb-6" />

                {/* Answer Content */}
                <div className="prose prose-slate max-w-none mb-8">
                  <p className="text-slate-600 text-sm sm:text-base lg:text-[16.5px] leading-relaxed font-normal">
                    {activeFaq.answer}
                  </p>
                </div>

                {/* Card Footer: Navigation Controls */}
                <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setActiveIdx((prev) => (prev > 0 ? prev - 1 : FAQS_DATA.length - 1))}
                      className="px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 text-xs font-medium transition-colors border-[1.5px] border-slate-300/80 flex items-center gap-1.5 cursor-pointer"
                      aria-label="Previous Question"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                      <span>Previous</span>
                    </button>
                    <button
                      onClick={() => setActiveIdx((prev) => (prev < FAQS_DATA.length - 1 ? prev + 1 : 0))}
                      className="px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 text-xs font-medium transition-colors border-[1.5px] border-slate-300/80 flex items-center gap-1.5 cursor-pointer"
                      aria-label="Next Question"
                    >
                      <span>Next</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Bottom Helper Consultation Box */}
          <div className="mt-14 sm:mt-16 p-6 sm:p-8 rounded-2xl bg-white border border-slate-300/80 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md shadow-slate-400/10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#c05e32]/15 border border-[#c05e32]/30 flex items-center justify-center shrink-0">
                <HelpCircle className="w-6 h-6 text-[#c05e32]" strokeWidth={1.75} />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-bold text-[#00153f] font-['Outfit']">
                  Have a specific question about your project?
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                  Our HVAC engineering specialists are available for technical consultations and on-site assessments across Pune &amp; PCMC.
                </p>
              </div>
            </div>

            <button
              onClick={() => onContact ? onContact() : (onOpenBooking && onOpenBooking('repair'))}
              className="px-6 py-3 bg-[#00153f] hover:bg-[#072669] text-white rounded-[3px] font-[400] text-xs uppercase tracking-wider flex items-center gap-2 shadow-sm shrink-0 active:scale-95 transition-all cursor-pointer"
            >
              <span>Connect With Us</span>
              <LongTailArrowRight className="w-6 h-3 stroke-[1]" strokeWidth={1} />
            </button>
          </div>

        </div>
      </section>
    );
  }

  // Home Page View: Exact previous dark accordion style restored
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
                  className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 select-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex flex-col">
                    <h3 className="text-base sm:text-lg font-normal text-white font-['Outfit'] leading-snug">
                      {faq.question}
                    </h3>
                  </div>
                  <div className="flex items-center justify-center shrink-0 mt-1">
                    {isOpen ? (
                      <Minus className="w-[21px] h-[21px] stroke-[1] text-[#f7985f] transition-transform duration-200" strokeWidth={1} />
                    ) : (
                      <Plus className="w-[21px] h-[21px] stroke-[1] text-slate-400 hover:text-white transition-colors duration-200" strokeWidth={1} />
                    )}
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
              <HelpCircle className="w-6 h-6 text-[#f7985f]" strokeWidth={1.75} />
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
            onClick={() => onContact ? onContact() : (onOpenBooking && onOpenBooking('repair'))}
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
