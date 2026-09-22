import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Wind, Droplets, Flame, ShieldCheck, Activity, Fan, CheckCircle2 } from 'lucide-react';
import { LongTailArrowRight } from './LongTailArrow';
import { ServiceItem } from '../types';
import { SERVICES_DATA } from '../data/hvacData';

interface ServicesSectionProps {
  onSelectService?: (service: ServiceItem) => void;
  onOpenBooking?: (type?: 'emergency' | 'repair' | 'amc' | 'new_install') => void;
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
  const [selectedFilter, setSelectedFilter] = useState<'all' | string>('all');

  const cards = [
    {
      id: 'vrv-vrf',
      serviceType: 'new_install' as const,
      step: '01',
      title: 'VRV & VRF Central Systems',
      desc: 'Engineered for enterprise towers, IT parks, and luxury residential estates, our Variable Refrigerant Volume (VRV/VRF) installations deliver synchronized heating and cooling with precision inverter modulation. We design multi-split refrigerant flow architectures that dynamically adjust compressor frequency to match live building thermal loads, reducing operational energy overhead by up to 30% while maintaining independent zone temperature control across hundreds of connected indoor units.',
      deliverables: [
        'Simultaneous heating & cooling heat recovery architecture',
        'Extended refrigerant piping up to 1,000m total network length',
        'Intelligent Building Management System (BMS) integration via BACnet',
        'Daikin & Voltas Tier-1 certified turnkey deployment standards'
      ],
      icon: Wind,
      animClass: 'animate-hvac-wind',
      brandBg: 'bg-gradient-to-br from-[#00153f] via-[#001f5c] to-[#001033]',
      brandColor: '#00153f'
    },
    {
      id: 'ventilation',
      serviceType: 'new_install' as const,
      step: '02',
      title: 'Basement Ventilation & Safety',
      desc: 'Multi-level underground parking facilities and industrial utility basements demand precision air distribution to prevent toxic gas accumulation and guarantee life safety in fire emergencies. We engineer NBC 2016 and ISHRAE-compliant basement ventilation systems incorporating automated Carbon Monoxide (CO) sensor monitoring, high-thrust induction jet fans, and 300°C fire-rated smoke evacuation systems that automatically activate to maintain clean, tenable escape routes.',
      deliverables: [
        'Computational Fluid Dynamics (CFD) airflow modeling for zero dead-zones',
        'Dual-speed 300°C / 2-hour fire-rated smoke spill and fresh air supply fans',
        'Automated multi-level Carbon Monoxide (CO) sensor monitoring networks',
        'Energy-saving demand-controlled variable speed fan operation'
      ],
      icon: Fan,
      animClass: 'animate-hvac-fan group-hover:[animation-duration:2.5s]',
      brandBg: 'bg-gradient-to-br from-[#c05e32] via-[#cf6738] to-[#a84c22]',
      brandColor: '#c05e32'
    },
    {
      id: 'chillers',
      serviceType: 'new_install' as const,
      step: '03',
      title: 'Central Chiller Plant Systems',
      desc: 'Designed for high-tonnage industrial campuses, data centers, and multi-tenant commercial towers, our central chiller solutions encompass air-cooled and water-cooled screw and centrifugal systems. We provide comprehensive thermodynamic plant blueprints, primary-secondary variable pumping loops, cooling tower hydraulic balancing, and automated staging algorithms that optimize partial-load operations and minimize kilowatt-per-ton power consumption.',
      deliverables: [
        'High-tonnage water-cooled and air-cooled screw/centrifugal installations',
        'Primary-secondary variable speed chilled water pumping and hydraulic balancing',
        'Induced draft cooling tower integration with automated water treatment',
        'Real-time plant COP (Coefficient of Performance) monitoring and staging'
      ],
      icon: Droplets,
      animClass: 'animate-hvac-droplet',
      brandBg: 'bg-gradient-to-br from-[#092866] via-[#0d3688] to-[#061d4d]',
      brandColor: '#092866'
    },
    {
      id: 'cleanroom',
      serviceType: 'new_install' as const,
      step: '04',
      title: 'Cleanroom AHU & Air Quality',
      desc: 'Critical environments such as pharmaceutical manufacturing facilities, hospital operating suites, and microelectronics cleanrooms require rigorous atmospheric containment. We engineer Class 10k and Class 100k cleanroom air handling units (AHUs) featuring multi-stage HEPA filtration, positive pressure cascades, tight relative humidity control, and laminar airflow patterns that safeguard against airborne microbiological contamination.',
      deliverables: [
        'ISO Class 5 to Class 8 (Class 100 to 100,000) cleanroom validation standards',
        'Multi-stage filtration: pre-filters, fine bag filters, and 99.99% terminal HEPA',
        'Precision room differential pressure cascade balancing across clean zones',
        'Dehumidification and steam injection for tight ±5% relative humidity regulation'
      ],
      icon: Activity,
      animClass: 'animate-hvac-pulse',
      brandBg: 'bg-gradient-to-br from-[#b35327] via-[#c25c2d] to-[#994119]',
      brandColor: '#b35327'
    },
    {
      id: 'amc',
      serviceType: 'amc' as const,
      step: '05',
      title: 'Annual Maintenance Contracts',
      desc: 'Preventive lifecycle assurance designed to eliminate unexpected breakdowns and protect capital HVAC investments. Our structured AMC plans follow a rigorous 3-visit methodology encompassing two deep dry services and one high-pressure chemical coil wash per year. Each visit includes electrical diagnostic testing, refrigerant pressure benchmarking, and coil descaling to maintain peak thermodynamic efficiency and reduce electricity draw by up to 20%.',
      deliverables: [
        '3 scheduled preventive visits per year (2 Dry cleaning + 1 Wet chemical descaling)',
        'Full electrical diagnostics: compressors, contactors, capacitors, relays, and amps',
        'Priority 60-minute emergency breakdown SLA dispatch across Pune municipal limits',
        'Comprehensive, Semi-Comprehensive, and Labour AMC coverage frameworks'
      ],
      icon: ShieldCheck,
      animClass: 'animate-hvac-shield',
      brandBg: 'bg-gradient-to-br from-[#133873] via-[#1a4b99] to-[#0c2754]',
      brandColor: '#133873'
    },
    {
      id: 'emergency',
      serviceType: 'emergency' as const,
      step: '06',
      title: '24/7 Breakdown & Repair SLA',
      desc: 'When unexpected cooling halts or compressor failures threaten operational continuity in server rooms, hospitals, or commercial facilities, every minute counts. Our dedicated 24/7 emergency response unit operates with a guaranteed 60 to 90-minute on-site dispatch time across Pune and PCMC municipal belts. Mobile service teams arrive equipped with OEM compressors, certified eco-friendly refrigerants, and advanced nitrogen leak-detection systems for immediate resolution.',
      deliverables: [
        'Guaranteed 60 to 90-minute on-site dispatch across Pune & PCMC municipal belts',
        'Stocked mobile inventory of genuine OEM compressors, relays, VFDs, and sensors',
        'Electronic halogen leak detection and high-pressure nitrogen line testing',
        '24/7 dedicated engineering hotline (+91 772000 7392) with zero dispatch delay'
      ],
      icon: Flame,
      animClass: 'animate-hvac-flame',
      brandBg: 'bg-gradient-to-br from-[#c85e32] via-[#d86c3b] to-[#ab4c22]',
      brandColor: '#c85e32'
    }
  ];

