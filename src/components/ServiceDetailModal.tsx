import React from 'react';
import { X, CheckCircle2, ShieldAlert, Zap, Wrench, Clock, ShieldCheck } from 'lucide-react';
import { LongTailArrowRight } from './LongTailArrow';
import { ServiceItem } from '../types';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookService: (type?: 'emergency' | 'repair' | 'amc') => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onBookService
}) => {
  if (!service) return null;

  const isEmergency = service.id === 'emergency-repairs';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl my-8 rounded-3xl bg-[#041a4a] border border-slate-700/80 shadow-2xl overflow-hidden animate-fadeIn">
        
        {/* Top Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-slate-900/90 text-slate-300 hover:text-white border border-slate-700 transition"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Hero Banner */}
        <div className="relative h-64 sm:h-72 w-full bg-slate-900 overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#041a4a] via-[#041a4a]/40 to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#c05e32]/20 text-[#f9ab7c] border border-[#c05e32]/30">
                {service.category}
              </span>
              <span className="text-xs font-mono text-slate-300">
                STAGE {service.number}
              </span>
              {isEmergency && (
                <span className="px-2.5 py-0.5 rounded-full bg-red-600 text-white text-[10px] font-bold uppercase tracking-wider animate-pulse">
                  24/7 Breakdown SLA
                </span>
              )}
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit']">
              {service.title}
            </h2>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 text-slate-300">
          
          <div>
            <h3 className="text-xs uppercase font-bold tracking-wider text-[#f7985f] mb-2 font-mono">
              Engineering Scope & Description
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-slate-200">
              {service.fullDesc}
            </p>
          </div>

          {/* Key Specs Row */}
          <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-900 border border-slate-800">
            {service.specs.map((spec, idx) => (
              <div key={idx} className="text-center">
                <span className="text-sm sm:text-base font-bold text-[#f7985f] block font-['Outfit']">
                  {spec.value}
                </span>
                <span className="text-[11px] uppercase tracking-wider text-slate-400">
                  {spec.label}
                </span>
              </div>
            ))}
          </div>

          {/* Deliverables Checklist */}
          <div>
            <h3 className="text-xs uppercase font-bold tracking-wider text-[#f7985f] mb-3 font-mono">
              Technical Deliverables & Standards
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#f7985f] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* SLA / Assurance Box */}
          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#f7985f] shrink-0 mt-0.5" />
            <div className="text-xs">
              <span className="font-bold text-white block mb-0.5">B&B Constro Quality Assurance</span>
              <span className="text-slate-400">
                All installations are overseen by certified engineers adhering strictly to ISHRAE / ASHRAE guidelines and local Pune municipal fire & building codes.
              </span>
            </div>
          </div>

          {/* Modal Action Buttons */}
          <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-[3px] bg-transparent border border-white/40 hover:border-white text-slate-300 hover:text-white text-xs font-[300] transition-all cursor-pointer"
            >
              Close
            </button>

            <button
              onClick={() => {
                onClose();
                onBookService(isEmergency ? 'emergency' : 'repair');
              }}
              className="px-6 py-3 bg-transparent border border-white rounded-[3px] text-white hover:bg-white hover:text-slate-950 text-xs font-[300] uppercase tracking-wider flex items-center gap-2 transition-all shadow-lg cursor-pointer"
            >
              {isEmergency ? (
                <>
                  <ShieldAlert className="w-4 h-4 stroke-[1.5]" />
                  <span className="font-[300]">Book Immediate Emergency Repair</span>
                </>
              ) : (
                <>
                  <Wrench className="w-4 h-4" />
                  <span className="font-[300]">Request Engineering Service</span>
                  <LongTailArrowRight className="w-6 h-3 stroke-[1]" strokeWidth={1} />
                </>
              )}
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
