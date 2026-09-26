import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Wind,
  Droplets,
  Flame,
  ShieldCheck,
  Activity,
  Fan,
  Cpu,
  Wrench,
  Gauge,
  Layers,
  MoveLeft,
  MoveRight
} from 'lucide-react';
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
  const [activeCapabilityIdx, setActiveCapabilityIdx] = useState(0);

  // Capabilities Page Services Array (6 services matching the Home Page services)
  const capabilitiesServices = [
    {
      id: 'vrv-vrf',
      serviceType: 'new_install' as const,
      step: '01',
      title: 'VRV & VRF Central Systems',
      desc: 'Engineered for enterprise towers, IT parks, and luxury residential estates, our Variable Refrigerant Volume (VRV/VRF) installations deliver synchronized heating and cooling with precision inverter modulation, reducing operational energy overhead by up to 30% while maintaining independent zone temperature control across hundreds of connected indoor units.',
      deliverables: [
        'Simultaneous heating & cooling heat recovery architecture',
        'Extended refrigerant piping up to 1,000m total network length',
        'Intelligent Building Management System (BMS) integration via BACnet',
        'Daikin & Voltas Tier-1 certified turnkey deployment standards'
      ],
      icon: Wind,
      animClass: 'animate-hvac-wind',
      image: '/assets/vrv-vrf-central-systems.jpg',
      equipmentTag: 'Daikin & Voltas VRV/VRF',
      equipmentSubtitle: 'Modular Inverter Condensing Units • Up to 1,000m Refrigerant Piping'
    },
    {
      id: 'ventilation',
      serviceType: 'new_install' as const,
      step: '02',
      title: 'Basement Ventilation & Safety',
      desc: 'Multi-level underground parking facilities and industrial utility basements demand precision air distribution to prevent toxic gas accumulation. We engineer NBC 2016 and ISHRAE-compliant basement ventilation systems incorporating automated Carbon Monoxide (CO) sensor monitoring and 300°C fire-rated smoke evacuation.',
      deliverables: [
        'Computational Fluid Dynamics (CFD) airflow modeling for zero dead-zones',
        'Dual-speed 300°C / 2-hour fire-rated smoke spill and fresh air supply fans',
        'Automated multi-level Carbon Monoxide (CO) sensor monitoring networks',
        'Energy-saving demand-controlled variable speed fan operation'
      ],
      icon: Fan,
      animClass: 'animate-hvac-fan',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
      equipmentTag: 'NBC 2016 Fire Safety',
      equipmentSubtitle: '300°C Fire Smoke Spill • Dual-Speed Induction Jet Ventilation'
    },
    {
      id: 'chillers',
      serviceType: 'new_install' as const,
      step: '03',
      title: 'Central Chiller Plant Systems',
      desc: 'Designed for high-tonnage industrial campuses, data centers, and multi-tenant commercial towers, our central chiller solutions encompass air-cooled and water-cooled screw and centrifugal systems with primary-secondary pumping loops and automated staging algorithms.',
      deliverables: [
        'High-tonnage water-cooled and air-cooled screw/centrifugal installations',
        'Primary-secondary variable speed chilled water pumping and hydraulic balancing',
        'Induced draft cooling tower integration with automated water treatment',
        'Real-time plant COP (Coefficient of Performance) monitoring and staging'
      ],
      icon: Droplets,
      animClass: 'animate-hvac-droplet',
      image: '/assets/central-chiller-plant-systems.jpg',
      equipmentTag: 'Central Chiller Plant',
      equipmentSubtitle: 'Water-Cooled Centrifugal Loops • Primary-Secondary Pumping Balancing'
    },
    {
      id: 'cleanroom',
      serviceType: 'new_install' as const,
      step: '04',
      title: 'Cleanroom AHU & Air Quality',
      desc: 'Critical environments such as pharmaceutical manufacturing facilities and hospital operating suites require rigorous atmospheric containment. We engineer Class 10k and Class 100k cleanroom AHUs featuring multi-stage HEPA filtration, positive pressure cascades, and tight relative humidity control.',
      deliverables: [
        'ISO Class 5 to Class 8 (Class 100 to 100,000) cleanroom validation standards',
        'Multi-stage filtration: pre-filters, fine bag filters, and 99.99% terminal HEPA',
        'Precision room differential pressure cascade balancing across clean zones',
        'Dehumidification and steam injection for tight ±5% relative humidity regulation'
      ],
      icon: Activity,
      animClass: 'animate-hvac-pulse',
      image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=1200&q=80',
      equipmentTag: 'ISO Class 5-8 Cleanroom',
      equipmentSubtitle: '99.99% Terminal HEPA Filtration • Positive Differential Cascades'
    },
    {
      id: 'amc',
      serviceType: 'amc' as const,
      step: '05',
      title: 'Annual Maintenance Contracts',
      desc: 'Preventive lifecycle assurance designed to eliminate unexpected breakdowns and protect capital HVAC investments. Our structured AMC plans follow a rigorous 3-visit methodology encompassing two deep dry services and one high-pressure chemical coil wash per year, reducing electricity draw by up to 20%.',
      deliverables: [
        '3 scheduled preventive visits per year (2 Dry cleaning + 1 Wet chemical descaling)',
        'Full electrical diagnostics: compressors, contactors, capacitors, relays, and amps',
        'Priority 60-minute emergency breakdown SLA dispatch across Pune municipal limits',
        'Comprehensive, Semi-Comprehensive, and Labour AMC coverage frameworks'
      ],
      icon: ShieldCheck,
      animClass: 'animate-hvac-shield',
      image: '/assets/amc-banner.jpg',
      equipmentTag: '3-Visit Preventive AMC',
      equipmentSubtitle: 'Daikin VRV Precision Servicing • High-Pressure Chemical Coil Wash'
    },
    {
      id: 'emergency',
      serviceType: 'emergency' as const,
      step: '06',
      title: '24/7 Breakdown & Repair SLA',
      desc: 'When unexpected cooling halts or compressor failures threaten operational continuity in server rooms, hospitals, or commercial facilities, every minute counts. Our dedicated 24/7 emergency response unit operates with a guaranteed 60 to 90-minute on-site dispatch time across Pune and PCMC municipal belts.',
      deliverables: [
        'Guaranteed 60 to 90-minute on-site dispatch across Pune & PCMC municipal belts',
        'Stocked mobile inventory of genuine OEM compressors, relays, VFDs, and sensors',
        'Electronic halogen leak detection and high-pressure nitrogen line testing',
        '24/7 dedicated engineering hotline (+91 772000 7392) with zero dispatch delay'
      ],
      icon: Flame,
      animClass: 'animate-hvac-flame',
      image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80',
      equipmentTag: '60-90 Min Emergency SLA',
      equipmentSubtitle: 'Stocked OEM Compressors & VFDs • Immediate On-Site Dispatch'
    }
  ];

  const cards = [
    {
      id: 'vrv-vrf',
      serviceType: 'new_install' as const,
      step: '01',
      title: 'VRV & VRF Central Systems',
      shortDesc: 'Rapidly coordinate cross-platform HVAC intellectual capital models. Appropriately create interactive climate infrastructures across commercial towers and IT hubs.',
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
      shortDesc: 'NBC and ISHRAE compliant smart air distribution systems, automated CO monitoring, and 300°C fire-rated smoke evacuation for Pune high-rises.',
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
      shortDesc: 'High-tonnage thermodynamic plant design, water-cooled and air-cooled screw chillers, precision hydraulic balancing, and automated industrial chiller management.',
      desc: 'Designed for high-tonnage industrial campuses, data centers, and multi-tenant commercial towers, our central chiller solutions encompass air-cooled and water-cooled screw and centrifugal systems. We provide comprehensive thermodynamic plant blueprints, primary-secondary variable pumping loops, cooling tower hydraulic balancing, and automated staging algorithms that optimize partial-load operations and minimize kilowatt-per-ton power consumption.',
      deliverables: [
        'High-tonnage water-cooled and air-cooled screw/centrifugal installations',
        'Primary-secondary variable speed chilled water pumping and hydraulic balancing',
        'Induced draft cooling tower integration with automated water treatment',
        'Real-time plant COP (Coefficient of Performance) monitoring and staging'
      ],
      icon: Droplets,
      animClass: 'animate-hvac-droplet',
      brandBg: 'bg-gradient-to-br from-[#b35327] via-[#c25c2d] to-[#994119]',
      brandColor: '#b35327'
    },
    {
      id: 'cleanroom',
      serviceType: 'new_install' as const,
      step: '04',
      title: 'Cleanroom AHU & Air Quality',
      shortDesc: 'Class 10k/100k HEPA filtration, positive air pressurisation, humidity control, and microbiological contamination control for hospitals and cleanroom labs.',
      desc: 'Critical environments such as pharmaceutical manufacturing facilities, hospital operating suites, and microelectronics cleanrooms require rigorous atmospheric containment. We engineer Class 10k and Class 100k cleanroom air handling units (AHUs) featuring multi-stage HEPA filtration, positive pressure cascades, tight relative humidity control, and laminar airflow patterns that safeguard against airborne microbiological contamination.',
      deliverables: [
        'ISO Class 5 to Class 8 (Class 100 to 100,000) cleanroom validation standards',
        'Multi-stage filtration: pre-filters, fine bag filters, and 99.99% terminal HEPA',
        'Precision room differential pressure cascade balancing across clean zones',
        'Dehumidification and steam injection for tight ±5% relative humidity regulation'
      ],
      icon: Activity,
      animClass: 'animate-hvac-pulse',
      brandBg: 'bg-gradient-to-br from-[#092866] via-[#0d3688] to-[#061d4d]',
      brandColor: '#092866'
    },
    {
      id: 'amc',
      serviceType: 'amc' as const,
      step: '05',
      title: 'Annual Maintenance Contracts',
      shortDesc: 'Structured 3-visit lifecycle assurance with two dry services and one deep chemical coil wash, ensuring 20% lower electricity draw and zero unplanned downtime.',
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
      shortDesc: 'Rapidly deploy on-site certified engineering technicians with stocked OEM compressors, refrigerants, and diagnostic kits across Pune municipal limits.',
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

  // Capabilities Page Layout: Matches exact reference image style ("What we do?", boxed number, title + line + description + More Info, duotone image)
  if (isCapabilities) {
    const activeCard = capabilitiesServices[activeCapabilityIdx];
    const ActiveIcon = activeCard.icon;

    return (
      <section
        id="services-section"
        data-theme="light"
        className="relative bg-[#edf6fc] text-slate-800 overflow-hidden py-16 sm:py-20 lg:py-24 border-t border-b border-slate-200"
      >
        {/* Subtle Watermark in background */}
        <div className="watermark-text-light select-none pointer-events-none text-slate-900/[0.035]">
          CAPABILITIES
        </div>

        {/* Ambient Subtle Glow */}
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#c05e32]/8 rounded-full blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="w-full pl-20 sm:pl-24 lg:pl-28 xl:pl-32 pr-16 sm:pr-20 lg:pr-24 xl:pr-28 relative z-10">
          
          {/* Header: "Capabilities" */}
          <div className="mb-10 sm:mb-14 lg:mb-16">
            <h2 className="text-[32px] sm:text-[38px] font-general-sans font-bold tracking-tight leading-none text-[#00153f]">
              Capabilities
            </h2>
          </div>

          {/* Main 3-Part Layout: [Numbers 01..06] | [Active Detail] | [Right Hero Visual] */}
          <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-12 xl:gap-16">
            
            {/* Left Column: Sleek Animated Icons Selector for each service */}
            <div className="flex flex-row lg:flex-col gap-3 sm:gap-3.5 shrink-0 overflow-x-auto lg:overflow-visible w-full lg:w-auto pb-2 lg:pb-0">
              {capabilitiesServices.map((item, idx) => {
                const isSelected = activeCapabilityIdx === idx;
                const ServiceIcon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveCapabilityIdx(idx)}
                    className={`transition-all duration-300 flex items-center justify-center cursor-pointer select-none group relative ${
                      isSelected
                        ? 'w-[55px] h-[55px] sm:w-[68px] sm:h-[68px] border-2 border-[#c05e32] shadow-[0_0_20px_rgba(192,94,50,0.18)] bg-[#c05e32]/10 rounded-[2px]'
                        : 'w-[55px] h-[55px] sm:w-[68px] sm:h-[68px] border border-transparent hover:border-slate-300/60 hover:bg-white/50 rounded-[2px]'
                    }`}
                    title={item.title}
                    aria-label={`Select service: ${item.title}`}
                    aria-selected={isSelected}
                  >
                    <ServiceIcon
                      strokeWidth={1}
                      className={`w-7 h-7 sm:w-8 sm:h-8 stroke-[1] transition-all duration-300 ${
                        isSelected
                          ? `text-[#c05e32] ${item.animClass}`
                          : `text-slate-400 group-hover:text-[#00153f] ${item.animClass}`
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Middle Column: Active Service Details matching reference */}
            <div className="flex-1 max-w-xl lg:pt-1">
              
              {/* Active Service Title in General Sans, reduced size by 15% and weight by 5% */}
              <h3 className="text-[25px] sm:text-[29px] font-general-sans font-semibold text-[#00153f] tracking-tight leading-snug">
                {activeCard.title}
              </h3>

              {/* Clean Horizontal Divider Line */}
              <div className="w-full h-px bg-slate-300 my-5 sm:my-6" />

              {/* Active Service Description */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                {activeCard.desc}
              </p>

              {/* Key Deliverables Bullet Points */}
              <ul className="space-y-2.5 mb-8">
                {activeCard.deliverables.map((item, dIdx) => (
                  <li key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-normal">
                    <span className="inline-flex items-center shrink-0 w-[15px] h-4 mt-0.5 sm:mt-1" aria-hidden="true">
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
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Enquire Now Button aligned to the right under deliverables */}
              <div className="flex justify-end">
                <button
                  onClick={() => onOpenBooking && onOpenBooking(activeCard.serviceType)}
                  className="px-8 py-3 rounded-[3px] border border-[#00153f]/70 bg-transparent hover:bg-[#00153f] text-[#00153f] hover:text-white text-sm font-medium transition-all duration-300 cursor-pointer shadow-sm inline-flex items-center gap-2.5 group hover:shadow-md"
                >
                  <span>Enquire Now</span>
                  <LongTailArrowRight className="w-4 h-2.5 stroke-[1] group-hover:translate-x-1 transition-transform" strokeWidth={1} />
                </button>
              </div>

            </div>

            {/* Right Column: Hero Visual Managed According to Content */}
            <div className="w-full lg:w-[44%] xl:w-[42%] shrink-0 relative">
              
              {/* Main Image Container */}
              <div className="relative overflow-hidden aspect-[4/3] lg:aspect-[16/13] rounded-2xl border border-slate-300/80 shadow-xl bg-[#00153f] group transition-all duration-500 hover:shadow-2xl hover:border-[#c05e32]/50">
                <img
                  key={activeCard.id}
                  src={activeCard.image}
                  alt={activeCard.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.98] contrast-[1.03]"
                />

                {/* Top-Right Floating Animated HVAC Icon */}
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-[#00153f]/85 backdrop-blur-md border border-[#c05e32]/50 flex items-center justify-center text-white shadow-xl z-10 group-hover:scale-110 transition-transform">
                  <ActiveIcon className={`w-6 h-6 stroke-[1] ${activeCard.animClass}`} strokeWidth={1} />
                </div>
              </div>

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
                      {card.shortDesc}
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
