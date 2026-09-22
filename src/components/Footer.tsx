import React from 'react';
import { Link } from 'react-router-dom';
import { BrandLogo } from './BrandLogo';
import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react';
import { STATUTORY_DATA } from '../data/hvacData';
import { ActivePage, ServiceItem } from '../types';

interface FooterProps {
  onNavClick?: (page: ActivePage) => void;
  onSelectService: (service: ServiceItem) => void;
  onOpenBooking: (type?: 'emergency' | 'repair' | 'amc') => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavClick,
  onSelectService,
  onOpenBooking
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer data-theme="light" className="relative bg-[#dce3ea] text-[#0f172a] pt-16 pb-12 overflow-hidden">

      {/* Main 4-Column Footer Grid matching reference */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
        
        {/* Column 1: Logo & Social Circles */}
        <div>
          <Link
            to="/"
            className="cursor-pointer group mb-4 block"
          >
            <BrandLogo variant="horizontal" size="md" theme="light" />
          </Link>

          <p className="text-xs text-slate-600 leading-relaxed mb-6">
            Pioneering engineering designs, meticulous hardware deployments, and state-of-the-art HVAC system layouts across India's most challenging commercial architectures.
          </p>

          {/* 4 Social Icons in Round Circles matching reference */}
          <div className="flex items-center gap-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full border border-slate-400/80 hover:border-[#c05e32] hover:bg-[#c05e32] hover:text-slate-950 text-slate-700 flex items-center justify-center transition text-xs font-bold"
              aria-label="Facebook"
            >
              f
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full border border-slate-400/80 hover:border-[#c05e32] hover:bg-[#c05e32] hover:text-slate-950 text-slate-700 flex items-center justify-center transition text-xs font-bold"
              aria-label="Twitter"
            >
              t
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full border border-slate-400/80 hover:border-[#c05e32] hover:bg-[#c05e32] hover:text-slate-950 text-slate-700 flex items-center justify-center transition text-xs font-bold"
              aria-label="LinkedIn"
            >
              in
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full border border-slate-400/80 hover:border-[#c05e32] hover:bg-[#c05e32] hover:text-slate-950 text-slate-700 flex items-center justify-center transition text-xs font-bold"
              aria-label="Instagram"
            >
              ig
            </a>
          </div>
        </div>

        {/* Column 2: Get In Touch */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-[#0f172a] mb-5 font-['Outfit']">
            Get In Touch
          </h4>

          <div className="space-y-4 text-xs text-slate-700">
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-[#c05e32] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-[#0f172a] block">Pune Office & Workshop:</span>
                <span>{STATUTORY_DATA.officeAddress}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-[#c05e32] shrink-0" />
              <div>
                <span className="font-bold text-[#0f172a] block">24/7 Service Hotline:</span>
                <a
                  href={`tel:${STATUTORY_DATA.phone.replace(/\s+/g, '')}`}
                  className="text-[#0f172a] hover:text-[#c05e32] font-bold font-mono"
                >
                  {STATUTORY_DATA.phone}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-[#c05e32] shrink-0" />
              <div>
                <span className="font-bold text-[#0f172a] block">Email:</span>
                <a href={`mailto:${STATUTORY_DATA.email}`} className="text-slate-700 hover:text-black">
                  {STATUTORY_DATA.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Column 3: Useful Link */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-[#0f172a] mb-5 font-['Outfit']">
            Useful Link
          </h4>

          <ul className="space-y-2.5 text-xs text-slate-700">
            <li>
              <Link
                to="/about"
                className="hover:text-black transition inline-block"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="hover:text-black transition inline-block"
              >
                Featured Services
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="hover:text-black transition inline-block"
              >
                Our Projects & Cases
              </Link>
            </li>
            <li>
              <button
                onClick={() => onOpenBooking('repair')}
                className="hover:text-black transition text-left"
              >
                Request Consultation
              </button>
            </li>
            <li>
              <Link
                to="/privacy"
                className="hover:text-black transition inline-block"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Explore */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-[#0f172a] mb-5 font-['Outfit']">
            Explore
          </h4>

          <ul className="space-y-2.5 text-xs text-slate-700">
            <li>
              <Link
                to="/services"
                className="hover:text-black transition inline-block"
              >
                All HVAC Systems
              </Link>
            </li>
            <li>
              <Link
                to="/amc"
                className="hover:text-black transition inline-block"
              >
                Annual Maintenance (AMC)
              </Link>
            </li>
            <li>
              <Link
                to="/statutory"
                className="hover:text-black transition inline-block"
              >
                Statutory Info & GST
              </Link>
            </li>
            <li>
              <Link
                to="/terms"
                className="hover:text-black transition inline-block"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-black transition inline-block"
              >
                Contact & Headquarters
              </Link>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Copyright Bar with Scroll to Top */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-8 border-t border-slate-300 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
        <p>
          Copyright © 2026 B&B Constro Pvt Ltd. All rights reserved.
        </p>

        <div className="flex items-center gap-6">
          <Link to="/terms" className="hover:text-black">
            Terms of service
          </Link>
          <span>•</span>
          <Link to="/privacy" className="hover:text-black">
            Privacy policy
          </Link>
          <span>•</span>
          <Link to="/statutory" className="hover:text-black">
            CIN & GST
          </Link>
        </div>

        {/* Floating Scroll to Top Round Yellow Button */}
        <button
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-[#c05e32] hover:bg-[#9f461e] text-slate-950 flex items-center justify-center shadow-lg transition-transform hover:scale-110 active:scale-95"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 stroke-[2.5]" />
        </button>
      </div>

    </footer>
  );
};
