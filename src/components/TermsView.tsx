import React from 'react';
import { ArrowLeft, ShieldCheck, FileCheck, AlertTriangle } from 'lucide-react';
import { STATUTORY_DATA } from '../data/hvacData';

interface TermsViewProps {
  onBack: () => void;
}

export const TermsView: React.FC<TermsViewProps> = ({ onBack }) => {
  return (
    <div className="relative py-16 bg-[#00153f] min-h-screen overflow-hidden">
      {/* Background Image: Starts on right side, blurred, and transitions to transparent where hero text ends */}
      <div
        className="absolute top-0 right-0 h-[450px] w-full sm:w-3/4 lg:w-3/5 xl:w-1/2 overflow-hidden pointer-events-none select-none z-0"
        aria-hidden="true"
      >
        <img
          src="/assets/why-choose-us-banner.jpg"
          alt="B&B Constro Terms of Service"
          className="w-full h-full object-cover object-right filter blur-[3px] scale-105 opacity-40 brightness-95 contrast-105 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#00153f] via-[#00153f]/80 via-35% to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#00153f]/60 via-transparent to-[#00153f] pointer-events-none" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2 bg-transparent border border-white rounded-[3px] text-white hover:bg-white hover:text-slate-950 font-[300] text-xs mb-8 transition-all cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 stroke-[1.5]" />
          <span className="font-[300]">Back to Home</span>
        </button>

        <div className="mb-10">
          <span className="text-xs uppercase font-bold tracking-widest text-[#f7985f] block mb-2 font-mono">
            TERMS OF SERVICE & SLA AGREEMENTS
          </span>
          <h1
            className="text-[32px] sm:text-[38px] font-extrabold text-white font-['Outfit'] tracking-tight leading-[1.18]"
            style={{ fontSize: '38px' }}
          >
            Terms of Engineering & Service Delivery
          </h1>
          <p className="mt-2 text-slate-400 text-xs sm:text-sm">
            B&B Constro Private Limited • Pune, Maharashtra
          </p>
        </div>

        <div className="p-8 sm:p-10 rounded-3xl bg-[#041a4a] border border-slate-800 shadow-2xl space-y-8 text-xs sm:text-sm text-slate-300 leading-relaxed">
          
          <section>
            <h2 className="text-base sm:text-lg font-bold text-white font-['Outfit'] mb-3 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#f7985f]" />
              1. Scope of Services
            </h2>
            <p>
              B&B Constro Private Limited provides HVAC consultancy, engineering modeling, turnkey system installations (VRV/VRF, central chillers, ventilation systems), 24/7 breakdown emergency recovery, and structured Annual Maintenance Contracts (AMC) across Pune and Western Maharashtra.
            </p>
          </section>

          <section>
            <h2 className="text-base sm:text-lg font-bold text-white font-['Outfit'] mb-3 flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-[#f7985f]" />
              2. Emergency Breakdown Dispatch (60-90 Min SLA)
            </h2>
            <p>
              Our emergency response team commits to on-site arrival within 60 to 90 minutes within defined Pune municipal limits (Kondhwa, Hinjewadi, Magarpatta, Baner, Kothrud, Hadapsar, Viman Nagar, Bhosari, Chakan). Arrival times may vary subject to extreme road congestion or weather conditions, but technical telephone triage commences immediately upon booking.
            </p>
          </section>

          <section>
            <h2 className="text-base sm:text-lg font-bold text-white font-['Outfit'] mb-3 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-[#f7985f]" />
              3. AMC Terms & Service Protocols
            </h2>
            <p>
              All Annual Maintenance Contracts follow our standardized 3-visit schedule per year (2 scheduled dry services and 1 deep chemical wet service), unless custom SLA frequency is contracted in writing. Spares and compressor replacements under Comprehensive AMC are guaranteed genuine OEM parts (Daikin, Voltas, Blue Star, Carrier, Hitachi).
            </p>
          </section>

          <section className="pt-6 border-t border-slate-800 text-xs text-slate-400">
            <h3 className="font-bold text-white mb-1">Corporate Billing Inquiries</h3>
            <p>GSTIN: {STATUTORY_DATA.gstin} | PAN: {STATUTORY_DATA.pan}</p>
            <p className="mt-1">
              For commercial contracts: <a href="mailto:services@bnbconstro.com" className="text-[#f7985f] underline">services@bnbconstro.com</a>
            </p>
          </section>

        </div>

      </div>
    </div>
  );
};
