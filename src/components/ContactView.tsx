import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, ShieldAlert, Send, CheckCircle2 } from 'lucide-react';
import { STATUTORY_DATA } from '../data/hvacData';

interface ContactViewProps {
  onOpenBooking: (type?: 'emergency' | 'repair' | 'amc') => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onOpenBooking }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: 'Commercial HVAC Query',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-16 bg-[#00153f] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs uppercase font-bold tracking-widest text-[#f7985f] block mb-2 font-mono">
            GET IN TOUCH • PUNE HEADQUARTERS
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-['Outfit'] tracking-tight">
            Contact B&B Constro HVAC Solutions
          </h1>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Need urgent breakdown repair, commercial VRV retrofit consultation, or an Annual Maintenance Contract? Our certified engineering team is available round the clock.
          </p>
        </div>

        {/* 24/7 Emergency Dispatch Strip */}
        <div className="mb-12 p-6 rounded-2xl bg-red-950/40 border border-red-500/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-red-600 text-white flex items-center justify-center shrink-0 shadow-lg shadow-red-950/50">
              <ShieldAlert className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <span className="text-sm font-bold text-white block">
                Immediate Emergency Breakdown Dispatch
              </span>
              <span className="text-xs text-red-200">
                Active teams across Kondhwa, Hinjewadi, Magarpatta, Baner, and PCMC industrial belts.
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${STATUTORY_DATA.phone.replace(/\s+/g, '')}`}
              className="px-5 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg"
            >
              <Phone className="w-4 h-4" />
              <span>Call: {STATUTORY_DATA.phone}</span>
            </a>

            <button
              onClick={() => onOpenBooking('emergency')}
              className="px-5 py-3 rounded-xl bg-gradient-to-r from-[#f7985f] to-[#c05e32] hover:from-[#ff9f68] hover:to-[#d46d3e] text-slate-950 font-bold text-xs uppercase tracking-wider transition"
            >
              Book 60-Min SLA
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Office Details */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Office & Workshop Card */}
            <div className="p-6 rounded-3xl bg-[#041a4a] border border-slate-800 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#c05e32]/20 text-[#f7985f] flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white font-['Outfit']">
                    Pune Office & Workshop
                  </h3>
                  <span className="text-xs text-slate-400">Main Fabrication & Dispatch Center</span>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                {STATUTORY_DATA.officeAddress}
              </p>

              <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 space-y-1">
                <div className="flex justify-between">
                  <span>Landmark:</span>
                  <span className="text-slate-300 font-medium">Near VIIT College Square</span>
                </div>
                <div className="flex justify-between">
                  <span>Postal Code:</span>
                  <span className="text-slate-300 font-mono">Pune - 411037</span>
                </div>
              </div>
            </div>

            {/* Registered Corporate Office */}
            <div className="p-6 rounded-3xl bg-[#041a4a] border border-slate-800 shadow-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-slate-800 text-slate-300 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white font-['Outfit']">
                    Registered Office
                  </h3>
                  <span className="text-xs text-slate-400">Corporate & Legal HQ</span>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                {STATUTORY_DATA.registeredAddress}
              </p>
            </div>

            {/* Hours & Response */}
            <div className="p-6 rounded-3xl bg-[#041a4a] border border-slate-800 shadow-xl space-y-4">
              <div className="flex items-start gap-3 text-xs">
                <Clock className="w-5 h-5 text-[#f7985f] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block mb-0.5">Operating Hours</span>
                  <p className="text-slate-300">Mon - Sat: 9:00 AM – 7:30 PM (Engineering Office)</p>
                  <p className="text-[#f7985f] font-semibold mt-0.5">Emergency Breakdown Service: 24 Hours / 365 Days</p>
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs pt-3 border-t border-slate-800">
                <MessageSquare className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block mb-0.5">WhatsApp Dispatch Helpline</span>
                  <a
                    href="https://wa.me/917720007392"
                    target="_blank"
                    rel="noreferrer"
                    className="text-emerald-400 hover:text-emerald-300 font-medium"
                  >
                    Chat with Engineering Desk (+91 772000 7392)
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Contact & Project Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#041a4a] border border-slate-800 shadow-2xl">
              
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-['Outfit'] mb-2">
                    Inquiry Transmitted Successfully
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto mb-6">
                    Our technical consultant will review your HVAC specs and contact you within 2 business hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-slate-800 text-[#f7985f] font-bold text-xs"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-white font-['Outfit'] mb-1">
                      Send Us an HVAC Inquiry
                    </h3>
                    <p className="text-xs text-slate-400">
                      Fill out this form and our engineering team will get back to you promptly.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Patil"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 focus:border-[#c05e32] text-white text-sm outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +91 98220 XXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 focus:border-[#c05e32] text-white text-sm outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. rahul@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 focus:border-[#c05e32] text-white text-sm outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                        Company / Society Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Tech Park / Solitaire"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 focus:border-[#c05e32] text-white text-sm outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      Inquiry Category
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 focus:border-[#c05e32] text-white text-sm outline-none"
                    >
                      <option value="Commercial HVAC Query">Commercial HVAC Query (VRV/VRF or Chillers)</option>
                      <option value="Breakdown Emergency">24/7 Breakdown Emergency Dispatch</option>
                      <option value="Annual Maintenance Contract">Annual Maintenance Contract (AMC) Tiers</option>
                      <option value="Ventilation Pressurisation">Staircase / Basement Jet Fan Ventilation</option>
                      <option value="Cleanroom OT">Cleanroom / Hospital OT Airflow</option>
                      <option value="Other Technical Query">Other Technical Engineering Query</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                      Message & Requirements
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Please specify site location in Pune, estimated area in sq. ft. or tonnage, and required timeline..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 focus:border-[#c05e32] text-white text-sm outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-transparent border border-white rounded-[3px] text-white hover:bg-white hover:text-slate-950 font-[300] text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4 stroke-[1.5]" />
                    <span className="font-[300]">Send Message to B&B Constro Team</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
