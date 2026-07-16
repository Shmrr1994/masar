import React from "react";
import { ArrowLeft, CheckCircle, Truck, Star } from "lucide-react";
import { motion } from "framer-motion";

interface CTAProps {
  onOpenBooking: () => void;
}

export default function CTA({ onOpenBooking }: CTAProps) {
  return (
    <section id="cta" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative grids */}
      <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[-10%] w-96 h-96 bg-brand-green/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-[-20%] right-[-10%] w-96 h-96 bg-emerald-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Card 1: Request Service (Col 6) */}
          <motion.div
            id="cta-customer-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
            className="lg:col-span-6 bg-gradient-to-br from-emerald-950/80 to-slate-950 p-8 md:p-12 rounded-3xl border border-emerald-900/30 flex flex-col justify-between"
          >
            <div className="space-y-6 text-right">
              <span className="text-emerald-400 font-bold text-xs uppercase bg-emerald-950 px-3 py-1.5 rounded-lg border border-emerald-900/40 inline-block">
                للعملاء والأفراد
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white leading-tight">
                هل تبحث عن سطحة أو دينا نقل عفش؟
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed font-normal">
                لا داعي للبحث العشوائي والاتصالات المتكررة. أرسل طلبك الآن واحصل على أفضل عروض الأسعار التنافسية المباشرة من السائقين القريبين منك في ثوانٍ معدودة.
              </p>

              {/* Checklist items */}
              <ul className="space-y-3 pt-2 text-xs text-slate-300">
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>تأمين شامل ومجاني على حمولتك أو مركبتك</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>تتبع مباشر خطوة بخطوة عبر نظام تحديد المواقع (GPS)</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>دفع إلكتروني آمن وموثق 100%</span>
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <button
                id="btn-cta-booking"
                onClick={onOpenBooking}
                className="bg-brand-green hover:bg-brand-green-hover text-white w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-[15px] shadow-lg shadow-emerald-950 transition-all duration-200 hover:shadow-xl hover:shadow-emerald-950 flex items-center justify-center gap-2 cursor-pointer sleek-glow-btn"
              >
                <span>اطلب خدمة فورية الآن</span>
                <ArrowLeft className="w-4 h-4 rotate-180" />
              </button>
            </div>
          </motion.div>

          {/* Card 2: Driver recruitment (Col 6) */}
          <motion.div
            id="cta-driver-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
            className="lg:col-span-6 bg-[#0D1321]/60 p-8 md:p-12 rounded-3xl border border-white/5 flex flex-col justify-between"
          >
            <div className="space-y-6 text-right">
              <span className="text-brand-green font-bold text-xs uppercase bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800 inline-block">
                للسائقين وملاك المركبات
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white leading-tight">
                انضم كقائد مركبة وضاعف دخلك اليومي
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed font-normal">
                هل تمتلك سطحة، دينا، أو شاحنة نقل عفش؟ مسار تمنحك وصولاً مباشراً لآلاف العملاء في منطقتك، مع حرية تامة في اختيار العروض المناسبة والتحكم في أوقات عملك.
              </p>

              {/* Driver checklists */}
              <ul className="space-y-3 pt-2 text-xs text-slate-300">
                <li className="flex items-center gap-2.5">
                  <Truck className="w-4 h-4 text-brand-green flex-shrink-0" />
                  <span>طلبات يومية مستمرة في مدينتك لتقليل المسافات الفارغة</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Star className="w-4 h-4 fill-brand-green text-brand-green flex-shrink-0" />
                  <span>نظام تقييم ومكافآت دورية لأكثر القادة تميزاً</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-brand-green flex-shrink-0" />
                  <span>استلام فوري ومضمون للأرباح دون تأخير</span>
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <a
                id="btn-cta-driver-join"
                href="https://wa.me/966500000000"
                target="_blank"
                rel="noreferrer"
                className="bg-white hover:bg-slate-100 text-slate-900 w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-[15px] transition-all duration-200 text-center flex items-center justify-center gap-2"
              >
                <span>سجل معنا كقائد مركبة</span>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
