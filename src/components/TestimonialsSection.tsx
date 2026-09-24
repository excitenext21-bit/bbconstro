import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../data/hvacData';

interface TestimonialsSectionProps {
  isDarkTheme?: boolean;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ isDarkTheme: customDarkTheme }) => {
  const location = useLocation();
  const isDarkTheme = customDarkTheme !== undefined
    ? customDarkTheme
    : location.pathname.includes('/projects');

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const current = TESTIMONIALS[currentIndex];

  // Auto-rotation effect (every 5 seconds, pauses on hover)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      data-theme={isDarkTheme ? 'dark' : 'light'}
      className={`relative py-16 sm:py-20 lg:py-24 ${
        isDarkTheme ? 'bg-[#00153f] text-white border-t border-slate-800' : 'bg-[#dce3ea] text-[#0f172a]'
      } overflow-hidden`}
    >
      
      {/* Background Watermark Typography */}
      <div className={isDarkTheme ? 'watermark-text' : 'watermark-text-light'}>
        TESTIMONIALS
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14" data-reveal="fade-up" data-reveal-delay="0">
          <h2
            className={`text-[32px] sm:text-[38px] font-extrabold ${
              isDarkTheme ? 'text-white' : 'text-[#0f172a]'
            } font-['Outfit'] tracking-tight mb-3`}
            style={{ fontSize: '38px' }}
          >
            What Our Clients Say
          </h2>

          {/* 5 Golden Stars */}
          <div className="flex items-center justify-center gap-1.5 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[#f7985f] text-[#f7985f]" />
            ))}
          </div>

          <p className={`${isDarkTheme ? 'text-slate-300' : 'text-slate-600'} text-sm sm:text-base max-w-xl mx-auto leading-relaxed`}>
            Verified experiences from leading commercial infrastructure developers, hospitals, and industrial plants across Pune.
          </p>
        </div>

        {/* Speech Bubble Testimonial Card Container (with pause on hover) */}
        <div 
          className="max-w-4xl lg:max-w-5xl mx-auto relative px-2 sm:px-6"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          data-reveal="zoom-up"
          data-reveal-delay="150"
        >
          
          {/* Composite Speech Bubble with Unified Drop Shadow */}
          <div className={`relative filter ${isDarkTheme ? 'drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)]' : 'drop-shadow-[0_20px_40px_rgba(0,21,63,0.08)]'}`}>
            
            {/* White Speech Bubble Body (holds the review quote) */}
            <div className="relative bg-white rounded-2xl p-7 sm:p-10 md:p-12 text-center transition-all duration-300">
              
              {/* Background Quotation Marks */}
              <div className="absolute top-5 left-7 text-[#f7985f]/25 font-serif text-6xl select-none pointer-events-none leading-none -mt-2">
                “
              </div>
              <div className="absolute bottom-3 right-7 text-[#f7985f]/25 font-serif text-6xl select-none pointer-events-none leading-none -mb-2">
                ”
              </div>

              {/* Testimonial Quote */}
              <div key={currentIndex} className="relative z-10 px-4 sm:px-8 animate-fadeIn">
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed italic">
                  "{current.quote}"
                </p>
              </div>

            </div>

            {/* Speech Bubble Arrow pointing down (centered at bottom edge matching screenshot 2) */}
            <svg
              className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-8 h-6 text-white fill-white pointer-events-none -mt-px"
              viewBox="0 0 32 24"
            >
              <path d="M0 0 L16 22 L32 0 Z" fill="currentColor" />
            </svg>

          </div>

          {/* Photos & Author Info PLACED JUST BELOW THE ARROW */}
          <div className="mt-8 sm:mt-10 flex flex-col items-center text-center">
            
            {/* Active Client Photo directly under the arrow tip (Matching Screenshot 1 & Screenshot 2) */}
            <div key={`avatar-${currentIndex}`} className="relative animate-fadeIn">
              <div className="relative rounded-full p-1 ring-4 ring-[#c05e32] shadow-xl bg-white transition-transform duration-300">
                <img
                  src={current.avatar}
                  alt={current.name}
                  className="w-18 h-18 sm:w-20 sm:h-20 md:w-22 md:h-22 rounded-full object-cover shadow-sm border-2 border-white"
                />
              </div>
            </div>

            {/* Active Author Details */}
            <div key={`author-${currentIndex}`} className="mt-3.5 sm:mt-4 animate-fadeIn">
              <h3 className={`text-base sm:text-lg font-bold ${isDarkTheme ? 'text-[#f7985f]' : 'text-[#c05e32]'} uppercase tracking-wider font-['Outfit']`}>
                {current.name}
              </h3>
              <p className={`text-xs sm:text-sm ${isDarkTheme ? 'text-slate-200' : 'text-slate-600'} font-semibold mt-0.5`}>
                {current.role}, {current.company}
              </p>
              <p className={`text-[11px] sm:text-xs ${isDarkTheme ? 'text-slate-400' : 'text-slate-500'} mt-0.5`}>
                {current.location} • {current.projectType}
              </p>
            </div>

            {/* Clickable Client Thumbnails Row (All testimonial photos) */}
            <div className="flex items-center justify-center gap-3 sm:gap-4 mt-5 sm:mt-6">
              {TESTIMONIALS.map((item, idx) => {
                const isActive = idx === currentIndex;
                return (
                  <button
                    key={item.id}
                    onClick={() => setCurrentIndex(idx)}
                    className={`relative rounded-full transition-all duration-300 cursor-pointer p-0.5 ${
                      isActive
                        ? 'ring-2 ring-[#c05e32] scale-110 opacity-100 shadow-md'
                        : isDarkTheme
                          ? 'opacity-40 hover:opacity-90 scale-95 hover:scale-100'
                          : 'opacity-40 hover:opacity-85 scale-95 hover:scale-100'
                    }`}
                    aria-label={`View review by ${item.name}`}
                  >
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover border-2 ${isDarkTheme ? 'border-slate-800' : 'border-white'} shadow-sm`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Horizontal Dash Indicators */}
            <div className="flex items-center justify-center gap-2 mt-4">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === i
                      ? 'w-8 bg-[#c05e32]'
                      : isDarkTheme
                        ? 'w-4 bg-slate-600 hover:bg-slate-500'
                        : 'w-4 bg-slate-400/60 hover:bg-slate-500'
                  }`}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
