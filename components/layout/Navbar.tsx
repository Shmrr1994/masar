import React, { useState, useEffect } from "react";
import { Menu, X, ArrowLeft, PhoneCall } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  onOpenBooking: (serviceId?: string) => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "الرئيسية", href: "#hero" },
    { label: "خدماتنا", href: "#services" },
    { label: "كيف نعمل", href: "#how-it-works" },
    { label: "تغطيتنا الجغرافية", href: "#coverage" },
    { label: "لماذا مسار؟", href: "#why-masar" },
    { label: "الآراء", href: "#testimonials" },
  ];

  return (
    <>
      <header
        id="navbar-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-xl shadow-xl border-b border-gray-200 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              id="navbar-logo"
              href="#hero"
              className="flex items-center gap-2 group focus:outline-none"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-green flex items-center justify-center shadow-lg shadow-emerald-500/10 group-hover:scale-105 transition-transform duration-200">
                <span className="text-white font-bold text-xl tracking-tight select-none">M</span>
              </div>
              <div className="flex flex-col text-right">
                <span className={`text-xl font-bold tracking-tight leading-none ${ isScrolled ? "text-gray-900" : "text-white" }`} > مسار <span className="text-brand-green">|</span> MASAR </span>
                <span className="text-[9px] text-slate-400 font-medium leading-none mt-1">
                  كل مشوار له مسار
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav id="navbar-desktop-nav" className="hidden lg:flex items-center gap-8">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  id={`nav-item-${index}`}
                  href={item.href}
                  className={`text-[15px] font-medium ${
isScrolled
? "text-gray-700 hover:text-green-700" : "text-white hover:text-green-400"

} transition-colors duration-200 focus:outline-none relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-brand-green after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-right`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Actions */}
            <div id="navbar-actions" className="hidden sm:flex items-center gap-4">
              <a
                href="tel:92000000"
                className={`text-[15px] font-medium transition-colors duration-200 relative py-1 ${isScrolled ? "text-gray-700 hover:text-green-700" : "text-white hover:text-green-400" }`}              >
                <PhoneCall className="w-4 h-4 text-brand-green" />
                <span>92000000</span>
              </a>
              <button
                id="navbar-cta-btn"
                onClick={() => onOpenBooking()}
                className="bg-brand-green hover:bg-brand-green-hover text-white px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 shadow-md shadow-emerald-950/10 hover:shadow-lg hover:shadow-emerald-950/20 active:scale-[0.98] cursor-pointer flex items-center gap-2 sleek-glow-btn"
              >
                <span>اطلب خدمة الآن</span>
                <ArrowLeft className="w-4 h-4 rotate-180" />
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                id="navbar-mobile-cta-btn"
                onClick={() => onOpenBooking()}
                className="bg-brand-green hover:bg-brand-green-hover text-white px-4 py-2 rounded-lg font-medium text-xs transition-all duration-200 shadow-sm sleek-glow-btn"
              >
                اطلب خدمة
              </button>
              <button
                id="navbar-mobile-toggle"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-slate-300 hover:text-brand-green focus:outline-none rounded-lg hover:bg-slate-800/40 transition-colors"
                aria-label="القائمة"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Slide-over */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              id="mobile-drawer-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-45 lg:hidden"
            />

            {/* Drawer */}
            <motion.div
              id="mobile-drawer-container"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 bottom-0 right-0 w-80 max-w-[85vw] bg-[#0B0F17] border-l border-white/5 z-50 shadow-2xl flex flex-col p-6 lg:hidden"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-brand-green flex items-center justify-center">
                    <span className="text-white font-bold text-base">M</span>
                  </div>
                  <span className="text-lg font-bold font-heading text-white">مسار | MASAR</span>
                </div>
                <button
                  id="mobile-drawer-close"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800/40 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto py-2">
                <nav className="flex flex-col gap-4">
                  {navItems.map((item, index) => (
                    <a
                      key={index}
                      id={`mobile-nav-item-${index}`}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-base font-medium text-slate-200 hover:text-brand-green py-3 px-4 rounded-xl hover:bg-slate-900/60 transition-all duration-200 border-r-2 border-transparent hover:border-brand-green"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>

              <div className="border-t border-white/5 pt-6 flex flex-col gap-4">
                <a
                  href="tel:92000000"
                  className="flex items-center justify-center gap-3 text-slate-200 hover:text-brand-green bg-slate-900/40 border border-white/5 py-3 rounded-xl text-sm font-medium transition-colors"
                >
                  <PhoneCall className="w-4 h-4 text-brand-green" />
                  <span>دعم العملاء: 92000000</span>
                </a>
                <button
                  id="mobile-drawer-cta"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full bg-brand-green hover:bg-brand-green-hover text-white py-3.5 rounded-xl font-medium text-sm transition-all duration-200 shadow-md text-center flex items-center justify-center gap-2 sleek-glow-btn"
                >
                  <span>طلب خدمة الآن</span>
                  <ArrowLeft className="w-4 h-4 rotate-180" />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
