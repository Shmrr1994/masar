import React from "react";
import { Zap, ShieldCheck, Percent, UserCheck, Headphones } from "lucide-react";
import { WHY_REASONS, WhyReason } from "../../lib/data";
import { motion } from "framer-motion";

export default function WhyMasar() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
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

  // Icon selector helper
  const getReasonIcon = (iconName: string) => {
    switch (iconName) {
      case "Zap":
        return <Zap className="w-5 h-5 text-emerald-600" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-5 h-5 text-emerald-600" />;
      case "CirclePercent":
        return <Percent className="w-5 h-5 text-emerald-600" />;
      case "UserCheck":
        return <UserCheck className="w-5 h-5 text-emerald-600" />;
      case "Headphones":
        return <Headphones className="w-5 h-5 text-emerald-600" />;
      default:
        return <Zap className="w-5 h-5 text-emerald-600" />;
    }
  };

  return (
    <section id="why-masar" className="py-24 bg-[#090D16] relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-brand-green font-bold text-sm uppercase tracking-wider bg-brand-green-light px-4 py-1.5 rounded-full inline-block mb-4">
            لماذا مسار؟
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white tracking-tight mb-4 leading-tight">
            نحن نضع معايير جديدة للخدمات اللوجستية
          </h2>
          <p className="text-base sm:text-lg text-slate-400 font-normal">
            تجمع مسار بين الابتكار التقني واحترافية النقل لنقدم لك تجربة متميزة وآمنة تلبي تطلعاتك تماماً.
          </p>
        </div>

        {/* Bento/Modern Grid */}
        <motion.div
          id="why-masar-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {WHY_REASONS.map((reason: WhyReason) => (
            <motion.div
              key={reason.id}
              id={`why-card-${reason.id}`}
              variants={itemVariants}
              className="sleek-card rounded-2xl p-8 group transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                {/* Icon Container with glowing ring on hover */}
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-white/5 text-brand-green flex items-center justify-center flex-shrink-0 group-hover:bg-brand-green group-hover:text-white transition-all duration-300">
                  {getReasonIcon(reason.iconName)}
                </div>

                {/* Details */}
                <div className="text-right">
                  <h3 className="text-lg font-bold font-heading text-white mb-2 group-hover:text-brand-green transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-slate-400 text-[13.5px] leading-relaxed font-normal">
                    {reason.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional security note */}
        <div className="mt-16 bg-[#0D1321] text-emerald-100 p-6 md:p-8 rounded-3xl border border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-right">
            <h4 className="text-lg font-bold text-white mb-1 font-heading">مستندات وتراخيص حكومية معتمدة</h4>
            <p className="text-xs text-slate-300 max-w-2xl font-normal leading-relaxed">
              تعمل مسار بموجب تراخيص رسمية من الهيئة العامة للنقل في المملكة العربية السعودية. جميع رحلاتنا وعملياتنا مسجلة ومراقبة لضمان أعلى مستويات الالتزام والتنظيم القانوني.
            </p>
          </div>
          <div className="flex-shrink-0 bg-brand-green hover:bg-brand-green-hover text-white px-5 py-2.5 rounded-xl text-xs font-bold shadow border border-emerald-500/30">
            مرخص من الهيئة العامة للنقل
          </div>
        </div>

      </div>
    </section>
  );
}
