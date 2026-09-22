import React from 'react';
import { ShieldCheck, Building, FileText, Landmark, Users, ArrowLeft } from 'lucide-react';
import { STATUTORY_DATA } from '../data/hvacData';

interface StatutoryViewProps {
  onBack: () => void;
}

export const StatutoryView: React.FC<StatutoryViewProps> = ({ onBack }) => {
  return (
    <div className="relative py-16 bg-[#00153f] min-h-screen overflow-hidden">
      {/* Background Image: Starts on right side, blurred, and transitions to transparent where hero text ends */}
      <div
        className="absolute top-0 right-0 h-[450px] w-full sm:w-3/4 lg:w-3/5 xl:w-1/2 overflow-hidden pointer-events-none select-none z-0"
        aria-hidden="true"
      >
        <img
          src="/assets/why-choose-us-banner.jpg"
          alt="B&B Constro Corporate & Statutory Compliance"
          className="w-full h-full object-cover object-right filter blur-[3px] scale-105 opacity-40 brightness-95 contrast-105 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#00153f] via-[#00153f]/80 via-35% to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#00153f]/60 via-transparent to-[#00153f] pointer-events-none" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Back navigation */}
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2 bg-transparent border border-white rounded-[3px] text-white hover:bg-white hover:text-slate-950 font-[300] text-xs mb-8 transition-all cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 stroke-[1.5]" />
          <span className="font-[300]">Back to Overview</span>
        </button>

        <div className="mb-12">
          <span className="text-xs uppercase font-bold tracking-widest text-[#f7985f] block mb-2 font-mono">
            SECTION 4.4 & 4.5 • LEGAL DISCLOSURES & CORPORATE REGISTRATIONS
          </span>
          <h1
            className="text-[32px] sm:text-[38px] font-extrabold text-white font-['Outfit'] tracking-tight leading-[1.18]"
            style={{ fontSize: '38px' }}
          >
            Statutory & Corporate Credentials
          </h1>
          <p className="mt-2 text-slate-400 text-sm sm:text-base">
            Official government registrations, tax identification, banking credentials, and social security compliance records of B&B Constro Private Limited.
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          
          {/* Card 1: Corporate Registration */}
          <div className="p-6 rounded-3xl bg-[#041a4a] border border-slate-800 shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#c05e32]/20 text-[#f7985f] flex items-center justify-center">
                <Building className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white font-['Outfit']">
                  Company Identity
                </h3>
                <span className="text-xs text-slate-400">Incorporated Entity</span>
              </div>
            </div>

            <div className="space-y-3 text-xs">
              <div className="flex justify-between py-2 border-b border-slate-800">
                <span className="text-slate-400">Legal Entity Name:</span>
                <span className="font-bold text-white text-right">{STATUTORY_DATA.companyName}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-800">
                <span className="text-slate-400">Industry Classification:</span>
                <span className="font-medium text-[#f7985f]">HVAC Solutions & Contracting</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-800">
                <span className="text-slate-400">Founding Year:</span>
                <span className="font-bold text-white font-mono">2024 (Roots since 2013)</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-800">
                <span className="text-slate-400">Full-Time Workforce:</span>
                <span className="font-bold text-emerald-400">75+ In-House Certified Staff</span>
              </div>
            </div>
          </div>

          {/* Card 2: Tax & Tax Authorities */}
          <div className="p-6 rounded-3xl bg-[#041a4a] border border-slate-800 shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#c05e32]/20 text-[#f7985f] flex items-center justify-center">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white font-['Outfit']">
                  Tax Identification Numbers
                </h3>
                <span className="text-xs text-slate-400">State & Central Registrations</span>
              </div>
            </div>

            <div className="space-y-3 text-xs">
              <div className="flex justify-between py-2 border-b border-slate-800">
                <span className="text-slate-400">PAN (Income Tax Department):</span>
                <span className="font-bold text-[#f9ab7c] font-mono text-sm">{STATUTORY_DATA.pan}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-800">
                <span className="text-slate-400">GSTIN (Maharashtra):</span>
                <span className="font-bold text-[#f9ab7c] font-mono text-sm">{STATUTORY_DATA.gstin}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-800">
                <span className="text-slate-400">ESIC Employer Code:</span>
                <span className="font-bold text-slate-200 font-mono">{STATUTORY_DATA.empCode}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-800">
                <span className="text-slate-400">Provident Fund (PF-EST ID):</span>
                <span className="font-bold text-slate-200 font-mono">{STATUTORY_DATA.pfEstId}</span>
              </div>
            </div>
          </div>

          {/* Card 3: Banking Credentials */}
          <div className="p-6 rounded-3xl bg-[#041a4a] border border-slate-800 shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#c05e32]/20 text-[#f7985f] flex items-center justify-center">
                <Landmark className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white font-['Outfit']">
                  Authorized Banking Details
                </h3>
                <span className="text-xs text-slate-400">For Official Billing & PO Remittance</span>
              </div>
            </div>

            <div className="space-y-3 text-xs">
              <div className="flex justify-between py-2 border-b border-slate-800">
                <span className="text-slate-400">Bank Name:</span>
                <span className="font-bold text-white">{STATUTORY_DATA.bankDetails.bankName}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-800">
                <span className="text-slate-400">Current Account Number:</span>
                <span className="font-bold text-[#f9ab7c] font-mono text-sm">{STATUTORY_DATA.bankDetails.accountNo}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-800">
                <span className="text-slate-400">IFSC Code:</span>
                <span className="font-bold text-white font-mono">{STATUTORY_DATA.bankDetails.ifsc}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-800">
                <span className="text-slate-400">Branch Name:</span>
                <span className="text-slate-300">{STATUTORY_DATA.bankDetails.branch}</span>
              </div>
            </div>
          </div>

          {/* Card 4: Operating Locations */}
          <div className="p-6 rounded-3xl bg-[#041a4a] border border-slate-800 shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#c05e32]/20 text-[#f7985f] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white font-['Outfit']">
                  Physical Coordinates
                </h3>
                <span className="text-xs text-slate-400">Facilities in Pune</span>
              </div>
            </div>

            <div className="space-y-3 text-xs">
              <div className="py-2 border-b border-slate-800">
                <span className="text-slate-400 block mb-1">Office & Fabrication Workshop:</span>
                <span className="text-slate-200">{STATUTORY_DATA.officeAddress}</span>
              </div>
              <div className="py-2">
                <span className="text-slate-400 block mb-1">Registered Legal Domicile:</span>
                <span className="text-slate-200">{STATUTORY_DATA.registeredAddress}</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
