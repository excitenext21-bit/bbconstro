import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';
import { STATUTORY_DATA } from '../data/hvacData';
import { ActivePage, ServiceItem } from '../types';

interface FooterProps {
  onNavClick?: (page: ActivePage) => void;
  onSelectService?: (service: ServiceItem) => void;
  onOpenBooking?: (type?: 'emergency' | 'repair' | 'amc') => void;
}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer id="site-footer" className="relative bg-[#000a1f] text-slate-300 border-t border-[#0b2866]/80 overflow-hidden">
      <div className="max-w-[1520px] mx-auto px-6 sm:px-10 lg:px-16 py-[40px]">
        
        {/* 4-Column Layout matching reference style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Column 1: Brand Logo & Copyright */}
          <div className="lg:col-span-4 flex flex-col items-start gap-4">
            <Link to="/" className="inline-flex items-center min-h-[48px] group" aria-label="B&B Constro Home">
              <img
                src="/bb-constro-logo-white.png"
                alt="B&B Constro Private Limited"
                width={1024}
                height={159}
                className="h-8 sm:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </Link>
            
            <div className="text-[11px] text-slate-400 font-normal leading-relaxed" style={{ fontSize: '11px' }}>
              <p style={{ fontSize: '11px' }}>Copyright © 2026 B&B Constro Pvt Ltd.</p>
              <p style={{ fontSize: '11px' }}>All rights reserved.</p>
            </div>
          </div>

          {/* Column 2: Address */}
          <div className="lg:col-span-3">
            <h4 className="text-sm sm:text-[15px] font-normal text-white font-['Outfit'] mb-3 sm:mb-4">
              Address
            </h4>
            <div className="text-[13px] text-slate-300 leading-relaxed font-normal" style={{ fontSize: '13px' }}>
              <p style={{ fontSize: '13px' }}>Gala no 2, Behind Ramdev Baba Garage, VIIT Sq., Upper Indira Nagar, Kondhwa Budruk, Pune - 411037</p>
            </div>
          </div>

          {/* Column 3: Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-sm sm:text-[15px] font-normal text-white font-['Outfit'] mb-1 sm:mb-2">
              Contact
            </h4>
            <div className="text-[14px] text-slate-300 leading-relaxed font-normal flex flex-col items-start" style={{ fontSize: '14px' }}>
              <a
                href={`mailto:${STATUTORY_DATA.email}`}
                className="min-h-[48px] py-2 inline-flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-slate-400 shrink-0 stroke-[1]" strokeWidth={1} />
                <span>{STATUTORY_DATA.email}</span>
              </a>
              <a
                href={`tel:${STATUTORY_DATA.phone.replace(/\s+/g, '')}`}
                className="min-h-[48px] py-2 inline-flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-slate-400 shrink-0 stroke-[1]" strokeWidth={1} />
                <span>{STATUTORY_DATA.phone}</span>
              </a>
            </div>
          </div>

          {/* Column 4: Socials with 1px underline */}
          <div className="lg:col-span-2">
            <h4 className="text-sm sm:text-[15px] font-normal text-white font-['Outfit'] mb-1 sm:mb-2">
              Socials
            </h4>
            <div className="flex flex-row flex-wrap sm:flex-col items-center sm:items-start gap-x-6 gap-y-1 sm:gap-x-0 text-xs sm:text-[13px] font-normal">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="min-h-[48px] py-2 inline-flex items-center text-slate-300 hover:text-white underline underline-offset-4 decoration-1 decoration-slate-400 hover:decoration-white transition-colors"
              >
                Facebook
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="min-h-[48px] py-2 inline-flex items-center text-slate-300 hover:text-white underline underline-offset-4 decoration-1 decoration-slate-400 hover:decoration-white transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="min-h-[48px] py-2 inline-flex items-center text-slate-300 hover:text-white underline underline-offset-4 decoration-1 decoration-slate-400 hover:decoration-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
};
