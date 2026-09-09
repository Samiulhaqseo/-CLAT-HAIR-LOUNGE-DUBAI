import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { TransformationsSection } from './components/TransformationsSection';
import { DubaiExperience } from './components/DubaiExperience';
import { StylistsSection } from './components/StylistsSection';
import { ReviewsSection } from './components/ReviewsSection';
import { BookingSection } from './components/BookingSection';
import { LocationHoursSection } from './components/LocationHoursSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { HairService, Stylist } from './types';

export default function App() {
  const [selectedServiceId, setSelectedServiceId] = useState<string>('french-signature-balayage');
  const [selectedStylistId, setSelectedStylistId] = useState<string>('camille-laurent');

  const scrollToBooking = () => {
    const el = document.getElementById('booking');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectService = (service: HairService) => {
    setSelectedServiceId(service.id);
    scrollToBooking();
  };

  const handleSelectStylist = (stylist: Stylist) => {
    setSelectedStylistId(stylist.id);
    scrollToBooking();
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1C1A17] font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Navigation */}
      <Navbar onBookClick={scrollToBooking} />

      {/* Main Single Page Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onBookClick={scrollToBooking} />

        {/* Services & AED Pricing */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* Real Before & After Transformations */}
        <TransformationsSection />

        {/* The Dubai Luxury Experience & RO Water Standard */}
        <DubaiExperience />

        {/* European & International Master Stylists */}
        <StylistsSection onSelectStylist={handleSelectStylist} />

        {/* Client Reviews & Rating */}
        <ReviewsSection />

        {/* Interactive Booking & Appointment System */}
        <BookingSection
          selectedServiceId={selectedServiceId}
          selectedStylistId={selectedStylistId}
          onServiceChange={setSelectedServiceId}
          onStylistChange={setSelectedStylistId}
        />

        {/* Location, Valet & Hours */}
        <LocationHoursSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Quick Concierge */}
      <FloatingWhatsApp />
    </div>
  );
}
