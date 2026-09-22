import React, { useState, useEffect } from 'react';
import { ShieldCheck, Users, ChevronDown, Award, Zap, Clock, Flame, CheckCircle2 } from 'lucide-react';
import { useLocation } from 'react-router-dom';

export const AboutDropdownsSection: React.FC = () => {
  const location = useLocation();
  const [openDropdowns, setOpenDropdowns] = useState<{ whyChooseUs: boolean; leadership: boolean }>({
    whyChooseUs: true,
    leadership: false,
  });

  // Automatically expand based on URL hash if navigated from navbar dropdown
  useEffect(() => {
    if (location.hash === '#why-choose-us') {
      setOpenDropdowns({ whyChooseUs: true, leadership: false });
      const el = document.getElementById('why-choose-us');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (location.hash === '#leadership') {
      setOpenDropdowns({ whyChooseUs: false, leadership: true });
      const el = document.getElementById('leadership');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location.hash]);

  const toggleWhyChooseUs = () => {
    setOpenDropdowns(prev => ({ ...prev, whyChooseUs: !prev.whyChooseUs }));
  };

  const toggleLeadership = () => {
    setOpenDropdowns(prev => ({ ...prev, leadership: !prev.leadership }));
  };

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-[#00153f] border-t border-b border-[#0b2866]/80 overflow-hidden text-slate-100">
      
      {/* Background Watermark */}
      <div className="watermark-text select-none pointer-events-none">
        CREDENTIALS
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2
            className="text-[32px] sm:text-[38px] font-extrabold text-white font-['Outfit'] tracking-tight"
            style={{ fontSize: '38px' }}
          >
            Why Choose Us & Leadership
          </h2>
          <div className="w-14 h-0.5 bg-[#c05e32] mx-auto mt-3 mb-4" />
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Discover the engineering standards, rapid field SLA guarantees, and seasoned technical leadership that make B&B Constro Maharashtra&apos;s trusted HVAC partner.
          </p>
        </div>

        {/* The 2 Dropdowns */}
        <div className="space-y-6 sm:space-y-8">
          
          {/* Dropdown 1: Why choose us */}
          <div
            id="why-choose-us"
            className={`rounded-2xl sm:rounded-3xl border transition-all duration-300 overflow-hidden ${
              openDropdowns.whyChooseUs
                ? 'bg-[#041a4a] border-[#f7985f]/40 shadow-[0_12px_35px_rgba(0,10,35,0.5)]'
                : 'bg-[#021133] border-[#0b2866] hover:border-[#13409e]'
            }`}
          >
            {/* Accordion Trigger Header */}
            <button
              onClick={toggleWhyChooseUs}
              className="w-full px-6 sm:px-8 py-5 sm:py-6 flex items-center justify-between gap-4 text-left cursor-pointer select-none transition-colors"
              aria-expanded={openDropdowns.whyChooseUs}
            >
              <div className="flex items-center gap-4 sm:gap-5">
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-all ${
                    openDropdowns.whyChooseUs
                      ? 'bg-[#c05e32] text-white shadow-[0_0_16px_rgba(247,152,95,0.4)]'
                      : 'bg-[#00153f] text-[#f7985f] border border-slate-700'
                  }`}
                >
                  <ShieldCheck className="w-6 h-6 stroke-[1.8]" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-['Outfit'] tracking-tight">
                    Why choose us
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                    6 Core Engineering Differentiators, 60-Min Emergency SLA & Brand Reliability
                  </p>
                </div>
              </div>

              {/* Animated Chevron Indicator */}
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                  openDropdowns.whyChooseUs
                    ? 'bg-gradient-to-r from-[#f7985f] to-[#c05e32] text-slate-950 rotate-180 shadow-md'
                    : 'bg-[#00153f] text-slate-400 border border-slate-700'
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            {/* Dropdown Content */}
            {openDropdowns.whyChooseUs && (
              <div className="px-6 sm:px-8 pb-8 pt-2 border-t border-[#0b2866]/60 animate-fadeIn">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 pt-4">
                  
                  {/* Item 1 */}
                  <div className="p-5 rounded-xl bg-[#00153f]/70 border border-slate-800/80 hover:border-[#f7985f]/30 transition-all">
                    <div className="flex items-center gap-2.5 text-[#f7985f] font-semibold text-sm mb-2">
                      <Award className="w-4 h-4 shrink-0" />
                      <span>17+ Years Proven Heritage</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Founded by ex-Daikin and ex-Voltas veterans with deep thermodynamic design capabilities, serving Maharashtra&apos;s leading infrastructure.
                    </p>
                  </div>

                  {/* Item 2 */}
                  <div className="p-5 rounded-xl bg-[#00153f]/70 border border-slate-800/80 hover:border-[#f7985f]/30 transition-all">
                    <div className="flex items-center gap-2.5 text-[#f7985f] font-semibold text-sm mb-2">
                      <Clock className="w-4 h-4 shrink-0" />
                      <span>60-Minute Emergency SLA</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Dedicated mobile breakdown dispatch units stationed across Pune municipal limits, stocked with genuine OEM compressors and diagnostic kits.
                    </p>
                  </div>

                  {/* Item 3 */}
                  <div className="p-5 rounded-xl bg-[#00153f]/70 border border-slate-800/80 hover:border-[#f7985f]/30 transition-all">
                    <div className="flex items-center gap-2.5 text-[#f7985f] font-semibold text-sm mb-2">
                      <Flame className="w-4 h-4 shrink-0" />
                      <span>Flame-Free Lokring Jointing</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      100% fire-safe patented cold-welded copper pipe connections, eliminating brazing fire hazards in occupied commercial buildings and hospitals.
                    </p>
                  </div>

                  {/* Item 4 */}
                  <div className="p-5 rounded-xl bg-[#00153f]/70 border border-slate-800/80 hover:border-[#f7985f]/30 transition-all">
                    <div className="flex items-center gap-2.5 text-[#f7985f] font-semibold text-sm mb-2">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <span>Tier-1 Authorized Partner</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Authorized sales, installation, and warranty channel partner for Daikin, Blue Star, Voltas, and Mitsubishi Electric systems.
                    </p>
                  </div>

                  {/* Item 5 */}
                  <div className="p-5 rounded-xl bg-[#00153f]/70 border border-slate-800/80 hover:border-[#f7985f]/30 transition-all">
                    <div className="flex items-center gap-2.5 text-[#f7985f] font-semibold text-sm mb-2">
                      <Zap className="w-4 h-4 shrink-0" />
                      <span>20% Energy Optimization</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Rigorous airflow balancing and inverter VRV tuning deliver measurable annual electricity savings and prevent premature component failure.
                    </p>
                  </div>

                  {/* Item 6 */}
                  <div className="p-5 rounded-xl bg-[#00153f]/70 border border-slate-800/80 hover:border-[#f7985f]/30 transition-all">
                    <div className="flex items-center gap-2.5 text-[#f7985f] font-semibold text-sm mb-2">
                      <ShieldCheck className="w-4 h-4 shrink-0" />
                      <span>950+ Landmark Installations</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Proven track record across corporate tech hubs, cleanroom pharmaceutical laboratories, IT towers, and luxury hospitality destinations.
                    </p>
                  </div>

                </div>
              </div>
            )}
          </div>

          {/* Dropdown 2: Leadership */}
          <div
            id="leadership"
            className={`rounded-2xl sm:rounded-3xl border transition-all duration-300 overflow-hidden ${
              openDropdowns.leadership
                ? 'bg-[#041a4a] border-[#f7985f]/40 shadow-[0_12px_35px_rgba(0,10,35,0.5)]'
                : 'bg-[#021133] border-[#0b2866] hover:border-[#13409e]'
            }`}
          >
            {/* Accordion Trigger Header */}
            <button
              onClick={toggleLeadership}
              className="w-full px-6 sm:px-8 py-5 sm:py-6 flex items-center justify-between gap-4 text-left cursor-pointer select-none transition-colors"
              aria-expanded={openDropdowns.leadership}
            >
              <div className="flex items-center gap-4 sm:gap-5">
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-all ${
                    openDropdowns.leadership
                      ? 'bg-[#c05e32] text-white shadow-[0_0_16px_rgba(247,152,95,0.4)]'
                      : 'bg-[#00153f] text-[#f7985f] border border-slate-700'
                  }`}
                >
                  <Users className="w-6 h-6 stroke-[1.8]" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-['Outfit'] tracking-tight">
                    Leadership
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                    Executive Direction, Engineering Philosophy & Technical Heads
                  </p>
                </div>
              </div>

              {/* Animated Chevron Indicator */}
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                  openDropdowns.leadership
                    ? 'bg-gradient-to-r from-[#f7985f] to-[#c05e32] text-slate-950 rotate-180 shadow-md'
                    : 'bg-[#00153f] text-slate-400 border border-slate-700'
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            {/* Dropdown Content */}
            {openDropdowns.leadership && (
              <div className="px-6 sm:px-8 pb-8 pt-2 border-t border-[#0b2866]/60 animate-fadeIn space-y-6">
                
                {/* Managing Director Spotlight Card */}
                <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-[#00153f] to-[#041a4a] border border-[#f7985f]/30 shadow-lg mt-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                    <div>
                      <span className="text-xs uppercase tracking-widest text-[#f7985f] font-bold">
                        Executive Leadership
                      </span>
                      <h4 className="text-2xl font-extrabold text-white font-['Outfit'] mt-1">
                        Mr. Pravin Bakshi
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-300 font-medium mt-0.5">
                        Founder & Managing Director | 25+ Years Industry Experience (Ex-Daikin & Ex-Voltas)
                      </p>
                    </div>
                    <div className="self-start md:self-auto px-3.5 py-1.5 rounded-full bg-[#f7985f]/15 border border-[#f7985f]/30 text-[#f7985f] text-xs font-semibold">
                      Certified MEP & ISHRAE Member
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-4 italic">
                    &ldquo;In commercial HVAC and industrial ventilation, precision thermodynamics isn&apos;t just about cooling—it is about preserving structural health, employee productivity, and energy stewardship. We never cut corners on engineering mathematics.&rdquo;
                  </p>
                </div>

                {/* Technical Department Heads */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
                  <div className="p-5 rounded-xl bg-[#00153f]/70 border border-slate-800/80">
                    <h5 className="text-base font-bold text-white font-['Outfit']">
                      Michel Smith
                    </h5>
                    <p className="text-xs text-[#f7985f] font-semibold mt-0.5">
                      Senior HVAC Project Lead
                    </p>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                      14+ Years (Ex-Voltas). Specialist in large-tonnage water-cooled chillers and commercial VRV/VRF duct layout architectures.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-[#00153f]/70 border border-slate-800/80">
                    <h5 className="text-base font-bold text-white font-['Outfit']">
                      Sara Prova
                    </h5>
                    <p className="text-xs text-[#f7985f] font-semibold mt-0.5">
                      MEP Thermal Design Lead
                    </p>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                      B.E. Mechanical (ISHRAE). Leads Class 10k/100k cleanroom AHU, hospital positive pressurization, and NBC ventilation compliance.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-[#00153f]/70 border border-slate-800/80">
                    <h5 className="text-base font-bold text-white font-['Outfit']">
                      Janny Mari
                    </h5>
                    <p className="text-xs text-[#f7985f] font-semibold mt-0.5">
                      24/7 Breakdown Dispatch Head
                    </p>
                    <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                      10+ Years Field Logistics. Oversees rapid response squads, OEM spare inventory logistics, and 60-minute emergency arrival SLAs.
                    </p>
                  </div>
                </div>

              </div>
            )}
          </div>

        </div>

      </div>

    </section>
  );
};
