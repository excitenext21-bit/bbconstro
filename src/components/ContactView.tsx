import React, { useState } from 'react';
import { InnerPageHero } from './InnerPageHero';
import { Phone, Mail, MapPin, CheckCircle2 } from 'lucide-react';
import { LongTailArrowRight } from './LongTailArrow';
import { STATUTORY_DATA } from '../data/hvacData';

interface ContactViewProps {
  onOpenBooking?: (type?: 'emergency' | 'repair' | 'amc') => void;
}

export const ContactView: React.FC<ContactViewProps> = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="relative min-h-screen">
      {/* 1. Dark Theme Hero Section (Emergency breakdown box removed) */}
      <InnerPageHero
        title="Contact B&B Constro HVAC Solutions"
        description="Need urgent breakdown repair, commercial VRV retrofit consultation, or an Annual Maintenance Contract? Our certified engineering team is available round the clock across Pune & PCMC."
        imageSrc="/assets/contact-banner.jpg"
        imageAlt="B&B Constro Engineering Corporate Headquarters Entrance"
        imageClassName="w-full h-full object-cover object-right opacity-60 brightness-100 contrast-105 transition-all duration-700"
      />

      {/* 2. Light Theme Contact & Form Section Below Hero Section */}
      <section
        data-theme="light"
        className="relative py-16 sm:py-20 lg:py-24 bg-[#dce3ea] text-[#00153f] overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-start">
            
            {/* Left Column: Email prompt, Phone No., Address */}
            <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-start">
              
              {/* Phone Outline Icon with 1.5px stroke */}
              <div className="mb-6">
                <Phone className="w-10 h-10 text-[#00153f] stroke-[1.5]" strokeWidth={1.5} />
              </div>

              {/* Bold Inquiry Heading */}
              <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-[#00153f] font-['Outfit'] leading-tight mb-4">
                For commissions and project inquiries, please call:
              </h2>

              {/* Underlined Phone Link */}
              <a
                href={`tel:${STATUTORY_DATA.phone.replace(/\s+/g, '')}`}
                className="inline-block text-xl sm:text-2xl font-bold text-[#00153f] hover:text-[#c05e32] border-b-2 border-[#00153f] pb-0.5 transition-colors mb-8 w-fit"
              >
                +91 772000 7392
              </a>

              {/* Contact Information: Email & Pune Office Address */}
              <div className="space-y-6 pt-6 border-t border-[#00153f]/25">
                
                {/* Email Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-[#00153f]/10 text-[#00153f] flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4 stroke-[1.5]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#00153f]/70 block mb-0.5">
                      Email
                    </span>
                    <a
                      href={`mailto:${STATUTORY_DATA.email}`}
                      className="text-sm sm:text-base font-bold text-[#00153f] hover:text-[#c05e32] transition-colors block"
                    >
                      {STATUTORY_DATA.email}
                    </a>
                  </div>
                </div>

                {/* Pune Office Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-[#00153f]/10 text-[#00153f] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 stroke-[1.5]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#00153f]/70 block mb-0.5">
                      Pune Office
                    </span>
                    <p className="text-[13px] text-[#00153f] leading-relaxed font-normal" style={{ fontSize: '13px' }}>
                      <span className="block">Gala no 2, Behind Ramdev Baba Garage, VIIT Sq.,</span>
                      <span className="block">Upper Indira Nagar, Kondhwa Budruk, Pune - 411037</span>
                    </p>
                  </div>
                </div>

              </div>

            </div>

            {/* Right Column: Form matching reference properties */}
            <div className="lg:col-span-7 xl:col-span-7">
              <div className="w-full">
                
                {/* Form Heading: "Write us" with small dash under "Wr" */}
                <div className="mb-8 sm:mb-10">
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#00153f] font-['Outfit'] leading-tight">
                    Write us
                  </h3>
                  <div className="w-[30px] sm:w-[34px] h-[2px] bg-[#00153f] mt-2 rounded-full" />
                </div>

                {submitted ? (
                  <div className="py-12 text-left">
                    <div className="w-12 h-12 rounded-full bg-emerald-600/15 text-emerald-800 flex items-center justify-center mb-4">
                      <CheckCircle2 className="w-6 h-6 stroke-[1.75]" />
                    </div>
                    <h4 className="text-xl sm:text-2xl font-bold text-[#00153f] font-['Outfit'] mb-2">
                      Thank you! Your message has been sent.
                    </h4>
                    <p className="text-xs sm:text-sm text-[#00153f]/80 max-w-md mb-6 leading-relaxed">
                      Our engineering desk has received your inquiry and will reach out to you within 2 business hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-7 py-2.5 rounded-[3px] border border-[#00153f] text-[#00153f] hover:bg-[#00153f] hover:text-white text-xs font-[300] uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-7 sm:space-y-9">
                    
                    {/* Row 1: First Name & Last Name (Side by side with bottom underline) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 sm:gap-10">
                      
                      {/* First Name */}
                      <div className="flex flex-col">
                        <label className="text-[14px] sm:text-[15px] font-medium text-[#00153f] mb-1">
                          First Name
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          className="w-full bg-transparent border-b border-[#00153f] py-2 text-[#00153f] text-sm sm:text-base outline-none focus:border-b-2 focus:border-[#00153f] transition-all"
                        />
                      </div>

                      {/* Last Name */}
                      <div className="flex flex-col">
                        <label className="text-[14px] sm:text-[15px] font-medium text-[#00153f] mb-1">
                          Last Name
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          className="w-full bg-transparent border-b border-[#00153f] py-2 text-[#00153f] text-sm sm:text-base outline-none focus:border-b-2 focus:border-[#00153f] transition-all"
                        />
                      </div>

                    </div>

                    {/* Row 2: Email * (Full-width with bottom underline) */}
                    <div className="flex flex-col">
                      <label className="text-[14px] sm:text-[15px] font-medium text-[#00153f] mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-transparent border-b border-[#00153f] py-2 text-[#00153f] text-sm sm:text-base outline-none focus:border-b-2 focus:border-[#00153f] transition-all"
                      />
                    </div>

                    {/* Row 3: Phone Number (Bottom underline) */}
                    <div className="flex flex-col">
                      <label className="text-[14px] sm:text-[15px] font-medium text-[#00153f] mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-transparent border-b border-[#00153f] py-2 text-[#00153f] text-sm sm:text-base outline-none focus:border-b-2 focus:border-[#00153f] transition-all"
                      />
                    </div>

                    {/* Row 4: Write a message (Full-width with bottom underline) */}
                    <div className="flex flex-col">
                      <label className="text-[14px] sm:text-[15px] font-medium text-[#00153f] mb-1">
                        Write a message
                      </label>
                      <textarea
                        rows={3}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-transparent border-b border-[#00153f] py-2 text-[#00153f] text-sm sm:text-base outline-none focus:border-b-2 focus:border-[#00153f] transition-all resize-none"
                      />
                    </div>

                    {/* Row 5: Submit Button matching other page pattern (rounded-[3px], border, font-[300], LongTailArrowRight) */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="px-7 py-3 rounded-[3px] bg-transparent border border-[#00153f] text-[#00153f] hover:bg-[#00153f] hover:text-white font-[300] text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2.5 shadow-sm transition-all active:scale-95 cursor-pointer"
                      >
                        <span>Submit</span>
                        <LongTailArrowRight className="w-6 h-3 stroke-[1]" strokeWidth={1} />
                      </button>
                    </div>

                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
