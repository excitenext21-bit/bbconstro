import React, { useState } from 'react';
import { LongTailArrowRight } from './LongTailArrow';

interface ProjectShowcaseProps {
  onOpenBooking?: () => void;
  onSelectCaseStudy?: (idx: number) => void;
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ onSelectCaseStudy }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleIndicatorClick = (idx: number) => {
    setActiveSlide(idx);
    if (onSelectCaseStudy) {
      onSelectCaseStudy(idx);
    } else {
      const target = document.getElementById('featured-case-studies') || document.getElementById('projects-section');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const projects = [
    {
      id: '01',
      title: 'Discover Modern Living At Magarpatta Residence.',
      desc: 'Magarpatta City SEZ Towers B5 & B6 takes advantage of multi-zone Daikin VRV inverter systems across 3,40,000 sq. ft., delivering 99.8% cooling reliability.',
      image: '/magarpatta-cybercity-tower.jpg',
      specs: '3,40,000 Sq. Ft. • Daikin VRV'
    },
    {
      id: '02',
      title: 'Precision Climate Engineering At Vulcan Tech.',
      desc: 'Braze-free Lokring piping deployment across 85,000 sq. ft. precision manufacturing cleanrooms in Pirangut, eliminating open-flame hazards.',
      image: '/vulcan-technologies-plant.png',
      specs: '85,000 Sq. Ft. • Cleanroom Class 10k'
    },
    {
      id: '03',
      title: 'High-Efficiency Cooling At Solitaire Business Hub.',
      desc: 'Central water-cooled screw chillers with smart variable pumping and building management automation for 45 enterprise corporate suites.',
      image: '/assets/central-chiller-plant-systems.jpg',
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] font-['Outfit'] tracking-tight leading-[1.15] mb-4">
              {projects[activeSlide].title}
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4 max-w-md">
              {projects[activeSlide].desc}
            </p>
          </div>

          {/* Right Column: 2 Cards with individual indicator directly under each image */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {projects.slice(0, 2).map((item, idx) => {
                const isSelected = activeSlide === idx;
                return (
                  <div key={idx} className="flex flex-col gap-3">
                    {/* Image Card (2px radius, no brass border, hover dropshadow) */}
                    <div
                      onClick={() => setActiveSlide(idx)}
                      className={`group relative rounded-[2px] overflow-hidden aspect-[4/3] bg-white border border-slate-200/60 shadow-md hover:shadow-2xl hover:shadow-slate-950/30 cursor-pointer transition-all duration-300 hover:-translate-y-1 ${
                        isSelected
                          ? 'shadow-xl ring-1 ring-slate-400/50'
                          : ''
                      }`}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover rounded-[2px] group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Bottom subtle shadow overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
                    </div>

                    {/* Details Link with Long Tail Arrow directly under this image */}
                    <div className="flex items-center pt-1">
                      <button
                        type="button"
                        onClick={() => handleIndicatorClick(idx)}
                        className={`inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200 cursor-pointer group/btn ${
                          isSelected
                            ? 'text-[#c05e32]'
                            : 'text-slate-600 hover:text-[#c05e32]'
                        }`}
                        aria-label={`View ${item.title} Details`}
                      >
                        <span className="font-['Outfit']">Details</span>
                        <LongTailArrowRight className="w-5 h-2.5 stroke-[1.2] group-hover/btn:translate-x-1 transition-transform" strokeWidth={1.2} />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
