import React, { useEffect } from 'react';
import { X, CheckCircle2, ShieldAlert, Wrench, ShieldCheck, ArrowRight } from 'lucide-react';
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
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!service) return null;

  const isEmergency = service.id === 'emergency-repairs';

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/60 backdrop-blur-xs overflow-hidden animate-fadeIn"
    >
      <div className="relative w-full max-w-[806px] bg-white rounded-2xl border border-slate-200 shadow-2xl flex flex-col overflow-hidden my-auto animate-fadeIn">
        
        {/* Sticky Header with Title and Prominent Close Button */}
        <div className="px-6 py-4 border-b border-slate-200 bg-white flex items-center justify-between shrink-0 z-20">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#00153f]/10 text-[#00153f]">
                {service.category}
              </span>
              {isEmergency && (
                <span className="px-2 py-0.5 rounded-full bg-red-600 text-white text-[10px] font-bold uppercase tracking-wider">
                  24/7 Breakdown SLA
                </span>
              )}
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#00153f] font-['Outfit']">
              {service.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            aria-label="Close Service Details"
            className="p-2 rounded-xl text-slate-500 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body without vertical scroll */}
        <div className="p-5 sm:p-6 space-y-4 flex-1 text-slate-700">
          
          {/* Service Description */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#00153f] mb-2 font-mono">
              Engineering Scope
            </h3>
            <p className="text-sm leading-relaxed text-slate-600">
              {service.fullDesc}
            </p>
          </div>

          {/* Key Specs Row */}
          <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200">
            {service.specs.map((spec, idx) => (
              <div key={idx} className="text-center">
                <span className="text-sm sm:text-base font-bold text-[#00153f] block font-['Outfit']">
                  {spec.value}
                </span>
                <span className="text-[11px] uppercase tracking-wider text-slate-500">
                  {spec.label}
                </span>
              </div>
            ))}
          </div>

          {/* Deliverables Checklist */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#00153f] mb-3 font-mono">
              Technical Deliverables &amp; Standards
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-[#c05e32] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quality Assurance Card */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#c05e32] shrink-0 mt-0.5" />
            <div className="text-xs">
              <span className="font-bold text-[#00153f] block mb-0.5">B&amp;B Constro Quality Assurance</span>
              <span className="text-slate-500">
                All installations are overseen by certified engineers adhering strictly to ISHRAE / ASHRAE guidelines and local municipal building codes.
              </span>
            </div>
          </div>

        </div>

        {/* Sticky Footer Action Buttons */}
        <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between shrink-0">
          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-200 text-xs font-semibold uppercase tracking-wider transition cursor-pointer"
          >
            Close
          </button>

          <button
            onClick={() => {
              onClose();
              onBookService(isEmergency ? 'emergency' : 'repair');
            }}
            className="px-6 py-2.5 rounded-lg bg-[#00153f] hover:bg-[#072669] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition shadow-sm cursor-pointer"
          >
            <span>{isEmergency ? 'Dispatch Emergency' : 'Inquire About This System'}</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#f7985f]" />
          </button>
        </div>

      </div>
    </div>
  );
};
