import React from 'react';
import { Wind, Droplets, Flame, ShieldCheck, Activity, Fan } from 'lucide-react';
import { LongTailArrowRight } from './LongTailArrow';
import { ServiceItem } from '../types';
import { SERVICES_DATA } from '../data/hvacData';

interface ServicesSectionProps {
  onSelectService?: (service: ServiceItem) => void;
  onOpenBooking?: (type?: 'emergency' | 'repair' | 'amc') => void;
  onViewAllServices?: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onOpenBooking,
  onViewAllServices
}) => {
  const cards = [
    {
      serviceIndex: 1, // Turnkey
      title: 'VRV & VRF Central Systems',
      desc: 'Rapidly coordinate cross-platform HVAC intellectual capital models. Appropriately create interactive climate infrastructures across commercial towers and IT hubs.',
      icon: Wind,
      animClass: 'animate-hvac-wind'
    },
    {
      serviceIndex: 1, // Ventilation / Life Safety
      title: 'Basement Ventilation & Safety',
      desc: 'NBC and ISHRAE compliant smart air distribution systems, automated CO monitoring, and 300°C fire-rated smoke evacuation for Pune high-rises.',
      icon: Fan,
      animClass: 'animate-hvac-fan group-hover:[animation-duration:2.5s]'
    },
    {
      serviceIndex: 0, // Design & Consultancy
      title: 'Central Chiller Plant Systems',
      desc: 'High-tonnage thermodynamic plant design, water-cooled and air-cooled screw chillers, precision hydraulic balancing, and automated industrial chiller management.',
      icon: Droplets,
      animClass: 'animate-hvac-droplet'
    },
    {
      serviceIndex: 0, // Cleanroom / Engineering
      title: 'Cleanroom AHU & Air Quality',
      desc: 'Class 10k/100k HEPA filtration, positive air pressurisation, humidity control, and microbiological contamination control for hospitals and cleanroom labs.',
      icon: Activity,
      animClass: 'animate-hvac-pulse'
    },
    {
      serviceIndex: 3, // AMC
      title: 'Annual Maintenance Contracts',
      desc: 'Structured 3-visit lifecycle assurance with two dry services and one deep chemical coil wash, ensuring 20% lower electricity draw and zero unplanned downtime.',
      icon: ShieldCheck,
      animClass: 'animate-hvac-shield'
    },
    {
      serviceIndex: 2, // Emergency
      title: '24/7 Breakdown & Repair SLA',
      desc: 'Rapidly deploy on-site certified engineering technicians with stocked OEM compressors, refrigerants, and diagnostic kits across Pune municipal limits.',
      icon: Flame,
      animClass: 'animate-hvac-flame'
    }
  ];

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
              Featured Services & Systems
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
            const serviceData = SERVICES_DATA[card.serviceIndex];

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
                        →
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
