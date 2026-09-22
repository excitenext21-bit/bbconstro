import React from 'react';

interface WhoWeAreSectionProps {
  onReadMore?: () => void;
}

export const WhoWeAreSection: React.FC<WhoWeAreSectionProps> = ({ onReadMore }) => {
  return (
    <section
      id="who-we-are"
      data-theme="light"
      className="relative py-16 sm:py-20 lg:py-24 bg-white text-[#0f172a] border-b border-slate-200 overflow-hidden"
    >
      {/* Geometric Chevron Accent on Left Margin matching Image 2 Style in Brand Copper */}
      <div
        className="absolute left-0 top-0 bottom-0 w-28 sm:w-40 lg:w-56 pointer-events-none select-none overflow-hidden z-0"
        aria-hidden="true"
      >
        <svg
          className="h-full w-full"
          viewBox="0 0 200 400"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Faint Navy Background Chevron */}
          <path
            d="M-20,0 L60,200 L-20,400 L25,400 L105,200 L25,0 Z"
            fill="#00153f"
            fillOpacity="0.03"
          />
          {/* Soft Copper Glow Chevron */}
          <path
            d="M15,0 L95,200 L15,400 L55,400 L135,200 L55,0 Z"
            fill="#f7985f"
            fillOpacity="0.18"
          />
          {/* Primary Solid Brand Copper Chevron matching Image 2 */}
          <path
            d="M45,0 L125,200 L45,400 L95,400 L175,200 L95,0 Z"
            fill="#c05e32"
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Heading, Accent Line, Subtitle & 3D Copper Motif */}
          <div className="lg:col-span-6 pl-6 sm:pl-12 lg:pl-16">
            {/* Watermark "01." from Image 1 */}
            <span className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-200/90 font-['Outfit'] select-none block mb-1">
              01.
            </span>

            {/* Main Heading: WHO WE ARE (keeping font size same at 38px) */}
            <h1
              className="text-[30px] sm:text-[38px] font-extrabold uppercase tracking-[0.14em] text-[#00153f] font-['Outfit'] leading-tight"
              style={{ fontSize: '38px' }}
            >
              WHO WE ARE
            </h1>

            {/* Brand Copper Accent Underline Bar matching Image 2 */}
            <div className="w-16 h-1 bg-[#c05e32] mt-3 mb-4 rounded-full" />

            {/* Subtitle Tagline matching Image 2 Style */}
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 font-['Outfit'] mb-6">
              PIONEERS IN COMPLEX HVAC SYSTEMS &amp; CLIMATE CONTROL
            </p>

            {/* 3D Copper 'B' Pipe Motif from Image 1 */}
            <div className="relative pt-2">
              <img
                src="/assets/brand-copper-b.png"
                alt="B&B Constro 3D Copper Pipe Motif"
                className="w-36 sm:w-44 lg:w-48 h-auto object-contain animate-float-vertical drop-shadow-2xl"
                loading="eager"
              />
            </div>
          </div>

          {/* Right Column: Paragraph Content from Image 1 & Button from Image 2 */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Exact Content from Image 1 */}
            <p className="text-slate-600 text-sm sm:text-base lg:text-[17px] leading-relaxed font-normal mb-8 text-justify sm:text-left">
              Established in 2024, Pune-based <strong className="text-[#00153f] font-semibold">B&amp;B Constro Pvt. Ltd.</strong> is a pioneer in installing complex HVAC systems across challenging environments. The company was founded solely by entrepreneur <strong className="text-[#00153f] font-semibold">Mr. Pravin Bakshi</strong>, who left a successful corporate career to leverage his deep industry expertise and hands-on approach. Driven by a commitment to technological and process innovation, the firm has successfully delivered over 250 diverse projects across multiple geographies, ranging from multi-story commercial spaces to high-end residential bungalows.
            </p>

            {/* Rectangular Solid Brand Copper Button matching Image 2 */}
            <div>
              <button
                type="button"
                onClick={onReadMore}
                className="inline-flex items-center justify-center px-8 py-3.5 bg-[#c05e32] hover:bg-[#8e3f1a] text-white font-bold text-xs sm:text-sm uppercase tracking-[0.18em] shadow-md shadow-[#c05e32]/25 transition-all duration-300 hover:shadow-lg hover:shadow-[#c05e32]/35 hover:-translate-y-0.5 cursor-pointer"
              >
                READ MORE
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
