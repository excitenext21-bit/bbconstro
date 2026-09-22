import React from 'react';

export const VisionMissionSection: React.FC = () => {
  return (
    <section
      id="vision-mission"
      data-theme="light"
      className="relative bg-white text-[#0f172a] border-t border-b border-slate-200 overflow-hidden"
    >
      {/* Container / Split-screen layout matching Image 1 & Image 2 */}
      <div className="w-full">
        
        {/* ROW 1: OUR VISION (Image on Left, Text on Right matching Image 1) */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-stretch min-h-[420px] lg:min-h-[480px]">
          {/* Left Column: Authentic HVAC Engineering Image (do not copy generic stock) */}
          <div className="relative overflow-hidden group min-h-[280px] sm:min-h-[340px] md:min-h-full">
            <img
              src="/assets/our-vision.jpg"
              alt="B&B Constro HVAC Engineering Blueprint and Climate Strategy Analysis"
              className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
            />
            {/* Subtle brand tint gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#00153f]/35 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Right Column: Content matching Image 1 layout with Image 3 copy */}
          <div className="bg-white flex flex-col justify-center items-center text-center px-6 py-14 sm:px-10 sm:py-16 md:px-12 md:py-20 lg:px-20">
            {/* Strategy Kicker from Image 3 */}
            <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-[#c05e32] mb-3 font-['Outfit']">
              Our Strategy
            </span>

            {/* Heading matching Image 1 font & style, keeping 38px font size */}
            <h2
              className="text-[30px] sm:text-[38px] uppercase tracking-[0.14em] font-['Outfit'] text-[#00153f] font-bold text-center mb-3"
              style={{ fontSize: '38px' }}
            >
              OUR VISION
            </h2>

            {/* Underline accent with terminal dot matching Image 3 branding */}
            <div className="flex items-center justify-center gap-1.5 mb-6">
              <div className="h-0.5 w-16 bg-[#00153f]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#c05e32]" />
            </div>

            {/* Vision Body copy taken directly from Image 3 */}
            <p className="text-slate-600 text-sm sm:text-base lg:text-[17px] leading-relaxed max-w-xl font-normal">
              A world where climate control is seamless, efficient, and human-focused — where advanced HVAC systems and building environments harmonize to improve comfort, health, and sustainability.
            </p>
          </div>
        </div>

        {/* Hairline Divider between blocks */}
        <div className="w-full h-px bg-slate-200/80" />

        {/* ROW 2: OUR MISSION (Text on Left, Image on Right matching Image 2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-stretch min-h-[420px] lg:min-h-[480px]">
          {/* Left Column: Content matching Image 2 layout with Image 3 copy */}
          <div className="bg-white order-2 md:order-1 flex flex-col justify-center items-center text-center px-6 py-14 sm:px-10 sm:py-16 md:px-12 md:py-20 lg:px-20">
            {/* Strategy Kicker from Image 3 */}
            <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-[#c05e32] mb-3 font-['Outfit']">
              Our Commitment
            </span>

            {/* Heading matching Image 2 font & style, keeping 38px font size */}
            <h2
              className="text-[30px] sm:text-[38px] uppercase tracking-[0.14em] font-['Outfit'] text-[#00153f] font-bold text-center mb-3"
              style={{ fontSize: '38px' }}
            >
              OUR MISSION
            </h2>

            {/* Underline accent with terminal dot matching Image 3 branding */}
            <div className="flex items-center justify-center gap-1.5 mb-6">
              <div className="h-0.5 w-16 bg-[#00153f]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#c05e32]" />
            </div>

            {/* Mission Body copy taken directly from Image 3 */}
            <p className="text-slate-600 text-sm sm:text-base lg:text-[17px] leading-relaxed max-w-xl font-normal">
              To bridge the gap between sophisticated engineering and everyday comfort, delivering durable, high-performance HVAC solutions that stand the test of time.
            </p>
          </div>

          {/* Right Column: Authentic HVAC Engineering & Execution Image */}
          <div className="relative overflow-hidden group order-1 md:order-2 min-h-[280px] sm:min-h-[340px] md:min-h-full">
            <img
              src="/assets/our-mission.jpg"
              alt="B&B Constro HVAC Solutions Mechanical Engineering and Planning"
              className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
            />
            {/* Subtle brand tint gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#00153f]/35 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

      </div>
    </section>
  );
};
