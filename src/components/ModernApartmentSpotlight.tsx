import React from 'react';
import { Play } from 'lucide-react';
import { LongTailArrowRight } from './LongTailArrow';
import { DIRECTOR_INFO } from '../data/hvacData';

interface ModernApartmentSpotlightProps {
  onOpenBooking: () => void;
  onOpenVideoTour?: () => void;
}

export const ModernApartmentSpotlight: React.FC<ModernApartmentSpotlightProps> = ({
  onOpenBooking,
  onOpenVideoTour
}) => {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-[#00153f] px-4 sm:px-6 lg:px-12">
      
      {/* Light Background Spotlight Card matching Realar screenshot */}
      <div className="max-w-7xl mx-auto rounded-2xl bg-[#dce3ea] text-[#0f172a] p-8 sm:p-12 lg:p-16 shadow-2xl overflow-hidden">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Heading, Bio, Black Button, and Signature */}
          <div className="lg:col-span-6 flex flex-col items-start">
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] font-['Outfit'] tracking-tight leading-tight mb-4">
              Take A Look At Our Precision Engineering
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
              We are an engineering firm with over 17 years of expertise. Within the commercial HVAC market, our team offers customized solutions for critical facilities, IT towers, and luxury penthouses.
            </p>

            {/* Button matching Hero styling: transparent bg, 1px border, 3px radius, 300 weight */}
            <button
              onClick={onOpenBooking}
              className="px-7 py-3.5 rounded-[3px] bg-transparent border border-[#0f172a] text-[#0f172a] hover:bg-[#0f172a] hover:text-white font-[300] text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md flex items-center gap-2 mb-10 active:scale-95 cursor-pointer"
            >
              <span className="font-[300]">Request A Visit</span>
              <LongTailArrowRight className="w-6 h-3 stroke-[1]" strokeWidth={1} />
            </button>

            {/* Director Avatar + Handwritten Signature matching reference */}
            <div className="flex items-center gap-6 pt-4 border-t border-slate-300 w-full">
              <div className="flex items-center gap-3">
                <img
                  src="/director-pravin-bakshi.jpg"
                  alt={DIRECTOR_INFO.name}
                  width={48}
                  height={48}
                  loading="lazy"
                  decoding="async"
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow"
                />
                <div>
                  <h4 className="text-sm font-bold text-[#0f172a] font-['Outfit']">
                    {DIRECTOR_INFO.name}
                  </h4>
                  <span className="text-[11px] text-slate-500 font-medium">
                    Founder & Director
                  </span>
                </div>
              </div>

              {/* Stylized Handwritten Signature SVG */}
              <div className="ml-auto opacity-80">
                <svg className="w-32 h-12 stroke-[#0f172a] fill-none stroke-2" viewBox="0 0 200 60">
                  <path d="M10 40 C 30 10, 45 50, 60 20 C 75 10, 80 45, 110 30 C 130 20, 150 40, 180 25 M60 30 L160 30" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

          </div>

          {/* Right Column: Large Photo with Play Button */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-slate-200 shadow-xl border border-slate-300/60 relative group">
              <img
                src="/assets/projects-banner.jpg"
                alt="Precision HVAC Architectural Living"
                width={800}
                height={600}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Round Play Button on Bottom-Right */}
              <button
                onClick={onOpenVideoTour}
                className="absolute bottom-6 right-6 w-16 h-16 rounded-full bg-[#f7985f] text-slate-950 flex items-center justify-center shadow-xl hover:scale-110 transition-transform cursor-pointer"
                aria-label="Play Virtual Tour"
              >
                <Play className="w-7 h-7 fill-slate-950 ml-0.5" />
              </button>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};
