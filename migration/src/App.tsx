import React, { useState } from "react";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import HowItWorks from "./components/sections/HowItWorks";
import Stats from "./components/sections/Stats";
import CoverageMap from "./components/sections/CoverageMap";
import WhyMasar from "./components/sections/WhyMasar";
import Testimonials from "./components/sections/Testimonials";
import CTA from "./components/sections/CTA";
import Footer from "./components/layout/Footer";
import BookingModal from "./components/sections/BookingModal";
import { FAQS } from "./lib/data";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [preselectedServiceId, setPreselectedServiceId] = useState<string | undefined>(undefined);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Triggers booking wizard unconditionally
  const handleOpenBooking = (serviceId?: string) => {
    setPreselectedServiceId(serviceId);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setPreselectedServiceId(undefined);
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div id="app-root" className="min-h-screen bg-[#090D16]">
      {/* Navbar with booking trigger */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main sections layout */}
      <main>
        {/* Hero Banner */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* Services Showcase Card Grid */}
        <Services onSelectService={(serviceId) => handleOpenBooking(serviceId)} />

        {/* Interactive Stepper */}
        <HowItWorks />

        {/* Dynamic Counter Statistics Banner */}
        <Stats />

        {/* Real-time Interactive SVG Coverage Map */}
        <CoverageMap />

        {/* Bento Grid highlighting Platform Advantages */}
        <WhyMasar />

        {/* Authentic Customer Feedback Slider */}
        <Testimonials />

        {/* Dynamic Animated Accordion FAQ Section */}
        <section id="faqs" className="py-24 bg-[#090D16] relative overflow-hidden border-t border-white/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Header Title */}
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-brand-green font-bold text-sm uppercase tracking-wider bg-brand-green-light px-4 py-1.5 rounded-full inline-block mb-4">
                الأسئلة الشائعة
              </span>
              <h2 className="text-3xl font-extrabold font-heading text-white tracking-tight leading-tight">
                لديك استفسارات؟ نحن هنا للإجابة
              </h2>
            </div>

            {/* Accordion List */}
            <div id="faq-accordion-container" className="space-y-4">
              {FAQS.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={index}
                    id={`faq-item-${index}`}
                    className="sleek-card rounded-2xl overflow-hidden transition-all duration-300"
                  >
                    <button
                      id={`faq-toggle-${index}`}
                      onClick={() => toggleFaq(index)}
                      className="w-full py-5 px-6 flex items-center justify-between text-right font-bold text-slate-100 hover:text-brand-green transition-colors cursor-pointer text-sm sm:text-base font-heading gap-4"
                    >
                      <div className="flex items-center gap-3">
                        <HelpCircle className={`w-5 h-5 flex-shrink-0 transition-colors ${isOpen ? "text-brand-green" : "text-slate-500"}`} />
                        <span>{faq.q}</span>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-slate-500 flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-brand-green" : "rotate-0"}`}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                        >
                          <div className="px-6 pb-6 text-xs sm:text-[13.5px] text-slate-300 leading-relaxed font-normal border-t border-white/5 pt-3">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Dual CTA Pathway Cards */}
        <CTA onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* Styled Footnote and Copyrights */}
      <Footer />

      {/* Stateful Simulator Wizard Modal */}
      <AnimatePresence>
        {isBookingOpen && (
          <BookingModal
            isOpen={isBookingOpen}
            onClose={handleCloseBooking}
            selectedServiceId={preselectedServiceId}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
