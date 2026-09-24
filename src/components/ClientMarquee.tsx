import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LongTailArrowRight } from './LongTailArrow';

export interface ClientItem {
  id: string;
  name: string;
  logoUrl: string;
  sector: string;
}

export const CLIENTS_FROM_IMAGE: ClientItem[] = [
  // Row 1 from Reference
  { id: 'wikas', name: 'WIKAS Packaging Industries LLP', logoUrl: '/clients/wikas.png', sector: 'Industrial Packaging' },
  { id: 'cyrus', name: 'Cyrus Processing India (P) Ltd.', logoUrl: '/clients/cyrus.png', sector: 'Food & Dairy Processing' },
  { id: 'solitaire', name: 'SOLITAIRE', logoUrl: '/clients/solitaire.png', sector: 'Luxury Real Estate' },
  { id: 'magarpatta', name: 'MAGARPATTA CITY', logoUrl: '/clients/magarpatta.png', sector: 'Smart Megacity & SEZ' },
  { id: 'guardian', name: 'Guardian Developers', logoUrl: '/clients/guardian.png', sector: 'Real Estate & Infrastructure' },
  { id: 'symbiosis', name: 'Symbiosis International University', logoUrl: '/clients/symbiosis.png', sector: 'Education Campus' },

  // Row 2 from Reference
  { id: 'bajaj_finserv', name: 'Bajaj Finserv', logoUrl: '/clients/bajaj_finserv.png', sector: 'Financial Services' },
  { id: 'bombay_brasserie', name: 'Bombay Brasserie', logoUrl: '/clients/bombay_brasserie.png', sector: 'Hospitality & Dining' },
  { id: 'nanded_city', name: 'Nanded City, Pune', logoUrl: '/clients/nanded_city.png', sector: 'Township Infrastructure' },
  { id: 'tcs_colorful', name: 'Tata Consultancy Services (TCS)', logoUrl: '/clients/tcs_colorful.png', sector: 'IT Services & Consulting' },

  // Row 3 from Reference
  { id: 'irish_house', name: 'The Irish House', logoUrl: '/clients/irish_house.png', sector: 'Hospitality & F&B' },
  { id: 'abs_fitness', name: 'ABS Fitness & Wellness Club', logoUrl: '/clients/abs_fitness.png', sector: 'Fitness & Wellness' },
  { id: 'patil_hospital', name: 'Dr. Pratibha Patil Hospital', logoUrl: '/clients/patil_hospital.png', sector: 'Super Speciality Healthcare' },
  { id: 'tata_consultancy', name: 'Tata Consultancy Services', logoUrl: '/clients/tata_consultancy.png', sector: 'Enterprise IT Solutions' },
  { id: 'sakal', name: 'Sakal Media Group', logoUrl: '/clients/sakal.png', sector: 'Print, TV & Online Media' },
  { id: 'vulkan', name: 'Vulkan Technologies', logoUrl: '/clients/vulkan.png', sector: 'Engineering Components' },

  // Row 4 from Reference
  { id: 'essar', name: 'Essar Group', logoUrl: '/clients/essar.png', sector: 'Infrastructure & Steel' },
  { id: 'orbett', name: 'Orbett Hotels', logoUrl: '/clients/orbett.png', sector: 'Hospitality & Banquets' },
  { id: 'neologic', name: 'Neologic Engineers', logoUrl: '/clients/neologic.png', sector: 'Quality & Energy Solutions' },
  { id: 'hoerbiger', name: 'Hoerbiger India', logoUrl: '/clients/hoerbiger.png', sector: 'Compression Technology' },
  { id: 'syntel', name: 'Syntel', logoUrl: '/clients/syntel.png', sector: 'Information Technology' },
  { id: 'pps_motors', name: 'PPS Motors Pvt. Ltd.', logoUrl: '/clients/pps_motors.png', sector: 'Automotive Dealerships' },

  // Row 5 from Reference
  { id: 'grand_rio', name: 'Grand Rio', logoUrl: '/clients/grand_rio.png', sector: 'Hospitality & Resorts' },
  { id: 'mahalaxmi', name: 'Mahalaxmi Auto', logoUrl: '/clients/mahalaxmi.png', sector: 'Automotive Logistics' },
  { id: 'horiba', name: 'Horiba India', logoUrl: '/clients/horiba.png', sector: 'Precision Instruments' },
  { id: 'schindler', name: 'Schindler Elevators', logoUrl: '/clients/schindler.png', sector: 'Building Tech & Elevators' },
  { id: 'hyundai', name: 'Hyundai Heavy Industries', logoUrl: '/clients/hyundai.png', sector: 'Automotive & Heavy Industry' },

  // Row 6 from Reference
  { id: 'dugad', name: 'Dugad Group', logoUrl: '/clients/dugad.png', sector: 'Industrial Real Estate' },
  { id: 'valiant', name: 'Valiant TMS', logoUrl: '/clients/valiant.png', sector: 'Automation Systems' },
  { id: 'denyo', name: 'Denyo India Pvt. Ltd.', logoUrl: '/clients/denyo.png', sector: 'Power Systems' },
  { id: 'shree_guruji', name: 'Shree Guruji Sahakar Rugnalaya', logoUrl: '/clients/shree_guruji.png', sector: 'Healthcare & Trust' },
  { id: 'pushpa', name: 'Pushpa International School', logoUrl: '/clients/pushpa.png', sector: 'Education Campus' },
];

