import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';
import { initScrollReveal } from './utils/scrollReveal';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InnerPageHero } from './components/InnerPageHero';
import { StatsBar } from './components/StatsBar';
import { AboutSection } from './components/AboutSection';
import { WhoWeAreSection } from './components/WhoWeAreSection';
import { VisionMissionSection } from './components/VisionMissionSection';
import { ValuesSection } from './components/ValuesSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { ServicesSection } from './components/ServicesSection';
import { CapabilitiesChamferSection } from './components/CapabilitiesChamferSection';
import { TeamMembersSection } from './components/TeamMembersSection';
import { ConsultingBanner } from './components/ConsultingBanner';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ClientMarquee } from './components/ClientMarquee';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { ServiceItem } from './types';

// Code-split non-critical routes and modals to prevent chaining critical dependencies on initial page load
const WhyChooseUsView = lazy(() => import('./components/WhyChooseUsView').then(m => ({ default: m.WhyChooseUsView })));
const LeadershipView = lazy(() => import('./components/LeadershipView').then(m => ({ default: m.LeadershipView })));
const ProjectShowcase = lazy(() => import('./components/ProjectShowcase').then(m => ({ default: m.ProjectShowcase })));
const AMCComparisonSection = lazy(() => import('./components/AMCComparisonSection').then(m => ({ default: m.AMCComparisonSection })));
const ContactView = lazy(() => import('./components/ContactView').then(m => ({ default: m.ContactView })));
const StatutoryView = lazy(() => import('./components/StatutoryView').then(m => ({ default: m.StatutoryView })));
const PrivacyPolicyView = lazy(() => import('./components/PrivacyPolicyView').then(m => ({ default: m.PrivacyPolicyView })));
const TermsView = lazy(() => import('./components/TermsView').then(m => ({ default: m.TermsView })));
const BookingSystem = lazy(() => import('./components/BookingSystem').then(m => ({ default: m.BookingSystem })));
const ServiceDetailModal = lazy(() => import('./components/ServiceDetailModal').then(m => ({ default: m.ServiceDetailModal })));
const VideoTourModal = lazy(() => import('./components/VideoTourModal').then(m => ({ default: m.VideoTourModal })));

