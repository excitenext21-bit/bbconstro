import React from 'react';

export const LeadershipSection: React.FC = () => {
  return (
    <section
      id="leadership"
      className="relative py-20 sm:py-24 lg:py-28 bg-[#00153f] text-slate-100 border-t border-b border-[#0b2866]/80 overflow-hidden"
    >
      {/* Subtle Background Radial Glow */}
      <div
        className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-[#c05e32]/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 z-10">
        {/* Split Layout: Text Left, Photo Right (Image 2 style) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Column: Name, Role, Bio, Quote */}
          <div className="flex flex-col">
            {/* Large Name — First name white, Last name in brand copper */}
            <h2
              className="font-['Outfit'] font-extrabold uppercase tracking-[0.06em] text-white leading-[1.1] mb-1"
              style={{ fontSize: '38px' }}
            >
              PRAVIN{' '}
              <span className="text-[#c05e32]">BAKSHI</span>
            </h2>

            {/* Role / Subtitle */}
            <p className="text-sm sm:text-base font-medium text-[#f7985f] font-['Outfit'] tracking-wide mb-8">
              Founder &amp; Director
            </p>

            {/* Bio Paragraph 1 */}
            <p className="text-slate-300 text-sm sm:text-base lg:text-[15.5px] leading-relaxed mb-5 text-justify sm:text-left font-light">
              With 17 years of HVAC expertise and a background in Production Engineering, Pravin began his career with industry giants like Hitachi, Onida, Voltas, and Daikin. After a successful corporate tenure, he founded Ambience Engineers in 2013.
            </p>

            {/* Bio Paragraph 2 */}
            <p className="text-slate-300 text-sm sm:text-base lg:text-[15.5px] leading-relaxed mb-10 text-justify sm:text-left font-light">
              Known for his technical depth and strategic problem-solving, he excels at managing diverse commercial and residential projects through expert team leadership. Outside of work, he is an avid cricket fan.
            </p>

            {/* Quote Block (Image 2 style — bordered box with decorative quotation marks) */}
            <div className="relative bg-white/[0.04] border-l-4 border-[#c05e32] border-t border-r border-b border-white/10 rounded-r-xl px-7 py-6 sm:px-8 sm:py-7 backdrop-blur-xs">
              {/* Opening Quote Mark */}
              <span className="absolute top-3 left-3 text-[#c05e32]/25 text-6xl font-serif leading-none select-none pointer-events-none">
                &ldquo;
              </span>

              <p className="relative text-slate-200 text-sm sm:text-[15px] leading-relaxed italic z-10">
                Our mission is to deliver world-class HVAC solutions that combine innovation with reliability, ensuring every project exceeds expectations through technical excellence and client-focused dedication.
              </p>

              {/* Closing Quote Mark */}
              <span className="absolute bottom-2 right-5 text-[#c05e32]/25 text-6xl font-serif leading-none select-none pointer-events-none">
                &rdquo;
              </span>
            </div>
          </div>

          {/* Right Column: Large Director Photo */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Decorative accent behind photo */}
            <div className="absolute -top-4 -right-4 w-full h-full max-w-[420px] max-h-[540px] rounded-2xl border-2 border-[#c05e32]/35 z-0 hidden lg:block" />

            <img
              src="/director-pravin-bakshi.jpg"
              alt="Pravin Bakshi — Founder & Director, B&B Constro Pvt. Ltd."
              className="relative z-10 w-full max-w-[400px] lg:max-w-[420px] rounded-2xl object-cover object-top shadow-2xl ring-1 ring-white/10"
              style={{ aspectRatio: '3/4' }}
            />

            {/* Name Badge Overlay at bottom of photo */}
            <div className="absolute bottom-4 left-1/2 lg:left-auto lg:right-8 -translate-x-1/2 lg:translate-x-0 z-20 bg-[#00153f]/90 backdrop-blur-md rounded-xl px-6 py-3 shadow-xl border border-white/15">
              <p className="text-sm font-bold text-white font-['Outfit'] tracking-wide">
                Pravin Bakshi
              </p>
              <p className="text-xs text-[#f7985f] font-medium font-['Outfit']">
                Director
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
