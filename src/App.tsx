/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { QuickContactBar } from './components/QuickContactBar';
import { ServicesSection } from './components/ServicesSection';
import { PhysioGallerySection } from './components/PhysioGallerySection';
import { ConditionsSection } from './components/ConditionsSection';
import { HowItWorks } from './components/HowItWorks';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AboutSection } from './components/AboutSection';
import { PatientJourney } from './components/PatientJourney';
import { ReviewsSection } from './components/ReviewsSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { StickyBottomBar } from './components/StickyBottomBar';
import { BookingModal } from './components/BookingModal';
import { PolicyModal } from './components/PolicyModal';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedRequirement, setSelectedRequirement] = useState('');
  const [policyType, setPolicyType] = useState<'privacy' | 'terms' | null>(null);

  const handleOpenBooking = (requirement?: string) => {
    setSelectedRequirement(requirement || '');
    setBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingModalOpen(false);
    setSelectedRequirement('');
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 flex flex-col selection:bg-teal-100 selection:text-teal-900">
      {/* Header with Navigation & Instant CTA */}
      <Header onOpenBooking={handleOpenBooking} />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* Emergency / Quick Contact Bar */}
        <QuickContactBar />

        {/* 8 Core Home Visit Services with Photo Thumbnails */}
        <ServicesSection onOpenBooking={handleOpenBooking} />

        {/* Real Home Physiotherapy in Action Showcase */}
        <PhysioGallerySection onOpenBooking={handleOpenBooking} />

        {/* 12 Conditions Treated */}
        <ConditionsSection onOpenBooking={handleOpenBooking} />

        {/* 3-Step Process */}
        <HowItWorks />

        {/* 6 Why Choose Us Points */}
        <WhyChooseUs />

        {/* About Section */}
        <AboutSection onOpenBooking={() => handleOpenBooking()} />

        {/* Patient Journey: Assessment → Treatment Plan → Physiotherapy Session → Exercise Guidance → Progress Monitoring */}
        <PatientJourney />

        {/* Testimonials with Sample Template Transparency */}
        <ReviewsSection />

        {/* 8 FAQs Accordion */}
        <FaqSection />

        {/* Contact, Booking Form & Pune Map */}
        <ContactSection onOpenBookingModal={handleOpenBooking} />
      </main>

      {/* Semantic Footer */}
      <Footer
        onOpenPolicy={(type) => setPolicyType(type)}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Sticky Mobile Conversion Bar & Floating Desktop Widgets */}
      <StickyBottomBar onOpenBooking={() => handleOpenBooking()} />

      {/* Appointment Request Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={handleCloseBooking}
        prefilledRequirement={selectedRequirement}
      />

      {/* Privacy Policy & Terms Modal */}
      <PolicyModal
        type={policyType}
        onClose={() => setPolicyType(null)}
      />
    </div>
  );
}