// Scroll to top and trigger section reveal animations whenever route changes
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    const timer = setTimeout(() => {
      initScrollReveal();
    }, 60);
    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingType, setBookingType] = useState<'emergency' | 'repair' | 'amc' | 'new_install'>('repair');
  const [videoTourOpen, setVideoTourOpen] = useState(false);
  const [activeCaseStudyTab, setActiveCaseStudyTab] = useState<number>(0);


  // Backward compatibility: If someone visited with a legacy hash like #about or #services, redirect to /about, /services
  useEffect(() => {
    if (window.location.hash) {
      const hash = window.location.hash.replace(/^#\/?/, '').toLowerCase();
      const valid = ['about', 'services', 'projects', 'amc', 'faqs', 'contact', 'privacy', 'terms', 'statutory'];
      if (valid.includes(hash)) {
        navigate(`/${hash}`, { replace: true });
      }
    }
  }, [navigate]);

  // Global Escape key listener to close modals
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (bookingModalOpen) setBookingModalOpen(false);
        if (videoTourOpen) setVideoTourOpen(false);
        if (selectedService) setSelectedService(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [bookingModalOpen, videoTourOpen, selectedService]);

  // Quick helper to trigger booking modal
  const handleOpenBooking = (type: 'emergency' | 'repair' | 'amc' | 'new_install' = 'repair') => {
    setBookingType(type);
    setBookingModalOpen(true);
  };

  const scrollToServices = () => {
    navigate('/services');
  };

  return (
    <div className="min-h-screen bg-[#00153f] text-[#c0c0eb] flex flex-col font-sans selection:bg-[#f7985f] selection:text-slate-950">
      <ScrollToTop />

      {/* Sticky Header with Realar Styling & Emergency Dispatch Hotline */}
      <Navbar
        onOpenBooking={handleOpenBooking}
      />

      {/* Main View Router with Onload Page & Section Animations */}
      <main key={location.pathname} className="flex-1 animate-page-enter">
        <Suspense fallback={<div className="min-h-screen bg-[#00153f]" />}>
          <Routes location={location}>
            <Route
              path="/"
              element={
                <>
                  {/* 1. Hero Section (Rounded Card, 2-line title, Play/Pause Button, Carousel indicators) */}
                  <Hero
                    onOpenBooking={handleOpenBooking}
                    onExploreServices={scrollToServices}
                  />

                  {/* 2. Stats Bar (Light Slate Background: 250+ Projects, 950+ Installations, 18k+ Satisfied Clients, 2k+ Active AMC) */}
                  <StatsBar />

                  {/* 3. About Us Section (Watermark "ABOUT", Statement, 3D Copper Motif, 3 Feature Cards) */}
                  <AboutSection
                    onLearnMore={() => navigate('/about')}
                    onBookAudit={() => handleOpenBooking('repair')}
                  />

                  {/* 4. Capabilities Section ("HVAC System Capabilities", Watermark "SERVICES", 6 Chamfered Polygon Cards) */}
                  <CapabilitiesChamferSection />

                  {/* 5. Featured Services Section (Watermark "SERVICES", 6 Cards with Sleek Shining Border) */}
                  <ServicesSection
                    onOpenBooking={handleOpenBooking}
                    onViewAllServices={() => navigate('/services')}
                  />

                  {/* 6. Our Clients Section (Watermark "CLIENTS", White Background, Auto-rotation) */}
                  <ClientMarquee />

                  {/* 7. CTA Section (Glowing Horizon Arc, Dual-tone Headline, "Connect Us" Button) */}
                  <ConsultingBanner
                    onOpenBooking={handleOpenBooking}
                    onContact={() => navigate('/contact')}
                  />

                  {/* 8. Testimonials Section ("What Our Clients Say", Light Slate Background, Watermark "TESTIMONIALS") */}
                  <TestimonialsSection />

                  {/* 9. Frequently Asked Questions (Commercial HVAC, 60-min SLA, Lokring, AMC) */}
                  <FAQSection
                    onOpenBooking={handleOpenBooking}
                    onContact={() => navigate('/contact')}
                    isFaqPage={false}
                  />
                </>
              }
            />

            {/* Dedicated About Us Page View */}
            <Route
              path="/about"
              element={
                <div className="w-full">
                  <InnerPageHero
                    singleLineTitle={true}
                    title="Pioneering Complex HVAC Systems & Climate Control"
                    description="Founded in Pune, B&B Constro is a premier HVAC engineering contractor delivering turnkey commercial VRV, industrial chillers, and precision climate solutions across Maharashtra."
                    imageSrc="/assets/about-us-banner.png"
                    imageAlt="B&B Constro HVAC Architecture & Climate Engineering"
                    imageClassName="w-full h-full object-cover object-right opacity-60 brightness-100 contrast-105 transition-all duration-700"
                  />
                  <WhoWeAreSection />
                  <VisionMissionSection />
                  <ValuesSection />
                  <WhyChooseUsSection />
                  <ClientMarquee isAboutPage={true} />
                </div>
              }
            />

            {/* Dedicated Why Choose Us Page (Under About Us) */}
            <Route
              path="/about/why-choose-us"
              element={
                <WhyChooseUsView
                  onOpenBooking={handleOpenBooking}
                  onContact={() => navigate('/contact')}
                />
              }
            />
            <Route
              path="/why-choose-us"
              element={<Navigate to="/about/why-choose-us" replace />}
            />

            {/* Dedicated Leadership Page (Under About Us) */}
            <Route
              path="/about/leadership"
              element={
                <LeadershipView
                  onOpenBooking={handleOpenBooking}
                  onContact={() => navigate('/contact')}
                />
              }
            />
            <Route
              path="/leadership"
              element={<Navigate to="/about/leadership" replace />}
            />

            {/* Dedicated Our Clients Page View */}
            <Route
              path="/clients"
              element={
                <div className="w-full">
                  <InnerPageHero
                    title="Our Clients & Strategic Partnerships"
                    description="Trusted by over 100+ premier commercial enterprises, IT SEZ campuses, industrial plants, and luxury hospitality destinations across Maharashtra."
                    imageSrc="/assets/clients-banner.jpg"
                    imageAlt="B&B Constro Enterprise Tech Park Clients Campus"
                    imageClassName="w-full h-full object-cover object-right opacity-60 brightness-100 contrast-105 transition-all duration-700"
                  />
                  <ClientMarquee isDedicatedPage={true} />
                </div>
              }
            />
            <Route
              path="/our-clients"
              element={<Navigate to="/clients" replace />}
            />

            {/* Dedicated Services & Capabilities Page View */}
            <Route
              path="/services"
              element={
                <div className="w-full">
                  <InnerPageHero
                    title="HVAC Services & Engineering Capabilities"
                    description="From central chiller plants and commercial VRV/VRF systems to cleanroom AHU pressurisation, basement ventilation, and 24/7 breakdown SLAs."
                    imageSrc="/assets/services-banner.jpg"
                    imageAlt="B&B Constro Commercial Rooftop Chiller & VRV Engineering Capabilities"
                    imageClassName="w-full h-full object-cover object-right opacity-60 brightness-100 contrast-105 transition-all duration-700"
                  />
                  <ServicesSection
                    onOpenBooking={handleOpenBooking}
                    isCapabilitiesPage={true}
                  />
                </div>
              }
            />

            {/* Dedicated Success Stories / Projects Page View */}
            <Route
              path="/projects"
              element={
                <div className="w-full">
                  <InnerPageHero
                    title="HVAC Success Stories & Client Milestones"
                    description="Over 250 diverse projects delivered with 99.8% cooling reliability across corporate towers, industrial cleanrooms, IT SEZs, and luxury residential estates."
                    imageSrc="/assets/projects-banner.jpg"
                    imageAlt="B&B Constro Delivered Landmark Glass Skyscraper Projects"
                    imageClassName="w-full h-full object-cover object-right opacity-60 brightness-100 contrast-105 transition-all duration-700"
                  />
                  <ProjectShowcase
                    onOpenBooking={() => handleOpenBooking('new_install')}
                    onSelectCaseStudy={(idx) => {
                      setActiveCaseStudyTab(idx);
                      const el = document.getElementById('featured-case-studies') || document.getElementById('projects-section');
                      if (el) {
                        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }}
                  />
                  <CaseStudiesSection
                    activeTab={activeCaseStudyTab}
                    onSelectTab={setActiveCaseStudyTab}
                    onOpenBooking={() => handleOpenBooking('new_install')}
                  />
                  <ClientMarquee />
                  <TestimonialsSection isDarkTheme={true} />
                </div>
              }
            />

            {/* Dedicated FAQs Page View */}
            <Route
              path="/faqs"
              element={
                <div className="w-full">
                  <InnerPageHero
                    title="Everything You Need to Know"
                    description="Learn about our 60-minute emergency response SLA, Lokring braze-free piping safety, Daikin/Voltas OEM spare supplies, and AMC service schedules."
                    imageSrc="/assets/faqs-banner.jpg"
                    imageAlt="B&B Constro Architectural HVAC Blueprints & Technical Consultation"
                    imageClassName="w-full h-full object-cover object-right opacity-60 brightness-100 contrast-105 transition-all duration-700"
                  />
                  <FAQSection
                    onOpenBooking={handleOpenBooking}
                    onContact={() => navigate('/contact')}
                    isFaqPage={true}
                  />
                  <ConsultingBanner
                    onOpenBooking={handleOpenBooking}
                    onContact={() => navigate('/contact')}
                  />
                </div>
              }
            />

            {/* Dedicated AMC Plans Page View */}
            <Route
              path="/amc"
              element={
                <div className="w-full">
                  <InnerPageHero
                    title="Annual Maintenance Contracts (AMC)"
                    description="Structured multi-visit preventive maintenance programs ensuring peak cooling efficiency, 20% lower electricity draw, and zero unplanned system outages."
                    imageSrc="/assets/amc-banner.jpg"
                    imageAlt="B&B Constro Commercial VRV Annual Maintenance Servicing"
                    imageClassName="w-full h-full object-cover object-right opacity-60 brightness-100 contrast-105 transition-all duration-700"
                  />
                  <AMCComparisonSection
                    onBookAMC={() => handleOpenBooking('amc')}
                  />
                  <ConsultingBanner
                    onOpenBooking={handleOpenBooking}
                    onContact={() => navigate('/contact')}
                  />
                </div>
              }
            />

            {/* Dedicated Contact & Pune Office Page View */}
            <Route
              path="/contact"
              element={
                <div className="w-full">
                  <ContactView
                    onOpenBooking={handleOpenBooking}
                  />
                </div>
              }
            />

            {/* Dedicated Statutory Compliance Page View */}
            <Route
              path="/statutory"
              element={
                <div className="w-full">
                  <StatutoryView
                    onBack={() => navigate('/')}
                  />
                </div>
              }
            />

            {/* Dedicated Privacy Policy Page View */}
            <Route
              path="/privacy"
              element={
                <div className="w-full">
                  <PrivacyPolicyView
                    onBack={() => navigate('/')}
                  />
                </div>
              }
            />

            {/* Dedicated Terms Page View */}
            <Route
              path="/terms"
              element={
                <div className="w-full">
                  <TermsView
                    onBack={() => navigate('/')}
                  />
                </div>
              }
            />

            {/* Fallback to Home for unknown routes */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </main>

      {/* Footer styled identically to Realar light slate container */}
      <Footer
        onSelectService={(service) => setSelectedService(service)}
        onOpenBooking={handleOpenBooking}
      />

      {/* Service Detail Modal (Loaded on Demand) */}
      <Suspense fallback={null}>
        {selectedService && (
          <ServiceDetailModal
            service={selectedService}
            onClose={() => setSelectedService(null)}
            onBookService={handleOpenBooking}
          />
        )}
      </Suspense>

      {/* 360 Engineering Video Tour Modal (Loaded on Demand) */}
      <Suspense fallback={null}>
        {videoTourOpen && (
          <VideoTourModal
            isOpen={videoTourOpen}
            onClose={() => setVideoTourOpen(false)}
            onBookAudit={() => handleOpenBooking('repair')}
          />
        )}
      </Suspense>

      {/* Dedicated Booking Popup Modal (Loaded on Demand) */}
      <Suspense fallback={null}>
        {bookingModalOpen && (
          <div
            onClick={(e) => {
              if (e.target === e.currentTarget) setBookingModalOpen(false);
            }}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/65 backdrop-blur-xs overflow-hidden animate-fadeIn"
          >
            <div className="relative w-full max-w-[806px] my-auto">
              <BookingSystem
                initialServiceCategory={bookingType}
                isModal={true}
                onClose={() => setBookingModalOpen(false)}
              />
            </div>
          </div>
        )}
      </Suspense>

    </div>
  );
}

