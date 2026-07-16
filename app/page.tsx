"use client";

import { useState } from "react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import HowItWorks from "../components/sections/HowItWorks";
import Stats from "../components/sections/Stats";
import CoverageMap from "../components/sections/CoverageMap";
import WhyMasar from "../components/sections/WhyMasar";
import Testimonials from "../components/sections/Testimonials";
import CTA from "../components/sections/CTA";
import BookingModal from "../components/sections/BookingModal";

export default function Home() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [serviceId, setServiceId] = useState<string>();

  const openBooking = (id?: string) => {
    setServiceId(id);
    setBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#090D16]">
      <Navbar onOpenBooking={openBooking} />

      <main>
        <Hero onOpenBooking={() => openBooking()} />

        <Services
          onSelectService={(id) => openBooking(id)}
        />

        <HowItWorks />

        <Stats />

        <CoverageMap />

        <WhyMasar />

        <Testimonials />

        <CTA onOpenBooking={() => openBooking()} />
      </main>

      <Footer />

      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        selectedServiceId={serviceId}
      />
    </div>
  );
}