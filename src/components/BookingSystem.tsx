import React, { useState } from 'react';
import { ShieldAlert, Clock, Wrench, CheckCircle2, Phone, MessageSquare, AlertCircle, X, Building, ArrowRight } from 'lucide-react';
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
    preferredTimeSlot: 'Morning (9:00 AM - 12:00 PM)',
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
      setError('Please provide your name and phone number for engineering coordination.');
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
    }, 500);
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
    'Cleanroom & OT Precision HVAC',
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
    <div
      className={`relative w-full ${
        isModal
          ? 'bg-white text-slate-800 rounded-2xl shadow-2xl border border-slate-200 overflow-hidden'
          : 'py-16 bg-[#f8fafc] text-slate-800 border-t border-b border-slate-200'
      }`}
    >
      {/* Header Bar with Title and Close Button */}
      <div className="px-5 py-3 sm:px-7 sm:py-3.5 border-b border-slate-200 bg-white flex items-center justify-between shrink-0">
        <div>
          <h2 className="text-lg sm:text-xl font-bold font-['Outfit'] tracking-tight text-[#00153f]">
            {isEmergency ? 'Emergency HVAC Breakdown Dispatch' : 'Capabilities & Service Inquiry'}
          </h2>
          <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
            B&amp;B Constro Private Limited • Engineering &amp; Turnkey Execution
          </p>
        </div>

        {isModal && onClose && (
          <button
            type="button"
            onClick={onClose}
            aria-label="Close Inquiry Dialog"
            className="p-1.5 sm:p-2 rounded-xl text-slate-500 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Body Container (Without Vertical Scroll) */}
      <div className="p-5 sm:p-6">
        {submittedBooking ? (
          /* Confirmation Success State in Clean Light Theme */
          <div className="py-4 text-center animate-fadeIn">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3 border border-emerald-200 shadow-xs">
              <CheckCircle2 className="w-6 h-6" />
            </div>

            <span className="text-[11px] uppercase tracking-widest text-emerald-700 font-bold block mb-1">
              INQUIRY REGISTERED SUCCESSFULLY
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#00153f] font-['Outfit'] mb-2">
              {submittedBooking.details.urgency === 'immediate'
                ? 'Emergency Dispatch Alert Activated'
                : 'Service Request Confirmed'}
            </h3>
            
            <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto mb-5">
              Our engineering supervisor in Pune has received your request and assigned an HVAC specialist.
            </p>

            {/* Reference Summary Box */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 max-w-md mx-auto mb-5 text-left text-xs">
              <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                <span className="text-slate-500 font-medium">Reference ID:</span>
                <span className="font-mono font-bold text-[#c05e32] text-sm">
                  {submittedBooking.referenceId}
                </span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-slate-200">
                <span className="text-slate-500 font-medium">Location:</span>
                <span className="font-semibold text-slate-800">{submittedBooking.details.puneArea}</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-slate-200">
                <span className="text-slate-500 font-medium">System Type:</span>
                <span className="font-semibold text-slate-800 truncate max-w-[200px]">{submittedBooking.details.systemType}</span>
              </div>
              {submittedBooking.details.email && (
                <div className="flex justify-between items-center py-1.5 border-b border-slate-200">
                  <span className="text-slate-500 font-medium">Email:</span>
                  <span className="font-semibold text-slate-800 truncate max-w-[200px]">{submittedBooking.details.email}</span>
                </div>
              )}
              <div className="flex justify-between items-center pt-1.5">
                <span className="text-slate-500 font-medium">Timeline:</span>
                <span className={`font-bold ${submittedBooking.details.urgency === 'immediate' ? 'text-red-600' : 'text-emerald-700'}`}>
                  {submittedBooking.details.urgency === 'immediate' ? 'Within 60 - 90 Minutes' : `${submittedBooking.details.preferredDate}`}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href={`tel:${STATUTORY_DATA.phone.replace(/\s+/g, '')}`}
                className="px-5 py-2.5 rounded-lg bg-[#00153f] hover:bg-[#072669] text-white text-xs font-semibold uppercase tracking-wider flex items-center gap-2 shadow-xs transition"
              >
                <Phone className="w-4 h-4" />
                <span>Call Hotline</span>
              </a>

              <a
                href={`https://wa.me/917720007392?text=Hello%20B%26B%20Constro,%20inquiry%20Ref:%20${submittedBooking.referenceId}`}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold uppercase tracking-wider flex items-center gap-2 shadow-xs transition"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={handleReset}
                className="px-5 py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold uppercase tracking-wider transition cursor-pointer"
              >
                Close
              </button>
            </div>

          </div>
        ) : (
          /* Clean 3-Column Light Form (Fits screen without vertical scroll) */
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Category Selector Tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 p-1 rounded-xl bg-slate-100 border border-slate-200">
              <button
                type="button"
                onClick={() => setFormData({ ...formData, serviceCategory: 'emergency', urgency: 'immediate' })}
                className={`py-2 px-2 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer ${
                  formData.serviceCategory === 'emergency'
                    ? 'bg-red-600 text-white shadow-xs'
                    : 'text-red-600 hover:bg-white'
                }`}
              >
                <ShieldAlert className="w-3.5 h-3.5" />
                <span>Emergency</span>
              </button>

              <button
                type="button"
                onClick={() => setFormData({ ...formData, serviceCategory: 'repair', urgency: 'flexible' })}
                className={`py-2 px-2 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer ${
                  formData.serviceCategory === 'repair'
                    ? 'bg-[#00153f] text-white shadow-xs'
                    : 'text-slate-700 hover:bg-white hover:text-slate-900'
                }`}
              >
                <Wrench className="w-3.5 h-3.5" />
                <span>General Repair</span>
              </button>

              <button
                type="button"
                onClick={() => setFormData({ ...formData, serviceCategory: 'amc', urgency: 'flexible' })}
                className={`py-2 px-2 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer ${
                  formData.serviceCategory === 'amc'
                    ? 'bg-[#00153f] text-white shadow-xs'
                    : 'text-slate-700 hover:bg-white hover:text-slate-900'
                }`}
              >
                <Clock className="w-3.5 h-3.5" />
                <span>AMC Contract</span>
              </button>

              <button
                type="button"
                onClick={() => setFormData({ ...formData, serviceCategory: 'new_install', urgency: 'flexible' })}
                className={`py-2 px-2 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer ${
                  formData.serviceCategory === 'new_install'
                    ? 'bg-[#00153f] text-white shadow-xs'
                    : 'text-slate-700 hover:bg-white hover:text-slate-900'
                }`}
              >
                <Building className="w-3.5 h-3.5" />
                <span>New Project</span>
              </button>
            </div>

            {/* Emergency Priority Alert Box (Clean Minimal) */}
            {isEmergency && (
              <div className="p-2.5 rounded-lg bg-red-50 border border-red-200 flex items-center gap-2.5 text-red-900 text-xs">
                <ShieldAlert className="w-4 h-4 text-red-600 shrink-0" />
                <span className="font-semibold">60-90 Minute Emergency Response Active across Pune &amp; PCMC</span>
              </div>
            )}

            {error && (
              <div className="p-2.5 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
                <span>{error}</span>
              </div>
            )}

            {/* Form Fields: Efficient 3x3 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
              
              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Pravin Deshpande"
                  value={formData.clientName}
                  onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                  className="w-full px-3 py-1.5 rounded-lg bg-white border border-slate-300 focus:border-[#00153f] focus:ring-1 focus:ring-[#00153f] text-slate-900 text-xs sm:text-sm outline-none transition"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +91 98220 XXXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 py-1.5 rounded-lg bg-white border border-slate-300 focus:border-[#00153f] focus:ring-1 focus:ring-[#00153f] text-slate-900 text-xs sm:text-sm outline-none transition"
                />
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="e.g. name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-1.5 rounded-lg bg-white border border-slate-300 focus:border-[#00153f] focus:ring-1 focus:ring-[#00153f] text-slate-900 text-xs sm:text-sm outline-none transition"
                />
              </div>

              {/* Company / Society Name */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Company / Facility
                </label>
                <input
                  type="text"
                  placeholder="e.g. Magarpatta Tower"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className="w-full px-3 py-1.5 rounded-lg bg-white border border-slate-300 focus:border-[#00153f] focus:ring-1 focus:ring-[#00153f] text-slate-900 text-xs sm:text-sm outline-none transition"
                />
              </div>

              {/* Pune Area Selector */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Pune Area *
                </label>
                <select
                  value={formData.puneArea}
                  onChange={(e) => setFormData({ ...formData, puneArea: e.target.value })}
                  className="w-full px-3 py-1.5 rounded-lg bg-white border border-slate-300 focus:border-[#00153f] text-slate-900 text-xs sm:text-sm outline-none transition cursor-pointer"
                >
                  {PUNE_AREAS.map((area, i) => (
                    <option key={i} value={area}>
                      {area}
                    </option>
                  ))}
                </select>
              </div>

              {/* System Type */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  HVAC System Type
                </label>
                <select
                  value={formData.systemType}
                  onChange={(e) => setFormData({ ...formData, systemType: e.target.value })}
                  className="w-full px-3 py-1.5 rounded-lg bg-white border border-slate-300 focus:border-[#00153f] text-slate-900 text-xs sm:text-sm outline-none transition cursor-pointer"
                >
                  {systemTypes.map((type, i) => (
                    <option key={i} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Time Slot */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Preferred Time Slot
                </label>
                <select
                  value={formData.preferredTimeSlot}
                  onChange={(e) => setFormData({ ...formData, preferredTimeSlot: e.target.value })}
                  className="w-full px-3 py-1.5 rounded-lg bg-white border border-slate-300 focus:border-[#00153f] text-slate-900 text-xs sm:text-sm outline-none transition cursor-pointer"
                >
                  {timeSlots.map((slot, i) => (
                    <option key={i} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>

              {/* Physical Address */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Physical Address
                </label>
                <input
                  type="text"
                  placeholder="e.g. Unit 402, VIIT Square, Kondhwa"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full px-3 py-1.5 rounded-lg bg-white border border-slate-300 focus:border-[#00153f] text-slate-900 text-xs sm:text-sm outline-none transition"
                />
              </div>

              {/* Project Scope / Notes */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Project Scope / Notes
                </label>
                <input
                  type="text"
                  placeholder="Briefly describe your requirements..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-3 py-1.5 rounded-lg bg-white border border-slate-300 focus:border-[#00153f] text-slate-900 text-xs sm:text-sm outline-none transition"
                />
              </div>

            </div>

            {/* Bottom Actions Bar */}
            <div className="flex items-center justify-end gap-3 pt-2.5 border-t border-slate-200">
              {isModal && onClose && (
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100 text-xs font-semibold uppercase tracking-wider transition cursor-pointer"
                >
                  Cancel
                </button>
              )}

              <button
                type="submit"
                disabled={loading}
                className={`px-6 py-2 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-sm cursor-pointer ${
                  isEmergency
                    ? 'bg-red-600 hover:bg-red-700 text-white'
                    : 'bg-[#00153f] hover:bg-[#072669] text-white'
                }`}
              >
                {loading ? (
                  <span>Processing...</span>
                ) : (
                  <>
                    <span>{isEmergency ? 'Dispatch Emergency' : 'Submit Inquiry'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
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
