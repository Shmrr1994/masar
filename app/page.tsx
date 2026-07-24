"use client";

import { useState } from "react";

import Navbar from "@/components/layout/navbar/Navbar";


import Hero from "@/components/home/Hero";

import Services from "@/components/home/Services";
import HowItWorks from "@/components/home/HowItWorks";
import Stats from "@/components/home/Stats";
import Coverage from "@/components/home/Coverage";
import WhyMasar from "@/components/home/WhyMasar";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";
import BookingModal from "@/components/sections/BookingModal";

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

        <Coverage />

        <WhyMasar />

        <Testimonials />

        <CTA onOpenBooking={() => openBooking()} />
      </main>

      
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        selectedServiceId={serviceId}
      />
    </div>
  );
}