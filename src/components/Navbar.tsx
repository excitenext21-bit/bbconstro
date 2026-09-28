import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BrandLogo } from './BrandLogo';
import { LongTailArrowRight, LongTailArrowUp } from './LongTailArrow';
import { ActivePage } from '../types';

const ChevronDown = ({ className = 'w-3.5 h-3.5' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const Search = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

const X = ({ className = 'w-6 h-6' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

const Menu = ({ className = 'w-6 h-6' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);

const Phone = ({ className = 'w-3.5 h-3.5' }: { className?: string; strokeWidth?: number }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const ShieldCheck = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const Users = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const COMPANY_PHONE = '+91 91759 74749';
const COMPANY_PHONE_TEL = 'tel:+919175974749';

interface NavbarProps {
  activePage?: ActivePage;
  setActivePage?: (page: ActivePage) => void;
  onOpenBooking: (type?: 'emergency' | 'repair' | 'amc') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  setActivePage,
  onOpenBooking
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [isOverLight, setIsOverLight] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const leftRailRef = useRef<HTMLDivElement>(null);
  const rightRailRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();

  const isInnerPage = location.pathname !== '/';
  const isTransparent = isInnerPage && !isScrolled && !mobileMenuOpen && !searchOpen;

  // Track scroll position to transition header from transparent to solid blue on inner pages
  useEffect(() => {
    // Header is always solid on the home page; only inner pages start transparent
    if (!isInnerPage) {
      setIsScrolled(true);
      return;
    }

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrolled = window.scrollY > 20;
          setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isInnerPage]);

  // Dynamic contrast & footer collision detection for left social rail and right back-to-top rail (desktop >= 1024px only)
  // Uses 100% asynchronous IntersectionObserver to eliminate forced reflow and layout thrashing
  useEffect(() => {
    if (typeof window === 'undefined' || window.innerWidth < 1024) return;

    // 1. Observe light sections intersecting the middle band of the viewport
    const intersectingLightSections = new Set<Element>();
    const contrastObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            intersectingLightSections.add(entry.target);
          } else {
            intersectingLightSections.delete(entry.target);
          }
        });
        setIsOverLight(intersectingLightSections.size > 0);
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    );

    const lightElements = document.querySelectorAll('[data-theme="light"]');
    lightElements.forEach((el) => contrastObserver.observe(el));

    // 2. Observe footer approaching the rails to fade them out smoothly
    const footerObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        const shouldHide = !!entry?.isIntersecting;
        if (leftRailRef.current) {
          leftRailRef.current.style.opacity = shouldHide ? '0' : '1';
          leftRailRef.current.style.pointerEvents = shouldHide ? 'none' : 'auto';
        }
        if (rightRailRef.current) {
          rightRailRef.current.style.opacity = shouldHide ? '0' : '1';
          rightRailRef.current.style.pointerEvents = shouldHide ? 'none' : 'auto';
        }
      },
      { rootMargin: '0px 0px -35% 0px', threshold: 0 }
    );

    const footer = document.getElementById('site-footer') || document.querySelector('footer');
    if (footer) {
      footerObserver.observe(footer);
    }

    return () => {
      contrastObserver.disconnect();
      footerObserver.disconnect();
    };
  }, [location.pathname]);

  // Helper to determine if a route is currently active
  const isCurrent = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  const navLink = (to: string, label: string, hasDropdown = false) => (
    <Link
      to={to}
      className={`flex items-center gap-1.5 hover:text-[#f7985f] transition font-semibold text-[15px] ${
        isCurrent(to) ? 'text-[#f7985f]' : ''
      }`}
    >
      <span>{label}</span>
      {hasDropdown && <ChevronDown className="w-3.5 h-3.5 opacity-70" />}
    </Link>
  );

  const railTextClass = isOverLight
    ? 'text-[#00153f] hover:text-[#c05e32]'
    : 'text-white hover:text-[#f7985f]';

  const railGroupTextClass = isOverLight
    ? 'text-[#00153f] group-hover:text-[#c05e32]'
    : 'text-white group-hover:text-[#f7985f]';

  const railDividerClass = isOverLight
    ? 'bg-[#00153f]/40'
    : 'bg-white/40';

  return (
    <>
      {/* Top Header - Transparent on inner pages at top, solid #00153f on scroll and on home */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isInnerPage ? '-mb-24' : ''
        } ${
          isTransparent
            ? 'bg-transparent border-b border-transparent shadow-none'
            : 'bg-[#00153f] border-b border-[#0a296b]/80 shadow-md backdrop-blur-md'
        }`}
      >
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-8 lg:px-12 h-20 sm:h-24 flex items-center justify-between">
          
          {/* Official Brand Logo */}
          <Link
            to="/"
            className="cursor-pointer group shrink-0"
          >
            <BrandLogo variant="horizontal" size="md" theme="dark" />
          </Link>

          {/* Desktop Navigation Links (Right-Aligned) */}
          <nav className="hidden xl:flex items-center gap-6 2xl:gap-8 text-[15px] text-slate-200 ml-auto mr-6 2xl:mr-8">
            {navLink('/', 'Home')}
            
            {/* About Us with Dropdown: Why choose us & Leadership */}
            <div className="relative group">
              <Link
                to="/about"
                className={`flex items-center gap-1.5 hover:text-[#f7985f] transition font-semibold text-[15px] py-2 ${
                  isCurrent('/about') ? 'text-[#f7985f]' : ''
                }`}
              >
                <span>About Us</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70 group-hover:rotate-180 transition-transform duration-200" />
              </Link>

              {/* Dropdown Menu Popup */}
              <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 min-w-[220px]">
                <div className="bg-[#00143d] border border-slate-700/80 rounded-xl shadow-2xl p-2 space-y-1 backdrop-blur-md">
                  <Link
                    to="/about/why-choose-us"
                    className="flex items-center gap-2.5 px-3.5 py-2 text-sm text-slate-200 hover:text-white hover:bg-[#041a4a] rounded-lg transition-colors"
                  >
                    <ShieldCheck className="w-4 h-4 text-[#f7985f] shrink-0" />
                    <span>Why choose us</span>
                  </Link>
                  <Link
                    to="/about/leadership"
                    className="flex items-center gap-2.5 px-3.5 py-2 text-sm text-slate-200 hover:text-white hover:bg-[#041a4a] rounded-lg transition-colors"
                  >
                    <Users className="w-4 h-4 text-[#f7985f] shrink-0" />
                    <span>Leadership</span>
                  </Link>
                </div>
              </div>
            </div>

            {navLink('/services', 'Capabilities')}
            {navLink('/projects', 'Success Stories')}
            {navLink('/faqs', 'FAQs')}

            {/* Phone Number between FAQs and Connect Us */}
            <a
              href={COMPANY_PHONE_TEL}
              className="flex items-center gap-2 text-slate-200 hover:text-[#f7985f] transition font-semibold text-[15px] shrink-0"
              title="Call B&B Constro"
            >
              <Phone className="w-3.5 h-3.5 text-[#f7985f] stroke-[1.2]" strokeWidth={1.2} />
              <span>{COMPANY_PHONE}</span>
            </a>
          </nav>

          {/* Right Action Icons Group */}
          <div className="flex items-center gap-2.5 sm:gap-3.5">
            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(v => !v)}
              className="xl:hidden p-2 text-slate-300 hover:text-white transition"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Connect Us Button (Desktop & Tablet >= sm) */}
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-[3px] bg-transparent border border-white text-white hover:bg-white hover:text-slate-950 font-[300] text-xs sm:text-sm tracking-wide transition-all shadow-md active:scale-95 shrink-0 cursor-pointer"
              aria-label="Connect Us"
            >
              <span className="font-[300]">Connect Us</span>
              <LongTailArrowRight className="w-6 h-3 stroke-[1]" strokeWidth={1} />
            </Link>
          </div>

        </div>

        {/* Search Input Bar (Dropdown when search is clicked) */}
        {searchOpen && (
          <div className="bg-[#00143d] border-t border-slate-800 px-6 py-4 animate-fadeIn">
            <div className="max-w-3xl mx-auto flex items-center gap-3">
              <Search className="w-5 h-5 text-[#f7985f]" />
              <input
                type="text"
                placeholder="Search HVAC systems, emergency repairs, Daikin VRV, Magarpatta projects..."
                className="w-full bg-transparent border-none text-white text-sm focus:outline-none placeholder:text-slate-500"
                autoFocus
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="text-slate-400 hover:text-white text-xs uppercase tracking-wider font-semibold"
              >
                ESC
              </button>
            </div>
          </div>
        )}

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#00143d] border-t border-slate-800 px-6 py-6 animate-fadeIn space-y-3">
            <div className="grid grid-cols-1 gap-1 text-[15px] font-semibold text-slate-200">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-left py-2.5 px-3 rounded-lg hover:bg-slate-800/60 hover:text-[#f7985f] transition flex justify-between items-center ${
                  isCurrent('/') ? 'text-[#f7985f] bg-slate-800/40' : ''
                }`}
              >
                <span>Home</span>
              </Link>

              {/* About Us with Submenu in Mobile */}
              <div className="space-y-1">
                <Link
                  to="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-left py-2.5 px-3 rounded-lg hover:bg-slate-800/60 hover:text-[#f7985f] transition flex justify-between items-center ${
                    isCurrent('/about') ? 'text-[#f7985f] bg-slate-800/40' : ''
                  }`}
                >
                  <span>About Us</span>
                  <ChevronDown className="w-4 h-4 text-slate-500" />
                </Link>
                <div className="pl-5 space-y-1 pb-1">
                  <Link
                    to="/about/why-choose-us"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2 py-1.5 px-3 text-xs text-slate-300 hover:text-[#f7985f] transition rounded-md hover:bg-slate-800/30"
                  >
                    <ShieldCheck className="w-3.5 h-3.5 text-[#f7985f]" />
                    <span>Why choose us</span>
                  </Link>
                  <Link
                    to="/about/leadership"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2 py-1.5 px-3 text-xs text-slate-300 hover:text-[#f7985f] transition rounded-md hover:bg-slate-800/30"
                  >
                    <Users className="w-3.5 h-3.5 text-[#f7985f]" />
                    <span>Leadership</span>
                  </Link>
                </div>
              </div>

              {([
                { path: '/services', label: 'Capabilities' },
                { path: '/projects', label: 'Success Stories' },
                { path: '/amc', label: 'AMC Plans' },
                { path: '/faqs', label: 'FAQs' },
              ] as { path: string; label: string; hasDropdown?: boolean }[]).map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-left py-2.5 px-3 rounded-lg hover:bg-slate-800/60 hover:text-[#f7985f] transition flex justify-between items-center ${
                    isCurrent(item.path) ? 'text-[#f7985f] bg-slate-800/40' : ''
                  }`}
                >
                  <span>{item.label}</span>
                  {item.hasDropdown && (
                    <ChevronDown className="w-4 h-4 text-slate-500" />
                  )}
                </Link>
              ))}

              {/* Direct Phone Link between FAQs and Connect Us */}
              <a
                href={COMPANY_PHONE_TEL}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2.5 py-2.5 px-3 rounded-lg text-slate-200 hover:bg-slate-800/60 hover:text-[#f7985f] transition text-[15px] font-semibold"
              >
                <Phone className="w-4 h-4 text-[#f7985f] stroke-[1.2]" strokeWidth={1.2} />
                <span>{COMPANY_PHONE}</span>
              </a>

              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={`text-left py-2.5 px-3 rounded-lg hover:bg-slate-800/60 hover:text-[#f7985f] transition flex justify-between items-center ${
                  isCurrent('/contact') ? 'text-[#f7985f] bg-slate-800/40' : ''
                }`}
              >
                <span>Connect Us</span>
              </Link>
            </div>

            <div className="pt-3 border-t border-slate-800">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking('emergency');
                }}
                className="w-full py-3 rounded-[3px] bg-transparent border border-white text-white hover:bg-white hover:text-slate-950 font-[300] text-sm tracking-wide flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <span>Contact Us / Book Emergency Repair</span>
                <LongTailArrowRight className="w-6 h-3 stroke-[1]" strokeWidth={1} />
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Vertical Social Sidebar (Left Rail) - LINKEDIN | INSTAGRAM | FACEBOOK */}
      <div 
        ref={leftRailRef}
        className="hidden lg:flex fixed left-3 xl:left-5 top-1/2 -translate-y-1/2 z-30 flex-col items-center select-none gap-2 transition-opacity duration-300"
      >
        <div className="h-20 flex items-center justify-center">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className={`${railTextClass} transition-colors duration-300 text-[11px] font-bold tracking-[0.22em] uppercase whitespace-nowrap rotate-90 origin-center`}
          >
            LINKEDIN
          </a>
        </div>

        {/* 1px Pipe Divider */}
        <div className={`w-[1px] h-4 ${railDividerClass} transition-colors duration-300`} />

        <div className="h-20 flex items-center justify-center">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className={`${railTextClass} transition-colors duration-300 text-[11px] font-bold tracking-[0.22em] uppercase whitespace-nowrap rotate-90 origin-center`}
          >
            INSTAGRAM
          </a>
        </div>

        {/* 1px Pipe Divider */}
        <div className={`w-[1px] h-4 ${railDividerClass} transition-colors duration-300`} />

        <div className="h-16 flex items-center justify-center">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className={`${railTextClass} transition-colors duration-300 text-[11px] font-bold tracking-[0.22em] uppercase whitespace-nowrap rotate-90 origin-center`}
          >
            FACEBOOK
          </a>
        </div>
      </div>

      {/* Vertical Scroll Indicator (Right Rail) - Back To Top ↑ */}
      <button
        ref={rightRailRef}
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="hidden lg:flex fixed right-3 xl:right-5 top-1/2 -translate-y-1/2 z-30 flex-col items-center gap-2 select-none cursor-pointer group bg-transparent border-none p-0 focus:outline-none transition-opacity duration-300"
        aria-label="Back to top"
      >
        <LongTailArrowUp className={`w-3.5 h-8 ${railGroupTextClass} transition-all duration-300 group-hover:-translate-y-1.5`} strokeWidth={1} />
        <div className="h-24 flex items-center justify-center">
          <span className={`text-[11px] font-bold tracking-[0.22em] uppercase origin-center rotate-90 whitespace-nowrap ${railGroupTextClass} transition-colors duration-300`}>
            Back To Top
          </span>
        </div>
      </button>
    </>
  );
};
