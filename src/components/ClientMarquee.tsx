import React, { useState } from 'react';
import { LayoutGrid, Play } from 'lucide-react';

export interface ClientItem {
  id: string;
  name: string;
  logoUrl: string;
  sector: string;
}

export const CLIENTS_FROM_IMAGE: ClientItem[] = [
  // Row 1 from Screenshot
  { id: 'wikas', name: 'WIKAS Packaging Industries LLP', logoUrl: '/clients/wikas.png', sector: 'Industrial Packaging' },
  { id: 'cyrus', name: 'Cyrus Processing India (P) Ltd.', logoUrl: '/clients/cyrus.png', sector: 'Food & Dairy Processing' },
  { id: 'solitaire', name: 'SOLITAIRE', logoUrl: '/clients/solitaire.png', sector: 'Luxury Real Estate' },
  { id: 'magarpatta', name: 'MAGARPATTA CITY', logoUrl: '/clients/magarpatta.png', sector: 'Smart Megacity & SEZ' },
  { id: 'guardian', name: 'Guardian Developers', logoUrl: '/clients/guardian.png', sector: 'Real Estate & Infrastructure' },
  { id: 'symbiosis', name: 'Symbiosis International University', logoUrl: '/clients/symbiosis.png', sector: 'Education Campus' },

  // Row 2 from Screenshot
  { id: 'bajaj_finserv', name: 'Bajaj Finserv', logoUrl: '/clients/bajaj_finserv.png', sector: 'Financial Services' },
  { id: 'bombay_brasserie', name: 'Bombay Brasserie', logoUrl: '/clients/bombay_brasserie.png', sector: 'Hospitality & Dining' },
  { id: 'nanded_city', name: 'Nanded City, Pune', logoUrl: '/clients/nanded_city.png', sector: 'Township Infrastructure' },
  { id: 'tcs_colorful', name: 'Tata Consultancy Services (TCS)', logoUrl: '/clients/tcs_colorful.png', sector: 'IT Services & Consulting' },

  // Row 3 from Screenshot
  { id: 'irish_house', name: 'The Irish House', logoUrl: '/clients/irish_house.png', sector: 'Hospitality & F&B' },
  { id: 'abs_fitness', name: 'ABS Fitness & Wellness Club', logoUrl: '/clients/abs_fitness.png', sector: 'Fitness & Wellness' },
  { id: 'patil_hospital', name: 'Dr. Pratibha Patil Hospital', logoUrl: '/clients/patil_hospital.png', sector: 'Super Speciality Healthcare' },
  { id: 'tata_consultancy', name: 'Tata Consultancy Services', logoUrl: '/clients/tata_consultancy.png', sector: 'Enterprise IT Solutions' },
  { id: 'sakal', name: 'Sakal Media Group', logoUrl: '/clients/sakal.png', sector: 'Print, TV & Online Media' },
  { id: 'vulkan', name: 'Vulkan Technologies', logoUrl: '/clients/vulkan.png', sector: 'Engineering Components' },

  // Row 4 from Screenshot
  { id: 'essar', name: 'Essar Group', logoUrl: '/clients/essar.png', sector: 'Infrastructure & Steel' },
  { id: 'orbett', name: 'Orbett Hotels', logoUrl: '/clients/orbett.png', sector: 'Hospitality & Banquets' },
  { id: 'neologic', name: 'Neologic Engineers', logoUrl: '/clients/neologic.png', sector: 'Quality & Energy Solutions' },
  { id: 'hoerbiger', name: 'Hoerbiger India', logoUrl: '/clients/hoerbiger.png', sector: 'Compression Technology' },
  { id: 'syntel', name: 'Syntel', logoUrl: '/clients/syntel.png', sector: 'Information Technology' },
  { id: 'pps_motors', name: 'PPS Motors Pvt. Ltd.', logoUrl: '/clients/pps_motors.png', sector: 'Automotive Dealerships' },

  // Row 5 from Screenshot
  { id: 'grand_rio', name: 'Grand Rio', logoUrl: '/clients/grand_rio.png', sector: 'Hospitality & Resorts' },
  { id: 'mahalaxmi', name: 'Mahalaxmi Auto', logoUrl: '/clients/mahalaxmi.png', sector: 'Automotive Logistics' },
  { id: 'horiba', name: 'Horiba India', logoUrl: '/clients/horiba.png', sector: 'Precision Instruments' },
  { id: 'schindler', name: 'Schindler Elevators', logoUrl: '/clients/schindler.png', sector: 'Building Tech & Elevators' },
  { id: 'hyundai', name: 'Hyundai Heavy Industries', logoUrl: '/clients/hyundai.png', sector: 'Automotive & Heavy Industry' },

  // Row 6 from Screenshot
  { id: 'dugad', name: 'Dugad Group', logoUrl: '/clients/dugad.png', sector: 'Industrial Real Estate' },
  { id: 'valiant', name: 'Valiant TMS', logoUrl: '/clients/valiant.png', sector: 'Automation Systems' },
  { id: 'denyo', name: 'Denyo India Pvt. Ltd.', logoUrl: '/clients/denyo.png', sector: 'Power Systems' },
  { id: 'shree_guruji', name: 'Shree Guruji Sahakar Rugnalaya', logoUrl: '/clients/shree_guruji.png', sector: 'Healthcare & Trust' },
  { id: 'pushpa', name: 'Pushpa International School', logoUrl: '/clients/pushpa.png', sector: 'Education Campus' },
];

