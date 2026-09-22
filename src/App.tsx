import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsBar } from './components/StatsBar';
import { AboutSection } from './components/AboutSection';
import { VisionMissionSection } from './components/VisionMissionSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { ProjectShowcase } from './components/ProjectShowcase';
import { ServicesSection } from './components/ServicesSection';
import { CapabilitiesChamferSection } from './components/CapabilitiesChamferSection';
import { TeamMembersSection } from './components/TeamMembersSection';
import { ConsultingBanner } from './components/ConsultingBanner';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ClientMarquee } from './components/ClientMarquee';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { AMCComparisonSection } from './components/AMCComparisonSection';
import { BookingSystem } from './components/BookingSystem';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { ContactView } from './components/ContactView';
import { StatutoryView } from './components/StatutoryView';
import { PrivacyPolicyView } from './components/PrivacyPolicyView';
import { TermsView } from './components/TermsView';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { VideoTourModal } from './components/VideoTourModal';
import { ServiceItem } from './types';

// Scroll to top whenever route pathname changes
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

export default function App() {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingType, setBookingType] = useState<'emergency' | 'repair' | 'amc' | 'new_install'>('repair');
  const [videoTourOpen, setVideoTourOpen] = useState(false);

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

  // Quick helper to trigger booking modal
  const handleOpenBooking = (type: 'emergency' | 'repair' | 'amc' | 'new_install' = 'repair') => {
    setBookingType(type);
    setBookingModalOpen(true);
  };

  const scrollToServices = () => {
    navigate('/services');
  };

  return (
    <div className="min-h-screen bg-[#00153f] text-slate-100 flex flex-col font-sans selection:bg-[#f7985f] selection:text-slate-950">
      <ScrollToTop />

      {/* Sticky Header with Realar Styling & Emergency Dispatch Hotline */}
      <Navbar
        onOpenBooking={handleOpenBooking}
      />

      {/* Main View Router */}
      <main className="flex-1">
        <Routes>
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
                />
              </>
            }
          />

          {/* Dedicated About Us Page View */}
          <Route
            path="/about"
            element={
              <div className="py-8 animate-fadeIn">
                <VisionMissionSection />
                <WhyChooseUsSection />
                <TeamMembersSection
                  onContactTeam={() => navigate('/contact')}
                />
                <ClientMarquee />
              </div>
            }
          />

          {/* Dedicated Services & Capabilities Page View */}
          <Route
            path="/services"
            element={
              <div className="py-8 animate-fadeIn">
                <ServicesSection
                  onOpenBooking={handleOpenBooking}
                />
                <CapabilitiesChamferSection />
                <AMCComparisonSection
                  onBookAMC={() => handleOpenBooking('amc')}
                />
              </div>
            }
          />

          {/* Dedicated Success Stories / Projects Page View */}
          <Route
            path="/projects"
            element={
              <div className="py-8 animate-fadeIn">
                <ProjectShowcase
                  onOpenBooking={() => handleOpenBooking('new_install')}
                />
                <CaseStudiesSection
                  onOpenBooking={() => handleOpenBooking('new_install')}
                />
                <ClientMarquee />
                <TestimonialsSection />
              </div>
            }
          />

          {/* Dedicated FAQs Page View */}
          <Route
            path="/faqs"
            element={
              <div className="py-8 animate-fadeIn">
                <FAQSection
                  onOpenBooking={handleOpenBooking}
                  onContact={() => navigate('/contact')}
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
              <div className="py-8 animate-fadeIn">
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
              <div className="animate-fadeIn">
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
              <div className="animate-fadeIn">
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
              <div className="animate-fadeIn">
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
              <div className="animate-fadeIn">
                <TermsView
                  onBack={() => navigate('/')}
                />
              </div>
            }
          />

          {/* Fallback to Home for unknown routes */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Footer styled identically to Realar light slate container */}
      <Footer
        onSelectService={(service) => setSelectedService(service)}
        onOpenBooking={handleOpenBooking}
      />

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onBookService={handleOpenBooking}
      />

      {/* 360 Engineering Video Tour Modal */}
      <VideoTourModal
        isOpen={videoTourOpen}
        onClose={() => setVideoTourOpen(false)}
        onBookAudit={() => handleOpenBooking('repair')}
      />

      {/* Dedicated Booking Popup Modal */}
      {bookingModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-fadeIn">
          <div className="relative w-full max-w-4xl my-8">
            <BookingSystem
              initialServiceCategory={bookingType}
              isModal={true}
              onClose={() => setBookingModalOpen(false)}
            />
          </div>
        </div>
      )}

    </div>
  );
}