  // Capabilities Page Layout: Accommodating full paragraphs & deliverables with the best design
  if (isCapabilities) {
    const displayedCards = selectedFilter === 'all'
      ? cards
      : cards.filter((c) => c.id === selectedFilter);

    return (
      <section
        id="services-section"
        className="relative py-16 sm:py-20 lg:py-24 bg-[#f4f7fb] overflow-hidden text-[#0f172a] border-t border-b border-slate-200"
      >
        {/* Background Watermark Typography */}
        <div className="watermark-text-light" style={{ opacity: 0.05 }}>
          CAPABILITIES
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 z-10">
          {/* Top Header Row (NO eyebrow text, NO monospace) */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-6">
            <div>
              <h2
                className="text-[32px] sm:text-[38px] font-extrabold text-[#00153f] font-['Outfit'] tracking-tight"
                style={{ fontSize: '38px' }}
              >
                Featured Services &amp; Systems
              </h2>
              <p className="mt-3 text-slate-600 max-w-2xl text-sm sm:text-base leading-relaxed">
                From central chiller plants and commercial VRV/VRF systems to cleanroom AHU pressurisation, basement ventilation, and 24/7 breakdown SLAs across Maharashtra.
              </p>
            </div>
          </div>

          {/* Quick Filter Pill Selector (Clean, NO monospace, NO eyebrow text) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                selectedFilter === 'all'
                  ? 'bg-[#00153f] text-white shadow-md'
                  : 'bg-white text-slate-700 border border-slate-200 hover:border-[#00153f] hover:text-[#00153f]'
              }`}
            >
              All Systems ({cards.length})
            </button>
            {cards.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedFilter(c.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  selectedFilter === c.id
                    ? 'bg-[#00153f] text-white shadow-md'
                    : 'bg-white text-slate-700 border border-slate-200 hover:border-[#00153f] hover:text-[#00153f]'
                }`}
              >
                {c.title}
              </button>
            ))}
          </div>

          {/* Expansive 2-Column Responsive Grid accommodating full paragraphs & deliverables */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {displayedCards.map((card) => {
              const Icon = card.icon;

              return (
                <div
                  key={card.id}
                  className={`rounded-[24px] overflow-hidden relative shadow-xl shadow-slate-900/10 hover:shadow-2xl hover:shadow-slate-900/20 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between p-7 sm:p-9 min-h-[460px] group ${card.brandBg}`}
                >
                  {/* Top Row: STEP Badge on Left & Signature White Notch Cutout on Right */}
                  <div className="flex items-center justify-between mb-6">
                    {/* Step Number (Outfit font, NO monospace) */}
                    <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-white/90 uppercase font-['Outfit']">
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

                      {/* White Badge with Icon */}
                      <div className="w-[74px] h-[60px] sm:w-[82px] sm:h-[66px] bg-white rounded-bl-[22px] flex items-center justify-center shadow-xs">
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

                  {/* Card Title with Underline */}
                  <div className="mb-4 pr-16 sm:pr-20">
                    <h3 className="text-2xl sm:text-[26px] font-extrabold font-['Outfit'] tracking-tight text-white mb-2 leading-snug">
                      {card.title}
                    </h3>
                    <div className="w-16 h-0.5 bg-white/75" />
                  </div>

                  {/* Full Rich Paragraph */}
                  <p className="text-sm sm:text-[15px] leading-relaxed text-white/90 font-light mb-6">
                    {card.desc}
                  </p>

                  {/* Key Deliverables (2x2 Grid) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                    {card.deliverables.map((item, dIdx) => (
                      <div
                        key={dIdx}
                        className="flex items-start gap-2.5 bg-white/[0.08] backdrop-blur-xs border border-white/10 rounded-xl p-2.5 sm:p-3 text-xs sm:text-[13px] text-white/95 leading-snug"
                      >
                        <CheckCircle2 className="w-4 h-4 text-white/85 shrink-0 mt-0.5 stroke-[2]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom Action Footer */}
                  <div className="mt-auto pt-5 border-t border-white/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <button
                      onClick={() => onOpenBooking && onOpenBooking(card.serviceType)}
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wide text-white hover:text-white/80 transition-colors cursor-pointer group-hover:translate-x-1"
                    >
                      <span>Inquire About This System</span>
                      <span className="text-base">&rarr;</span>
                    </button>

                    <span className="text-[11px] sm:text-xs text-white/70 font-medium">
                      Certified Maharashtra Deployment
                    </span>
                  </div>
                </div>
              );
            })}
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
