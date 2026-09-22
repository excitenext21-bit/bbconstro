import React from 'react';

export const WhoWeAreSection: React.FC = () => {
  return (
    <section
      id="who-we-are"
      data-theme="light"
      className="relative py-20 sm:py-24 lg:py-28 bg-white text-[#0f172a] border-b border-slate-200 overflow-hidden"
    >
      {/* Background Architectural Chevron Graphics matching Image 1 Bold Style */}
      <div
        className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0"
        aria-hidden="true"
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 500"
          preserveAspectRatio="xMinYMid slice"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >

          {/* Middle: Mid Neutral Chevron */}
          <g className="animate-chevron-mid">
            <path
              d="M 220,-20 L 440,250 L 220,520 L 360,520 L 580,250 L 360,-20 Z"
              fill="#EFEFEF"
            />
          </g>

          {/* Front: Lead Chevron Arrow in #EAEAEA with dynamic forward-slide animation */}
          <g className="animate-chevron-front">
            <path
              d="M 0,-20 L 260,250 L 0,520 L 200,520 L 460,250 L 200,-20 Z"
              fill="#EAEAEA"
            />
          </g>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Left Column: Heading, Accent Underline, Subtitle matching Image 2 */}
          <div className="lg:col-span-5 pl-4 sm:pl-8 lg:pl-12">
            {/* Main Heading: WHO WE ARE (38px font size, matching Image 2 "ABOUT US") */}
            <h2
              className="text-[32px] sm:text-[38px] font-extrabold uppercase tracking-[0.14em] text-[#00153f] font-['Outfit'] leading-tight"
              style={{ fontSize: '38px' }}
            >
              WHO WE ARE
            </h2>

            {/* Brand Copper Accent Underline Bar matching Image 2 */}
            <div className="w-16 h-1 bg-[#c05e32] mt-3.5 mb-4" />

            {/* Subtitle Tagline matching Image 2 Style */}
            <p className="text-xs sm:text-sm font-normal uppercase tracking-[0.14em] text-slate-500 font-['Outfit'] leading-relaxed max-w-sm">
              PIONEERS IN COMPLEX HVAC SYSTEMS &amp; CLIMATE CONTROL
            </p>
          </div>

          {/* Right Column: Paragraph Content from Image 1, NO Read More button */}
          <div className="lg:col-span-7">
            <p className="text-slate-600 text-sm sm:text-base lg:text-[16.5px] leading-relaxed font-normal text-justify sm:text-left">
              Established in 2024, Pune-based <strong className="text-[#00153f] font-semibold">B&amp;B Constro Pvt. Ltd.</strong> is a pioneer in installing complex HVAC systems across challenging environments. The company was founded solely by entrepreneur <strong className="text-[#00153f] font-semibold">Mr. Pravin Bakshi</strong>, who left a successful corporate career to leverage his deep industry expertise and hands-on approach. Driven by a commitment to technological and process innovation, the firm has successfully delivered over 250 diverse projects across multiple geographies, ranging from multi-story commercial spaces to high-end residential bungalows.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
