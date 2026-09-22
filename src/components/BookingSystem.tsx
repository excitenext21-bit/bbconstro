import React, { useState } from 'react';
import { ShieldAlert, Clock, Calendar, MapPin, Wrench, CheckCircle2, Phone, MessageSquare, AlertCircle, X, Building } from 'lucide-react';
import { LongTailArrowRight } from './LongTailArrow';
import { PUNE_AREAS, STATUTORY_DATA } from '../data/hvacData';
import { BookingFormData } from '../types';

interface BookingSystemProps {
  initialServiceCategory?: 'emergency' | 'repair' | 'amc' | 'new_install' | 'consultancy';
  isModal?: boolean;
  onClose?: () => void;
}

export const BookingSystem: React.FC<BookingSystemProps> = ({
  initialServiceCategory = 'repair',
  isModal = false,
  onClose
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    serviceCategory: initialServiceCategory,
    systemType: 'VRV / VRF System',
    puneArea: PUNE_AREAS[0],
    urgency: initialServiceCategory === 'emergency' ? 'immediate' : 'flexible',
    clientName: '',
    companyName: '',
    phone: '',
    email: '',
    address: '',
    preferredDate: new Date().toISOString().split('T')[0],
    preferredTimeSlot: 'Morning (9 AM - 12 PM)',
    description: '',
    estimatedTonnage: '5 - 20 TR'
  });

  const [submittedBooking, setSubmittedBooking] = useState<{
    referenceId: string;
    submittedAt: string;
    details: BookingFormData;
  } | null>(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isEmergency = formData.serviceCategory === 'emergency' || formData.urgency === 'immediate';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!formData.clientName.trim() || !formData.phone.trim()) {
      setError('Please provide your name and phone number for technician coordination.');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      const randomNum = Math.floor(1000 + Math.random() * 9000);
      const prefix = isEmergency ? 'EMERG-PUNE' : 'BBC-HVAC';
      const refId = `${prefix}-${randomNum}`;

      setSubmittedBooking({
        referenceId: refId,
        submittedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        details: { ...formData, bookingId: refId }
      });
      setLoading(false);
    }, 600);
  };

  const handleReset = () => {
    setSubmittedBooking(null);
    if (onClose) onClose();
  };

  const systemTypes = [
    'VRV / VRF System (Daikin, BlueStar, Voltas)',
    'Air-Cooled or Water-Cooled Chiller',
    'Concealed Ductable AC',
    'Ceiling Cassette Unit',
    'Staircase / Lobby Pressurisation System',
    'Basement Car Parking Jet Fan Ventilation',
    'Operation Theatre / Cleanroom Precision HVAC',
    'Package / Rooftop Central Unit'
  ];

  const timeSlots = [
    'Immediate (Emergency Dispatch 60-90 min)',
    'Morning (9:00 AM - 12:00 PM)',
    'Afternoon (12:00 PM - 3:00 PM)',
    'Evening (3:00 PM - 7:00 PM)',
    'Night Shift (Industrial Maintenance)'
  ];

  return (
    <div className={`relative ${isModal ? 'p-0' : 'py-20 bg-[#080d18] border-t border-slate-800/80'}`}>
      
      {!isModal && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
          <span className="text-xs uppercase font-bold tracking-widest text-[#f7985f] block mb-2">
            RAPID RESPONSE DISPATCH ENGINE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Outfit'] tracking-tight">
            Book HVAC Repair or Engineering Service
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Guaranteed technician arrival across all Pune commercial hubs and residential societies. For critical cooling failures, select Emergency for priority 60-90 min mobilization.
          </p>
        </div>
      )}

      <div className={`max-w-4xl mx-auto ${isModal ? 'p-6 sm:p-8 bg-[#041a4a] rounded-3xl border border-slate-800' : 'px-4 sm:px-6 lg:px-8'}`}>
        
        {/* Modal Close Button */}
        {isModal && onClose && (
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full text-slate-400 hover:text-white bg-slate-900 border border-slate-800 hover:border-slate-700 transition"
          >
            <X className="w-5 h-5" />
          </button>
        )}

        {submittedBooking ? (
          /* Confirmation Success State */
          <div className="p-8 sm:p-10 rounded-3xl bg-[#0b1220] border-2 border-emerald-500/60 shadow-2xl text-center animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/40">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <span className="text-xs uppercase tracking-widest text-emerald-400 font-bold block mb-1">
              BOOKING REGISTERED SUCCESSFULLY
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Outfit'] mb-2">
              {submittedBooking.details.urgency === 'immediate'
                ? '🚨 Emergency Dispatch Activated!'
                : 'Service Appointment Scheduled!'}
            </h3>
            
            <p className="text-slate-300 text-sm max-w-lg mx-auto mb-6">
              Our service supervisor in Pune has received your request. An HVAC specialist has been assigned for coordination.
            </p>

            {/* Reference Box */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 max-w-md mx-auto mb-8 text-left">
              <div className="flex justify-between items-center pb-3 border-b border-slate-800 text-xs">
                <span className="text-slate-400">Booking Reference:</span>
                <span className="font-mono font-bold text-[#f7985f] text-sm">
                  {submittedBooking.referenceId}
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-800 text-xs">
                <span className="text-slate-400">Target Area:</span>
                <span className="font-semibold text-white">{submittedBooking.details.puneArea}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-800 text-xs">
                <span className="text-slate-400">System:</span>
                <span className="font-semibold text-white truncate max-w-[200px]">{submittedBooking.details.systemType}</span>
              </div>
              <div className="flex justify-between items-center pt-2 text-xs">
                <span className="text-slate-400">Estimated Arrival:</span>
                <span className={`font-bold ${submittedBooking.details.urgency === 'immediate' ? 'text-red-400 animate-pulse' : 'text-emerald-400'}`}>
                  {submittedBooking.details.urgency === 'immediate' ? 'Within 60 - 90 Mins' : `${submittedBooking.details.preferredDate} (${submittedBooking.details.preferredTimeSlot.split(' ')[0]})`}
                </span>
              </div>
            </div>

            {/* Urgent Direct Dial / WhatsApp Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={`tel:${STATUTORY_DATA.phone.replace(/\s+/g, '')}`}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#f7985f] to-[#c05e32] hover:from-[#ff9f68] hover:to-[#d46d3e] text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-[0_4px_16px_rgba(247,152,95,0.25)]"
              >
                <Phone className="w-4 h-4" />
                <span>Call Hotline: {STATUTORY_DATA.phone}</span>
              </a>

              <a
                href={`https://wa.me/917720007392?text=Hello%20B%26B%20Constro,%20I%20have%20booked%20HVAC%20service%20Ref:%20${submittedBooking.referenceId}`}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-emerald-900/40"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Coordinator</span>
              </a>

              <button
                onClick={handleReset}
                className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs uppercase tracking-wider transition"
              >
                Done / Book Another
              </button>
            </div>

          </div>
        ) : (
          /* Form Entry */
          <form
            onSubmit={handleSubmit}
            className="p-6 sm:p-10 rounded-3xl bg-[#041a4a] border border-slate-800 shadow-2xl"
          >
            {/* Category Selector Tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-8 p-1.5 rounded-2xl bg-slate-900 border border-slate-800">
              <button
                type="button"
                onClick={() => setFormData({ ...formData, serviceCategory: 'emergency', urgency: 'immediate' })}
                className={`py-3 px-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 ${
                  formData.serviceCategory === 'emergency'
                    ? 'bg-red-600 text-white shadow-lg shadow-red-900/50 animate-pulse'
                    : 'text-red-400 hover:bg-slate-800'
                }`}
              >
                <ShieldAlert className="w-4 h-4" />
                <span>🚨 Emergency (60m)</span>
              </button>

              <button
                type="button"
                onClick={() => setFormData({ ...formData, serviceCategory: 'repair', urgency: 'flexible' })}
                className={`py-3 px-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 ${
                  formData.serviceCategory === 'repair'
                    ? 'bg-gradient-to-r from-[#f7985f] to-[#c05e32] text-slate-950 shadow-md shadow-[0_4px_16px_rgba(247,152,95,0.25)]'
                    : 'text-slate-300 hover:bg-slate-800'
                }`}
              >
                <Wrench className="w-4 h-4" />
                <span>General Repair</span>
              </button>

              <button
                type="button"
                onClick={() => setFormData({ ...formData, serviceCategory: 'amc', urgency: 'flexible' })}
                className={`py-3 px-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 ${
                  formData.serviceCategory === 'amc'
                    ? 'bg-gradient-to-r from-[#f7985f] to-[#c05e32] text-slate-950 shadow-md shadow-[0_4px_16px_rgba(247,152,95,0.25)]'
                    : 'text-slate-300 hover:bg-slate-800'
                }`}
              >
                <Clock className="w-4 h-4" />
                <span>AMC Contract</span>
              </button>

              <button
                type="button"
                onClick={() => setFormData({ ...formData, serviceCategory: 'new_install', urgency: 'flexible' })}
                className={`py-3 px-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 ${
                  formData.serviceCategory === 'new_install'
                    ? 'bg-gradient-to-r from-[#f7985f] to-[#c05e32] text-slate-950 shadow-md shadow-[0_4px_16px_rgba(247,152,95,0.25)]'
                    : 'text-slate-300 hover:bg-slate-800'
                }`}
              >
                <Building className="w-4 h-4" />
                <span>New Project / VRV</span>
              </button>
            </div>

            {/* Emergency Priority Alert Box */}
            {isEmergency && (
              <div className="mb-8 p-4 rounded-2xl bg-red-950/60 border border-red-500/50 flex items-start gap-3.5">
                <ShieldAlert className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-red-300">
                    High-Priority Emergency Repair Mode Active
                  </h4>
                  <p className="text-xs text-red-200/80 mt-0.5">
                    Your request will trigger immediate technician dispatch alert across Pune. Average on-site arrival is 60-90 minutes. For zero delay, you can also dial <a href="tel:+917720007392" className="underline font-bold text-[#f9ab7c]">+91 772000 7392</a>.
                  </p>
                </div>
              </div>
            )}

            {error && (
              <div className="mb-6 p-4 rounded-xl bg-red-900/30 border border-red-500/40 text-red-300 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {/* Form Fields Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Pravin Deshpande"
                  value={formData.clientName}
                  onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-[#c05e32] focus:ring-1 focus:ring-amber-500 text-white text-sm outline-none transition"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  Mobile Number (For Dispatch SMS) *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +91 98220 XXXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-[#c05e32] focus:ring-1 focus:ring-amber-500 text-white text-sm outline-none transition"
                />
              </div>

              {/* Company / Society Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  Company / Society / Facility Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Magarpatta Tower / Sun Crest Society"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-[#c05e32] focus:ring-1 focus:ring-amber-500 text-white text-sm outline-none transition"
                />
              </div>

              {/* Pune Area Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  Pune Locality / Area *
                </label>
                <select
                  value={formData.puneArea}
                  onChange={(e) => setFormData({ ...formData, puneArea: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-[#c05e32] text-white text-sm outline-none transition cursor-pointer"
                >
                  {PUNE_AREAS.map((area, i) => (
                    <option key={i} value={area} className="bg-slate-900 text-white">
                      {area}
                    </option>
                  ))}
                </select>
              </div>

              {/* System Type */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  HVAC System Type
                </label>
                <select
                  value={formData.systemType}
                  onChange={(e) => setFormData({ ...formData, systemType: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-[#c05e32] text-white text-sm outline-none transition cursor-pointer"
                >
                  {systemTypes.map((type, i) => (
                    <option key={i} value={type} className="bg-slate-900 text-white">
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Time Slot / Urgency */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  Preferred Time Slot
                </label>
                <select
                  value={formData.preferredTimeSlot}
                  onChange={(e) => setFormData({ ...formData, preferredTimeSlot: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-[#c05e32] text-white text-sm outline-none transition cursor-pointer"
                >
                  {timeSlots.map((slot, i) => (
                    <option key={i} value={slot} className="bg-slate-900 text-white">
                      {slot}
                    </option>
                  ))}
                </select>
              </div>

            </div>

            {/* Address Details */}
            <div className="mb-6">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                Physical Address & Floor Details in Pune
              </label>
              <input
                type="text"
                placeholder="e.g. Flat 402, Tower B, VIIT Square, Gangadham Road, Kondhwa Budruk"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-[#c05e32] text-white text-sm outline-none transition"
              />
            </div>

            {/* Problem / Scope Description */}
            <div className="mb-8">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                Description of Issue / Scope Requirements
              </label>
              <textarea
                rows={3}
                placeholder="e.g. Compressor trip error code E3 on VRV outdoor unit, abnormal vibration, cooling loss on 3rd floor..."
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-[#c05e32] text-white text-sm outline-none transition resize-none"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <MapPin className="w-4 h-4 text-[#f7985f] shrink-0" />
                <span>Dedicated fleet servicing Pune & PCMC districts</span>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full sm:w-auto px-8 py-4 bg-transparent border rounded-[3px] text-xs font-[300] uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-xl cursor-pointer ${
                  isEmergency
                    ? 'border-red-500 text-red-400 hover:bg-red-500 hover:text-white animate-pulse'
                    : 'border-white text-white hover:bg-white hover:text-slate-950'
                }`}
              >
                {loading ? (
                  <span className="font-[300]">Assigning Nearest Technician...</span>
                ) : (
                  <>
                    <span className="font-[300]">{isEmergency ? '🚨 Dispatch Emergency Technician' : 'Confirm Service Request'}</span>
                    <LongTailArrowRight className="w-6 h-3 stroke-[1]" strokeWidth={1} />
                  </>
                )}
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
