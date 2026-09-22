import React from 'react';
import { ArrowLeft, ShieldCheck, Lock, FileText, CheckCircle2 } from 'lucide-react';
import { STATUTORY_DATA } from '../data/hvacData';

interface PrivacyPolicyProps {
  onBack: () => void;
}

export const PrivacyPolicyView: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
  return (
    <div className="py-16 bg-[#00153f] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button */}
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2 bg-transparent border border-white rounded-[3px] text-white hover:bg-white hover:text-slate-950 font-[300] text-xs mb-8 transition-all cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 stroke-[1.5]" />
          <span className="font-[300]">Back to Home</span>
        </button>

        <div className="mb-10">
          <span className="text-xs uppercase font-bold tracking-widest text-[#f7985f] block mb-2 font-mono">
            LEGAL & DATA PROTECTION POLICY
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-['Outfit'] tracking-tight">
            Privacy Policy & Data Security
          </h1>
          <p className="mt-2 text-slate-400 text-xs sm:text-sm">
            Effective Date: January 1, 2026 • B&B Constro Private Limited (Pune, India)
          </p>
        </div>

        <div className="p-8 sm:p-10 rounded-3xl bg-[#041a4a] border border-slate-800 shadow-2xl space-y-8 text-xs sm:text-sm text-slate-300 leading-relaxed">
          
          <section>
            <h2 className="text-base sm:text-lg font-bold text-white font-['Outfit'] mb-3 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#f7985f]" />
              1. Overview & Commitment
            </h2>
            <p>
              B&B Constro Private Limited ("B&B Constro", "we", "our", or "us") is dedicated to safeguarding the privacy and confidentiality of our clients, facility managers, architects, contractors, and website visitors. This Privacy Policy sets out the principles governing our collection, storage, and processing of technical facility blueprints, personal identification, and service logs.
            </p>
          </section>

          <section>
            <h2 className="text-base sm:text-lg font-bold text-white font-['Outfit'] mb-3 flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#f7985f]" />
              2. Information We Collect
            </h2>
            <p className="mb-2">
              When you interact with our website, request emergency breakdown dispatches, or enter into an Annual Maintenance Contract (AMC), we collect:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-300">
              <li><strong className="text-white">Contact Information:</strong> Full name, corporate email address, mobile phone number, and designation.</li>
              <li><strong className="text-white">Facility Coordinates:</strong> Site physical address, floor plans, building management system (BMS) access points, and Pune locality.</li>
              <li><strong className="text-white">HVAC Technical Metadata:</strong> Equipment make, tonnage (TR), model numbers, refrigerant types (e.g. R410A, R32), and historical fault codes.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base sm:text-lg font-bold text-white font-['Outfit'] mb-3 flex items-center gap-2">
              <Lock className="w-5 h-5 text-[#f7985f]" />
              3. Protection of Architectural Blueprints & Site Data
            </h2>
            <p>
              Under our corporate engineering policy, all CAD drawings, structural MEP layouts, and proprietary facility schematics shared by clients are treated as strictly confidential business property. Such data is stored on encrypted, access-controlled servers and is accessible only to certified engineers assigned to the respective project.
            </p>
          </section>

          <section>
            <h2 className="text-base sm:text-lg font-bold text-white font-['Outfit'] mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#f7985f]" />
              4. Service Dispatch & SMS / WhatsApp Notifications
            </h2>
            <p>
              When you submit a 24/7 emergency repair request or regular maintenance appointment, your phone number and address are routed securely to our Pune dispatch coordinator and the field technician assigned to your zone to ensure SLA adherence (60-90 minutes).
            </p>
          </section>

          <section className="pt-6 border-t border-slate-800 text-xs text-slate-400">
            <h3 className="font-bold text-white mb-1">Corporate Grievance & Compliance Officer</h3>
            <p>B&B Constro Private Limited, Gala no 2, Behind Ramdev Baba Garage, VIIT Sq, Kondhwa Budruk, Pune - 411037.</p>
            <p className="mt-1">
              Email: <a href="mailto:services@bnbconstro.com" className="text-[#f7985f] underline">services@bnbconstro.com</a> | Phone: {STATUTORY_DATA.phone}
            </p>
          </section>

        </div>

      </div>
    </div>
  );
};