export const ClientMarquee: React.FC = () => {
  const [viewMode, setViewMode] = useState<'marquee' | 'grid'>('marquee');

  const row1 = CLIENTS_FROM_IMAGE.slice(0, 16);
  const row2 = CLIENTS_FROM_IMAGE.slice(16, 32);

  return (
    <section className="relative py-14 sm:py-20 bg-white border-t border-b border-slate-200 overflow-hidden">
      
      {/* Background Watermark Typography */}
      <div className="watermark-text-light !left-8 sm:!left-14 lg:!left-20 !top-2 text-slate-900/[0.05] select-none pointer-events-none">
        CLIENTS
      </div>

      {/* Section Header */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
        <h2
          className="text-[32px] sm:text-[38px] font-extrabold text-[#00153f] font-['Outfit'] tracking-wider uppercase"
          style={{ fontSize: '38px' }}
        >
          OUR CLIENTS
        </h2>

        {/* Accent Horizontal Line */}
        <div className="w-14 h-0.5 bg-[#c05e32] mx-auto mt-3 mb-4" />

        <p className="text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
          Trusted by Maharashtra&apos;s leading enterprises, industrial facilities, IT campuses, and luxury hospitality landmarks for mission-critical HVAC solutions.
        </p>

        {/* View Mode Switcher */}
        <div className="mt-5 flex items-center justify-center">
          <button
            onClick={() => setViewMode(prev => (prev === 'grid' ? 'marquee' : 'grid'))}
            style={{ fontSize: '10.8px' }}
            className="px-2.5 py-1 text-[10.8px] font-semibold tracking-wide text-slate-500 hover:text-[#00153f] bg-transparent border-0 border-none outline-none ring-0 shadow-none transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            {viewMode === 'grid' ? (
              <>
                <Play className="fill-current" style={{ width: '11px', height: '11px' }} />
                <span>Show Moving Showcase (Carousel)</span>
              </>
            ) : (
              <>
                <LayoutGrid style={{ width: '11px', height: '11px' }} />
                <span>All 32 Clients (Grid)</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Dual Row Marquee Presentation */}
      {viewMode === 'marquee' ? (
        <div className="relative space-y-4 py-2">
          {/* Gradient Fade Edges for Marquee ONLY */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-r from-white via-white/85 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-l from-white via-white/85 to-transparent z-10 pointer-events-none" />

          {/* Row 1: Leftward Scroll */}
          <div className="overflow-hidden">
            <div className="animate-marquee flex items-center gap-6 sm:gap-10">
              {row1.concat(row1).map((client, idx) => (
                <div
                  key={`row1-${client.id}-${idx}`}
                  title={`${client.name} - ${client.sector}`}
                  className="h-20 sm:h-24 w-36 sm:w-48 px-4 py-3 rounded-2xl bg-white hover:bg-slate-50/80 transition-all duration-300 flex items-center justify-center shrink-0 group cursor-pointer"
                >
                  <img
                    src={client.logoUrl}
                    alt={client.name}
                    className="max-h-12 sm:max-h-14 max-w-[88%] w-auto object-contain transition-transform duration-300 group-hover:scale-110 filter contrast-[1.02]"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Leftward Scroll (Right to Left) */}
          <div className="overflow-hidden">
            <div className="animate-marquee flex items-center gap-6 sm:gap-10">
              {row2.concat(row2).map((client, idx) => (
                <div
                  key={`row2-${client.id}-${idx}`}
                  title={`${client.name} - ${client.sector}`}
                  className="h-20 sm:h-24 w-36 sm:w-48 px-4 py-3 rounded-2xl bg-white hover:bg-slate-50/80 transition-all duration-300 flex items-center justify-center shrink-0 group cursor-pointer"
                >
                  <img
                    src={client.logoUrl}
                    alt={client.name}
                    className="max-h-12 sm:max-h-14 max-w-[88%] w-auto object-contain transition-transform duration-300 group-hover:scale-110 filter contrast-[1.02]"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* Static Grid View matching the Screenshot Look and Feel */
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8 items-center justify-items-center">
              {CLIENTS_FROM_IMAGE.map((client) => (
                <div
                  key={`grid-${client.id}`}
                  title={`${client.name} - ${client.sector}`}
                  className="h-20 sm:h-24 w-full px-3 py-3 rounded-xl flex items-center justify-center group cursor-pointer transition-all duration-300 hover:bg-slate-50/80"
                >
                  <img
                    src={client.logoUrl}
                    alt={client.name}
                    className="max-h-12 sm:max-h-14 max-w-[85%] w-auto object-contain transition-transform duration-300 group-hover:scale-110 filter contrast-[1.02]"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
