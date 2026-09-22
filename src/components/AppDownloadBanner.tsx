import React from 'react';
import { Smartphone, ShieldCheck, Clock, MapPin } from 'lucide-react';
import { LongTailArrowRight } from './LongTailArrow';
import { STATUTORY_DATA } from '../data/hvacData';

interface AppDownloadBannerProps {
  onOpenBooking: () => void;
}

export const AppDownloadBanner: React.FC<AppDownloadBannerProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-[#00153f] px-4 sm:px-6 lg:px-12">
      
      {/* Dark Rounded Container matching Realar screenshot */}
      <div className="max-w-7xl mx-auto rounded-3xl bg-[#041a4a] border border-slate-800 p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
        
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d0fbb1861593?auto=format&fit=crop&w=1600&q=80"
            alt="HVAC Facility Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
          
          {/* Left Column: Heading, Text & Yellow CTA */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#f7985f] mb-3">
              DIGITAL DISPATCH & LIVE TRACKING
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Outfit'] tracking-tight leading-tight mb-4">
              Get Rapid HVAC Dispatch It's Easy
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
              Connect directly with our 75+ certified field engineers across Pune municipal zones. Real-time technician ETA tracking, digital diagnostic work-orders, and transparent parts pricing directly on your mobile device.
            </p>

            <button
              onClick={onOpenBooking}
              className="px-7 py-3.5 bg-transparent border border-white rounded-[3px] text-white hover:bg-white hover:text-slate-950 font-[300] text-sm tracking-wide transition-all shadow-lg flex items-center gap-2 active:scale-95 cursor-pointer"
            >
              <span className="font-[300]">Book Online Dispatch</span>
              <LongTailArrowRight className="w-6 h-3 stroke-[1]" strokeWidth={1} />
            </button>

          </div>

          {/* Right Column: Realistic Smartphone Mockup Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-64 sm:w-72 rounded-[2.5rem] p-3 bg-slate-950 border-4 border-slate-700 shadow-2xl">
              
              {/* Phone Speaker Notch */}
              <div className="w-24 h-4 bg-slate-900 rounded-full mx-auto mb-3" />

              {/* Inside Screen Content */}
              <div className="rounded-[1.8rem] bg-[#00153f] border border-slate-800 p-4 text-slate-100 flex flex-col gap-3">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <span className="text-[11px] font-bold text-[#f7985f] font-['Outfit']">B&B CONSTRO</span>
                  <span className="text-[9px] text-green-400 font-mono flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" /> LIVE
                  </span>
                </div>

                <div className="bg-[#132037] p-3 rounded-xl border border-slate-700/60">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Emergency Status</span>
                  <span className="text-xs font-bold text-white block mt-0.5">Technician Dispatched</span>
                  <div className="flex items-center gap-1.5 mt-2 text-[10px] text-slate-300">
                    <Clock className="w-3 h-3 text-[#f7985f]" />
                    <span>ETA: 24 Mins (Kondhwa Hub)</span>
                  </div>
                </div>

                <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 text-[10px] space-y-1.5">
                  <div className="flex justify-between">
                    <span className="text-slate-400">System:</span>
                    <span className="text-white font-semibold">Daikin VRV IV</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Issue:</span>
                    <span className="text-red-400 font-semibold">Inverter Fault E4</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Engineer:</span>
                    <span className="text-[#f7985f] font-semibold">M. Deshmukh</span>
                  </div>
                </div>

                <button
                  onClick={onOpenBooking}
                  className="w-full py-2 rounded-lg bg-[#f7985f] text-slate-950 font-bold text-[11px] uppercase tracking-wide text-center"
                >
                  Call Tech On-Duty
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>

    </section>
  );
};