// Column 1: 11 clients (Scrolls Bottom to Top)
const col1Clients: ClientItem[] = [
  CLIENTS_FROM_IMAGE[0],  // wikas
  CLIENTS_FROM_IMAGE[3],  // magarpatta
  CLIENTS_FROM_IMAGE[6],  // bajaj_finserv
  CLIENTS_FROM_IMAGE[9],  // tcs_colorful
  CLIENTS_FROM_IMAGE[11], // abs_fitness
  CLIENTS_FROM_IMAGE[14], // sakal
  CLIENTS_FROM_IMAGE[16], // essar
  CLIENTS_FROM_IMAGE[19], // hoerbiger
  CLIENTS_FROM_IMAGE[22], // grand_rio
  CLIENTS_FROM_IMAGE[25], // schindler
  CLIENTS_FROM_IMAGE[27], // dugad
];

// Column 2: 10 clients (Scrolls Top to Bottom)
const col2Clients: ClientItem[] = [
  CLIENTS_FROM_IMAGE[1],  // cyrus
  CLIENTS_FROM_IMAGE[4],  // guardian
  CLIENTS_FROM_IMAGE[7],  // bombay_brasserie
  CLIENTS_FROM_IMAGE[10], // irish_house
  CLIENTS_FROM_IMAGE[12], // patil_hospital
  CLIENTS_FROM_IMAGE[15], // vulkan
  CLIENTS_FROM_IMAGE[17], // orbett
  CLIENTS_FROM_IMAGE[20], // syntel
  CLIENTS_FROM_IMAGE[23], // mahalaxmi
  CLIENTS_FROM_IMAGE[26], // hyundai
];

// Column 3: 11 clients (Scrolls Bottom to Top)
const col3Clients: ClientItem[] = [
  CLIENTS_FROM_IMAGE[2],  // solitaire
  CLIENTS_FROM_IMAGE[5],  // symbiosis
  CLIENTS_FROM_IMAGE[8],  // nanded_city
  CLIENTS_FROM_IMAGE[13], // tata_consultancy
  CLIENTS_FROM_IMAGE[18], // neologic
  CLIENTS_FROM_IMAGE[21], // pps_motors
  CLIENTS_FROM_IMAGE[24], // horiba
  CLIENTS_FROM_IMAGE[28], // valiant
  CLIENTS_FROM_IMAGE[29], // denyo
  CLIENTS_FROM_IMAGE[30], // shree_guruji
  CLIENTS_FROM_IMAGE[31], // pushpa
];

interface ClientCardProps {
  client: ClientItem;
}

const ClientCard: React.FC<ClientCardProps> = ({ client }) => (
  <div
    title={`${client.name} • ${client.sector}`}
    className="aspect-square w-full rounded-2xl bg-white hover:bg-slate-50 border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-300 flex items-center justify-center p-4 sm:p-6 group cursor-pointer hover:scale-[1.02]"
  >
    <img
      src={client.logoUrl}
      alt={client.name}
      className="max-h-12 sm:max-h-16 max-w-[80%] w-auto object-contain mix-blend-multiply filter grayscale contrast-125 opacity-85 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
      loading="lazy"
    />
  </div>
);

interface ClientMarqueeProps {
  className?: string;
  isDedicatedPage?: boolean;
  bgColor?: string;
  isAboutPage?: boolean;
}

