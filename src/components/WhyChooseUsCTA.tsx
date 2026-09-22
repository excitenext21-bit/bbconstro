import React from 'react';
import { Phone, ShieldCheck, Zap, Clock, ShieldAlert } from 'lucide-react';
import { LongTailArrowRight } from './LongTailArrow';
import { STATUTORY_DATA } from '../data/hvacData';

interface WhyChooseUsCTAProps {
  onOpenBooking: (type?: 'emergency' | 'repair' | 'amc') => void;
  onContactClick: () => void;
}

export const WhyChooseUsCTA: React.FC<WhyChooseUsCTAProps> = ({
  onOpenBooking,
  onContactClick
}) => {
  return (
    <section className="relative py-20 bg-[#00153f] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner matching Realar's "Buying & Selling We Make It Simple" */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#041a4a] via-[#111c34] to-[#041a4a] border border-slate-800 shadow-2xl">
          
          {/* Decorative background lights */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#f7985f]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Copy */}
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wider mb-4">
                <ShieldAlert className="w-3.5 h-3.5" />
                <span>24/7 HVAC Breakdown Support across Pune</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-['Outfit'] tracking-tight leading-tight">
                Need Fast On-Site Diagnostics <br className="hidden sm:inline" />
                or Turnkey VRV Implementation?
              </h2>

              <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                Whether you run an IT server room requiring 24/7 climate stability or manage a premium residential society needing an urgent compressor overhaul, our certified engineers arrive within 60 minutes.
              </p>

              {/* Service Highlights */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 pb-8 border-b border-slate-800">
                <div className="flex items-center gap-2 text-xs text-slate-300 font-semibold">
                  <ShieldCheck className="w-4 h-4 text-[#f7985f] shrink-0" />
                  <span>Daikin & Blue Star Auth.</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300 font-semibold">
                  <Zap className="w-4 h-4 text-[#f7985f] shrink-0" />
                  <span>Energy Audits Included</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300 font-semibold">
                  <Clock className="w-4 h-4 text-[#f7985f] shrink-0" />
                  <span>60-Min Emergency SLA</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenBooking('repair')}
                  className="px-8 py-3.5 bg-transparent border border-white rounded-[3px] text-white hover:bg-white hover:text-slate-950 font-[300] text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg transition-all active:scale-95 cursor-pointer"
                >
                  <span className="font-[300]">Book Service / Consultation</span>
                  <LongTailArrowRight className="w-6 h-3 stroke-[1]" strokeWidth={1} />
                </button>

                <button
                  onClick={onContactClick}
                  className="px-6 py-3.5 bg-transparent border border-white/70 hover:border-white rounded-[3px] text-white hover:bg-white hover:text-slate-950 font-[300] text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Phone className="w-4 h-4 stroke-[1.5]" />
                  <span className="font-[300]">Contact Pune Office</span>
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
