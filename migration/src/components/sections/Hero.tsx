import React from "react";
import { ArrowLeft, ShieldCheck, Star, Users, MapPin, Truck } from "lucide-react";
import { motion } from "motion/react";

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden bg-[#090D16] text-white"
    >
      {/* Decorative background grid and glowing orbs */}
      <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />
      
      {/* Radiant ambient gradients */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-emerald-700/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-emerald-600/10 blur-[150px] pointer-events-none" />

      {/* Decorative abstract lines or geometric element */}
      <div className="absolute right-0 bottom-0 top-0 w-1/3 opacity-10 bg-gradient-to-l from-emerald-500/20 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero text contents (Col 7) */}
          <motion.div
            id="hero-text-container"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 text-right flex flex-col items-start lg:items-start"
          >
            {/* Soft badge indicating localization */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-800/30 text-emerald-400 text-xs font-semibold mb-6 shadow-inner"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>منصة سعودية 100% للخدمات اللوجستية</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading tracking-tight text-white leading-[1.15] mb-6"
            >
              كل مشوار له <span className="text-transparent bg-clip-text bg-gradient-to-l from-emerald-400 to-emerald-500">مسار</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg lg:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mb-8"
            >
              منصة سعودية ذكية تربطك بأفضل خدمات نقل السيارات، السطحات، الشاحنات، ونقل الأثاث في جميع أنحاء المملكة. نضمن لك الخدمة الأسرع، والأسعار الأكثر تنافسية بضغطة زر.
            </motion.p>

            {/* Action buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-10"
            >
              <button
                id="hero-cta-btn"
                onClick={onOpenBooking}
                className="bg-brand-green hover:bg-brand-green-hover text-white px-8 py-4 rounded-xl font-bold text-[15px] transition-all duration-300 shadow-lg shadow-emerald-950/50 hover:shadow-xl hover:shadow-emerald-950/70 active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2 sleek-glow-btn"
              >
                <span>اطلب الآن (تسعير فوري)</span>
                <ArrowLeft className="w-4 h-4 rotate-180" />
              </button>
              
              <a
                id="hero-secondary-btn"
                href="#services"
                className="bg-slate-900/60 hover:bg-slate-900 text-slate-200 hover:text-white px-8 py-4 rounded-xl font-semibold text-[15px] border border-white/5 hover:border-white/10 transition-all duration-200 text-center flex items-center justify-center gap-2"
              >
                <span>استكشف الخدمات</span>
              </a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 sm:gap-6 border-t border-slate-800/80 pt-8 w-full max-w-lg"
            >
              <div className="flex flex-col gap-1 items-start">
                <div className="flex items-center gap-1.5 text-emerald-400 mb-1">
                  <ShieldCheck className="w-5 h-5 flex-shrink-0" />
                  <span className="font-bold text-sm text-slate-200">تأمين شامل</span>
                </div>
                <p className="text-xs text-slate-400">على كافة الحمولات</p>
              </div>
              
              <div className="flex flex-col gap-1 items-start">
                <div className="flex items-center gap-1.5 text-emerald-400 mb-1">
                  <Star className="w-5 h-5 fill-emerald-400 flex-shrink-0" />
                  <span className="font-bold text-sm text-slate-200">98% تقييم</span>
                </div>
                <p className="text-xs text-slate-400">من آلاف العملاء</p>
              </div>

              <div className="flex flex-col gap-1 items-start">
                <div className="flex items-center gap-1.5 text-emerald-400 mb-1">
                  <Users className="w-5 h-5 flex-shrink-0" />
                  <span className="font-bold text-sm text-slate-200">موثق بالكامل</span>
                </div>
                <p className="text-xs text-slate-400">مرخص من هيئة النقل</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Interactive Hero Widget: App Simulation (Col 5) */}
          <motion.div
            id="hero-widget-container"
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.4 }}
            className="lg:col-span-5 w-full flex justify-center"
          >
            <div className="relative w-full max-w-md bg-[#0D1321] rounded-3xl border border-white/5 shadow-2xl overflow-hidden p-6">
              {/* Phone Status Bar Mock */}
              <div className="flex justify-between items-center text-[11px] text-slate-500 font-mono mb-4 border-b border-slate-900 pb-3">
                <span className="font-semibold text-emerald-500">● مباشر</span>
                <span className="text-slate-400">MASAR App</span>
                <span>12:00 م</span>
              </div>

              {/* Simulated Map Background */}
              <div className="relative h-44 w-full bg-slate-900 rounded-2xl overflow-hidden border border-slate-850 flex items-center justify-center">
                {/* Visual grid representing streets */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />
                {/* Street Lines */}
                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-800" />
                <div className="absolute top-0 bottom-0 left-1/3 w-0.5 bg-slate-800" />
                <div className="absolute top-0 bottom-0 left-2/3 w-0.5 bg-slate-800" />
                
                {/* Glowing Location Pins */}
                <div className="absolute top-1/3 left-1/4 flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping absolute" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500 border-2 border-slate-950 z-10" />
                  <span className="text-[10px] bg-slate-950/80 px-1.5 py-0.5 rounded mt-1 border border-slate-800 text-slate-300 font-sans font-medium">موقعك</span>
                </div>

                <div className="absolute bottom-1/4 right-1/4 flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-amber-500 animate-ping absolute" />
                  <div className="w-3 h-3 rounded-full bg-amber-500 border-2 border-slate-950 z-10" />
                  <span className="text-[10px] bg-slate-950/80 px-1.5 py-0.5 rounded mt-1 border border-slate-800 text-slate-300 font-sans font-medium">الوجهة</span>
                </div>

                {/* Simulated Truck Moving */}
                <motion.div
                  initial={{ left: "25%", top: "33%" }}
                  animate={{ left: "70%", top: "68%" }}
                  transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                  className="absolute z-20 flex items-center justify-center p-1.5 bg-brand-green text-white rounded-full shadow-lg border border-emerald-400"
                >
                  <Truck className="w-4 h-4" />
                </motion.div>
              </div>

              {/* Simulated Live Marketplace Offers Widget */}
              <div className="mt-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400">العروض الحية النشطة</span>
                  <span className="text-xs text-emerald-500 font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                    3 سائقين جاهزين
                  </span>
                </div>

                {/* Driver offer row */}
                <div className="bg-slate-900 border border-slate-800/60 rounded-xl p-3 flex items-center justify-between hover:border-emerald-900/40 transition-colors">
                  <div className="flex items-center gap-2.5">
                    <img
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&h=80&q=80"
                      alt="Driver"
                      className="w-10 h-10 rounded-full object-cover border border-slate-800 referrer-policy='no-referrer'"
                    />
                    <div className="text-right">
                      <p className="text-xs font-bold text-slate-200">سعيد الشهراني</p>
                      <p className="text-[10px] text-slate-400">سطحة هيدروليك • 4.9⭐</p>
                    </div>
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-bold text-emerald-400">180 ريال</p>
                    <p className="text-[9px] text-slate-500">وصول خلال 8 د</p>
                  </div>
                </div>

                {/* Booking call to action inside the phone mock */}
                <button
                  onClick={onOpenBooking}
                  className="w-full py-3 bg-slate-900/80 hover:bg-brand-green/10 border border-brand-green/20 text-brand-green rounded-xl text-xs font-bold transition-all duration-200 hover:text-white flex items-center justify-center gap-2"
                >
                  <span>جرب محاكي الطلبات الفوري</span>
                  <ArrowLeft className="w-3.5 h-3.5 rotate-180" />
                </button>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