export const ClientMarquee: React.FC<ClientMarqueeProps> = ({
  className = '',
  isDedicatedPage = false,
  bgColor,
  isAboutPage: isAboutPageProp
}) => {
  const location = useLocation();
  const isAbout = isAboutPageProp !== undefined ? isAboutPageProp : location.pathname === '/about';
  const isCadBg = isAbout || bgColor === '#cad8e6';

  return (
    <section
      data-theme="light"
      className={`relative py-16 sm:py-24 ${isCadBg ? 'bg-[#cad8e6]' : 'bg-[#dce3ea]'} text-slate-900 overflow-hidden border-t border-b border-slate-300/80 ${className}`}
    >
      {/* Background Watermark Typography matching Our Approach section */}
      <div className="watermark-text-light !left-8 sm:!left-14 lg:!left-20 !top-2 text-slate-900/[0.04] select-none pointer-events-none">
        CLIENTS
      </div>

      <div className="max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* Left Column: Authentic HVAC Website Headline & Narrative */}
          <div className="w-full lg:w-[42%] max-w-xl shrink-0">
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#00153f] tracking-tight leading-[1.12] mb-6 font-['Outfit']">
              Our Esteemed Clients
            </h2>

            <p className="text-slate-700 text-sm sm:text-base lg:text-[17px] leading-relaxed mb-8">
              Trusted by over 100+ premier commercial enterprises, industrial facilities, IT SEZ campuses, and luxury hospitality landmarks across Maharashtra for mission-critical HVAC engineering, precision climate control, and sustained facility efficiency.
            </p>

            {/* Performance Indicators */}
            <div className="pt-6 border-t border-slate-400/40 grid grid-cols-2 gap-6">
              <div>
                <span className="text-2xl sm:text-3xl font-extrabold text-[#00153f] font-['Outfit'] block">
                  100+
                </span>
                <span className="text-xs sm:text-[13px] text-slate-700 font-medium">
                  Enterprise Facilities
                </span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-extrabold text-[#00153f] font-['Outfit'] block">
                  99.8%
                </span>
                <span className="text-xs sm:text-[13px] text-slate-700 font-medium">
                  Cooling Uptime SLA
                </span>
              </div>
            </div>

            {/* Connect Us Action Button */}
            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-[3px] bg-[#00153f] hover:bg-[#072669] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider transition shadow-sm group cursor-pointer"
              >
                <span>Connect Us</span>
                <LongTailArrowRight className="w-5 h-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column: 3 Scrolling Logo Columns (Bottom->Top, Top->Bottom, Bottom->Top) */}
          <div className="w-full lg:w-[58%] relative">
            <div className="relative h-[520px] sm:h-[600px] lg:h-[640px] overflow-hidden">
              
              {/* Top Gradient Fade matching background */}
              <div
                className={`absolute top-0 left-0 right-0 h-24 sm:h-28 bg-gradient-to-b ${
                  isCadBg
                    ? 'from-[#cad8e6] via-[#cad8e6]/85'
                    : 'from-[#dce3ea] via-[#dce3ea]/85'
                } to-transparent z-20 pointer-events-none`}
              />

              {/* Bottom Gradient Fade matching background */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-24 sm:h-28 bg-gradient-to-t ${
                  isCadBg
                    ? 'from-[#cad8e6] via-[#cad8e6]/85'
                    : 'from-[#dce3ea] via-[#dce3ea]/85'
                } to-transparent z-20 pointer-events-none`}
              />

              {/* 3 Columns Grid */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 h-full">
                
                {/* Column 1: Scrolls from Bottom to Top (Upward) */}
                <div className="marquee-col overflow-hidden h-full flex flex-col">
                  <div className="animate-marquee-col-up flex flex-col gap-3 sm:gap-4 shrink-0">
                    {col1Clients.map((client) => (
                      <ClientCard key={`c1-a-${client.id}`} client={client} />
                    ))}
                  </div>
                  <div
                    className="animate-marquee-col-up flex flex-col gap-3 sm:gap-4 shrink-0 mt-3 sm:mt-4"
                    aria-hidden="true"
                  >
                    {col1Clients.map((client) => (
                      <ClientCard key={`c1-b-${client.id}`} client={client} />
                    ))}
                  </div>
                </div>

                {/* Column 2: Scrolls from Top to Bottom (Downward) */}
                <div className="marquee-col overflow-hidden h-full flex flex-col">
                  <div className="animate-marquee-col-down flex flex-col gap-3 sm:gap-4 shrink-0">
                    {col2Clients.map((client) => (
                      <ClientCard key={`c2-a-${client.id}`} client={client} />
                    ))}
                  </div>
                  <div
                    className="animate-marquee-col-down flex flex-col gap-3 sm:gap-4 shrink-0 mt-3 sm:mt-4"
                    aria-hidden="true"
                  >
                    {col2Clients.map((client) => (
                      <ClientCard key={`c2-b-${client.id}`} client={client} />
                    ))}
                  </div>
                </div>

                {/* Column 3: Scrolls from Bottom to Top (Upward) */}
                <div className="marquee-col overflow-hidden h-full flex flex-col">
                  <div className="animate-marquee-col-up-slow flex flex-col gap-3 sm:gap-4 shrink-0">
                    {col3Clients.map((client) => (
                      <ClientCard key={`c3-a-${client.id}`} client={client} />
                    ))}
                  </div>
                  <div
                    className="animate-marquee-col-up-slow flex flex-col gap-3 sm:gap-4 shrink-0 mt-3 sm:mt-4"
                    aria-hidden="true"
                  >
                    {col3Clients.map((client) => (
                      <ClientCard key={`c3-b-${client.id}`} client={client} />
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
