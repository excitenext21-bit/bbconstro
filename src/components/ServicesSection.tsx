import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Wind, Droplets, Flame, ShieldCheck, Activity, Fan, ChevronLeft, ChevronRight } from 'lucide-react';
import { LongTailArrowRight } from './LongTailArrow';
import { ServiceItem } from '../types';
import { SERVICES_DATA } from '../data/hvacData';

interface ServicesSectionProps {
  onSelectService?: (service: ServiceItem) => void;
  onOpenBooking?: (type?: 'emergency' | 'repair' | 'amc') => void;
  onViewAllServices?: () => void;
  isCapabilitiesPage?: boolean;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onOpenBooking,
  onViewAllServices,
  isCapabilitiesPage = false
}) => {
  const location = useLocation();
  const isCapabilities = isCapabilitiesPage || location.pathname.includes('/services');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.8;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const cards = [
    {
      serviceIndex: 1, // Turnkey
      step: '01',
      title: 'VRV & VRF Central Systems',
      desc: 'Rapidly coordinate cross-platform HVAC intellectual capital models. Appropriately create interactive climate infrastructures across commercial towers and IT hubs.',
      icon: Wind,
      animClass: 'animate-hvac-wind',
      brandBg: 'bg-gradient-to-br from-[#00153f] via-[#001f5c] to-[#001033]',
      brandColor: '#00153f'
    },
    {
      serviceIndex: 1, // Ventilation / Life Safety
      step: '02',
      title: 'Basement Ventilation & Safety',
      desc: 'NBC and ISHRAE compliant smart air distribution systems, automated CO monitoring, and 300°C fire-rated smoke evacuation for Pune high-rises.',
      icon: Fan,
      animClass: 'animate-hvac-fan group-hover:[animation-duration:2.5s]',
      brandBg: 'bg-gradient-to-br from-[#c05e32] via-[#cf6738] to-[#a84c22]',
      brandColor: '#c05e32'
    },
    {
      serviceIndex: 0, // Design & Consultancy
      step: '03',
      title: 'Central Chiller Plant Systems',
      desc: 'High-tonnage thermodynamic plant design, water-cooled and air-cooled screw chillers, precision hydraulic balancing, and automated industrial chiller management.',
      icon: Droplets,
      animClass: 'animate-hvac-droplet',
      brandBg: 'bg-gradient-to-br from-[#092866] via-[#0d3688] to-[#061d4d]',
      brandColor: '#092866'
    },
    {
      serviceIndex: 0, // Cleanroom / Engineering
      step: '04',
      title: 'Cleanroom AHU & Air Quality',
      desc: 'Class 10k/100k HEPA filtration, positive air pressurisation, humidity control, and microbiological contamination control for hospitals and cleanroom labs.',
      icon: Activity,
      animClass: 'animate-hvac-pulse',
      brandBg: 'bg-gradient-to-br from-[#b35327] via-[#c25c2d] to-[#994119]',
      brandColor: '#b35327'
    },
    {
      serviceIndex: 3, // AMC
      step: '05',
      title: 'Annual Maintenance Contracts',
      desc: 'Structured 3-visit lifecycle assurance with two dry services and one deep chemical coil wash, ensuring 20% lower electricity draw and zero unplanned downtime.',
      icon: ShieldCheck,
      animClass: 'animate-hvac-shield',
      brandBg: 'bg-gradient-to-br from-[#133873] via-[#1a4b99] to-[#0c2754]',
      brandColor: '#133873'
    },
    {
      serviceIndex: 2, // Emergency
      step: '06',
      title: '24/7 Breakdown & Repair SLA',
      desc: 'Rapidly deploy on-site certified engineering technicians with stocked OEM compressors, refrigerants, and diagnostic kits across Pune municipal limits.',
      icon: Flame,
      animClass: 'animate-hvac-flame',
      brandBg: 'bg-gradient-to-br from-[#c85e32] via-[#d86c3b] to-[#ab4c22]',
      brandColor: '#c85e32'
    }
  ];

  // Capabilities Page Layout matching reference image style
  if (isCapabilities) {
    return (
      <section
        id="services-section"
        className="relative py-20 lg:py-28 bg-[#f4f7fb] overflow-hidden text-[#0f172a] border-t border-b border-slate-200"
      >
        {/* Background Watermark Typography */}
        <div className="watermark-text-light" style={{ opacity: 0.06 }}>
          CAPABILITIES
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 z-10">
          {/* Top Header Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
            <div>
              <h2
                className="text-[32px] sm:text-[38px] font-extrabold text-[#00153f] font-['Outfit'] tracking-tight"
                style={{ fontSize: '38px' }}
              >
                Featured Services &amp; Systems
              </h2>
              <p className="mt-3 text-slate-600 max-w-xl text-sm sm:text-base leading-relaxed">
                We are an engineering firm with over 17 years of expertise, and our main goal is to provide amazing climate solutions to our partners and clients.
              </p>
            </div>

            <div className="flex items-center gap-3">
              {/* Carousel Navigation Buttons */}
              <button
                onClick={() => handleScroll('left')}
                className="w-10 h-10 rounded-full bg-white border border-slate-300 text-[#00153f] hover:text-[#c05e32] hover:border-[#c05e32] shadow-sm flex items-center justify-center transition active:scale-95 cursor-pointer"
                aria-label="Previous service"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleScroll('right')}
                className="w-10 h-10 rounded-full bg-white border border-slate-300 text-[#00153f] hover:text-[#c05e32] hover:border-[#c05e32] shadow-sm flex items-center justify-center transition active:scale-95 cursor-pointer"
                aria-label="Next service"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Reference Image Styled Cards Carousel with Notch & Brand Colors */}
          <div className="relative">
            {/* Left Edge Floating Arrow (matches reference image position) */}
            <button
              onClick={() => handleScroll('left')}
              className="hidden lg:flex absolute -left-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-slate-900/85 hover:bg-slate-900 text-white shadow-xl border border-white/20 items-center justify-center transition active:scale-95 cursor-pointer z-30"
              aria-label="Previous cards"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Right Edge Floating Arrow (matches reference image position) */}
            <button
              onClick={() => handleScroll('right')}
              className="hidden lg:flex absolute -right-5 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-slate-900/85 hover:bg-slate-900 text-white shadow-xl border border-white/20 items-center justify-center transition active:scale-95 cursor-pointer z-30"
              aria-label="Next cards"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Cards Track */}
            <div
              ref={scrollContainerRef}
              className="flex items-stretch gap-5 sm:gap-6 overflow-x-auto pb-6 pt-2 scroll-smooth snap-x snap-mandatory scrollbar-none px-1"
            >
              {cards.map((card, idx) => {
                const Icon = card.icon;

                return (
                  <div
                    key={idx}
                    onClick={onViewAllServices}
                    className={`shrink-0 w-[280px] sm:w-[320px] md:w-[350px] lg:w-[calc(33.333%-16px)] snap-start rounded-[22px] overflow-hidden relative shadow-lg shadow-slate-900/10 hover:shadow-2xl hover:shadow-slate-900/20 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between p-7 sm:p-8 min-h-[420px] group ${card.brandBg} ${onViewAllServices ? 'cursor-pointer' : ''}`}
                  >
                    {/* Top Row: STEP Badge on Left & White Notch Cutout on Right */}
                    <div className="flex items-center justify-between mb-8">
                      {/* Step Number matching reference format */}
                      <div className="flex items-center gap-1.5 text-xs font-bold tracking-widest text-white/90 uppercase">
                        <span>STEP</span>
                        <span className="border-b-2 border-white/80 pb-0.5 text-sm font-extrabold">{card.step}</span>
                      </div>

                      {/* Top-Right White Notch Cutout with Smooth Concave Fillets */}
                      <div className="absolute top-0 right-0 z-10 pointer-events-none">
                        {/* Top Concave Fillet */}
                        <svg
                          className="absolute -left-[18px] top-0 w-[18px] h-[18px]"
                          viewBox="0 0 18 18"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path d="M 18 0 L 0 0 Q 18 0 18 18 Z" fill="#ffffff" />
                        </svg>

                        {/* White Badge holding the Icon */}
                        <div className="w-[68px] h-[56px] sm:w-[76px] sm:h-[62px] bg-white rounded-bl-[22px] flex items-center justify-center shadow-xs">
                          <Icon
                            className={`w-6 h-6 sm:w-7 sm:h-7 stroke-[1.8] ${card.animClass}`}
                            style={{ color: card.brandColor }}
                          />
                        </div>

                        {/* Right Concave Fillet */}
                        <svg
                          className="absolute -bottom-[18px] right-0 w-[18px] h-[18px]"
                          viewBox="0 0 18 18"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path d="M 18 0 L 18 18 Q 18 0 0 0 Z" fill="#ffffff" />
                        </svg>
                      </div>
                    </div>

                    {/* Middle: Heading with Thin Horizontal Underline & Description */}
                    <div className="my-auto pt-2">
                      <h3 className="text-xl sm:text-2xl font-bold font-['Outfit'] mb-2.5 tracking-tight text-white text-center">
                        {card.title}
                      </h3>

                      {/* Horizontal underline accent directly below heading */}
                      <div className="w-16 h-0.5 bg-white/75 mx-auto mb-4" />

                      <p className="text-xs sm:text-sm leading-relaxed mb-6 text-white/90 text-center font-light">
                        {card.desc}
                      </p>
                    </div>

                    {/* Bottom: Read More Action Link */}
                    <div className="mt-auto pt-4 border-t border-white/20 flex items-center justify-center">
                      <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wide text-white group-hover:text-white/80 transition-colors">
                        <span>Read More</span>
                        <span className="text-base font-normal group-hover:translate-x-1.5 transition-transform duration-300">
                          &rarr;
                        </span>
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Default Home Page View (Preserved)
  return (
    <section id="services-section" className="relative py-20 lg:py-28 bg-[#00153f] overflow-hidden text-slate-100">
      
      {/* Background Watermark Typography */}
      <div className="watermark-text">
        CAPABILITIES
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 z-10">
        
        {/* Top Header Row matching Realar template */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 sm:mb-16 gap-6">
          <div>
            <h2
              className="text-[32px] sm:text-[38px] font-extrabold text-white font-['Outfit'] tracking-tight"
              style={{ fontSize: '38px' }}
            >
              Featured Services &amp; Systems
            </h2>
            <p className="mt-3 text-slate-400 max-w-xl text-sm sm:text-base leading-relaxed">
              We are an engineering firm with over 17 years of expertise, and our main goal is to provide amazing climate solutions to our partners and clients.
            </p>
          </div>

          <button
            onClick={onViewAllServices}
            className="self-start md:self-auto px-6 py-3 bg-transparent border border-white rounded-[3px] text-white hover:bg-white hover:text-slate-950 font-[300] text-sm tracking-wide transition-all shadow-md flex items-center gap-2 active:scale-95 shrink-0 cursor-pointer"
          >
            <span className="font-[300]">All Services</span>
            <LongTailArrowRight className="w-6 h-3 stroke-[1]" strokeWidth={1} />
          </button>
        </div>

        {/* 6 Clean White Cards Grid with Centered Animated Icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((card, idx) => {
            const Icon = card.icon;

            return (
              <div
                key={idx}
                onClick={onViewAllServices}
                className={`shining-border-card group ${onViewAllServices ? 'cursor-pointer' : ''}`}
                style={{ animationDelay: `${idx * -1}s` }}
              >
                <div className="shining-border-inner p-8 sm:p-9 flex flex-col justify-between overflow-hidden">
                  {/* Subtle Background Watermark Illustration */}
                  <div
                    className="absolute -top-3 -right-3 pointer-events-none select-none text-[#c05e32]/[0.07] transition-transform duration-500 group-hover:scale-110"
                    aria-hidden="true"
                  >
                    <Icon className="w-36 h-36 stroke-[0.9]" />
                  </div>

                  <div>
                    {/* Centered Top Icon Badge with Smooth Animation & Sleek 1px Stroke */}
                    <div className="flex justify-center mb-6">
                      <div className="w-14 h-14 rounded-full bg-[#fbf5f1] border border-[#f3ded2] text-[#c05e32] group-hover:bg-[#c05e32] group-hover:text-white group-hover:scale-110 shadow-sm flex items-center justify-center transition-all duration-300">
                        <Icon className={`w-6 h-6 stroke-[1] ${card.animClass}`} strokeWidth={1} />
                      </div>
                    </div>

                    {/* Card Title */}
                    <h3 className="text-xl sm:text-2xl font-bold font-['Outfit'] mb-3 tracking-tight text-[#0f172a] group-hover:text-[#c05e32] transition-colors">
                      {card.title}
                    </h3>

                    {/* Card Description */}
                    <p className="text-xs sm:text-sm leading-relaxed mb-8 text-slate-600">
                      {card.desc}
                    </p>
                  </div>

                  {/* Bottom Read More Link */}
                  <div className="pt-2 border-t border-transparent flex items-center">
                    <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wide text-[#0f172a] group-hover:text-[#c05e32] transition-colors">
                      <span>Read More</span>
                      <span className="text-base font-normal group-hover:translate-x-1.5 transition-transform duration-300">
                        &rarr;
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
};
