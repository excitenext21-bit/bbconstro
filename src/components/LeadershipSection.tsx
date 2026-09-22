import React from 'react';

export const LeadershipSection: React.FC = () => {
  return (
    <section
      id="leadership"
      data-theme="light"
      className="relative py-20 sm:py-24 lg:py-28 bg-white text-[#0f172a] border-b border-slate-200 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">


        {/* Split Layout: Text Left, Photo Right (Image 2 style) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left Column: Name, Role, Bio, Quote */}
          <div className="flex flex-col">
            {/* Large Name — First name regular, Last name in brand copper (Image 2 style) */}
            <h2
              className="font-['Outfit'] font-extrabold uppercase tracking-[0.06em] text-[#00153f] leading-[1.1] mb-1"
              style={{ fontSize: '38px' }}
            >
              PRAVIN{' '}
              <span className="text-[#c05e32]">BAKSHI</span>
            </h2>

            {/* Role / Subtitle */}
            <p className="text-sm sm:text-base font-medium text-slate-500 font-['Outfit'] tracking-wide mb-8">
              Founder &amp; Director
            </p>

            {/* Bio Paragraph 1 */}
            <p className="text-slate-600 text-sm sm:text-base lg:text-[15.5px] leading-relaxed mb-5 text-justify sm:text-left">
              With 17 years of HVAC expertise and a background in Production Engineering, Pravin began his career with industry giants like Hitachi, Onida, Voltas, and Daikin. After a successful corporate tenure, he founded Ambience Engineers in 2013.
            </p>

            {/* Bio Paragraph 2 */}
            <p className="text-slate-600 text-sm sm:text-base lg:text-[15.5px] leading-relaxed mb-10 text-justify sm:text-left">
              Known for his technical depth and strategic problem-solving, he excels at managing diverse commercial and residential projects through expert team leadership. Outside of work, he is an avid cricket fan.
            </p>

            {/* Quote Block (Image 2 style — bordered box with decorative quotation marks) */}
            <div className="relative bg-slate-50 border-l-4 border-[#c05e32] rounded-r-xl px-7 py-6 sm:px-8 sm:py-7">
              {/* Opening Quote Mark */}
              <span className="absolute top-3 left-3 text-[#c05e32]/15 text-6xl font-serif leading-none select-none pointer-events-none">
                &ldquo;
              </span>

              <p className="relative text-slate-700 text-sm sm:text-[15px] leading-relaxed italic z-10">
                Our mission is to deliver world-class HVAC solutions that combine innovation with reliability, ensuring every project exceeds expectations through technical excellence and client-focused dedication.
              </p>

              {/* Closing Quote Mark */}
              <span className="absolute bottom-2 right-5 text-[#c05e32]/15 text-6xl font-serif leading-none select-none pointer-events-none">
                &rdquo;
              </span>
            </div>
          </div>

          {/* Right Column: Large Director Photo (Image 2 style — clean, no frame, prominent) */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Decorative accent behind photo */}
            <div className="absolute -top-4 -right-4 w-full h-full max-w-[420px] max-h-[540px] rounded-2xl border-2 border-[#c05e32]/20 z-0 hidden lg:block" />

            <img
              src="/director-pravin-bakshi.jpg"
              alt="Pravin Bakshi — Founder & Director, B&B Constro Pvt. Ltd."
              className="relative z-10 w-full max-w-[400px] lg:max-w-[420px] rounded-2xl object-cover object-top shadow-xl"
              style={{ aspectRatio: '3/4' }}
            />

            {/* Name Badge Overlay at bottom of photo */}
            <div className="absolute bottom-4 left-1/2 lg:left-auto lg:right-8 -translate-x-1/2 lg:translate-x-0 z-20 bg-white/95 backdrop-blur-sm rounded-xl px-6 py-3 shadow-lg border border-slate-100">
              <p className="text-sm font-bold text-[#00153f] font-['Outfit'] tracking-wide">
                Pravin Bakshi
              </p>
              <p className="text-xs text-[#c05e32] font-medium font-['Outfit']">
                Director
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
