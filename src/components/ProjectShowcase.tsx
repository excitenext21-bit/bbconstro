import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { LongTailArrowRight } from './LongTailArrow';

interface ProjectShowcaseProps {
  onOpenBooking: () => void;
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ onOpenBooking }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const projects = [
    {
      id: '01',
      title: 'Discover Modern Living At Magarpatta Residence.',
      desc: 'Magarpatta City SEZ Towers B5 & B6 takes advantage of multi-zone Daikin VRV inverter systems across 3,40,000 sq. ft., delivering 99.8% cooling reliability.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      specs: '3,40,000 Sq. Ft. • Daikin VRV'
    },
    {
      id: '02',
      title: 'Precision Climate Engineering At Vulcan Tech.',
      desc: 'Braze-free Lokring piping deployment across 85,000 sq. ft. precision manufacturing cleanrooms in Pirangut, eliminating open-flame hazards.',
      image: 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=800&q=80',
      specs: '85,000 Sq. Ft. • Cleanroom Class 10k'
    },
    {
      id: '03',
      title: 'High-Efficiency Cooling At Solitaire Business Hub.',
      desc: 'Central water-cooled screw chillers with smart variable pumping and building management automation for 45 enterprise corporate suites.',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
      specs: '550 TR Chillers • 18% Energy Savings'
    }
  ];

  return (
    <section data-theme="light" className="relative py-20 lg:py-28 bg-[#dce3ea] overflow-hidden text-[#0f172a] border-t border-b border-slate-300">
      
      {/* Background Watermark Typography */}
      <div className="watermark-text-light">
        PROJECTS
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column matching Realar template */}
          <div className="lg:col-span-5 flex flex-col items-start">
            
            {/* Round Step Badge 01 */}
            <div className="w-12 h-12 rounded-full border border-slate-300 bg-white text-[#0f172a] font-extrabold text-sm flex items-center justify-center mb-6 font-['Outfit'] shadow-sm">
              {projects[activeSlide].id}
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] font-['Outfit'] tracking-tight leading-[1.15] mb-4">
              {projects[activeSlide].title}
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8 max-w-md">
              {projects[activeSlide].desc}
            </p>

            <button
              onClick={onOpenBooking}
              className="px-6 py-3.5 bg-transparent border border-[#0f172a] rounded-[3px] text-[#0f172a] hover:bg-[#0f172a] hover:text-white font-[300] text-sm tracking-wide transition-all shadow-md flex items-center gap-2 active:scale-95 cursor-pointer"
            >
              <span className="font-[300]">Explore More</span>
              <LongTailArrowRight className="w-6 h-3 stroke-[1]" strokeWidth={1} />
            </button>

          </div>

          {/* Right Column: Horizontal Cards Strip matching reference */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {projects.slice(0, 2).map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveSlide(idx)}
                  className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-white border border-slate-300 shadow-xl cursor-pointer hover:border-[#c05e32]/60 hover:shadow-2xl transition-all"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  
                  {/* Round Yellow Arrow Button at Bottom Center */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-[#f7985f] text-slate-950 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <LongTailArrowRight className="w-6 h-3.5 stroke-[1.5]" strokeWidth={1.5} />
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Progress Bars matching reference screenshot */}
            <div className="flex items-center gap-2 pt-2">
              {projects.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSlide(idx)}
                  className={`h-1 rounded-full transition-all duration-300 cursor-pointer ${
                    activeSlide === idx ? 'w-12 bg-[#c05e32]' : 'w-8 bg-slate-400 hover:bg-slate-500'
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
